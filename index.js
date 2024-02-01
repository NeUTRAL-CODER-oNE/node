const fs = require('fs').promises;

async function readFileContent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log('File Content:', content);
    } catch (error) {
        console.error(`Error reading file: ${error.code} - ${error.message}`);
    }
}
