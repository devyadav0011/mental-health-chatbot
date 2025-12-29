import { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/chat";
import { ArrowLeft, MessageCircle, Send, Sparkles, User, RefreshCw } from "lucide-react";
import { generateAIResponse } from "~/data/mock-ai-responses";
import styles from "./chat.module.css";

const backgroundImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=80", // Mountain landscape
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1600&h=900&fit=crop&q=80", // Ocean waves
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=900&fit=crop&q=80", // Forest path
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1600&h=900&fit=crop&q=80", // Flower field
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop&q=80", // Forest trees
  "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1600&h=900&fit=crop&q=80", // Sunset sky
  "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&h=900&fit=crop&q=80", // Lake reflection
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&h=900&fit=crop&q=80", // Beach sunset
];

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

  // Generate a random background image on component mount
  const backgroundImage = useMemo(() => {
    return backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  }, []);

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
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}></div>
      <nav className={styles.navbar} style={{ position: 'relative', zIndex: 101 }}>
        <div className={styles.navContainer}>
          <div className={styles.navBrand}>
            <Sparkles className={styles.navLogo} />
            <span className={styles.navTitle}>CalmChat AI</span>
          </div>
          <div className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>
              <ArrowLeft className={styles.navIcon} />
              Home
            </Link>
            {messages.length > 0 && (
              <button onClick={handleNewChat} className={styles.newChatButton}>
                <RefreshCw className={styles.newChatIcon} />
                New Chat
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className={styles.chatArea} style={{ position: 'relative', zIndex: 100 }}>
        <div className={styles.messagesContainer}>
          {messages.length === 0 ? (
            <div className={styles.emptyState}>
              <MessageCircle className={styles.emptyIcon} />
              <h2 className={styles.emptyTitle}>Start a Conversation</h2>
              <p className={styles.emptyDescription}>
                Share what's on your mind. I'm here to listen and provide support in a safe, judgment-free space.
              </p>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.message} ${message.role === "user" ? styles.messageUser : ""}`}
                >
                  <div
                    className={`${styles.messageAvatar} ${message.role === "user" ? styles.avatarUser : styles.avatarAi}`}
                  >
                    {message.role === "user" ? (
                      <User className={styles.avatarIcon} />
                    ) : (
                      <Sparkles className={styles.avatarIcon} />
                    )}
                  </div>
                  <div
                    className={`${styles.messageBubble} ${message.role === "user" ? styles.bubbleUser : styles.bubbleAi}`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        <div className={styles.inputArea}>
          <textarea
            ref={textareaRef}
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            rows={1}
            disabled={isProcessing}
          />
          <button
            onClick={handleSendMessage}
            className={styles.sendButton}
            disabled={!inputValue.trim() || isProcessing}
          >
            <Send className={styles.sendIcon} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
