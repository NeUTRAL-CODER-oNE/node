const fs = require('fs');

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf-8', (error, content) => {
        console.log(`\nTest Case: ${filePath}`);
        if (error) {
            console.error(`Error reading file: ${error.message}`);
        } else {
            if (content.length === 0) {
                console.log("empty string)");
            } else {
                console.log('File Content:');
                console.log(content);
            }
        }
    });
}

// Test Case 1
readFileContent('test-files/file1.txt');

// Test Case 2
readFileContent('test-files/empty-file.txt');

// Test Case 3
readFileContent('test-files/nonexistent-file.txt');
