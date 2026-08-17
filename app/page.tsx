"use client";

import { FormEvent, useEffect, useRef, useState, type CSSProperties } from "react";
import { COPY, detectLocale, LANGUAGE_OPTIONS, type Locale } from "./i18n";

type Citation = { id: string; filename: string; excerpt: string };
type Message = {
  question: string;
  answer: string;
  citations: Citation[];
  error?: boolean;
};

type SiteCopy = {
  navLibrary: string;
  navResearch: string;
  navAbout: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  enterLibrary: string;
  askYas: string;
  libraryEyebrow: string;
  libraryTitle: string;
  libraryBody: string;
  cardOneTitle: string;
  cardOneBody: string;
  cardTwoTitle: string;
  cardTwoBody: string;
  cardThreeTitle: string;
  cardThreeBody: string;
  aiEyebrow: string;
  aiTitle: string;
  aiBody: string;
  sources: string;
  legalNote: string;
  madeBy: string;
};

type LiteraryCopy = {
  navGuardian: string;
  catalogTitle: string;
  catalogSubtitle: string;
  catalogDemo: string;
  searchPlaceholder: string;
  allBooks: string;
  fantasy: string;
  mystery: string;
  classics: string;
  emptySearch: string;
  openPreview: string;
  previewSoon: string;
  premium: string;
  audiobook: string;
  offline: string;
  plansSoon: string;
  guardianEyebrow: string;
  guardianTitle: string;
  guardianBody: string;
  guardianQuote: string;
  personaTraits: string;
  memoryTitle: string;
  memoryBody: string;
  journeyNote: string;
  stages: [string, string, string, string];
};

const SITE_COPY: Record<Locale, SiteCopy> = {
  "pt-BR": {
    navLibrary: "Biblioteca",
    navResearch: "Pergunte à YAS",
    navAbout: "Sobre",
    heroEyebrow: "Biblioteca digital",
    heroTitle: "YAS Literária",
    heroBody:
      "Histórias, memória e pesquisa em uma experiência criada para leitores curiosos.",
    enterLibrary: "Entrar na biblioteca",
    askYas: "Pergunte à YAS",
    libraryEyebrow: "Entre páginas e arquivos",
    libraryTitle: "Leitura que abre caminhos para novas perguntas.",
    libraryBody:
      "A YAS Literária reúne narrativa, contexto e pesquisa documental em um ambiente acolhedor, pensado para quem deseja descobrir, compreender e continuar lendo.",
    cardOneTitle: "Literatura",
    cardOneBody: "Um espaço para histórias, autores e experiências de leitura imersivas.",
    cardTwoTitle: "Memória",
    cardTwoBody: "Documentos preservados com contexto, cuidado e respeito às fontes.",
    cardThreeTitle: "Pesquisa",
    cardThreeBody: "Perguntas em linguagem simples, com respostas que mostram onde conferir.",
    aiEyebrow: "Assistente da biblioteca • arquivo documental",
    aiTitle: "Pergunte à YAS sobre o site, a biblioteca ou o julgamento.",
    aiBody:
      "A assistente apresenta a YAS Literária, orienta visitantes pela biblioteca e, nas perguntas sobre o julgamento de 2005, consulta as transcrições e mostra as fontes.",
    sources: "Fontes recuperadas",
    legalNote:
      "Uma transcrição registra o que foi dito no tribunal; ela não torna automaticamente verdadeira cada declaração. Este projeto é educativo, independente e não oferece aconselhamento jurídico.",
    madeBy: "Site e IA desenvolvidos pela Rinko Digital",
  },
  en: {
    navLibrary: "Library",
    navResearch: "Ask YAS",
    navAbout: "About",
    heroEyebrow: "Digital library",
    heroTitle: "YAS Literary",
    heroBody: "Stories, memory, and research in an experience made for curious readers.",
    enterLibrary: "Enter the library",
    askYas: "Ask YAS",
    libraryEyebrow: "Between pages and archives",
    libraryTitle: "Reading that opens paths to new questions.",
    libraryBody:
      "YAS Literary brings narrative, context, and documentary research together in a welcoming space for anyone who wants to discover, understand, and keep reading.",
    cardOneTitle: "Literature",
    cardOneBody: "A space for stories, authors, and immersive reading experiences.",
    cardTwoTitle: "Memory",
    cardTwoBody: "Documents preserved with context, care, and respect for the sources.",
    cardThreeTitle: "Research",
    cardThreeBody: "Plain-language questions with answers that show where to verify.",
    aiEyebrow: "Library assistant • document archive",
    aiTitle: "Ask YAS about the site, library, or trial.",
    aiBody:
      "The assistant introduces YAS Literary, guides visitors through the library, and searches the transcripts with citations for questions about the 2005 trial.",
    sources: "Retrieved sources",
    legalNote:
      "A transcript records what was said in court; it does not automatically make every statement true. This independent educational project does not provide legal advice.",
    madeBy: "Website and AI developed by Rinko Digital",
  },
  es: {
    navLibrary: "Biblioteca",
    navResearch: "Pregunta a YAS",
    navAbout: "Acerca de",
    heroEyebrow: "Biblioteca digital",
    heroTitle: "YAS Literaria",
    heroBody: "Historias, memoria e investigación para lectores curiosos.",
    enterLibrary: "Entrar en la biblioteca",
    askYas: "Pregunta a YAS",
    libraryEyebrow: "Entre páginas y archivos",
    libraryTitle: "Lecturas que abren caminos hacia nuevas preguntas.",
    libraryBody:
      "YAS Literaria reúne narrativa, contexto e investigación documental en un espacio acogedor para descubrir, comprender y seguir leyendo.",
    cardOneTitle: "Literatura",
    cardOneBody: "Un espacio para historias, autores y experiencias de lectura inmersivas.",
    cardTwoTitle: "Memoria",
    cardTwoBody: "Documentos preservados con contexto, cuidado y respeto por las fuentes.",
    cardThreeTitle: "Investigación",
    cardThreeBody: "Preguntas sencillas con respuestas que muestran dónde verificar.",
    aiEyebrow: "Asistente de la biblioteca • archivo documental",
    aiTitle: "Pregunta a YAS sobre el sitio, la biblioteca o el juicio.",
    aiBody:
      "La asistente presenta YAS Literaria, guía a los visitantes por la biblioteca y consulta las transcripciones con fuentes para preguntas sobre el juicio de 2005.",
    sources: "Fuentes recuperadas",
    legalNote:
      "Una transcripción registra lo dicho ante el tribunal; no convierte automáticamente cada declaración en verdad. Este proyecto educativo e independiente no ofrece asesoramiento jurídico.",
    madeBy: "Sitio e IA desarrollados por Rinko Digital",
  },
  fr: {
    navLibrary: "Bibliothèque",
    navResearch: "Interroger YAS",
    navAbout: "À propos",
    heroEyebrow: "Bibliothèque numérique",
    heroTitle: "YAS Littéraire",
    heroBody: "Histoires, mémoire et recherche pour les lecteurs curieux.",
    enterLibrary: "Entrer dans la bibliothèque",
    askYas: "Interroger YAS",
    libraryEyebrow: "Entre pages et archives",
    libraryTitle: "Des lectures qui ouvrent la voie à de nouvelles questions.",
    libraryBody:
      "YAS Littéraire réunit récit, contexte et recherche documentaire dans un espace accueillant pour découvrir, comprendre et poursuivre sa lecture.",
    cardOneTitle: "Littérature",
    cardOneBody: "Un espace consacré aux histoires, aux auteurs et à la lecture immersive.",
    cardTwoTitle: "Mémoire",
    cardTwoBody: "Des documents préservés avec contexte, soin et respect des sources.",
    cardThreeTitle: "Recherche",
    cardThreeBody: "Des questions simples et des réponses qui indiquent où vérifier.",
    aiEyebrow: "Assistante de la bibliothèque • archives",
    aiTitle: "Interrogez YAS sur le site, la bibliothèque ou le procès.",
    aiBody:
      "L’assistante présente YAS Littéraire, guide les visiteurs et consulte les transcriptions avec leurs sources pour les questions sur le procès de 2005.",
    sources: "Sources retrouvées",
    legalNote:
      "Une transcription rapporte ce qui a été dit au tribunal ; elle ne rend pas automatiquement chaque déclaration vraie. Ce projet éducatif indépendant ne fournit pas de conseil juridique.",
    madeBy: "Site et IA développés par Rinko Digital",
  },
  de: {
    navLibrary: "Bibliothek",
    navResearch: "YAS fragen",
    navAbout: "Über uns",
    heroEyebrow: "Digitale Bibliothek",
    heroTitle: "YAS Literatur",
    heroBody: "Geschichten, Erinnerung und Recherche für neugierige Leserinnen und Leser.",
    enterLibrary: "Bibliothek betreten",
    askYas: "YAS fragen",
    libraryEyebrow: "Zwischen Seiten und Archiven",
    libraryTitle: "Lesen, das Wege zu neuen Fragen öffnet.",
    libraryBody:
      "YAS Literatur verbindet Erzählung, Kontext und Dokumentenrecherche in einem einladenden Raum zum Entdecken und Verstehen.",
    cardOneTitle: "Literatur",
    cardOneBody: "Ein Raum für Geschichten, Autorinnen und Autoren und intensives Lesen.",
    cardTwoTitle: "Erinnerung",
    cardTwoBody: "Dokumente mit Kontext, Sorgfalt und Respekt vor den Quellen.",
    cardThreeTitle: "Recherche",
    cardThreeBody: "Einfache Fragen mit Antworten, die zeigen, wo man nachprüfen kann.",
    aiEyebrow: "Bibliotheksassistenz • Dokumentenarchiv",
    aiTitle: "Fragen Sie YAS zur Website, Bibliothek oder zum Prozess.",
    aiBody:
      "Die Assistentin erklärt YAS Literatur, führt durch die Bibliothek und durchsucht bei Fragen zum Prozess von 2005 die Protokolle mit Quellenangaben.",
    sources: "Gefundene Quellen",
    legalNote:
      "Ein Protokoll hält fest, was vor Gericht gesagt wurde; es macht nicht automatisch jede Aussage wahr. Dieses unabhängige Bildungsprojekt bietet keine Rechtsberatung.",
    madeBy: "Website und KI entwickelt von Rinko Digital",
  },
  ar: {
    navLibrary: "المكتبة",
    navResearch: "اسأل YAS",
    navAbout: "حول",
    heroEyebrow: "مكتبة رقمية",
    heroTitle: "YAS الأدبية",
    heroBody: "قصص وذاكرة وبحث في تجربة صُممت للقراء الفضوليين.",
    enterLibrary: "دخول المكتبة",
    askYas: "اسأل YAS",
    libraryEyebrow: "بين الصفحات والأرشيف",
    libraryTitle: "قراءة تفتح الطريق لأسئلة جديدة.",
    libraryBody: "تجمع YAS الأدبية بين السرد والسياق والبحث الوثائقي في مساحة مريحة للاكتشاف والفهم.",
    cardOneTitle: "الأدب",
    cardOneBody: "مساحة للقصص والكتّاب وتجارب القراءة الغامرة.",
    cardTwoTitle: "الذاكرة",
    cardTwoBody: "وثائق محفوظة بعناية وسياق واحترام للمصادر.",
    cardThreeTitle: "البحث",
    cardThreeBody: "أسئلة بسيطة وإجابات توضّح أين يمكن التحقق.",
    aiEyebrow: "مساعدة المكتبة • الأرشيف الوثائقي",
    aiTitle: "اسأل YAS عن الموقع أو المكتبة أو المحاكمة.",
    aiBody: "تعرّف المساعدة الزوار إلى YAS الأدبية وتوجّههم في المكتبة، وتبحث في المحاضر مع ذكر المصادر عند السؤال عن محاكمة 2005.",
    sources: "المصادر المسترجعة",
    legalNote: "يسجل المحضر ما قيل في المحكمة ولا يجعل كل قول صحيحًا تلقائيًا. هذا مشروع تعليمي مستقل ولا يقدم استشارة قانونية.",
    madeBy: "الموقع والذكاء الاصطناعي من تطوير Rinko Digital",
  },
  zh: {
    navLibrary: "图书馆",
    navResearch: "询问 YAS",
    navAbout: "关于",
    heroEyebrow: "数字图书馆",
    heroTitle: "YAS 文学",
    heroBody: "为好奇的读者呈现故事、记忆与研究。",
    enterLibrary: "进入图书馆",
    askYas: "询问 YAS",
    libraryEyebrow: "在书页与档案之间",
    libraryTitle: "阅读为新问题打开道路。",
    libraryBody: "YAS 文学将叙事、背景与文献研究汇集在一个适合探索和理解的空间中。",
    cardOneTitle: "文学",
    cardOneBody: "汇集故事、作者与沉浸式阅读体验。",
    cardTwoTitle: "记忆",
    cardTwoBody: "以背景、谨慎和对来源的尊重保存文件。",
    cardThreeTitle: "研究",
    cardThreeBody: "用简单问题获得可核查来源的回答。",
    aiEyebrow: "图书馆助手 • 文献档案",
    aiTitle: "向 YAS 询问网站、图书馆或审判。",
    aiBody: "助手会介绍 YAS 文学并帮助访客使用图书馆；涉及 2005 年审判的问题则会检索法庭记录并注明来源。",
    sources: "检索到的来源",
    legalNote: "法庭记录只记载庭上所说的内容，并不自动证明每项陈述都是真实的。本独立教育项目不提供法律意见。",
    madeBy: "网站与人工智能由 Rinko Digital 开发",
  },
  ja: {
    navLibrary: "ライブラリー",
    navResearch: "YASに質問",
    navAbout: "概要",
    heroEyebrow: "デジタルライブラリー",
    heroTitle: "YAS 文学",
    heroBody: "好奇心を持つ読者のための物語、記憶、調査。",
    enterLibrary: "ライブラリーへ",
    askYas: "YASに質問",
    libraryEyebrow: "ページと資料のあいだ",
    libraryTitle: "新しい問いへの道を開く読書。",
    libraryBody: "YAS 文学は、物語、背景、文書調査を、発見と理解のための心地よい空間にまとめます。",
    cardOneTitle: "文学",
    cardOneBody: "物語、作家、没入型の読書体験のための空間です。",
    cardTwoTitle: "記憶",
    cardTwoBody: "背景と配慮、情報源への敬意をもって文書を保存します。",
    cardThreeTitle: "調査",
    cardThreeBody: "やさしい質問と、確認先を示す回答を提供します。",
    aiEyebrow: "ライブラリー案内 • 文書アーカイブ",
    aiTitle: "サイト、ライブラリー、裁判についてYASに質問してください。",
    aiBody: "YAS文学とライブラリーをご案内します。2005年の裁判に関する質問では法廷記録を検索し、出典を示します。",
    sources: "参照した資料",
    legalNote: "法廷記録は法廷で述べられた内容を記録するもので、すべての発言が真実だと自動的に証明するものではありません。本プロジェクトは法的助言を提供しません。",
    madeBy: "サイトとAIはRinko Digitalが開発",
  },
};

const LITERARY_COPY: Record<Locale, LiteraryCopy> = {
  "pt-BR": {
    navGuardian: "Conheça Yas",
    catalogTitle: "Minha Biblioteca",
    catalogSubtitle: "Seus livros, sempre com você.",
    catalogDemo: "Catálogo de demonstração — novos livros e autores poderão ser adicionados aqui.",
    searchPlaceholder: "Buscar livros ou autores",
    allBooks: "Todos os livros",
    fantasy: "Fantasia",
    mystery: "Mistério",
    classics: "Clássicos",
    emptySearch: "Nenhum livro encontrado nesta busca.",
    openPreview: "Ver livro",
    previewSoon: "Prévia em breve",
    premium: "Conteúdo Premium",
    audiobook: "Audiobook disponível",
    offline: "Leitura offline",
    plansSoon: "Planos e acervo completo em breve",
    guardianEyebrow: "O espírito vivo das histórias",
    guardianTitle: "Conheça Yas, a guardiã da biblioteca.",
    guardianBody:
      "Yas existe desde a primeira palavra escrita. A cada leitura, o leitor encontra Fragmentos de Memória e ajuda a guardiã a recuperar sua voz, sua forma e a história da própria biblioteca.",
    guardianQuote: "As histórias nunca morrem. Elas apenas esperam pelo próximo leitor.",
    personaTraits: "Calma • Misteriosa • Acolhedora • Sábia",
    memoryTitle: "Fragmentos de Memória",
    memoryBody: "Uma jornada literária que cresce com leituras, resenhas e descobertas.",
    journeyNote: "Jornada narrativa em desenvolvimento",
    stages: ["Voz", "Silhueta", "Presença", "Forma completa"],
  },
  en: {
    navGuardian: "Meet Yas",
    catalogTitle: "My Library",
    catalogSubtitle: "Your books, always with you.",
    catalogDemo: "Demo catalog — new books and authors can be added here.",
    searchPlaceholder: "Search books or authors",
    allBooks: "All books",
    fantasy: "Fantasy",
    mystery: "Mystery",
    classics: "Classics",
    emptySearch: "No books matched your search.",
    openPreview: "View book",
    previewSoon: "Preview coming soon",
    premium: "Premium content",
    audiobook: "Audiobook available",
    offline: "Offline reading",
    plansSoon: "Plans and full catalog coming soon",
    guardianEyebrow: "The living spirit of stories",
    guardianTitle: "Meet Yas, guardian of the library.",
    guardianBody:
      "Yas has existed since the first written word. With every reading, readers find Memory Fragments and help the guardian recover her voice, her form, and the library’s own story.",
    guardianQuote: "Stories never die. They simply wait for the next reader.",
    personaTraits: "Calm • Mysterious • Welcoming • Wise",
    memoryTitle: "Memory Fragments",
    memoryBody: "A literary journey that grows through reading, reviews, and discoveries.",
    journeyNote: "Narrative journey in development",
    stages: ["Voice", "Silhouette", "Presence", "Complete form"],
  },
  es: {
    navGuardian: "Conoce a Yas",
    catalogTitle: "Mi Biblioteca",
    catalogSubtitle: "Tus libros, siempre contigo.",
    catalogDemo: "Catálogo de demostración — aquí se podrán añadir nuevos libros y autores.",
    searchPlaceholder: "Buscar libros o autores",
    allBooks: "Todos los libros",
    fantasy: "Fantasía",
    mystery: "Misterio",
    classics: "Clásicos",
    emptySearch: "No se encontraron libros.",
    openPreview: "Ver libro",
    previewSoon: "Vista previa próximamente",
    premium: "Contenido Premium",
    audiobook: "Audiolibro disponible",
    offline: "Lectura sin conexión",
    plansSoon: "Planes y catálogo completo próximamente",
    guardianEyebrow: "El espíritu vivo de las historias",
    guardianTitle: "Conoce a Yas, guardiana de la biblioteca.",
    guardianBody: "Yas existe desde la primera palabra escrita. Con cada lectura, el lector encuentra Fragmentos de Memoria y la ayuda a recuperar su voz, su forma y la historia de la biblioteca.",
    guardianQuote: "Las historias nunca mueren. Solo esperan al próximo lector.",
    personaTraits: "Calmada • Misteriosa • Acogedora • Sabia",
    memoryTitle: "Fragmentos de Memoria",
    memoryBody: "Un viaje literario que crece con lecturas, reseñas y descubrimientos.",
    journeyNote: "Viaje narrativo en desarrollo",
    stages: ["Voz", "Silueta", "Presencia", "Forma completa"],
  },
  fr: {
    navGuardian: "Découvrir Yas",
    catalogTitle: "Ma Bibliothèque",
    catalogSubtitle: "Vos livres, toujours avec vous.",
    catalogDemo: "Catalogue de démonstration — de nouveaux livres et auteurs pourront être ajoutés ici.",
    searchPlaceholder: "Rechercher livres ou auteurs",
    allBooks: "Tous les livres",
    fantasy: "Fantastique",
    mystery: "Mystère",
    classics: "Classiques",
    emptySearch: "Aucun livre trouvé.",
    openPreview: "Voir le livre",
    previewSoon: "Aperçu bientôt disponible",
    premium: "Contenu Premium",
    audiobook: "Livre audio disponible",
    offline: "Lecture hors ligne",
    plansSoon: "Offres et catalogue complet bientôt disponibles",
    guardianEyebrow: "L’esprit vivant des histoires",
    guardianTitle: "Découvrez Yas, gardienne de la bibliothèque.",
    guardianBody: "Yas existe depuis le premier mot écrit. À chaque lecture, les lecteurs trouvent des Fragments de Mémoire et l’aident à retrouver sa voix, sa forme et l’histoire de la bibliothèque.",
    guardianQuote: "Les histoires ne meurent jamais. Elles attendent simplement le prochain lecteur.",
    personaTraits: "Calme • Mystérieuse • Accueillante • Sage",
    memoryTitle: "Fragments de Mémoire",
    memoryBody: "Un voyage littéraire qui grandit au fil des lectures et des découvertes.",
    journeyNote: "Parcours narratif en développement",
    stages: ["Voix", "Silhouette", "Présence", "Forme complète"],
  },
  de: {
    navGuardian: "Yas kennenlernen",
    catalogTitle: "Meine Bibliothek",
    catalogSubtitle: "Ihre Bücher, immer bei Ihnen.",
    catalogDemo: "Demokatalog — weitere Bücher und Autorinnen und Autoren können ergänzt werden.",
    searchPlaceholder: "Bücher oder Autoren suchen",
    allBooks: "Alle Bücher",
    fantasy: "Fantasy",
    mystery: "Mystery",
    classics: "Klassiker",
    emptySearch: "Keine Bücher gefunden.",
    openPreview: "Buch ansehen",
    previewSoon: "Vorschau folgt",
    premium: "Premium-Inhalt",
    audiobook: "Hörbuch verfügbar",
    offline: "Offline lesen",
    plansSoon: "Abos und vollständiger Katalog folgen",
    guardianEyebrow: "Der lebendige Geist der Geschichten",
    guardianTitle: "Lernen Sie Yas kennen, die Hüterin der Bibliothek.",
    guardianBody: "Yas existiert seit dem ersten geschriebenen Wort. Mit jeder Lektüre finden Leser Erinnerungsfragmente und helfen ihr, Stimme, Gestalt und die Geschichte der Bibliothek zurückzugewinnen.",
    guardianQuote: "Geschichten sterben nie. Sie warten nur auf den nächsten Leser.",
    personaTraits: "Ruhig • Geheimnisvoll • Einladend • Weise",
    memoryTitle: "Erinnerungsfragmente",
    memoryBody: "Eine literarische Reise, die mit Lesen und Entdeckungen wächst.",
    journeyNote: "Erzählreise in Entwicklung",
    stages: ["Stimme", "Silhouette", "Präsenz", "Vollständige Form"],
  },
  ar: {
    navGuardian: "تعرّف إلى Yas",
    catalogTitle: "مكتبتي",
    catalogSubtitle: "كتبك معك دائمًا.",
    catalogDemo: "فهرس تجريبي — يمكن إضافة كتب وكتّاب جدد هنا.",
    searchPlaceholder: "ابحث عن كتاب أو كاتب",
    allBooks: "كل الكتب",
    fantasy: "خيال",
    mystery: "غموض",
    classics: "كلاسيكيات",
    emptySearch: "لم يتم العثور على كتب.",
    openPreview: "عرض الكتاب",
    previewSoon: "المعاينة قريبًا",
    premium: "محتوى مميز",
    audiobook: "كتاب صوتي متاح",
    offline: "قراءة دون اتصال",
    plansSoon: "الخطط والفهرس الكامل قريبًا",
    guardianEyebrow: "روح القصص الحية",
    guardianTitle: "تعرّف إلى Yas، حارسة المكتبة.",
    guardianBody: "توجد Yas منذ أول كلمة مكتوبة. ومع كل قراءة يعثر القارئ على شظايا الذاكرة ويساعدها على استعادة صوتها وشكلها وحكاية المكتبة.",
    guardianQuote: "القصص لا تموت، بل تنتظر القارئ التالي.",
    personaTraits: "هادئة • غامضة • مرحّبة • حكيمة",
    memoryTitle: "شظايا الذاكرة",
    memoryBody: "رحلة أدبية تنمو بالقراءة والمراجعات والاكتشافات.",
    journeyNote: "رحلة سردية قيد التطوير",
    stages: ["الصوت", "الظل", "الحضور", "الشكل الكامل"],
  },
  zh: {
    navGuardian: "认识 Yas",
    catalogTitle: "我的图书馆",
    catalogSubtitle: "你的书，始终相伴。",
    catalogDemo: "演示书目——以后可在这里添加更多图书和作者。",
    searchPlaceholder: "搜索图书或作者",
    allBooks: "全部图书",
    fantasy: "奇幻",
    mystery: "悬疑",
    classics: "经典",
    emptySearch: "未找到相关图书。",
    openPreview: "查看图书",
    previewSoon: "预览即将上线",
    premium: "高级内容",
    audiobook: "有声书可用",
    offline: "离线阅读",
    plansSoon: "完整书目与方案即将上线",
    guardianEyebrow: "故事的生命之灵",
    guardianTitle: "认识图书馆守护者 Yas。",
    guardianBody: "Yas 自第一个文字诞生起便已存在。每次阅读都会发现记忆碎片，帮助她找回声音、形态与图书馆自身的故事。",
    guardianQuote: "故事永不消逝，它们只是在等待下一位读者。",
    personaTraits: "沉静 • 神秘 • 温暖 • 睿智",
    memoryTitle: "记忆碎片",
    memoryBody: "一段随阅读、评论和发现不断成长的文学旅程。",
    journeyNote: "叙事旅程正在开发中",
    stages: ["声音", "轮廓", "现身", "完整形态"],
  },
  ja: {
    navGuardian: "Yasについて",
    catalogTitle: "マイライブラリー",
    catalogSubtitle: "いつでも、あなたの本とともに。",
    catalogDemo: "デモ用カタログです。今後、新しい本や作家を追加できます。",
    searchPlaceholder: "本や作家を検索",
    allBooks: "すべての本",
    fantasy: "ファンタジー",
    mystery: "ミステリー",
    classics: "古典",
    emptySearch: "該当する本がありません。",
    openPreview: "本を見る",
    previewSoon: "プレビュー準備中",
    premium: "プレミアムコンテンツ",
    audiobook: "オーディオブックあり",
    offline: "オフライン読書",
    plansSoon: "プランと全蔵書は近日公開",
    guardianEyebrow: "物語に宿る、生きた精霊",
    guardianTitle: "図書館の守護者 Yasに会いましょう。",
    guardianBody: "Yasは最初の言葉が記された時から存在しています。読書を重ねて記憶のかけらを見つけ、彼女の声と姿、図書館の物語を取り戻します。",
    guardianQuote: "物語は決して死なない。次の読者を待っているだけ。",
    personaTraits: "穏やか • 神秘的 • 温かい • 賢明",
    memoryTitle: "記憶のかけら",
    memoryBody: "読書やレビュー、発見とともに成長する文学の旅。",
    journeyNote: "物語体験は開発中です",
    stages: ["声", "シルエット", "存在", "完全な姿"],
  },
};

type BookCategory = "fantasy" | "mystery" | "classics";

const BOOKS: Array<{
  title: string;
  author: string;
  category: BookCategory;
  tone: string;
  feature: "premium" | "audiobook" | "offline";
  height: number;
}> = [
  { title: "Dom da Sombra", author: "Helena Montaur", category: "fantasy", tone: "wine", feature: "premium", height: 286 },
  { title: "Crônicas de Eldoran", author: "Arthur Valen", category: "fantasy", tone: "forest", feature: "audiobook", height: 306 },
  { title: "O Segredo da Biblioteca Eterna", author: "Clara Bell", category: "mystery", tone: "midnight", feature: "offline", height: 296 },
  { title: "Jardim das Almas", author: "Lia Vesper", category: "classics", tone: "sage", feature: "premium", height: 278 },
  { title: "O Último Oráculo", author: "Dante Alighen", category: "mystery", tone: "ruby", feature: "audiobook", height: 302 },
  { title: "Entre Mundos", author: "Maya Laurent", category: "fantasy", tone: "violet", feature: "offline", height: 282 },
  { title: "A Herdeira do Tempo", author: "Sofia Raven", category: "fantasy", tone: "ocean", feature: "premium", height: 310 },
  { title: "Cartas de um Viajante", author: "Theo Marlow", category: "classics", tone: "leather", feature: "audiobook", height: 274 },
  { title: "A Ordem do Caos", author: "Elias North", category: "mystery", tone: "charcoal", feature: "offline", height: 300 },
  { title: "Memórias de Atlântida", author: "Iris Solari", category: "classics", tone: "teal", feature: "premium", height: 290 },
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pt-BR");
  const [question, setQuestion] = useState("");
  const [bookQuery, setBookQuery] = useState("");
  const [bookCategory, setBookCategory] = useState<"all" | BookCategory>("all");
  const [previewBook, setPreviewBook] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const conversationEnd = useRef<HTMLDivElement>(null);
  const copy = COPY[locale];
  const site = SITE_COPY[locale];
  const literary = LITERARY_COPY[locale];
  const normalizedBookQuery = bookQuery.trim().toLocaleLowerCase(locale);
  const visibleBooks = BOOKS.filter((book) => {
    const matchesCategory = bookCategory === "all" || book.category === bookCategory;
    const searchable = `${book.title} ${book.author}`.toLocaleLowerCase(locale);
    return matchesCategory && (!normalizedBookQuery || searchable.includes(normalizedBookQuery));
  });

  useEffect(() => {
    const saved = window.localStorage.getItem("yas-language") as Locale | null;
    const next = saved && COPY[saved] ? saved : detectLocale(navigator.languages);
    setLocale(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = copy.dir;
    window.localStorage.setItem("yas-language", locale);
  }, [copy.dir, locale]);

  useEffect(() => {
    if (messages.length || loading) {
      conversationEnd.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [loading, messages]);

  async function ask(event: FormEvent) {
    event.preventDefault();
    const value = question.trim();
    if (!value || loading) return;

    setQuestion("");
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: value,
          locale,
          history: messages.slice(-3).flatMap((message) => [
            { role: "user", content: message.question },
            { role: "assistant", content: message.answer },
          ]),
        }),
      });
      const data = (await response.json()) as {
        answer?: string;
        citations?: Citation[];
        error?: string;
      };
      if (!response.ok) throw new Error(data.error || copy.requestError);
      setMessages((current) => [
        ...current,
        { question: value, answer: data.answer || "", citations: data.citations || [] },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { question: value, answer: copy.requestError, citations: [], error: true },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="yas-site" dir={copy.dir}>
      <section className="hero" id="inicio" aria-label={site.heroTitle}>
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero-yas-literaria-smooth.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />

        <header className="topbar">
          <a className="wordmark" href="#inicio" aria-label="YAS Literária">
            YAS <span>Literária</span>
          </a>
          <nav aria-label="Principal">
            <a href="#biblioteca">{site.navLibrary}</a>
            <a href="#conheca-yas">{literary.navGuardian}</a>
            <a href="#yas-ia">{site.navResearch}</a>
            <a href="#sobre">{site.navAbout}</a>
          </nav>
          <label className="language-control">
            <span>{copy.language}</span>
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              aria-label={copy.language}
            >
              {LANGUAGE_OPTIONS.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.label}
                </option>
              ))}
            </select>
          </label>
        </header>

        <div className="hero-content">
          <p className="hero-eyebrow">{site.heroEyebrow}</p>
          <h1>{site.heroTitle}</h1>
          <p className="hero-copy">{site.heroBody}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#biblioteca">
              {site.enterLibrary}
            </a>
            <a className="button button-glass" href="#yas-ia">
              {site.askYas}
            </a>
          </div>
        </div>
        <a className="scroll-hint" href="#biblioteca" aria-label={site.enterLibrary}>
          <span />
        </a>
      </section>

      <main>
        <section className="library-section" id="biblioteca">
          <div className="section-heading">
            <p className="section-kicker">{site.libraryEyebrow}</p>
            <h2>{site.libraryTitle}</h2>
            <p>{site.libraryBody}</p>
          </div>

          <div className="catalog-panel">
            <div className="catalog-head">
              <div>
                <p className="catalog-overline">YAS LITERÁRIA</p>
                <h3>{literary.catalogTitle}</h3>
                <p>{literary.catalogSubtitle}</p>
              </div>
              <div className="catalog-tools">
                <label className="book-search">
                  <span aria-hidden="true">⌕</span>
                  <input
                    value={bookQuery}
                    onChange={(event) => setBookQuery(event.target.value)}
                    placeholder={literary.searchPlaceholder}
                    aria-label={literary.searchPlaceholder}
                  />
                </label>
                <div className="category-filter" role="group" aria-label={literary.allBooks}>
                  {([
                    ["all", literary.allBooks],
                    ["fantasy", literary.fantasy],
                    ["mystery", literary.mystery],
                    ["classics", literary.classics],
                  ] as const).map(([value, label]) => (
                    <button
                      type="button"
                      className={bookCategory === value ? "active" : ""}
                      onClick={() => setBookCategory(value)}
                      key={value}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="catalog-demo">{literary.catalogDemo}</p>

            {visibleBooks.length ? (
              <div className="shelf-room">
                {[visibleBooks.slice(0, 5), visibleBooks.slice(5, 10)].map(
                  (shelf, shelfIndex) =>
                    shelf.length > 0 && (
                      <div className="book-shelf" key={shelfIndex}>
                        <div className="books-row">
                          {shelf.map((book, index) => (
                            <button
                              type="button"
                              className={`book book-${book.tone}`}
                              style={{ "--book-height": `${book.height}px` } as CSSProperties}
                              onClick={() => setPreviewBook(book.title)}
                              aria-label={`${literary.openPreview}: ${book.title}`}
                              key={book.title}
                            >
                              <span className="book-feature" aria-hidden="true">
                                {book.feature === "premium" ? "✦" : book.feature === "audiobook" ? "◖" : "↓"}
                              </span>
                              <span className="book-ornament" aria-hidden="true">◆</span>
                              <strong>{book.title}</strong>
                              <small>{book.author}</small>
                              <span className="book-number">{String(shelfIndex * 5 + index + 1).padStart(2, "0")}</span>
                            </button>
                          ))}
                        </div>
                        <div className="wood-shelf" aria-hidden="true" />
                      </div>
                    ),
                )}
              </div>
            ) : (
              <p className="empty-books">{literary.emptySearch}</p>
            )}

            {previewBook && (
              <div className="preview-notice" role="status">
                <span><strong>{previewBook}</strong> — {literary.previewSoon}</span>
                <button type="button" onClick={() => setPreviewBook(null)} aria-label="Fechar">×</button>
              </div>
            )}

            <div className="catalog-legend">
              <span><b>✦</b>{literary.premium}</span>
              <span><b>◖</b>{literary.audiobook}</span>
              <span><b>↓</b>{literary.offline}</span>
              <em>{literary.plansSoon}</em>
            </div>
          </div>
        </section>

        <section className="guardian-section" id="conheca-yas">
          <div className="guardian-portrait">
            <img src="/yas-guardian.png" alt={literary.guardianTitle} />
            <span aria-hidden="true" />
          </div>
          <div className="guardian-story">
            <p className="section-kicker">{literary.guardianEyebrow}</p>
            <h2>{literary.guardianTitle}</h2>
            <p className="guardian-body">{literary.guardianBody}</p>
            <p className="persona-traits">{literary.personaTraits}</p>
            <blockquote>“{literary.guardianQuote}”</blockquote>

            <div className="memory-card">
              <div className="memory-copy">
                <p>{literary.memoryTitle}</p>
                <span>{literary.memoryBody}</span>
              </div>
              <div className="memory-path">
                {literary.stages.map((stage, index) => (
                  <div className={index === 0 ? "unlocked" : ""} key={stage}>
                    <i>{index === 0 ? "✦" : index + 1}</i>
                    <span>{stage}</span>
                  </div>
                ))}
              </div>
              <small>{literary.journeyNote}</small>
            </div>
          </div>
        </section>

        <section className="research-section" id="yas-ia">
          <div className="research-intro">
            <div>
              <p className="section-kicker">{site.aiEyebrow}</p>
              <h2>{site.aiTitle}</h2>
            </div>
            <div>
              <p>{site.aiBody}</p>
              <p className="plain-language">{copy.simpleLanguage}</p>
            </div>
          </div>

          <div className="chat-shell">
            {messages.length === 0 && (
              <div className="suggestions" aria-label={copy.starterTitle}>
                <p>{copy.starterTitle}</p>
                {copy.suggestions.map((suggestion) => (
                  <button type="button" key={suggestion} onClick={() => setQuestion(suggestion)}>
                    <span>{suggestion}</span>
                    <b aria-hidden="true">↗</b>
                  </button>
                ))}
              </div>
            )}

            <div className="conversation" aria-live="polite">
              {messages.map((message, index) => (
                <article className="exchange" key={`${message.question}-${index}`}>
                  <p className="question-label">{copy.questionLabel}</p>
                  <h3>{message.question}</h3>
                  <div className={`answer${message.error ? " error" : ""}`}>
                    {message.answer}
                  </div>
                  {message.citations.length > 0 && (
                    <div className="citations">
                      <p className="sources-label">{site.sources}</p>
                      {message.citations.map((citation) => (
                        <details key={`${citation.id}-${citation.filename}`}>
                          <summary>
                            <span>{citation.id}</span>
                            {citation.filename}
                          </summary>
                          {citation.excerpt && <p>{citation.excerpt}</p>}
                        </details>
                      ))}
                    </div>
                  )}
                </article>
              ))}
              {loading && (
                <div className="loading">
                  <span aria-hidden="true" />
                  {copy.loading}
                </div>
              )}
              <div ref={conversationEnd} />
            </div>

            <form className="composer" onSubmit={ask}>
              <label htmlFor="yas-question">{copy.inputLabel}</label>
              <div className="composer-row">
                <textarea
                  id="yas-question"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  maxLength={800}
                  placeholder={copy.placeholder}
                  required
                />
                <button type="submit" disabled={loading || !question.trim()}>
                  {copy.ask} <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </div>

          <aside className="legal-note">
            <span aria-hidden="true">i</span>
            <p>{site.legalNote}</p>
          </aside>
        </section>
      </main>

      <footer id="sobre">
        <a className="wordmark footer-mark" href="#inicio">
          YAS <span>Literária</span>
        </a>
        <p>{site.madeBy}</p>
        <p>© {new Date().getFullYear()} Rinko Digital</p>
      </footer>
    </div>
  );
}
