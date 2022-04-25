// Store the wallet amount to your local storage with key "amount"

  function addtowallet(){
    let amount = document.getElementById("amount").value
    amount = +amount;
    let totamount = JSON.parse(localStorage.getItem("wallet"))|| 0
    totamount = totamount+amount
    localStorage.setItem("wallet",totamount)
    let money = document.getElementById("wallet")
    money.innerText = totamount


}

let totamount = JSON.parse(localStorage.getItem("wallet"))|| 0
let money = document.getElementById("wallet")
    money.innerText = totamount