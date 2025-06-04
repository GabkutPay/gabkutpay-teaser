import React, { useState } from "react";
import axios from "axios";

const Etape5Finalisation = ({ formData, setFormData, onBack }) => {
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [policiesAccepted, setPoliciesAccepted] = useState(false);

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleCheckboxChange = () => {
    setPoliciesAccepted(!policiesAccepted);
  };

  const canSubmit = policiesAccepted && recaptchaChecked;

  const handleFinalSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/formulaire/enregistrer", {
        nom: formData.nom,
        prenom: formData.prenom,
        dateNaissance: `${formData.jourNaissance}/${formData.moisNaissance}/${formData.anneeNaissance}`,
        adresse: `${formData.avenue}, N°${formData.numero}, ${formData.quartier}, ${formData.commune}, ${formData.ville}, ${formData.province}, ${formData.pays}`,
        profession: formData.profession,
        typeCompte: formData.typeCompte,
        nomCosignataire: formData.nomCosignataire,
        prenomCosignataire: formData.prenomCosignataire,
        lienCosignataire: formData.lienCosignataire,
        adresseCosignataire: formData.adresseCosignataire,
        quartierCode: "02",
        communeCode: "013",
        villeCode: "10",
        dateOuverture: new Date().toISOString()
      });

      alert(`✅ Compte enregistré avec succès !\nID GKP : ${response.data.gkpId}`);
      const pdfUrl = `http://localhost:8080/pdfs/${response.data.pdf}`;
      window.open(pdfUrl, "_blank");

    } catch (error) {
      console.error("❌ Erreur lors de la soumission :", error);
      alert("Erreur lors de l'enregistrement du formulaire.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold text-green-700 text-center">📎 Étape 5 : Finalisation & Validation</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Photo passeport</label>
        <input type="file" name="photoPasseport" onChange={handleFileChange} className="w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Carte d'identité</label>
        <input type="file" name="pieceIdentite" onChange={handleFileChange} className="w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Empreinte pouce gauche</label>
        <input type="file" name="empreinteGauche" onChange={handleFileChange} className="w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Empreinte pouce droit</label>
        <input type="file" name="empreinteDroite" onChange={handleFileChange} className="w-full" />
      </div>

      <div className="flex items-start space-x-2">
        <input type="checkbox" checked={policiesAccepted} onChange={handleCheckboxChange} className="mt-1" />
        <p className="text-sm text-gray-700">
          J’accepte les <a href="/confidentialite" className="text-blue-600 underline">politiques de confidentialité</a> et les <a href="/cgu" className="text-blue-600 underline">CGU</a> de Gabkut Pay.
        </p>
      </div>

      <div className="flex items-start space-x-2">
        <input type="checkbox" checked={recaptchaChecked} onChange={() => setRecaptchaChecked(!recaptchaChecked)} className="mt-1" />
        <p className="text-sm text-gray-700">Je ne suis pas un robot (reCAPTCHA)</p>
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Retour</button>
        <button
          onClick={handleFinalSubmit}
          disabled={!canSubmit}
          className={`px-6 py-2 text-white rounded ${
            canSubmit ? "bg-green-700 hover:bg-green-800" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Soumettre
        </button>
      </div>
    </div>
  );
};

export default Etape5Finalisation;
