LivingCreature = require('./LivingCreature');

module.exports = class Lake extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.multiplay = 0
        this.directions = [
            [this.x + 1, this.y + 1]
        ];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char) {
        this.getNewCoordinates()
        var emptyCells = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    emptyCells.push(this.directions[i]);
                }
            }
        }
        return emptyCells;
    }

    mul() {
        this.multiply++;
        if (this.multiply >= 3) {
            let emptyCells = super.chooseCell(0)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0]
                let y = newCell[1]
                let lake = new Lake(x, y)
                lakeArr.push(lake)
                this.multiply = 0;
            }
        }
    }
}