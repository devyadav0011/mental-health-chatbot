import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/chat";
import { ArrowLeft, Send, Sparkles, User, Plus, Mic, MicOff } from "lucide-react";
import { generateAIResponse } from "~/data/mock-ai-responses";
import { useSpeechRecognition } from "~/hooks/use-speech-recognition";
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
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsProcessing(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: generateAIResponse(userMessage.content),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 800);
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
                  I'm your AI companion for mental well-being support. Feel free to share what's on your mind.
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
                        </div>
                        <div className={styles.messageBody}>{message.content}</div>
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
