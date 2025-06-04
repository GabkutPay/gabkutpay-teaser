import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [fingerprint, setFingerprint] = useState('');
  const [message, setMessage] = useState('');

  // 🔐 Simuler capture empreinte (à remplacer par WebAuthn ou native plus tard)
  const handleFingerprintCapture = async () => {
    try {
      const fakeFingerprint = `FINGERPRINT-${Date.now()}`;
      setFingerprint(fakeFingerprint);
      alert("✅ Empreinte simulée capturée !");
    } catch (err) {
      console.error("Erreur capture biométrie :", err);
      alert("❌ Échec de la capture biométrique.");
    }
  };

  // ✅ Envoi du formulaire d’inscription
  const onSubmit = async (data) => {
    if (!fingerprint) {
      alert("Veuillez capturer votre empreinte digitale avant de soumettre.");
      return;
    }
    setMessage('');
    try {
      await axios.post('/api/auth/register', {
        ...data,
        fingerprint
      });
      setMessage("✅ Inscription réussie !");
    } catch (err) {
      console.error(err);
      setMessage("❌ Échec de l’inscription.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">🔐 Créer un compte</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            className={`border px-3 py-2 w-full rounded ${errors.email ? 'border-red-500' : ''}`}
            {...register('email', {
              required: 'Email requis',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Format d’email invalide'
              }
            })}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Nom complet</label>
          <input
            type="text"
            className="border px-3 py-2 w-full rounded"
            {...register('nom')}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Mot de passe</label>
          <input
            type="password"
            className={`border px-3 py-2 w-full rounded ${errors.password ? 'border-red-500' : ''}`}
            {...register('password', {
              required: 'Mot de passe requis',
              minLength: {
                value: 6,
                message: 'Mot de passe doit contenir au moins 6 caractères'
              }
            })}
          />
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* 🧬 Bouton capture biométrique */}
        <div>
          <button
            type="button"
            onClick={handleFingerprintCapture}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            disabled={isSubmitting}
          >
            📲 Capturer empreinte digitale
          </button>
          {fingerprint && (
            <p className="text-sm text-gray-600 mt-2">
              Empreinte capturée : <span className="font-mono">{fingerprint}</span>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isSubmitting ? 'Enregistrement...' : 'Créer le compte'}
        </button>

        {message && (
          <p className="mt-4 text-center font-semibold text-sm">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
