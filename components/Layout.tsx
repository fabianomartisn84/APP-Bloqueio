
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface LayoutProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  onPrivacyClick?: () => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, subtitle, onBack, onPrivacyClick, children }) => {
  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-950 flex flex-col max-w-lg mx-auto shadow-2xl border-x border-emerald-100">
      <header className="bg-white text-emerald-950 p-6 sticky top-0 z-10 border-b border-emerald-100 shadow-sm">
        <div className="flex items-center gap-4">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-2 hover:bg-emerald-50 rounded-full transition-colors text-emerald-700"
              aria-label="Voltar"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <div>
            <h1 className="text-xl font-extrabold tracking-tight uppercase text-emerald-800">{title}</h1>
            {subtitle && <p className="text-emerald-600 text-sm font-medium">{subtitle}</p>}
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 pb-12 overflow-y-auto">
        {children}
      </main>
      <footer className="bg-white p-6 text-center border-t border-emerald-100 space-y-3">
        <p className="text-xs text-emerald-400 font-semibold uppercase tracking-widest">
          PRO 040948 • Gestão de Riscos
        </p>
        {onPrivacyClick && (
          <button 
            onClick={onPrivacyClick}
            className="text-[10px] text-emerald-600 hover:text-emerald-800 underline uppercase font-bold tracking-tighter transition-colors"
          >
            Política de Privacidade
          </button>
        )}
      </footer>
    </div>
  );
};

export default Layout;
