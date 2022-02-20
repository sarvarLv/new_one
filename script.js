let chatBody = document.querySelector('.chat_body'),
data = document.querySelector('.chat_send input'),
send = document.querySelector('.chat_send button'),
icons = document.querySelector(".icons");

let icon = ["😒","😂","😁","👍","😝","😱","😜","😉","😄","😭","😋","😏","😆"];
icon.forEach((ico)=>{
    icons.innerHTML += `<p>${ico}</p>`
})
let iconBtn = document.querySelectorAll(".icons p");
iconBtn.forEach((item, i)=>{
    item.addEventListener('click', (e)=> {
        data.value += icon[i]
    })
})

let time = new Date();
console.log(time);
console.log(time.getDate());
let sends = true,
lastSeen = document.querySelector('.last-seen');

send.addEventListener('click', ()=> {
    if(data.value == "") {
        alert("qiymat kiriting")
    } else {
        
        if(sends){
            chatBody.innerHTML += `<div class="ota-quti"><p class="chat_message">${data.value}</p> <span class="date">${time.getHours()} : ${time.getMinutes()}</span></div>`;
            sends = false;
            
        } else{
            chatBody.innerHTML += `<div class="ota-quti active"><p class="chat_message">${data.value} 
            <span class="date">${time.getHours()} : ${time.getMinutes()}</span>
            </p> </div>`;
            sends = true;
        }
        data.value = ""
        lastSeen.innerHTML = `last online ${time.getHours()} : ${time.getMinutes()}`
    }

})
