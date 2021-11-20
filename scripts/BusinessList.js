import { getBusinesses } from "./database.js";
import { Business } from "./Business.js"

export const BusinessList = () => {
    const businessesArray = getBusinesses()
    let tempHtml = `<ul>`
    businessesArray.forEach(
        (businessObject) => {
            tempHtml += `<li>${Business(businessObject)}</li>`
        }
        )
    tempHtml += `</ul>`
    
    return tempHtml
}