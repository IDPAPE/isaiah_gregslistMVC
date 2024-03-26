import { AppState } from "../AppState.js";
import { House } from "../models/House.js";

class HousesService {
    createHouse(houseInfo) {
        let newHouse = new House(houseInfo)
        console.log(newHouse)
        AppState.houses.push(newHouse)
    }

    deleteHouse(id) {
        console.log('deleting house', id)
        let deletedHouse = AppState.houses.findIndex(house => id == house.id)
        console.log(deletedHouse)

        AppState.houses.splice(deletedHouse, 1)
    }
}

export const housesService = new HousesService()