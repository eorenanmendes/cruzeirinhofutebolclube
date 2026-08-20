import React, { useState } from 'react';
import { Camera, X, Upload } from 'lucide-react';

interface ImageUploadProps {
  label: string;
  onUpload: (file: File | null) => void;
  aspectRatio?: string;
  previewClassName?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ 
  label, 
  onUpload, 
  aspectRatio = "aspect-[3/4]",
  previewClassName = "w-32 h-40"
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setPreview(event.target?.result as string);
        };
        reader.readAsDataURL(file);
        onUpload(file);
      }
    }
  };

  const remove = () => {
    setPreview(null);
    onUpload(null);
  };

  return (
    <div className="space-y-3">
      <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
        {label}
      </label>
      
      <div className="flex items-start gap-6">
        {preview ? (
          <div className={`relative ${previewClassName} rounded-xl overflow-hidden border-2 border-blue-600 shadow-lg shadow-blue-600/20`}>
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            <button
              onClick={remove}
              className="absolute top-1 right-1 p-1 bg-red-600 rounded-full text-white hover:bg-red-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <label className={`flex flex-col items-center justify-center ${previewClassName} border-2 border-dashed border-slate-800 rounded-xl cursor-pointer hover:border-blue-600 hover:bg-blue-600/5 transition-all group`}>
            <Upload className="w-8 h-8 text-slate-700 group-hover:text-blue-500 mb-2" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 group-hover:text-blue-500 text-center px-2 leading-tight">
              Foto 3x4
            </span>
            <input 
              type="file" 
              className="hidden" 
              accept="image/png, image/jpeg, image/jpg" 
              onChange={handleFileChange} 
            />
          </label>
        )}
        
        <div className="flex-1 space-y-2">
          <p className="text-xs text-slate-500 leading-relaxed italic">
            Selecione uma foto nítida do aluno.<br />
            Aceita: JPG, JPEG e PNG.
          </p>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">
            <Camera className="w-3 h-3" />
            Escolher Arquivo
          </div>
        </div>
      </div>
    </div>
  );
};
