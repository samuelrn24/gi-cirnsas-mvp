# SGI - CIRNSAS

## Paso 1 — Instalar Node.js

1. Entra a https://nodejs.org
2. Descarga la versión que dice LTS
3. Instálala como cualquier programa normal
4. Para verificar que quedó bien, abre la terminal y escribe:
   node --version
   Debe aparecer un número como v20.x.x o similar

## Paso 2 — Instalar MySQL

1. Entra a https://dev.mysql.com/downloads/mysql/
2. Selecciona tu sistema operativo y descarga el instalador
3. Instálalo como cualquier programa. Durante la instalación te va a pedir
   que crees una contraseña para el usuario root. ANÓTALA, la vas a necesitar.
4. Una vez instalado, asegúrate de que el servidor esté corriendo:
   - En Mac: abre Configuración del Sistema, busca MySQL al final de la lista
     y haz clic en Start MySQL Server. El punto debe quedar verde.
   - En Windows: MySQL se inicia automáticamente al instalarse.
     Si no, búscalo en los servicios de Windows y arráncalo desde ahí.

## Paso 3 — Crear la base de datos

1. Abre la terminal
2. Escribe este comando y presiona Enter:
   mysql -u root -p
3. Te va a pedir tu contraseña de MySQL, escríbela y presiona Enter
   (es normal que no se vean los caracteres mientras escribes)
4. Una vez dentro verás el texto "mysql>". Ahora pega esto y presiona Enter:
   CREATE DATABASE cirnsas_db;
5. Luego pega esto y presiona Enter:
   USE cirnsas_db;
6. Luego pega todo este bloque de una sola vez y presiona Enter:
   CREATE TABLE apartamentos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       numero VARCHAR(10) NOT NULL,
       piso INTEGER NOT NULL,
       area DECIMAL(10,2) NOT NULL,
       precio DECIMAL(15,2) NOT NULL,
       acabados VARCHAR(100),
       estado VARCHAR(50) DEFAULT 'Disponible'
   );
7. Por último escribe esto y presiona Enter para salir:
   exit;

## Paso 4 — Configurar la conexión

1. Abre la carpeta del proyecto en VSCode o cualquier editor de texto
2. Busca el archivo llamado .env y ábrelo
3. Verás esto:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=cirnsas_db
4. En la línea DB_PASSWORD= escribe la contraseña que pusiste al instalar MySQL.
   Si no pusiste contraseña, déjala vacía así: DB_PASSWORD=
5. Guarda el archivo

## Paso 5 — Instalar las dependencias del proyecto

1. Abre la terminal
2. Navega hasta la carpeta del proyecto. Por ejemplo:
   cd Desktop/cirnsas-mvp
3. Escribe este comando y presiona Enter:
   npm install
4. Espera a que termine. Al final debe decir "added X packages"

## Paso 6 — Correr el servidor

1. En la misma terminal escribe:
   node server.js
2. Debes ver estos dos mensajes:
   Servidor corriendo en http://localhost:3000
   Conectado a la base de datos
   Si ves algún error revisa que MySQL esté corriendo y que la contraseña
   en el archivo .env sea correcta.

## Paso 7 — Abrir la aplicación

1. Abre tu navegador (Chrome, Safari, Firefox)
2. En la barra de direcciones escribe:
   http://localhost:3000
3. Debe aparecer la aplicación SGI - CIRNSAS

## IMPORTANTE
Cada vez que vayas a usar la aplicación debes:
1. Asegurarte de que MySQL esté corriendo (el punto verde en Mac)
2. Abrir la terminal, ir a la carpeta del proyecto y ejecutar: node server.js
3. Luego abrir el navegador en http://localhost:3000