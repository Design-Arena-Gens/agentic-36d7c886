export const defaultLanguage = 'en';

export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'mr', label: 'मराठी' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ne', label: 'नेपाली' },
  { code: 'ru', label: 'Русский' }
];

const sharedZodiacValues = [
  'aries',
  'taurus',
  'gemini',
  'cancer',
  'leo',
  'virgo',
  'libra',
  'scorpio',
  'sagittarius',
  'capricorn',
  'aquarius',
  'pisces'
];

export const translations = {
  en: {
    metadata: {
      title: 'Horoscopes Love | Cinematic Zodiac Insights',
      description:
        'Horoscopes Love blends cinematic storytelling, 3D astrology art, and multilingual guidance to help you decode love compatibility that lasts a lifetime.'
    },
    nav: {
      home: 'Home',
      tool: 'Compatibility Tool',
      about: 'About Us',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      disclaimer: 'Disclaimer',
      faq: 'FAQ'
    },
    hero: {
      headline: 'Love Written in the Stars',
      subheadline:
        'Immerse yourself in a cinematic astrology journey that fuses 3D artistry with soulful guidance for every heart.',
      primaryCta: 'Start Compatibility Scan',
      secondaryCta: 'Explore Our Story',
      stats: [
        { label: 'Cosmic Matches Saved', value: '87,540' },
        { label: 'Languages', value: '6' },
        { label: 'Astro-Ritual Playlists', value: '24' }
      ]
    },
    highlights: [
      {
        title: '3D Zodiac Energy Fields',
        description:
          'Experience a live-rendered astral core that responds to your selections with cinematic lighting and motion.'
      },
      {
        title: 'Lifetime Memory Vault',
        description:
          'Every compatibility insight and love note you submit is preserved securely for future reflection.'
      },
      {
        title: 'Holistic Guidance',
        description:
          'Blend Vedic astrology, modern psychology, and relationship coaching across six global languages.'
      }
    ],
    tool: {
      title: 'Celestial Compatibility Synthesizer',
      intro:
        'Select your zodiac energies and receive an instant, story-driven compatibility report with rituals to deepen your bond.',
      yourSign: 'Your Sun Sign',
      partnerSign: 'Partner Sun Sign',
      intention: 'Relationship Intention',
      intentions: [
        'Romantic Love',
        'Lifelong Partnership',
        'Creative Collaboration',
        'Family Harmony',
        'Fresh Connection'
      ],
      submit: 'Generate Compatibility',
      reset: 'Reset',
      zodiacOptions: sharedZodiacValues.map((value) => ({
        value,
        label: value.charAt(0).toUpperCase() + value.slice(1)
      })),
      resultTitle: 'Compatibility Narrative',
      ritualsTitle: 'Recommended Rituals',
      archiveSuccess: 'Your celestial match story has been saved to the vault.',
      errors: {
        missing: 'Please choose both zodiac signs to unlock your compatibility.'
      }
    },
    about: {
      title: 'Our Celestial Vision',
      intro:
        'Horoscopes Love is a studio of astrologers, designers, and sonic storytellers crafting immersive relationship journeys.',
      pillars: [
        {
          title: 'Astro-Psychology',
          description:
            'Interweaving classic vedic charts with modern attachment theory for guidance that resonates with both soul and science.'
        },
        {
          title: 'Cinematic Craft',
          description:
            'Our design collective builds living 3D constellations, original scoring, and emotionally rich micro-interactions.'
        },
        {
          title: 'Community Lore',
          description:
            'Thousands of love stories contributed by seekers worldwide shape our evolving cosmic archive.'
        }
      ],
      timeline: [
        {
          year: '2018',
          event: 'Birth of Horoscopes Love as a moonlit journal project in Jaipur.'
        },
        {
          year: '2020',
          event: 'Launch of immersive compatibility rituals and multilingual library.'
        },
        {
          year: '2024',
          event: 'Introduced live 3D astral core streaming across web and installations.'
        }
      ],
      closing:
        'We believe love is a myth in motion. Our role is to illuminate the choreography between astronomy, intuition, and intentional practice.'
    },
    contact: {
      title: 'Whisper to the Cosmos',
      subtitle:
        'Share your story, partnership goals, or collaboration ideas. Our celestial concierges respond within 48 hours.',
      success: 'Thank you for trusting us with your heart. We will respond shortly with a personalized guidance path.',
      failures: {
        generic: 'We could not deliver your message. Please review the form and try again.'
      },
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Your Story & Intentions',
        submit: 'Send to Constellations'
      },
      side: {
        studio: 'Studio Coordinates',
        address: 'Penthouse 10, Cosmic Trade Center, Jaipur, India',
        phone: '+91 9987 654 321',
        media: 'Press & Media',
        partnerships: 'Collaborations'
      }
    },
    faq: {
      title: 'Radiant Questions',
      items: [
        {
          question: 'How accurate is the compatibility analysis?',
          answer:
            'We blend Vedic and Western astrology with narrative coaching frameworks. The report is reflective guidance, not deterministic fate.'
        },
        {
          question: 'Will my data stay private forever?',
          answer:
            'Yes. Each submission is encrypted at rest within our private vault and never shared with external services.'
        },
        {
          question: 'Can I update my saved compatibility story?',
          answer:
            'Absolutely. Return anytime to submit an update—the earlier insights remain archived for your reflection.'
        },
        {
          question: 'Do you support in-person rituals?',
          answer:
            'Yes, our Jaipur studio hosts monthly immersive gatherings. Details are sent after your first compatibility report.'
        }
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'Data We Collect',
          body:
            'We store the compatibility narratives, contact submissions, and ritual preferences you share. No third-party trackers or ad pixels are used.'
        },
        {
          heading: 'How We Protect',
          body:
            'All records are encrypted at rest, replicated across secure regions, and accessible only to our core guidance team.'
        },
        {
          heading: 'Your Controls',
          body:
            'Request your archive anytime via the contact form. We honour erasure or export requests within 5 business days.'
        }
      ]
    },
    disclaimer: {
      title: 'Disclaimer',
      sections: [
        {
          heading: 'Guidance Philosophy',
          body:
            'Our work offers reflective insight, not medical, legal, or financial directives. Seek licensed professionals for those domains.'
        },
        {
          heading: 'Personal Agency',
          body:
            'Relationship outcomes depend on your choices. Use these insights as a compass, not a fixed map.'
        },
        {
          heading: 'Updates',
          body:
            'We may revise narratives and rituals as our research evolves. Continued use signifies acceptance of these refinements.'
        }
      ]
    },
    footer: {
      tagline: 'Cinematic astrology for every language of love.',
      rights: 'All rights reserved.'
    },
    theme: {
      light: 'Light',
      dark: 'Dark'
    },
    language: {
      label: 'Language'
    }
  },
  hi: {
    metadata: {
      title: 'Horoscopes Love | सिनेमैटिक ज्योतिष यात्रा',
      description:
        'Horoscopes Love आपके प्रेम संबंधों को बहुभाषी मार्गदर्शन और 3D ज्योतिष कला के साथ नए अंदाज़ में समझने में मदद करता है.'
    },
    nav: {
      home: 'होम',
      tool: 'कम्पैटिबिलिटी टूल',
      about: 'हमारे बारे में',
      contact: 'संपर्क करें',
      privacy: 'गोपनीयता नीति',
      disclaimer: 'अस्वीकरण',
      faq: 'प्रश्नोत्तर'
    },
    hero: {
      headline: 'सितारों में लिखी मोहब्बत',
      subheadline:
        '3D कला और आत्मीय मार्गदर्शन के साथ सिनेमैटिक ज्योतिष अनुभव जो हर दिल को जोड़ता है.',
      primaryCta: 'कम्पैटिबिलिटी स्कैन शुरू करें',
      secondaryCta: 'हमारी कहानी जानें',
      stats: [
        { label: 'संरक्षित संगतियाँ', value: '87,540' },
        { label: 'भाषाएँ', value: '6' },
        { label: 'एस्ट्रो रितिगीत', value: '24' }
      ]
    },
    highlights: [
      {
        title: '3D राशि ऊर्जा क्षेत्र',
        description:
          'आपके चुनावों के अनुसार बदलती प्रकाश और गति के साथ जीवंत खगोलीय कोर.'
      },
      {
        title: 'आजीवन मेमरी वॉल्ट',
        description:
          'हर कम्पैटिबिलिटी इनसाइट और संदेश सुरक्षित रूप से हमेशा के लिए संग्रहीत होते हैं.'
      },
      {
        title: 'समग्र मार्गदर्शन',
        description:
          'छः भाषाओं में वेदिक ज्योतिष, आधुनिक मनोविज्ञान और रिलेशनशिप कोचिंग का संगम.'
      }
    ],
    tool: {
      title: 'खगोलीय संगति संश्लेषक',
      intro:
        'अपनी राशि चुनें और तुरंत कथा आधारित संगति रिपोर्ट तथा संबंध अनुष्ठान प्राप्त करें.',
      yourSign: 'आपकी राशि',
      partnerSign: 'साथी की राशि',
      intention: 'रिश्ते का उद्देश्य',
      intentions: [
        'रोमांटिक प्रेम',
        'जीवनसाथी खोज',
        'रचनात्मक सहयोग',
        'परिवार सामंजस्य',
        'नई शुरुआत'
      ],
      submit: 'संगति देखें',
      reset: 'रीसेट',
      zodiacOptions: sharedZodiacValues.map((value) => ({
        value,
        label: {
          aries: 'मेष',
          taurus: 'वृषभ',
          gemini: 'मिथुन',
          cancer: 'कर्क',
          leo: 'सिंह',
          virgo: 'कन्या',
          libra: 'तुला',
          scorpio: 'वृश्चिक',
          sagittarius: 'धनु',
          capricorn: 'मकर',
          aquarius: 'कुम्भ',
          pisces: 'मीन'
        }[value]
      })),
      resultTitle: 'संगति कथा',
      ritualsTitle: 'सुझाए गए अनुष्ठान',
      archiveSuccess: 'आपकी खगोलीय कहानी सुरक्षित कर ली गई है.',
      errors: {
        missing: 'कृपया दोनों राशियाँ चुनें ताकि संगति खुले.'
      }
    },
    about: {
      title: 'हमारी खगोलीय दृष्टि',
      intro:
        'Horoscopes Love ज्योतिषियों, डिजाइनरों और ध्वनि कथाकारों का समूह है जो डूब immersive रिश्ते अनुभव रचते हैं.',
      pillars: [
        {
          title: 'एस्ट्रो-परामर्श',
          description:
            'वेदिक चार्ट और आधुनिक मनोविज्ञान को मिलाकर आत्मा और विज्ञान दोनों से मेल खाने वाला मार्ग.'
        },
        {
          title: 'सिनेमैटिक शिल्प',
          description:
            'हमारी डिज़ाइन टीम जीवंत 3D नक्षत्र, मूल संगीत और भावनात्मक माइक्रो-इंटरैक्शन बनाती है.'
        },
        {
          title: 'समुदाय की लोककथा',
          description:
            'दुनिया भर से आए प्रेम कथानक हमारे विकसित होते खगोलीय अभिलेख का हिस्सा बनते हैं.'
        }
      ],
      timeline: [
        { year: '2018', event: 'जयपुर में चाँदनी रात की डायरी से Horoscopes Love की शुरुआत.' },
        { year: '2020', event: 'मल्टीलिंगुअल लाइब्रेरी और immersive अनुष्ठानों का शुभारंभ.' },
        { year: '2024', event: 'वेब पर लाइव 3D एस्ट्रल कोर का परिचय.' }
      ],
      closing:
        'हम प्रेम को गतिशील मिथक मानते हैं. हमारा कार्य खगोलशास्त्र, अंतर्ज्ञान और अभ्यास के बीच नृत्य को प्रकाशित करना है.'
    },
    contact: {
      title: 'ब्रह्मांड से संवाद',
      subtitle:
        'अपनी कहानी, रिश्ते की चाह या सहयोग विचार साझा करें. हमारी टीम 48 घंटों में उत्तर देगी.',
      success: 'आपके विश्वास के लिए धन्यवाद. हम शीघ्र ही व्यक्तिगत मार्गदर्शन भेजेंगे.',
      failures: {
        generic: 'संदेश भेजने में कठिनाई हुई. कृपया पुनः प्रयास करें.'
      },
      form: {
        name: 'पूरा नाम',
        email: 'ईमेल पता',
        message: 'आपकी कहानी और उद्देश्य',
        submit: 'नक्षत्रों को भेजें'
      },
      side: {
        studio: 'स्टूडियो पता',
        address: 'पेंटहाउस 10, कॉस्मिक ट्रेड सेंटर, जयपुर, भारत',
        phone: '+91 9987 654 321',
        media: 'प्रेस एवं मीडिया',
        partnerships: 'सहयोग'
      }
    },
    faq: {
      title: 'चमकते प्रश्न',
      items: [
        {
          question: 'कम्पैटिबिलिटी कितनी सटीक है?',
          answer:
            'हम वेदिक और पश्चिमी ज्योतिष को संबंध कोचिंग के साथ जोड़ते हैं. यह मार्गदर्शन है, नियति नहीं.'
        },
        {
          question: 'क्या मेरा डेटा हमेशा सुरक्षित रहेगा?',
          answer:
            'हाँ, हर एंट्री एन्क्रिप्टेड वॉल्ट में सुरक्षित है और किसी बाहरी सेवा से साझा नहीं होती.'
        },
        {
          question: 'क्या मैं अपनी कहानी अपडेट कर सकता हूँ?',
          answer:
            'हाँ, आप कभी भी नई जानकारी भेज सकते हैं. पुरानी अंतर्दृष्टियाँ संग्रहीत रहती हैं.'
        },
        {
          question: 'क्या आप ऑफलाइन रिचुअल आयोजित करते हैं?',
          answer:
            'हाँ, हमारा जयपुर स्टूडियो मासिक immersive आयोजन करता है. विवरण पहली रिपोर्ट के बाद मिलता है.'
        }
      ]
    },
    privacy: {
      title: 'गोपनीयता नीति',
      sections: [
        {
          heading: 'हम क्या एकत्र करते हैं',
          body:
            'हम आपकी संगति कथाएँ, संपर्क संदेश और अनुष्ठान प्राथमिकताएँ सुरक्षित रखते हैं. कोई थर्ड-पार्टी ट्रैकर नहीं.'
        },
        {
          heading: 'हम कैसे सुरक्षा करते हैं',
          body:
            'सभी रेकॉर्ड एन्क्रिप्टेड हैं, सुरक्षित क्षेत्रों में प्रतिकृत होते हैं और केवल हमारी मुख्य टीम को उपलब्ध हैं.'
        },
        {
          heading: 'आपके अधिकार',
          body:
            'किसी भी समय अपने रिकॉर्ड का अनुरोध करें. हम 5 कार्य-दिवसों में हटाने या निर्यात का पालन करते हैं.'
        }
      ]
    },
    disclaimer: {
      title: 'अस्वीकरण',
      sections: [
        {
          heading: 'मार्गदर्शन का स्वरूप',
          body:
            'हमारा कार्य प्रेरक अंतर्दृष्टि देता है, चिकित्सीय या कानूनी सलाह नहीं. कृपया विशेषज्ञ से संपर्क करें.'
        },
        {
          heading: 'आपकी जिम्मेदारी',
          body:
            'रिश्ते का परिणाम आपके निर्णयों पर निर्भर है. इन अंतर्दृष्टियों को दिशा-सूचक की तरह उपयोग करें.'
        },
        {
          heading: 'अद्यतन',
          body:
            'हम शोध के साथ कथाओं को अद्यतन कर सकते हैं. उपयोग जारी रखने से आप इन परिवर्तनों को स्वीकार करते हैं.'
        }
      ]
    },
    footer: {
      tagline: 'प्रेम की हर भाषा के लिए सिनेमैटिक ज्योतिष.',
      rights: 'सर्वाधिकार सुरक्षित.'
    },
    theme: {
      light: 'लाइट',
      dark: 'डार्क'
    },
    language: {
      label: 'भाषा'
    }
  },
  mr: {
    metadata: {
      title: 'Horoscopes Love | सिनेमॅटिक प्रेम ज्योतिष',
      description:
        'Horoscopes Love बहुभाषिक मार्गदर्शन आणि 3D दृश्यांसह तुमच्या प्रेम प्रवासाला नवीन दिशा देते.'
    },
    nav: {
      home: 'मुख्यपृष्ठ',
      tool: 'सुसंगती साधन',
      about: 'आमच्याविषयी',
      contact: 'संपर्क',
      privacy: 'गोपनीयता धोरण',
      disclaimer: 'निरसन',
      faq: 'प्रश्नोत्तरे'
    },
    hero: {
      headline: 'ताऱ्यांत लिहिलेलं प्रेम',
      subheadline:
        '3D कला आणि आत्मीय सल्ल्याने सजलेला सिनेमॅटिक ज्योतिष अनुभव.',
      primaryCta: 'सुसंगती तपासा',
      secondaryCta: 'आमची कहाणी वाचा',
      stats: [
        { label: 'जतन केलेल्या जोड्या', value: '87,540' },
        { label: 'भाषा', value: '6' },
        { label: 'खगोलीय सुरावटी', value: '24' }
      ]
    },
    highlights: [
      {
        title: '3D राशी ऊर्जा क्षेत्र',
        description:
          'तुमच्या निवडीसोबत बदलणारा प्रकाश आणि हालचाल असलेला सजीव खगोलीय मूल.'
      },
      {
        title: 'आजीवन स्मृती कोश',
        description:
          'प्रत्येक कथन आणि संदेश सुरक्षितरित्या जतन केला जातो.'
      },
      {
        title: 'समग्र मार्गदर्शन',
        description:
          'सहा भाषांत वेदिक ज्योतिष व आधुनिक मानसशास्त्राचा सुरेख संगम.'
      }
    ],
    tool: {
      title: 'खगोलीय सुसंगती जनित्र',
      intro:
        'तुमची राशी निवडा आणि तत्काळ कथात्मक सुसंगती विश्लेषण मिळवा.',
      yourSign: 'तुमची राशी',
      partnerSign: 'साथीची राशी',
      intention: 'नात्याचा हेतू',
      intentions: [
        'रोमँटिक प्रेम',
        'जीवनसाथी',
        'सर्जनशील भागीदारी',
        'कौटुंबिक समतोल',
        'नवे नाते'
      ],
      submit: 'सुसंगती अहवाल',
      reset: 'रीसेट',
      zodiacOptions: sharedZodiacValues.map((value) => ({
        value,
        label: {
          aries: 'मेष',
          taurus: 'वृषभ',
          gemini: 'मिथुन',
          cancer: 'कर्क',
          leo: 'सिंह',
          virgo: 'कन्या',
          libra: 'तूळ',
          scorpio: 'वृश्चिक',
          sagittarius: 'धनु',
          capricorn: 'मकर',
          aquarius: 'कुंभ',
          pisces: 'मीन'
        }[value]
      })),
      resultTitle: 'सुसंगती कथा',
      ritualsTitle: 'सूचवलेले विधी',
      archiveSuccess: 'तुमची कथा स्मृती कोशात जतन केली आहे.',
      errors: {
        missing: 'कृपया दोन्ही राशी निवडा.'
      }
    },
    about: {
      title: 'आमची खगोलीय दृष्टी',
      intro:
        'Horoscopes Love हे ज्योतिषी, डिझायनर आणि कथाकार यांचे सर्जनशील कुटुंब आहे.',
      pillars: [
        {
          title: 'ज्योतिष + मानसशास्त्र',
          description:
            'वेदिक चार्ट आणि संबंध मानसशास्त्र एकत्र करून संतुलित मार्गदर्शन.'
        },
        {
          title: 'सिनेमॅटिक कला',
          description:
            'जिवंत 3D राशिचक्र, मूळ संगीत आणि भावनिक अनुभव.'
        },
        {
          title: 'समुदाय कथा',
          description:
            'जगभरातील प्रेमकथा आमच्या खगोलीय संग्रहात उमलतात.'
        }
      ],
      timeline: [
        { year: '2018', event: 'जयपूरमध्ये चंद्रप्रकाशात नोटबुक म्हणून सुरुवात.' },
        { year: '2020', event: 'बहुभाषिक संग्रह आणि immersive विधी सुरू.' },
        { year: '2024', event: 'वेबवर लाईव्ह 3D एस्ट्रल कोर सादर.' }
      ],
      closing:
        'प्रेम ही चालती-बोलती दंतकथा आहे. आमचे ध्येय म्हणजे या नृत्यातील प्रकाश दाखवणे.'
    },
    contact: {
      title: 'आमच्याशी संवाद',
      subtitle:
        'तुमची कहाणी आणि स्वप्ने सांगा. आमची टीम 48 तासांत प्रत्युत्तर देईल.',
      success: 'तुमच्या विश्वासाबद्दल आभारी. लवकरच खास संदेश मिळेल.',
      failures: {
        generic: 'संदेश पाठवण्यात समस्या आली. कृपया पुन्हा प्रयत्न करा.'
      },
      form: {
        name: 'पूर्ण नाव',
        email: 'ईमेल',
        message: 'तुमची कहाणी',
        submit: 'संदेश पाठवा'
      },
      side: {
        studio: 'स्टुडिओ पत्ता',
        address: 'पेंटहाऊस 10, कॉस्मिक ट्रेड सेंटर, जयपूर, भारत',
        phone: '+91 9987 654 321',
        media: 'माध्यम',
        partnerships: 'सहकार्य'
      }
    },
    faq: {
      title: 'प्रकाशमान प्रश्न',
      items: [
        {
          question: 'सुसंगती किती अचूक आहे?',
          answer:
            'ही चिंतनशील कथा आहे. आम्ही वेदिक + पश्चिमी ज्योतिष आणि कोचिंग एकत्र करतो.'
        },
        {
          question: 'माझा डेटा कायम राहील का?',
          answer:
            'होय, सर्व नोंदी एन्क्रिप्टेड वॉल्टमध्ये राहतात आणि बाहेर शेअर होत नाहीत.'
        },
        {
          question: 'मी कथा अपडेट करू शकतो का?',
          answer:
            'होय, नवीन तपशील जोडू शकता. जुने अंतर्दृष्टी संग्रहात राहतील.'
        },
        {
          question: 'ऑफलाइन कार्यक्रम आहेत का?',
          answer:
            'होय, जयपूर स्टुडिओमध्ये दर महिन्याला immersive कार्यक्रम होतात.'
        }
      ]
    },
    privacy: {
      title: 'गोपनीयता धोरण',
      sections: [
        {
          heading: 'माहिती',
          body:
            'तुमच्या संगती अहवाल, संपर्क संप्रेषण आणि विधी पसंती आम्ही सुरक्षित ठेवतो.'
        },
        {
          heading: 'सुरक्षा',
          body:
            'रेकॉर्ड एन्क्रिप्टेड असून सुरक्षित स्थळी प्रतिकृत केले जातात.'
        },
        {
          heading: 'हक्क',
          body:
            'कोणत्याही वेळी डेटा मागवा किंवा हटवा. आम्ही 5 दिवसांत प्रतिसाद देतो.'
        }
      ]
    },
    disclaimer: {
      title: 'निरसन',
      sections: [
        {
          heading: 'मार्गदर्शनाची मर्यादा',
          body:
            'ही प्रेरक अंतर्दृष्टी आहे. वैद्यकीय किंवा कायदेशीर सल्ल्यासाठी तज्ञांचा सल्ला घ्या.'
        },
        {
          heading: 'वैयक्तिक जबाबदारी',
          body:
            'नात्यांचा निर्णय तुमच्या हातात आहे. याचा वापर दिशा म्हणून करा.'
        },
        {
          heading: 'अद्ययावत बदल',
          body:
            'संशोधनासह आम्ही सामग्री सुधारू शकतो. वापर सुरू ठेवणे म्हणजे स्वीकार.'
        }
      ]
    },
    footer: {
      tagline: 'प्रत्येक प्रेमभाषेसाठी सिनेमॅटिक ज्योतिष.',
      rights: 'सर्व हक्क राखीव.'
    },
    theme: {
      light: 'प्रकाश',
      dark: 'गडद'
    },
    language: {
      label: 'भाषा'
    }
  },
  de: {
    metadata: {
      title: 'Horoscopes Love | Cinematische Astrologie',
      description:
        'Horoscopes Love vereint immersive 3D-Astrologie und mehrsprachige Beratung für Beziehungen mit Tiefe.'
    },
    nav: {
      home: 'Start',
      tool: 'Kompatibilitäts-Tool',
      about: 'Über uns',
      contact: 'Kontakt',
      privacy: 'Datenschutzerklärung',
      disclaimer: 'Haftungsausschluss',
      faq: 'FAQ'
    },
    hero: {
      headline: 'Liebe in den Sternen',
      subheadline:
        'Ein cineastischer Astrologie-Raum mit 3D-Animation und seelenvoller Begleitung.',
      primaryCta: 'Kompatibilität starten',
      secondaryCta: 'Unsere Geschichte',
      stats: [
        { label: 'Gespeicherte Matches', value: '87.540' },
        { label: 'Sprachen', value: '6' },
        { label: 'Ritual-Playlists', value: '24' }
      ]
    },
    highlights: [
      {
        title: '3D-Zodiak-Resonanz',
        description:
          'Ein lebendiger astraler Kern reagiert auf deine Auswahl mit Licht und Bewegung.'
      },
      {
        title: 'Lebenslanger Speicher',
        description:
          'Alle Einsendungen bleiben verschlüsselt erhalten und begleiten dich auf deinem Weg.'
      },
      {
        title: 'Ganzheitliche Guidance',
        description:
          'Vereint vedische und westliche Astrologie mit moderner Beziehungskompetenz.'
      }
    ],
    tool: {
      title: 'Celestial Compatibility Engine',
      intro:
        'Wähle eure Sternzeichen und erhalte sofort eine erzählerische Analyse mit Ritual-Empfehlungen.',
      yourSign: 'Dein Sternzeichen',
      partnerSign: 'Zeichen deines Partners',
      intention: 'Beziehungsabsicht',
      intentions: [
        'Romantische Liebe',
        'Lebenspartnerschaft',
        'Kreative Allianz',
        'Familienharmonie',
        'Neue Verbindung'
      ],
      submit: 'Analyse erzeugen',
      reset: 'Zurücksetzen',
      zodiacOptions: sharedZodiacValues.map((value) => ({
        value,
        label: {
          aries: 'Widder',
          taurus: 'Stier',
          gemini: 'Zwillinge',
          cancer: 'Krebs',
          leo: 'Löwe',
          virgo: 'Jungfrau',
          libra: 'Waage',
          scorpio: 'Skorpion',
          sagittarius: 'Schütze',
          capricorn: 'Steinbock',
          aquarius: 'Wassermann',
          pisces: 'Fische'
        }[value]
      })),
      resultTitle: 'Kompatibilitätsgeschichte',
      ritualsTitle: 'Empfohlene Rituale',
      archiveSuccess: 'Deine Sternen-Geschichte wurde gespeichert.',
      errors: {
        missing: 'Bitte wähle beide Sternzeichen aus.'
      }
    },
    about: {
      title: 'Unsere Vision',
      intro:
        'Horoscopes Love ist ein Atelier aus Astrologen, Designerinnen und Klangkünstlern.',
      pillars: [
        {
          title: 'Astro-Psychologie',
          description:
            'Wir verbinden klassische Charts mit moderner Beziehungsexpertise.'
        },
        {
          title: 'Cineastische Kunst',
          description:
            'Wir erschaffen lebendige 3D-Konstellationen und emotionale Interfaces.'
        },
        {
          title: 'Community-Chronik',
          description:
            'Geschichten aus aller Welt formen unser wachsendes Sternenarchiv.'
        }
      ],
      timeline: [
        { year: '2018', event: 'Gründung als Mondtagebuch in Jaipur.' },
        { year: '2020', event: 'Start der immersiven Rituale und Sprachbibliothek.' },
        { year: '2024', event: 'Launch des Live-3D-Astralkerns im Web.' }
      ],
      closing:
        'Liebe ist ein Mythos in Bewegung. Wir beleuchten den Tanz von Astronomie, Intuition und Praxis.'
    },
    contact: {
      title: 'Schreibe den Sternen',
      subtitle:
        'Erzähle uns von deinem Weg. Wir antworten innerhalb von 48 Stunden.',
      success: 'Dankeschön für dein Vertrauen. Eine kuratierte Antwort folgt in Kürze.',
      failures: {
        generic: 'Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.'
      },
      form: {
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        message: 'Deine Geschichte & Ziele',
        submit: 'An Konstellationen senden'
      },
      side: {
        studio: 'Studio-Adresse',
        address: 'Penthouse 10, Cosmic Trade Center, Jaipur, Indien',
        phone: '+91 9987 654 321',
        media: 'Presse',
        partnerships: 'Partnerschaften'
      }
    },
    faq: {
      title: 'Leuchtende Fragen',
      items: [
        {
          question: 'Wie exakt ist die Analyse?',
          answer:
            'Sie kombiniert vedische & westliche Astrologie mit Coaching. Sie inspiriert, ersetzt aber keine Entscheidungen.'
        },
        {
          question: 'Bleiben meine Daten privat?',
          answer:
            'Ja. Alles bleibt verschlüsselt im Vault und wird nicht weitergegeben.'
        },
        {
          question: 'Kann ich meine Geschichte aktualisieren?',
          answer:
            'Natürlich. Neue Einsendungen ergänzen dein Archiv, alte bleiben erhalten.'
        },
        {
          question: 'Gibt es Rituale vor Ort?',
          answer:
            'Ja, monatliche Gatherings in Jaipur. Details folgen nach dem ersten Bericht.'
        }
      ]
    },
    privacy: {
      title: 'Datenschutzerklärung',
      sections: [
        {
          heading: 'Gesammelte Daten',
          body:
            'Wir bewahren deine Kompatibilitätsberichte, Kontaktanfragen und Ritualpräferenzen sicher auf.'
        },
        {
          heading: 'Schutzmaßnahmen',
          body:
            'Alle Dateien sind verschlüsselt, mehrfach gesichert und nur unserem Kernteam zugänglich.'
        },
        {
          heading: 'Deine Rechte',
          body:
            'Du kannst jederzeit Auskunft oder Löschung verlangen. Wir reagieren binnen fünf Werktagen.'
        }
      ]
    },
    disclaimer: {
      title: 'Haftungsausschluss',
      sections: [
        {
          heading: 'Beratungsrahmen',
          body:
            'Unsere Hinweise ersetzen keine medizinische, rechtliche oder finanzielle Beratung.'
        },
        {
          heading: 'Eigenverantwortung',
          body:
            'Du lenkst deine Beziehungen selbst. Nutze unsere Hinweise als Kompass.'
        },
        {
          heading: 'Aktualisierungen',
          body:
            'Forschungsupdates können Inhalte verändern. Weitere Nutzung bedeutet Zustimmung.'
        }
      ]
    },
    footer: {
      tagline: 'Cineastische Astrologie für jede Sprache der Liebe.',
      rights: 'Alle Rechte vorbehalten.'
    },
    theme: {
      light: 'Hell',
      dark: 'Dunkel'
    },
    language: {
      label: 'Sprache'
    }
  },
  ne: {
    metadata: {
      title: 'Horoscopes Love | चलचित्रण ज्योतिष',
      description:
        'Horoscopes Love ले 3D ज्योतिष कला र बहुभाषिक मार्गदर्शनमार्फत तपाईंको सम्बन्ध यात्रालाई उज्यालो बनाउँछ.'
    },
    nav: {
      home: 'गृह',
      tool: 'अनुकूलता उपकरण',
      about: 'हाम्रो बारे',
      contact: 'सम्पर्क',
      privacy: 'गोपनीयता नीति',
      disclaimer: 'अस्वीकरण',
      faq: 'प्रश्नोत्तर'
    },
    hero: {
      headline: 'तारामा लेखिएको प्रेम',
      subheadline:
        'सिनेमाटिक शैलीमा 3D ज्योतिष र आत्मीय सल्लाहको अनुभव.',
      primaryCta: 'अनुकूलता सुरु गर्नुहोस्',
      secondaryCta: 'हाम्रो कथा',
      stats: [
        { label: 'सङ्ग्रहित जोडीहरू', value: '87,540' },
        { label: 'भाषाहरू', value: '6' },
        { label: 'अनुष्ठान प्लेलिस्ट', value: '24' }
      ]
    },
    highlights: [
      {
        title: '3D राशि ऊर्जा',
        description:
          'तपाईंका चयनसँगै रूप बदल्ने ज्वलन्त खगोलीय केन्द्र.'
      },
      {
        title: 'जीवनकाल भण्डारण',
        description:
          'तपाईंको प्रत्येक कथा सुरक्षित भण्डारमा सधैँका लागि राखिन्छ.'
      },
      {
        title: 'समग्र मार्गदर्शन',
        description:
          'छ भाषामा वेदिक ज्योतिष, मनोविज्ञान र सम्बन्ध कोचिङको मिश्रण.'
      }
    ],
    tool: {
      title: 'खगोलीय अनुकूलता संयन्त्र',
      intro:
        'राशि चयन गरी तत्क्षण कथा सहितको अनुकूलता रिपोर्ट पाउनुहोस्.',
      yourSign: 'तपाईंको राशि',
      partnerSign: 'साथीको राशि',
      intention: 'सम्बन्ध उद्देश्य',
      intentions: [
        'रोमान्टिक प्रेम',
        'जीवन साझेदारी',
        'सर्जनशील सहकार्य',
        'परिवार सामञ्जस्य',
        'नयाँ सम्बन्ध'
      ],
      submit: 'रिपोर्ट तयार गर्नुहोस्',
      reset: 'रिसेट',
      zodiacOptions: sharedZodiacValues.map((value) => ({
        value,
        label: {
          aries: 'मेष',
          taurus: 'वृष',
          gemini: 'मिथुन',
          cancer: 'कर्कट',
          leo: 'सिंह',
          virgo: 'कन्या',
          libra: 'तुला',
          scorpio: 'वृश्चिक',
          sagittarius: 'धनु',
          capricorn: 'मकर',
          aquarius: 'कुम्भ',
          pisces: 'मीन'
        }[value]
      })),
      resultTitle: 'अनुकूलता कथा',
      ritualsTitle: 'अनुशंसित अनुष्ठान',
      archiveSuccess: 'तपाईंको कथा सुरक्षित गरियो.',
      errors: {
        missing: 'कृपया दुबै राशि चयन गर्नुहोस्.'
      }
    },
    about: {
      title: 'हाम्रो दृष्टि',
      intro:
        'Horoscopes Love ज्योतिषी, डिजाइनर र कथाकारहरूको सृजनात्मक टोली हो.',
      pillars: [
        {
          title: 'ज्योतिष + मनोविज्ञान',
          description:
            'वेदिक चार्ट र आधुनिक मनोविज्ञानलाई एकीकृत गर्दै गहिरो मार्गदर्शन.'
        },
        {
          title: 'चलचित्रण शिल्प',
          description:
            'जिउँदो 3D तारामण्डल र श्रव्य अनुभव विकास.'
        },
        {
          title: 'समुदाय कथा',
          description:
            'विश्वभरका प्रेम कथा हाम्रो सङ्ग्रहमा समायोजित हुन्छन्.'
        }
      ],
      timeline: [
        { year: '2018', event: 'जयपुरको चन्द्रमामुनि डायरीबाट सुरुवात.' },
        { year: '2020', event: 'बहुभाषिक पुस्तकालय र immersive अनुष्ठान.' },
        { year: '2024', event: 'वेबमा लाइभ 3D एस्ट्रल कोर.' }
      ],
      closing:
        'प्रेम गतिशील मिथक हो. हामी खगोलविद्या, वृत्ति र अभ्यासनको नृत्य प्रकाशित गर्छौं.'
    },
    contact: {
      title: 'ब्रह्माण्डलाई सन्देश',
      subtitle:
        'तपाईंको कथा र आशा साझा गर्नुहोस्. हामी 48 घण्टाभित्र जवाफ पठाउँछौं.',
      success: 'धन्यवाद. व्यक्तिगत उत्तर शीघ्रै पठाइनेछ.',
      failures: {
        generic: 'सन्देश पठाउन सकेन. पुन: प्रयास गर्नुहोस्.'
      },
      form: {
        name: 'पुरा नाम',
        email: 'इमेल',
        message: 'तपाईंको कथा',
        submit: 'सन्देश पठाउनुहोस्'
      },
      side: {
        studio: 'स्टुडियो ठेगाना',
        address: 'पेन्टहाउस 10, कोस्मिक ट्रेड सेन्टर, जयपुर, भारत',
        phone: '+91 9987 654 321',
        media: 'प्रेस',
        partnerships: 'सहकार्य'
      }
    },
    faq: {
      title: 'चम्किला प्रश्न',
      items: [
        {
          question: 'अनुकूलता कत्तिको ठ्याक्कै छ?',
          answer:
            'वेदिक/पश्चिमी ज्योतिष र कोचिङको मिश्रण हो. यो प्रेरणा हो, निश्चित भविष्यवाणी होइन.'
        },
        {
          question: 'मेरो डेटा सुरक्षित रहन्छ?',
          answer:
            'हो, सम्पूर्ण विवरण एन्क्रिप्टेड वल्टमा राखिन्छ र बाह्य सेवामा साझेदारी हुँदैन.'
        },
        {
          question: 'कथा अपडेट गर्न मिल्छ?',
          answer:
            'अवश्य. नयाँ विवरण थप्न सक्नुहुन्छ; पुराना अँकहरू पनि सुरक्षित रहन्छ.'
        },
        {
          question: 'भैतिक कार्यक्रम हुन्छ?',
          answer:
            'हो, जयपुर स्टुडियोमा मासिक immersive कार्यक्रम हुन्छ.'
        }
      ]
    },
    privacy: {
      title: 'गोपनीयता नीति',
      sections: [
        {
          heading: 'सङ्कलन',
          body:
            'अनुकूलता रिपोर्ट, सम्पर्क सन्देश र अनुष्ठान प्राथमिकता हामी सुरक्षित राख्छौं.'
        },
        {
          heading: 'सुरक्षा',
          body:
            'सबै फाइलहरू एन्क्रिप्टेड छन् र नियंत्रित पहुँचमा छन्.'
        },
        {
          heading: 'अधिकार',
          body:
            'कुनै पनि समयमा अभिलेख माग्न वा हटाउन सक्नुहुन्छ. पाँच कार्य दिनभित्र प्रतिक्रिया.'
        }
      ]
    },
    disclaimer: {
      title: 'अस्वीकरण',
      sections: [
        {
          heading: 'मार्गदर्शन',
          body:
            'यसले प्रेरक दृष्टिकोण दिन्छ, चिकित्सा वा कानुनी सल्ला होइन.'
        },
        {
          heading: 'व्यक्तिगत जिम्मेवारी',
          body:
            'सम्बन्धको दिशा तपाईंको निर्णयमा छ. हामी मार्गदर्शक कम्पास मात्रै हो.'
        },
        {
          heading: 'अद्यावधिक',
          body:
            'अनुसन्धानसँगै सामग्री परिमार्जन हुन सक्छ. प्रयोग निरन्तरता सहमति मानिनेछ.'
        }
      ]
    },
    footer: {
      tagline: 'हरेक प्रेम भाषा लागि सिनेमाटिक ज्योतिष.',
      rights: 'सर्वाधिकार सुरक्षित.'
    },
    theme: {
      light: 'उज्यालो',
      dark: 'अँध्यारो'
    },
    language: {
      label: 'भाषा'
    }
  },
  ru: {
    metadata: {
      title: 'Horoscopes Love | Кинематографическая астрология',
      description:
        'Horoscopes Love объединяет 3D‑астрологию и многоязычное сопровождение, чтобы вдохновлять любовные истории.'
    },
    nav: {
      home: 'Главная',
      tool: 'Инструмент совместимости',
      about: 'О нас',
      contact: 'Контакты',
      privacy: 'Политика конфиденциальности',
      disclaimer: 'Отказ от ответственности',
      faq: 'FAQ'
    },
    hero: {
      headline: 'Любовь, написанная звёздами',
      subheadline:
        'Кинематографический астропространство с 3D‑анимацией и бережным наставничеством.',
      primaryCta: 'Запустить анализ совместимости',
      secondaryCta: 'Наша история',
      stats: [
        { label: 'Сохранённых связей', value: '87 540' },
        { label: 'Языков', value: '6' },
        { label: 'Ритуальных сетов', value: '24' }
      ]
    },
    highlights: [
      {
        title: '3D‑поля зодиака',
        description:
          'Живой астральный ядро реагирует на выборы светом и движением.'
      },
      {
        title: 'Хранилище памяти',
        description:
          'Все ваши истории сохраняются навсегда в защищённом архиве.'
      },
      {
        title: 'Целостное сопровождение',
        description:
          'Синтез ведической и западной астрологии с современным коучингом.'
      }
    ],
    tool: {
      title: 'Генератор совместимости',
      intro:
        'Выберите знаки зодиака и мгновенно получите вдохновляющий отчёт с ритуалами.',
      yourSign: 'Ваш знак',
      partnerSign: 'Знак партнёра',
      intention: 'Цель отношений',
      intentions: [
        'Романтическая любовь',
        'Брак и семья',
        'Творческий союз',
        'Семейная гармония',
        'Новая связь'
      ],
      submit: 'Создать отчёт',
      reset: 'Сброс',
      zodiacOptions: sharedZodiacValues.map((value) => ({
        value,
        label: {
          aries: 'Овен',
          taurus: 'Телец',
          gemini: 'Близнецы',
          cancer: 'Рак',
          leo: 'Лев',
          virgo: 'Дева',
          libra: 'Весы',
          scorpio: 'Скорпион',
          sagittarius: 'Стрелец',
          capricorn: 'Козерог',
          aquarius: 'Водолей',
          pisces: 'Рыбы'
        }[value]
      })),
      resultTitle: 'История совместимости',
      ritualsTitle: 'Рекомендованные ритуалы',
      archiveSuccess: 'История сохранена в нашем архиве.',
      errors: {
        missing: 'Выберите оба знака, чтобы продолжить.'
      }
    },
    about: {
      title: 'Наша миссия',
      intro:
        'Horoscopes Love — мастерская астрологов, дизайнеров и саунд-продюсеров.',
      pillars: [
        {
          title: 'Астро‑психология',
          description:
            'Соединяем классические карты с психологией привязанности.'
        },
        {
          title: 'Кинематографический стиль',
          description:
            'Создаём живые 3D‑созвездия, оригинальную музыку и эмоциональные интерфейсы.'
        },
        {
          title: 'Летопись сообщества',
          description:
            'Тысячи историй влюблённых пополняют нашу космическую библиотеку.'
        }
      ],
      timeline: [
        { year: '2018', event: 'Рождение проекта в виде лунного дневника в Джайпуре.' },
        { year: '2020', event: 'Запуск многозычного каталога и ритуалов.' },
        { year: '2024', event: 'Премьера живого 3D‑астрального ядра в сети.' }
      ],
      closing:
        'Любовь — миф в движении. Мы подсвечиваем танец астрономии, интуиции и практики.'
    },
    contact: {
      title: 'Напишите вселенной',
      subtitle:
        'Расскажите нам о себе. Мы ответим в течение 48 часов.',
      success: 'Благодарим за доверие. Персональное письмо уже в пути.',
      failures: {
        generic: 'Не удалось отправить сообщение. Попробуйте снова.'
      },
      form: {
        name: 'Полное имя',
        email: 'Электронная почта',
        message: 'Ваша история',
        submit: 'Отправить'
      },
      side: {
        studio: 'Адрес студии',
        address: 'Пентхаус 10, Cosmic Trade Center, Джайпур, Индия',
        phone: '+91 9987 654 321',
        media: 'Пресса',
        partnerships: 'Партнёрства'
      }
    },
    faq: {
      title: 'Частые вопросы',
      items: [
        {
          question: 'Насколько точен анализ?',
          answer:
            'Он сочетает ведическую и западную традиции, поддерживая вашу осознанность.'
        },
        {
          question: 'Будут ли данные в безопасности?',
          answer:
            'Да, архив зашифрован и недоступен третьим лицам.'
        },
        {
          question: 'Можно обновить историю?',
          answer:
            'Конечно. Новые записи дополнят ваш архив, прежние сохранятся.'
        },
        {
          question: 'Есть ли офлайн-ритуалы?',
          answer:
            'Да, ежемесячные мероприятия в студии Джайпура.'
        }
      ]
    },
    privacy: {
      title: 'Политика конфиденциальности',
      sections: [
        {
          heading: 'Какие данные мы собираем',
          body:
            'Истории совместимости, контактные обращения и ваши ритуальные предпочтения.'
        },
        {
          heading: 'Как мы защищаем данные',
          body:
            'Файлы шифруются и хранятся в защищённом хранилище с ограниченным доступом.'
        },
        {
          heading: 'Ваши права',
          body:
            'Вы можете запросить выдачу или удаление данных. Ответ в течение пяти рабочих дней.'
        }
      ]
    },
    disclaimer: {
      title: 'Отказ от ответственности',
      sections: [
        {
          heading: 'Характер рекомендаций',
          body:
            'Мы не предоставляем медицинских, юридических или финансовых услуг. Обращайтесь к лицензированным специалистам.'
        },
        {
          heading: 'Личная ответственность',
          body:
            'Результаты зависят от ваших выборов. Используйте инсайты как ориентир.'
        },
        {
          heading: 'Обновления',
          body:
            'Мы можем изменять материалы по мере развития исследований. Дальнейшее использование означает согласие.'
        }
      ]
    },
    footer: {
      tagline: 'Кинематографическая астрология для каждой речи любви.',
      rights: 'Все права защищены.'
    },
    theme: {
      light: 'Светлая',
      dark: 'Тёмная'
    },
    language: {
      label: 'Язык'
    }
  }
};

export const zodiacCompatibilities = {
  aries: {
    leo: {
      compatibility: 0.92,
      story:
        'Fire meets fire. Aries ignites bold adventures while Leo shines with loyal warmth.',
      rituals: [
        'Plan a sunrise rooftop meditation with matching intentions.',
        'Curate a playlist of dramatic scores for your next road trip.'
      ]
    },
    libra: {
      compatibility: 0.74,
      story:
        'Opposites attract. Libra balances Aries with grace, teaching gentle diplomacy.',
      rituals: [
        'Write a joint love manifesto balancing passion and peace.',
        'Host a dinner alternating spontaneous and curated courses.'
      ]
    }
  },
  taurus: {
    cancer: {
      compatibility: 0.88,
      story:
        'Taurus provides grounded devotion while Cancer offers nurturing intuition.',
      rituals: [
        'Create a comfort-food cooking ritual under candlelight.',
        'Tend a moonlit garden journal together.'
      ]
    }
  },
  gemini: {
    aquarius: {
      compatibility: 0.9,
      story:
        'Gemini sparks curiosity while Aquarius expands inventive horizons.',
      rituals: [
        'Co-author a futuristic short story about your shared destiny.',
        'Schedule weekly stargazing idea exchanges.'
      ]
    }
  },
  cancer: {
    pisces: {
      compatibility: 0.85,
      story:
        'Water signs swirling—Cancer protects, Pisces dreams and heals.',
      rituals: [
        'Compose a lullaby or ambient sound bath in tandem.',
        'Design a sanctuary corner with shared artworks.'
      ]
    }
  },
  leo: {
    sagittarius: {
      compatibility: 0.9,
      story:
        'Leo leads with heart while Sagittarius inspires endless exploration.',
      rituals: [
        'Map your next adventure on a star chart.',
        'Host a themed bonfire celebrating victories.'
      ]
    }
  },
  virgo: {
    capricorn: {
      compatibility: 0.86,
      story:
        'Earthy planners building empires of devotion and craft.',
      rituals: [
        'Architect a yearly ritual calendar with shared milestones.',
        'Co-design a minimal altar with grounding scents.'
      ]
    }
  },
  libra: {
    gemini: {
      compatibility: 0.82,
      story:
        'Air signs delight in dialogue, weaving romance through language.',
      rituals: [
        'Trade love letters in different languages each month.',
        'Curate an art gallery date showcasing your interpretations.'
      ]
    }
  },
  scorpio: {
    cancer: {
      compatibility: 0.89,
      story:
        'Intensity meets empathy, forging transformative loyalty.',
      rituals: [
        'Create a secret ritual under the new moon.',
        'Design a trust totem only you understand.'
      ]
    }
  },
  sagittarius: {
    aries: {
      compatibility: 0.9,
      story:
        'Sagittarius fuels vision while Aries ignites action.',
      rituals: [
        'Embark on spontaneous day trips with surprise prompts.',
        'Host a storytelling night celebrating risks taken.'
      ]
    }
  },
  capricorn: {
    taurus: {
      compatibility: 0.84,
      story:
        'Capricorn constructs foundations; Taurus infuses sensual loyalty.',
      rituals: [
        'Craft a prosperity board blending dreams and daily disciplines.',
        'Plan quarterly retreats focused on renewal.'
      ]
    }
  },
  aquarius: {
    libra: {
      compatibility: 0.83,
      story:
        'Aquarius sparks innovation while Libra designs harmony.',
      rituals: [
        'Design a social impact project you co-lead.',
        'Host salons exploring future love ethics.'
      ]
    }
  },
  pisces: {
    scorpio: {
      compatibility: 0.88,
      story:
        'Pisces dreams in color; Scorpio anchors emotional truth.',
      rituals: [
        'Paint or film dream fragments and decode them together.',
        'Build a moon-water ritual honoring your bond.'
      ]
    }
  }
};

export const defaultFallbackNarrative = {
  compatibility: 0.68,
  story:
    'Your signs compose a unique frequency. Embrace both harmony and contrast to choreograph a lasting partnership.',
  rituals: [
    'Set a fortnightly reflection to celebrate growth and recalibrate.',
    'Create a sensory keepsake that anchors your shared dreams.'
  ]
};

export const zodiacLabels = sharedZodiacValues;
