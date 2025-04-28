'use strict';

const fs = require('fs');
const path = require('path');

const markdownFolderPath = './.'; // Adjust as needed
const outputFilePath = './search-index.json';
const markdownExtension = '.md';
const indexData = [];

// Function to remove Markdown frontmatter
function removeFrontmatter(content) {
  const frontmatterRegex = /^---[\s\S]*?---\s*/m;
  return content.replace(frontmatterRegex, '');
}

// Function to remove Markdown comments
function removeComments(content) {
  const commentRegex = /<!--[\s\S]*?-->/g;
  return content.replace(commentRegex, '');
}

// Function to extract title (first heading) and content without it
function extractContentData(content) {
  let title = '';
  let body = content.trim();

  // Find the first heading (could be # or <h1>)
  const headingMatch = body.match(/^(# .+|<h1[^>]*>.*<\/h1>)/m);
  if (headingMatch) {
    title = headingMatch[0].trim();
    // Remove the title from the body
    body = body.replace(headingMatch[0], '').trim();
  }

  return { title, body };
}

function processFile(filePath) {
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    fileContent = removeFrontmatter(fileContent);
    fileContent = removeComments(fileContent);

    const extracted = extractContentData(fileContent);
    const title = extracted.title;
    const body = extracted.body;

    const fileNameWithoutExtension = path.basename(filePath, markdownExtension);
    const filePathWithoutExtension = filePath.replace(markdownExtension, '');

    indexData.push({
      name: fileNameWithoutExtension,
      title: title || fileNameWithoutExtension, // fallback if no title
      content: body,
      path: filePathWithoutExtension,
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
        traverseDirectory(fullPath);
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
