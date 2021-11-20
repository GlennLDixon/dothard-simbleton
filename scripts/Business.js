
export const Business = (businessObject) => {
    return `
        <section class="business">
            <h1 class="business_type">${businessObject.companyName}</h1>
            <div class="business_address">
                <p class="address_fullstreet">
                    ${businessObject.addressFullStreet}
                </p>
                <p class="address_state">
                    ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
                </p>
            </div>
        </section>
    `
}