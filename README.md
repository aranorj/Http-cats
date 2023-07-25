# Http-cats
Representa los status http con gatitxs! Inspirado en http.cat y creado para ejemplificar modelo MVC para Digital House

*Atención!!!* Este Repo esta pensado para jugar con las ramas y aprender un poco de organización:
- En la branch _main_ vas a encontrar MVC con patrón Repository
- En _wip/experimental_basic-MVC_ un modelo de MVC básico
- En _wip/experimental_not-MVC_ un CAOS de arquitectura Spaghetti.

Todas son funcionales! Vos elegís con cual quedarte. Yo ya elegí ;) 

# Proyecto HTTP Cats con Node.js

Este proyecto está inspirado en la página web [http.cat](https://http.cat) y utiliza Node.js para crear una aplicación que representa errores HTTP con imágenes de kittens :) . Proporciona una forma divertida y visual de entender los diferentes códigos de estado HTTP.

## Características

- Representa los errores HTTP más comunes con imágenes de gatos.
- Proporciona una API para obtener información sobre los diferentes códigos de estado.

## Requisitos previos

- Node.js instalado en tu máquina.

## Instalación

1. Clona el repositorio o descarga los archivos del proyecto.
2. Abre una terminal y navega hasta la carpeta raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```shell
   npm install
   ```

## Configuración

1. Crea un archivo de configuración `.env` en la raíz del proyecto.
2. Define las variables de entorno necesarias en el archivo `.env` según tus necesidades.

  ```
  DB_HOST=TU_HOST
  DB_PORT=TU_PUERTO
  DB_DATABASE=TU_BASE_DE_DATOS
  DB_USER=TU_USER
  DB_PASS=TU_PASS
   ```

## Uso

1. Ejecuta el siguiente comando para iniciar la aplicación:

   ```
   npm start
   ```

2. Abre tu navegador web y accede a la URL `http://localhost:3000` para ver la aplicación en funcionamiento.

## API

La API proporciona los siguientes endpoints:


- `GET /api/cats`: Devuelve una lista de los códigos de estado y sus respectivas imágenes de gatos en orden aleatorio.
- `GET /api/cats/:code`: Devuelve la información y la imagen de gato correspondiente al código de estado especificado.

*OJO!!* En este momento el frontend esta integrado por lo que las APIS no devuelven lo que esperamos. Veras algo asi en el controller: 
```
//res.status(error.status).send({ error: error.message });  
res.render('./error', {error: error});
```
Comenta el render y descomenta la linea con res.status y listo! ya puedes usar las APIS normalmente con un lindo JSON de respuesta.

## Contribución

Si deseas contribuir a este proyecto, ¡serás bienvenidx! Puedes enviar pull requests o abrir issues para reportar problemas o sugerir mejoras.

## Licencia

Este proyecto está licenciado bajo [MIT License](https://opensource.org/licenses/MIT).

## Contacto

Si tienes alguna pregunta o consulta sobre este proyecto, no dudes en contactarme a través de [arano.rocio.b@gmail.com](arano.rocio.b@gmail.com).
