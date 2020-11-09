const play = document.getElementById('play');
const stop = document.getElementById('stop');
const prg = document.getElementById('progress');
const time = document.getElementById('timestamp');
const video = document.getElementById('video');




function togglevideostatus(){
    
    if(video.paused){
        
        video.play();
    }
    else{
        
        video.pause();
    }
}




function playpause(){
    
    if(video.paused){
        play.innerHTML='<i class="fa fa-play" aria-hidden="true">';
    }
    else{
        play.innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>';
    }
}


function stopvideo(){
    
    video.currentTime=0;
    video.pause();
}


function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}



function changeprogress(){
    
    video.currentTime = ((progress.value/100)*(video.duration));
    
}



video.addEventListener('click',togglevideostatus);
video.addEventListener('pause',playpause);
video.addEventListener('play',playpause);
play.addEventListener('click',togglevideostatus);
stop.addEventListener('click',stopvideo);
video.addEventListener('timeupdate',updateProgress);
progress.addEventListener('change',changeprogress);







