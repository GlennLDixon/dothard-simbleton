
export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business_type">${businessObject.companyName}</h2>
            <div class="business_address">
                Address: ${businessObject.addressFullStreet}  
            </div>
        </section>
    `
}