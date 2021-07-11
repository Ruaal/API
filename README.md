# API
Para ejecutar se debe tener instalado docker.
Ir a la carpeta del proyecto donde esta el archivo docker-compose.yml y mediante la consola ejecutar "docker-compose up"
A continuación dejar que se enciendan los 3 containers, uno es la base de datos en MySQL, otro es para gestionar esta, con phpmyadmin y el ultimo es la api.

Para acceder a la base de datos lo podeis hacer mediante el navegador mediante localhost:8080
Para hacer peticiones a la api se debe hacer mediante localhost:9009

Los endpoints han sido testeados con Postman y se han creado 3
El body debe de ser en formato json (raw)

Registro:
POST localhost:9009/api/v1/auth/register

Este se ha creado para facilitar el guardado de la contraseña hasheada. El body tiene el siguiente formato:

{
    "username": "seidor",
    "password": "Seidor1982*"
}
Devuelve un mensaje de confirmación.
![image](https://user-images.githubusercontent.com/71761504/125200535-ea95dc80-e26b-11eb-8b86-351e1af69d77.png)

Login:
POST localhost:9009/api/v1/auth/login

El formato del body es el siguiente:
{
    "username": "seidor",
    "password": "Seidor1982*"
}
Devuelve un token para hacer el resto de peticiones.

![image](https://user-images.githubusercontent.com/71761504/125200516-d94cd000-e26b-11eb-933e-86541941a3d1.png)


Get personas:
GET localhost:9009/api/v1/personas/

Se debe añadir en los headers la clave "x-auth-token" teniendo como valor el token que nos ha devuelto el login.

Devuelve el listado de personas de la base de datos.
![image](https://user-images.githubusercontent.com/71761504/125200618-2761d380-e26c-11eb-8d63-a44ff5d34f6c.png)


Cualquier duda podeis poneros en contacto conmigo mediante el correo donde se os ha enviado este repositorio.

Un saludo
Joan
