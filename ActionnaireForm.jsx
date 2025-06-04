import React, { useState } from "react";
import AlertMessage from "./AlertMessage"; // adapte si le chemin est différent
import axios from "axios";

const ActionnaireForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("/api/public/actionnaire", formData);
      if (response.data.success) {
        setMessage("Formulaire soumis avec succès !");
        setFormData({ nom: "", email: "", message: "" });
      } else {
        setMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      setMessage("Erreur serveur. Veuillez réessayer plus tard.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">Devenir actionnaire</h2>

      <input
        type="text"
        name="nom"
        placeholder="Votre nom"
        value={formData.nom}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Message ou informations supplémentaires"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        rows="4"
      />

      {message && (
        <AlertMessage
          type={message.includes("succès") ? "success" : "error"}
          message={message}
        />
      )}

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded"
      >
        Envoyer
      </button>
    </form>
  );
};

export default ActionnaireForm;
