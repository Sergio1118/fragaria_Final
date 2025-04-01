# Usa la imagen base de Python
FROM python:3.9-slim

# Establecer el directorio de trabajo
WORKDIR /sistema_usuarios

# Copiar los archivos del backend
COPY ./back/requirements.txt /sistema_usuarios/

RUN pip install --no-cache-dir -r requirements.txt

COPY ./back /sistema_usuarios/

# Configurar variables de entorno para Django (si es necesario)
ENV DJANGO_SETTINGS_MODULE=app.settings

# Exponer el puerto de Django
EXPOSE 8000

# Ejecutar el servidor de desarrollo (ajusta el comando según el framework)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
