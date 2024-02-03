const fs = require('fs');
const path = require('path');

function writeToFile(filePath, content) {

    // Write content to the specified file
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(`Error writing to file ${filePath}: ${err.message}`);
        } else {
            console.log(`Data written to ${filePath}`);
        }
    });
}

// Example usage:
writeToFile('test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to test-files/output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file test-files/nonexistent-folder/output.txt: ENOENT: no such file or directory...
