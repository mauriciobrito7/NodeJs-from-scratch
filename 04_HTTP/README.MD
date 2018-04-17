Métodos HTTP 
	* GET: cuando pedimos datos desde el servidor. Comúnmente se hace desde la url, y el servidor responde con los datos que necesite.
	* POST: Envia los datos al servidor para que los envíe a la base de datos y quede de una manera persistente. Los datos viajan en el cuerpo del mensaje y no en la cabecera.
	* DELETE: una petición que se hace desde el cliente para indicarle al servidor que vamos a borrar un recurso en la base de dato.
	* PUT: para indicarle que queremos hacer una actualización ó un update de un recurso.



Códigos de respuesta

Son los que vamos a enviar desde el servidor hacia el cliente para informar como ha sido la petición.


	* Códigos con formato 1xx: Respuestas informativas. Indica que la petición ha sido recibida y se está procesando.
	* Códigos con formato 2xx: Respuestas correctas. Indica que la petición ha sido procesada correctamente.
	* Códigos con formato 3xx: Respuestas de redirección. Indica que el cliente necesita realizar más acciones para finalizar la petición.
	* Códigos con formato 4xx: Errores causados por el cliente. Indica que ha habido un error en el procesado de la petición a causa de que el cliente ha hecho algo mal.
	* Códigos con formato 5xx: Errores causados por el servidor. Indica que ha habido un error en el procesado de la petición a causa de un fallo en el servidor.

Cabeceras
Son los metadatos que se envían en las peticiones o respuesta HTTP para proporcionar información esencial sobre la transacción en curso. Cada cabecera es especificada por un nombre de cabecera seguido por dos puntos, un espacio en blanco y el valor de dicha cabecera seguida por un retorno de carro seguido por un salto de línea. Se usa una línea en blanco para indicar el final de las cabeceras. Si no hay cabeceras la línea en blanco debe permanecer.
Las cabeceras le dan gran flexibilidad al protocolo permitiendo añadir nuevas funcionalidades sin tener que cambiar la base. Por eso según han ido sucediendo las versiones de HTTP se han ido añadiendo más y más cabeceras permitidas.
Las cabeceras pueden tener metadatos que tienen que ser procesados por el cliente (ej. en respuesta a petición se puede indicar el tipo del contenido que contiene), por el servidor (ej. tipos de representaciones aceptables por el cliente del contenido que pide) o por los intermediarios (ej. como gestionar el cacheo por parte de los proxys)
Dependiendo del tipo de mensaje en el que puede ir una cabecera las podemos clasificar en cabeceras de petición, cabeceras de respuesta y cabeceras que pueden ir tanto en un petición como en una respuesta.
Podemos clasificar las cabeceras según su función. Por ejemplo:
	* Cabeceras que indican las capacidades aceptadas por el que envía el mensaje: Accept (indica el MIME aceptado), Accept-Charset (indica el código de caracteres aceptado), Accept-Encoding(indica el método de compresión aceptado), Accept-Language (indica el idioma aceptado), User-Agent (para describir al cliente), Server (indica el tipo de servidor), Allow (métodos permitidos para el recurso)
	* Cabeceras que describen el contenido: Content-Type (indica el MIME del contenido), Content-Length (longitud del mensaje), Content-Range, Content-Encoding, Content-Language, Content-Location.
	* Cabeceras que hacen referencias a URIs: Location (indica donde está el contenido), Referer (Indica el origen de la petición).
	* Cabeceras que permiten ahorrar transmisiones: Date (fecha de creación), If-Modified-Since, If-Unmodified-Since, If-Match, If-None-Match, If-Range, Expires, Last-Modified, Cache-Control, Via, Pragma, Etag, Age, Retry-After.
	* Cabeceras para control de cookies: Set-Cookie, Cookie
	* Cabeceras para autentificación: Authorization, WW-Authenticate
	* Cabeceras para describir la comunicación: Host (indica máquina destino del mensaje), Connection (indica como establecer la conexión)
	* Otras: Range (para descargar sólo partes del recurso), Max-Forward (límite de cabeceras añadidas en TRACE).


