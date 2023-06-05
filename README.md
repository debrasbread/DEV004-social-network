# Marchantes

Marchantes es una red social dirigida a productores, comerciantes y compradores locales. Consiste en una _Single-page Application (SPA) responsive_ que, hasta este momento, permite a los usuarios crear una cuenta de acceso, loguearse, ver el feed general, crear publicaciones y editarlas o borrarlas. Por ahora cuenta con cuatro vistas: home, register, logIn y feed. Para realizar los procesos de autenticación y garantizar la persistencia de los datos usé Firebase y Firestore, respectivamente. Si bien las funcionalidades son aún muy elementales, éste es un proyecto escalable. Más adelante pueden leerse algunas mejoras contempladas para la siguiente fase de desarrollo.

![Interfaz de usuario para teléfono: home, register, logIn y feed](vistas_marchantes_cel.png)

![Interfaz de usuario para escritorio: home](home_escritorio.png)

![Interfaz de usuario para escritorio: register](registro_escritorio.png)

![Interfaz de usuario para escritorio: logIn](login_escritorio.png)

![Interfaz de usuario para escritorio: feed](feed_escritorio.png)

## Principales usuarios del producto:

* Pequeños productores de frutas y verduras o alimentos frescos y derivados.
* Pequeños comerciantes que quieran ampliar su oferta de productos o que busquen nuevos proveedores.
* Compradores interesados en saber más sobre el origen de los productos, encontrar los mejores precios, conocer las frutas y verduras de estación, etc.

## Problema que resuelve el producto:

Marchantes busca ser un puente entre productores, comerciantes y compradores de productos frescos y derivados que habitualmente pueden encontrarse en un mercado para facilitar el contacto directo y el acceso a la información: origen, particularidades de la producción, precio, puntos de distribución, ventas especiales, etc.

## Objetivo:

* Promover el comercio justo (productor-comprador, productor-comerciante, comerciante-comprador).
* Favorecer la producción y distribución local y a pequeña escala.
* Reducir el desperdicio de alimentos (merma).

## Historias de usuario y vistas

Para determinar qué componentes conformarían cada una de las cuatro vistas que existen actualmente, tras haber realizado una consulta a manera de encuesta a cinco personas, con las peticiones elaboré una serie de historias de usuario (HU) o frases que se traducen en funcionalidades (como botones o inputs que hacen cosas). A continuación están enlistadas las vistas con sus respectivas HU (diez en total) y las funcionalidades correspondientes. Poseteriormente se encuentran los criterios de aceptación y la definición de terminado, en este caso, comunes a todas las HU.

### Home

HU1.- _Yo, como compradora y usuaria de Marchantes, quiero ver, en primera instancia, las opciones de acceso (logIn y Registro) para ingresar a la página de manera sencilla._

- Botón para iniciar sesión
- Botón para registrarse

### Register

HU1.- _Yo, como vendedora y usuaria de Marchantes, quiero tener la opción de registrarme con mi nombre, mi correo y una contraseña para ingresar a la página de manera sencilla._

- Formulario para introducir nombre, correo y contraseña
- Botón para continuar

HU2.- _Yo, como vendedora y usuaria de Marchantes, quiero tener la opción de registrarme con mi cuenta de Google para ingresar a la página rápido, sin necesidad de llenar un formuario._

- Botón para registrarse con Google

### LogIn

HU1.- _Yo, como vendedora y usuaria de Marchantes, quiero tener la opción de iniciar sesión con mi nombre, mi correo y una contraseña (ya guardados) para ingresar a la página de manera sencilla._

- Formulario para introducir nombre, correo y contraseña
- Botón para continuar

HU2.- _Yo, como vendedora y usuaria de Marchantes, quiero tener la opción de iniciar sesión con mi cuenta de Google para ingresar a la página rápido, sin necesidad de llenar un formuario._

- Botón para iniciar sesión con Google

### Feed

HU1.- _Yo, como compradora y usuaria de Marchantes, quiero poder ver las publicaciones de otros usuarios para conocerlos y estar al tanto de las novedades relacionadas con productos o puntos de venta._

- Listado de posts de todos los usuarios
- Campo de texto para escribir post

HU2.- _Yo, como compradora y usuaria de Marchantes, quiero poder crear mis propios posts para participar activamente en la comunidad._

- Botón para publicar post

HU3.- _Yo, como compradora y usuaria de Marchantes, quiero poder editar mis posts para hacer correcciones, aclaraciones o cambios si fuera necesario._

- Botón para editar el post
- Botón para guardar el post editado

HU4.- _Yo, como compradora y usuaria de Marchantes, quiero poder eliminar mis posts para que deje estar a la vista de los demás información que ya no considero útil o precisa._

- Botón para eliminar el post

HU5.- _Yo, como compradora y usuaria de Marchantes, quiero poder cerrar sesión para evistar que otras personas accedan a mi cuenta si usan el mismo dispositivo; también para desconectarme y descansar._

- Botón para cerrar sesión (volver a home)


* **Criterios de aceptación para las historias de usuario:** 

  - Que se desplieguen todos los elementos correctamente: imágenes de fondo, logo, inputs (si aplica) y botones, y actúen conforme a lo esperado.

* **Definición de terminado para las historias de usuario:** 

  - Que sea una SPA.
  - Que sea _responsive_.
  - Que haya recibido _code review_ de al menos dos personas.
  - Que cuente con _test_ unitario.
  - Que cuente con _test_ manual.
  - Que cuente con pruebas de usabilidad y se haya incorporado el _feedback_ de los usuarios.
  - Que esté desplegada en GitHub/Vercel.

### Diagrama de flujo

Para definir el flujo del usuario dentro de la aplicación y decidir cuáles serían las instancias mínimas por las que atravesaría en esta primera fase de desarrollo, elaboré el siguiente diagrama.

![Diagrama de flujo de usuario]('diagrama-de-flujo.png')

### Prototipos de alta calidad

Tras haber definido el flujo de usuario y elaborado un prototipo de baja calidad o bosquejo de la interfaz de usuario para cada una de las vistas, hice uno de alta calidad usando Figma. Si bien hay elementos que en la última versión del sitio, ya desplegado, lucen distintos, este modelo resultó sumamente útil como guía para la definición de la composición, los estilos e incluso las funcionalidades de la aplicación.

![Prototipo de alta calidad]('prototipo-marchantes.png')

### Pruebas unitarias

- Las pruebas unitarias detectaron problemas que aún debo resolver. Para efectos de esta primera entrega mostraré el test que corresponde a la función 'home', de la vista con el mismo nombre, con una cobertura de apenas 82.85% para sentencias (statements), 50% para ramas (branch), 50% para funciones (functions), y 82.85% para líneas (lines) del total de los archivos asociados.

![Test para Home]('test-home.png')
