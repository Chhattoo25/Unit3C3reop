// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let movies = document.getElementById("movies")
let totamount = JSON.parse(localStorage.getItem("wallet"))
let amount = document.getElementById("wallet")
amount.innerText = totamount

async function searchMovie(){
  try{
    let input = document.getElementById("search").value
    let res = await fetch(`http://www.omdbapi.com/?apikey=4ac9e285&s=${input}`)
    let data = await res.json()
    let moviesd = data.Search
    // appendMovies(moviesd)
    return moviesd
    console.log(moviesd)

  }
  catch(err){
    console.log(err)
  }
}

function  appendMovies(data){
 movies.innerHTML=null;
  data.forEach((el)=>{
let div = document.createElement("div")

let title = document.createElement("h3")
title.innerText = el.Title;

let image = document.createElement("img")
image.src = el.Poster

let btn = document.createElement("button")
btn.innerText = "Book Now"
btn.class = "book_now"
btn.id = "book"
btn.onclick = function (){
let title = el.Title;
console.log(title)
let Poster = el.Poster
let obj={
 name:el.Title,
 poster:el.Poster
}
let arr = []
arr.push(obj)
console.log(arr)
localStorage.setItem("booked",JSON.stringify(arr))

window.location.href='checkout.html'
}

let m1 =div.append(title,image,btn)
movies.append(div)
  })
}



async function main(){
try{
  let data = await searchMovie()
  if(data===undefined){
    return false
  }
  appendMovies(data)
}
catch(err){
  console.log(err)
}
}
let id 
function debounce(fun,del){
  if(id){
    clearTimeout(id)
  }
  id= setTimeout(()=>{
    fun()
  },del)
}