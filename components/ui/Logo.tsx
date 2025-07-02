
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        className="fill-primary"
      />
      <path
        d="M2 17L12 22L22 17"
        className="fill-primary-focus opacity-75"
      />
      <path
        d="M2 12L12 17L22 12"
        className="fill-primary-hover"
      />
    </svg>
  );
};

export default Logo;
