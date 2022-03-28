module.exports = class Grass {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiplay = 0
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
        let result = []
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    result.push(this.directions[i])
                }
            }
        }
        return result
    }

    mul() {

        let found = this.chooseCell(0)
        let exact = found[Math.floor(Math.random() * found.length)]
        if (exact && this.multiplay > 3) {
            let x = exact[0]
            let y = exact[1]

            let grass = new Grass(x, y)
            matrix[y][x] = 1
            grassArr.push(grass)
            
            this.multiplay = 0
        }
        this.multiplay++
    }
}
