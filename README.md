# SGI-CIRNSAS MVP
### Sistema de Gestión Inmobiliaria — MVP
**Proyecto académico | Universidad EAFIT | Curso: Sistemas de Información 2026**

---

## Sobre la empresa

CIRNSAS (Constructora e Inversiones Ramírez Noreña S.A.S.) es una empresa constructora ubicada en Armenia, Quindío, Colombia. Desarrolla proyectos de vivienda como Le Marais, Montpellier, La Forêt y Le Quartier. Actualmente gestiona sus procesos de ventas, pagos y presupuesto de forma manual mediante hojas de cálculo y canales informales como WhatsApp y correo electrónico.

## Sobre el proyecto

SGI-CIRNSAS es un aplicativo web interno desarrollado como solución parcial a las necesidades de gestión de información de CIRNSAS. Este repositorio contiene el MVP (Minimum Viable Product) con las primeras tres historias de usuario implementadas del Sprint 1.

### Historias de usuario implementadas
- **HU-01:** Ver inventario de apartamentos con estado actual y filtros por estado
- **HU-02:** Agregar un apartamento nuevo mediante un formulario
- **HU-03:** Cambiar el estado de un apartamento desde la tabla

### Módulos planificados
- Gestión de inventario de ventas
- Seguimiento de pagos de clientes
- Control presupuestal de la obra

## Stack tecnológico
- HTML, CSS y JavaScript
- Node.js
- Express
- MySQL
- mysql2
- dotenv

---

## Requisitos previos

### 1. Instalar Node.js
- Entra a https://nodejs.org
- Descarga la versión LTS
- Instálala como cualquier programa normal
- Verifica que quedó bien escribiendo en la terminal:
  node --version
  Debe aparecer un número como v20.x.x o similar

### 2. Instalar MySQL
- Entra a https://dev.mysql.com/downloads/mysql/
- Selecciona tu sistema operativo y descarga el instalador
- Instálalo como cualquier programa. Durante la instalación te va a pedir
  que crees una contraseña para el usuario root. ANÓTALA, la vas a necesitar.
- Una vez instalado, asegúrate de que el servidor esté corriendo:
  - En Mac: abre Configuración del Sistema, busca MySQL al final de la lista
    y haz clic en Start MySQL Server. El punto debe quedar verde.
  - En Windows: MySQL se inicia automáticamente al instalarse.
    Si no, búscalo en los servicios de Windows y arráncalo desde ahí.

## Pasos para correr el proyecto

### 1. Instalar dependencias
Abre la terminal en la carpeta del proyecto y escribe:
npm install

### 2. Crear la base de datos
Abre la terminal y escribe:
mysql -u root -p

Te va a pedir tu contraseña de MySQL, escríbela y presiona Enter
(es normal que no se vean los caracteres mientras escribes).
Una vez dentro verás el texto "mysql>". Ahora ejecuta esto:

CREATE DATABASE cirnsas_db;

USE cirnsas_db;

CREATE TABLE apartamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(10) NOT NULL UNIQUE,
    area DECIMAL(10,2) NOT NULL,
    precio DECIMAL(15,2) NOT NULL,
    acabados VARCHAR(100),
    estado VARCHAR(50) DEFAULT 'Disponible'
);

exit;

### 3. Configurar la conexión
Abre el archivo .env y ajusta los datos de tu MySQL:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña_aqui
DB_NAME=cirnsas_db

Si no tienes contraseña deja DB_PASSWORD= vacío así:
DB_PASSWORD=

### 4. Correr el servidor
En la terminal escribe:
node server.js

Deberías ver:
Servidor corriendo en http://localhost:3000
Conectado a la base de datos

### 5. Abrir la aplicación
Abre el navegador y ve a:
http://localhost:3000

---

## IMPORTANTE
Cada vez que vayas a usar la aplicación debes:
1. Asegurarte de que MySQL esté corriendo
2. Abrir la terminal, ir a la carpeta del proyecto y ejecutar: node server.js
3. Luego abrir el navegador en http://localhost:3000