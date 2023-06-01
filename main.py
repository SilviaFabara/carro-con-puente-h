basic.show_icon(IconNames.HAPPY)

def on_forever():
    while pins.digital_read_pin(DigitalPin.P8) == 0 and pins.digital_read_pin(DigitalPin.P16) == 0:
        pins.analog_write_pin(AnalogPin.P0, 400)
        pins.analog_write_pin(AnalogPin.P1, 400)
    while pins.digital_read_pin(DigitalPin.P8) == 1 and pins.digital_read_pin(DigitalPin.P16) == 0:
        pins.analog_write_pin(AnalogPin.P0, 0)
        pins.analog_write_pin(AnalogPin.P1, 400)
    while pins.digital_read_pin(DigitalPin.P8) == 0 and pins.digital_read_pin(DigitalPin.P16) == 1:
        pins.analog_write_pin(AnalogPin.P0, 400)
        pins.analog_write_pin(AnalogPin.P1, 0)
    while pins.digital_read_pin(DigitalPin.P8) == 1 and pins.digital_read_pin(DigitalPin.P16) == 1:
        pins.analog_write_pin(AnalogPin.P0, 0)
        pins.analog_write_pin(AnalogPin.P1, 0)
basic.forever(on_forever)
