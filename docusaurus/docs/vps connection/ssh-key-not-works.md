---
sidebar_position: 1
---

# Configurar Permisos vía SSH

Si SSH sigue pidiendo una contraseña incluso después de agregar una clave pública a `authorized_keys`, es posible que haya un problema con los permisos o el propietario del directorio `/root`. A continuación, se detallan los pasos para verificar y corregir esta configuración en servidores Linux.

## Problema

El directorio `/root` tiene permisos demasiado abiertos (`drwxr-xr-x`) o no es propiedad del usuario `root`. Esto impide que SSH pueda autenticar al usuario mediante claves. Los permisos deben ser más restrictivos (`drwx------`) y el propietario debe ser `root`.

Solución

## Paso 1: Cambiar el Propietario del Directorio `/root` a `root`

Ejecuta el siguiente comando para asignar la propiedad del directorio `/root` al usuario `root`:

```
sudo chown root:root /root
```

## Paso 2: Ajustar los Permisos del Directorio `/root`

Modifica los permisos del directorio para que solo el usuario `root` tenga acceso:

```
sudo chmod 700 /root
```
Esto cambiará los permisos de `/root` a `drwx------`, asegurando que solo `root` pueda leer o modificar el contenido del directorio, como exige SSH para autenticación de clave pública.

## Paso 3: Verificar Permisos en el Archivo `authorized_keys`

Asegúrate de que los permisos dentro del directorio `.ssh` y el archivo `authorized_keys` sean correctos:

```
chmod 700 /root/.ssh
chmod 600 /root/.ssh/authorized_keys
```
## Paso 4: Reiniciar el Servicio SSH (opcional pero recomendable)

Reinicia el servicio SSH para aplicar cualquier cambio en la configuración:
```
sudo systemctl restart ssh
```

## Paso 5: Probar la Conexión SSH

Intenta conectarte de nuevo usando la clave SSH y verifica que ya no te pida la contraseña.
