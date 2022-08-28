const divs = document.querySelectorAll('div');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation() ; //stops bubbling
}

divs.forEach(div => div.addEventListener('click',logText, {capture:false,
once:true }));

//once:true listens for a click once then disable or unbind itself to prevent future clicks till page reload
// document.body.addEventListener('click', logText);
//capture goes from the top to bottom, while bubbles/triggering goes from the bottom to the top

//capture:true will cause the event to run on the capture down instead of on the bubble up. capture:false is the default setting, and it will run the event on the bubble up
