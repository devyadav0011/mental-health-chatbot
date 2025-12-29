import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/chat";
import { ArrowLeft, MessageCircle, Send, Sparkles, User, RefreshCw } from "lucide-react";
import { generateAIResponse } from "~/data/mock-ai-responses";
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
    <div className={styles.container}>
      <nav className={styles.navbar}>
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

      <div className={styles.chatArea}>
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
