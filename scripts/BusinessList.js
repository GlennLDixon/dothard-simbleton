import { getBusinesses } from "./database.js";

const businesses = getBusinesses()


export const BusinessList = () => {
    let html = '<ul>'

    for (const business of businesses) {
        html += `<li>${business.purchasingAgent.nameFirst}</li>`
    }

    html += '</ul>'
    return html
}