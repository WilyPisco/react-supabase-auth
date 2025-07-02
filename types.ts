
// Tipos de datos para la autenticación y el usuario

export interface Usuario {
  id: string;
  email: string;
  nombreCompleto: string;
}

export interface CredencialesLogin {
  email: string;
  password?: string;
}

export interface CredencialesRegistro extends CredencialesLogin {
  nombreCompleto: string;
  password: string; // Hacemos la contraseña requerida para el registro
}

export interface AuthContextType {
  usuario: Usuario | null;
  cargando: boolean;
  login: (credentials: CredencialesLogin) => Promise<void>;
  signup: (credentials: CredencialesRegistro) => Promise<void>;
  logout: () => Promise<void>;
}
