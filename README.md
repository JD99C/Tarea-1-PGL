# Concesionario

Este proyecto es una peque帽a aplicaci贸n de un concesionario con el objetivo de poner en practica lo aprendido en las clases.
Siguiendo los pasos de los PDF se ha creado el backend y frontend de la aplicaci贸n. 
Este proyecto es algo muy sencillo ya que su objetivo era practicar para aprender a usar las funciones del backend GET, POST, DELETE y UPDATE.

## Comenzando 馃弾

_Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo y pruebas._

## Pre-requisitos 馃捇

Programas necesarios para usar el proyecto:

* Visual Studio Code 
* Node.js
* MySQL Server y MySQL Workbench (La version que uso es la MySQL Workbench 8.0 CE)
* Postman

B谩sicamente todas te las descargas de sus respectivas paginas oficiales y las instalas normal. 

## Instalaci贸n 馃敡

Para poder usar el proyecto y ver como se ejecuta antes tenemos que seguir unos pasos que lo dividire en 2 partes:

### PARTE 1 - Creaci贸n de base de datos en MySQL Workbench

Una vez te hayas instalado MySQL Server y MySQL Workbench, abre MySQL Workbench y aqu铆 tienes tres opciones: 

Opci贸n 1: Modifica tu conexi贸n Local y pones estos datos:  

* Hostname: localhost
* Port: 3306
* Username: root
* Password: 1234

Opci贸n 2: Crea una nueva conexi贸n con los mismo datos de arriba.

Opci贸n 3: Vas al proyecto y en la carpeta backend dentro de la carpeta config hay un fichero llamado db.config.js hay le puedes cambiar los datos para que se conecte a tu conexi贸n y a tu base de datos correspondiente.

Una vez hecho eso dentro de la conexi贸n nos creamos nuestra base de datos llamada "db_concesionario" y dentro de la base de datos creamos una tabla llamada "coches" con los datos:

* id: INT PK NN AI
* matricula: VARCHAR(255)
* marca: VARCHAR(255)
* modelo: VARCHAR(255)

Al crear la tabla tambi茅n se nos a帽adir谩 dos datos mas llamados: "createdAt" y "updatedAt" esos los dejamos como est谩n. Con esto ya tendr铆amos nuestra base de datos.

Ahora pasamos al proyecto para poder ejecutar nuestra aplicaci贸n.

### PARTE 2 - Ejecucion de la aplicaci贸n

1潞 Una vez te hayas descargado el proyecto, abre la carpeta 鈥渃oncesionario鈥? con Visual Studio Code. 

2潞 Una vez abierto el proyecto con el Visual Studio Code, abre 2 terminales (Para abrirlo en Visual Studio Code con "CTRL+帽" se te abre uno, para a帽adir el otro es pulsando en el + )

3潞 Ahora en uno de los dos terminales nos dirigimos a la carpeta del backend usando este c贸digo:

* cd backend/

Y despu茅s de entrar en la carpeta ponemos este otro c贸digo:

* node index.js

Con esto estaremos ejecutando nuestra API

4潞 Ahora nos dirigimos al otro terminal y nos dirigimos a la carpeta frontend usando este c贸digo:

* cd frontend/

Y una vez dentro de la carpeta frontend usamos este otro c贸digo para poder instalarle las librer铆as necesarias para que nuestro programa funcione correctamente:

* npm install

Una vez termine de instalar las librer铆as usamos este ultimo c贸digo para ejecutar el proyecto:

* ionic serve

Con esto ya nos abrir铆a el proyecto en nuestro navegador y podremos probarlo


## Ejecutando las pruebas 鈿欙笍

Una vez que nuestra base de datos este lista y el proyecto abierto en nuestro navegador, ya podemos usarlo para ver como funciona:

Lo primero que ponemos ver es la ventana principal y si nos fijamos en la parte inferior vemos tres botones. 

Primero pincharemos en el bot贸n que pone "A帽adir Coches" ah铆 podemos escribir los datos del coche que queremos introducir y una vez que le demos al bot贸n "Insertar" nos llevara al listado de coches y podremos ver nuestro coche insertado en la lista. 

Ahora si vamos a la aplicaci贸n "MySQL Workbench", entramos en la base de datos y refrescamos los datos podemos ver que nuestro coche se ha insertado correctamente.

Si volvemos a la aplicaci贸n del concesionario en la lista se puede ver 2 botones uno para eliminar y otro para actualizar datos.

Si pinchamos en el de actualizar datos veremos que nos llevara a otra ventana con un formulario con los datos del coche que elegimos, ah铆 podemos cambiar los datos y poner los que queramos y una vez terminamos de cambiar los datos pinchamos en el bot贸n "Actualizar", el programa nos llevara a la lista y veremos que los datos del coche que elegimos ha cambiado.

Si volvemos a la aplicaci贸n "MySQL Workbench" y refrescamos los datos de nuestra base de datos veremos que han cambiado.

Por ultimo, en la lista de coches, si pulsamos en el bot贸n eliminar veremos que se eliminara nuestro coche, y si volvemos a la base de datos y refrescamos datos se eliminara tambi茅n.

## Enlace a POSTMAN con los accesos a los end-points 馃攲

https://documenter.getpostman.com/view/23450722/2s83tCLDgj

Aqui denjo el enlace a postman donde continene todos los accesos para poder hacer los end-point de la aplicacion sin tener que entrar en ella.

## Construido con 馃洜锔?

_Herramientas usadas en el proyecto:_

* Visual Studio Code 
* Node.js
* MySQL Server y MySQL Workbench (La version que uso es la MySQL Workbench 8.0 CE)
* Postman
 
## Autores 鉁掞笍

_Menci贸n a todos aquellos que ayudaron a levantar el proyecto:_

* **Yo - Juan de Dios** - *Todo el proyecto* 
* **Profesor - Tiburcio** - *Documentaci贸n en PDf para poder hacer el proyecto*

## Licencia 馃搫

Libre de toda Licencia

## Expresiones de Gratitud 馃巵

* Gracias al profesor Tiburcio por dar los PDF y ayudar en las clases de Tutoria para poder terminar el proyecto.
