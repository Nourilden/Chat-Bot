function generateBotResponse(userInput) {
  let botResponse = "I don't understand that, can you try again?";

  // Check if the input is an equation
  if (isEquation(userInput)) {
      botResponse = solveEquation(userInput);
  } else {
      // Expanded predefined responses
      if (userInput.toLowerCase().includes("hello")) {
          botResponse = "Hello! How can I assist you today?";
      } else if (userInput.toLowerCase().includes("how are you")) {
          botResponse = "I'm just a bot, but I'm here to help!";
      } else if (userInput.toLowerCase().includes("your name")) {
          botResponse = "I'm your friendly chatbot!";
      } else if (userInput === "what is your name" || userInput === "What is your name") {
          botResponse = "I'm your friendly chatbot!";
      } else if (userInput.includes("hello" || "your name")) {
          botResponse = "Hello! I'm your friendly chatbot!";
      } else if (userInput.toLowerCase().includes("bye")) {
          botResponse = "Goodbye! Have a great day!";
      } else if (userInput.toLowerCase().includes("issue")) {
          botResponse = "Please describe your issue, and I'll do my best to help.";
      } else if (userInput.toLowerCase().includes("weather")) {
          botResponse = "I'm not connected to the internet, so I can't check the weather right now.";
      } else if (userInput.toLowerCase().includes("joke")) {
          botResponse = "Why don't programmers like nature? It has too many bugs!";
      } else if (userInput.toLowerCase().includes("time")) {
          botResponse = `The current time is ${new Date().toLocaleTimeString()}.`;
      } else if (userInput.toLowerCase().includes("day")) {
          botResponse = `Today is ${new Date().toLocaleDateString()}.`;
      } else {
          botResponse = handleIssue(userInput);
      }
  }

  appendMessage("bot", botResponse);
}
