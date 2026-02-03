const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String   // URL or /project1.jpg
  },
  techStack: {
    type: [String], // ["React", "Node.js", "MongoDB"]
    default: []
  },
  githubLink: {
    type: String
  },
  liveLink: {
    type: String
  }
});

module.exports = mongoose.model("Project", projectSchema);
