
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import React from 'react';

const DashboardPage: React.FC = () => {
  const { usuario, logout, cargando } = useAuth();
   const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout(); 
      router.replace('/login'); 
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("No se pudo cerrar sesión. Inténtalo de nuevo.");
    }
  };
  return (
    <Card>
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">Bienvenido al Panel</h1>
        {usuario && (
          <div className="text-gray-300">
            <p className="text-lg">
              ¡Hola, <span className="font-semibold text-primary">{usuario.nombreCompleto}</span>!
            </p>
            <p className="text-md">
              Tu correo registrado es: <span className="font-medium">{usuario.email}</span>
            </p>
          </div>
        )}
        <Button onClick={handleLogout} className="w-full" isLoading={cargando}>
          Cerrar Sesión
        </Button>
      </div>
    </Card>
  );
};

export default DashboardPage;
