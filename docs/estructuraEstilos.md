- Seleccion por tipo (en este caso se estan seleccionando todos los textos):
`p {}` 

- Seleccion por id (selecciona aquellos los cuales estan identidicado por un id, por ej: `<p id="t1">`):
`#t1 {}`

- Seleccion de todo aquello que esta dentro del elemento indicado (ej: `<a> <button></button> </a>`)
`a button {}`

- Seleccion de todo lo que esta dentro de un id (ej: `<p id= "t2>"> <spam></spam> <spam></spam> <p></p>`)
`#t2 spam {}` (Seleccion de unicamente todos los `<spam>`)

- Seleccion por class (ej: `<div class= "si"></div>`)
`.si {}`

- Seleccion de elementos con la misma clase dentro de la misma etiqueta (por ej: `<p> <spam class= "s1"></spam> </p>`)
`p .s1 {}`

- Seleccion de mas de un elemento (`<p></p> <spam></spam>`):
`p, spam`

- Seleccion de todos los elementos dentro del codigo:
`*`

- Seleccion de todo lo que esta dentro de un elemento:
`p * {}` (todo lo que esta dentro de `<p></p>`)

- Seleccion del elemento siguiente al primer elemento nombrado (por ej: `<spam></spam> <img> <img>`)>
`spam + img {}` (la etiquetas img que le sigue a spam. SOLO LA SIGUIENTE)

- Seleccion de todo aquello lo cual se enctruentra siguiente de el (por ej: `<p></p> <img> <img> <img> <spam></spam>`)
`p ~ img` (selecciona todo aquello siguente a `p` que sea `img`)

- Seleccion de todos los hijos que sean el mismo (ej: `<section> <p></p> <p></p> <spam></spam> </section>`)
`section > p` (selecciona todos los `<p>` que sean hijos de `<section>`)
------------------------------------------------------------------------
# Etiquetas CSS

- margin:
Es el espacio externo del elemento.
Sirve para separar un elemento de otros.

Ejemplo:

`div {`
  `margin: 20px;`
`}`

- padding:
Es el espacio interno del elemento.
Separa el contenido del borde.

Ejemplo:

`div {`
  `padding: 20px;`
`}`

- padding:
Es el espacio interno del elemento.
Separa el contenido del borde.

Ejemplo:

`div {`
  `padding: 20px;`
`}`

- border:
Es el borde del elemento.
`div {`
  `border: 2px solid black;`
`}`

- width:
Define el ancho del elemento.
`div {`
  `width: 300px;`
`}`

- height:
Define el alto del elemento.
`div {`
 `height: 100px;`
`}`

- background-color:
Cambia el fondo del elemento.

`div {`
  `background-color: lightgray;`
`}`

- color:
Cambia el color del texto.

`p {`
  `color: black;`
`}`

- text-align:
Alinea el texto.

> Valores comunes:

> left → izquierda

> center → centro

> right → derecha

`h1 {`
  `text-align: center;`
`}`

- display:
Define cómo se comporta el elemento.

> Valores comunes:

> block → ocupa toda la línea

> inline → ocupa solo lo necesario

> inline-block → mezcla de ambos

> flex → para acomodar elementos fácilmente

`div {`
  `display: block;`
`}`

- display: flex:
Sirve para ordenar elementos de forma más fácil.

> Muy útil para:

> centrar

> poner cosas una al lado de la otra

> separar bloques

`.container {`
  `display: flex;`
`}`

- justify-content:
En flex, alinea los elementos horizontalmente.

> Valores comunes:

> center → al centro

> space-between → separados

> space-around → espacio alrededor

`.container {`
  `display: flex;`
  `justify-content: center;`
`}`

- align-items:
En flex, alinea los elementos verticalmente.

`.container {`
  `display: flex;`
  `align-items: center;`
`}`

- gap:
Agrega espacio entre elementos en flex o grid.

`.container {`
  `display: flex;`
  `gap: 10px;`
`}`

- font-family:
Cambia la tipografía.

`body {`
  `font-family: Arial, sans-serif;`
`}`

- font-size:
Cambia el tamaño del texto.

`p {`
  `font-size: 18px;`
`}`

- box-shadow:
Agrega una sombra al elemento.

> Muy bueno para:

> botones

> formularios

> tarjetas

`div {`
  `box-shadow: 0px 4px 8px gray;`
`}`

- transition:
Hace que los cambios se vean suaves.

`button {`
  `transition: 0.3s;`
`}`

- :hover:
Es una pseudo-clase de CSS que se activa cuando el usuario pasa el mouse por arriba de un elemento.

Sirve para hacer que un elemento cambie visualmente al apuntarlo con el cursor.

> Se usa mucho en:

> botones

> enlaces

> menús

> tarjetas

Ejemplo:

`button:hover {`
  `background-color: darkblue;`
  `color: white;`
`}`

En este caso, cuando el mouse pasa por arriba del botón:

cambia el color de fondo
cambia el color del texto