![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Proyecto Individual - Henry

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Objetivos del Proyecto
Construir una aplicacion que consuma informacion de una API (REST Countries), y apartir de ella guardar cierta informacion relevante en una base de datos (seequelize - postgres). 
Luego esa informacion es renderizada mediante distintos componentes segun la ruta en la que nos encontremos, permitiendo ademas agregar mediante un formulario controlado informacion nueva.
Cuenta ademas con funcionalidades que permitan buscar, filtrar y/o ordenar la informacion segun algunos parametros ( por ejemplo ,cantidad de poblacion, alfabeticamente).

![Home](/client/src/images/home.png)
![Form](/client/src/images/form.png)
## Objetivos Tecnicos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en el bootcamp.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

### Tecnologías utilizadas

-  React
-  Redux
-  Express
-  Sequelize - Postgres
-  HTML - CSS puro

### Para probar el proyecto
Despues de clonar el repositorio.

- Crear un archivo .env con las variables de entorno necesarias para la conexion a la base de datos en la carpeta api.
- Crear una base de datos con el nombre de la aplicacion y la contraseña. abrir la consola de postgres y ejecutar el comando:

CREATE USER "usuario" WITH PASSWORD 'contraseña';
CREATE DATABASE "countries" WITH OWNER = "usuario";

 Volver al proyecto y dividir la terminal en dos
- En la primer terminal ejecutar el comando: cd api y ejecutar el comando: npm install para instalar las dependencias y ejecutar el comando: npm start para iniciar el servidor.
- En la segunda terminal ejecutar el comando: cd client y ejecutar el comando: npm install para instalar las dependencias y ejecutar el comando: npm start para iniciar el servidor.
