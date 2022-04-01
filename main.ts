let 밝기 = 0
let 어두운정도 = 0
function 전원내림 () {
    basic.clearScreen()
}
function 중간어둠 () {
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
}
function 밝기분류 () {
    밝기 = input.lightLevel()
    if (밝기 > 180) {
        어두운정도 = 0
    } else if (120 < 밝기 && 밝기 <= 180) {
        어두운정도 = 1
    } else if (60 < 밝기 && 밝기 <= 120) {
        어두운정도 = 2
    } else {
        어두운정도 = 3
    }
}
function 기기표시 () {
    if (어두운정도 == 0) {
        전원내림()
    } else if (어두운정도 == 1) {
        약한어둠()
    } else if (어두운정도 == 2) {
        중간어둠()
    } else {
        강한어둠()
    }
}
function 약한어둠 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
}
function 강한어둠 () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
}
basic.forever(function () {
    밝기분류()
    기기표시()
})
