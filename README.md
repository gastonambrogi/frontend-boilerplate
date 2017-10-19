# Devsar frontend-boilerplate

# Angular 1.5 App
## Instalar dependencias
`npm install`


## Instalar dependencias
`pip install -r requirements.txt`

## Iniciar el servidor de desarrollo
`python app.py`

## Acceso y endpoints

### Index page
http://localhost:8080/

### Listado de albums
http://localhost:8080/api/v1/albums/

### Detalle de un álbum
http://localhost:8080/api/v1/albums/656801179/

## Info
Agrega tus archivos estáticos en la carpeta assets y comienza a desarrollar tu aplicación en index.html
Para más información acerca de cómo instalar Python y configurar tu ambiente de trabajo: https://cloud.google.com/python/setup

======

# Comentarios
1. En el endpoint `/api/v1/albums/` se está devolviendo cada album con el atributo `popilarity` en lugar de `popularity`.
2. En el endpoint `/api/v1/albums/ALBUM_ID` el atributo `artist` llega como `object`, no como `string` como viene en endpoint `/api/v1/albums/`. 
3. En el endpoint `/api/v1/albums/ALBUM_ID` no llega el atributo `popularity`, por lo que no se pueden mostrar la popularidad en la pantalla de detalle de un album. 
4. Se agregaron los controles necesarios para permitir la reproduccion de la preview por track pero el browser no emite sonido alguno, a pesar que en la pestaña se notifica que hay algo reproduciendose (icono de parlante en la pestaña al darle play). 
