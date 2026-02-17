import React from 'react';
import { Step } from '../types';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';

interface StepCardProps {
  step: Step;
  isCompleted: boolean;
  isInvalid?: boolean;
  onToggle: () => void;
}

const StepCard: React.FC<StepCardProps> = ({ step, isCompleted, isInvalid, onToggle }) => {
  const getContainerStyles = () => {
    if (isCompleted && isInvalid) {
      return 'bg-red-50 border-red-500 shadow-sm';
    }
    if (isCompleted) {
      return 'bg-emerald-100 border-emerald-500 shadow-sm';
    }
    return 'bg-white border-emerald-200 hover:bg-emerald-50 shadow-sm';
  };

  const getIconColor = () => {
    if (isCompleted && isInvalid) return 'text-red-500';
    if (isCompleted) return 'text-emerald-600';
    return 'text-emerald-200';
  };

  const getTagStyles = () => {
    if (isCompleted && isInvalid) return 'bg-red-100 text-red-700';
    if (isCompleted) return 'bg-emerald-200 text-emerald-800';
    return 'bg-emerald-100 text-emerald-700';
  };

  const getTitleStyles = () => {
    if (isCompleted && isInvalid) return 'text-red-900';
    if (isCompleted) return 'text-emerald-900 line-through opacity-60';
    return 'text-emerald-950';
  };

  return (
    <div 
      onClick={onToggle}
      className={`relative border-l-4 rounded-lg p-5 mb-4 transition-all duration-300 cursor-pointer active:scale-[0.98] border border-y-emerald-100 border-r-emerald-100 ${getContainerStyles()}`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 transition-colors duration-300 ${getIconColor()}`}>
          {isCompleted ? (
            isInvalid ? <AlertCircle className="w-7 h-7" /> : <CheckCircle2 className="w-7 h-7" />
          ) : (
            <Circle className="w-7 h-7" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className={`font-bold text-lg leading-tight transition-colors ${getTitleStyles()}`}>
              {step.title}
              {isCompleted && isInvalid && (
                <span className="block text-[10px] font-black uppercase tracking-tighter text-red-600 mt-1">
                  Atenção: Etapa anterior não concluída!
                </span>
              )}
            </h3>
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${getTagStyles()}`}>
              {step.id}º
            </span>
          </div>
          <p className={`text-sm leading-relaxed mb-3 transition-colors ${
            isCompleted && !isInvalid ? 'text-emerald-800/60' : isCompleted && isInvalid ? 'text-red-800/70' : 'text-emerald-700'
          }`}>
            {step.description}
          </p>
          <div className={`inline-flex items-center rounded px-2.5 py-1 transition-colors ${
            isCompleted && !isInvalid ? 'bg-emerald-200' : isCompleted && isInvalid ? 'bg-red-100' : 'bg-emerald-50'
          }`}>
            <span className="text-[10px] font-bold text-emerald-400 uppercase mr-2 tracking-wider">Responsável:</span>
            <span className={`text-xs font-semibold ${
              isCompleted && !isInvalid ? 'text-emerald-700' : isCompleted && isInvalid ? 'text-red-600' : 'text-emerald-600'
            }`}>
              {step.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;