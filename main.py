contador = 0
# Bucle while que cuenta del 0 al 4

def on_forever():
    global contador
    while contador < 5:
        basic.show_number(contador)
        basic.pause(1000)
        contador += 1
    # Bucle for que muestra un corazón latiendo 5 veces
    for index in range(5):
        basic.show_icon(IconNames.HEART)
        basic.pause(500)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(500)
basic.forever(on_forever)
