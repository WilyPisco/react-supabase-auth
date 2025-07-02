
# (en Español) Starter de Autenticación con React y Supabase

Este es un proyecto base para el frontend de un sistema de autenticación moderno construido con React, TypeScript y Tailwind CSS. Provee un flujo de autenticación completo (Inicio de Sesión, Registro, Panel de Control protegido) que se conecta directamente a un backend de [Supabase](https://supabase.com/).

## Tabla de Contenidos

1.  [Características](#características)
2.  [Estructura del Proyecto](#estructura-del-proyecto)
3.  [Cómo Empezar](#cómo-empezar)
4.  [Configuración de Supabase](#configuración-de-supabase)
5.  [Desplegar en Vercel](#desplegar-en-vercel)

## Características

-   **Stack Tecnológico Moderno**: React 18, TypeScript, Tailwind CSS.
-   **Arquitectura Basada en Componentes**: Componentes bien estructurados y reutilizables.
-   **Flujo de Autenticación Completo con Supabase**:
    -   Página de Inicio de Sesión (`/login`)
    -   Página de Registro de Usuario (`/signup`)
    -   Panel de Control Protegido (`/dashboard`)
-   **Gestión de Estado Centralizada**: Estado de autenticación centralizado usando React Context.
-   **Estilo Profesional**: Interfaz de usuario profesional y responsiva con Tailwind CSS.
-   **Enrutamiento**: Enrutamiento del lado del cliente con `react-router-dom` (`HashRouter`).
-   **Listo para Desplegar**: Integración directa con Supabase, listo para producción.

## Estructura del Proyecto

```
/
├── src/
├── pages/
│   ├── DashboardPage.tsx
│   ├── LoginPage.tsx
│   |── SignupPage.tsx
│   |── _app.tsx
│   └── index.tsx
├── components/  
│   ├── router/
│   │   └── ProtectedRoute.tsx
│   └── ui/
│       └── (Componentes de UI reutilizables)
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── services/ 
│   │   └── supabase.ts
│   └── types.ts
├── package.json
└── README.md
```

## Cómo Empezar

Para ejecutar este proyecto localmente, necesitarás un entorno de desarrollo como [Vite](https://vitejs.dev/) o Create React App.

1.  **Clona el repositorio e instala las dependencias:**
    ```bash
    git clone <repository_url>
    cd react-supabase-auth-starter-es
    npm install
    ```

2.  **Configura tus claves de Supabase:**
    -   Renombra o copia `.env.local` 
    -   Abre `.env.local`  y añade tu URL y clave anónima de Supabase.

3.  **Ejecuta el servidor de desarrollo (ejemplo con Vite):**
    ```bash
    npm run dev 
    ```
    La aplicación estará disponible en `http://localhost:3000` (u otro puerto).

---

## Configuración de Supabase

Sigue estos pasos para conectar el proyecto a tu instancia de Supabase.

### 1. Prepara tu Proyecto de Supabase
-   Ve a **Project Settings** > **API** y copia tu **Project URL** y tu `anon` **public key**. Las necesitarás para el siguiente paso.
-   **Importante:** Ve a **Authentication** > **Providers** y desactiva la opción "Confirm email" si quieres que los usuarios puedan iniciar sesión inmediatamente después de registrarse. Por defecto, está activada por seguridad.

### 2. Configura las Credenciales en el Frontend

-   Abre el archivo `.env.local` en tu editor de código.
-   Pega tu **URL** y tu **Clave Anónima** en las constantes correspondientes:
    ```typescript
    // .env.local
    NEXT_PUBLIC_SUPABASE_URL = 'https://tu-proyecto-url.supabase.co';
    NEXT_PUBLIC_SUPABASE_ANON_KEY = 'tu-clave-anonima-publica';
    ```

¡Eso es todo! Tu aplicación ahora está conectada a Supabase.

## Desplegar en Vercel

1.  **Sube tu código a GitHub**: Empuja tu proyecto a un repositorio de GitHub.
2.  **Importa el Proyecto en Vercel**: Ve a tu panel de Vercel e importa el repositorio.
3.  **Configura el Proyecto**: Vercel probablemente detectará que estás usando Vite (u otro framework común).
    -   **Framework Preset**: Selecciona `Vite` (o el que hayas elegido).
    -   **Build Command**: `npm run build` o `vite build`
    -   **Output Directory**: `dist`
4.  **Añade Variables de Entorno**: ¡Este es el paso más importante para la seguridad! En lugar de dejar tus claves en `.env.local`, debes usar variables de entorno en Vercel.
    -   Ve a la **Settings** > **Environment Variables** de tu proyecto en Vercel.
    -   Crea dos variables:
        -   `VITE_SUPABASE_URL`: Pega tu Supabase Project URL.
        -   `VITE_SUPABASE_ANON_KEY`: Pega tu Supabase `anon` public key.
    -   **Modifica `services/supabase.ts`** para que use estas variables en producción (Vercel las inyecta automáticamente).
        ```typescript
        // services/supabase.ts
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        ```
5.  **Desplegar**: Haz clic en "Deploy". ¡Tu sitio estará en vivo y seguro!

---

