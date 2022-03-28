// LivingCreature = require('./LivingCreature');

 module.exports =  class Lake /* extends LivingCreature */{
    constructor(x, y) {
        // super(x, y)
        this.x = x;
        this.y = y;
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
        for (let i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    emptyCells.push(this.directions[i]);
                }
            }
        }
        return emptyCells;
    }

    mul() {
        
        let found = this.chooseCell(0)
        let exact = found[Math.floor(Math.random() * found.length)]
        for (let i = 0; i < 5; i++) {
            if (exact && this.multiplay > 1) {
                let x = exact[0]
                let y = exact[1]

                let lake = new Lake(x, y)
                matrix[y][x] = 5
                lakeArr.push(lake)
                
                this.multiplay = 0
            }
            this.multiplay++
        }
    }
}