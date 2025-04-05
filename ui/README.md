# Checho Challenge UI

## 📦 Descripción

Este paquete contiene la librería de componentes reutilizables para el proyecto **challenge-ecommerce**. Está diseñada para ser utilizada en múltiples aplicaciones, proporcionando una base consistente de componentes UI.

## 🛠️ Construcción

Para compilar la librería y generar los archivos necesarios para su distribución, ejecuta el siguiente comando:

```sh
npm run build
```

Esto generará los archivos en la carpeta `dist`, incluyendo los formatos `ES` y `UMD`, así como los archivos de tipos TypeScript.

## 🚀 Publicación en npm

Para publicar la librería en npm, asegúrate de haber iniciado sesión en tu cuenta de npm:

```sh
npm login
```

Luego, ejecuta el siguiente comando para publicar la librería:

```sh
npm publish --access public
```

> **Nota:** Asegúrate de que el número de versión en el archivo `package.json` haya sido incrementado antes de publicar, siguiendo las reglas de versionado semántico (semver).
