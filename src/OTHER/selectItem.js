import beerType from "../OBJECTS/beerType";

export default function(id,pagePath) {
  
    if (id <= 60) {
        pagePath(`${beerType[0].path}/single_beer/id=:${id}`)
      }else if (id >= 61 && id <= 120) {
        pagePath(`${beerType[1].path}/single_beer/id=:${id}`)
      }else if (id >= 121 && id <= 180) {
        pagePath(`${beerType[2].path}/single_beer/id=:${id}`)
      }else {
        pagePath(`${beerType[3].path}/single_beer/id=:${id}`)
      }
    }
 