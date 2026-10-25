# Portal del delegado

Panel personal de trabajo para la delegación de estudiantes: quejas, calendario de exámenes, asignaturas, normativa, reuniones, eventos, encuestas y escritos.

Es una página estática que se abre en el navegador (también en el móvil, como una app). **No es una página oficial de la Universidad Camilo José Cela.**

## Privacidad

- **Este repositorio solo contiene el programa y las guías docentes de las asignaturas.** No hay ningún dato tuyo: ni quejas, ni notas, ni contactos. Las guías docentes 2026-2027 (carpeta `guias/`, un PDF por asignatura) son las que la universidad entrega al alumnado e incluyen el nombre y el correo institucional del profesorado; el programa usa esos mismos datos para rellenar las fichas de las asignaturas.
- **Tus datos se quedan en tu navegador.** Se guardan en el almacenamiento del navegador de cada dispositivo y nunca se envían a ningún servidor.
- **Contraseña opcional.** Desde *Ajustes* puedes cifrar tus datos con AES-256 (clave derivada de tu contraseña con PBKDF2-SHA256, 600 000 iteraciones). El portal te la pedirá al abrirlo y se bloquea solo si no lo usas.
- **Sincronización opcional y cifrada.** Si quieres usar el portal en varios dispositivos, puedes conectar un repositorio **privado** tuyo de GitHub con un token que solo tenga acceso a ese repositorio. El portal sube un único archivo cifrado; sin tu contraseña de sincronización nadie puede leerlo, tampoco GitHub. El token se guarda cifrado dentro del portal y nunca en este repositorio.
- **La página no se indexa** en buscadores (`noindex`) y solo puede conectarse a `api.github.com` (política de seguridad de contenidos).
- **No subas aquí copias de seguridad** (`portal-delegado-copia-*.json`): este repositorio es público.
- Si publicas otras webs en tu misma cuenta de GitHub Pages, comparten con esta el almacenamiento del navegador: ponle contraseña al portal.

## Actualizar

Sustituye `index.html` (y el resto de archivos si cambian) por la nueva versión. Tus datos no se tocan: están en tu navegador, no en el repositorio. Si el curso que viene cambian las guías docentes, sustituye también la carpeta `guias/`.

Versión 5 · 25 de octubre de 2026.
