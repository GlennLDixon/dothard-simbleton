import { BusinessList } from "./BusinessList.js"
const mainContainer = document.querySelector('#container')

const applicationHTML = `
    <h1>Dothard & Simbleton</h1>
    <article class="details">
        <section class="detail--column list details__business">
        <h2>Active Business</h2>
        ${BusinessList()}
        </section>
    </article>
`

mainContainer.innerHTML = applicationHTML