import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import Link from 'next/link'; 

import Button from '@/components/ui/Button'; 
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Logo from '@/components/ui/Logo';

import { useAuth } from '@/hooks/useAuth'; 

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login, cargando } = useAuth();
  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await login({ email, password }); 
      router.replace('/dashboard'); 
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión. Revisa tus credenciales.'); 
      console.error('Error de login:', err); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card> {}
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
              <Logo className="mx-auto h-12 w-auto"/>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
                  Inicia sesión en tu cuenta
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                  O{' '}
                  <Link href="/signup" className="font-medium text-primary hover:text-primary-hover">
                      crea una cuenta nueva
                  </Link>
              </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              id="email"
              type="email"
              label="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <Input
              id="password"
              type="password"
              label="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />

            {error && <p className="text-sm text-red-400">{error}</p>}

            <div>
              <Button type="submit" className="w-full" isLoading={cargando}>
                Iniciar Sesión
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;