import { generateId } from "../utils/GenerateId.js"

export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get houseCard() {
        return `
        <div class="col-4">
        <div class="card">
        <img class="card-img-top"
        src="${this.imgUrl}"
        alt="">
            <div class="card-body">
                <h3 class="card-title text-center text-primary">Price $${this.price}</h3>
                <h4 class="card-title">Square Ft: ${this.sqft}</h4>
                <p class="card-text">bed: ${this.bedrooms}, bath: ${this.bathrooms}</p>
                <p class="bg-primary p-2 rounded text-light fw-bold">${this.description}</p>
                <p>Built: ${this.year}</p>
                <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-danger">delete</button>
            </div>
        </div>
    </div>
        
        `
    }
}