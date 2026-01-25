export function formatMoney(amountCents){
    return amountCents < 0 ? `-$${((amountCents * -1) / 100).toFixed(2)}` : `$${(amountCents / 100).toFixed(2)}`
}