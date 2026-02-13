interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: 'white' | 'cream' | 'light-green';
}

const bgMap = {
  white: 'bg-white',
  cream: 'bg-neutral-bg',
  'light-green': 'bg-accent/10',
};

export default function Section({
  id,
  className = '',
  children,
  bgColor,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${bgColor ? bgMap[bgColor] : ''} ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container">{children}</div>
    </section>
  );
}
