import { AppState } from "../AppState.js";
import { House } from "../models/House.js";

class HousesService {
    createHouse(houseInfo) {
        let newHouse = new House(houseInfo)
        console.log(newHouse)
        AppState.houses.push(newHouse)
        this.saveHouses()
    }

    deleteHouse(id) {
        console.log('deleting house', id)
        let deletedHouse = AppState.houses.findIndex(house => id == house.id)
        console.log(deletedHouse)
        AppState.houses.splice(deletedHouse, 1)
        this.saveHouses()
    }

    saveHouses() {
        let housesData = JSON.stringify(AppState.houses)
        localStorage.setItem('houses', housesData)
    }

    loadHouses() {
        let dataString = localStorage.getItem('houses')
        console.log('loading', dataString)
        const housesData = JSON.parse(dataString)
        const houses = housesData.map(house => new House(house))
        AppState.houses = houses
    }
}

export const housesService = new HousesService()