# Concesionario

Este proyecto es una pequeña aplicación de un concesionario con el objetivo de poner en practica lo aprendido en las clases.
Siguiendo los pasos de los PDF se ha creado el backend y frontend de la aplicación. 
En el backend solo esta implementado los métodos GET, POST y DELETE. El método UPDATE no esta implementado debido a que se ha encontrado muchas complicaciones para poder insertarlo correctamente, pero a parte de esto, todo lo demás funciona correctamente.

## Comenzando 🏎

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

## Pre-requisitos 💻

Programas necesarios para usar el proyecto:

* Visual Studio Code 
* Node.js
* MySQL Server y MySQL Workbench (La version que uso es la MySQL Workbench 8.0 CE)
* Postman

Básicamente todas te las descargas de sus respectivas paginas oficiales y las instalas normal. 

## Instalación 🔧

Para poder usar el proyecto y ver como se ejecuta antes tenemos que seguir unos pasos que lo dividire en 2 partes:

### PARTE 1 - Creación de base de datos en MySQL Workbench

Una vez te hayas instalado MySQL Server y MySQL Workbench, abre MySQL Workbench y aquí tienes tres opciones: 

Opción 1: Modifica tu conexión Local y pones estos datos:  

* Hostname: localhost
* Port: 3306
* Username: root
* Password: 1234

Opción 2: Crea una nueva conexión con los mismo datos de arriba.

Opción 3: Vas al proyecto y en la carpeta backend dentro de la carpeta config hay un fichero llamado db.config.js hay le puedes cambiar los datos para que se conecte a tu conexión y a tu base de datos correspondiente.

Una vez hecho eso dentro de la conexión nos creamos nuestra base de datos llamada "db_concesionario" y dentro de la base de datos creamos una tabla llamada "coches" con los datos:

* id: INT PK NN AI
* matricula: VARCHAR(255)
* marca: VARCHAR(255)
* modelo: VARCHAR(255)

Al crear la tabla también se nos añadirá dos datos mas llamados: "createdAt" y "updatedAt" esos los dejamos como están. Con esto ya tendríamos nuestra base de datos.

Ahora pasamos al proyecto para poder ejecutar nuestra aplicación.

### PARTE 2 - Ejecucion de la aplicación

1º Una vez te hayas descargado el proyecto, abre la carpeta “concesionario” con Visual Studio Code. 

2º Una vez abierto el proyecto con el Visual Studio Code, abre 2 terminales (Para abrirlo en Visual Studio Code con "CTRL+ñ" se te abre uno, para añadir el otro es pulsando en el + )

3º Ahora en uno de los dos terminales nos dirigimos a la carpeta del backend usando este código:

* cd backend/

Y después de entrar en la carpeta ponemos este otro código:

* node index.js

Con esto estaremos ejecutando nuestra API

4º Ahora nos dirigimos al otro terminal y nos dirigimos a la carpeta frontend usando este código:

* cd frontend/

Y una vez dentro de la carpeta frontend usamos este otro código para poder instalarle las librerías necesarias para que nuestro programa funcione correctamente:

* npm install

Una vez termine de instalar las librerías usamos este ultimo código para ejecutar el proyecto:

* ionic serve

Con esto ya nos abriría el proyecto en nuestro navegador y podremos probarlo


## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* Dona con cripto a esta dirección: `0xf253fc233333078436d111175e5a76a649890000`
* etc.
