# MUDANZA.

Landing page responsive para una empresa de mudanzas, inspirada en la referencia visual aportada. Está construida con React, TypeScript, Vite y CSS propio, sin base de datos ni autenticación en esta primera versión.

## Desarrollo local

```bash
npm install
npm run dev
```

La vista previa usa el puerto `3000` en el entorno Webdev. Para validar la compilación:

```bash
npm run typecheck
npm run build
```

## Personalización pendiente

Sustituye la marca provisional, el correo `tu-correo@empresa.com`, la zona de servicio, los textos legales y la configuración de `app.config.ts` antes de publicar. El formulario valida los datos y muestra sus estados; todavía necesita conectarse a un correo, CRM o endpoint propio para recibir solicitudes reales.

La imagen `public/hero-mudanza.jpg` es un recorte de la referencia proporcionada y `public/manus-routes.json` declara la ruta principal.
