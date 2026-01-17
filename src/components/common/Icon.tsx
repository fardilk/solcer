interface IconProps {
  icon: string; // Font Awesome icon class (e.g., "fas fa-phone")
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  color?: string;
}

export default function Icon({
  icon,
  size = 'md',
  className = '',
  color = 'currentColor',
}: IconProps) {
  const sizeMap = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl',
  };

  return (
    <i
      className={`${icon} ${sizeMap[size]} ${className}`}
      style={{ color }}
      aria-hidden="true"
    ></i>
  );
}
