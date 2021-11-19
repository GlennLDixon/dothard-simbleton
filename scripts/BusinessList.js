import { getBusinesses } from "./database.js";
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".supplies")

const BusinessList = () => {
    const businessesArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Customer List</h1>"

    businessesArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Supply(businessObject)
        }
    );
}