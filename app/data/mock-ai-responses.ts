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
  "You're showing real strength by reaching out and sharing your thoughts. That's a powerful first step.",
  "What you're going through matters, and you deserve support. Have you noticed any patterns in when these feelings tend to arise?",
  "It's brave of you to express these emotions. Remember, you don't have to face this alone.",
  "I can sense this weighs heavily on you. Sometimes it helps to break things down - what's one small thing that might bring you comfort today?",
  "Your journey is uniquely yours, and there's no 'right' way to feel. What would make you feel most supported right now?",
  "That must feel really overwhelming. Have you given yourself permission to rest and process these emotions?",
  "I'm grateful you felt safe enough to share this with me. What do you need most in this moment?",
  "Sometimes our minds can be our harshest critics. What would you say to a friend going through the same thing?",
  "You're navigating something difficult, and that takes resilience. How have you been coping so far?",
  "It's okay not to have all the answers right now. What feels most important for you to explore or understand?",
];

const GREETING_RESPONSES = [
  "Hello! I'm here to listen and support you. How are you feeling today?",
  "Hi there! Welcome to CalmChat. I'm here to provide a safe space for you. What's on your mind?",
  "Hello! Thank you for reaching out. I'm here to help. How can I support you today?",
  "Hey! It's wonderful to see you here. This is your space - how are things going for you?",
  "Welcome! I'm so glad you're here. Take a deep breath, and share whatever feels right for you.",
  "Hi! You've taken an important step by being here. What would you like to talk about today?",
  "Hello, friend! I'm here to listen with care and without judgment. What's been on your heart lately?",
  "Hey there! This is a safe, supportive space just for you. How can I help you feel better today?",
  "Hi! I'm here whenever you need to talk. What's weighing on your mind right now?",
  "Good to see you! Remember, there's no pressure here - just share what feels comfortable. How are you doing?",
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
