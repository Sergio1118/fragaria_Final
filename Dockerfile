# Usa la imagen base de Python
FROM python:3.9-slim

# Establecer el directorio de trabajo
WORKDIR /sistema_usuarios

# Copiar los archivos del backend (requirements.txt)
COPY ./back/requirements.txt /sistema_usuarios/

# Instalar las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto de los archivos del backend (la carpeta "back")
COPY ./back /sistema_usuarios/

# Exponer el puerto de Django
EXPOSE 8000

# Ejecutar el servidor de desarrollo
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

