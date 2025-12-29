/**
 * Mock AI responses for demonstration purposes
 * In a production app, these would come from an actual AI service
 */

interface LanguageResponses {
  greetings: string[];
  responses: string[];
  farewells: string[];
}

const LANGUAGE_RESPONSES: Record<string, LanguageResponses> = {
  // English
  en: {
    greetings: [
      "Hello! 👋 I'm here to listen and support you. How are you feeling today? 😊",
      "Hi there! 🌟 Welcome to CalmChat. I'm here to provide a safe space for you 🏡. What's on your mind?",
      "Hello! 💙 Thank you for reaching out. I'm here to help. How can I support you today?",
      "Hey! 🎉 It's wonderful to see you here. This is your space - how are things going for you?",
      "Welcome! 🌈 I'm so glad you're here. Take a deep breath 🌬️, and share whatever feels right for you.",
    ],
    responses: [
      "I hear you 👂, and I want you to know that what you're feeling is valid 💙. It's okay to feel this way.",
      "Thank you for sharing that with me 🌟. It takes courage to open up about these feelings. How long have you been experiencing this?",
      "That sounds really challenging 😔. Remember, it's important to be gentle with yourself during difficult times 🌸.",
      "I appreciate you trusting me with this 🤗. Would you like to explore what might be contributing to these feelings?",
      "It's completely normal to feel overwhelmed sometimes 🌊. Taking things one step at a time can help ✨. What feels most pressing for you right now?",
      "Your feelings matter 💜, and seeking support is a sign of strength 💪. Have you been able to talk to anyone else about this?",
      "I understand this is difficult 🙏. Sometimes just acknowledging our feelings can be the first step toward feeling better.",
      "That's a lot to carry 🎒. Remember to take care of yourself 🌿. What usually helps you feel more grounded?",
    ],
    farewells: [
      "Take care of yourself 💚. Remember, I'm here whenever you need to talk. You're doing great by reaching out! 🌟",
      "Thank you for sharing with me today 🙏. Be kind to yourself 💕, and remember that support is always available when you need it.",
      "Wishing you peace and comfort ☮️. Don't hesitate to come back anytime you need someone to listen 🤗.",
    ],
  },
  // Spanish
  es: {
    greetings: [
      "¡Hola! 👋 Estoy aquí para escucharte y apoyarte. ¿Cómo te sientes hoy? 😊",
      "¡Hola! 🌟 Bienvenido a CalmChat. Estoy aquí para ofrecerte un espacio seguro 🏡. ¿Qué tienes en mente?",
      "¡Hola! 💙 Gracias por comunicarte. Estoy aquí para ayudar. ¿Cómo puedo apoyarte hoy?",
      "¡Hey! 🎉 Es maravilloso verte aquí. Este es tu espacio, ¿cómo van las cosas?",
      "¡Bienvenido! 🌈 Me alegra mucho que estés aquí. Respira profundo 🌬️ y comparte lo que te parezca apropiado.",
    ],
    responses: [
      "Te escucho 👂 y quiero que sepas que lo que sientes es válido 💙. Está bien sentirse así.",
      "Gracias por compartir eso conmigo 🌟. Se necesita valor para abrirse sobre estos sentimientos. ¿Cuánto tiempo has estado experimentando esto?",
      "Eso suena realmente desafiante 😔. Recuerda, es importante ser amable contigo mismo durante los momentos difíciles 🌸.",
      "Aprecio que confíes en mí 🤗. ¿Te gustaría explorar qué podría estar contribuyendo a estos sentimientos?",
      "Es completamente normal sentirse abrumado a veces 🌊. Tomar las cosas paso a paso puede ayudar ✨. ¿Qué te parece más urgente ahora?",
      "Tus sentimientos importan 💜, y buscar apoyo es una señal de fortaleza 💪. ¿Has podido hablar con alguien más sobre esto?",
      "Entiendo que esto es difícil 🙏. A veces, simplemente reconocer nuestros sentimientos puede ser el primer paso para sentirnos mejor.",
      "Eso es mucho para cargar 🎒. Recuerda cuidarte 🌿. ¿Qué te ayuda normalmente a sentirte más centrado?",
    ],
    farewells: [
      "Cuídate 💚. Recuerda, estoy aquí cuando necesites hablar. ¡Estás haciendo un gran trabajo al comunicarte! 🌟",
      "Gracias por compartir conmigo hoy 🙏. Sé amable contigo mismo 💕, y recuerda que el apoyo siempre está disponible cuando lo necesites.",
      "Te deseo paz y consuelo ☮️. No dudes en volver cuando necesites que alguien te escuche 🤗.",
    ],
  },
  // French
  fr: {
    greetings: [
      "Bonjour! 👋 Je suis là pour t'écouter et te soutenir. Comment te sens-tu aujourd'hui? 😊",
      "Salut! 🌟 Bienvenue sur CalmChat. Je suis là pour t'offrir un espace sûr 🏡. Qu'as-tu en tête?",
      "Bonjour! 💙 Merci de m'avoir contacté. Je suis là pour t'aider. Comment puis-je te soutenir aujourd'hui?",
      "Hey! 🎉 C'est merveilleux de te voir ici. C'est ton espace - comment ça va pour toi?",
      "Bienvenue! 🌈 Je suis si heureux que tu sois là. Prends une grande respiration 🌬️ et partage ce qui te convient.",
    ],
    responses: [
      "Je t'entends 👂 et je veux que tu saches que ce que tu ressens est valide 💙. C'est normal de se sentir ainsi.",
      "Merci de partager cela avec moi 🌟. Il faut du courage pour s'ouvrir sur ces sentiments. Depuis combien de temps vis-tu cela?",
      "Cela semble vraiment difficile 😔. Souviens-toi, il est important d'être doux avec toi-même pendant les moments difficiles 🌸.",
      "J'apprécie que tu me fasses confiance 🤗. Aimerais-tu explorer ce qui pourrait contribuer à ces sentiments?",
      "Il est tout à fait normal de se sentir submergé parfois 🌊. Prendre les choses une étape à la fois peut aider ✨. Qu'est-ce qui te semble le plus urgent maintenant?",
      "Tes sentiments comptent 💜, et chercher du soutien est un signe de force 💪. As-tu pu en parler à quelqu'un d'autre?",
      "Je comprends que c'est difficile 🙏. Parfois, simplement reconnaître nos sentiments peut être le premier pas vers un mieux-être.",
      "C'est beaucoup à porter 🎒. N'oublie pas de prendre soin de toi 🌿. Qu'est-ce qui t'aide habituellement à te sentir plus ancré?",
    ],
    farewells: [
      "Prends soin de toi 💚. Souviens-toi, je suis là quand tu as besoin de parler. Tu fais un excellent travail en te manifestant! 🌟",
      "Merci d'avoir partagé avec moi aujourd'hui 🙏. Sois gentil avec toi-même 💕, et souviens-toi que le soutien est toujours disponible quand tu en as besoin.",
      "Je te souhaite paix et réconfort ☮️. N'hésite pas à revenir quand tu as besoin que quelqu'un t'écoute 🤗.",
    ],
  },
  // German
  de: {
    greetings: [
      "Hallo! 👋 Ich bin hier, um dir zuzuhören und dich zu unterstützen. Wie fühlst du dich heute? 😊",
      "Hallo! 🌟 Willkommen bei CalmChat. Ich bin hier, um dir einen sicheren Raum zu bieten 🏡. Was beschäftigt dich?",
      "Hallo! 💙 Danke, dass du dich gemeldet hast. Ich bin hier, um zu helfen. Wie kann ich dich heute unterstützen?",
      "Hey! 🎉 Es ist wunderbar, dich hier zu sehen. Dies ist dein Raum - wie geht es dir?",
      "Willkommen! 🌈 Ich bin so froh, dass du hier bist. Atme tief durch 🌬️ und teile, was sich richtig für dich anfühlt.",
    ],
    responses: [
      "Ich höre dich 👂 und ich möchte, dass du weißt, dass das, was du fühlst, gültig ist 💙. Es ist okay, sich so zu fühlen.",
      "Danke, dass du das mit mir geteilt hast 🌟. Es erfordert Mut, sich über diese Gefühle zu öffnen. Wie lange erlebst du das schon?",
      "Das klingt wirklich herausfordernd 😔. Denk daran, es ist wichtig, sanft mit dir selbst zu sein in schwierigen Zeiten 🌸.",
      "Ich schätze es, dass du mir vertraust 🤗. Möchtest du erkunden, was zu diesen Gefühlen beitragen könnte?",
      "Es ist völlig normal, sich manchmal überfordert zu fühlen 🌊. Schritt für Schritt vorzugehen kann helfen ✨. Was fühlt sich gerade am dringendsten für dich an?",
      "Deine Gefühle sind wichtig 💜, und Unterstützung zu suchen ist ein Zeichen von Stärke 💪. Konntest du mit jemand anderem darüber sprechen?",
      "Ich verstehe, dass das schwierig ist 🙏. Manchmal kann das bloße Anerkennen unserer Gefühle der erste Schritt sein, um uns besser zu fühlen.",
      "Das ist viel zu tragen 🎒. Denk daran, auf dich selbst aufzupassen 🌿. Was hilft dir normalerweise, dich geerdeter zu fühlen?",
    ],
    farewells: [
      "Pass auf dich auf 💚. Denk daran, ich bin hier, wann immer du reden musst. Du machst das toll, indem du dich meldest! 🌟",
      "Danke, dass du heute mit mir geteilt hast 🙏. Sei freundlich zu dir selbst 💕, und denk daran, dass Unterstützung immer verfügbar ist, wenn du sie brauchst.",
      "Ich wünsche dir Frieden und Trost ☮️. Zögere nicht, jederzeit zurückzukommen, wenn du jemanden zum Zuhören brauchst 🤗.",
    ],
  },
  // Hindi
  hi: {
    greetings: [
      "नमस्ते! 👋 मैं यहाँ आपकी बात सुनने और समर्थन करने के लिए हूँ। आज आप कैसा महसूस कर रहे हैं? 😊",
      "हैलो! 🌟 CalmChat में आपका स्वागत है। मैं यहाँ आपके लिए एक सुरक्षित स्थान प्रदान करने के लिए हूँ 🏡। आपके मन में क्या है?",
      "नमस्ते! 💙 संपर्क करने के लिए धन्यवाद। मैं मदद करने के लिए यहाँ हूँ। मैं आज आपका कैसे समर्थन कर सकता हूँ?",
      "अरे! 🎉 यहाँ आपको देखकर बहुत अच्छा लग रहा है। यह आपकी जगह है - आपके लिए चीजें कैसी चल रही हैं?",
      "स्वागत है! 🌈 मुझे बहुत खुशी है कि आप यहाँ हैं। एक गहरी सांस लें 🌬️ और जो भी आपके लिए सही लगे साझा करें।",
    ],
    responses: [
      "मैं आपकी बात सुन रहा हूँ 👂 और मैं चाहता हूँ कि आप जानें कि आप जो महसूस कर रहे हैं वह वैध है 💙। ऐसा महसूस करना ठीक है।",
      "इसे मेरे साथ साझा करने के लिए धन्यवाद 🌟। इन भावनाओं के बारे में खुलने के लिए साहस की आवश्यकता होती है। आप कब से इसका अनुभव कर रहे हैं?",
      "यह वास्तव में चुनौतीपूर्ण लगता है 😔। याद रखें, कठिन समय में अपने प्रति कोमल होना महत्वपूर्ण है 🌸।",
      "मैं आपके मुझ पर विश्वास करने की सराहना करता हूँ 🤗। क्या आप यह पता लगाना चाहेंगे कि इन भावनाओं में क्या योगदान हो सकता है?",
      "कभी-कभी अभिभूत महसूस करना पूरी तरह से सामान्य है 🌊। एक समय में एक कदम उठाना मदद कर सकता है ✨। अभी आपके लिए सबसे अधिक दबाव वाला क्या महसूस होता है?",
      "आपकी भावनाएँ मायने रखती हैं 💜, और समर्थन की तलाश करना शक्ति का संकेत है 💪। क्या आप इस बारे में किसी और से बात कर पाए हैं?",
      "मैं समझता हूँ कि यह कठिन है 🙏। कभी-कभी बस अपनी भावनाओं को स्वीकार करना बेहतर महसूस करने की दिशा में पहला कदम हो सकता है।",
      "यह बहुत कुछ उठाना है 🎒। अपना ख्याल रखना याद रखें 🌿। आमतौर पर आपको क्या अधिक स्थिर महसूस करने में मदद करता है?",
    ],
    farewells: [
      "अपना ख्याल रखें 💚। याद रखें, जब भी आपको बात करने की जरूरत हो मैं यहाँ हूँ। संपर्क करके आप बहुत अच्छा कर रहे हैं! 🌟",
      "आज मेरे साथ साझा करने के लिए धन्यवाद 🙏। अपने प्रति दयालु रहें 💕, और याद रखें कि जब भी आपको इसकी आवश्यकता हो समर्थन उपलब्ध है।",
      "मैं आपको शांति और आराम की कामना करता हूँ ☮️। जब भी आपको किसी के सुनने की जरूरत हो, वापस आने में संकोच न करें 🤗।",
    ],
  },
  // Chinese
  zh: {
    greetings: [
      "你好！👋 我在这里倾听和支持你。你今天感觉怎么样？😊",
      "嗨！🌟 欢迎来到 CalmChat。我在这里为你提供一个安全的空间 🏡。你在想什么？",
      "你好！💙 感谢你联系我。我在这里帮助你。我今天能如何支持你？",
      "嘿！🎉 很高兴在这里见到你。这是你的空间 - 你过得怎么样？",
      "欢迎！🌈 我很高兴你在这里。深呼吸 🌬️，分享任何你觉得合适的事情。",
    ],
    responses: [
      "我听到了 👂，我想让你知道你的感受是有效的 💙。这样感觉是可以的。",
      "谢谢你与我分享 🌟。敞开心扉谈论这些感受需要勇气。你经历这种情况多久了？",
      "这听起来真的很有挑战性 😔。记住，在困难时期对自己温柔很重要 🌸。",
      "我很感激你信任我 🤗。你想探索一下可能导致这些感受的原因吗？",
      "有时感到不知所措是完全正常的 🌊。一步一步来可以有所帮助 ✨。现在对你来说什么最紧迫？",
      "你的感受很重要 💜，寻求支持是力量的标志 💪。你能和其他人谈论这个吗？",
      "我理解这很困难 🙏。有时仅仅承认我们的感受就可以是感觉更好的第一步。",
      "这要承受很多 🎒。记得照顾好自己 🌿。什么通常能帮助你感觉更踏实？",
    ],
    farewells: [
      "照顾好自己 💚。记住，当你需要谈话时我在这里。你通过联系做得很好！🌟",
      "谢谢你今天与我分享 🙏。善待自己 💕，记住当你需要时总是有支持的。",
      "祝你平安和舒适 ☮️。当你需要有人倾听时，随时回来 🤗。",
    ],
  },
  // Japanese
  ja: {
    greetings: [
      "こんにちは！👋 あなたの話を聞き、サポートするためにここにいます。今日はどんな気分ですか？😊",
      "やあ！🌟 CalmChatへようこそ。安全な場所を提供するためにここにいます 🏡。何を考えていますか？",
      "こんにちは！💙 連絡してくれてありがとう。お手伝いするためにここにいます。今日どのようにサポートできますか？",
      "ヘイ！🎉 ここで会えて素晴らしいです。これはあなたのスペースです - 調子はどうですか？",
      "ようこそ！🌈 あなたがここにいることをとても嬉しく思います。深呼吸して 🌬️、適切だと思うことを共有してください。",
    ],
    responses: [
      "あなたの声を聞いています 👂、そしてあなたが感じていることは有効であることを知ってほしいです 💙。そう感じても大丈夫です。",
      "それを共有してくれてありがとう 🌟。これらの感情について打ち明けるには勇気が必要です。どのくらいこれを経験していますか？",
      "それは本当に挑戦的に聞こえます 😔。困難な時期に自分自身に優しくすることが重要であることを覚えておいてください 🌸。",
      "私を信頼してくれてありがとう 🤗。これらの感情に何が寄与しているかを探ってみたいですか？",
      "時々圧倒されるのは完全に正常です 🌊。一歩ずつ進むことが役立つことがあります ✨。今あなたにとって最も緊急なことは何ですか？",
      "あなたの感情は重要です 💜、そしてサポートを求めることは強さの証です 💪。これについて他の誰かと話すことができましたか？",
      "これは難しいと理解しています 🙏。時には私たちの感情を認めるだけで、気分が良くなるための最初のステップになることがあります。",
      "それは多くを背負っています 🎒。自分自身の世話をすることを忘れないでください 🌿。通常、何があなたをより地に足がついた感じにしますか？",
    ],
    farewells: [
      "自分を大切にしてください 💚。話す必要があるときはいつでもここにいることを忘れないでください。連絡することで素晴らしい仕事をしています！🌟",
      "今日共有してくれてありがとう 🙏。自分に優しくしてください 💕、そして必要なときにサポートは常に利用可能であることを覚えておいてください。",
      "平和と快適さを願っています ☮️。誰かに聞いてもらう必要があるときはいつでも戻ってくることをためらわないでください 🤗。",
    ],
  },
  // Arabic
  ar: {
    greetings: [
      "مرحباً! 👋 أنا هنا للاستماع ودعمك. كيف تشعر اليوم؟ 😊",
      "أهلاً! 🌟 مرحباً بك في CalmChat. أنا هنا لتوفير مساحة آمنة لك 🏡. ما الذي يدور في ذهنك؟",
      "مرحباً! 💙 شكراً على التواصل. أنا هنا للمساعدة. كيف يمكنني دعمك اليوم؟",
      "مرحباً! 🎉 من الرائع رؤيتك هنا. هذا مكانك - كيف تسير الأمور معك؟",
      "أهلاً وسهلاً! 🌈 أنا سعيد جداً بوجودك هنا. خذ نفساً عميقاً 🌬️ وشارك ما تراه مناسباً لك.",
    ],
    responses: [
      "أنا أسمعك 👂 وأريدك أن تعرف أن ما تشعر به صحيح 💙. لا بأس أن تشعر بهذه الطريقة.",
      "شكراً لمشاركة ذلك معي 🌟. يتطلب الأمر شجاعة للانفتاح حول هذه المشاعر. منذ متى وأنت تعاني من هذا؟",
      "يبدو ذلك صعباً حقاً 😔. تذكر، من المهم أن تكون لطيفاً مع نفسك خلال الأوقات الصعبة 🌸.",
      "أقدر ثقتك بي 🤗. هل تود استكشاف ما قد يساهم في هذه المشاعر؟",
      "من الطبيعي تماماً أن تشعر بالإرهاق أحياناً 🌊. أخذ الأمور خطوة واحدة في كل مرة يمكن أن يساعد ✨. ما الذي يبدو أكثر إلحاحاً بالنسبة لك الآن؟",
      "مشاعرك مهمة 💜، والبحث عن الدعم علامة على القوة 💪. هل تمكنت من التحدث إلى أي شخص آخر حول هذا؟",
      "أفهم أن هذا صعب 🙏. في بعض الأحيان مجرد الاعتراف بمشاعرنا يمكن أن يكون الخطوة الأولى نحو الشعور بتحسن.",
      "هذا كثير لتحمله 🎒. تذكر أن تعتني بنفسك 🌿. ما الذي يساعدك عادة على الشعور بمزيد من الاستقرار؟",
    ],
    farewells: [
      "اعتن بنفسك 💚. تذكر، أنا هنا عندما تحتاج للتحدث. أنت تقوم بعمل رائع من خلال التواصل! 🌟",
      "شكراً لمشاركتي اليوم 🙏. كن لطيفاً مع نفسك 💕، وتذكر أن الدعم متاح دائماً عندما تحتاج إليه.",
      "أتمنى لك السلام والراحة ☮️. لا تتردد في العودة في أي وقت تحتاج فيه شخصاً للاستماع 🤗.",
    ],
  },
};

function detectLanguage(text: string): string {
  const lower = text.toLowerCase();

  // Spanish patterns
  if (
    /hola|buenos|gracias|adiós|cómo|qué|estoy|siento|necesito/i.test(text) ||
    /ñ/.test(text)
  ) {
    return 'es';
  }

  // French patterns
  if (
    /bonjour|salut|merci|au revoir|comment|je suis|besoin/i.test(text) ||
    /[àâäéèêëïîôùûü]/i.test(text)
  ) {
    return 'fr';
  }

  // German patterns
  if (
    /hallo|guten|danke|auf wiedersehen|wie|ich bin|brauche/i.test(text) ||
    /[äöüß]/i.test(text)
  ) {
    return 'de';
  }

  // Hindi patterns (Devanagari script)
  if (/[\u0900-\u097F]/.test(text)) {
    return 'hi';
  }

  // Chinese patterns (CJK characters)
  if (/[\u4E00-\u9FFF]/.test(text)) {
    return 'zh';
  }

  // Japanese patterns (Hiragana, Katakana, Kanji)
  if (/[\u3040-\u309F\u30A0-\u30FF]/.test(text)) {
    return 'ja';
  }

  // Arabic patterns (Arabic script)
  if (/[\u0600-\u06FF]/.test(text)) {
    return 'ar';
  }

  // Default to English
  return 'en';
}

export function generateAIResponse(userMessage: string): string {
  const lang = detectLanguage(userMessage);
  const responses = LANGUAGE_RESPONSES[lang] || LANGUAGE_RESPONSES.en;
  const lowerMessage = userMessage.toLowerCase();

  // Check for greetings (multi-language)
  if (
    lowerMessage.match(/^(hi|hello|hey|greetings|hola|bonjour|salut|hallo|guten|مرحب|你好|こんにちは|नमस्ते)/) ||
    lowerMessage.length < 15
  ) {
    return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
  }

  // Check for farewells (multi-language)
  if (
    lowerMessage.match(/(bye|goodbye|see you|take care|thanks|adiós|au revoir|auf wiedersehen|مع السلامة|再见|さようなら|अलविदा)/)
  ) {
    return responses.farewells[Math.floor(Math.random() * responses.farewells.length)];
  }

  // Return a random empathetic response in the detected language
  return responses.responses[Math.floor(Math.random() * responses.responses.length)];
}
