import { Link } from "react-router";
import type { Route } from "./+types/home";
import { MessageCircle, Heart, Shield, Sparkles } from "lucide-react";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CalmChat AI - Your Mental Well-being Companion" },
    {
      name: "description",
      content:
        "AI-powered conversational support for mental well-being. Get accessible and immediate guidance whenever you need it.",
    },
  ];
}

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>CalmChat AI</h1>
          <p className={styles.tagline}>
            Your compassionate AI companion for mental well-being. A safe space to share, reflect, and find guidance
            whenever you need it.
          </p>
          <Link to="/chat" className={styles.ctaButton}>
            <MessageCircle className={styles.icon} />
            Start Chat
          </Link>
        </div>
      </section>

      {/* Ad Placement - Top Banner */}
      <section className={styles.adSection}>
        <div className={styles.adBanner}>
          <span className={styles.adLabel}>Advertisement</span>
          <p className={styles.adPlaceholder}>Ad Space Available</p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2 className={styles.aboutTitle}>How CalmChat AI Can Help You</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.featureCard}>
              <Heart className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Empathetic Listening</h3>
              <p className={styles.featureDescription}>
                Share your thoughts and feelings in a judgment-free environment. Our AI is designed to listen with care
                and understanding.
              </p>
            </div>

            <div className={styles.featureCard}>
              <Shield className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Safe & Private</h3>
              <p className={styles.featureDescription}>
                Your conversations are confidential. Feel secure knowing you can express yourself freely in a protected
                space.
              </p>
            </div>

            <div className={styles.featureCard}>
              <Sparkles className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>Always Available</h3>
              <p className={styles.featureDescription}>
                Access support whenever you need it, day or night. CalmChat AI is here to provide guidance at your
                convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placement - Bottom Banner */}
      <section className={styles.adSection}>
        <div className={styles.adBanner}>
          <span className={styles.adLabel}>Advertisement</span>
          <p className={styles.adPlaceholder}>Ad Space Available</p>
        </div>
      </section>

      {/* Ad Placement - Sidebar/Card Ads */}
      <section className={styles.adCardsSection}>
        <div className={styles.adCardsContainer}>
          <div className={styles.adCard}>
            <span className={styles.adLabel}>Sponsored</span>
            <p className={styles.adPlaceholder}>Ad Space</p>
          </div>
          <div className={styles.adCard}>
            <span className={styles.adLabel}>Sponsored</span>
            <p className={styles.adPlaceholder}>Ad Space</p>
          </div>
          <div className={styles.adCard}>
            <span className={styles.adLabel}>Sponsored</span>
            <p className={styles.adPlaceholder}>Ad Space</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            ✨ Created by Dev 😊 ✨ | 💌 Contact: <a href="mailto:devy19372@gmail.com" className={styles.footerLink}>devy19372@gmail.com</a> 💌
          </p>
        </div>
      </footer>
    </div>
  );
}
