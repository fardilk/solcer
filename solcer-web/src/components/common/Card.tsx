import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated';
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
}: CardProps) {
  const variantStyles = {
    default: 'card',
    elevated: 'card-elevated',
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
