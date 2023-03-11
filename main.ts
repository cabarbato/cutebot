radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
    if (("emote" as any) == ("0" as any)) {
        basic.showIcon(IconNames.Heart)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    } else if (("emote" as any) == ("1" as any)) {
        basic.showIcon(IconNames.Sad)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    } else if (("emote" as any) == ("2" as any)) {
        basic.showIcon(IconNames.Angry)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
    } else if (("emote" as any) == ("3" as any)) {
        basic.showIcon(IconNames.Asleep)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    }
})
let yValue = 0
let xValue = 0
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
radio.setGroup(1)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . # . #
        . # . # .
        `)
    cuteBot.motors(yValue + xValue, yValue - xValue)
})
