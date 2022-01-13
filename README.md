# Creado por Faber Hoyos

# Este proyecto se puede obtener desde GitHub en la rama main

https://github.com/faber28/PruebaTec-Back

## Es una Base de Datos Sql con nombre `agenda`

username: 'root',
password: 'faber123'

## Scripts Disponibles

El proyecto se puede ejecutar con los siguientes scripts


## `npm install mysql2`

## `npm install sequelize`

## `npm install sequelize-cli`

## `npm install cors`

## `npm install nodemon`

## `npm install bcryptjs`

## `npm install express`

## `npm install express-validator`

## `npm install jwt-simple`

## `npm install moment`

### `npm start`

Corre la app en: [http://localhost:5000]

No se puede ejecutar en su totalidad en el navegador. Si

### `http://localhost:5000/user/registro`

Es un método POST el cuál registra a un usuario y encriptando la contraseña. Devuelve datos enviados.

### `http://localhost:5000/user/login`

Es un método POST para iniciar sesión y una vez encuentra el usuario devuelve un TOKEN.

### `http://localhost:5000/contacto/:id`

Es un método GET que trae todos los contactos de un usuario en especifico.

### `http://localhost:5000/contacto/editar/:id`

Es un método GET que trae todos los datos de un contacto en especifico.

### `http://localhost:5000/contacto/`

Es un método POST que crea un contacto y retorna los datos agregados cuando es efectivo.

### `http://localhost:5000/contacto/:idContacto`

Es un método PUT que actualiza un contacto y retorna un mensaje de realizado.

### `http://localhost:5000/contacto/:idContacto`

Es un método DELETE que elimina un contacto y retorna un mensaje de realizado.