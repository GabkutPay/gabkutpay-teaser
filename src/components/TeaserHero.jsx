import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TeaserHero = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 70); // 70 jours

    const updateCountdown = () => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance <= 0) {
        setCountdown('✅ Ouvert !');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setCountdown(`${days}j ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white flex flex-col items-center justify-center px-6 py-12 text-center"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
        Gabkut Pay arrive
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        Le futur de la finance est déjà là. Plus rapide. Plus intelligent. Plus sûr.
      </p>

      <div className="bg-white text-blue-900 font-bold px-6 py-2 rounded-full mb-4">
        ⏳ Lancement dans : {countdown}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="https://wa.me/243822783500"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-semibold transition"
        >
          📱 WhatsApp
        </a>
        <a
          href="mailto:gabkutpayrdc@gmail.com"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold transition"
        >
          ✉️ Email
        </a>
        <a
          href="#precommande"
          className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded text-gray-900 font-semibold transition"
        >
          💳 Précommander une carte
        </a>
      </div>

      <p className="text-sm text-gray-300 max-w-xl">
        Une plateforme unique. Un pouvoir absolu. Le contrôle total de votre argent, sans déplacements,
        sans files, sans souffrance. Nous nous sommes revolus des anciennes méthodes qui mettaient en souffrance, difficultés,
        nos parents fonctionnaires, militaires, policiers, et autres travailleurs pour obtenir leurs salaires dans les banques, 
        dans les shops, distributeurs agréés, agents payeurs pour recevoir le gain de leurs sacrifices énormes consentis les 26 jours complets du mois.
        Nous nous sommes dit "niet", finies ces choses, finies ces souffrances. Et pour toutes les autres difficultés auxquelles 
        toutes les couches sociales ont fait face : Compte bloqué, PIN oublié, mot de passe oublié, ça et ça, nous nous en sommes également revolus.
        Alors voilà Gabkut Pay, la réponse exacte de cette révolution, le remède fort à ces maladies qui rongent les Africains dans leurs terres avec les institutions d’ailleurs qui sont déjà en place. 
      </p>
    </motion.section>
  );
};

export default TeaserHero;
