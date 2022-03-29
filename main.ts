input.onButtonPressed(Button.A, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        Hand = _1
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        Hand = _2
    } else {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        Hand = _3
    }
})
input.onButtonPressed(Button.B, function () {
    if (Hand == _1) {
        _1 = randint(4, 6)
        if (_1 == 4) {
            basic.showLeds(`
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        } else if (_1 == 5) {
            basic.showLeds(`
                . . . . .
                # . . . #
                . . . . #
                . . . . .
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        } else {
            basic.showLeds(`
                . . . . .
                # . . . #
                . . . . #
                . . . . #
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        }
    }
    if (Hand == _2) {
        _2 = randint(7, 9)
        if (_2 == 7) {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . .
                . . . . .
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        } else if (_2 == 8) {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . #
                . . . . .
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        } else {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . #
                . . . . #
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        }
    }
    if (Hand == _3) {
        _3 = randint(10, 12)
        if (_3 == 10) {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . .
                # . . . .
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        } else if (_3 == 11) {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . #
                # . . . .
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        } else {
            basic.showLeds(`
                . . . . .
                # . . . #
                # . . . #
                # . . . #
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        }
    }
})
let _3 = 0
let _2 = 0
let _1 = 0
let Hand = 0
music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # # .
        . # . . .
        . . # . .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . # # .
        . # . . .
        . . # . .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . # # .
        . # # # #
        . . # # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        # # # # #
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . # # .
        . # # # #
        . . # # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        # # # # #
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
