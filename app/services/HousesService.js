import { AppState } from "../AppState.js";
import { House } from "../models/House.js";

class HousesService {
    createHouse(houseInfo) {
        let newHouse = new House(houseInfo)
        console.log(newHouse)
        AppState.houses.push(newHouse)

    }
}

export const housesService = new HousesService()