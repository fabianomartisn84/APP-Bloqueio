
import React, { useState } from 'react';
import { Screen, EnergyType, VideoItem } from './types';
import { 
  BLOQUEIO_STEPS, 
  TRANSFERENCIA_STEPS,
  ENERGY_TYPES,
  INTRO_VIDEO_URL
} from './constants';
import Layout from './components/Layout';
import StepCard from './components/StepCard';
import { 
  ChevronRight, 
  ShieldCheck, 
  RefreshCcw, 
  CheckCircle2,
  Zap,
  Droplets,
  Wind,
  FlaskConical,
  Settings,
  Radio,
  Dna,
  Waves,
  Thermometer,
  AlertTriangle,
  Lightbulb,
  Video,
  ExternalLink,
  ListChecks,
  PlayCircle,
  // Fixed: Changed ShieldInfo to Shield as ShieldInfo is not exported from lucide-react
  Shield,
  Lock
} from 'lucide-react';

const GALLERY_VIDEOS: VideoItem[] = [
  { id: 1, title: "Bloqueio, Identificação e Zero Energia", url: "https://www.youtube.com/watch?v=TCfrNrZsGYk&list=PLlUyHZm_X02O0SnGb6nEFjKAhC2QKRVZz&index=1" },
  { id: 2, title: "Entendendo Energia Elétrica e Hidráulica", url: "https://www.youtube.com/watch?v=9DlOJ8KnKJ0&list=PLlUyHZm_X02O0SnGb6nEFjKAhC2QKRVZz&index=2&t=2s" },
  { id: 3, title: "Energias Mecânicas e Pneumáticas", url: "https://www.youtube.com/watch?v=KTX7_SjUqgs&list=PLlUyHZm_X02O0SnGb6nEFjKAhC2QKRVZz&index=3" },
  { id: 4, title: "Entendendo Energia Química, Nuclear e Térmica", url: "https://www.youtube.com/watch?v=AbgmP3tzDwg&list=PLlUyHZm_X02O0SnGb6nEFjKAhC2QKRVZz&index=4" },
  { id: 5, title: "Energia Gravitacional e Residual", url: "https://www.youtube.com/watch?v=th8SxSaXUtw&list=PLlUyHZm_X02O0SnGb6nEFjKAhC2QKRVZz&index=5" },
  { id: 6, title: "Matriz e os dispositivos de Bloqueio de energias", url: "https://www.youtube.com/watch?v=pBIyNMQVX6I&list=PLlUyHZm_X02O0SnGb6nEFjKAhC2QKRVZz&index=6" },
  { id: 7, title: "Etapas para bloqueio de energias e 6 passos para desenergização", url: "https://www.youtube.com/watch?v=BgKG-UJXZmE&list=PLlUyHZm_X02O0SnGb6nEFjKAhC2QKRVZz&index=7" },
  { id: 8, title: "Situações que se caracterizam como N3", url: "https://www.youtube.com/watch?v=h0R6usdpkO0&list=PLlUyHZm_X02O0SnGb6nEFjKAhC2QKRVZz&index=8" },
];

const getEnergyIcon = (iconName: string, className: string = "w-6 h-6") => {
  switch (iconName) {
    case 'zap': return <Zap className={className} />;
    case 'droplets': return <Droplets className={className} />;
    case 'wind': return <Wind className={className} />;
    case 'flask-conical': return <FlaskConical className={className} />;
    case 'settings': return <Settings className={className} />;
    case 'radio': return <Radio className={className} />;
    case 'dna': return <Dna className={className} />;
    case 'waves': return <Waves className={className} />;
    case 'thermometer': return <Thermometer className={className} />;
    default: return <Settings className={className} />;
  }
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  const [selectedEnergy, setSelectedEnergy] = useState<EnergyType | null>(null);
  const [completedBloqueio, setCompletedBloqueio] = useState<number[]>([]);
  const [completedTransferencia, setCompletedTransferencia] = useState<number[]>([]);

  const toggleStep = (id: number, type: 'bloqueio' | 'transferencia') => {
    if (type === 'bloqueio') {
      setCompletedBloqueio(prev => 
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setCompletedTransferencia(prev => 
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    }
  };

  const resetProgress = () => {
    setCompletedBloqueio([]);
    setCompletedTransferencia([]);
    setCurrentScreen(Screen.HOME);
    setSelectedEnergy(null);
  };

  const navigateToEnergy = (energy: EnergyType) => {
    setSelectedEnergy(energy);
    setCurrentScreen(Screen.ENERGY_DETAIL);
  };

  const renderPrivacyPolicy = () => (
    <Layout title="Privacidade" subtitle="Transparência e Segurança" onBack={() => setCurrentScreen(Screen.HOME)}>
      <div className="animate-in slide-in-from-bottom duration-400 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
          <div className="flex items-center gap-3 mb-4 text-emerald-800">
            {/* Fixed: Changed ShieldInfo to Shield */}
            <Shield className="w-6 h-6" />
            <h2 className="text-lg font-black uppercase tracking-tight">Política de Privacidade</h2>
          </div>
          
          <div className="space-y-4 text-sm text-emerald-900/80 leading-relaxed font-medium">
            <p>
              O <strong>Guia de Bolso de Bloqueio</strong> é uma ferramenta de consulta técnica offline. Valorizamos sua privacidade e operamos sob os seguintes princípios:
            </p>
            
            <section className="space-y-2">
              <h3 className="font-bold text-emerald-950 uppercase text-xs flex items-center gap-2">
                <Lock className="w-3 h-3" /> Coleta de Dados
              </h3>
              <p>
                Este aplicativo <strong>não coleta</strong>, armazena ou transmite qualquer informação pessoal, dados de localização ou identificadores de dispositivo. Todas as marcações de progresso no checklist são armazenadas apenas temporariamente na memória local do seu navegador e são reiniciadas ao fechar ou atualizar o app.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-emerald-950 uppercase text-xs">Uso de Mídia</h3>
              <p>
                Os vídeos apresentados são links externos para plataformas de streaming (YouTube/SharePoint). Ao acessar esses vídeos, você estará sujeito às políticas de privacidade dessas plataformas.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-bold text-emerald-950 uppercase text-xs">Isenção de Responsabilidade</h3>
              <p>
                Este guia é uma ferramenta de apoio educacional baseada no procedimento <strong>PRO 040948</strong>. O uso deste aplicativo não substitui o treinamento formal nem a obrigatoriedade de seguir rigorosamente os protocolos de segurança e a Matriz de Bloqueio oficial da sua unidade.
              </p>
            </section>

            <p className="pt-4 text-[10px] text-emerald-500 font-bold uppercase text-center border-t border-emerald-50">
              Versão 1.0.0 • Atualizado em 2024
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => setCurrentScreen(Screen.HOME)}
          className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl shadow-md hover:bg-emerald-700 transition-all uppercase tracking-widest text-xs"
        >
          Entendido
        </button>
      </div>
    </Layout>
  );

  const renderHomeScreen = () => (
    <div className="space-y-8 animate-in fade-in duration-500 pb-8">
      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/11] bg-emerald-100 border border-emerald-200">
        <img 
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1200" 
          alt="Procedimento de Bloqueio de Energia" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-5 border-t border-emerald-100">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-emerald-950 text-3xl font-black leading-none uppercase tracking-tighter">
              Guia de Bolso
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-amber-600 font-black text-2xl uppercase tracking-tighter">Bloqueio</span>
              <div className="h-6 w-px bg-emerald-200 self-center"></div>
              <p className="text-emerald-600 text-sm font-bold uppercase tracking-widest mt-1">
                PRO 040948
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-2">
        <button 
          onClick={() => setCurrentScreen(Screen.BLOQUEIO)}
          className="flex items-center justify-between p-6 bg-white border border-emerald-200 rounded-2xl shadow-md hover:border-amber-500 transition-all active:scale-[0.98] group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-500"></div>
          <div className="flex items-center gap-5">
            <div className="bg-amber-50 p-4 rounded-2xl group-hover:bg-amber-500 transition-colors">
              <ShieldCheck className="w-10 h-10 text-amber-600 group-hover:text-white" />
            </div>
            <div className="text-left">
              <span className="block text-2xl font-black text-emerald-950 uppercase tracking-tighter">Bloqueio</span>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                {completedBloqueio.length} de {BLOQUEIO_STEPS.length} Etapas
              </span>
            </div>
          </div>
          <ChevronRight className="w-8 h-8 text-emerald-200 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
        </button>

        <button 
          onClick={() => setCurrentScreen(Screen.TRANSFERENCIA)}
          className="flex items-center justify-between p-6 bg-white border border-emerald-200 rounded-2xl shadow-md hover:border-blue-500 transition-all active:scale-[0.98] group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500"></div>
          <div className="flex items-center gap-5">
            <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-600 transition-colors">
              <RefreshCcw className="w-10 h-10 text-blue-600 group-hover:text-white" />
            </div>
            <div className="text-left">
              <span className="block text-2xl font-black text-emerald-950 uppercase tracking-tighter leading-tight">Transferência</span>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                {completedTransferencia.length} de {TRANSFERENCIA_STEPS.length} Etapas
              </span>
            </div>
          </div>
          <ChevronRight className="w-8 h-8 text-emerald-200 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
        </button>
      </div>
      
      <div className="px-2">
        <h3 className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-center">Energias Perigosas</h3>
        <div className="grid grid-cols-3 gap-3">
          {ENERGY_TYPES.map((type) => (
            <button 
              key={type.id} 
              onClick={() => navigateToEnergy(type)}
              className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center text-center border border-emerald-100 hover:border-emerald-500 transition-all active:scale-90 group"
            >
              <div className="text-emerald-600 mb-2 group-hover:scale-110 transition-transform">{getEnergyIcon(type.icon, "w-8 h-8")}</div>
              <span className="text-[10px] font-black text-emerald-800 uppercase leading-tight tracking-tighter">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-2">
        <button 
          onClick={() => setCurrentScreen(Screen.VIDEOS_GALLERY)}
          className="w-full bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 flex items-center justify-between group active:scale-[0.98] transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 p-3 rounded-xl group-hover:scale-110 transition-transform">
              <Video className="w-8 h-8 text-emerald-700" />
            </div>
            <div className="text-left">
              <h3 className="text-emerald-950 font-black uppercase text-sm tracking-wider">Biblioteca de Vídeos</h3>
              <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">Treinamento YouTube</p>
            </div>
          </div>
          <ChevronRight className="w-6 h-6 text-emerald-200 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mt-4 mx-2">
        <h3 className="text-amber-600 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
          <AlertTriangle className="w-3 h-3" /> Atenção
        </h3>
        <p className="text-amber-800 text-xs font-medium leading-relaxed">
          Para intervenções complexas, valide sempre os pontos de bloqueio na <strong>Matriz de Bloqueio</strong> oficial da área.
        </p>
      </div>
    </div>
  );

  const renderVideosGalleryScreen = () => (
    <Layout 
      title="Vídeos" 
      subtitle="Treinamento YouTube" 
      onBack={() => setCurrentScreen(Screen.HOME)}
      onPrivacyClick={() => setCurrentScreen(Screen.PRIVACY_POLICY)}
    >
      <div className="animate-in slide-in-from-right duration-400 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {GALLERY_VIDEOS.map((video) => (
            <a 
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-2xl shadow-sm border border-emerald-100 flex flex-col items-center text-center gap-3 active:scale-95 transition-all hover:border-red-500 group no-underline"
            >
              <div className="p-4 rounded-full bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <PlayCircle className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="text-xs font-black text-emerald-900 uppercase leading-tight tracking-tight">
                  {video.title}
                </span>
                <ExternalLink className="w-3 h-3 text-emerald-400 group-hover:text-red-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );

  const renderEnergyDetailScreen = () => {
    if (!selectedEnergy) return null;
    return (
      <Layout 
        title={selectedEnergy.name} 
        subtitle="Riscos e Controles" 
        onBack={() => setCurrentScreen(Screen.HOME)}
        onPrivacyClick={() => setCurrentScreen(Screen.PRIVACY_POLICY)}
      >
        <div className="animate-in slide-in-from-bottom duration-400 space-y-6 px-1">
          <div className={`p-8 rounded-3xl bg-white border-b-8 border-${selectedEnergy.color}-500 shadow-lg flex flex-col items-center text-center`}>
            <div className={`p-6 rounded-full bg-${selectedEnergy.color}-50 text-${selectedEnergy.color}-600 mb-4`}>
              {getEnergyIcon(selectedEnergy.icon, "w-16 h-16")}
            </div>
            <h2 className="text-2xl font-black text-emerald-950 uppercase tracking-tighter">{selectedEnergy.name}</h2>
            <p className="text-emerald-700 text-sm mt-2 leading-relaxed">{selectedEnergy.description}</p>
          </div>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-100 shadow-sm">
            <h3 className="font-black text-red-600 uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Riscos Críticos
            </h3>
            <ul className="space-y-3">
              {selectedEnergy.mainRisks.map((risk, i) => (
                <li key={i} className="flex items-center gap-3 bg-white/60 p-2.5 rounded-lg border border-red-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  <p className="text-red-900 text-sm font-bold leading-tight">{risk}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-emerald-100/50 rounded-2xl p-6 border border-emerald-200 shadow-sm">
            <h3 className="font-black text-emerald-700 uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" /> Exemplos de Fontes
              <span className="text-[8px] font-normal opacity-60 ml-1 tracking-normal">(Lista não exaustiva)</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {selectedEnergy.examples.map((example, i) => (
                <li key={i} className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-emerald-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <p className="text-emerald-900 text-sm font-bold leading-tight">{example}</p>
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => setCurrentScreen(Screen.BLOQUEIO)}
            className="w-full bg-emerald-600 text-white font-black py-6 rounded-3xl hover:bg-emerald-700 shadow-lg active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center gap-3 group"
          >
            <ListChecks className="w-8 h-8 group-hover:scale-110 transition-transform" /> 
            <span className="text-lg">Ir para o Passo a Passo</span>
          </button>
        </div>
      </Layout>
    );
  };

  const renderChecklist = (title: string, steps: any[], completed: number[], type: 'bloqueio' | 'transferencia') => (
    <Layout 
      title={title} 
      subtitle="Procedimento PRO 040948" 
      onBack={() => setCurrentScreen(Screen.HOME)}
      onPrivacyClick={() => setCurrentScreen(Screen.PRIVACY_POLICY)}
    >
      <div className="animate-in slide-in-from-right duration-300 space-y-4">
        <div className="mb-6 p-5 bg-white border border-emerald-100 rounded-2xl flex justify-between items-center shadow-sm">
          <div>
            <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">Fluxo de Execução</p>
            <p className="text-emerald-950 text-lg font-black">{completed.length} de {steps.length} concluídos</p>
          </div>
          {completed.length === steps.length && (
            <div className="bg-emerald-100 p-2 rounded-full">
              <CheckCircle2 className="text-emerald-600 w-8 h-8 animate-bounce" />
            </div>
          )}
        </div>
        {steps.map((step, index) => {
          const isCompleted = completed.includes(step.id);
          const isInvalid = index > 0 && isCompleted && !completed.includes(steps[index - 1].id);
          return (
            <StepCard 
              key={step.id} 
              step={step} 
              isCompleted={isCompleted} 
              isInvalid={isInvalid}
              onToggle={() => toggleStep(step.id, type)} 
            />
          );
        })}
        <button 
          onClick={resetProgress} 
          className="mt-8 w-full bg-emerald-900 text-white font-black py-5 rounded-2xl hover:bg-emerald-800 shadow-md active:scale-95 transition-all uppercase tracking-widest"
        >
          Reiniciar Checklist
        </button>
      </div>
    </Layout>
  );

  return (
    <div className="bg-emerald-50 min-h-screen">
      {currentScreen === Screen.HOME && (
        <Layout 
          title="Guia de Bloqueio" 
          onPrivacyClick={() => setCurrentScreen(Screen.PRIVACY_POLICY)}
        >
          {renderHomeScreen()}
        </Layout>
      )}
      {currentScreen === Screen.BLOQUEIO && renderChecklist("Bloqueio de Energias", BLOQUEIO_STEPS, completedBloqueio, 'bloqueio')}
      {currentScreen === Screen.TRANSFERENCIA && renderChecklist("Transferência de bloqueio", TRANSFERENCIA_STEPS, completedTransferencia, 'transferencia')}
      {currentScreen === Screen.ENERGY_DETAIL && renderEnergyDetailScreen()}
      {currentScreen === Screen.VIDEOS_GALLERY && renderVideosGalleryScreen()}
      {currentScreen === Screen.PRIVACY_POLICY && renderPrivacyPolicy()}
    </div>
  );
};

export default App;
