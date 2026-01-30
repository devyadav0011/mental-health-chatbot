import { useState, useCallback } from "react";

export type EmotionType =
  | "happy"
  | "sad"
  | "anxious"
  | "angry"
  | "stressed"
  | "calm"
  | "neutral";

export interface EmotionAnalysis {
  primary: EmotionType;
  confidence: number;
  indicators: string[];
  voiceMetrics?: {
    pitch: number;
    energy: number;
    speed: number;
  };
}

interface UseEmotionDetectionResult {
  detectEmotion: (text: string, voiceMetrics?: EmotionAnalysis["voiceMetrics"]) => EmotionAnalysis;
  lastEmotion: EmotionAnalysis | null;
}

/**
 * Hook for detecting emotional state from text and voice characteristics
 */
export function useEmotionDetection(): UseEmotionDetectionResult {
  const [lastEmotion, setLastEmotion] = useState<EmotionAnalysis | null>(null);

  const detectEmotion = useCallback(
    (text: string, voiceMetrics?: EmotionAnalysis["voiceMetrics"]): EmotionAnalysis => {
      const lowerText = text.toLowerCase();
      const indicators: string[] = [];
      let emotionScores: Record<EmotionType, number> = {
        happy: 0,
        sad: 0,
        anxious: 0,
        angry: 0,
        stressed: 0,
        calm: 0,
        neutral: 1,
      };

      // Text-based emotion detection patterns
      const emotionPatterns: Record<EmotionType, { keywords: string[]; phrases: RegExp[] }> = {
        sad: {
          keywords: ["sad", "depressed", "lonely", "empty", "hopeless", "cry", "tears", "down", "miserable", "unhappy"],
          phrases: [
            /feel.*down/,
            /can't.*stop.*crying/,
            /don't.*want.*anymore/,
            /no.*point/,
            /feel.*empty/,
            /lost.*hope/,
          ],
        },
        anxious: {
          keywords: ["anxious", "worried", "nervous", "panic", "fear", "scared", "overwhelmed", "stress", "tense", "restless"],
          phrases: [
            /can't.*relax/,
            /worry.*about/,
            /scared.*of/,
            /panic.*attack/,
            /heart.*racing/,
            /can't.*breathe/,
          ],
        },
        angry: {
          keywords: ["angry", "mad", "furious", "frustrated", "irritated", "annoyed", "hate", "pissed", "rage", "upset"],
          phrases: [
            /so.*angry/,
            /makes.*me.*mad/,
            /can't.*stand/,
            /fed.*up/,
            /driving.*crazy/,
            /hate.*when/,
          ],
        },
        stressed: {
          keywords: ["stressed", "pressure", "overwhelmed", "exhausted", "burned out", "tired", "deadline", "too much", "burden"],
          phrases: [
            /too.*much/,
            /can't.*handle/,
            /under.*pressure/,
            /burned.*out/,
            /so.*tired/,
            /need.*break/,
          ],
        },
        happy: {
          keywords: ["happy", "great", "wonderful", "excited", "joy", "love", "amazing", "perfect", "grateful", "blessed"],
          phrases: [
            /feel.*great/,
            /so.*happy/,
            /very.*excited/,
            /going.*well/,
            /couldn't.*be.*better/,
            /feel.*blessed/,
          ],
        },
        calm: {
          keywords: ["calm", "peaceful", "relaxed", "content", "serene", "tranquil", "zen", "balanced", "centered"],
          phrases: [
            /feel.*calm/,
            /at.*peace/,
            /feeling.*better/,
            /more.*relaxed/,
            /in.*control/,
            /sense.*of.*peace/,
          ],
        },
        neutral: {
          keywords: [],
          phrases: [],
        },
      };

      // Analyze text for emotion indicators
      for (const [emotion, patterns] of Object.entries(emotionPatterns) as [EmotionType, typeof emotionPatterns[EmotionType]][]) {
        let score = 0;

        // Check keywords
        patterns.keywords.forEach((keyword) => {
          if (lowerText.includes(keyword)) {
            score += 2;
            indicators.push(keyword);
          }
        });

        // Check phrases (weighted higher)
        patterns.phrases.forEach((phrase) => {
          if (phrase.test(lowerText)) {
            score += 3;
            indicators.push(`phrase match: ${phrase.source}`);
          }
        });

        emotionScores[emotion] += score;
      }

      // Voice metrics analysis (if available)
      if (voiceMetrics) {
        const { pitch, energy, speed } = voiceMetrics;

        // High pitch + high energy = anxious/stressed
        if (pitch > 0.7 && energy > 0.7) {
          emotionScores.anxious += 2;
          emotionScores.stressed += 2;
          indicators.push("high pitch & energy");
        }

        // Low pitch + low energy = sad
        if (pitch < 0.3 && energy < 0.3) {
          emotionScores.sad += 2;
          indicators.push("low pitch & energy");
        }

        // High energy + fast speed = angry/anxious
        if (energy > 0.7 && speed > 0.7) {
          emotionScores.angry += 1.5;
          emotionScores.anxious += 1.5;
          indicators.push("high energy & speed");
        }

        // Medium-balanced = calm
        if (pitch > 0.4 && pitch < 0.6 && energy > 0.3 && energy < 0.6) {
          emotionScores.calm += 1.5;
          indicators.push("balanced voice metrics");
        }
      }

      // Punctuation and capitalization analysis
      const exclamationCount = (text.match(/!/g) || []).length;
      const questionCount = (text.match(/\?/g) || []).length;
      const capsRatio = (text.match(/[A-Z]/g) || []).length / text.length;

      if (exclamationCount > 2) {
        emotionScores.happy += 1;
        emotionScores.angry += 1;
        indicators.push("multiple exclamations");
      }

      if (questionCount > 2) {
        emotionScores.anxious += 1;
        indicators.push("multiple questions");
      }

      if (capsRatio > 0.3 && text.length > 10) {
        emotionScores.angry += 1.5;
        emotionScores.stressed += 1;
        indicators.push("excessive capitalization");
      }

      // Find dominant emotion
      let maxScore = 0;
      let primaryEmotion: EmotionType = "neutral";

      for (const [emotion, score] of Object.entries(emotionScores)) {
        if (score > maxScore) {
          maxScore = score;
          primaryEmotion = emotion as EmotionType;
        }
      }

      // Calculate confidence (0-1)
      const totalScore = Object.values(emotionScores).reduce((sum, score) => sum + score, 0);
      const confidence = totalScore > 0 ? Math.min(maxScore / totalScore, 1) : 0.5;

      const analysis: EmotionAnalysis = {
        primary: primaryEmotion,
        confidence,
        indicators: indicators.slice(0, 5), // Keep top 5 indicators
        voiceMetrics,
      };

      setLastEmotion(analysis);
      return analysis;
    },
    []
  );

  return {
    detectEmotion,
    lastEmotion,
  };
}
