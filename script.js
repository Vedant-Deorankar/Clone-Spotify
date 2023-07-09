

console.log("Welcome to spotify");

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('m1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =  [
    {songName: "Its you", filepath:"m1.mp3", coverPath: "c1.jpg"},
    {songName: "Senorita", filepath:"m2.mp3", coverPath: "c2.jpg"},
    {songName: "Tere hi hum hai", filepath:"m3.mp3", coverPath: "c3.jpg"},
    {songName: "Until I found you", filepath:"m4.mp3", coverPath: "c4.jpg"},
    {songName: "Saari baat", filepath:"/m5.mp3", coverPath: "c5.jpg"},
    {songName: "Believer", filepath:"m6.mp3", coverPath: "c6.jpg"},
    {songName: "kaha ho tum", filepath:"m7.mp3", coverPath: "c7.jpg"},
    {songName: "Channa ve", filepath:"m8.mp3", coverPath: "c8.jpg"},
    {songName: "Chidiya", filepath:"m9.mp3", coverPath: "c9.jpg"},


]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    let songNameElement = element.querySelector(".songName");
    if (songNameElement) {
      songNameElement.innerText = songs[i].songName;
    }
  });


// audioElement.play();
// handle play pause click

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;

  }
});



//Listen to event
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      

      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      
      audioElement.src = songs[songIndex].filepath;
      masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity=1;

      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      
    });
  });
  
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText=songs[songIndex].songName;

          audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
    
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText=songs[songIndex].songName;
          audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
})

