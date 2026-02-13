import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const baseStyles = 'px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px] flex items-center justify-center';
    
    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/80 focus:ring-primary shadow-sm hover:shadow-md active:shadow-sm',
      secondary: 'border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white active:bg-primary/90 focus:ring-primary shadow-sm hover:shadow-md active:shadow-sm',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
