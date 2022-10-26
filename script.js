const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const videoIDs = ["sT1KpjKbsTk", "gAzDu-Elfno", "PO7FETKjmA4", "jfKfPfyJRdk", "FJPtYDpCiqg", "9UMxZofMNbA"]
let currVideo = 0;
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'sT1KpjKbsTk',
      playerVars: { 'autoplay': 1, 'controls': 0, "disablekb": 1, "fs": 0, "iv_load_policy": 3, "modestbranding": 1, "showinfo": 0, "autohide": 1, "rel": 0, "mute": 1 },
      events: {
        'onReady': onPlayerReady,

      }
    });
  }

  function setTitle(action) {
    const index = action == "forward" ? currVideo - 1 : currVideo + 1
    let videoId
    if(action == "previous") index == 0 ? videoId = videoIDs[videoIDs.length - 1] : videoId = videoIDs[index - 1]
    else if(action == "start") videoId = videoIDs[0]
    else if(action == "forward") index == videoIDs.length - 1 ? videoId = videoIDs[0] : videoId = videoIDs[index + 1]
    console.log(index)
    fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}&format=json`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("radio-name").innerHTML = data.title
    })

  }
  async function onPlayerReady(event) {
    event.target.playVideo()
    setTitle("start")
  }


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
    if(currVideo == videoIDs.length - 1) player.loadVideoById(videoIDs[currVideo = 0])
    else player.loadVideoById(videoIDs[currVideo = currVideo + 1])
   setTitle("forward");
  }
  
  function previous() {
    if(currVideo == 0) player.loadVideoById(videoIDs[currVideo = videoIDs.length - 1])
    else player.loadVideoById(videoIDs[currVideo = currVideo - 1])
    setTitle("previous");
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
  