interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-[#FAF9F6] flex flex-col ${className}`}>
      {children}
    </div>
  );
}
