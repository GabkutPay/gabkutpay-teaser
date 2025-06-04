import React, { useState } from 'react';
import axios from 'axios';
import useFingerprint from '../utils/useFingerprint';

const LoginPage = () => {
  const fingerprint = useFingerprint();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!fingerprint) {
      setError("Empreinte digitale non disponible, veuillez réessayer.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('/api/auth/login', {
        email,
        password,
        fingerprint, // 🔐 Ajout de l’empreinte à chaque tentative
      });

      // Exemple : gérer la réponse, token, redirection, etc.
      setSuccess("Connexion réussie !");
      // Par exemple : localStorage.setItem('token', res.data.token);
      // Redirection ou autre logique ici

    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de la connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <form onSubmit={handleLogin}>

        <label className="block mb-2">
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </label>

        <label className="block mb-4">
          Mot de passe
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </label>

        <button
          type="submit"
          disabled={loading || !fingerprint}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>

      </form>

      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}
      {success && <p className="mt-4 text-green-600 font-semibold">{success}</p>}

      {!fingerprint && (
        <p className="mt-4 text-yellow-600">
          Chargement de l’empreinte digitale, veuillez patienter...
        </p>
      )}
    </div>
  );
};

export default LoginPage;
