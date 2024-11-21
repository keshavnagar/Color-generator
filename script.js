let btn = document.querySelector("button");

btn.addEventListener("click",function(){
   
    let color = getrandomcolor();
    let h2 = document.querySelector("h2");
    h2.innerText = color;
    let div = document.querySelector("div");
    div.style.backgroundColor = color;
    console.log("color upadated")
})

function getrandomcolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    let color = `rgb(${red},${green},${blue})`;
    return color;
}