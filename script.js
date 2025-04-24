document.getElementById('command').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const command = e.target.value;
    handleCommand(command);
    e.target.value = '';  // Clear the input after command is entered
  }
});

function handleCommand(command) {
  const output = document.getElementById('output');
  let response = '';

  switch(command.toLowerCase()) {
    case 'help':
      response = 'Available commands:\nhelp\nwhoami\nclear\nattack\nstatus\n';
      break;
    case 'whoami':
      response = 'You are Tuan Fazrr, a web dev and DDoS enthusiast.\n';
      break;
    case 'clear':
      output.innerHTML = '';
      return;  // Don't add the "clear" command to output
    case 'attack':
      response = 'Attack simulation started...\n';
      break;
    case 'status':
      response = 'All systems running smoothly.\n';
      break;
    default:
      response = `Command not found: ${command}\nType 'help' for a list of commands.\n`;
  }

  output.innerHTML += `<div>$ ${command}</div><div>${response}</div>`;
  output.scrollTop = output.scrollHeight;  // Scroll to the bottom
}
