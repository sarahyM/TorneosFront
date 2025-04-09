# Proyecto Base del Curso de Desarrollo Web

**¡Bienvenido/a!** Este proyecto ha sido diseñado como una guía fundamental para acompañarte en tu camino de aprendizaje y ayudarte a alcanzar los objetivos establecidos en nuestro curso de desarrollo web.

Piensa en este proyecto como un mapa detallado. Sigue cuidadosamente las instrucciones proporcionadas en el material del curso BN y la documentación adjunta para asegurar una ejecución exitosa.

## Instrucciones Paso a Paso para la Ejecución del Proyecto

1.  **Descarga los Proyectos (Front-end y Back-end):**
    Asegúrate de tener ambos proyectos descargados en tu entorno de desarrollo.

2.  **Instalación de Dependencias:**
    Navega a la raíz de cada proyecto (front-end y back-end) y ejecuta el siguiente comando en tu terminal para instalar todas las dependencias necesarias:
    ```bash
    npm install
    ```

3.  **Configuración de la Base de Datos pgAdmin:**
    Sigue los tutoriales proporcionados en el curso para configurar correctamente tu base de datos pgAdmin. Utiliza la información de conexión que encontrarás en el archivo `app.module` del proyecto Back-end para establecer la conexión en pgAdmin.

4.  **Registro del Primer Usuario (Rol: user):**
    Abre la aplicación y dirígete a la vista de registro. Crea tu primera cuenta de usuario. Por defecto, este usuario será asignado con el rol de `user`.

5.  **Registro de Usuarios Adicionales (Rol: user):**
    Registra dos usuarios más utilizando la misma vista de registro. Verifica en pgAdmin que los tres usuarios que has creado se muestran con el rol `user` en la base de datos.

6.  **Modificación de Roles en pgAdmin (admin):**
    Accede a tu base de datos en pgAdmin. Localiza la tabla de usuarios y busca uno de los usuarios que registraste. Edita la columna `role` de este usuario y cambia su valor a `admin`. Guarda los cambios realizados en la base de datos.

7.  **Modificación de Roles en pgAdmin (superadmin):**
    Repite el paso anterior para el otro usuario registrado, modificando su rol en la columna `role` a `superadmin`. Guarda nuevamente los cambios en la base de datos.

8.  **Explorando las Funcionalidades con Diferentes Roles:**
    Ahora puedes iniciar la aplicación e iniciar sesión con cada uno de los tres usuarios que has configurado. Observa las diferentes funcionalidades a las que tiene acceso cada rol:

    * **Rol `user`:**
        * Listar torneos.
        * Listar torneos en los que está inscrito.
        * Inscribirse en torneos.
    * **Rol `admin`:**
        * Crear torneos.
        * Listar torneos.
    * **Rol `superadmin`:**
        * Eliminar torneos.
        * Listar torneos.
