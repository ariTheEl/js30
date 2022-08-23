const triggers = document.querySelectorAll('a');
const highlight =document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCords = this.getBoundingClientRect();
    const coords = {
        width : linkCords.width,
        height : linkCords.height,
        top : linkCords.top + window.scrollY,
        left : linkCords.left + window.scrollX,
        //can't see the essence of the mathematical operation, it seems to work just fine
    }
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)
    scale(1.3)`;
    highlight.style.backgroundColor = '#315171';
    highlight.style.border = "2px solid black";
}

triggers.forEach(item => item.addEventListener('mouseenter', highlightLink))