import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/chat";
import { ArrowLeft, Send, Sparkles, User, Plus, Mic, MicOff, Heart } from "lucide-react";
import { generateAIResponse } from "~/data/mock-ai-responses";
import { useSpeechRecognition } from "~/hooks/use-speech-recognition";
import { useEmotionDetection, type EmotionAnalysis } from "~/hooks/use-emotion-detection";
import { generateEmotionResponse, getEmotionColor, getEmotionEmoji } from "~/data/emotion-responses";
import styles from "./chat.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chat - CalmChat AI" },
    {
      name: "description",
      content: "Chat with your AI companion for mental well-being support",
    },
  ];
}

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
  emotion?: EmotionAnalysis;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<EmotionAnalysis | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Emotion detection hook
  const { detectEmotion } = useEmotionDetection();

  // Speech recognition hook
  const {
    isListening,
    transcript,
    interimTranscript,
    isSupported: isSpeechSupported,
    startListening,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition({
    continuous: false,
    interimResults: true,
    onResult: (result) => {
      setInputValue((prev) => prev + result + " ");
    },
    onError: (error) => {
      console.error("Voice input error:", error);
    },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isProcessing) return;

    const messageText = inputValue.trim();
    
    // Detect emotion from user message
    const emotionAnalysis = detectEmotion(messageText);
    setCurrentEmotion(emotionAnalysis);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
      emotion: emotionAnalysis,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsProcessing(true);

    // Simulate AI processing delay
    setTimeout(() => {
      // Generate emotionally intelligent response
      const emotionalResponse = generateEmotionResponse(
        emotionAnalysis.primary,
        emotionAnalysis.confidence,
        messageText
      );
      
      // Fallback to context-aware response for additional variety
      const contextResponse = generateAIResponse(messageText);
      
      // Use emotion-based response for strong emotions, blend for neutral
      const finalResponse = emotionAnalysis.confidence > 0.6 
        ? emotionalResponse
        : `${contextResponse}\n\n${emotionalResponse.split('\n\n')[0]}`;

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: finalResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInputValue("");
    setCurrentEmotion(null);
    resetTranscript();
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      stopListening();
    } else {
      resetTranscript();
      startListening();
    }
  };

  // Update input value with interim transcript
  useEffect(() => {
    if (interimTranscript && isListening) {
      textareaRef.current?.focus();
    }
  }, [interimTranscript, isListening]);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link to="/" className={styles.sidebarBrand}>
            <Sparkles className={styles.brandIcon} />
            <span className={styles.brandTitle}>CalmChat</span>
          </Link>
          <button onClick={handleNewChat} className={styles.newChatBtn}>
            <Plus className={styles.newChatIcon} />
            <span>New Chat</span>
          </button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Link to="/" className={styles.backLink}>
              <ArrowLeft className={styles.backIcon} />
            </Link>
            <div className={styles.headerTitle}>
              <Sparkles className={styles.titleIcon} />
              <span>CalmChat AI</span>
            </div>
            {currentEmotion && currentEmotion.confidence > 0.6 && (
              <div className={styles.emotionIndicator} title={`Detected emotion: ${currentEmotion.primary}`}>
                <Heart className={styles.emotionIcon} style={{ color: getEmotionColor(currentEmotion.primary) }} />
                <span className={styles.emotionLabel}>{getEmotionEmoji(currentEmotion.primary)} {currentEmotion.primary}</span>
              </div>
            )}
          </div>
        </header>

        {/* Messages Area */}
        <div className={styles.messagesWrapper}>
          <div className={styles.messagesContainer}>
            {messages.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <Sparkles />
                </div>
                <h2 className={styles.emptyTitle}>How can I help you today?</h2>
                <p className={styles.emptyDescription}>
                  I'm your AI companion for mental well-being support with emotion awareness. 
                  I can sense how you're feeling and provide personalized, empathetic responses. 
                  Feel free to share what's on your mind - through text or voice.
                </p>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`${styles.messageRow} ${message.role === "user" ? styles.messageRowUser : styles.messageRowAi}`}
                  >
                    <div className={styles.messageContent}>
                      <div className={styles.messageAvatar}>
                        {message.role === "user" ? (
                          <User className={styles.avatarIcon} />
                        ) : (
                          <Sparkles className={styles.avatarIcon} />
                        )}
                      </div>
                      <div className={styles.messageText}>
                        <div className={styles.messageLabel}>
                          {message.role === "user" ? "You" : "CalmChat"}
                          {message.emotion && message.emotion.confidence > 0.5 && (
                            <span className={styles.emotionBadge} style={{ backgroundColor: getEmotionColor(message.emotion.primary) + '20', color: getEmotionColor(message.emotion.primary) }}>
                              {getEmotionEmoji(message.emotion.primary)} {message.emotion.primary}
                            </span>
                          )}
                        </div>
                        <div className={styles.messageBody}>
                          {message.content.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className={styles.messageParagraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className={styles.inputSection}>
          <div className={styles.inputContainer}>
            <div className={styles.inputWrapper}>
              <textarea
                ref={textareaRef}
                className={styles.input}
                value={inputValue + (isListening ? interimTranscript : "")}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isListening ? "Listening..." : "Message CalmChat..."}
                rows={1}
                disabled={isProcessing}
              />
              <div className={styles.inputActions}>
                {isSpeechSupported && (
                  <button
                    onClick={toggleVoiceInput}
                    className={`${styles.actionButton} ${isListening ? styles.actionButtonActive : ""}`}
                    disabled={isProcessing}
                    title={isListening ? "Stop recording" : "Start voice input"}
                  >
                    {isListening ? (
                      <MicOff className={styles.actionIcon} />
                    ) : (
                      <Mic className={styles.actionIcon} />
                    )}
                  </button>
                )}
                <button
                  onClick={handleSendMessage}
                  className={`${styles.sendButton} ${!inputValue.trim() || isProcessing ? styles.sendButtonDisabled : ""}`}
                  disabled={!inputValue.trim() || isProcessing}
                  title="Send message"
                >
                  <Send className={styles.sendIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
