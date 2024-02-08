const { exec } = require('child_process');

function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`Command execution resulted in an error: ${stderr}`);
            return;
        }

        console.log(stdout);
    });
}

// Test cases
executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');