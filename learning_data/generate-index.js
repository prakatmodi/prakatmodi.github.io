// const fs = require('fs');
// const path = require('pth');

// const directoryPath = path.join(__dirname,'');
// const outputPath = path.join(__dirname, 'search-index.json');

// const files = fs.readdirSync(directoryPath);

// const index = files.map(filename => {
//     const content = fs.readFileSync(path.join(directoryPath, filename), 'utf-8');
//     return { name: filename, content };
// });

// fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));

// console.log('✅ search-index.json generated successfully.');


// const fs = require('fs');
// const path = require('path');

// const markdownFolderPath = '/mnt/c/Users/81809/prakatmodi.github.io/learning_data/.'; // Adjust path as needed
// console.log(markdownFolderPath);
// const outputFilePath = '/mnt/c/Users/81809/prakatmodi.github.io/learning_data/search-index.json';

// fs.readdir(markdownFolderPath, (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err);
//         return;
//     }

//     const markdownFiles = files.filter(file => path.extname(file) === '.md');
//     const indexData = [];

//     markdownFiles.forEach(file => {
//         const filePath = path.join(markdownFolderPath, file);
//         const fileContent = fs.readFileSync(filePath, 'utf8');

//         indexData.push({
//             name: file,
//             content: fileContent,
//             path: file,
//         });
//     });

//     fs.writeFileSync(outputFilePath, JSON.stringify(indexData, null, 2));
//     console.log(`search-index.json created successfully!`);
// });


const fs = require('fs');
const path = require('path');

const markdownFolderPath = './.'; // Adjust path as needed
console.log(markdownFolderPath);
const outputFilePath = './search-index.json';
const markdownExtension = '.md';
const indexData = [];

function processFile(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
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