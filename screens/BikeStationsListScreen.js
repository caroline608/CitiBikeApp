import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

// import 3rd party libraries
import { SearchBar } from 'react-native-elements'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

// import our custom functions
import { bikeStationInformation } from '../helpers/CitiBikeAPI'

export default class BikeStationsListScreen extends Component {
  constructor(props) {
    super(props)
    // initialize state variables
    this.state = {
      stations: [], // array of stations
      filteredStations: [], // stations for filtered search
      searchText: '', // keeps track of text in search bar
    }
  }

  componentDidMount() {
    super.componentDidMount
    bikeStationInformation()
      .then((results) => {
        this.setState({
          stations: results,
          filteredStations: results
        })
      })
  }

  static navigationOptions = {
    title: 'CitiBike Stations'
  }

  filterSearch = (text) => {
    const filterArray = this.state.stations.filter((station) => station.name.toLowerCase().includes(text.toLowerCase()))
    this.setState({
      searchText: text,
      filteredStations: filterArray
    })
  }

  // didSelectItem = () => {
  //   console.log(item selected);
  // }

  render() {
    return(
      <View>
        <SearchBar
          clearIcon={true}
          round
          lightTheme
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='search for citibike'
          onClear={() => this.setState({searchText : ''})}
          value={this.state.searchText}
          onChangeText={(text) => this.filterSearch(text)}
        />
        <FlatList
          data={this.state.filteredStations}
          renderItem={({item}) => <Text
                                      style={styles.item}
                                      onPress={()=> this.props.navigation.navigate('Details', {
                                      station: item
                                    })}
                                      >
                                        {item.name}
                                  </Text>}
          keyExtractor={item => item.station_id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10
  }
})
