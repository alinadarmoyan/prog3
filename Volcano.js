LivingCreature = require('./LivingCreature');

module.exports = class Volcano extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.multiplay = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1]
        ];
    }

    
    chooseCell(a, b, c, d, e, f, g) {
        let result = []
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == a || matrix[y][x] == b || matrix[y][x] == c || matrix[y][x] == d || matrix[y][x] == e || matrix[y][x] == f || matrix[y][x] == g ) {
                    result.push(this.directions[i])
                }
            }
        }
        return result
    }

    kill(character, x, y) {
        if(character == 0){
            return
        }
        else if(character == 1){
            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
        }
        else if (character == 2){
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
        }
        else if (character == 3){
            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == x && predatorArr[i].y == y) {
                    predatorArr.splice(i, 1)
                }
            }
        }
        else if (character == 5){
            for (let i = 0; i < lakeArr.length; i++) {
                if (lakeArr[i].x == x && lakeArr[i].y == y) {
                    lakeArr.splice(i, 1)
                }
            }
        }
        else if(character == 6){
            return
        }
        else if(character == 8){
            return
        }
        else if (character == 9){
            for (let i = 0; i < amenakerArr.length; i++) {
                if (amenakerArr[i].x == x && amenakerArr[i].y == y) {
                    amenakerArr.splice(i, 1)
                }
            }
        }
    }

    mul() {
        let found = this.chooseCell(0, 1, 2, 3, 8, 6, 9)
        let emptyCells = this.chooseCell(0)
        let exact = found[Math.floor(Math.random() * emptyCells.length)]
        if (exact && this.multiplay > 6) {
            let x = exact[0]
            let y = exact[1]
            console.log(" ERRRRRRROROOOOORRRRR", matrix[y]);
            
            const existCharacter = matrix[y][x]
            this.kill(existCharacter, x, y)
            let volcano = new Volcano(x, y)
            matrix[y][x] = 7
            volcanoArr.push(volcano)
            this.multiplay = 0
        }
        this.multiplay++
    }

}




