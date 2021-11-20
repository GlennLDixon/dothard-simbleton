import { getBusinesses } from "./database.js";
import { Business } from "./Business.js"

const contentTarget = document.querySelector("#container")

export const BusinessList = () => {
    const businessesArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Active Business</h1>"
    contentTarget.innerHTML = "<ul>"
    businessesArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += `<li>${Business(businessObject)}</li>`
        }
    );
    contentTarget.innerHTML += "</ul>"
    return contentTarget.innerHTML
}