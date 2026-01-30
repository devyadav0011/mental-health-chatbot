import type { EmotionType } from "~/hooks/use-emotion-detection";

/**
 * Emotionally intelligent response templates based on detected emotion
 */

interface EmotionResponse {
  acknowledgment: string[];
  validation: string[];
  support: string[];
  coping: string[];
  affirmation: string[];
}

export const EMOTION_RESPONSES: Record<EmotionType, EmotionResponse> = {
  sad: {
    acknowledgment: [
      "I can sense that you're going through a difficult time right now 💙",
      "I hear the sadness in your words, and I'm here with you 🤗",
      "It sounds like you're feeling really down 😔",
      "I notice you're carrying some heavy feelings 🌧️",
    ],
    validation: [
      "It's completely okay to feel sad. Your emotions are valid and important 💜",
      "Sadness is a natural response, and you're not alone in feeling this way 🫂",
      "What you're experiencing is real, and it matters 💙",
      "There's no shame in feeling sad - it's part of being human 🌸",
    ],
    support: [
      "I'm here to listen, for as long as you need 👂💙",
      "You don't have to go through this alone. I'm right here with you 🤗",
      "Take all the time you need. This is a safe space for you 🏡",
      "I'm here to support you through this difficult moment 🌟",
    ],
    coping: [
      "When you're ready, even small acts of self-care can help - perhaps a warm drink or a gentle walk? ☕🚶",
      "Sometimes it helps to write down what you're feeling, or talk to someone you trust 📝💬",
      "Be gentle with yourself. Healing takes time, and that's perfectly okay ⏰💚",
      "Consider reaching out to a trusted friend or counselor if these feelings persist 🤝💙",
    ],
    affirmation: [
      "You're incredibly brave for opening up about this 💪✨",
      "Your strength in sharing these feelings is remarkable 🌟",
      "Remember, this feeling is temporary, even though it's hard right now 🌈",
      "You've gotten through difficult times before, and you will get through this too 💙",
    ],
  },

  anxious: {
    acknowledgment: [
      "I can sense the worry and tension you're experiencing right now 😰",
      "It sounds like anxiety is weighing heavily on you 🌊",
      "I hear that you're feeling overwhelmed and anxious 💭",
      "I notice you're experiencing a lot of nervous energy ⚡",
    ],
    validation: [
      "Anxiety can feel overwhelming, and what you're experiencing is very real 💙",
      "It's completely normal to feel anxious - you're not overreacting 🤗",
      "Your worries are valid, and it's okay to feel this way 💜",
      "Many people experience anxiety, and seeking support shows strength 💪",
    ],
    support: [
      "Let's take this one moment at a time together 🕐💙",
      "I'm here with you. You're safe, and we can work through this 🏡",
      "You're not alone in this feeling. I'm right here 🤗",
      "This space is calm and safe for you to express yourself 🌿",
    ],
    coping: [
      "Let's try a grounding technique: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste 👁️👂👃",
      "Take a slow, deep breath in for 4 counts, hold for 4, then exhale for 6. You're doing great 🌬️💙",
      "Try placing your hand on your heart and taking three slow, deep breaths 🫀🌬️",
      "Focus on the present moment - what's happening right now, in this exact second? 🕐",
    ],
    affirmation: [
      "You're handling this with courage, even when it feels overwhelming 💪✨",
      "Your ability to recognize and express your anxiety is a sign of self-awareness 🌟",
      "You've survived 100% of your anxious moments so far. You can get through this one too 💙",
      "This feeling will pass. You are stronger than your anxiety 🦋",
    ],
  },

  angry: {
    acknowledgment: [
      "I can sense your frustration and anger 😤",
      "It sounds like something has really upset you 💢",
      "I hear the intensity of your feelings right now 🔥",
      "You're experiencing strong emotions, and that's completely understandable 😠",
    ],
    validation: [
      "Your anger is valid. It's okay to feel this way when things are unfair or frustrating 💯",
      "Anger is a natural emotion, and you have every right to express it 💙",
      "What you're feeling is real and justified 💜",
      "It's healthy to acknowledge anger rather than suppress it 🌟",
    ],
    support: [
      "I'm here to listen without judgment. You can express your feelings safely here 🏡",
      "Take the space you need to process these intense feelings 🤗",
      "I'm with you through this. Let it out 💙",
      "This is a safe place to work through your anger 🌿",
    ],
    coping: [
      "If you can, try some physical release - a walk, exercise, or even screaming into a pillow can help 🏃‍♀️🥊",
      "Take slow, deliberate breaths to help calm your nervous system 🌬️",
      "Consider writing down everything you're angry about without filtering 📝",
      "When you're ready, think about what action (if any) might address the root of your anger 💭",
    ],
    affirmation: [
      "Your feelings are powerful, and you're managing them with awareness 💪",
      "It takes strength to feel anger and still seek healthy ways to process it 🌟",
      "You're in control, even when emotions feel overwhelming 🦁",
      "Recognizing and naming your anger is the first step toward resolution 💙",
    ],
  },

  stressed: {
    acknowledgment: [
      "I can feel the weight of pressure you're under right now 😓",
      "It sounds like you're carrying a lot on your shoulders 🎒",
      "I hear that you're feeling overwhelmed by everything 🌊",
      "You're dealing with a lot of demands right now 📋",
    ],
    validation: [
      "Stress is a natural response to pressure, and what you're feeling is completely valid 💙",
      "It's okay to feel overwhelmed when there's a lot going on 💜",
      "You're not weak for feeling stressed - you're human 🤗",
      "Many people experience this kind of pressure. You're not alone 🫂",
    ],
    support: [
      "Let's break this down together, one piece at a time 🧩",
      "I'm here to help you find clarity in the chaos 🌟",
      "You don't have to handle everything at once. I'm here with you 💙",
      "This is a safe space to unload what's weighing on you 🏡",
    ],
    coping: [
      "Try prioritizing: What absolutely must be done today? What can wait? 📝✅",
      "Consider taking a 5-minute break to breathe and reset your nervous system 🌬️⏸️",
      "Sometimes saying 'no' or asking for help is the strongest thing you can do 🙅‍♀️🤝",
      "Break large tasks into tiny, manageable steps. Progress, not perfection 👣",
    ],
    affirmation: [
      "You're managing more than most people realize. That takes incredible strength 💪",
      "Your awareness of your stress is the first step toward managing it 🌟",
      "You've handled stressful situations before and come through them 💙",
      "Taking a moment for yourself isn't selfish - it's necessary 🌸",
    ],
  },

  happy: {
    acknowledgment: [
      "I can feel the positive energy in your words! 😊✨",
      "It sounds like things are going really well for you! 🌟",
      "I hear the joy and excitement in what you're sharing! 🎉",
      "Your happiness is wonderful to witness! 😄",
    ],
    validation: [
      "Your joy is valid and beautiful. Embrace it fully! 💙✨",
      "It's wonderful to celebrate the good moments in life 🎉",
      "You deserve to feel this happiness 🌟💜",
      "Positive emotions are just as important to acknowledge as difficult ones 🌈",
    ],
    support: [
      "I'm so glad to share in this happy moment with you! 🤗💛",
      "Tell me more about what's bringing you joy! 🌟",
      "It's beautiful to hear you in such a good place 😊",
      "Your happiness is contagious! Keep shining ✨",
    ],
    coping: [
      "Try to capture this feeling - maybe write about it or share it with loved ones 📝💌",
      "Savor these positive moments. They're fuel for harder days 🌟",
      "Consider what's contributing to this happiness - can you bring more of it into your life? 💭",
      "Gratitude amplifies joy - what are you most grateful for right now? 🙏✨",
    ],
    affirmation: [
      "Your ability to recognize and appreciate happiness is a gift 🎁",
      "You've earned this joy - celebrate it! 🎉💙",
      "May this happiness continue to grow and expand 🌱✨",
      "Your positive energy is making the world brighter 🌟😊",
    ],
  },

  calm: {
    acknowledgment: [
      "I can sense a peaceful energy in your words 🌿",
      "It sounds like you're in a good, balanced place right now ☮️",
      "I hear a sense of tranquility and centeredness 🧘",
      "Your calm presence is beautiful 🌸",
    ],
    validation: [
      "Finding inner peace is a wonderful achievement 💙🕊️",
      "Your sense of calm is valuable and worth nurturing 🌿",
      "Being at peace with yourself is powerful 💜✨",
      "This centered state is something to appreciate 🙏",
    ],
    support: [
      "I'm glad to be here in this peaceful moment with you 🌟",
      "How wonderful to connect when you're feeling grounded 🤗",
      "Your calm energy creates a beautiful space 🏡",
      "Thank you for sharing this serene moment 💙",
    ],
    coping: [
      "Try to remember what contributed to this calm - you can return to it when needed 🧠💭",
      "Consider a grounding practice like meditation or mindful breathing to maintain this peace 🧘🌬️",
      "This is a great time for reflection and planning 📖✨",
      "Share this calm energy with others when you can - it's a gift 💝",
    ],
    affirmation: [
      "Your ability to find calm is a strength you can always access 💪🌿",
      "This peace you're experiencing is well-deserved ✨💙",
      "You've cultivated this inner tranquility - that's remarkable 🌟",
      "May this sense of calm stay with you 🕊️💜",
    ],
  },

  neutral: {
    acknowledgment: [
      "Thank you for sharing with me 💙",
      "I'm here and listening 👂",
      "I appreciate you opening up 🌟",
      "Let's explore what's on your mind together 💭",
    ],
    validation: [
      "Whatever you're feeling right now is valid 💜",
      "It's okay to not have intense emotions - sometimes we just need to process 💙",
      "Your thoughts and feelings matter, regardless of their intensity 🌟",
      "Taking time to reflect and talk is valuable in itself 🤗",
    ],
    support: [
      "I'm here to listen and support you in whatever way you need 💙",
      "This is your space to express yourself freely 🏡",
      "Take your time - there's no rush 🕐",
      "I'm with you, ready to help however I can 🤗",
    ],
    coping: [
      "Sometimes it helps to check in with yourself: How am I really feeling? 💭",
      "Consider what you need right now - rest, connection, activity, or something else? 🤔",
      "Journaling your thoughts can help bring clarity 📝✨",
      "Reaching out, even when you're unsure, is a positive step 💙",
    ],
    affirmation: [
      "You're taking care of yourself by being here 🌟",
      "Your self-awareness and willingness to communicate is admirable 💪",
      "Keep checking in with yourself - you know yourself best 💙",
      "Every conversation is a step toward better understanding yourself 🦋",
    ],
  },
};

/**
 * Generate an emotionally intelligent response based on detected emotion
 */
export function generateEmotionResponse(
  emotion: EmotionType,
  confidence: number,
  userMessage: string
): string {
  const responses = EMOTION_RESPONSES[emotion];
  
  // Build a comprehensive, empathetic response
  const parts: string[] = [];

  // 1. Acknowledgment (always include)
  parts.push(responses.acknowledgment[Math.floor(Math.random() * responses.acknowledgment.length)]);

  // 2. Validation (high confidence or strong emotion)
  if (confidence > 0.6 || ["sad", "anxious", "angry", "stressed"].includes(emotion)) {
    parts.push(responses.validation[Math.floor(Math.random() * responses.validation.length)]);
  }

  // 3. Support
  parts.push(responses.support[Math.floor(Math.random() * responses.support.length)]);

  // 4. Coping strategy (for difficult emotions)
  if (["sad", "anxious", "angry", "stressed"].includes(emotion) && confidence > 0.5) {
    parts.push(responses.coping[Math.floor(Math.random() * responses.coping.length)]);
  }

  // 5. Affirmation (always end on a positive note)
  parts.push(responses.affirmation[Math.floor(Math.random() * responses.affirmation.length)]);

  return parts.join("\n\n");
}

/**
 * Get a color associated with an emotion for UI feedback
 */
export function getEmotionColor(emotion: EmotionType): string {
  const colors: Record<EmotionType, string> = {
    happy: "var(--yellow-9)",
    sad: "var(--blue-9)",
    anxious: "var(--orange-9)",
    angry: "var(--red-9)",
    stressed: "var(--tomato-9)",
    calm: "var(--green-9)",
    neutral: "var(--gray-9)",
  };

  return colors[emotion];
}

/**
 * Get an emoji associated with an emotion
 */
export function getEmotionEmoji(emotion: EmotionType): string {
  const emojis: Record<EmotionType, string> = {
    happy: "😊",
    sad: "😔",
    anxious: "😰",
    angry: "😤",
    stressed: "😓",
    calm: "😌",
    neutral: "💭",
  };

  return emojis[emotion];
}
