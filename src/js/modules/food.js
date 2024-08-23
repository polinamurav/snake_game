export class Food {

    foodRadius = null;
    foodPosition = {
        x: 1,
        y: 1
    }
    context = null;
    positionsCount = null;
    positionsSize = null;

    constructor(context, positionsCount, positionsSize) {
        this.context = context;

        this.positionsCount = positionsCount;
        this.positionsSize = positionsSize;

        this.foodRadius = this.positionsSize / 2;
    }

    showFood() {
        this.context.fillStyle = 'white';
        this.context.beginPath();
        this.context.arc(this.foodPosition.x * this.positionsSize - this.foodRadius,
            this.foodPosition.y * this.positionsSize - this.foodRadius, this.foodRadius, 0, 2 * Math.PI);
        this.context.fill();
    }
}