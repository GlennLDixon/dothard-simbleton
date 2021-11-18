import { getBusinesses } from "./database.js";

const businesses = getBusinesses()


export const Business = () => {
    for (const business of businesses) {
        console.log(business)
    }
}