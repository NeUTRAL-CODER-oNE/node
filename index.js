const fs = require('fs').promises;

async function readFileContent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        
        if (content.length === 0) {
            console.log('File is empty.');
        } else {
            console.log('File Content:');
            console.log(content);
        }
    } catch (error) {
        console.error(`Error reading file: ${error.code} - ${error.message}`);
    }
}

console.log('\n Test Case 1:');
readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

console.log('\n Test Case 2:');
readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

console.log('\n Test Case 3:');
readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...