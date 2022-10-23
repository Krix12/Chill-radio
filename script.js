console.log("OK")
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'FJPtYDpCiqg',
      playerVars: { 'autoplay': 1, 'controls': 0, "disablekb": 1, "fs": 0, "iv_load_policy": 3, "modestbranding": 1, "showinfo": 0, "autohide": 1, "rel": 0, "mute": 1 },
      events: {
        'onReady': onPlayerReady,

      }
    });
  }
  function onPlayerReady(event) {
    player.playVideo();
    const embedCode = player.getVideoEmbedCode()
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(embedCode, 'text/html');
    const iframe = htmlDoc.querySelector("iframe")
    const title = iframe.getAttribute("title")
    document.getElementById("radio-name").innerHTML = title
  }
  player.unMute()
  const pause = document.getElementById("pause");
  const play = document.getElementById("play")

  pause.addEventListener("click", () => {
    player.pauseVideo();
    pause.style.display = "none"
    play.style.display = "inherit"
  })

  play.addEventListener("click", () => {
    player.playVideo();
    play.style.display = "none"
    pause.style.display = "inherit"
  })






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
  