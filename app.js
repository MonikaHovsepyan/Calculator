let items = Array.from(document.getElementsByClassName('item'));
let display = document.getElementById('display')
let clear = document.getElementById('clear')
let equal = document.getElementById('equal')
let last = document.getElementById('last')
  
items.map(el => {
    el.addEventListener('click',(event) =>{
        display.innerText = display.innerText + event.target.innerText 
    })
})

equal.addEventListener('click',() =>{
    display.innerText = eval(display.innerText)
})

clear.addEventListener('click',() => {
    display.innerText = ''
})

last.addEventListener('click',() => {
    display.innerText = display.innerText.substring(0,display.innerText.length - 1)
})
