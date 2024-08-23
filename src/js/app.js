import {Game} from "./modules/game.js";

class App {

    settings = {
        positionsCount: 30, //30 ячеек по ширине и высоте
        positionsSize: 20 //20 пикселей каждая ячейка
    }

    constructor() {
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', (this.settings.positionsCount * this.settings.positionsSize).toString());
        canvas.setAttribute('height',(this.settings.positionsCount * this.settings.positionsSize).toString());
        document.getElementById('container').appendChild(canvas);

        const context = canvas.getContext('2d'); //двухмерная графика

        new Game(context, this.settings);
    }

}

(new App());