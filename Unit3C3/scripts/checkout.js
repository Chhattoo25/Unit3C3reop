// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

 let totamount = JSON.parse(localStorage.getItem("wallet"))
  let amount = document.getElementById("wallet")
  amount.innerText = totamount
  let moviediv = document.getElementById("movie")
  let data = JSON.parse(localStorage.getItem("booked"))
   function appendMovie(data){
     moviediv.innerHTML=null;
    data.forEach((el)=>{
      let div = document.createElement("div")

let title = document.createElement("h3")
title.innerText = el.name;

let image = document.createElement("img")
image.src = el.poster

div.append(title,image)
moviediv.append(div)
    })
   }
   appendMovie(data)

function confirmcheck(){
  let ticket = document.getElementById("number_of_seats").value 
  let ticketprice = ticket *100
  // console.log(ticketprice)
  let amount = totamount
if(amount===0||amount<ticketprice){
alert("Insuffiecient Balance !")
}
else{
  let b = amount-ticketprice
  document.getElementById("wallet").innerText= b 
  let update = localStorage.getItem("wallet")
  update = update-ticketprice
  localStorage.setItem("wallet",update)
  document.getElementById("wallet").innerText= update
  alert("Booking Successful!")

}
}