# Funciones Debounce, Throttle y Memoize

Este pequeño proyecto incluye implementaciones de las funciones `debounce`, `throttle` y `memoize` en TypeScript, junto con pruebas con Jest. Además, hay una interfaz de línea de comandos (CLI) e integración front-end.

## Tecnologías

- TypeScript
- Node.js

## Instruciones de Uso

1.  Clona el repositorio:

```
git clone https://github.com/julianamanzieri/Sprint2.git
```

2.  Instala las dependencias:

```
npm install
```

3.  Ejecuta el programa utilizando el siguiente comando:

```
npm start
```

4.  Compile el código TypeScript usando el comando:

```
tsc
```

5.  Abra los archivos `html` en su navegador para ver los resultados en console.

## Prerrequisitos

Asegúrate de tener Node.js, npm, jest y inquirer instalados en tu sistema.

## Pruebas

1. Este proyecto utiliza Jest para realizar pruebas.

- `src/ __test__/ npx jest debounce.test.ts`
- `src/ __test__/ npx jest throttle.test.ts`
- `src/ __test__/ npx jest memoize.test.ts`

2. Para probar las funciones mediante CLI utilizar:

- `dist/ node cli.debounce.js`
- `dist/ node cli.throttle.js`
- `dist/ node cli.memoize.js`

Este proyecto fue desarrollado como Sprint 2 en IT Academy.
