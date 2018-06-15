export function bikeStationInformation() {
  return fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
  .then(response => response.json())
  .then(jsonData => {
    const data = jsonData['data']
    const results = data['stations']

    let objects = []

    for(let index in results) {
      let object = {
        station: results[index],
        coordinate: {
          latitude: results[index].lat,
          longitude: results[index].lon,
        }
      }
      objects.push(object)
    }
    //return objects
    return results
  })
  .catch(err => console.error(err))
}

// export function bikeStationStatus() {
//   return fetch('https://gbfs.citibikenyc.com/gbfs/en/station_status.json')
//     .then(response => response.json())
//     .then(jsonData => {
//       const data = jsonData['data']
//       const stationsStatus = data['stations']
//       return stationsStatus
//     })
//     .catch(err => console.error(err))
// }
