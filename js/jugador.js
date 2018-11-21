/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: "imagenes/auto_rojo_abajo.png",
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  mover: function(desx, desy, dir) {
    switch (dir) {
      case "izq":
        this.sprite = "imagenes/auto_rojo_izquierda.png";
        this.ancho = 30;
        this.alto = 15;
        break;
      case "der":
        this.sprite = "imagenes/auto_rojo_derecha.png";
        this.ancho = 30;
        this.alto = 15;
        break;
      case "arriba":
        this.sprite = "imagenes/auto_rojo_arriba.png";
        this.ancho = 15;
        this.alto = 30;
        break;
      case "abajo":
        this.sprite = "imagenes/auto_rojo_abajo.png";
        this.ancho = 15;
        this.alto = 30;
    }
    this.x += desx;
    this.y += desy;
  },

  // ME GUSTARIA QUE APAREZCA UN ELEMENTO CON LA CANTIDAD DE VIDAS RESTANTES EN EL MEDIO DE LA PANTALLA Y SE VAYA DESVANECIENDO (COMO POMPAS DE JABÓN)
  perderVidas = function(cant) {
    this.vidas = this.vidas - cant;
    alert(`Perdiste una vida, te quedan ${this.vidas}`);
  }
};
