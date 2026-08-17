export const LANGUAGE_OPTIONS = [
  { code: "pt-BR", label: "Portugu\u00eas" },
  { code: "en", label: "English" },
  { code: "es", label: "Espa\u00f1ol" },
  { code: "fr", label: "Fran\u00e7ais" },
  { code: "de", label: "Deutsch" },
  { code: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
  { code: "zh", label: "\u4e2d\u6587" },
  { code: "ja", label: "\u65e5\u672c\u8a9e" },
] as const;

export type Locale = (typeof LANGUAGE_OPTIONS)[number]["code"];
export type LanguageChoice = "auto" | Locale;

export type Copy = {
  dir: "ltr" | "rtl";
  language: string;
  automatic: string;
  eyebrow: string;
  homeLabel: string;
  sourceCount: string;
  section: string;
  title: string;
  introduction: string;
  simpleLanguage: string;
  starterTitle: string;
  suggestions: string[];
  questionLabel: string;
  recoveredSources: string;
  loading: string;
  inputLabel: string;
  placeholder: string;
  ask: string;
  requestError: string;
  noticeTitle: string;
  noticeBody: string;
  footer: string;
};

export const COPY: Record<Locale, Copy> = {
  "pt-BR": {
    dir: "ltr",
    language: "Idioma",
    automatic: "Autom\u00e1tico",
    eyebrow: "ARQUIVO DOCUMENTAL EDUCATIVO",
    homeLabel: "Arquivo MJ \u2014 in\u00edcio",
    sourceCount: "transcri\u00e7\u00f5es judiciais",
    section: "01 \u2014 CONSULTA",
    title: "Pesquise o julgamento pelas fontes.",
    introduction: "Fa\u00e7a perguntas sobre as transcri\u00e7\u00f5es judiciais de 2005. A IA procura nos documentos, diferencia falas e alega\u00e7\u00f5es de fatos estabelecidos e mostra onde conferir.",
    simpleLanguage: "Pergunte em qualquer idioma. Os termos jur\u00eddicos ser\u00e3o explicados em linguagem simples.",
    starterTitle: "Voc\u00ea pode come\u00e7ar por aqui",
    suggestions: [
      "O que foi dito na declara\u00e7\u00e3o de abertura da acusa\u00e7\u00e3o?",
      "Quais testemunhas foram mencionadas nas transcri\u00e7\u00f5es de mar\u00e7o?",
      "H\u00e1 vers\u00f5es contradit\u00f3rias sobre algum acontecimento?",
    ],
    questionLabel: "PERGUNTA",
    recoveredSources: "FONTES RECUPERADAS",
    loading: "Consultando 65 transcri\u00e7\u00f5es\u2026",
    inputLabel: "Sua pergunta",
    placeholder: "Pergunte sobre datas, falas, depoimentos ou argumentos\u2026",
    ask: "Perguntar",
    requestError: "N\u00e3o foi poss\u00edvel consultar as fontes agora. Tente novamente em instantes.",
    noticeTitle: "Como interpretar as respostas",
    noticeBody: "Uma transcri\u00e7\u00e3o registra o que foi dito em tribunal; ela n\u00e3o prova automaticamente que cada afirma\u00e7\u00e3o seja verdadeira. Alega\u00e7\u00f5es, argumentos e depoimentos s\u00e3o identificados como tais. Esta plataforma \u00e9 educativa, independente e n\u00e3o oferece aconselhamento jur\u00eddico.",
    footer: "Fonte atual: transcri\u00e7\u00f5es do Superior Court of California, Santa Barbara County, 2005.",
  },
  en: {
    dir: "ltr",
    language: "Language",
    automatic: "Automatic",
    eyebrow: "EDUCATIONAL DOCUMENT ARCHIVE",
    homeLabel: "MJ Archive \u2014 home",
    sourceCount: "court transcripts",
    section: "01 \u2014 RESEARCH",
    title: "Research the trial through its sources.",
    introduction: "Ask about the 2005 court transcripts. The AI searches the documents, separates statements and allegations from established facts, and shows you where to verify the answer.",
    simpleLanguage: "Ask in any language. Legal terms are explained in plain language.",
    starterTitle: "You can start here",
    suggestions: [
      "What was said in the prosecution's opening statement?",
      "Which witnesses were mentioned in the March transcripts?",
      "Do the sources contain conflicting accounts of any event?",
    ],
    questionLabel: "QUESTION",
    recoveredSources: "RETRIEVED SOURCES",
    loading: "Searching 65 transcripts\u2026",
    inputLabel: "Your question",
    placeholder: "Ask about dates, statements, testimony, or arguments\u2026",
    ask: "Ask",
    requestError: "The sources could not be searched right now. Please try again shortly.",
    noticeTitle: "How to read the answers",
    noticeBody: "A transcript records what was said in court; it does not automatically prove that every statement is true. Allegations, arguments, and testimony are identified as such. This independent educational platform does not provide legal advice.",
    footer: "Current source: 2005 transcripts from the Superior Court of California, Santa Barbara County.",
  },
  es: {
    dir: "ltr",
    language: "Idioma",
    automatic: "Autom\u00e1tico",
    eyebrow: "ARCHIVO DOCUMENTAL EDUCATIVO",
    homeLabel: "Archivo MJ \u2014 inicio",
    sourceCount: "transcripciones judiciales",
    section: "01 \u2014 CONSULTA",
    title: "Investiga el juicio a trav\u00e9s de las fuentes.",
    introduction: "Haz preguntas sobre las transcripciones judiciales de 2005. La IA busca en los documentos, distingue declaraciones y alegaciones de hechos establecidos y muestra d\u00f3nde comprobar la respuesta.",
    simpleLanguage: "Pregunta en cualquier idioma. Los t\u00e9rminos jur\u00eddicos se explican con palabras sencillas.",
    starterTitle: "Puedes empezar aqu\u00ed",
    suggestions: [
      "\u00bfQu\u00e9 se dijo en el alegato inicial de la acusaci\u00f3n?",
      "\u00bfQu\u00e9 testigos se mencionaron en las transcripciones de marzo?",
      "\u00bfHay versiones contradictorias de alg\u00fan hecho?",
    ],
    questionLabel: "PREGUNTA",
    recoveredSources: "FUENTES RECUPERADAS",
    loading: "Consultando 65 transcripciones\u2026",
    inputLabel: "Tu pregunta",
    placeholder: "Pregunta sobre fechas, declaraciones, testimonios o argumentos\u2026",
    ask: "Preguntar",
    requestError: "No fue posible consultar las fuentes ahora. Int\u00e9ntalo de nuevo en unos instantes.",
    noticeTitle: "C\u00f3mo interpretar las respuestas",
    noticeBody: "Una transcripci\u00f3n registra lo dicho ante el tribunal; no demuestra autom\u00e1ticamente que cada afirmaci\u00f3n sea cierta. Las alegaciones, los argumentos y los testimonios se identifican como tales. Esta plataforma educativa e independiente no ofrece asesoramiento jur\u00eddico.",
    footer: "Fuente actual: transcripciones de 2005 del Tribunal Superior de California, condado de Santa B\u00e1rbara.",
  },
  fr: {
    dir: "ltr",
    language: "Langue",
    automatic: "Automatique",
    eyebrow: "ARCHIVES DOCUMENTAIRES \u00c9DUCATIVES",
    homeLabel: "Archives MJ \u2014 accueil",
    sourceCount: "transcriptions judiciaires",
    section: "01 \u2014 RECHERCHE",
    title: "Explorez le proc\u00e8s \u00e0 travers ses sources.",
    introduction: "Posez des questions sur les transcriptions judiciaires de 2005. L\u2019IA recherche dans les documents, distingue les d\u00e9clarations et all\u00e9gations des faits \u00e9tablis et indique o\u00f9 v\u00e9rifier.",
    simpleLanguage: "Posez votre question dans n\u2019importe quelle langue. Les termes juridiques sont expliqu\u00e9s simplement.",
    starterTitle: "Vous pouvez commencer ici",
    suggestions: [
      "Qu\u2019a d\u00e9clar\u00e9 l\u2019accusation dans son expos\u00e9 d\u2019ouverture ?",
      "Quels t\u00e9moins sont mentionn\u00e9s dans les transcriptions de mars ?",
      "Les sources pr\u00e9sentent-elles des versions contradictoires d\u2019un \u00e9v\u00e9nement ?",
    ],
    questionLabel: "QUESTION",
    recoveredSources: "SOURCES RETROUV\u00c9ES",
    loading: "Recherche dans 65 transcriptions\u2026",
    inputLabel: "Votre question",
    placeholder: "Interrogez les dates, d\u00e9clarations, t\u00e9moignages ou arguments\u2026",
    ask: "Demander",
    requestError: "Impossible de consulter les sources pour le moment. R\u00e9essayez dans quelques instants.",
    noticeTitle: "Comment lire les r\u00e9ponses",
    noticeBody: "Une transcription rapporte ce qui a \u00e9t\u00e9 dit au tribunal ; elle ne prouve pas automatiquement la v\u00e9racit\u00e9 de chaque d\u00e9claration. Les all\u00e9gations, arguments et t\u00e9moignages sont identifi\u00e9s comme tels. Cette plateforme \u00e9ducative ind\u00e9pendante ne fournit pas de conseil juridique.",
    footer: "Source actuelle : transcriptions de 2005 de la Cour sup\u00e9rieure de Californie, comt\u00e9 de Santa Barbara.",
  },
  de: {
    dir: "ltr",
    language: "Sprache",
    automatic: "Automatisch",
    eyebrow: "BILDUNGSARCHIV F\u00dcR DOKUMENTE",
    homeLabel: "MJ-Archiv \u2014 Startseite",
    sourceCount: "Gerichtsprotokolle",
    section: "01 \u2014 RECHERCHE",
    title: "Untersuchen Sie den Prozess anhand der Quellen.",
    introduction: "Stellen Sie Fragen zu den Gerichtsprotokollen von 2005. Die KI durchsucht die Dokumente, trennt Aussagen und Behauptungen von festgestellten Tatsachen und zeigt, wo Sie die Antwort pr\u00fcfen k\u00f6nnen.",
    simpleLanguage: "Fragen Sie in jeder Sprache. Rechtliche Begriffe werden einfach erkl\u00e4rt.",
    starterTitle: "Hier k\u00f6nnen Sie beginnen",
    suggestions: [
      "Was sagte die Staatsanwaltschaft in ihrem Er\u00f6ffnungspl\u00e4doyer?",
      "Welche Zeugen wurden in den M\u00e4rz-Protokollen erw\u00e4hnt?",
      "Enthalten die Quellen widerspr\u00fcchliche Darstellungen eines Ereignisses?",
    ],
    questionLabel: "FRAGE",
    recoveredSources: "GEFUNDENE QUELLEN",
    loading: "65 Protokolle werden durchsucht\u2026",
    inputLabel: "Ihre Frage",
    placeholder: "Fragen Sie nach Daten, Aussagen, Zeugenaussagen oder Argumenten\u2026",
    ask: "Fragen",
    requestError: "Die Quellen k\u00f6nnen derzeit nicht durchsucht werden. Bitte versuchen Sie es gleich erneut.",
    noticeTitle: "So lesen Sie die Antworten",
    noticeBody: "Ein Protokoll h\u00e4lt fest, was vor Gericht gesagt wurde; es beweist nicht automatisch, dass jede Aussage wahr ist. Behauptungen, Argumente und Zeugenaussagen werden als solche gekennzeichnet. Diese unabh\u00e4ngige Bildungsplattform bietet keine Rechtsberatung.",
    footer: "Aktuelle Quelle: Protokolle des Superior Court of California, Santa Barbara County, aus dem Jahr 2005.",
  },
  ar: {
    dir: "rtl",
    language: "\u0627\u0644\u0644\u063a\u0629",
    automatic: "\u062a\u0644\u0642\u0627\u0626\u064a",
    eyebrow: "\u0623\u0631\u0634\u064a\u0641 \u0648\u062b\u0627\u0626\u0642\u064a \u062a\u0639\u0644\u064a\u0645\u064a",
    homeLabel: "\u0623\u0631\u0634\u064a\u0641 \u0625\u0645 \u062c\u064a \u2014 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
    sourceCount: "\u0645\u062d\u0627\u0636\u0631 \u0642\u0636\u0627\u0626\u064a\u0629",
    section: "01 \u2014 \u0627\u0644\u0628\u062d\u062b",
    title: "\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0645\u062d\u0627\u0643\u0645\u0629 \u0645\u0646 \u062e\u0644\u0627\u0644 \u0645\u0635\u0627\u062f\u0631\u0647\u0627.",
    introduction: "\u0627\u0637\u0631\u062d \u0623\u0633\u0626\u0644\u0629 \u0639\u0646 \u0645\u062d\u0627\u0636\u0631 \u0627\u0644\u0645\u062d\u0643\u0645\u0629 \u0644\u0639\u0627\u0645 2005. \u064a\u0628\u062d\u062b \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0641\u064a \u0627\u0644\u0648\u062b\u0627\u0626\u0642\u060c \u0648\u064a\u0645\u064a\u0651\u0632 \u0627\u0644\u0623\u0642\u0648\u0627\u0644 \u0648\u0627\u0644\u0627\u062f\u0639\u0627\u0621\u0627\u062a \u0639\u0646 \u0627\u0644\u062d\u0642\u0627\u0626\u0642 \u0627\u0644\u0645\u062b\u0628\u062a\u0629\u060c \u0648\u064a\u0648\u0636\u062d \u0623\u064a\u0646 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u062a\u062d\u0642\u0642.",
    simpleLanguage: "\u0627\u0633\u0623\u0644 \u0628\u0623\u064a \u0644\u063a\u0629. \u062a\u064f\u0634\u0631\u062d \u0627\u0644\u0645\u0635\u0637\u0644\u062d\u0627\u062a \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629 \u0628\u0643\u0644\u0645\u0627\u062a \u0628\u0633\u064a\u0637\u0629.",
    starterTitle: "\u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0628\u062f\u0621 \u0645\u0646 \u0647\u0646\u0627",
    suggestions: [
      "\u0645\u0627\u0630\u0627 \u0642\u0627\u0644\u062a \u0627\u0644\u0646\u064a\u0627\u0628\u0629 \u0641\u064a \u0627\u0644\u0645\u0631\u0627\u0641\u0639\u0629 \u0627\u0644\u0627\u0641\u062a\u062a\u0627\u062d\u064a\u0629\u061f",
      "\u0645\u0646 \u0647\u0645 \u0627\u0644\u0634\u0647\u0648\u062f \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0648\u0646 \u0641\u064a \u0645\u062d\u0627\u0636\u0631 \u0645\u0627\u0631\u0633\u061f",
      "\u0647\u0644 \u062a\u062a\u0636\u0645\u0646 \u0627\u0644\u0645\u0635\u0627\u062f\u0631 \u0631\u0648\u0627\u064a\u0627\u062a \u0645\u062a\u0639\u0627\u0631\u0636\u0629 \u0644\u0623\u064a \u062d\u062f\u062b\u061f",
    ],
    questionLabel: "\u0627\u0644\u0633\u0624\u0627\u0644",
    recoveredSources: "\u0627\u0644\u0645\u0635\u0627\u062f\u0631 \u0627\u0644\u0645\u0633\u062a\u0631\u062c\u0639\u0629",
    loading: "\u062c\u0627\u0631\u064d \u0627\u0644\u0628\u062d\u062b \u0641\u064a 65 \u0645\u062d\u0636\u0631\u064b\u0627\u2026",
    inputLabel: "\u0633\u0624\u0627\u0644\u0643",
    placeholder: "\u0627\u0633\u0623\u0644 \u0639\u0646 \u0627\u0644\u062a\u0648\u0627\u0631\u064a\u062e \u0623\u0648 \u0627\u0644\u0623\u0642\u0648\u0627\u0644 \u0623\u0648 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0623\u0648 \u0627\u0644\u062d\u062c\u062c\u2026",
    ask: "\u0627\u0633\u0623\u0644",
    requestError: "\u062a\u0639\u0630\u0631 \u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0645\u0635\u0627\u062f\u0631 \u0627\u0644\u0622\u0646. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0628\u0639\u062f \u0642\u0644\u064a\u0644.",
    noticeTitle: "\u0643\u064a\u0641\u064a\u0629 \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0625\u062c\u0627\u0628\u0627\u062a",
    noticeBody: "\u064a\u0633\u062c\u0644 \u0627\u0644\u0645\u062d\u0636\u0631 \u0645\u0627 \u0642\u064a\u0644 \u0641\u064a \u0627\u0644\u0645\u062d\u0643\u0645\u0629\u060c \u0644\u0643\u0646\u0647 \u0644\u0627 \u064a\u062b\u0628\u062a \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0635\u062d\u0629 \u0643\u0644 \u0642\u0648\u0644. \u062a\u064f\u0639\u0631\u0651\u064e\u0641 \u0627\u0644\u0627\u062f\u0639\u0627\u0621\u0627\u062a \u0648\u0627\u0644\u062d\u062c\u062c \u0648\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0628\u0635\u0641\u062a\u0647\u0627 \u0643\u0630\u0644\u0643. \u0647\u0630\u0647 \u0645\u0646\u0635\u0629 \u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0645\u0633\u062a\u0642\u0644\u0629 \u0648\u0644\u0627 \u062a\u0642\u062f\u0645 \u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0642\u0627\u0646\u0648\u0646\u064a\u0629.",
    footer: "\u0627\u0644\u0645\u0635\u062f\u0631 \u0627\u0644\u062d\u0627\u0644\u064a: \u0645\u062d\u0627\u0636\u0631 \u0627\u0644\u0645\u062d\u0643\u0645\u0629 \u0627\u0644\u0639\u0644\u064a\u0627 \u0641\u064a \u0643\u0627\u0644\u064a\u0641\u0648\u0631\u0646\u064a\u0627\u060c \u0645\u0642\u0627\u0637\u0639\u0629 \u0633\u0627\u0646\u062a\u0627 \u0628\u0627\u0631\u0628\u0631\u0627\u060c \u0644\u0639\u0627\u0645 2005.",
  },
  zh: {
    dir: "ltr",
    language: "\u8bed\u8a00",
    automatic: "\u81ea\u52a8",
    eyebrow: "\u6559\u80b2\u6587\u732e\u6863\u6848",
    homeLabel: "MJ \u6863\u6848 \u2014 \u9996\u9875",
    sourceCount: "\u6cd5\u5ead\u8bb0\u5f55",
    section: "01 \u2014 \u67e5\u8be2",
    title: "\u901a\u8fc7\u539f\u59cb\u8d44\u6599\u4e86\u89e3\u5ba1\u5224\u3002",
    introduction: "\u60a8\u53ef\u4ee5\u8be2\u95ee 2005 \u5e74\u7684\u6cd5\u5ead\u8bb0\u5f55\u3002AI \u4f1a\u68c0\u7d22\u6587\u4ef6\uff0c\u533a\u5206\u9648\u8ff0\u3001\u6307\u63a7\u4e0e\u5df2\u786e\u7acb\u4e8b\u5b9e\uff0c\u5e76\u6307\u51fa\u53ef\u6838\u67e5\u7b54\u6848\u7684\u6765\u6e90\u3002",
    simpleLanguage: "\u53ef\u4f7f\u7528\u4efb\u4f55\u8bed\u8a00\u63d0\u95ee\u3002\u6cd5\u5f8b\u672f\u8bed\u4f1a\u7528\u901a\u4fd7\u8bed\u8a00\u89e3\u91ca\u3002",
    starterTitle: "\u53ef\u4ee5\u4ece\u8fd9\u91cc\u5f00\u59cb",
    suggestions: [
      "\u68c0\u65b9\u5728\u5f00\u5ead\u9648\u8ff0\u4e2d\u8bf4\u4e86\u4ec0\u4e48\uff1f",
      "\u4e09\u6708\u4efd\u7684\u8bb0\u5f55\u63d0\u5230\u4e86\u54ea\u4e9b\u8bc1\u4eba\uff1f",
      "\u8d44\u6599\u4e2d\u662f\u5426\u5b58\u5728\u5bf9\u540c\u4e00\u4e8b\u4ef6\u76f8\u4e92\u77db\u76fe\u7684\u8bf4\u6cd5\uff1f",
    ],
    questionLabel: "\u95ee\u9898",
    recoveredSources: "\u68c0\u7d22\u5230\u7684\u6765\u6e90",
    loading: "\u6b63\u5728\u68c0\u7d22 65 \u4efd\u8bb0\u5f55\u2026",
    inputLabel: "\u60a8\u7684\u95ee\u9898",
    placeholder: "\u8be2\u95ee\u65e5\u671f\u3001\u9648\u8ff0\u3001\u8bc1\u8bcd\u6216\u5ead\u5ba1\u8bba\u70b9\u2026",
    ask: "\u63d0\u95ee",
    requestError: "\u76ee\u524d\u65e0\u6cd5\u68c0\u7d22\u8d44\u6599\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
    noticeTitle: "\u5982\u4f55\u7406\u89e3\u56de\u7b54",
    noticeBody: "\u6cd5\u5ead\u8bb0\u5f55\u53ea\u8bb0\u8f7d\u5ead\u4e0a\u8bf4\u8fc7\u7684\u8bdd\uff0c\u5e76\u4e0d\u4f1a\u81ea\u52a8\u8bc1\u660e\u6bcf\u9879\u9648\u8ff0\u5c5e\u5b9e\u3002\u56de\u7b54\u4f1a\u660e\u786e\u6807\u793a\u6307\u63a7\u3001\u8bba\u70b9\u548c\u8bc1\u8bcd\u3002\u672c\u72ec\u7acb\u6559\u80b2\u5e73\u53f0\u4e0d\u63d0\u4f9b\u6cd5\u5f8b\u610f\u89c1\u3002",
    footer: "\u5f53\u524d\u6765\u6e90\uff1a\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde\u9ad8\u7b49\u6cd5\u9662\u5723\u5df4\u5df4\u62c9\u53bf 2005 \u5e74\u6cd5\u5ead\u8bb0\u5f55\u3002",
  },
  ja: {
    dir: "ltr",
    language: "\u8a00\u8a9e",
    automatic: "\u81ea\u52d5",
    eyebrow: "\u6559\u80b2\u7528\u6587\u66f8\u30a2\u30fc\u30ab\u30a4\u30d6",
    homeLabel: "MJ\u30a2\u30fc\u30ab\u30a4\u30d6 \u2014 \u30db\u30fc\u30e0",
    sourceCount: "\u6cd5\u5ef7\u8a18\u9332",
    section: "01 \u2014 \u8abf\u67fb",
    title: "\u8cc7\u6599\u304b\u3089\u88c1\u5224\u3092\u8abf\u3079\u308b\u3002",
    introduction: "2005\u5e74\u306e\u6cd5\u5ef7\u8a18\u9332\u306b\u3064\u3044\u3066\u8cea\u554f\u3067\u304d\u307e\u3059\u3002AI\u304c\u6587\u66f8\u3092\u691c\u7d22\u3057\u3001\u767a\u8a00\u3084\u4e3b\u5f35\u3068\u78ba\u8a8d\u3055\u308c\u305f\u4e8b\u5b9f\u3092\u533a\u5225\u3057\u3001\u78ba\u8a8d\u7b87\u6240\u3092\u793a\u3057\u307e\u3059\u3002",
    simpleLanguage: "\u3069\u306e\u8a00\u8a9e\u3067\u3082\u8cea\u554f\u3067\u304d\u307e\u3059\u3002\u6cd5\u5f8b\u7528\u8a9e\u306f\u3084\u3055\u3057\u3044\u8a00\u8449\u3067\u8aac\u660e\u3057\u307e\u3059\u3002",
    starterTitle: "\u3053\u3053\u304b\u3089\u59cb\u3081\u3089\u308c\u307e\u3059",
    suggestions: [
      "\u691c\u5bdf\u5074\u306f\u5192\u982d\u9673\u8ff0\u3067\u4f55\u3092\u8ff0\u3079\u307e\u3057\u305f\u304b\uff1f",
      "3\u6708\u306e\u8a18\u9332\u3067\u306f\u3069\u306e\u8a3c\u4eba\u304c\u8a00\u53ca\u3055\u308c\u3066\u3044\u307e\u3059\u304b\uff1f",
      "\u8cc7\u6599\u306b\u306f\u540c\u3058\u51fa\u6765\u4e8b\u306b\u3064\u3044\u3066\u77db\u76fe\u3059\u308b\u8aac\u660e\u304c\u3042\u308a\u307e\u3059\u304b\uff1f",
    ],
    questionLabel: "\u8cea\u554f",
    recoveredSources: "\u53c2\u7167\u3057\u305f\u8cc7\u6599",
    loading: "65\u4ef6\u306e\u8a18\u9332\u3092\u691c\u7d22\u4e2d\u2026",
    inputLabel: "\u8cea\u554f",
    placeholder: "\u65e5\u4ed8\u3001\u767a\u8a00\u3001\u8a3c\u8a00\u3001\u4e3b\u5f35\u306b\u3064\u3044\u3066\u8cea\u554f\u3057\u3066\u304f\u3060\u3055\u3044\u2026",
    ask: "\u8cea\u554f\u3059\u308b",
    requestError: "\u73fe\u5728\u3001\u8cc7\u6599\u3092\u691c\u7d22\u3067\u304d\u307e\u305b\u3093\u3002\u3057\u3070\u3089\u304f\u3057\u3066\u304b\u3089\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",
    noticeTitle: "\u56de\u7b54\u306e\u8aad\u307f\u65b9",
    noticeBody: "\u6cd5\u5ef7\u8a18\u9332\u306f\u6cd5\u5ef7\u3067\u8ff0\u3079\u3089\u308c\u305f\u5185\u5bb9\u3092\u8a18\u9332\u3057\u305f\u3082\u306e\u3067\u3001\u3059\u3079\u3066\u306e\u767a\u8a00\u304c\u771f\u5b9f\u3060\u3068\u81ea\u52d5\u7684\u306b\u8a3c\u660e\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u7591\u60d1\u3001\u4e3b\u5f35\u3001\u8a3c\u8a00\u306f\u660e\u78ba\u306b\u533a\u5225\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u72ec\u7acb\u3057\u305f\u6559\u80b2\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306f\u6cd5\u5f8b\u76f8\u8ac7\u3092\u63d0\u4f9b\u3057\u307e\u305b\u3093\u3002",
    footer: "\u73fe\u5728\u306e\u8cc7\u6599\uff1a\u30ab\u30ea\u30d5\u30a9\u30eb\u30cb\u30a2\u5dde\u4e0a\u7d1a\u88c1\u5224\u6240\u30b5\u30f3\u30bf\u30d0\u30fc\u30d0\u30e9\u90e1\u30012005\u5e74\u306e\u6cd5\u5ef7\u8a18\u9332\u3002",
  },
};

export function detectLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const prefix = language.toLowerCase().split("-")[0];
    const match = LANGUAGE_OPTIONS.find(
      (option) => option.code.toLowerCase().split("-")[0] === prefix,
    );
    if (match) return match.code;
  }
  return "en";
}
