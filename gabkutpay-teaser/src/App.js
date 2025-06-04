import React from 'react';
import TeaserHero from './components/TeaserHero';
import TeaserIntroGabkut from './components/TeaserIntroGabkut';
import TeaserVision from './components/TeaserVision';
import TeaserServicesGabkut from './components/TeaserServicesGabkut';
import TeaserComptesGabkut from './components/TeaserComptesGabkut';
import TeaserCartesPrecommande from './components/TeaserCartesPrecommande';

const App = () => {
  return (
    <>
      <TeaserHero />
      <TeaserIntroGabkut />
      <TeaserVision />
      <TeaserServicesGabkut />
      <TeaserComptesGabkut />
      <TeaserCartesPrecommande />
      {/* Les prochaines sections (Intro, Vision, Services, etc.) s’ajouteront ici */}
    </>
  );
};

export default App;
