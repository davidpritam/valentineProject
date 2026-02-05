const box = document.getElementById("btndiv")
const nobtn = document.getElementById("btn2")
const yesBtn = document.getElementById("btn1")
const popup = document.getElementById("popup")
const closedBtn = document.getElementById("closeBtn")
const sound = document.getElementById("loveSound");

// Show GIF popup when Yes button clicked
yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
  sound.currentTime = 0;
  sound.play();  // flex centers the GIF
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  sound.pause();                  // stop audio
  sound.currentTime = 0;
});


nobtn.addEventListener("mouseover",()=>{
    console.log("button is clicked");
    
    const maxX = box.clientWidth - nobtn.offsetWidth;
    const maxY = box.clientHeight - nobtn.offsetHeight;


    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    nobtn.style.position = "absolute";
    nobtn.style.left = newX + "px";
    nobtn.style.top = newY + "px";

})