import React, { useState } from 'react';
import { X } from 'lucide-react';
import { FormData } from '@/lib/types';
import { CustomButton } from './ui/CustomButton';

interface JoinFormProps {
  isOpen: boolean;
  formType: "Join" | "Register";
  onClose: () => void;
  initialData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  eventTitle?: string;
}

const JoinForm: React.FC<JoinFormProps> = ({
  isOpen,
  formType,
  onClose,
  initialData,
  onInputChange,
  onSubmit,
  eventTitle = "",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const formFields = [
    { name: 'fullName', label: 'Nom Complet', type: 'text', placeholder: 'Entrez votre nom complet' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Entrez votre email' },
    { name: 'phone', label: 'Téléphone', type: 'tel', placeholder: 'Entrez votre numéro de téléphone' },
    { name: 'className', label: 'Classe', type: 'text', placeholder: 'Entrez votre classe' },
    { name: 'institution', label: 'Institution', type: 'text', placeholder: 'Entrez le nom de votre institution' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="bg-gray-800 text-white rounded-2xl shadow-xl p-8 w-full max-w-md relative z-10 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
          aria-label="Fermer"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-center">
          {formType === "Join" ? "Rejoindre le Club" : "S'inscrire à l'événement"}
        </h2>
        
        {eventTitle && formType === "Register" && (
          <div className="mb-6 p-3 bg-primary/20 rounded-lg text-center text-primary font-medium">
            {eventTitle}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={(initialData as any)[field.name] || ''}
                onChange={onInputChange}
                required
                placeholder={field.placeholder}
                className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>
          ))}
          
          <div className="pt-4">
            <CustomButton type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Traitement..." : formType === "Join" ? "Rejoindre" : "S'inscrire"}
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
