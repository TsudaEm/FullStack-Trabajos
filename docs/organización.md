Reglamento de organiza miento de software:
Introducción: 
El presente documento tiene como objetivo establecer normas y buenas prácticas para el desarrollo del proyecto web, asegurando un código ordenado, reutilizable y fácil de mantener.

Alcance:
Este reglamento aplica a todos los archivos HTML, CSS y JavaScript del proyecto.

Estructura general del proyecto:
El proyecto se organiza en carpetas según el tipo de archivo con el fin de mantener el orden, facilitar el mantenimiento y permitir la reutilización del código.

Estructura de carpetas:
/proyecto
	/assets
		/imagenes
		/iconos
	/css
		global.css
		variables.css
		reset.css

		pages/
			administrador.css
			articulos-de-electronica.css
			consultar.css
			electrodomesticos.css
			homepage-todoenblanco.css
			ingreso.css
			muebles.css
			sobre-nosotros.css
			trabaja-con-nosotros.css
		
		/components
			navbar.css
			footer.css
			buttons.css
			
	index.html
	administador.html
	articulos-de-electronica.html
	consultar.html
	electrodomesticos.html
	homepage-todoenblanco.html
	ingreso.html
	muebles.html
	sobre-nosotros.html
	trabaja-con-nosotros.html




Normas de organización:
Nombres de archivos:
Todos los nombres deben estar en minúsculas y utilizar guiones (-) para separar palabras.

Separación por responsabilidad:
Cada página HTML debe tener su propio archivo CSS. Los estilos reutilizables deben ubicarse en la carpeta de componentes.

Reutilización de código:
Evitar duplicar estilos y centralizar los elementos comunes como navbar, footer y botones.

Organización de recursos:
Las imágenes deben ubicarse en /assets/imagenes y los iconos en /assets/iconos.

Uso de contenedor por sección:
Cada vez que se cree una clase (class) que represente un tema o sección específica dentro de la página, esta deberá estar contenida dentro de un contenedor (container) con un nombre representativo y coherente con su contenido.
Esto permite mejorar la organización del código, facilitar la lectura y mantener una estructura clara y escalable.

Buenas practicas:
Mantener el código limpio, bien indentado, documentado cuando sea necesario y respetar la estructura definida.

Objetivo final:
Lograr un proyecto ordenado, escalable, fácil de entender y mantener.
x