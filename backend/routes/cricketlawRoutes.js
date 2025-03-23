const express = require("express");
const router = express.Router();
const CricketLaw = require("../models/cricketlawsSchema");

// ✅ Create a new cricket law (POST)
router.post("/", async (req, res) => {
  try {
    const { lawNumber, title, description } = req.body;

    const newLaw = new CricketLaw({ lawNumber, title, description });
    await newLaw.save();

    res.status(201).json({ message: "Cricket Law added successfully!", newLaw });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get all cricket laws (GET)
router.get("/", async (req, res) => {
  try {
    const laws = await CricketLaw.find();
    res.status(200).json(laws);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get a single cricket law by ID (GET)
router.get("/:id", async (req, res) => {
  try {
    const law = await CricketLaw.findById(req.params.id);
    if (!law) return res.status(404).json({ message: "Law not found" });

    res.status(200).json(law);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update a cricket law (PUT)
router.put("/:id", async (req, res) => {
  try {
    const { lawNumber, title, description } = req.body;

    const updatedLaw = await CricketLaw.findByIdAndUpdate(
      req.params.id,
      { lawNumber, title, description },
      { new: true }
    );

    if (!updatedLaw) return res.status(404).json({ message: "Law not found" });

    res.status(200).json({ message: "Cricket Law updated!", updatedLaw });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Delete a cricket law (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    const deletedLaw = await CricketLaw.findByIdAndDelete(req.params.id);
    if (!deletedLaw) return res.status(404).json({ message: "Law not found" });

    res.status(200).json({ message: "Cricket Law deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
