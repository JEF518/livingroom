const audio = new Audio('bholiday.mp3');


function lampPull(event) {
  if (!document.getElementsByClassName("lampshade")[0].getAttribute("light-on")){
    document.getElementsByClassName("lamp-pull")[0].style.height = "125px";
    document.getElementsByClassName("lamp-pull-bead")[0].style.margin = "125px 0 0 153px";
    document.getElementsByClassName("lampshade")[0].style.background = "#eec234";
    document.getElementsByClassName("lampshade")[0].setAttribute("light-on", true);
  }
  else {
    document.getElementsByClassName("lamp-pull")[0].style.height = "75px";
    document.getElementsByClassName("lamp-pull-bead")[0].style.margin = "75px 0 0 153px";
    document.getElementsByClassName("lampshade")[0].style.background = "beige";
    document.getElementsByClassName("lampshade")[0].setAttribute("light-on", "");
  }
}

function playSong(event) {
  if(document.getElementsByClassName("record-player-arm")[0].classList.contains("record-player-arm-raised")){
    document.getElementsByClassName("record-player-arm")[0].classList.remove("record-player-arm-raised");
    document.getElementsByClassName("record-player-needle")[0].classList.remove("record-player-needle-raised");
    audio.play();
    $('.inner-speaker-large').effect('shake', {times:50, distance:1}, 9000);
  }
  else if(!document.getElementsByClassName("record-player-arm")[0].classList.contains("record-player-arm-raised")){
    document.getElementsByClassName("record-player-arm")[0].classList.add("record-player-arm-raised");
    document.getElementsByClassName("record-player-needle")[0].classList.add("record-player-needle-raised");
    audio.pause();
    $('.inner-speaker-large').finish();
  }

};
