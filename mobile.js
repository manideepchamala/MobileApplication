function Execute() {
    const tot = parseFloat(document.querySelector("#EnterTotal").value)
    const ratePercentage = parseFloat(document.querySelector("#TAX").value)

    const tips = tot * (ratePercentage / 100)
    const tax = tot * (0.055) // 0.055 = tax rate / 100
    const final = tot + tips + tax

    document.querySelector('#Tip').innerHTML = `$${tips.toFixed(2)}`
    document.querySelector('#Result').innerHTML = `$${tax.toFixed(2)}`
    document.querySelector('#GrandResult').innerHTML = `$${final.toFixed(2)}`
}

document.querySelector('#Execute').addEventListener('click', Execute)