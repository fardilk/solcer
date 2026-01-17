interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left';
  const maxWidth = align === 'center' ? 'max-w-2xl mx-auto' : '';

  return (
    <div className={`${alignClasses} ${maxWidth} mb-12`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
