import { Prophecy, ProphecyCategory } from '../types';

/* 
  Daten basierend auf den bereitgestellten PDF-Dokumenten (Roger Liebi, Bibel Erleben).
  Enthält jetzt Kommentare und erweiterte Bibelstellen.
  Alle Einträge haben nun Links (Standard-Links eingefügt wo spezifische fehlten).
*/

const DEFAULT_LINKS = [
  "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf",
  "https://www.youtube.com/watch?v=_y56S4IUCdQ"
];

export const prophecies: Prophecy[] = [
  // --- HERKUNFT & GEBURT ---
  {
    id: 1,
    kategorie: ProphecyCategory.GEBURT,
    beschreibung: "Der Messias wird in Bethlehem Efrata geboren werden.",
    ot_stelle: "Micha 5,1",
    ot_text_kurz: "Und du, Bethlehem-Ephrata, zu klein, um unter den Tausenden von Juda zu sein, aus dir wird mir hervorkommen, der Herrscher über Israel sein soll.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 2,1",
    nt_text_kurz: "Als aber Jesus zu Bethlehem in Judäa geboren war, in den Tagen Herodes', des Königs...",
    kommentar: "Im Land Israel gab es zwei Ortschaften mit dem Namen Bethlehem: eines in Galiläa und eines in Judäa. Letzteres wurde zur Unterscheidung Bethlehem-Ephrata genannt. Der Prophet Micha gab dies mit eindeutiger Klarheit und Gewissheit viele Jahrhunderte vor der Erfüllung bekannt.",
    quelle_links: [
      "https://www.youtube.com/watch?v=_y56S4IUCdQ",
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"
    ],
    tags: ["Messias", "Geburt", "Ort", "Micha"]
  },
  {
    id: 2,
    kategorie: ProphecyCategory.GEBURT,
    beschreibung: "Der Messias wird von einer Jungfrau geboren.",
    ot_stelle: "Jesaja 7,14",
    ot_text_kurz: "Darum wird euch der Herr selbst ein Zeichen geben: Siehe, die Jungfrau wird schwanger werden und einen Sohn gebären...",
    ot_zeitraum: "ca. 735 v. Chr.",
    nt_stelle: "Matthäus 1,22-23",
    nt_text_kurz: "Dies alles aber ist geschehen, damit erfüllt würde ... Siehe, die Jungfrau wird schwanger sein...",
    nt_2_stelle: "Lukas 1,34-35",
    nt_2_text_kurz: "Maria aber sprach zu dem Engel: Wie wird dies zugehen, da ich von keinem Mann weiß? Und der Engel antwortete und sprach zu ihr: Der Heilige Geist wird über dich kommen, und Kraft des Höchsten wird dich überschatten; darum wird auch das Heilige, das geboren werden wird, Sohn Gottes genannt werden.",
    kommentar: "Das hebräische Wort 'Almah', das hier verwendet wird, bezeichnet eine junge, unverheiratete Frau. Die Septuaginta (die griechische Übersetzung des AT, ca. 200 v. Chr.) übersetzt dieses Wort eindeutig mit 'Parthenos' (Jungfrau).",
    quelle_links: [
      "https://www.youtube.com/watch?v=qNq2x6VkEq8&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=3",
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"
    ],
    tags: ["Jungfrauengeburt", "Immanuel", "Jesaja"]
  },
  {
    id: 3,
    kategorie: ProphecyCategory.HERKUNFT,
    beschreibung: "Er stammt aus dem Stamm Juda.",
    ot_stelle: "1. Mose 49,10",
    ot_text_kurz: "Nicht weichen wird das Zepter von Juda, noch ein Herrscherstab zwischen seinen Füßen hinweg, bis dass Schilo kommt, und ihm werden die Völker gehorchen.",
    ot_zeitraum: "ca. 1600 v. Chr. (Zeit Mose)",
    nt_stelle: "Lukas 3,33",
    nt_text_kurz: "...der war ein Sohn des Aminadab... der war ein Sohn des Perez, der war ein Sohn des Juda.",
    nt_2_stelle: "Matthäus 1,2",
    nt_2_text_kurz: "Juda aber zeugte den Perez und den Serach...",
    kommentar: "Der Name 'Schilo' wurde im Talmud und in alten rabbinischen Schriften messianisch verstanden (= der Frieden Schaffende). Das Wort 'Shevet' (Zepter) bedeutet auch 'Stamm' oder Identität. Die Prophezeiung besagt: Die nationale Identität Judas wird nicht vergehen, bis der Messias kommt. Als die Römer 70 n. Chr. den jüdischen Staat vernichteten, war Jesus bereits erschienen.",
    quelle_links: [
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf",
      "https://www.youtube.com/watch?v=_y56S4IUCdQ"
    ],
    tags: ["Stammbaum", "Juda", "Jakob", "Schilo"]
  },
  {
    id: 16,
    kategorie: ProphecyCategory.HERKUNFT,
    beschreibung: "Nachkomme Abrahams: Durch ihn sollen alle Völker gesegnet werden.",
    ot_stelle: "1. Mose 22,18",
    ot_text_kurz: "Und in deinem Samen sollen gesegnet werden alle Nationen der Erde.",
    ot_zeitraum: "ca. 2000 v. Chr. (Abraham)",
    nt_stelle: "Galater 3,16",
    nt_text_kurz: "Er sagt nicht: 'und den Samen', als von vielen, sondern als von einem: 'und deinem Samen', welcher ist Christus.",
    nt_2_stelle: "Apostelgeschichte 3,25",
    nt_2_text_kurz: "...in deinem Samen sollen gesegnet werden alle Geschlechter der Erde.",
    kommentar: "Paulus erklärt im Galaterbrief explizit, dass sich diese Verheißung auf einen ganz bestimmten Nachkommen bezog: den Messias. Durch Jesus Christus ist das Heil zu allen Völkern der Welt gekommen.",
    quelle_links: [
      "https://www.youtube.com/watch?v=_y56S4IUCdQ",
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"
    ],
    tags: ["Abraham", "Segen", "Bund", "Völker"]
  },
  {
    id: 20,
    kategorie: ProphecyCategory.GEBURT,
    beschreibung: "Kindermassaker bei seiner Geburt.",
    ot_stelle: "Jeremia 31,15",
    ot_text_kurz: "Man hört eine Stimme in Rama, Wehklage und bitteres Weinen; Rahel weint um ihre Kinder...",
    ot_zeitraum: "ca. 600 v. Chr.",
    nt_stelle: "Matthäus 2,16",
    nt_text_kurz: "Da ergrimmte Herodes sehr ... und ließ alle Knaben töten, die in Bethlehem und in seinem ganzen Gebiet waren.",
    kommentar: "Der grausame König Herodes ordnete den Kindermord an, um den neuen 'König der Juden' zu beseitigen. Jeremia sah diesen Schmerz prophetisch voraus, verbunden mit Rahel, der Stammmutter, deren Grab bei Bethlehem liegt.",
    quelle_links: [
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf",
      "https://www.youtube.com/watch?v=1_Mx6q6dPg8"
    ],
    tags: ["Herodes", "Leid", "Bethlehem", "Jeremia"]
  },
  {
    id: 21,
    kategorie: ProphecyCategory.GEBURT,
    beschreibung: "Der Messias wird aus Ägypten gerufen.",
    ot_stelle: "Hosea 11,1",
    ot_text_kurz: "...und aus Ägypten habe ich meinen Sohn gerufen.",
    ot_zeitraum: "ca. 750 v. Chr.",
    nt_stelle: "Matthäus 2,15",
    nt_text_kurz: "...damit erfüllt würde, was der Herr durch den Propheten geredet hat: Aus Ägypten habe ich meinen Sohn gerufen.",
    kommentar: "Es scheint paradox: Der Messias sollte in Bethlehem geboren werden, aber aus Ägypten gerufen werden. Die Geschichte erklärt es: Joseph und Maria flohen vor Herodes nach Ägypten und kehrten erst nach dessen Tod zurück.",
    quelle_links: [
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf",
      "https://www.youtube.com/watch?v=_y56S4IUCdQ"
    ],
    tags: ["Flucht", "Ägypten", "Hosea"]
  },

  // --- LEBEN & DIENST ---
  {
    id: 4,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Dem Messias wird ein Wegbereiter vorausgehen.",
    ot_stelle: "Jesaja 40,3",
    ot_text_kurz: "Stimme eines Rufenden in der Wüste: Bereitet den Weg des Herrn.",
    ot_2_stelle: "Maleachi 3,1",
    ot_2_text_kurz: "Siehe, ich sende meinen Boten, dass er den Weg bahne vor mir her.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 3,3",
    nt_text_kurz: "Das ist der, von welchem durch den Propheten Jesaja gesagt ist: Eine Stimme ruft in der Wüste...",
    nt_2_stelle: "Lukas 1,17",
    nt_2_text_kurz: "Und er wird vor ihm hergehen im Geist und in der Kraft des Elia.",
    kommentar: "Seit etwa 450 Jahren (seit Maleachi) gab es keine Propheten mehr in Israel. Das Auftreten von Johannes dem Täufer war eine Sensation. Er erfüllte exakt die Rolle des Rufers in der Wüste, der das Volk auf das Kommen des Herrn vorbereitete.",
    quelle_links: ["https://www.youtube.com/watch?v=mf7C57RtfpA"],
    tags: ["Wegbereiter", "Wüste", "Johannes der Täufer", "Elia"]
  },
  {
    id: 24,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Dienst in Galiläa (Land Sebulon/Naphtali).",
    ot_stelle: "Jesaja 8,23",
    ot_text_kurz: "...wie er in der früheren Zeit das Land Sebulon gering gemacht hat, so wird er in der künftigen Zeit das Land am See zu Ehren bringen.",
    ot_2_stelle: "Jesaja 9,1",
    ot_2_text_kurz: "Das Volk, das im Finstern wandelt, hat ein großes Licht gesehen.",
    ot_zeitraum: "ca. 735 v. Chr.",
    nt_stelle: "Matthäus 4,12-16",
    nt_text_kurz: "Als Jesus hörte, dass Johannes gefangen gesetzt war, entwich er nach Galiläa ... das Land Sebulon und das Land Naphtali.",
    kommentar: "Galiläa galt als das 'Galiläa der Heiden', ein verachteter Landstrich fern vom religiösen Zentrum Jerusalem. Doch genau dort begann der Messias sein Wirken und brachte das 'große Licht'.",
    quelle_links: [
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf",
      "https://www.youtube.com/watch?v=qNq2x6VkEq8"
    ],
    tags: ["Galiläa", "Licht", "Jesaja"]
  },
  {
    id: 25,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Er wirkt Wunder: Blinde sehen, Taube hören.",
    ot_stelle: "Jesaja 35,5-6",
    ot_text_kurz: "Dann werden die Augen der Blinden aufgetan und die Ohren der Tauben geöffnet werden; dann wird der Lahme springen wie ein Hirsch.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 11,5",
    nt_text_kurz: "Blinde sehen und Lahme gehen, Aussätzige werden rein und Taube hören...",
    kommentar: "Jesus legitimierte sich durch diese Wunder als der verheißene Messias. Selbst der Talmud bestätigt, dass Jesus Wunder tat (bezeichnet sie aber als Zauberei).",
    quelle_links: [
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf",
      "https://www.youtube.com/watch?v=qNq2x6VkEq8"
    ],
    tags: ["Wunder", "Heilung", "Jesaja"]
  },
  {
    id: 6,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Verraten für 30 Silberlinge.",
    ot_stelle: "Sacharja 11,12",
    ot_text_kurz: "Da wogen sie meinen Lohn ab: 30 Silberlinge.",
    ot_zeitraum: "ca. 520 v. Chr.",
    nt_stelle: "Matthäus 26,15",
    nt_text_kurz: "Und er sprach: Was wollt ihr mir geben, so will ich ihn euch verraten? Und sie zahlten ihm 30 Silberlinge.",
    kommentar: "30 Silberlinge waren damals der Preis für einen Sklaven (2. Mose 21,32). So gering schätzten die Hohenpriester den Wert des Messias ein.",
    quelle_links: [
      "https://www.youtube.com/watch?v=1_Mx6q6dPg8&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=11",
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"
    ],
    tags: ["Judas", "Verrat", "Silber", "Sacharja"]
  },
  {
    id: 7,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Das Geld wird dem Töpfer hingeworfen.",
    ot_stelle: "Sacharja 11,13",
    ot_text_kurz: "Und ich nahm die 30 Silberlinge und warf sie ins Haus des HERRN für den Töpfer.",
    ot_zeitraum: "ca. 520 v. Chr.",
    nt_stelle: "Matthäus 27,5-7",
    nt_text_kurz: "Und er warf die Silberlinge in den Tempel... Sie hielten aber Rat und kauften dafür den Acker des Töpfers.",
    kommentar: "Die Präzision ist erstaunlich: 1. Es sind 30 Silberlinge. 2. Sie werden in den Tempel geworfen. 3. Das Geld wird letztlich für einen Töpfer verwendet (Kauf des Töpferackers).",
    quelle_links: ["https://www.youtube.com/watch?v=1_Mx6q6dPg8&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=11"],
    tags: ["Blutacker", "Töpfer", "Judas"]
  },

  // --- TOD & KREUZIGUNG ---
  {
    id: 9,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Hände und Füße durchgraben (Kreuzigung).",
    ot_stelle: "Psalm 22,17",
    ot_text_kurz: "Denn Hunde haben mich umgeben... Sie have meine Hände und meine Füße durchgraben.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Johannes 19,18",
    nt_text_kurz: "Wo sie ihn kreuzigten und zwei andere mit ihm...",
    nt_2_stelle: "Johannes 20,25",
    nt_2_text_kurz: "Wenn ich nicht in seinen Händen das Nägelmal sehe...",
    kommentar: "Psalm 22 beschreibt eine Hinrichtung durch Kreuzigung 1000 Jahre bevor diese Strafe in Palästina durch die Römer eingeführt wurde. Der Ausdruck 'Hunde' war eine jüdische Bezeichnung für Heiden (Nicht-Juden), und tatsächlich führten römische Soldaten die Kreuzigung durch.",
    quelle_links: [
      "https://www.youtube.com/watch?v=fHejfjzldOg&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=6",
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"
    ],
    tags: ["Kreuzigung", "Psalm 22", "David"]
  },
  {
    id: 40,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Sie würfeln um seine Kleider.",
    ot_stelle: "Psalm 22,19",
    ot_text_kurz: "Sie teilen meine Kleider unter sich und werfen das Los über mein Gewand.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Johannes 19,23-24",
    nt_text_kurz: "Die Soldaten nun nahmen seine Kleider und machten vier Teile... und das Untergewand. Da sprachen sie: Lasst uns darum losen.",
    kommentar: "Die Soldaten teilten die Obergewänder, aber das Untergewand war 'ohne Naht', daher wollten sie es nicht zerschneiden und losten darum. Eine exakte Erfüllung des Psalms.",
    quelle_links: [
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf",
      "https://www.youtube.com/watch?v=fHejfjzldOg"
    ],
    tags: ["Kleider", "Soldaten", "Los"]
  },
  {
    id: 11,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Kein Knochen soll ihm zerbrochen werden.",
    ot_stelle: "Psalm 34,21",
    ot_text_kurz: "Er bewahrt ihm alle seine Gebeine, nicht eines von ihnen wird zerbrochen.",
    ot_2_stelle: "2. Mose 12,46",
    ot_2_text_kurz: "Ihr sollt keinen Knochen an ihm (dem Passahlamm) zerbrechen.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Johannes 19,32-33",
    nt_text_kurz: "Da kamen die Soldaten und brachen dem ersten die Beine... Als sie aber zu Jesus kamen und sahen, dass er schon gestorben war, zerschlugen sie ihm die Beine nicht.",
    kommentar: "Es war üblich, den Gekreuzigten die Beine zu brechen, um den Tod zu beschleunigen (Crurifragium). Da Jesus bereits tot war, unterblieb dies, womit er als das wahre Passahlamm Gottes bestätigt wurde.",
    quelle_links: ["https://www.bibellesebund.ch/files/content/Medienbereich/BLB_Arbeitsmaterial_Erfuellte_Prophetien_auf_Jesus.pdf"],
    tags: ["Passahlamm", "Kreuzigung", "Typologie"]
  },
  {
    id: 45,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Seine Seite wird durchbohrt.",
    ot_stelle: "Sacharja 12,10",
    ot_text_kurz: "Sie werden auf mich blicken, den sie durchbohrt haben, und sie werden um ihn klagen.",
    ot_zeitraum: "ca. 520 v. Chr.",
    nt_stelle: "Johannes 19,34",
    nt_text_kurz: "Sondern einer der Kriegsknechte stieß mit einer Lanze in seine Seite, und sogleich floss Blut und Wasser heraus.",
    kommentar: "Statt ihm die Beine zu brechen, stieß ein Soldat einen Speer in seine Seite, um den Tod sicherzustellen. Sacharja verknüpft dieses Durchbohren mit einer zukünftigen Buße Israels.",
    quelle_links: [
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf",
      "https://www.youtube.com/watch?v=1_Mx6q6dPg8"
    ],
    tags: ["Lanze", "Blut und Wasser", "Sacharja"]
  },
  {
    id: 10,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Er wird bei einem Reichen begraben.",
    ot_stelle: "Jesaja 53,9",
    ot_text_kurz: "Und man bestimmte sein Grab bei Gottlosen, aber bei einem Reichen war er in seinem Tod.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 27,57-60",
    nt_text_kurz: "Da kam ein reicher Mann von Arimathäa namens Joseph ... und legte ihn in sein neues Grab.",
    kommentar: "Normalerweise wurden Hingerichtete (Gottlose) verscharrt oder verbrannt (Tal Hinnom). Gott ließ aber keine Schändung des Leichnams Jesu zu. Joseph von Arimathäa, ein reicher Ratsherr, bat um den Leichnam.",
    quelle_links: [
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf",
      "https://www.youtube.com/watch?v=qNq2x6VkEq8"
    ],
    tags: ["Begräbnis", "Joseph von Arimathäa", "Jesaja"]
  },
  {
    id: 12,
    kategorie: ProphecyCategory.AUFERSTEHUNG,
    beschreibung: "Er wird nicht im Tod bleiben (Auferstehung).",
    ot_stelle: "Psalm 16,10",
    ot_text_kurz: "Denn du wirst meine Seele nicht dem Totenreich preisgeben und nicht zulassen, dass dein Getreuer die Verwesung sieht.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Apostelgeschichte 2,31",
    nt_text_kurz: "Hat er vorausschauend von der Auferstehung des Christus geredet, dass seine Seele nicht dem Totenreich preisgegeben wurde.",
    kommentar: "Petrus erklärt an Pfingsten, dass David hier nicht von sich selbst sprechen konnte (da sein Grab bekannt war), sondern als Prophet vom Messias sprach, der nicht im Grab verwesen würde.",
    quelle_links: [
      "https://www.youtube.com/watch?v=1VJXNmj6Okc&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=12",
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"
    ],
    tags: ["Auferstehung", "Sieg", "David", "Petrus"]
  },
  // --- AUFGEFÜLLTE EINTRÄGE (Bisher keine Links) ---
  {
    id: 17,
    kategorie: ProphecyCategory.HERKUNFT,
    beschreibung: "Nachkomme Isaaks: Der Bund wird über Isaak fortgeführt.",
    ot_stelle: "1. Mose 17,19",
    ot_text_kurz: "Nein, sondern Sara, deine Frau, soll dir einen Sohn gebären ... und ich werde meinen Bund mit ihm aufrichten.",
    ot_zeitraum: "ca. 1400 v. Chr. (Zeit Mose)",
    nt_stelle: "Matthäus 1,2",
    nt_text_kurz: "Abraham zeugte den Isaak, Isaak zeugte den Jakob...",
    quelle_links: DEFAULT_LINKS,
    tags: ["Isaak", "Verheißung"]
  },
  {
    id: 18,
    kategorie: ProphecyCategory.HERKUNFT,
    beschreibung: "Nachkomme Jakobs: Ein Stern aus Jakob.",
    ot_stelle: "4. Mose 24,17",
    ot_text_kurz: "Ich sehe ihn, aber nicht jetzt ... Es wird ein Stern aus Jakob aufgehen und ein Zepter aus Israel aufkommen.",
    ot_zeitraum: "ca. 1400 v. Chr. (Zeit Mose)",
    nt_stelle: "Lukas 3,34",
    nt_text_kurz: "...Sohn des Jakob, Sohn des Isaak, Sohn des Abraham.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Jakob", "Stern", "Königtum"]
  },
  {
    id: 19,
    kategorie: ProphecyCategory.HERKUNFT,
    beschreibung: "Nachkomme König Davids (Wurzel Isais).",
    ot_stelle: "Jesaja 11,1",
    ot_text_kurz: "Und es wird ein Reis hervorgehen aus dem Stamm Isais und ein Zweig aus seiner Wurzel Frucht bringen.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 1,1",
    nt_text_kurz: "Geschlechtsregister Jesu Christi, des Sohnes Davids, des Sohnes Abrahams.",
    quelle_links: DEFAULT_LINKS,
    tags: ["David", "Königtum"]
  },
  {
    id: 22,
    kategorie: ProphecyCategory.GEBURT,
    beschreibung: "Anbetung und Geschenke von Königen.",
    ot_stelle: "Psalm 72,10",
    ot_text_kurz: "Die Könige von Tarsis und von den Inseln sollen Geschenke bringen... alle Könige sollen ihn anbeten.",
    ot_zeitraum: "ca. 950 v. Chr.",
    nt_stelle: "Matthäus 2,11",
    nt_text_kurz: "Da taten sie ihre Schätze auf und schenkten ihm Gold, Weihrauch und Myrrhe.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Weise", "Geschenke", "Anbetung"]
  },
  {
    id: 23,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Der Geist der Weisheit und Stärke ruht auf ihm.",
    ot_stelle: "Jesaja 11,2",
    ot_text_kurz: "Auf ihm wird ruhen der Geist des HERRN, der Geist der Weisheit und des Verstandes...",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Lukas 2,52",
    nt_text_kurz: "Und Jesus nahm zu an Weisheit, Alter und Gnade bei Gott und den Menschen.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Weisheit", "Heiliger Geist"]
  },
  {
    id: 26,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Er predigt in Gleichnissen.",
    ot_stelle: "Psalm 78,2",
    ot_text_kurz: "Ich will meinen Mund auftun in Gleichnissen, will Rätsel verkünden aus der Vorzeit.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Matthäus 13,34-35",
    nt_text_kurz: "Dies alles redete Jesus in Gleichnissen zur Volksmenge ... damit erfüllt würde, was durch den Propheten geredet ist.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Lehre", "Gleichnisse"]
  },
  {
    id: 27,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Sanftmut: Er wird das geknickte Rohr nicht zerbrechen.",
    ot_stelle: "Jesaja 42,2-3",
    ot_text_kurz: "Er wird nicht schreien und seine Stimme nicht erheben ... das geknickte Rohr wird er nicht zerbrechen.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 12,19-20",
    nt_text_kurz: "Er wird nicht streiten noch schreien ... das geknickte Rohr wird er nicht zerbrechen.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Charakter", "Sanftmut"]
  },
  {
    id: 28,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Licht für die Heidenvölker.",
    ot_stelle: "Jesaja 42,6",
    ot_text_kurz: "Ich habe dich zum Bund für das Volk gesetzt, zum Licht für die Heiden.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Lukas 2,32",
    nt_text_kurz: "...ein Licht zur Erleuchtung der Heiden und zur Verherrlichung deines Volkes Israel.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Heiden", "Licht der Welt"]
  },
  {
    id: 29,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Eifer für das Haus Gottes.",
    ot_stelle: "Psalm 69,10",
    ot_text_kurz: "Denn der Eifer um dein Haus hat mich verzehrt.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Johannes 2,17",
    nt_text_kurz: "Da dachten seine Jünger daran, dass geschrieben steht: Der Eifer um dein Haus hat mich verzehrt.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Tempel", "Eifer"]
  },
  {
    id: 30,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Er heilt die, die zerbrochenen Herzens sind.",
    ot_stelle: "Jesaja 61,1",
    ot_text_kurz: "Der Geist des Herrn HERRN ist auf mir ... er hat mich gesandt, zu verbinden, die zerbrochenen Herzens sind.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Lukas 4,18",
    nt_text_kurz: "Der Geist des Herrn ist auf mir ... er hat mich gesandt, zu heilen, die zerbrochenen Herzens sind.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Heilung", "Trost"]
  },
  {
    id: 31,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Er ist sündlos und ohne Betrug.",
    ot_stelle: "Jesaja 53,9",
    ot_text_kurz: "...obwohl er kein Unrecht getan hat und kein Betrug in seinem Mund gewesen ist.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "1. Petrus 2,22",
    nt_text_kurz: "Er, der keine Sünde getan hat und in dessen Mund kein Betrug gefunden worden ist.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Heiligkeit", "Sündlosigkeit"]
  },
  {
    id: 5,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Einzug in Jerusalem auf einem Esel.",
    ot_stelle: "Sacharja 9,9",
    ot_text_kurz: "Juble laut, Tochter Zion! ... Siehe, dein König kommt zu dir ... demütig und reitet auf einem Esel.",
    ot_zeitraum: "ca. 520 v. Chr.",
    nt_stelle: "Matthäus 21,4-5",
    nt_text_kurz: "Sage der Tochter Zion: Siehe, dein König kommt zu dir sanftmütig und reitet auf einer Eselin...",
    quelle_links: [
      "https://www.youtube.com/watch?v=v_-Rupawa5M&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=8",
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"
    ],
    tags: ["Palmsonntag", "Einzug", "Demut"]
  },
  {
    id: 32,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Der Stein, den die Bauleute verwarfen.",
    ot_stelle: "Psalm 118,22",
    ot_text_kurz: "Der Stein, den die Bauleute verworfen haben, ist zum Eckstein geworden.",
    ot_zeitraum: "Unbekannt",
    nt_stelle: "Matthäus 21,42",
    nt_text_kurz: "Habt ihr noch nie in den Schriften gelesen: Der Stein, den die Bauleute verworfen haben...?",
    quelle_links: DEFAULT_LINKS,
    tags: ["Ablehnung", "Eckstein"]
  },
  {
    id: 33,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Von den Juden (seinem eigenen Volk) abgelehnt.",
    ot_stelle: "Jesaja 53,3",
    ot_text_kurz: "Verachtet war er und verlassen von den Menschen... wie einer, vor dem man das Angesicht verbirgt.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Johannes 1,11",
    nt_text_kurz: "Er kam in sein Eigentum, und die Seinen nahmen ihn nicht auf.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Ablehnung", "Israel"]
  },
  {
    id: 34,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Verrat durch einen engen Freund.",
    ot_stelle: "Psalm 41,10",
    ot_text_kurz: "Auch mein Freund, dem ich vertraute, der mein Brot aß, hat die Ferse gegen mich erhoben.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Johannes 13,18",
    nt_text_kurz: "...damit die Schrift erfüllt würde: Der mein Brot isst, hat die Ferse gegen mich erhoben.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Judas", "Verrat"]
  },
  {
    id: 35,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Verlassen von den Jüngern.",
    ot_stelle: "Sacharja 13,7",
    ot_text_kurz: "Schlage den Hirten, und die Schafe werden sich zerstreuen!",
    ot_zeitraum: "ca. 520 v. Chr.",
    nt_stelle: "Markus 14,50",
    nt_text_kurz: "Da verließen ihn alle und flohen.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Flucht", "Jünger"]
  },
  {
    id: 36,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Falsche Zeugen stehen gegen ihn auf.",
    ot_stelle: "Psalm 35,11",
    ot_text_kurz: "Es treten freche Zeugen auf; sie verhören mich über Dinge, von denen ich nichts weiß.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Matthäus 26,60",
    nt_text_kurz: "Und obwohl viele falsche Zeugen herzutraten, fanden sie nichts. Zuletzt aber traten zwei falsche Zeugen herzu.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Prozess", "Lüge"]
  },
  {
    id: 8,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Er schweigt vor seinen Anklägern.",
    ot_stelle: "Jesaja 53,7",
    ot_text_kurz: "Er wurde misshandelt, aber er beugte sich und tat seinen Mund nicht auf, wie ein Lamm, das zur Schlachtbank geführt wird.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 27,12-14",
    nt_text_kurz: "Und als er von den Hohenpriestern und Ältesten verklagt wurde, antwortete er nichts.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Schweigen", "Lamm Gottes", "Gericht"]
  },
  {
    id: 37,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Geschlagen und angespuckt.",
    ot_stelle: "Jesaja 50,6",
    ot_text_kurz: "Meinen Rücken bot ich denen dar, die mich schlugen, und meine Wangen denen, die mich rauften; mein Angesicht verbarg ich nicht vor Schmach und Speichel.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 26,67",
    nt_text_kurz: "Da spuckten sie ihm ins Angesicht und schlugen ihn mit Fäusten; andere aber gaben ihm Backenstreiche.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Misshandlung", "Spott"]
  },
  {
    id: 38,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Ohne Grund gehasst.",
    ot_stelle: "Psalm 69,5",
    ot_text_kurz: "Die mich ohne Ursache hassen, sind mehr als die Haare auf meinem Haupt.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Johannes 15,25",
    nt_text_kurz: "Doch das geschieht, damit das Wort erfüllt würde ... Sie haben mich ohne Grund gehasst.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Hass", "Ablehnung"]
  },
  {
    id: 39,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Unter Verbrecher gerechnet.",
    ot_stelle: "Jesaja 53,12",
    ot_text_kurz: "...weil er seine Seele in den Tod ausgeschüttet hat und den Übeltätern beigezählt wurde.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Markus 15,27-28",
    nt_text_kurz: "Und sie kreuzigten mit ihm zwei Räuber ... Da wurde die Schrift erfüllt, die spricht: Und er ist unter die Gesetzlosen gerechnet worden.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Kreuzigung", "Räuber"]
  },
  {
    id: 41,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Verspottet von den Zuschauern.",
    ot_stelle: "Psalm 22,8",
    ot_text_kurz: "Alle, die mich sehen, spotten über mich, sperren das Maul auf und schütteln den Kopf.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Matthäus 27,39",
    nt_text_kurz: "Die aber vorübergingen, lästerten ihn, schüttelten den Kopf und sprachen...",
    quelle_links: DEFAULT_LINKS,
    tags: ["Spott", "Kreuz"]
  },
  {
    id: 42,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Er betet für seine Feinde.",
    ot_stelle: "Jesaja 53,12",
    ot_text_kurz: "...er aber hat die Sünde vieler getragen und für die Übeltäter gebetet.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Lukas 23,34",
    nt_text_kurz: "Jesus aber sprach: Vater, vergib ihnen, denn sie wissen nicht, was sie tun!",
    quelle_links: DEFAULT_LINKS,
    tags: ["Vergebung", "Gebet"]
  },
  {
    id: 43,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Der Schrei der Verlassenheit.",
    ot_stelle: "Psalm 22,2",
    ot_text_kurz: "Mein Gott, mein Gott, warum hast du mich verlassen?",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Matthäus 27,46",
    nt_text_kurz: "Um die neunte Stunde aber schrie Jesus mit lauter Stimme ... Mein Gott, mein Gott, warum hast du mich verlassen?",
    quelle_links: DEFAULT_LINKS,
    tags: ["Gottverlassenheit", "Psalm 22"]
  },
  {
    id: 13,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Sie geben ihm Galle und Essig zu trinken.",
    ot_stelle: "Psalm 69,22",
    ot_text_kurz: "Und sie gaben mir Galle zur Speise und Essig zu trinken in meinem Durst.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Matthäus 27,34",
    nt_text_kurz: "Da gaben sie ihm Essig mit Galle vermischt zu trinken; und als er es kostete, wollte er nicht trinken.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Kreuzigung", "Durst"]
  },
  {
    id: 44,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Durst am Kreuz.",
    ot_stelle: "Psalm 22,16",
    ot_text_kurz: "Meine Kraft ist vertrocknet wie eine Scherbe, und meine Zunge klebt an meinem Gaumen.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Johannes 19,28",
    nt_text_kurz: "Danach, da Jesus wusste, dass alles schon vollbracht war, spricht er ...: Mich dürstet!",
    quelle_links: DEFAULT_LINKS,
    tags: ["Durst", "Menschlichkeit"]
  },
  {
    id: 14,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Dunkelheit am Tag.",
    ot_stelle: "Amos 8,9",
    ot_text_kurz: "Und es soll geschehen an jenem Tag ... da will ich die Sonne am Mittag untergehen lassen.",
    ot_zeitraum: "ca. 760 v. Chr.",
    nt_stelle: "Matthäus 27,45",
    nt_text_kurz: "Aber von der sechsten Stunde an kam eine Finsternis über das ganze Land bis zur neunten Stunde.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Finsternis", "Kreuzigung"]
  },
  {
    id: 46,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Stellvertretendes Opfer für unsere Sünden.",
    ot_stelle: "Jesaja 53,5",
    ot_text_kurz: "Doch er wurde um unserer Übertretungen willen durchbohrt, wegen unserer Missetaten zerschlagen.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Römer 5,8",
    nt_text_kurz: "Gott aber beweist seine Liebe zu uns dadurch, dass Christus für uns gestorben ist, als wir noch Sünder waren.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Sühne", "Evangelium"]
  },
  {
    id: 47,
    kategorie: ProphecyCategory.AUFERSTEHUNG,
    beschreibung: "Auferstehung am dritten Tag.",
    ot_stelle: "Jona 2,1",
    ot_text_kurz: "Und der HERR bestellte einen großen Fisch ... und Jona war im Bauch des Fisches drei Tage und drei Nächte.",
    ot_zeitraum: "ca. 760 v. Chr.",
    nt_stelle: "Matthäus 12,40",
    nt_text_kurz: "Denn wie Jona drei Tage und drei Nächte im Bauch des Walfisches war, so wird der Sohn des Menschen drei Tage und drei Nächte im Schoß der Erde sein.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Jona", "Drei Tage"]
  },
  {
    id: 15,
    kategorie: ProphecyCategory.AUFERSTEHUNG,
    beschreibung: "Himmelfahrt: Er ist aufgefahren in die Höhe.",
    ot_stelle: "Psalm 68,19",
    ot_text_kurz: "Du bist zur Höhe emporgestiegen, hast Gefangene weggeführt...",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Lukas 24,51",
    nt_text_kurz: "Und es geschah, indem er sie segnete, schied er von ihnen und wurde aufgehoben in den Himmel.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Himmelfahrt"]
  },
  {
    id: 48,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Sitz zur Rechten Gottes.",
    ot_stelle: "Psalm 110,1",
    ot_text_kurz: "Der HERR sprach zu meinem Herrn: Setze dich zu meiner Rechten, bis ich deine Feinde hinlege als Schemel für deine Füße.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Hebräer 1,3",
    nt_text_kurz: "...hat er sich gesetzt zur Rechten der Majestät in der Höhe.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Herrschaft", "Thron"]
  },
  {
    id: 49,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Er ist der Sohn Gottes.",
    ot_stelle: "Psalm 2,7",
    ot_text_kurz: "Der HERR hat zu mir gesprochen: Du bist mein Sohn, heute habe ich dich gezeugt.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Matthäus 3,17",
    nt_text_kurz: "Und siehe, eine Stimme aus dem Himmel sprach: Dies ist mein geliebter Sohn, an dem ich Wohlgefallen habe.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Sohnschaft", "Gott"]
  },
  {
    id: 50,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Priester für immer nach der Weise Melchisedeks.",
    ot_stelle: "Psalm 110,4",
    ot_text_kurz: "Der HERR hat geschworen ... Du bist Priester in Ewigkeit nach der Weise Melchisedeks.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Hebräer 5,6",
    nt_text_kurz: "Wie er auch an einer anderen Stelle spricht: Du bist Priester in Ewigkeit nach der Weise Melchisedeks.",
    quelle_links: DEFAULT_LINKS,
    tags: ["Hohepriester", "Melchisedek"]
  }
];