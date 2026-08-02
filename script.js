// =========================
// INITIAL SETUP
// =========================


document.addEventListener("DOMContentLoaded", () => {


    // Start AOS animations
    AOS.init({
        duration: 1200,
        once: true
    });



});




// =========================
// LOADER
// =========================


window.addEventListener("load", () => {


    setTimeout(() => {


        document.getElementById("loader")
        .style.display = "none";


    }, 3000);



});






// =========================
// PASSWORD SYSTEM
// =========================


// CHANGE THIS PASSWORD
const secretPassword = "puku";


const unlockBtn =
document.getElementById("unlockBtn");


const passwordInput =
document.getElementById("passwordInput");


const passwordScreen =
document.getElementById("passwordScreen");


const wrongPassword =
document.getElementById("wrongPassword");



unlockBtn.addEventListener("click", () => {


    let enteredPassword =
    passwordInput.value;



    if(enteredPassword === secretPassword){


        passwordScreen.style.display="none";


        startExperience();



    }

    else {


        wrongPassword.innerHTML =
        "Wrong password ❤️ Try again";


    }



});






// =========================
// START EXPERIENCE
// =========================


function startExperience(){



    // Start typing animation

    new Typed("#typingText", {


        strings:[

            "You are my happiness ❤️",

            "You make my world beautiful ✨",

            "Happy Birthday my love 🎂",

            "Distance cannot stop my love for you ❤️"

        ],


        typeSpeed:50,

        backSpeed:30,

        loop:true


    });



}





// =========================
// MUSIC SYSTEM
// =========================



const music =
new Audio(
"assets/music/song.mp3"
);


music.loop=true;



const musicBtn =
document.getElementById("musicBtn");



let musicPlaying=false;



musicBtn.addEventListener(
"click",
()=>{


    if(!musicPlaying){


        music.play();


        musicBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';


        musicPlaying=true;


    }

    else{


        music.pause();


        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';


        musicPlaying=false;


    }



});





// =========================
// FLOATING HEARTS
// =========================


function createHeart(){


const heart =
document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";



heart.style.left =
Math.random()*100+"vw";



heart.style.animationDuration =
(3 + Math.random()*5)+"s";



heart.style.fontSize =
(15 + Math.random()*35)+"px";



document
.getElementById("hearts-container")
.appendChild(heart);



setTimeout(()=>{


heart.remove();


},8000);



}



setInterval(createHeart,500);

// =========================
// ENVELOPE OPENING
// =========================


const envelope =
document.querySelector(".envelope");


const openLetter =
document.getElementById("openLetter");



openLetter.addEventListener("click", ()=>{


    envelope.classList.add("open");


    openLetter.innerHTML =
    "My Heart Is Open ❤️";



    launchConfetti();



});








// =========================
// GIFT BOX
// =========================


const giftBox =
document.getElementById("giftBox");


const giftMessage =
document.getElementById("giftMessage");



giftBox.addEventListener("click", ()=>{


    giftBox.classList.add("open");



    giftMessage.innerHTML =
    "Your gift is my promise to make you smile forever ❤️";



    launchConfetti();



});







// =========================
// CANDLE
// =========================


const blowButton =
document.getElementById("blowCandle");



blowButton.addEventListener("click", ()=>{


    const flame =
    document.querySelector(".flame");



    flame.style.display="none";



    blowButton.innerHTML =
    "Wish Completed ✨";



    launchConfetti();



});








// =========================
// CONFETTI
// =========================


function launchConfetti(){



    confetti({

        particleCount:150,

        spread:120,

        origin:{
            y:0.6
        }

    });



}







// =========================
// FIREWORK CANVAS
// =========================


const canvas =
document.getElementById("fireworks");


const ctx =
canvas.getContext("2d");



canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



let particles=[];



window.addEventListener(
"resize",
()=>{


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;


});







function createFirework(){



const x =
Math.random()*canvas.width;


const y =
Math.random()*canvas.height/2;



for(let i=0;i<60;i++){


particles.push({


x:x,

y:y,


speedX:
(Math.random()-0.5)*8,


speedY:
(Math.random()-0.5)*8,


life:100,


color:

`hsl(${Math.random()*360},100%,60%)`


});


}



}






function animateFireworks(){



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach((p,index)=>{


ctx.beginPath();


ctx.arc(
p.x,
p.y,
3,
0,
Math.PI*2
);


ctx.fillStyle=p.color;


ctx.fill();



p.x += p.speedX;

p.y += p.speedY;


p.life--;



if(p.life<=0){

particles.splice(index,1);

}



});



requestAnimationFrame(
animateFireworks
);



}




setInterval(
createFirework,
1500
);



animateFireworks();






// =========================
// SMOOTH SCROLL BUTTON
// =========================



const scrollBtn =
document.querySelector(".scroll-btn");



scrollBtn.addEventListener("click",()=>{


document.querySelector(".memories")
.scrollIntoView({

behavior:"smooth"

});


});
