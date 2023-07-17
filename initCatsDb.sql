DROP DATABASE IF EXISTS MVC_CATS;
CREATE DATABASE IF NOT EXISTS MVC_CATS;
USE MVC_CATS;

CREATE TABLE IF NOT exists CATS (
ID BIGINT AUTO_INCREMENT NOT NULL,
errorCode int NOT NULL,
NAME VARCHAR(100) NOT NULL,
DESCRIPTION TEXT NULL DEFAULT NULL,
IMAGE VARCHAR(200) NULL default NULL,
PRIMARY KEY (ID)
);

INSERT INTO CATS (errorCode, NAME, DESCRIPTION, IMAGE)
VALUES 
  (200, 'OK', 'La solicitud se completó exitosamente', '/images/cat_200.jpeg'),
  (201, 'Created', 'El recurso se creó correctamente', '/images/cat_201.jpeg'),
  (202, 'Accepted', 'La solicitud se aceptó pero aún no se procesa completamente', '/images/cat_202.jpeg'),
  (203, 'Non-Authoritative Information', 'La información no es proveniente de la fuente original', '/images/cat_203.jpeg'),
  (204, 'No Content', 'La respuesta no tiene contenido', '/images/cat_204.jpeg'),
  (400, 'Bad Request', 'La solicitud que enviaste tiene un formato incorrecto', '/images/cat_400.jpeg'),
  (401, 'Unauthorized', 'Ups! No tienes permiso para acceder a esta página', '/images/cat_401.jpeg'),
  (402, 'Payment Required', 'Se requiere un pago para acceder al recurso', '/images/cat_402.jpeg'),
  (403, 'Forbidden', 'Lo siento, no tienes acceso a este recurso', '/images/cat_403.jpeg'),
  (404, 'Not Found', 'Oops! Parece que la página que buscas no existe', '/images/cat_404.jpeg'),
  (405, 'Method Not Allowed', 'El método de solicitud no está permitido para este recurso', '/images/cat_405.jpeg'),
  (406, 'Not Acceptable', 'El servidor no puede producir una respuesta que sea aceptable según los encabezados Accept enviados en la solicitud', '/images/cat_406.jpeg'),
  (407, 'Proxy Authentication Required', 'Se requiere autenticación de proxy para acceder al recurso', '/images/cat_407.jpeg'),
  (408, 'Request Timeout', 'La solicitud ha superado el tiempo de espera del servidor', '/images/cat_408.jpeg'),
  (409, 'Conflict', 'La solicitud no pudo completarse debido a un conflicto con el estado actual del recurso', '/images/cat_409.jpeg'),
  (500, 'Internal Server Error', '¡Vaya! Algo salió mal en nuestro servidor', '/images/cat_500.jpeg'),
  (501, 'Not Implemented', 'El servidor no puede responder a la solicitud porque aún no está implementado', '/images/cat_501.jpeg'),
  (502, 'Bad Gateway', 'El servidor proxy recibió una respuesta inválida', '/images/cat_502.jpeg'),
  (503, 'Service Unavailable', 'Nuestros servicios no están disponibles en este momento', '/images/cat_503.jpeg'),
  (504, 'Gateway Timeout', 'El tiempo de espera para obtener una respuesta del servidor se agotó', '/images/cat_504.jpeg'),
  (418, 'I´m a teapot', '¿No es divertido?', '/images/cat_418.jpeg');