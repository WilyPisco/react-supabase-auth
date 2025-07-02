
import React, { ButtonHTMLAttributes } from 'react';
import Spinner from './Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, isLoading = false, ...props }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
