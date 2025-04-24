import { v4 } from "uuid";

export const sectionsData = [
  {
    name: "AboutUs",
    title: "Über uns",
    imgSrc: "/imgs/about-us.webp",
    imgAlt: "Master's photo",
    text: "Ich, Victor, biete Ihnen eine professionelle Fliesenverlegung an, um Ihrem Raum ein modernes und elegantes Aussehen zu verleihen. Dank hochwertiger Materialien und präziser Verarbeitung garantiere ich langlebige und wasserfeste Ergebnisse. Vertrauen Sie meiner Erfahrung. Ich biete Ihnen professionelle Fliesenarbeiten an, um Ihrem Zuhause ein modernes und elegantes Aussehen zu verleihen.",
    statistics: [
      {
        quantity: "100+",
        direction: "Objekte",
      },
      {
        quantity: "17",
        direction: "Jahre Erfahrung",
      },
      {
        quantity: "100%",
        direction: "Qualität",
      },
    ],
  },

  {
    name: "Tiling",
    title: "Fliesenverlegung",
    mainImages: [
      {
        imgSrc: "/imgs/Fliesenverlegung/mainImgs/Tiling-1.webp",
        imgAlt: "tiling example",
      },
      {
        imgSrc: "/imgs/Fliesenverlegung/mainImgs/Tiling-2.webp",
        imgAlt: "tiling example",
      },
      {
        imgSrc: "/imgs/Fliesenverlegung/mainImgs/Tiling-3.webp",
        imgAlt: "tiling example",
      },
    ],
    text: "Ob Bad, Küche oder Wohnzimmer - wir bringen Stil und Präzision in Ihre vier Wände. Hochwertige Materialien, perfekte Ausführung, langlebige Ergebnisse. Damit Ihr Raum nicht nur modern aussieht, sondern sich auch so anfühlt. Fliesen verlegen ist für uns kein Job - es ist Kunst.",
    sliderImages: [
      {
        id: v4(),
        imgSrc: "/imgs/Fliesenverlegung/Fliesenverlegung-1.webp",
        imgAlt: "Fliesenverlegung",
      },
      {
        id: v4(),
        imgSrc: "/imgs/Fliesenverlegung/Fliesenverlegung-2.webp",
        imgAlt: "Fliesenverlegung",
      },
      {
        id: v4(),
        imgSrc: "/imgs/Fliesenverlegung/Fliesenverlegung-3.webp",
        imgAlt: "Fliesenverlegung",
      },
    ],
  },

  {
    name: "FloorsLaying",
    title: "Böden verlegen",
    imgSrc: "/imgs/Böden verlegen.webp",
    imgAlt: "Böden verlegen",
    text: "Laminat, Parkett oder Vinyl - wir finden den passenden Bodenbelag für Ihr Zuhause. Saubere Arbeit, moderne Technik und ein Finish, das begeistert. Ein guter Boden trägt nicht nur das Haus, sondern auch Ihr Gefühl von Zuhause.",
    sliderImages: [
      {
        id: v4(),
        imgSrc: "/imgs/BödenVerlegen/BödenVerlegen-1.webp",
        imgAlt: "Böden verlegen",
      },
      {
        id: v4(),
        imgSrc: "/imgs/BödenVerlegen/BödenVerlegen-2.webp",
        imgAlt: "Böden verlegen",
      },
      {
        id: v4(),
        imgSrc: "/imgs/BödenVerlegen/BödenVerlegen-3.webp",
        imgAlt: "Böden verlegen",
      },
    ],
  },

  {
    name: "PaintingWorks",
    title: "Lackierarbeiten",
    imgSrc: "/imgs/Lackierarbeiten.webp",
    imgAlt: "Lackierarbeiten",
    text: "Wir verleihen Wänden, Türen und Oberflächen frischen Glanz. Ob dezent oder auffällig – unsere Farben machen Eindruck. Ein Pinselstrich, der den Unterschied macht.",
  },

  {
    name: "FacadesRepair",
    title: "Fassade Renovierung",
    imgSrc: "/imgs/Fassade Renovierung.webp",
    imgAlt: "Fassade Renovierung",
    text: "Die Fassade ist die Visitenkarte Ihres Hauses. Mit uns wird sie wieder zum echten Hingucker – wetterfest, gepflegt und mit Charakter. Wir lassen Ihr Haus im besten Licht erscheinen.",
    sliderImages: [
      {
        id: v4(),
        imgSrc: "/imgs/FassadeRenovierung/FassadeRenovierung-1.webp",
        imgAlt: "Fassade Renovierung",
      },
      {
        id: v4(),
        imgSrc: "/imgs/FassadeRenovierung/FassadeRenovierung-2.webp",
        imgAlt: "Fassade Renovierung",
      },
      {
        id: v4(),
        imgSrc: "/imgs/FassadeRenovierung/FassadeRenovierung-3.webp",
        imgAlt: "Fassade Renovierung",
      },
    ],
  },

  {
    name: "ConcreteWorks",
    title: "Betonarbeiten",
    imgSrc: "/imgs/Betonarbeiten.webp",
    imgAlt: "Betonarbeiten",
    text: "Robust. Maßgeschneidert. Professionell. Von der Terrasse bis zur Einfahrt – wir schaffen stabile Lösungen mit Stil. Stark im Material, stark im Handwerk.",
    sliderImages: [
      {
        id: v4(),
        imgSrc: "/imgs/Betonarbeiten/Betonarbeiten-1.webp",
        imgAlt: "Betonarbeiten",
      },
      {
        id: v4(),
        imgSrc: "/imgs/Betonarbeiten/Betonarbeiten-2.webp",
        imgAlt: "Betonarbeiten",
      },
      {
        id: v4(),
        imgSrc: "/imgs/Betonarbeiten/Betonarbeiten-3.webp",
        imgAlt: "Betonarbeiten",
      },
    ],
  },

  {
    name: "Testimonials",
    title: "Rückmeldung",
    reviews: [
      {
        id: v4(),
        author: "Kunde aus Karlsruhe",
        rating: 4.5,
        comment:
          "Wir haben eine komplette Badsanierung in Karlsruhe bei Victor beauftragt – vom Entfernen der alten Fliesen bis zur Installation der neuen Sanitäranlagen. Alles wurde präzise, sauber und pünktlich erledigt, ohne versteckte Kosten. Victor ist ein zuverlässiger Handwerker, dem man sein Zuhause wirklich anvertrauen kann.",
      },
      {
        id: v4(),
        author: "Kunde aus Heidelberg",
        rating: 5.0,
        comment:
          "Nach langer Suche nach einem guten Fliesenleger in Heidelberg sind wir endlich bei Victor gelandet – und haben es keine Sekunde bereut. Er hat sowohl den Küchenfliesenspiegel als auch den Boden makellos verlegt. Man sieht einfach, dass er Erfahrung hat und mit Herzblut arbeitet.",
      },
      {
        id: v4(),
        author: "Kunde aus Ulm",
        rating: 4.5,
        comment:
          "Wir haben mit Victor eine komplette Wohnungsrenovierung in Ulm gemacht – Böden, Wände, Fliesen, Badezimmer. Alles lief reibungslos und in hoher Qualität. Besonders schätzen wir, dass er ständig erreichbar war und jeden Arbeitsschritt transparent erklärt hat. Renovierung ohne Stress – so muss es sein.",
      },
      {
        id: v4(),
        author: "Kunde aus Freiburg im Breisgau",
        rating: 4.5,
        comment:
          "Die Fassadensanierung in Freiburg durch Victor hat unser Haus wie neu erscheinen lassen. Vorab gab es eine gründliche Beratung, einen klaren Ablaufplan und alle Termine wurden eingehalten. Besonders positiv: Die Baustelle war immer ordentlich, und am Ende des Tages wurde immer sauber gemacht.",
      },
      {
        id: v4(),
        author: "Kunde aus Mannheim",
        rating: 5.0,
        comment:
          "Auf Empfehlung kamen wir zu Victor – und empfehlen ihn nun selbst weiter. Er hat bei uns Fliesen im Bad und in der Küche in Mannheim verlegt. Die Arbeit war extrem sauber, alle Fugen gerade, kein Kleberrest zu sehen. Ein echter Profi-Fliesenleger, der auf jedes Detail achtet. 100 Prozent zufrieden.",
      },
    ],
  },

  {
    name: "Faq",
    title: "FAQ – Häufig gestellte Fragen",
    blocks: [
      {
        question: "Bereiten Sie die Oberfläche vor der Fliesenverlegung vor?",
        answer:
          "Ja, ich gleiche die Oberfläche aus, trage Abdichtungen auf und bereite den Untergrund für eine hochwertige Verlegung vor.",
      },
      {
        question: "Wie lange dauert die Fliesenverlegung?",
        answer:
          "Die Dauer der Fliesenverlegung hängt von der Fläche, der Art der Fliesen und der Komplexität des Projekts ab. Je nach Anforderungen kann die Arbeit zwischen 1 Stunde und 10 Tagen dauern.",
      },
      {
        question: "Welche zusätzlichen Dienstleistungen bieten Sie an?",
        answer:
          "Neben der Fliesenverlegung biete ich Bodenbelagsarbeiten (Laminat, Parkett, Vinyl), Fassadenrenovierungen (Reinigung, Putz, Anstrich) und Betonarbeiten (Fundamente, Estriche, dekorative Elemente) an.",
      },
      {
        question: "Verlegen Sie Fliesen auch im Außenbereich?",
        answer:
          "Ja, ich verlege Fliesen sowohl in Innenräumen als auch im Außenbereich, z. B. auf Terrassen, Balkonen und Treppen.",
      },
      {
        question:
          "Können Sie mit Fliesen arbeiten, die der Kunde bereitstellt?",
        answer:
          "Ja, ich kann mit Ihren Materialien arbeiten oder Sie bei der Auswahl unterstützen.",
      },
      {
        question:
          "Können Sie bei der Farbauswahl und Materialentscheidung helfen?",
        answer:
          "Natürlich! Ich helfe Ihnen, Farben und Materialien auszuwählen, damit Ihr Raum harmonisch und stilvoll aussieht.",
      },
      {
        question: "Mit welchen Arten von Fliesen arbeiten Sie?",
        answer:
          "Ich arbeite mit Keramikfliesen, Mosaik, Feinsteinzeug und Naturstein.",
      },
      {
        question: "Kann man mehrere Dienstleistungen gleichzeitig buchen?",
        answer:
          "Ja, ich kann eine Kombination von Dienstleistungen ausführen, wie z. B. Fliesenverlegung, Bodenbelagsarbeiten und Fassadenrenovierung.",
      },
    ],
  },
];
