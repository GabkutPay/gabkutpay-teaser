import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TeaserFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Qu’est-ce que Gabkut Pay ?",
      answer: "Gabkut Pay est une super-app financière qui permet d’envoyer, recevoir, convertir et gérer de l’argent, avec des cartes virtuelles, retraits internationaux, IA intégrée et services bancaires puissants.",
    },
    {
      question: "Quels types de comptes sont proposés ?",
      answer: "Nous proposons 9 types de comptes : Standard, Pro, Institutionnel, VIP, Diaspora, Élève, Étudiant, Avenir (enfant), Partagé.",
    },
    {
      question: "Puis-je précommander une carte Gabkut Pay ?",
      answer: "Oui, depuis la section dédiée. Nos cartes IA sont sécurisées, avec CVV dynamique et système proxy intégré.",
    },
    {
      question: "Comment devenir partenaire ou investisseur ?",
      answer: "Vous pouvez proposer un partenariat ou un appui depuis la section ‘Partenaires’. Nous acceptons les collaborations stratégiques, techniques ou financières.",
    },
    {
      question: "Gabkut Pay fonctionne-t-il à l’international ?",
      answer: "Oui. Nos services sont conçus pour la diaspora, avec une couverture mondiale (plus de 370 pays et territoires) et un système de conversion instantanée.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-100 text-gray-900 py-16 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">❓ Questions fréquentes (FAQ)</h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-4 font-semibold text-blue-900"
              >
                {item.question}
              </button>
              {activeIndex === index && (
                <div className="p-4 border-t text-gray-700 text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeaserFAQ;
