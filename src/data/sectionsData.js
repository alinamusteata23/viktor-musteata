import { v4 } from 'uuid';

export const sectionsData = [
  {
    name: 'AboutUs',
    title: 'Über uns',
    imgSrc: '/imgs/about-us.webp',
    imgAlt: "Master's photo",
    text: 'Wir bieten professionelle Fliesenverlegung für Sie, um Ihrem Raum ein modernes und elegantes Aussehen zu verleihen. Mit hochwertigen Materialien und präziser Ausführung sorgen wir für langlebige und wasserdichte Ergebnisse. Vertrauen Sie auf unsere Erfahrung, um Ihren Raum in einen stilvollen Rückzugsort zu verwandeln Wir bieten professionelle Fliesenverlegung für Sie, um Ihrem Raum ein modernes und elegantes Aussehen zu ssehen',
    statistics: [
      {
        quantity: '100+',
        direction: 'Objekte',
      },
      {
        quantity: '17',
        direction: 'Jahre Erfahrung',
      },
      {
        quantity: '100%',
        direction: 'Qualität',
      },
    ],
  },

  {
    name: 'Tiling',
    title: 'Fliesenverlegung',
    mainImages: [
      {
        imgSrc: '/imgs/Fliesenverlegung/mainImgs/Tiling-1.webp',
        imgAlt: 'tiling example',
      },
      {
        imgSrc: '/imgs/Fliesenverlegung/mainImgs/Tiling-2.webp',
        imgAlt: 'tiling example',
      },
      {
        imgSrc: '/imgs/Fliesenverlegung/mainImgs/Tiling-3.webp',
        imgAlt: 'tiling example',
      },
    ],
    text: 'Wir bieten professionelle Fliesenverlegung für Sie, um Ihrem Raum ein modernes und elegantes Aussehen zu verleihen. Mit hochwertigen Materialien und präziser Ausführung sorgen wir für langlebige und wasserdichte Ergebnisse. Vertrauen Sie auf unsere Erfahrung, um Ihren Raum in einen stilvollen Rückzugsort zu verwandeln',
    sliderImages: [
      {
        id: v4(),
        imgSrc: '/imgs/Fliesenverlegung/Fliesenverlegung-1.webp',
        imgAlt: 'Fliesenverlegung',
      },
      {
        id: v4(),
        imgSrc: '/imgs/Fliesenverlegung/Fliesenverlegung-2.webp',
        imgAlt: 'Fliesenverlegung',
      },
      {
        id: v4(),
        imgSrc: '/imgs/Fliesenverlegung/Fliesenverlegung-3.webp',
        imgAlt: 'Fliesenverlegung',
      },
    ],
  },

  {
    name: 'FloorsLaying',
    title: 'Böden verlegen',
    imgSrc: '/imgs/Böden verlegen.webp',
    imgAlt: 'Böden verlegen',
    text: 'Wir garantieren Professionalität und erstklassige Qualität bei der Verlegung von Böden, unter Einsatz neuester Technologien für langanhaltende und ästhetische Ergebnisse.',
    sliderImages: [
      {
        id: v4(),
        imgSrc: '/imgs/BödenVerlegen/BödenVerlegen-1.webp',
        imgAlt: 'Böden verlegen',
      },
      {
        id: v4(),
        imgSrc: '/imgs/BödenVerlegen/BödenVerlegen-2.webp',
        imgAlt: 'Böden verlegen',
      },
      {
        id: v4(),
        imgSrc: '/imgs/BödenVerlegen/BödenVerlegen-3.webp',
        imgAlt: 'Böden verlegen',
      },
      {
        id: v4(),
        imgSrc: '/imgs/BödenVerlegen/BödenVerlegen-3.webp',
        imgAlt: 'Böden verlegen',
      },
      {
        id: v4(),
        imgSrc: '/imgs/BödenVerlegen/BödenVerlegen-3.webp',
        imgAlt: 'Böden verlegen',
      },
    ],
  },

  {
    name: 'PaintingWorks',
    title: 'Lackierarbeiten',
    imgSrc: '/imgs/Lackierarbeiten.webp',
    imgAlt: 'Lackierarbeiten',
    text: 'Wir garantieren Professionalität und erstklassige Qualität bei der Verlegung von Böden, unter Einsatz neuester Technologien für langanhaltende und ästhetische Ergebnisse.',
  },

  {
    name: 'FacadesRepair',
    title: 'Fassade Renovierung',
    imgSrc: '/imgs/Fassade Renovierung.webp',
    imgAlt: 'Fassade Renovierung',
    text: 'Wir garantieren Professionalität und erstklassige Qualität bei der Verlegung von Böden, unter Einsatz neuester Technologien für langanhaltende und ästhetische Ergebnisse.',
    sliderImages: [
      {
        id: v4(),
        imgSrc: '/imgs/FassadeRenovierung/FassadeRenovierung-1.webp',
        imgAlt: 'Fassade Renovierung',
      },
      {
        id: v4(),
        imgSrc: '/imgs/FassadeRenovierung/FassadeRenovierung-2.webp',
        imgAlt: 'Fassade Renovierung',
      },
      {
        id: v4(),
        imgSrc: '/imgs/FassadeRenovierung/FassadeRenovierung-3.webp',
        imgAlt: 'Fassade Renovierung',
      },
    ],
  },

  {
    name: 'ConcreteWorks',
    title: 'Betonarbeiten',
    imgSrc: '/imgs/Betonarbeiten.webp',
    imgAlt: 'Betonarbeiten',
    text: 'Wir garantieren Professionalität und erstklassige Qualität bei der Verlegung von Böden, unter Einsatz neuester Technologien für langanhaltende und ästhetische Ergebnisse.',
    sliderImages: [
      {
        id: v4(),
        imgSrc: '/imgs/Betonarbeiten/Betonarbeiten-1.webp',
        imgAlt: 'Betonarbeiten',
      },
      {
        id: v4(),
        imgSrc: '/imgs/Betonarbeiten/Betonarbeiten-2.webp',
        imgAlt: 'Betonarbeiten',
      },
      {
        id: v4(),
        imgSrc: '/imgs/Betonarbeiten/Betonarbeiten-3.webp',
        imgAlt: 'Betonarbeiten',
      },
    ],
  },

  {
    name: 'Testimonials',
    title: 'Rückmeldung',
    reviews: [
      {
        id: v4(),
        author: 'Wade Warren',
        rating: 4.0,
        comment: 'Awesome website and funnel for your business',
      },
      {
        id: v4(),
        author: 'Ilon Mask',
        rating: 5.0,
        comment: 'Funnel for business and website',
      },
      {
        id: v4(),
        author: 'Warren Wade',
        rating: 4.5,
        comment: 'Funnel for your business and awesome website',
      },
    ],
  },

  {
    name: 'Faq',
    title: 'FAQ – Häufig gestellte Fragen',
    blocks: [
      {
        question: 'Bereiten Sie die Oberfläche vor der Fliesenverlegung vor?',
        answer:
          'Ja, ich gleiche die Oberfläche aus, trage Abdichtungen auf und bereite den Untergrund für eine hochwertige Verlegung vor.',
      },
      {
        question: 'Wie lange dauert die Fliesenverlegung?',
        answer:
          'Die Dauer der Fliesenverlegung hängt von der Fläche, der Art der Fliesen und der Komplexität des Projekts ab. Je nach Anforderungen kann die Arbeit zwischen 1 Stunde und 10 Tagen dauern.',
      },
      {
        question: 'Welche zusätzlichen Dienstleistungen bieten Sie an?',
        answer:
          'Neben der Fliesenverlegung biete ich Bodenbelagsarbeiten (Laminat, Parkett, Vinyl), Fassadenrenovierungen (Reinigung, Putz, Anstrich) und Betonarbeiten (Fundamente, Estriche, dekorative Elemente) an.',
      },
      {
        question: 'Verlegen Sie Fliesen auch im Außenbereich?',
        answer:
          'Ja, ich verlege Fliesen sowohl in Innenräumen als auch im Außenbereich, z. B. auf Terrassen, Balkonen und Treppen.',
      },
      {
        question:
          'Können Sie mit Fliesen arbeiten, die der Kunde bereitstellt?',
        answer:
          'Ja, ich kann mit Ihren Materialien arbeiten oder Sie bei der Auswahl unterstützen.',
      },
      {
        question:
          'Können Sie bei der Farbauswahl und Materialentscheidung helfen?',
        answer:
          'Natürlich! Ich helfe Ihnen, Farben und Materialien auszuwählen, damit Ihr Raum harmonisch und stilvoll aussieht.',
      },
      {
        question: 'Mit welchen Arten von Fliesen arbeiten Sie?',
        answer:
          'Ich arbeite mit Keramikfliesen, Mosaik, Feinsteinzeug und Naturstein.',
      },
      {
        question: 'Kann man mehrere Dienstleistungen gleichzeitig buchen?',
        answer:
          'Ja, ich kann eine Kombination von Dienstleistungen ausführen, wie z. B. Fliesenverlegung, Bodenbelagsarbeiten und Fassadenrenovierung.',
      },
    ],
  },
];
