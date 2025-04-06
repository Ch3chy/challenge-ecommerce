# Checho Challenge App

## 📦 Descripción

Esta es la aplicación principal del proyecto **challenge-ecommerce**, diseñada para mostrar productos de manera interactiva y simular compra en un carrito. Utiliza la librería de componentes reutilizables **Checho Challenge UI** para garantizar consistencia en el diseño y funcionalidad.

## 🚀 Cómo correr en local

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1. Asegúrate de haber instalado las dependencias del proyecto raíz:

   ```sh
   npm install
   ```

2. Navega al directorio de la aplicación:

   ```sh
   cd app
   ```

3. Inicia el servidor de desarrollo:

   ```sh
   npm run dev
   ```

4. Abre tu navegador y accede a la URL proporcionada (por defecto, `http://localhost:5173`).

## 🛠️ Generar el build

Para generar el build de producción, ejecuta el siguiente comando desde el directorio de la aplicación:

```sh
npm run build
```

Esto generará los archivos optimizados en la carpeta `dist`. Puedes previsualizar el build con:

```sh
npm run preview
```

Este comando iniciará un servidor local para inspeccionar la aplicación generada.

## 🚀 CI/CD con AWS Amplify

El proyecto utiliza **AWS Amplify** para configurar un flujo de integración y entrega continua (CI/CD). Esto permite que los cambios realizados en el repositorio se desplieguen automáticamente en un entorno de prueba o producción.

### 🌐 URL de la App Desplegada

Puedes acceder a la aplicación desplegada en el siguiente enlace:

[https://main.d1u5ndcqkrupol.amplifyapp.com/](https://main.d1u5ndcqkrupol.amplifyapp.com/)

### 📌 Ventajas de AWS Amplify

1. **Automatización Completa**: Amplify detecta automáticamente los cambios en el repositorio y ejecuta los pasos de construcción y despliegue.
3. **Escalabilidad**: AWS Amplify maneja automáticamente la escalabilidad del entorno, asegurando un rendimiento óptimo.
4. **Integración con Git**: Compatible con el repositorio de GitHub
5. **Historial de Despliegues**: Permite revertir fácilmente a versiones anteriores en caso de errores.

### 📌 Cómo funciona

1. **Conexión del Repositorio**: Amplify está conectado al repositorio de GitHub del proyecto.
2. **Configuración del Build**: El archivo `amplify.yml` define los pasos de construcción y despliegue.
3. **Despliegue Automático**: Cada vez que se realiza un push en main, Amplify ejecuta el flujo de CI/CD.
