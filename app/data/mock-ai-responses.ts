/**
 * Mock AI responses for demonstration purposes
 * In a production app, these would come from an actual AI service
 */

const RESPONSES = [
  "I hear you, and I want you to know that what you're feeling is valid. It's okay to feel this way.",
  "Thank you for sharing that with me. It takes courage to open up about these feelings. How long have you been experiencing this?",
  "That sounds really challenging. Remember, it's important to be gentle with yourself during difficult times.",
  "I appreciate you trusting me with this. Would you like to explore what might be contributing to these feelings?",
  "It's completely normal to feel overwhelmed sometimes. Taking things one step at a time can help. What feels most pressing for you right now?",
  "Your feelings matter, and seeking support is a sign of strength. Have you been able to talk to anyone else about this?",
  "I understand this is difficult. Sometimes just acknowledging our feelings can be the first step toward feeling better.",
  "That's a lot to carry. Remember to take care of yourself. What usually helps you feel more grounded?",
  "Thank you for being so open. It's important to recognize that healing isn't linear, and that's okay.",
  "I'm here to listen without judgment. Would you like to tell me more about what's been on your mind?",
];

const GREETING_RESPONSES = [
  "Hello! I'm here to listen and support you. How are you feeling today?",
  "Hi there! Welcome to CalmChat. I'm here to provide a safe space for you. What's on your mind?",
  "Hello! Thank you for reaching out. I'm here to help. How can I support you today?",
];

const FAREWELL_RESPONSES = [
  "Take care of yourself. Remember, I'm here whenever you need to talk. You're doing great by reaching out.",
  "Thank you for sharing with me today. Be kind to yourself, and remember that support is always available when you need it.",
  "Wishing you peace and comfort. Don't hesitate to come back anytime you need someone to listen.",
];

export function generateAIResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  // Check for greetings
  if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
    return GREETING_RESPONSES[Math.floor(Math.random() * GREETING_RESPONSES.length)];
  }

  // Check for farewells
  if (lowerMessage.match(/(bye|goodbye|see you|take care|thanks)/)) {
    return FAREWELL_RESPONSES[Math.floor(Math.random() * FAREWELL_RESPONSES.length)];
  }

  // Return a random empathetic response
  return RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
}
