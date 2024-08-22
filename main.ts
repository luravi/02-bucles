let contador = 0
// Bucle while que cuenta del 0 al 4
basic.forever(function () {
    while (contador < 5) {
        basic.showNumber(contador)
        basic.pause(1000)
        contador += 1
    }
    // Bucle for que muestra un corazón latiendo 5 veces
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
    }
})
