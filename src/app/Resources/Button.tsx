interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  ariaLabel?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  ariaLabel
}: ButtonProps) {
  const baseClasses = 'inline-flex justify-center items-center gap-2 border-none cursor-pointer transition-all duration-300 ease-in-out font-outfit font-bold';
  
  const variantClasses = {
    primary: 'bg-light-blue text-cream hover:bg-light-blue-dark',
    secondary: 'bg-transparent border-2 border-light-blue text-light-blue hover:bg-light-blue hover:text-cream'
  };
  
  const sizeClasses = {
    small: 'px-3 py-2 text-sm rounded-lg',
    medium: 'px-5 py-3 text-base rounded-xl',
    large: 'px-6 py-4 text-lg rounded-2xl'
  };
  
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button 
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}