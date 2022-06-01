const audio = document.querySelector('#stream')
const playPauseButton = document.querySelector('[name="play-pause"]')
const playPauseButtonIcon = playPauseButton.querySelector('i.fas')
const volumeControl = document.querySelector('[name="volume"]')
const volumeButton = document.querySelector('[name="mute"]')
const volumeButtonIcon = volumeButton.querySelector('i.fas')

let isPlaying = false
let fetchInterval = null
let currentVolume = 0.2

audio.volume = currentVolume

/**
 * Adjusts the icon of the "mute" button based on the given volume.
 * @param volume
 */
const adjustVolumeIcon = volume => {
  volumeButtonIcon.classList.remove('fa-volume-off')
  volumeButtonIcon.classList.remove('fa-volume-down')
  volumeButtonIcon.classList.remove('fa-volume-up')
  volumeButtonIcon.classList.remove('fa-volume-mute')

  if (volume >= 0.75) {
    volumeButtonIcon.classList.add('fa-volume-up')
  }

  if (volume < 0.75 && volume >= 0.2) {
    volumeButtonIcon.classList.add('fa-volume-down')
  }

  if (volume < 0.2 && volume > 0) {
    volumeButtonIcon.classList.add('fa-volume-off')
  }

  if (volume === 0) {
    volumeButtonIcon.classList.add('fa-volume-mute')
  }
}

volumeControl.addEventListener('input', () => {
  const volume = parseFloat(volumeControl.value)

  audio.volume = currentVolume = volume
  currentVolume = volume

  adjustVolumeIcon(volume)
})

volumeButton.addEventListener('click', () => {
  if (audio.volume > 0) {
    adjustVolumeIcon(0)
    audio.volume = 0
    volumeControl.value = 0
  } else {
    adjustVolumeIcon(currentVolume)
    audio.volume = currentVolume
    volumeControl.value = currentVolume
  }
})

playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause()

    playPauseButtonIcon.classList.remove('fa-pause')
    playPauseButtonIcon.classList.add('fa-play')

    clearInterval(fetchInterval)
  } else {
    audio.play()

    playPauseButtonIcon.classList.remove('fa-play')
    playPauseButtonIcon.classList.add('fa-pause')
  }

  isPlaying = !isPlaying
})
