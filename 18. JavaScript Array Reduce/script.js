//doing it with map and reduce
const timeNodes= Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins,secs] =timeCode.split(':').map(parseFloat);
        const totalSeconds= (mins*60) + secs;
        return totalSeconds
    })
    .reduce((total,vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);

secondsLeft=secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft=secondsLeft % 60;

console.log(hours,mins,secondsLeft)

