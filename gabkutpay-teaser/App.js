import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ nom: '', email: '', tel: '', type: '' });
  const [countdown, setCountdown] = useState('');

  // 🕒 Fonction pour calculer le compte à rebours
  useEffect(() => {
    const launchDate = new Date('2025-06-10T00:00:00'); // ✅ Change ici si tu veux une autre date
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;
      if (diff <= 0) {
        setCountdown('🚀 Gabkut Pay est maintenant ouvert !');
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCountdown(`${days}j ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert("✅ Merci ! Votre pré-inscription a été envoyée.");
  };

  return (
    <div className="App">
      <h1>🔐 Gabkut Pay arrive</h1>
      <p>Le futur de la finance est déjà là. Plus rapide. Plus intelligent. Plus sûr.</p>

      <section className="hero">
        <p>🎁 5 $ offerts aux 100 premiers inscrits</p>
        <p>💳 Cartes Visa IA | 🌍 Comptes diaspora | 🏦 Retraits sans agences | 🧠 IA sécurité</p>
      </section>

      <div className="countdown">
        ⏳ Ouverture dans : <strong>{countdown}</strong>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom complet" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Adresse email" onChange={handleChange} required />
        <input type="tel" name="tel" placeholder="Téléphone WhatsApp" onChange={handleChange} required />
        <select name="type" onChange={handleChange} required>
          <option value="">Type de compte</option>
          <option value="standard">Standard</option>
          <option value="pro">Professionnel</option>
          <option value="diaspora">Diaspora</option>
          <option value="vip">VIP</option>
        </select>
        <button type="submit">Je réserve mon compte</button>
      </form>

      <footer>
        <p>© Gabkut Pay 2025 — Teaser public</p>
      </footer>
    </div>
  );
}

export default App;
