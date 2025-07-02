
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType, Usuario, CredencialesLogin, CredencialesRegistro } from '../types';
import { supabase } from '@/src/services/supabase';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          const user = session.user;
          setUsuario({
            id: user.id,
            email: user.email!,
            nombreCompleto: user.user_metadata.nombre_completo || 'Sin nombre',
          });
        }
      } catch (error) {
        console.error("Error al obtener la sesión:", error);
      } finally {
        setCargando(false);
      }
    };
    
    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user;
      if (user) {
        setUsuario({
          id: user.id,
          email: user.email!,
          nombreCompleto: user.user_metadata.nombre_completo || 'Sin nombre',
        });
      } else {
        setUsuario(null);
      }
      if (cargando) {
        setCargando(false);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async ({ email, password }: CredencialesLogin) => {
    if (!password) throw new Error("La contraseña es requerida para iniciar sesión.");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signup = async ({ email, password, nombreCompleto }: CredencialesRegistro) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nombre_completo: nombreCompleto,
        },
      },
    });
    if (error) throw error;
    if (data.user && !data.session) {
        alert('¡Registro exitoso! Por favor, revisa tu correo para confirmar tu cuenta.');
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };
  
  const value = { usuario, cargando, login, signup, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
