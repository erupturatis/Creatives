window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = this.window.innerWidth;
  canvas.height = this.window.innerHeight;

  const image1 = this.document.getElementById("image1");

  class Particle {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.size = 30;
    }
    draw() {
      ctx.fillRect(this.x, this.y, this.size, this, size);
    }
  }

  class Effect {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.particlesArray = [];
    }
    init() {
      this.particlesArray.push(new Particle());
    }
    draw() {
      this.particlesArray.forEach((particle) => particle.draw());
    }
  }

  const effect = new Effect(canvas.width, canvas.height);
  effect.init();
  console.log(effect);

  function animate() {}
});
