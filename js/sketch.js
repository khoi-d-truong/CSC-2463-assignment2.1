
//Variable declaration
let samplerSounds;
let harpButton,bwoomButton,dogButton,tadaButton;  
let bCrusher = new Tone.BitCrusher(8);

//Importing the sounds for the sampler
samplerSounds = new Tone.Players({
  harp: 'assets/harp-motif2-36586.mp3',
  bwoom: 'assets/bwoom.mp3',
  dog:  'assets/dog.mp3',
  tada: 'assets/tada.mp3'

});

//Connecting sampler through the BitCrusher
samplerSounds.connect(bCrusher);
bCrusher.toDestination();


function setup() {
  createCanvas(400, 400);

  //Button creation
  harpButton = createButton('harp');
  harpButton.position (70,70);
  harpButton.mousePressed(() =>samplerSounds.player ('harp').start());

  bwoomButton = createButton('bwoom');
  bwoomButton.position (120,70);
  bwoomButton.mousePressed(() =>samplerSounds.player ('bwoom').start());

  dogButton = createButton('dog');
  dogButton.position (190,70);
  dogButton.mousePressed(() =>samplerSounds.player ('dog').start());

  tadaButton = createButton('tada!');
  tadaButton.position (240,70);
  tadaButton.mousePressed(() =>samplerSounds.player ('tada').start());

  //Slider creation
  BCSlider = createSlider (1,16,8,1);
  BCSlider.position (120,200);
  BCSlider.mouseReleased(() => {
    bCrusher.bits.value = BCSlider.value();
  })
  
}

function draw() {
  background(250);
  
  //Labeling the slider
  textSize(16);
  text("Bit Crusher Slider", 115,240);
  text("Bits: " + bCrusher.bits.value, 115,260);
} 
