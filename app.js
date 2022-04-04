let music_list = [
  {
    music_Name : "Darshan Raval - Hawa Banke Official Music Video",
    Singer : "Darshan Raval",
    song : "Song/Darshan Raval - Hawa Banke _ Official Music Video _ Nirmaan _ Indie Music Label(MP3_128K).mp3",
    Image : "image/Hawa Banke.jpg",
  },
  {
    music_Name : "radhe-shyam-prabhas-pooja-hegde-justin--downloade",
    Singer : "prabhas-pooja-hegde-justin",
    song : "Song/radhe-shyam-prabhas-pooja-hegde-justin--downloader.vevioz.com.mp3",
    Image : "image/Ee-Raathale-Lyrics-Radhe-Shyam.png",
  },
  {
    music_Name : "Lehja _ Abhi Dutt ft. Faisu _ Jannat _ Vikram M",
    Singer : "Abhi Dutt ft.",
    song : "Song/Lehja _ Abhi Dutt ft. Faisu _ Jannat _ Vikram M _ Official Video _ Romantic Song 2021 _ Blive Music(MP3_128K).mp3",
    Image : "image/download.jpg",
  },
  {
    music_Name : "SALAAM ROCKY BHAI _ KGF Chapter 1 _",
    Singer : "Srinidhi Shetty _ Prashanth Neel",
    song : "Song/Full Video_ SALAAM ROCKY BHAI _ KGF Chapter 1 _ Yash_ Srinidhi Shetty _ Prashanth Neel(MP3_128K).mp3",
    Image : "image/salam-roky-bhai.jpg",
         
  },
  {
    music_Name : "Get Ready To Fight Video Song  BAAGHI  Tiger Shroff Shraddha Kapoor",
    Singer : " Tiger Shroff Shraddha Kapoor  Benny Dayal",
    song : "Song/Get Ready To Fight Video Song  BAAGHI  Tiger Shroff Shraddha Kapoor  Benny Dayal  TSeries.mp3",
    Image : "image/yd0H1ICG1To460cc1.jpg",

  },
  {
    music_Name : "kusu-kusu-song-ft-nora-fatehi-satyameva-jayate-2-john-a-divya-k-tanishk-",
    Singer : " Tiger Shroff Shraddha Kapoor  Benny Dayal",
    song : "Song/kusu-kusu-song-ft-nora-fatehi-satyameva-jayate-2-john-a-divya-k-tanishk-b-zahrah-khan-dev-n-downloader.vevioz.com.mp3",
    Image : "image/downloada.jpg",

  },
  {
    music_Name : "Mehram-Jersey-Shahid Kapoor-Mrunal-hakur-SachetParampara",
    Singer : "Mrunal-Thakur-SachetParampara ",
    song : "Song/Mehram  Jersey  Shahid Kapoor  Mrunal Thakur  SachetParampara  Shellee.mp3",
    Image : "image/maxresdefault.jpg",
  },
  {
    music_Name : "/dior-Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ",
    Singer : "Mrunal-Thakur-SachetParampara ",
    song : "Song/dior-Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ-slowed-remix-downloader.vevioz.com.mp3",
    Image : "image/salam-roky-bhai.jpg", 
  }

]


//  element selector  
let animationDiv = document.querySelector(".animation_div");
const music_image =  document.querySelector(".music_img img");
const music_title =  document.querySelector(".title_text");


//// htmlElement creat audio 
let creatAudioElemt =  document.createElement("audio");

let Play_pouse = document.querySelector(".Play_pouse"),
    prev_music = document.querySelector(".prev_music"), 
    next_music  = document.querySelector(".next_music"),
    randomTrack = document.querySelector(".randomTrack"),
    Repate_music = document.querySelector(".Repate_music"),
    Play_pouse_icon = document.querySelector(".Play_pouse i");
    console.log(Play_pouse_icon)
/// Golobal variable 
let music_index = 0 ,
    isPlaying = false,
    isRandom =  false ;
    let updateTimer; 
/// Golobal variable End

 //// Load music  function 


LoadMusic(music_index) ;
function LoadMusic(music_index){
    clearInterval(updateTimer);
    creatAudioElemt.load();
    creatAudioElemt.src = music_list[music_index].song ;
    music_image.src  = music_list[music_index].Image;
    music_title.innerHTML = music_list[music_index].music_Name;
    creatAudioElemt.addEventListener("ended", nextMusciPlay)

    updateTimer = setInterval(setUpdate, 1000);
}

/// Muscic Play function 
function playpauseTrack(){
    isPlaying ? muscicPouse() : musickPlay();
}




/////  Quic paly music .... 
function musickPlay(music_index){
    creatAudioElemt.play();
    isPlaying = true ; ; 
    animationDiv.classList.add("active");
    music_image.classList.add("rotate");
    Play_pouse.innerHTML = '<i class="fa-solid fa-pause"></i>'
   
}
/// Quic Pouse music .... 

function muscicPouse(){
    creatAudioElemt.pause(); 
    isPlaying = false ;
    animationDiv.classList.remove("active");
    music_image.classList.remove("rotate");
    Play_pouse.innerHTML = '<i class="fa-solid fa-play"></i>'
}


/// next Music function 
function nextMusciPlay(){
    if(music_index < music_list.length - 1 && isRandom === false){
        music_index += 1;
    }else if(music_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        music_index = random_index;
    }else{
        music_index = 0;
    }
    LoadMusic(music_index);
    musickPlay();

}
// next music 
next_music.addEventListener("click",function(){
    nextMusciPlay();
});

// prev music 
function PrevMusciPlay(){
    if(isPlaying > 0){
        music_index -= 1 ;
    }else{
        music_index = music_list.length - 1 ;
    }

    LoadMusic(music_index)
    musickPlay();
 }

prev_music.addEventListener("click",()=>{
    PrevMusciPlay()
})

// seektO 
function seekTo(){
    const seekSlider = document.querySelector(".Time_douration input");
    let seekTo  = creatAudioElemt.duration * (seekSlider.value / 100) ;
    creatAudioElemt.currentTime = seekTo ;

}

//// volumechange
function SoundVolume(){
    const volumeSlider = document.querySelector(".Volume input");
   return creatAudioElemt.volume = volumeSlider.value / 100;  
}

//// timer set up =
const curr_time = document.querySelector("#setUpdate_timer");
const total_duration = document.querySelector(".total_douration_timer");
const seek_slider = document.querySelector(".Time_douration input");
      

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(creatAudioElemt.duration)){
        seekPosition = creatAudioElemt.currentTime * (100 / creatAudioElemt.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(creatAudioElemt.currentTime / 60);
        let currentSeconds = Math.floor(creatAudioElemt.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(creatAudioElemt.duration / 60);
        let durationSeconds = Math.floor(creatAudioElemt.duration - durationMinutes * 60);
      
        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.innerHTML = currentMinutes + ":" + currentSeconds;
        total_duration.innerHTML = durationMinutes + ":" + durationMinutes;
      
    }


}




