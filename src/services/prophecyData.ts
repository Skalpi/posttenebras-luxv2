import { Prophecy, ProphecyCategory } from '../types';

/* 
  Daten basierend auf den bereitgestellten Dokumenten.
  Aktualisiert gemäß Benutzeranfrage für Nr. 3 und Nr. 5.
  Alle Bibel-Links verweisen primär auf bibleserver.com.
*/

const DEFAULT_LINKS = [
  "https://www.bibleserver.com/SCH2000/Jesaja53",
  "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"
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
    kommentar: "Im Land Israel gab es zwei Ortschaften mit dem Namen Bethlehem: eines in Galiläa und eines in Judäa. Letzteres wurde zur Unterscheidung Bethlehem-Ephrata genannt.",
    quelle_links: [
      "https://www.bibleserver.com/SCH2000/Micha5%2C1",
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
    kommentar: "Das hebräische Wort 'Almah' bezeichnet eine junge Frau. Die Septuaginta (ca. 200 v. Chr.) übersetzt dies eindeutig mit 'Parthenos' (Jungfrau).",
    quelle_links: [
      "https://www.bibleserver.com/SCH2000/Jesaja7%2C14",
      "https://www.bibleserver.com/SCH2000/Matth%C3%A4us1%2C23"
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
    nt_stelle: "Lukas 3,23-38",
    nt_text_kurz: "Und er war, wie man meinte, ein Sohn des Joseph... des Aminadab, des Perez, des Juda...",
    nt_2_stelle: "Matthäus 1,1-3",
    nt_2_text_kurz: "Dies ist das Buch von der Geschichte Jesu Christi, des Sohnes Davids, des Sohnes Abrahams. Abraham zeugte Isaak. Isaak zeugte Jakob. Jakob zeugte Juda und seine Brüder. Juda zeugte Perez und Serach mit der Tamar …",
    kommentar: "Die nationale Identität Judas blieb erhalten, bis der Messias ('Schilo') kam. Kurz nach dem Auftreten Jesu wurde der jüdische Staat durch die Römer (70 n. Chr.) zerschlagen.",
    quelle_links: [
      "https://www.bibleserver.com/ELB/Lukas3%2C33",
      "https://www.bibleserver.com/SCH2000/1.Mose49%2C10"
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
    kommentar: "Paulus erklärt im Galaterbrief explizit, dass sich diese Verheißung auf einen ganz bestimmten Nachkommen bezog: den Messias.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/1.Mose22%2C18"],
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
    kommentar: "König Herodes ordnete den Kindermord an, um den neuen 'König der Juden' zu beseitigen. Jeremia sah diesen Schmerz prophetisch voraus.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Jeremia31%2C15"],
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
    kommentar: "Joseph und Maria flohen vor Herodes nach Ägypten und kehrten erst nach dessen Tod zurück, womit sich die Prophetie erfüllte.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Hosea11%2C1"],
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
    kommentar: "Johannes der Täufer erfüllte exakt die Rolle des Wegbereiters, der das Volk auf das Kommen Jesu vorbereitete.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Jesaja40%2C3"],
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
    kommentar: "Galiläa war ein verachteter Landstrich, doch genau dort begann der Messias sein Wirken und brachte das 'große Licht'.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Jesaja9%2C1"],
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
    kommentar: "Jesus legitimierte sich durch diese Wunder als der verheißene Messias.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Jesaja35%2C5"],
    tags: ["Wunder", "Heilung", "Jesaja"]
  },

  // --- EINZUG & KÖNIGTUM ---
  {
    id: 5,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Einzug in Jerusalem auf einem Esel.",
    ot_stelle: "Sacharja 9,9",
    ot_text_kurz: "Juble laut, Tochter Zion! ... Siehe, dein König kommt zu dir ... demütig und reitet auf einem Esel.",
    ot_zeitraum: "ca. 520 v. Chr.",
    nt_stelle: "Lukas 19,29-35",
    nt_text_kurz: "Und sie brachten es zu Jesus und warfen ihre Kleider auf das Füllen und setzten Jesus darauf.",
    nt_2_stelle: "Mk 1,10; Lk 4,14; Lk 4,18",
    nt_2_text_kurz: "Und alsbald, als er aus dem Wasser stieg, sah er, dass sich der Himmel auftat und der Geist wie eine Taube auf ihn herabfuhr. (Markus 1,10) ... Und Jesus kehrte in der Kraft des Geistes zurück nach Galiläa… (Lukas 4,14) ... Der Geist des Herrn ist auf mir, weil er mich gesalbt hat… (Lukas 4,18)",
    kommentar: "Der Einzug auf einem Esel symbolisiert den demütigen, friedfertigen König. Die Salbung durch den Heiligen Geist bestätigt seine messianische Identität.",
    quelle_links: [
      "https://www.bibleserver.com/SCH2000/Lukas19%2C35",
      "https://www.bibleserver.com/SCH2000/Sacharja9%2C9"
    ],
    tags: ["Palmsonntag", "Einzug", "Demut", "Salbung"]
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
    kommentar: "30 Silberlinge waren damals der Preis für einen Sklaven (2. Mose 21,32).",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Sacharja11%2C12"],
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
    kommentar: "Die Präzision ist erstaunlich: Die Summe, der Ort (Tempel) und der Verwendungszweck (Töpferacker) wurden exakt erfüllt.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Matth%C3%A4us27%2C7"],
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
    kommentar: "Psalm 22 beschreibt eine Hinrichtung durch Kreuzigung lange bevor diese Strafe durch die Römer eingeführt wurde.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Psalm22%2C17"],
    tags: ["Kreuzigung", "Psalm 22", "David"]
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
    kommentar: "Es war üblich, den Gekreuzigten die Beine zu brechen. Da Jesus bereits tot war, unterblieb dies (Erfüllung des Passahlamm-Typos).",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Johannes19%2C33"],
    tags: ["Passahlamm", "Kreuzigung", "Typologie"]
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
    kommentar: "Petrus erklärt an Pfingsten, dass David hier vom Messias sprach, der nicht im Grab verwesen würde.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Psalm16%2C10"],
    tags: ["Auferstehung", "Sieg", "David", "Petrus"]
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
    quelle_links: ["https://www.bibleserver.com/SCH2000/Jesaja11%2C1"],
    tags: ["David", "Königtum"]
  },
  {
    id: 23,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Der Geist der Weisheit und Stärke ruht auf ihm.",
    ot_stelle: "Jesaja 11,2",
    ot_text_kurz: "Auf ihm wird ruhen der Geist des HERRN, der Geist der Weisheit und des Verstandes...",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Lukas 4,18",
    nt_text_kurz: "Der Geist des Herrn ist auf mir, weil er mich gesalbt hat, den Armen das Evangelium zu verkünden...",
    nt_2_stelle: "Markus 1,10",
    nt_2_text_kurz: "Und alsbald, als er aus dem Wasser stieg, sah er, dass sich der Himmel auftat und der Geist wie eine Taube auf ihn herabfuhr.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Lukas4%2C18"],
    tags: ["Weisheit", "Heiliger Geist", "Salbung"]
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
    quelle_links: ["https://www.bibleserver.com/SCH2000/Psalm78%2C2"],
    tags: ["Lehre", "Gleichnisse"]
  }
];