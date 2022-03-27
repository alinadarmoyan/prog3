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
		var grassCells = super.chooseCell(1);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)]

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;
			this.energy+=2;

			if (this.energy >= 40) {
				console.log(this.energy);
				this.mul();
			}

		}
		else {
			this.move();
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