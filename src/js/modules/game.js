import {Snake} from "./snake.js";
import {Food} from "./food.js";

export class Game {

    snake = null;
    context = null;
    positionsCount = null;
    positionsSize = null;

    constructor(context, settings) {
        this.context = context;

        this.positionsCount = settings.positionsCount;
        this.positionsSize = settings.positionsSize;

        document.getElementById('start').onclick = () => {
            this.startGame();
        }
    }

    startGame() {
        this.food = new Food(this.context, this.positionsCount, this.positionsSize);
        this.snake = new Snake(this.context, this.positionsCount, this.positionsSize);

        this.food.setNewFoodPosition();
        setInterval(this.gameProcess.bind(this), 100);
    }

    gameProcess() {
        this.context.clearRect(0, 0, this.positionsCount * this.positionsSize, this.positionsCount * this.positionsSize); // очищаем canvas для заново отрисовки

        this.showGrid();
        this.food.showFood();
        this.snake.showSnake();
    }

    showGrid() {
        const size = this.positionsCount * this.positionsSize;
        for (let x = 0; x <= size; x += this.positionsSize) {
            this.context.moveTo(0.5 + x + this.positionsSize, 0);
            this.context.lineTo(0.5 + x + this.positionsSize, size + this.positionsSize);
        }

        for (let x = 0; x <= size; x += this.positionsSize) {
            this.context.moveTo(0, 0.5 + x + this.positionsSize);
            this.context.lineTo(size + this.positionsSize, 0.5 + x + this.positionsSize);
        }
        this.context.strokeStyle = "black";
        this.context.stroke();
    }

}