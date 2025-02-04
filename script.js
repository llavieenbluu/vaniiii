let highestZ = 1;

class Paper{

    holdingpaper = false;

    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentpaperY = 0;


    init(paper) {

        paper.addEventListener('mousedown', (e) => {

            this.holdingpaper = true;
            
            paper.style.zIndex = highestZ;
            highestZ+= 1;

            if (e.button ===0){
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;
            }
        })

        document.addEventListener('mousemove' , (e) => {
            
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX -this.prevMouseX;
            this.velocityY = this.mouseY -this.prevMouseY;

            if (this,this.holdingpaper) {


                this.currentPaperX += this.velocityX;
                this.currentpaperY += this.velocityY;

                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentpaperY}px)`;
            }
        })

        window.addEventListener('mouseup' , (e) => {
            this.holdingpaper = false;

            
            
        })

    }
}

const papers=Array.from(document.querySelectorAll('.paper'));

papers.forEach( paper => {
    const p = new Paper();
    p.init(paper);
})