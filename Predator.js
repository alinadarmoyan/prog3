LivingCreature = require('./LivingCreature');

module.exports = class Predator extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.energy = 50
        
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

    mul() {
        let found = this.chooseCell(0)
        let exact = found[Math.floor(Math.random() * found.length)]
        if (exact && this.energy >= 100) {
            let x = exact[0]
            let y = exact[1]

            let eater = new Predator(x, y)
            matrix[y][x] = 3
            predatorArr.push(eater)

            this.energy = 50
        }
    }

	eat() {
        let found = this.chooseCell(2)
        let exact = found[Math.floor(Math.random() * found.length)]
        if (exact) {
            this.energy += 5
            let x = exact[0]
            let y = exact[1]
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            matrix[y][x] = 3
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y
            if (this.energy >= 100) {
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


    die() {
        for (let i = 0; i < predatorArr.length; i++) {
            if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                predatorArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}