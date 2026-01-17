import type { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  cta?: {
    label: string;
    onClick: () => void;
  };
  children?: ReactNode;
  variant?: 'full' | 'small';
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  cta,
  children,
  variant = 'full',
}: HeroProps) {
  const height = variant === 'full' ? 'min-h-screen' : 'min-h-96';

  return (
    <section
      className={`${height} flex items-center justify-center relative overflow-hidden`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #003366 0%, #0066CC 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}

      {/* Content */}
      <div className="container-wide relative z-10 text-white text-center">
        {children ? (
          children
        ) : (
          <>
            {subtitle && (
              <p className="text-lg md:text-xl font-semibold mb-2 text-blue-100">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl text-blue-100 md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                {description}
              </p>
            )}
            {cta && (
              <button
                onClick={cta.onClick}
                className="btn-primary bg-white text-blue-900 hover:bg-gray-100"
              >
                {cta.label}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
