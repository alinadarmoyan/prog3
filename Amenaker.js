LivingCreature = require('./LivingCreature');

module.exports = class Amenaker extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.energy = 60
        
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
        if (exact && this.energy >= 120) {
            let x = exact[0]
            let y = exact[1]

            let eater = new Amenaker(x, y)
            matrix[y][x] = 9
            amenakerArr.push(eater)

            this.energy = 60
        }
    }

	eat() {
        let found = this.chooseCell(2)
        let exact = found[Math.floor(Math.random() * found.length)]
        let found2 = this.chooseCell(3)
        let exact2 = found2[Math.floor(Math.random() * found.length)]
        let found1 = this.chooseCell(1)
        let exact1 = found1[Math.floor(Math.random() * found.length)]
        if (exact) {
            this.energy += 5
            let x = exact[0]
            let y = exact[1]
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            matrix[y][x] = 9
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y
            if (this.energy >= 120) {
                this.mul()
            }
        }
        else if (exact1) {
            this.energy += 5
            let x = exact1[0]
            let y = exact1[1]
            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            matrix[y][x] = 9
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y
            if (this.energy >= 120) {
                this.mul()
            }
        }
        else if (exact2) {
            this.energy += 5
            let x = exact2[0]
            let y = exact2[1]
            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == x && predatorArr[i].y == y) {
                    predatorArr.splice(i, 1)
                }
            }
            matrix[y][x] = 9
            matrix[this.y][this.x] = 0

            this.x = x
            this.y = y
            if (this.energy >= 120) {
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
        for (let i = 0; i < amenakerArr.length; i++) {
            if (amenakerArr[i].x == this.x && amenakerArr[i].y == this.y) {
                amenakerArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}