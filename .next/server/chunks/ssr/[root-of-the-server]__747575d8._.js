module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/react [external] (react, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}}),
"[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@supabase/supabase-js", () => require("@supabase/supabase-js"));

module.exports = mod;
}}),
"[project]/src/services/supabase.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://erowctycxxpqzjpalivj.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyb3djdHljeHhwcXpqcGFsaXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNDM1NzgsImV4cCI6MjA2NjYxOTU3OH0.lULcx0nODMJYTUCoVi-VHDTe4luYjwvIkwp7Maaux-Q");
if (!supabaseUrl || supabaseUrl.includes('PON_AQUI')) {
    alert("Error: La URL de Supabase no está configurada. Por favor, verificar");
    throw new Error("La URL de Supabase no está configurada.");
}
if (!supabaseAnonKey || supabaseAnonKey.includes('PON_AQUI')) {
    alert("Error: La clave anónima de Supabase no está configurada. Por favor, verificar");
    throw new Error("La clave anónima de Supabase no está configurada.");
}
const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__["createClient"])(supabaseUrl, supabaseAnonKey);
}}),
"[project]/context/AuthContext.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthContext": (()=>AuthContext),
    "AuthProvider": (()=>AuthProvider)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/supabase.ts [ssr] (ecmascript)");
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])(null);
const AuthProvider = ({ children })=>{
    const [usuario, setUsuario] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [cargando, setCargando] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const getSession = async ()=>{
            try {
                const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (session) {
                    const user = session.user;
                    setUsuario({
                        id: user.id,
                        email: user.email,
                        nombreCompleto: user.user_metadata.nombre_completo || 'Sin nombre'
                    });
                }
            } catch (error) {
                console.error("Error al obtener la sesión:", error);
            } finally{
                setCargando(false);
            }
        };
        getSession();
        const { data: authListener } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange((_event, session)=>{
            const user = session?.user;
            if (user) {
                setUsuario({
                    id: user.id,
                    email: user.email,
                    nombreCompleto: user.user_metadata.nombre_completo || 'Sin nombre'
                });
            } else {
                setUsuario(null);
            }
            if (cargando) {
                setCargando(false);
            }
        });
        return ()=>{
            authListener.subscription.unsubscribe();
        };
    }, []);
    const login = async ({ email, password })=>{
        if (!password) throw new Error("La contraseña es requerida para iniciar sesión.");
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
            email,
            password
        });
        if (error) throw error;
    };
    const signup = async ({ email, password, nombreCompleto })=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email,
            password,
            options: {
                data: {
                    nombre_completo: nombreCompleto
                }
            }
        });
        if (error) throw error;
        if (data.user && !data.session) {
            alert('¡Registro exitoso! Por favor, revisa tu correo para confirmar tu cuenta.');
        }
    };
    const logout = async ()=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$supabase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        if (error) throw error;
    };
    const value = {
        usuario,
        cargando,
        login,
        signup,
        logout
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/AuthContext.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
};
}}),
"[project]/pages/_app.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.tsx [ssr] (ecmascript)");
;
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["AuthProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
            ...pageProps
        }, void 0, false, {
            fileName: "[project]/pages/_app.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/_app.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MyApp;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__747575d8._.js.map