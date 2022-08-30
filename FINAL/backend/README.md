# BACKEND SERVICIO TECNICO INTEGRAL

## ENTREGAS

### *CHANGELOG 29/08/2022*

### controllers:
- Correccion findRep

### routes:
- Correccion ruta reparaciones findRep

---------------------------------------------------------------------------------------

### *CHANGELOG 22/08/2022*

### modulos:
- Se instala modulo nodemailer

### controllers:
- Se elimina redireccionamento para usuarios no logueados, se cambia a middleware.
- Se implementa controlador de envio de Mail.

### middleware:
- Se implementa "isLoggedIn" middleware para rutas, redirecciona a login si el usuario no esta autenticado.

### routes:
- Se implementa ruta en api para envio de mail.
- Se implementa middleware "isLoggedIn" en las rutas.

---------------------------------------------------------------------------------------

### *CHANGELOG 20/08/2022*

### app:
- Se incorpora fileUploader, cloudinary y cors

### controllers:
- Se implementa lectura, carga y eliminación de imagenes con cloudinary en controlador de usuarios
- Se implementa funcion getRepsByClient en reparaciones

### helpers:
- Se implementa cloudImages, funciones para lectura, carga y eliminación de imagenes con cloudinary

### models:
- Cambios menores en index (kpi)
- Se implementa getRepsByUser y getRepsByClientId en reparaciones

### routes: 
- Se implementa ruta de API

### views:

#### views/pages:
- Cambios en vistas de usuarios, implementación de imagenes con cloudinary

#### views/partials:
- Cambios en formularios de usuarios, implementación de imagenes con cloudinary

---------------------------------------------------------------------------------------

### *CHANGELOG 13/08/2022*

### controllers:
- Se implementan controladores con **CRUD** completo para para clientes y reparaciones
- Se implementa delete y update para usuarios

### helpers:
- Se implementa función para filtrar datasets para el buscador

### models:
- Se implementan modelos con **CRUD** completo para para clientes y reparaciones
- Se implementa delete y update para usuarios

### routes: 
- Se implementan rutas con **CRUD** completo para clientes y reparaciones
- Se implementan rutas de delete y update para usuarios

### views:
- Mejora en la organización de archivos

#### views/pages:
- Se implementan paginas separadas para cada seccion
- Se implementa buscador en cada seccion 

#### views/partials:
- Se crean formularios para nuevo, detalle y edición de usuarios, clientes y reparaciones



