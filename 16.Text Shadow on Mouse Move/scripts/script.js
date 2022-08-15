const hero= document.querySelector('.hero');
const text= hero.querySelector('h1');
const walk= 100;
function shadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    //or: const{offsetWidth: width, offsetHeight: height } =hero;
    let {offsetX: x ,offsetY: y} = e;
    //this is the hero div, what we listened on, it doesn't change, e.target is what it is triggered on 
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk=Math.round((x / width * walk) - (walk/2));
    const yWalk=Math.round((y / height * walk) - (walk/2))
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 2px rgba(250,0,0,0.5),
    ${xWalk}px ${-(yWalk)}px 5px rgba(0,250,0,0.5),
    ${-(xWalk)}px ${yWalk}px 5px rgba(0,0,250,0.5)
    `
}
hero.addEventListener('mousemove', shadow);