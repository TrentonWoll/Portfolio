document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const terminalBody = document.querySelector('.terminal-body');

    userInput.focus();

    terminalBody.addEventListener('click', () => {
        userInput.focus();
    });

    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = userInput.textContent.trim();
            handleCommand(command);
            userInput.textContent = '';
            event.preventDefault();
        }
    });

    function handleCommand(command) {
        switch (command) {
            case '1':
                window.location.href = 'About.html';
                break;
            case '2':
                window.location.href = 'Projects.html';
                break;
            case '3':
                window.location.href = 'Goals.html';
                break;
            default:
                const errorMsg = document.createElement('p');
                errorMsg.textContent = `${command} is not a valid option. Please enter 1, 2, or 3.`;
                terminalBody.appendChild(errorMsg);
                break;
        }
    }
    
});

