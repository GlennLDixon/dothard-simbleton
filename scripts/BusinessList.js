import { getBusinesses } from "./database.js";
import { Business } from "./Business.js"

let contentTarget = document.querySelector("#container")

export const BusinessList = () => {
    const businessesArray = getBusinesses()
    contentTarget.innerHTML = "<ul>"
    businessesArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += `<li>${Business(businessObject)}</li>`
        }
        );
    contentTarget.innerHTML += "</ul>"
    return contentTarget.innerHTML
}