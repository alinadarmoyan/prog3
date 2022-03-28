LivingCreature = require('./LivingCreature');

module.exports = class GrassEater extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.energy = 20
        
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char) {
        this.getNewCoordinates()
        return super.chooseCell(char)
    }

    eat() {
        let found = this.chooseCell(1)
        let exact = found[Math.floor(Math.random() * found.length)]
        if (exact) {
            this.energy += 5
            let x = exact[0]
            let y = exact[1]
            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y
            if (this.energy >= 40) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }

    move() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY
		}

		this.energy--;
		if (this.energy <= 0) {
			this.die();
		}


	}

    mul() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
            var grEater = new GrassEater(newX, newY)
            grassEaterArr.push(grEater)
			this.energy = 20;
		}
	}

    die() {
        matrix[this.y][this.x] = 0
    }
}