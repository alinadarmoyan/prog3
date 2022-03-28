const socket = io()
var side = 15
var weath = 'spring'

function setup() {
    createCanvas(side * 50, side * 50)
}

function weather() {
    if (weath == 'winter') {
        weath  = "spring"
    }
    else if (weath  == "spring") {
        weath = 'summer'
    } 
    else if (weath == 'summer') {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
}
setInterval(weather, 5000)


function nkarel(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#DEDEDE")
            } else if (matrix[y][x] == 1) {
                if (weath == "spring") {
                    fill("green")  
                }
                else if (weath == "summer") {
                    fill("green")
                }
                else if (weath == "autumn") {
                    fill("#FF752B")
                }
                else if (weath == "winter") {
                    fill("white")
                }
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("#da0a00")
            } else if (matrix[y][x] == 5) {
                if (weath == "spring") {
                    fill("blue") 
                }
                else if (weath == "summer") {
                    fill("#0E0E90")
                }
                else if (weath == "autumn") {
                    fill("blue")
                }
                else if (weath == "winter") {
                    fill(" #2457E0")
                }
            } else if (matrix[y][x] == 8) {
                fill('#3d2d17')
            } else if (matrix[y][x] == 7) {
                fill('#ff2c00')
            } else if (matrix[y][x] == 6) {
                fill('#503B1D')
            } else if (matrix[y][x] == 9) {
                fill('#C47F4C')
            }
            rect(x * side, y * side, side, side)
        }
    }
}
socket.on("send matrix", nkarel)

function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addGrassEater() {
    socket.emit("add grassEater")
}
function addPredator() {
    socket.emit("add predator")
}
function addAmenaker() {
    socket.emit("add amenaker")
}