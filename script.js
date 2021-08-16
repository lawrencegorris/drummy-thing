const button = document.querySelector('#chime-button');
const sound = new Audio('/assets/sounds/chime.wav');

button.addEventListener('click', () => {
  sound.play();
});

const drumkit = document.querySelector('#drum-container');

const drumSounds = new Howl({
  "src": [
    "./assets/drum-sounds/drums.webm",
    "./assets/drum-sounds/drums.mp3"
  ],
  "sprite": {
    "closed-hat": [
      0,
      691.3832199546486
    ],
    "crash": [
      2000,
      2864.081632653061
    ],
    "kick": [
      6000,
      634.3083900226753
    ],
    "ride": [
      8000,
      1683.174603174603
    ],
    "snare": [
      11000,
      543.945578231293
    ],
    "tom1": [
      13000,
      1190.929705215419
    ],
    "tom2": [
      16000,
      990.1814058956902
    ],
    "tom3": [
      18000,
      1040.3628117913827
    ]
  }
});

drumkit.addEventListener('click', playDrums);
drumkit.addEventListener('touchstart', playDrums);

function playDrums(event){
  event.preventDefault();
  let singleSound = event.target.dataset.sound;
  drumSounds.play(singleSound);
}