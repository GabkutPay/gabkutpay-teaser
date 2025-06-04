const express = require('express');
const router = express.Router();
const PdfModel = require('../models/pdfModel');

// ✅ GET : Récupérer tous les PDFs
router.get('/', async (req, res) => {
  try {
    const pdfs = await PdfModel.find().sort({ dateCreation: -1 });
    res.json(pdfs);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des PDFs' });
  }
});

// ✅ DELETE : Supprimer un PDF par ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPdf = await PdfModel.findByIdAndDelete(req.params.id);
    if (!deletedPdf) {
      return res.status(404).json({ message: 'PDF non trouvé' });
    }
    res.json({ message: 'PDF supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// ✅ PUT : Modifier un PDF par ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await PdfModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'PDF non trouvé' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
