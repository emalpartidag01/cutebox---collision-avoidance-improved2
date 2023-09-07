input.onButtonPressed(Button.AB, function () {
    cuteBot.motors(0, 0)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
})
let sonar = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . # . # .
    . . # . .
    `)
cuteBot.motors(20, 20)
basic.forever(function () {
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 255)
    basic.pause(200)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 0, 0)
    basic.pause(200)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 0, 0)
    basic.pause(200)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 255)
    basic.pause(200)
})
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 15) {
        for (let index = 0; index < 4; index++) {
            music.playTone(880, music.beat(BeatFraction.Quarter))
        }
        basic.pause(100)
        cuteBot.motors(randint(-50, -100), 0)
        basic.pause(100)
    } else {
        cuteBot.motors(20, 20)
    }
})
