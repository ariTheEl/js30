const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const ctx = canvas.getContext('2d');

function getVideo() {
    const mediaStream = new MediaStream();
    navigator.mediaDevices.getUserMedia({
        video: true, audio: false})
    .then(mediaStream => {
        console.log(mediaStream);
        video.srcObject = mediaStream;
        video.play();
    })
    .catch(err => {
        console.error('Please allow access to webcam', err);
    })
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    setInterval(() => {
        ctx.drawImage(video,0,0,width, height);
        let pixels = ctx.getImageData(0,0, width, height);
        // pixels = rgbSplit(pixels);
        // pixels = redEffect(pixels);
        pixels = greenScreen(pixels)
        ctx.putImageData(pixels, 0, 0)
    }, 16);
}

function takePhoto(){
    snap.currentTime =0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'beautiful');
    link.innerHTML = `<img src = "${data}" alt="pretty " />`
    strip.insertBefore(link, strip.firstChild)
}
//takePhoto doesn't run in cosole, it only displays the content of the function.

function redEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i] = pixels.data[i] + 100; //red
        pixels.data[i + 1] = pixels.data[i + 1] - 50;//green
        pixels.data[i +2] = pixels.data[i + 2] * 0.5;//blue
    }
    return pixels;
}

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i]; //red
        pixels.data[i + 100] = pixels.data[i + 1]//green
        pixels.data[i - 150] = pixels.data[i + 2];//blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
  } 

getVideo();

video.addEventListener('canplay', paintToCanvas)