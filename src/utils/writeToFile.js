const fs = require("fs");

// write to file
const writeToFile = (filePath, generatedHtml) => {
  try {
    fs.writeFileSync(filePath, generatedHtml);
  } catch (error) {
    console.log(error.message);
  }
}; 



// exporting modules for external use
module.exports = writeToFile;
