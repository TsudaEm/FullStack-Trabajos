# Etiquetas HTML

## Etiquetas obligatoras
- html: Etiqueta principal donde se envuelve todo.
- `<head>`: Contiene los metadatos de una pagina.
- `<button>`: Crea botones, Tiene apertur y cierre.
Ejemplo \<button type= "button">Haz click aqui \</button>
- `<b>...<b>` : Nos deja escribir en negrita Ej: \<b> lola<b\>, <b>lola</b>
- `<body> <\body>`: Indica el comienzo y el fin del cuerpo de la pagina.
- `<p>...</p>`: Indica el comienzo y el fin de un parrafo.
- `<br>`: Permite saltarse una linea (Salto de linea).
- `<ol> \<ol>`: nos ayuda a enumerar
- `<li>`: Permite la enumeracion numerica.
- `<ul>`: Permite la enumeracion por punteo.
<br>
ej:
<br>
`<ol>`
<br>
`<li>`
<br>
`<li>`
<br>
`<li>`
<br>
`<ul>`
<br>
`<li>`
<br>
`<li>`   
`</ol>`

Como se ve:

<ol>
<li> pan
<li> arroz
<li> carne:
<ul>
<li>res
<li>novill
</ol>

- `<img src="ruta" alt="texto altrnativo">` 
Nombre del archico: nos permite añadir imagenes.
`<align>`: nos permite alinear un texto con la imagen
`<align>`=top (por defecto) lo pone encima de la esquina derecha de la imagen
`<align>`=middle: Pone el texto centrado en la imagen del lado derecho
`<align>`=bottom: Coloca eltexto en la esquina derecha inferior de la imagen.
- `<h1><h1>`: titulo de la pagina
- `<figure>... <figure>: Secion donde colocar imagen`
`<figcaption>...<figcaption>`: Texto descriptor de la imagen
- `<p>...<p>`: Informacion de tipo parrafo.
- `<span>`: Informacion breve/abreviada, de tipo texto.
- `<blockquote> </blockquote>` : Bloques largos de texto con sangria
- `<q> </q>` : citas cortas
- `<cite> </cite>` Citado de una obra 
- `<i></i>`: texto cursiva 

- `<a>...</a>`:Hipervinculo a otros lugares. Ejemplo: `<a href="otra pagina.html" target="_blank">Enlace </a>`

- `<table></table>`: Indica seccion con tabla
- `<tr></tr>` indica una fila
- `<th></th>`: Encabezado de la tabla
- `<thead></thead>`: Categorias de la tabla
- `<tbody></tbody>`: cuarpo de la tabla con los datos
- `<table>`:tablita si aregas border te queda mejor `<table border="1">`:tablia mejorada 

- `<header></header>`: Es la cabecera de la página. Se ubica en la parte superior y sirve para mostrar información principal como el logo, título del sitio, nombre de la empresa o una presentación inicial.

- `<nav></nav>`: Es la barra de navegación. Generalmente va debajo del header o al costado. Sirve para colocar enlaces o menús que permiten moverse entre distintas secciones de la página (Inicio, Contacto, Productos, etc.).

- `<section></section>`: Es una sección de contenido dentro de la página. Se utiliza para agrupar información relacionada entre sí. Por ejemplo: sección de noticias, sección de productos o sección de servicios.

- `<article></article>`: Representa un contenido independiente dentro de la página. Se usa para noticias, publicaciones, entradas de blog o artículos que pueden entenderse por sí solos.

- `<aside></aside>`: Es el contenido secundario o complementario. Generalmente se coloca al costado. Sirve para mostrar publicidad, enlaces extras, datos adicionales o contenido relacionado con lo principal.

- `<footer></footer>`: Es el pie de página. Se ubica al final de la página y suele contener información como derechos de autor, redes sociales, contacto o enlaces importantes.

- `<filset></filset>`

- `<form>`
 es para crear formularios pa que el usuario rellene 
`</form>`
- `<input type="text">`es el canpo dodnde el usuario escribe y el text es el tipo quiere decir que use un tipoo text por ejemplo o que use un tipo email si dice email  
- `<textarea></textarea>` es un campo pa escribir mucho texto
- `<label>Nombre:</label>` eS EL TEXTO QUE DEscribe un campo    
- `<div class="personal-necessary">`SIRVE PARA AGRUPAR COSAS Y USAR CSS
- `<h3>Personal de logística</h3>` es un subtitulo  

# Etiquetas CSS

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
