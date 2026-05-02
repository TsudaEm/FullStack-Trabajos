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

- <a>...</a>: Hipervinculo. href para ingresar la ruta/url a la cual redirigirse. target indica si abrirlo en la misma pestania o en otra, para abrirlo en otra se usa target="_blank. Se usa mailto en el atributo href para redirigir al usuario a enviar un correo, ejemplo: href="mailto:correo@aol.com". Lo mismo de mailto ocurre con tel. Ejemplo: <a href="otraPagina.html" target="_blank">Enlace</a>

- `<table></table>`: Indica seccion con tabla

- `<tr></tr>` indica una fila

- `<th></th>`: Encabezado de la tabla

- `<thead></thead>`: Categorias de la tabla

- `<tbody></tbody>`: cuarpo de la tabla con los datos

- `<table>`:tablita si aregas border te queda mejor `<table border="1">`:tablia mejorada 

- `<select></select>:`
Crea una lista desplegable.
Sirve para que el usuario elija una opción entre varias.

- `<option></option>`:
Representa cada opción dentro de un `<select>`.
selected: indica cuál opción aparece marcada por defecto al cargar la página.
----------------------------------------------------------------------------------------------------------------------------------
- `<header></header>`: Es la cabecera de la página. Se ubica en la parte superior y sirve para mostrar información principal como el logo, título del sitio, nombre de la empresa o una presentación inicial.

- `<nav></nav>`: Es la barra de navegación. Generalmente va debajo del header o al costado. Sirve para colocar enlaces o menús que permiten moverse entre distintas secciones de la página (Inicio, Contacto, Productos, etc.).

- `<section></section>`: Es una sección de contenido dentro de la página. Se utiliza para agrupar información relacionada entre sí. Por ejemplo: sección de noticias, sección de productos o sección de servicios.

- `<article></article>`: Representa un contenido independiente dentro de la página. Se usa para noticias, publicaciones, entradas de blog o artículos que pueden entenderse por sí solos.

- `<aside></aside>`: Es el contenido secundario o complementario. Generalmente se coloca al costado. Sirve para mostrar publicidad, enlaces extras, datos adicionales o contenido relacionado con lo principal.

- `<footer></footer>`: Es el pie de página. Se ubica al final de la página y suele contener información como derechos de autor, redes sociales, contacto o enlaces importantes.

- `<fieldset></fieldset>`:
Sirve para agrupar varios campos relacionados dentro de un formulario.
Visualmente suele mostrar un recuadro alrededor de esos campos.

- `<legend></legend>`:
Es el título del fieldset.
Sirve para indicar qué grupo de datos contiene ese recuadro.



- `<form>`
 es para crear formularios pa que el usuario rellene 
`</form>`

- `<input type="text">`es el campo dodnde el usuario escribe y el text es el tipo quiere decir que use un tipoo text por ejemplo o que use un tipo email si dice email  

- `<textarea></textarea>` es un campo pa escribir mucho texto

- `<label>Nombre:</label>` eS EL TEXTO QUE DEscribe un campo    

- `<div class="personal-necessary">`SIRVE PARA AGRUPAR COSAS Y USAR CSS

- `<h3>Personal de logística</h3>` es un subtitulo




-onsubmit :ejecuta una accion cuando envias el formulario ej:<form onsubmit="alert('Consulta enviada con éxito')">  

  -ejecuta una accion cuadno envias formulario ej:<form onsubmit="alert('Consulta enviada con éxito')">

  - maxlength: Cantidad maxima de caracteres de caracteres ej:
   <textarea name="consulta" maxlength="500" placeholder="Ingrese aquí su consulta de forma detallada"
   -placeholder:texto dentro del input guia

  minlength : Limita el minimo de caracteres que se pueden utilizar.

  pattern="[0-9]{8}": Pone como condición un patron. En este caso, los datos que ingrese el usuario deben ser únicamente números naturales del 0 al 9, y deben ser 8, ni más ni menos.

  accept=".extension": Permite ciertas extensiones de archivos (solo en un input type file).

  autocomplete="name": Permite autocompletar un campo.

  required: Hace que el campo sea obligatorio.

  autofocus: Hace que esté seleccionado el campo automáticamente al ingresar a la página.

<input>: Permite al usuario ingresar un dato que puede ser utilizado por la página. Este comando puede recibir muchos atributos para configurar información sobre el dato y parámetros sobre cómo se va a usar después. Usar type para especificar que tipo de atributo se quiere recibir.

<input type="password">: No hace visible lo que el usuario está escribiendo.

<input type="number">: Hace que solo se permitan ingresar numeros.

<input type="email">,: Agrega un campo para el formato email.

<input type="checkbox">: Crea un campo seleccionable.

<input type="submit">: Cumple la misma función que <button> cuando está adentro de un form.
