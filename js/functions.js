var isPlayed = false
var foreLoading = true
var backLoading = true

function scrollPlay() {
  const audioRef = document.getElementById('audioRef')
  if (!isPlayed) {
    audioRef.play()
      .catch(() => isPlayed = false)
    isPlayed = true
  }
}

function parallaxBGLoad(img) {
  const divRef = document.getElementById('divRef')
  const loadRef = document.getElementById('loadRef')
  const profileBG = document.getElementById('profileBG')
  if (img == 'fore') {
    foreLoading = false
  } else if (img == 'back') {
    backLoading = false
  }
  if (!(foreLoading && backLoading)) {
    divRef.style.display = 'flex'
    loadRef.style.display = 'none'
    profileBG.style.overflowY = 'auto'
  }
}