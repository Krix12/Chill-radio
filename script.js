
const videoIDs = ["gAzDu-Elfno", "PO7FETKjmA4", "jfKfPfyJRdk", "FJPtYDpCiqg", "LTTV7r8dAk4", "9UMxZofMNbA"]
let currVideo = 0;
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'gAzDu-Elfno',
      playerVars: { 'autoplay': 1, 'controls': 0, "disablekb": 1, "fs": 0, "iv_load_policy": 3, "modestbranding": 1, "showinfo": 0, "autohide": 1, "rel": 0, "mute": 1 },
      events: {
        'onReady': onPlayerReady,

      }
    });
  }

  function setTitle() {
    console.log("TITLER")
    const iframe = player.getIframe();
    const title = iframe.getAttribute("title")
    document.getElementById("radio-name").innerHTML = title
  }
  async function onPlayerReady(event) {
    await player.loadPlaylist(videoIDs);
    player.setLoop(true);
    await player.playVideo();
    //setTimeout(setTitle(), 3000)
  }

  player.unMute()

  function pause(button) {
    const playButton = document.getElementById("play")
    console.log("NICE")
    player.pauseVideo();
    button.style.display = "none"
    playButton.style.display = "inherit"
  }

  function play(button) {
    const pauseButton = document.getElementById("pause")
    console.log("NICE")
    player.playVideo();
    button.style.display = "none"
    pauseButton.style.display = "inherit"
  }
  

  function forward() {
    player.nextVideo()
    setTimeout(setTitle(), 3000);

    
  
  }
  
  function previous() {
    player.previousVideo();
    setTimeout(setTitle(), 3000);
  }
  

function enterFullscreen() {
  const elem = document.querySelector("body")
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }

    document.getElementById("fullscreen-enter").style.display = "none"
    document.getElementById("fullscreen-exit").style.display = "inherit"


  }

  function exitScreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

    document.getElementById("fullscreen-exit").style.display = "none"
    document.getElementById("fullscreen-enter").style.display = "inherit"
  
  
    }
  