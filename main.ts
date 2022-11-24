input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # # # . .
        # # # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
    	
    } else {
        if (true) {
        	
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . # # #
        . . # # #
        `)
})
basic.showString("start")
