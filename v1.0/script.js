// const Dirty_Beauty = 'linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)';
// const Clean_Mirror = 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)';
// const Vicious_Stance = 'linear-gradient(60deg, #29323c 0%, #485563 100%)';
// const Solid_Stone = 'linear-gradient(to right, #243949 0%, #517fa4 100%)';
// const Mole_Hall = 'linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)';
// const High_Flight = 'linear-gradient(to right, #0acffe 0%, #495aff 100%)';
// const Space_Shift = 'linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)';
// const Rich_Metal = 'linear-gradient(to right, #d7d2cc 0%, #304352 100%)';
// const Night_Sky = 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)';
// const Landing_Aircraft = 'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)';
// const Midnight_Bloom = 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)';
// const Eternal_Constance = 'linear-gradient(to top, #09203f 0%, #537895 100%)';

// const backgrounds = [Dirty_Beauty, Clean_Mirror, Vicious_Stance, Solid_Stone, Mole_Hall, High_Flight, Space_Shift, Rich_Metal, Night_Sky, Landing_Aircraft, Midnight_Bloom, Eternal_Constance];

// var backgroundDiv = document.body;

// function randomBackground(backgrounds) {
//   var random = Math.floor(Math.random() * backgrounds.length);
//   backgroundDiv.style.backgroundImage = backgrounds[random];
// }

// randomBackground(backgrounds);

particlesJS.load('particles-js', 'assets/particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
});