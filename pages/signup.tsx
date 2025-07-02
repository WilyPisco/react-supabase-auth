
import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import Link from 'next/link'; 

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Logo from '@/components/ui/Logo';

import { useAuth } from '@/hooks/useAuth';

const SignupPage: React.FC = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { signup, cargando } = useAuth();
  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    try {
      await signup({ nombreCompleto, email, password });
      router.push('/login'); 
    } catch (err: any) {
      setError(err.message || 'Error al crear la cuenta. Inténtalo de nuevo.');
      console.error('Error de registro:', err); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card>
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
            <Logo className="mx-auto h-12 w-auto"/>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
                Crea tu cuenta
            </h2>
            <p className="mt-2 text-sm text-gray-400">
                O{' '}
                {/* <-- Usamos el componente Link de Next.js */}
                <Link href="/login" className="font-medium text-primary hover:text-primary-hover">
                    inicia sesión en tu cuenta existente
                </Link>
            </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            id="fullName"
            type="text"
            label="Nombre Completo"
            value={nombreCompleto}
            onChange={(e) => setNombreCompleto(e.target.value)}
            required
            autoComplete="name"
          />
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
            label="Contraseña (mín. 6 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />

          {error && <p className="text-sm text-red-400">{error}</p>}
          
          <div>
            <Button type="submit" className="w-full" isLoading={cargando}>
              Crear Cuenta
            </Button>
          </div>
        </form>
      </div>
    </Card>
    </div>    
  );
};

export default SignupPage;