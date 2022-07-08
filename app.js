class App {
  constructor() {
    this.canvas = document.getElementById("HCanvas");
    this.ctx = this.canvas.getContext("2d");

    window.requestAnimationFrame(this.animate.bind(this));
  }

  draw() {
    // this.ctx.fillStyle = "#102330";
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    const img = new Image();

    img.addEventListener(
      "load",
      function () {
        // execute drawImage statements here
      },
      false
    );
    img.src = "img/bodyA.png"; // Set source path

    // this.bar.draw(this.ctx);
    // this.ball.draw(this.ctx);
  }

  animate() {
    this.draw();
    window.requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
