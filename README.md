# 🍅 Pomodoro app en Ionic

[![Ionic](https://img.shields.io/badge/Ionic-8.0-3880FF?style=for-the-badge&logo=ionic&logoColor=white)](https://ionicframework.com/)
[![Angular](https://img.shields.io/badge/Angular-20-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-8.3-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Android](https://img.shields.io/badge/Android-Compatible-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://developer.android.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

> Aplicación de temporizador Pomodoro multiplataforma desarrollada con **Ionic Framework**, **Angular** y **Capacitor**. Funciona en navegador, emulador Android y dispositivo físico, todo desde una única base de código en HTML, SCSS y TypeScript.

 **Video demo:** [Ver en YouTube Shorts](https://www.youtube.com/shorts/RcDIeLe3X4w)

---

## Autoras/es del proyecto

| Nombre | Contacto |
|---|---|
| Nathaly Bonilla Mcklean | githubmcklean@gmail.com |
| Abdiel Abrego | aabdiel200412@gmail.com |

Proyecto académico — Universidad Tecnológica de Panamá  
Facultad de Ingeniería de Sistemas Computacionales  
Desarrollo de Software para Plataformas Móviles — Grupo 1SF-142

---

## Descripción

Esta app implementa la técnica Pomodoro: ciclos alternados de **Enfoque** y **Descanso** configurables por el usuario. El temporizador cuenta regresivamente y cambia de modo automáticamente al llegar a cero.

**Características:**
- Temporizador configurable (Enfoque: 1–60 min, Descanso: 1–30 min)
- Cambio automático entre modos Enfoque / Descanso
- Botones de Iniciar, Pausar y Reiniciar
- Diseño adaptativo para móvil y escritorio
- Compatible con Android mediante Capacitor

---

## Requisitos de Hardware

| Componente | Mínimo recomendado |
|---|---|
|  RAM | 8 GB (16 GB recomendado para correr el emulador) |
|  Almacenamiento | ~10 GB libres (Android Studio ocupa bastante) |
|  Procesador | CPU de 64 bits con soporte de virtualización (Intel VT-x / AMD-V) |
|  Sistema Operativo | Windows 10/11, macOS 11+, Ubuntu 20.04+ |

> ⚠️ **El emulador de Android es muy exigente en RAM.** Si tu equipo tiene menos de 8 GB, considera usar un dispositivo físico en lugar del emulador.

---

##  Requisitos de Software

[![Node.js](https://img.shields.io/badge/Node.js-v18_LTS-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-incluido_con_Node-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Ionic CLI](https://img.shields.io/badge/Ionic_CLI-latest-3880FF?style=flat-square&logo=ionic&logoColor=white)](https://ionicframework.com/docs/cli)
[![Angular CLI](https://img.shields.io/badge/Angular_CLI-latest-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev/tools/cli)
[![Android Studio](https://img.shields.io/badge/Android_Studio-latest-3DDC84?style=flat-square&logo=androidstudio&logoColor=white)](https://developer.android.com/studio)
[![VS Code](https://img.shields.io/badge/VS_Code-recomendado-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com/)
[![Java](https://img.shields.io/badge/Java_JDK-17+-F89820?style=flat-square&logo=openjdk&logoColor=white)](https://adoptium.net/)

---

##  Instalación paso a paso

### Paso 1 — Instalar Node.js

[![Node.js](https://img.shields.io/badge/Descargar-Node.js_LTS-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

Descarga e instala Node.js desde https://nodejs.org/  
Elige la versión **LTS** (Long Term Support).

Verifica la instalación:

```bash
node -v
npm -v
```

Deberías ver algo como `v20.x.x` y `10.x.x`.

---

### Paso 2 — Instalar Ionic CLI globalmente

[![Ionic](https://img.shields.io/badge/Ionic_CLI-install-3880FF?style=flat-square&logo=ionic&logoColor=white)](https://ionicframework.com/docs/cli)

```bash
npm install -g @ionic/cli
```

Verifica que se instaló correctamente:

```bash
ionic -v
```

---

### Paso 3 — Clonar el repositorio

[![Git](https://img.shields.io/badge/Git-clone-F05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/)

```bash
git clone https://github.com/tu-usuario/pomodoro-ionic.git
cd pomodoro-ionic
```

O descarga el ZIP y descomprímelo.

---

### Paso 4 — Instalar dependencias del proyecto

[![npm](https://img.shields.io/badge/npm-install-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/)

Dentro de la carpeta del proyecto:

```bash
npm install
```

Este comando lee el `package.json` e instala todas las librerías necesarias (Angular, Ionic, Capacitor, etc.).

---

### Paso 5 — Correr en el navegador (más fácil)

[![Chrome](https://img.shields.io/badge/Abre_en-localhost:8100-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](http://localhost:8100)

```bash
ionic serve
```

Abre automáticamente `http://localhost:8100` en tu navegador. Ideal para desarrollo rápido.

---

### Paso 6 — Instalar Android Studio

[![Android Studio](https://img.shields.io/badge/Descargar-Android_Studio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white)](https://developer.android.com/studio)

1. Descarga Android Studio desde https://developer.android.com/studio
2. Durante la instalación, asegúrate de incluir:
   -  **Android SDK**
   -  **Android SDK Platform-Tools**
   -  **Android Virtual Device (AVD)**
3. Abre Android Studio y completa el asistente de configuración inicial.

---

### Paso 7 — Configurar las variables de entorno

####  Windows

Después de instalar Android Studio, agrega estas variables al PATH del sistema:

```
ANDROID_HOME = C:\Users\TU_USUARIO\AppData\Local\Android\Sdk
```

Y agrega a PATH:
```
%ANDROID_HOME%\tools
%ANDROID_HOME%\platform-tools
```

####  macOS /  Linux

Agrega a tu `~/.bashrc` o `~/.zshrc`:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

---

### Paso 8 — Crear un emulador Android (AVD)

[![Android](https://img.shields.io/badge/AVD-Pixel_6_API_34-3DDC84?style=flat-square&logo=android&logoColor=white)](https://developer.android.com/studio/run/managing-avds)

1. Abre Android Studio
2. Ve a **Device Manager** (ícono de teléfono en la barra lateral derecha)
3. Haz clic en **Create Device**
4. Selecciona un dispositivo (ej. Pixel 6)
5. Descarga una imagen del sistema (ej. API 34 — Android 14)
6. Finaliza y arranca el emulador

---

### Paso 9 — Compilar y abrir en Android

[![Capacitor](https://img.shields.io/badge/Capacitor-build_&_run-119EFF?style=flat-square&logo=capacitor&logoColor=white)](https://capacitorjs.com/)

```bash
# Compilar el proyecto web
ionic build

# Agregar la plataforma Android (solo la primera vez)
ionic capacitor add android

# Copiar los archivos compilados a la carpeta android
ionic capacitor copy android

# Abrir el proyecto en Android Studio
ionic capacitor open android
```

Una vez abierto Android Studio, selecciona tu emulador o dispositivo físico y presiona ▶ **Run**.

---

### Paso 10 — Probar en dispositivo físico (alternativa al emulador)

[![USB](https://img.shields.io/badge/USB-Depuración_activada-FF6D00?style=flat-square&logo=android&logoColor=white)](https://developer.android.com/studio/debug/dev-options)

1. En tu teléfono Android: **Ajustes → Acerca del teléfono → toca "Número de compilación" 7 veces**
2. Activa **Depuración USB** en las Opciones de desarrollador
3. Conecta el teléfono por USB
4. Acepta el mensaje de confianza en el teléfono
5. Corre `ionic capacitor open android` y selecciona tu dispositivo en Android Studio

---

##  Estructura del Proyecto

```
pomodoro-ionic/
├── src/
│   ├── app/
│   │   ├── home/
│   │   │   ├── home.page.html     ← Estructura visual (qué se ve)
│   │   │   ├── home.page.scss     ← Estilos (cómo se ve)
│   │   │   └── home.page.ts       ← Lógica del temporizador (cómo funciona)
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── theme/
│   │   └── variables.scss         ← Variables de color de Ionic
│   └── global.scss
├── android/                       ← Proyecto Android generado por Capacitor
├── capacitor.config.ts
└── package.json
```

---

## ¿Cómo funciona la lógica principal?

El corazón de la app está en `home.page.ts`. La función clave es `start()`:

```typescript
start() {
  this.isRunning = true;
  this.interval = setInterval(() => {
    this.timeLeft--;                      // Resta 1 segundo
    if (this.timeLeft === 0) {
      this.isBreak = !this.isBreak;       // Cambia el modo
      this.timeLeft = this.isBreak
        ? this.breakTime * 60             // Carga tiempo de descanso
        : this.focusTime * 60;            // Carga tiempo de enfoque
    }
  }, 1000);                               // Se ejecuta cada 1000ms = 1 segundo
}
```

`setInterval` ejecuta la función cada 1000 milisegundos. Cuando `timeLeft` llega a cero, el modo cambia automáticamente entre Enfoque y Descanso.

---

##  Ventajas de Ionic

Ventaja | Detalle |
|---|---|
| **Un solo código base** | Desarrollas una vez y funciona en iOS, Android y navegador |
| **Tecnologías web familiares** | Usas HTML, CSS/SCSS y TypeScript — no necesitas aprender Dart ni Kotlin |
| **Gran ecosistema** | Compatible con Angular, React o Vue |
| **Ionic UI Components** | Componentes preconstruidos con diseño nativo para cada plataforma |
| **Capacitor integrado** | Acceso a funciones nativas del dispositivo (cámara, GPS, notificaciones) |
| **Ionic DevApp** | Prueba en tu teléfono sin necesidad de compilar |
| **Comunidad activa** | Documentación extensa y muchos recursos de aprendizaje |

---

##  Desventajas de Ionic

| Desventaja | Detalle |
|---|---|
| **Rendimiento inferior al nativo** | Para apps con animaciones muy complejas o gráficos 3D, el rendimiento no iguala al nativo |
| **WebView dependiente** | Corre dentro de un WebView, lo que puede tener inconsistencias entre dispositivos |
| **Tamaño del APK** | El APK generado es más pesado que una app nativa equivalente |
| **Acceso limitado a APIs nativas** | Algunos sensores o funciones muy específicas del hardware requieren plugins adicionales |
| **El emulador es muy pesado** | Requiere buena RAM y CPU para funcionar con fluidez |

---

## Posibles errores y soluciones

### ❌ `ionic: command not found`
**Causa:** Ionic CLI no se instaló globalmente o no está en el PATH.  
**Solución:**
```bash
npm install -g @ionic/cli
# En Mac/Linux puede requerir:
sudo npm install -g @ionic/cli
```

---

### ❌ `npm install` falla con errores de permisos
**Causa:** Permisos insuficientes en la carpeta.  
**Solución (macOS/Linux):**
```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

---

### ❌ El emulador Android no aparece o no carga
**Causa:** HAXM no habilitado, o la virtualización del CPU está desactivada.  
**Solución:**
- Activa la virtualización en el BIOS (Intel VT-x o AMD-V)
- En Android Studio: SDK Manager → SDK Tools → instala **Intel x86 Emulator Accelerator (HAXM)**
- Reinicia el equipo

---

### ❌ `SDK location not found`
**Causa:** Las variables de entorno de Android no están configuradas.  
**Solución:** Configura `ANDROID_HOME` como se describió en el Paso 7.

---

### ❌ `ionic capacitor copy android` falla
**Causa:** No se ha corrido `ionic build` primero, o la carpeta `android` no existe.  
**Solución:**
```bash
ionic build
ionic capacitor add android   # si es la primera vez
ionic capacitor copy android
```

---

### ❌ El dispositivo físico no aparece en Android Studio
**Causa:** Depuración USB no activada, o falta el driver USB.  
**Solución:**
- Activa la Depuración USB en el teléfono
- En Windows, instala los drivers del fabricante del teléfono
- Prueba con otro cable USB

---

### ❌ `NG0200` o errores de módulos de Angular
**Causa:** Versiones incompatibles de dependencias.  
**Solución:**
```bash
rm -rf node_modules
npm install
```

---

### ❌ La app en el emulador se ve diferente al navegador
**Causa:** Comportamiento normal — Ionic adapta los componentes al estilo de cada plataforma (iOS o Android).  
**Solución:** Es esperado. Para forzar un estilo específico, configura `mode` en `app.module.ts`.

---

## Dependencias principales

| Badge | Paquete | Versión | Para qué sirve |
|---|---|---|---|
| [![Ionic](https://img.shields.io/badge/@ionic/angular-8.0-3880FF?style=flat-square&logo=ionic&logoColor=white)](https://ionicframework.com/) | `@ionic/angular` | ^8.0.0 | Componentes UI de Ionic |
| [![Angular](https://img.shields.io/badge/@angular/core-20-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev/) | `@angular/core` | ^20.0.0 | Framework Angular |
| [![Capacitor](https://img.shields.io/badge/@capacitor/core-8.3-119EFF?style=flat-square&logo=capacitor&logoColor=white)](https://capacitorjs.com/) | `@capacitor/core` | 8.3.0 | Puente entre web y nativo |
| [![Android](https://img.shields.io/badge/@capacitor/android-8.3-3DDC84?style=flat-square&logo=android&logoColor=white)](https://capacitorjs.com/docs/android) | `@capacitor/android` | 8.3.0 | Soporte específico Android |
| [![TypeScript](https://img.shields.io/badge/typescript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) | `typescript` | ~5.9.0 | Tipado estático |

---

## Créditos

- Desarrollado con [![Ionic](https://img.shields.io/badge/Ionic_Framework-MIT-3880FF?style=flat-square&logo=ionic&logoColor=white)](https://ionicframework.com/)
- Íconos por [![Ionicons](https://img.shields.io/badge/Ionicons-7.0-3880FF?style=flat-square&logo=ionic&logoColor=white)](https://ionic.io/ionicons)
- Editor [![VS Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com/)
- Proyecto académico — Universidad Tecnológica de Panamá, 2026

---

*🪲*
