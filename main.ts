basic.showIcon(IconNames.Happy)
basic.forever(function () {
    while (pins.digitalReadPin(DigitalPin.P8) == 0 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.analogWritePin(AnalogPin.P0, 400)
        pins.analogWritePin(AnalogPin.P1, 400)
    }
    while (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P16) == 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 400)
    }
    while (pins.digitalReadPin(DigitalPin.P8) == 0 && pins.digitalReadPin(DigitalPin.P16) == 1) {
        pins.analogWritePin(AnalogPin.P0, 400)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
    while (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P16) == 1) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
