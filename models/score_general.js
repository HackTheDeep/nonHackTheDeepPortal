const mongoose = require("mongoose");

const GeneralScoreSchema = new mongoose.Schema({
  gnrl_part1_1_message: Number,
  gnrl_part1_2_audience: Number,
  gnrl_part1_3_problemSolving: Number,
  gnrl_part1_4_accuracy: Number,
  gnrl_part1_5_clarity: Number,
  gnrl_part2_6_technique: Number,
  gnrl_part2_7_composition: Number,
  gnrl_part2_8_draftsmanship: Number,
  gnrl_part2_9_craftsmanship: Number,
  book_part1_1_message: Number,
  book_part1_2_audience: Number,
  book_part1_3_MedIlliUse: Number,
  book_part1_4_accuracy: Number,
  book_part1_5_clarity: Number,
  book_part2_6_technique: Number,
  book_part2_7_cmpstionDrftsmnshpCrftmnshp: Number,
  book_part2_8_consistencyRendering: Number,
  book_part2_9_layoutIntegration: Number,
  anim_part1_1_message: Number,
  anim_part1_2_audience: Number,
  anim_part1_3_problemSolving: Number,
  anim_part1_4_accuracy: Number,
  anim_part1_5_clarity: Number,
  anim_part2_6_technique: Number,
  anim_part2_7_composition: Number,
  anim_part2_8_draftsmanship: Number,
  anim_part2_9_craftsmanship: Number,
  anim_part2_10_motion_fx: Number,
  anim_part2_11_sound: Number,
  notes: String,
  complete: { type: Boolean, default: false },
  entryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ArtEntry",
    required: true,
  },
  judge: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

const GeneralScore = mongoose.model("Score_general", GeneralScoreSchema);

module.exports = GeneralScore;
