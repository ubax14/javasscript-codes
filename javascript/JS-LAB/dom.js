let boxElements = document.getElementsByClassName("box");
for (let i = 0; i < boxElements.length; i++){
    boxElements[i].style.border = '3px dashed blue';
}

let paragraphElement = document.getElementsByTagName("p");

for(let i = 0; i <paragraphElement.length; i++){
paragraphElement[i].style.background='green'

}

let anchorElement = document.getElementById("my-link");
anchorElement.setAttribute("class","anchor-class")
anchorElement.innerText="ubaxsaalaxa292@gmail.com"
// console.log(anchorElement)
