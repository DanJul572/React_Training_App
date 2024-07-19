/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string,
    readonly VITE_LANGUAGE: string,
    readonly VITE_THEME: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
