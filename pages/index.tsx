import Spinner from '@/components/ui/Spinner';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const HomePage = () => {
  const router = useRouter();
  // useAuth debería proporcionar el estado del usuario y si la carga inicial ha terminado
  const { usuario, cargando } = useAuth(); 

  useEffect(() => {
    if (!cargando) {
      if (usuario) {
        router.replace('/dashboard'); 
      } else {
        router.replace('/login'); 
      }
    }
  }, [usuario, cargando, router]); 
  if (cargando) {
    return (
      <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          fontSize: '24px'
      }}>
        Cargando autenticación... 
        {<Spinner/>}
      </div>
    );
  }
  return null;
};

export default HomePage;