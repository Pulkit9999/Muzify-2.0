console.log("welcome");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");

let masterPlay = document.getElementById("masterPlay");
let gif =document.getElementById("gif");
let myProgressBar = document.getElementById("myProgressBar");
let songInfo = document.getElementById("songInfo");
let masterSongName= document.getElementById('masterSongName');

let songs = [

    { songName : "Chalo Lein" , filePath : "songs/1.mp3" , coverPath : "covers/Cover2.jpg" },
    { songName : "Dil Galti Kar" , filePath : "songs/2.mp3" , coverPath : "covers/Cover3.jpg"},
    { songName : "Ishq Wala Love" , filePath : "songs/3.mp3" , coverPath : "covers/Cover1.jpg"},
    { songName : "Jehda Nasha" , filePath : "songs/4.mp3" , coverPath : "covers/Cover4.jpeg"},
    { songName : "Kahani Suno" , filePath : "songs/5.mp3" , coverPath : "covers/Cover5.jpg"},
    { songName : "Rang Lageya" , filePath : "songs/6.mp3" , coverPath : "covers/Cover6.webp"},
    { songName : "Laung Lachi" , filePath : "songs/7.mp3" , coverPath : "covers/Cover7.jpg"},
    { songName : "Man Meri Jaan" , filePath : "songs/8.mp3" , coverPath : "covers/Cover8.jpg"},
    { songName : "Main Royan" , filePath : "songs/9.mp3" , coverPath : "covers/Cover9.jpg"},
    { songName : "Ye Dil" , filePath : "songs/10.mp3" , coverPath : "covers/Cover10.jpg"},

];

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        
        }
    else{
          audioElement.pause();
          masterPlay.classList.remove("fa-circle-pause");
          masterPlay.classList.add("fa-circle-play");
          gif.style.opacity = 0;



    }
});

audioElement.addEventListener("timeupdate",()=>{
   progress = parseInt(audioElement.currentTime/audioElement.duration *100);
    myProgressBar.value = progress;

});

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;

});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    });
});


document.getElementById('next').addEventListener('click',()=>{

    if(songIndex >=9){
        songIndex = 0;
    }

    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});



document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex <=0){
        songIndex = 0;
    }

    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0 ;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
});