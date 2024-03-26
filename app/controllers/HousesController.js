import { AppState } from "../AppState.js";

export class HousesController {
    constructor() {
        console.log('HouseController constructor loaded')
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

    }
}