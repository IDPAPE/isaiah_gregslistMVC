import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class HousesController {
    constructor() {
        console.log('HouseController constructor loaded')
        housesService.loadHouses()
        this.drawHouses()
    }

    drawHouses() {
        const houses = AppState.houses
        let housesHTML = ''
        houses.forEach(house => housesHTML += house.houseCard)
        const houseListElm = document.getElementById('houses-list')
        houseListElm.innerHTML = housesHTML
    }

    createHouse() {
        event.preventDefault()
        let houseInfo = getFormData(event.target)
        console.log(houseInfo)
        housesService.createHouse(houseInfo)
        this.drawHouses()
    }

    deleteHouse(id) {
        console.log(id)
        housesService.deleteHouse(id)
        this.drawHouses()
    }
}