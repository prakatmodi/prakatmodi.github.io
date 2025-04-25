
// const fs = require('fs');
// const path = require('path');

// const markdownFolderPath = './.'; // Adjust path as needed
// console.log(markdownFolderPath);
// const outputFilePath = './search-index.json';
// const markdownExtension = '.md';
// const indexData = [];

// function processFile(filePath) {
//     try {
//         const fileContent = fs.readFileSync(filePath, 'utf8');
//         indexData.push({
//             name: path.basename(filePath),
//             content: fileContent,
//             path: filePath,
//         });
//     } catch (error) {
//         console.error(`Error reading file: ${filePath}`, error);
//     }
// }

// function traverseDirectory(directoryPath) {
//     try {
//         const files = fs.readdirSync(directoryPath);

//         files.forEach(file => {
//             const fullPath = path.join(directoryPath, file);
//             const stats = fs.statSync(fullPath);

//             if (stats.isDirectory()) {
//                 traverseDirectory(fullPath); // Recursively traverse subdirectories
//             } else if (path.extname(file) === markdownExtension) {
//                 processFile(fullPath);
//             }
//         });
//     } catch (error) {
//         console.error(`Error reading directory: ${directoryPath}`, error);
//     }
// }

// traverseDirectory(markdownFolderPath);

// fs.writeFileSync(outputFilePath, JSON.stringify(indexData, null, 2));
// console.log(`search-index.json created successfully!`);



const fs = require('fs');
const path = require('path');

const markdownFolderPath = './.'; // Adjust path as needed
console.log(markdownFolderPath);
const outputFilePath = './search-index.json';
const markdownExtension = '.md';
const indexData = [];

// Function to remove Markdown frontmatter
function removeFrontmatter(content) {
  const frontmatterRegex = /^---[\s\S]*?---/m;
  return content.replace(frontmatterRegex, '');
}

// Function to remove Markdown comments
function removeComments(content) {
  const commentRegex = //g;
  return content.replace(commentRegex, '');
}

function processFile(filePath) {
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    fileContent = removeFrontmatter(fileContent); // Remove frontmatter
    fileContent = removeComments(fileContent);    // Remove comments

    indexData.push({
      name: path.basename(filePath),
      content: fileContent,
      path: filePath,
    });
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
  }
}

function traverseDirectory(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);

    files.forEach(file => {
      const fullPath = path.join(directoryPath, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        traverseDirectory(fullPath); // Recursively traverse subdirectories
      } else if (path.extname(file) === markdownExtension) {
        processFile(fullPath);
      }
    });
  } catch (error) {
    console.error(`Error reading directory: ${directoryPath}`, error);
  }
}

traverseDirectory(markdownFolderPath);

fs.writeFileSync(outputFilePath, JSON.stringify(indexData, null, 2));
console.log(`search-index.json created successfully!`);
