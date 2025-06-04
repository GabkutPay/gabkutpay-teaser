import React from 'react';
import { useTranslation } from 'react-i18next';
import LangSelector from '../components/LangSelector';

const LandingTeaserPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* 🌐 Sélecteur de langue */}
      <LangSelector />

      {/* 🎉 Titre teaser */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        {t('teaser.title')}
      </h1>

      {/* 💬 Slogan */}
      <p className="text-lg md:text-xl text-center mb-6">
        {t('teaser.slogan')}
      </p>

      {/* 🎁 Avantages teaser */}
      <ul className="text-center space-y-2 mb-8">
        <li>💳 {t('teaser.cardPromo')}</li>
        <li>🌍 {t('teaser.diaspora')}</li>
        <li>🔐 {t('teaser.security')}</li>
      </ul>

      {/* ⏳ Compte à rebours fictif */}
      <div className="text-center text-xl font-semibold mb-10">
        ⏳ {t('teaser.launchCountdown')} : <span className="text-blue-600">4j 22h 19m</span>
      </div>

      {/* 📩 Formulaire simplifié */}
      <form className="max-w-md mx-auto bg-white shadow-md p-6 rounded-lg space-y-4">
        <input type="text" name="nom" placeholder={t('form.name')} className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder={t('form.email')} className="w-full p-2 border rounded" />
        <input type="tel" name="tel" placeholder={t('form.phone')} className="w-full p-2 border rounded" />
        <select name="type" className="w-full p-2 border rounded">
          <option value="">{t('form.accountType')}</option>
          <option value="standard">{t('form.standard')}</option>
          <option value="pro">{t('form.pro')}</option>
          <option value="vip">{t('form.vip')}</option>
          <option value="diaspora">{t('form.diaspora')}</option>
        </select>
        <button type="submit" className="bg-blue-700 text-white py-2 rounded w-full">
          {t('form.reserve')}
        </button>
      </form>

      {/* 📞 Boutons contact rapide */}
      <div className="flex justify-center space-x-4 mt-10">
        <a
          href="https://wa.me/243900000000"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <a
          href="mailto:gabkutpayrdc@gmail.com"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Email
        </a>
      </div>

      {/* 📜 Footer */}
      <footer className="text-center text-sm text-gray-600 mt-10">
        © 2025 Gabkut Pay – {t('teaser.rights')}
      </footer>
    </div>
  );
};

export default LandingTeaserPage;
