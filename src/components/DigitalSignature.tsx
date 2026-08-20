import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Eraser, RotateCcw } from 'lucide-react';

interface DigitalSignatureProps {
  onSave: (signatureDataUrl: string | null) => void;
  label?: string;
}

export const DigitalSignature: React.FC<DigitalSignatureProps> = ({ 
  onSave, 
  label = "Assinatura do responsável" 
}) => {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const clear = () => {
    sigCanvas.current?.clear();
    setIsEmpty(true);
    onSave(null);
  };

  const handleEnd = () => {
    if (sigCanvas.current) {
      setIsEmpty(sigCanvas.current.isEmpty());
      if (!sigCanvas.current.isEmpty()) {
        onSave(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
      }
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
        {label}
      </label>
      <div className="relative w-full aspect-[3/1] bg-white rounded-xl overflow-hidden border-2 border-slate-800 focus-within:border-blue-600 transition-colors">
        {/* @ts-ignore */}
        <SignatureCanvas
          ref={sigCanvas}
          onEnd={handleEnd}
          canvasProps={{
            className: 'w-full h-full cursor-crosshair',
          }}
          penColor="black"
        />
        {isEmpty && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <span className="text-slate-900 font-medium italic text-sm md:text-base">Assine aqui</span>
          </div>
        )}
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={clear}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
        >
          <Eraser className="w-3 h-3" />
          Limpar assinatura
        </button>
        <button
          type="button"
          onClick={clear}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          Assinar novamente
        </button>
      </div>
    </div>
  );
};
