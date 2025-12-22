import { Prophecy, ProphecyCategory } from '../types';

/* 
  Messianische Prophetien - Datenquelle
  Aktualisiert gemäß Benutzeranforderung:
  - Nr. 3: Stammbaum-Details und spezifische Links (ELB Version für Lk 3,33)
  - Nr. 5: Einzug auf dem Esel, NT Text angepasst, Textstelle 2 entfernt
  - Nr. 23: Erweiterte NT-Zitate zum Heiligen Geist
  - Alle: Theologischer Kontext ergänzt
  - Links: Einheitlich bibleserver.com
*/

export const prophecies: Prophecy[] = [
  {
    id: 1,
    kategorie: ProphecyCategory.GEBURT,
    beschreibung: "Der Messias wird in Bethlehem Efrata geboren werden.",
    ot_stelle: "Micha 5,1",
    ot_text_kurz: "Und du, Bethlehem-Ephrata, zu klein, um unter den Tausenden von Juda zu sein, aus dir wird mir hervorkommen, der Herrscher über Israel sein soll.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 2,1",
    nt_text_kurz: "Als aber Jesus zu Bethlehem in Judäa geboren war, in den Tagen Herodes', des Königs...",
    kommentar: "Die Präzision dieser Prophezeiung ist bemerkenswert: Es gab zwei Orte namens Bethlehem. Micha spezifiziert 'Efrata' (in Judäa), um jeden Zweifel auszuschließen. Dies zeigt, dass Gott den genauen Ort des Heilsplans bereits Jahrhunderte zuvor festlegte.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Micha5%2C1", "https://www.bibleserver.com/SCH2000/Matth%C3%A4us2%2C1"],
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
    kommentar: "Die Jungfrauengeburt ist das göttliche Siegel auf der Menschwerdung Christi. Sie bewirkt, dass Jesus ohne die Erbsünde Adams geboren wurde und somit als sündloses Opferlamm für die Menschheit eintreten konnte. Das Zeichen 'Immanuel' bedeutet: Gott ist mit uns.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Jesaja7%2C14", "https://www.bibleserver.com/SCH2000/Matth%C3%A4us1%2C23"],
    tags: ["Jungfrauengeburt", "Immanuel", "Jesaja"]
  },
  {
    id: 3,
    kategorie: ProphecyCategory.HERKUNFT,
    beschreibung: "Er stammt aus dem Stamm Juda.",
    ot_stelle: "1. Mose 49,10",
    ot_text_kurz: "Nicht weichen wird das Zepter von Juda, noch ein Herrscherstab zwischen seinen Füßen hinweg, bis dass Schilo kommt, und ihm werden die Völker gehorchen.",
    ot_zeitraum: "ca. 1600 v. Chr.",
    nt_stelle: "Lukas 3,23-38",
    nt_text_kurz: "Und er war, wie man meinte, ein Sohn des Joseph... des Aminadab, des Perez, des Juda...",
    nt_2_stelle: "Matthäus 1,1-3",
    nt_2_text_kurz: "Dies ist das Buch von der Geschichte Jesu Christi, des Sohnes Davids, des Sohnes Abrahams. Abraham zeugte Isaak. Isaak zeugte Jakob. Jakob zeugte Juda und seine Brüder. Juda zeugte Perez und Serach mit der Tamar …",
    kommentar: "Die Abstammung aus Juda bestätigt das königliche Anrecht des Messias. Der Titel 'Löwe aus dem Stamm Juda' weist auf seine kommende Herrschaft hin. Die Evangelien dokumentieren akribisch seine biologische (Lukas) und rechtliche (Matthäus) Linie.",
    quelle_links: ["https://www.bibleserver.com/ELB/Lukas3%2C33", "https://www.bibleserver.com/SCH2000/Matth%C3%A4us1%2C1-3"],
    tags: ["Stammbaum", "Juda", "Jakob", "Schilo"]
  },
  {
    id: 5,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Einzug in Jerusalem auf einem Esel.",
    ot_stelle: "Sacharja 9,9",
    ot_text_kurz: "Juble laut, Tochter Zion! ... Siehe, dein König kommt zu dir ... demütig und reitet auf einem Esel.",
    ot_zeitraum: "ca. 520 v. Chr.",
    nt_stelle: "Lukas 19,29-35",
    nt_text_kurz: "Und sie brachten es zu Jesus und warfen ihre Kleider auf das Füllen und setzten Jesus darauf.",
    kommentar: "Während weltliche Herrscher auf Schlachtrossen einziehen, wählt der Messias ein Lasttier, das Symbol des Friedens und der Demut. Dies unterstreicht, dass sein Reich nicht von dieser Welt ist, sondern ein Reich der Sanftmut und Versöhnung.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Sacharja9%2C9", "https://www.bibleserver.com/SCH2000/Lukas19%2C29-35"],
    tags: ["Palmsonntag", "Einzug", "Demut", "König"]
  },
  {
    id: 23,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Der Geist der Weisheit und Stärke ruht auf ihm.",
    ot_stelle: "Jesaja 11,2",
    ot_text_kurz: "Auf ihm wird ruhen der Geist des HERRN, der Geist der Weisheit und des Verstandes, der Geist des Rats und der Stärke...",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Lukas 4,18",
    nt_text_kurz: "Der Geist des Herrn ist auf mir, weil er mich gesalbt hat, den Armen das Evangelium zu verkünden...",
    nt_2_stelle: "Mk 1,10; Lk 4,14; Lk 4,18",
    nt_2_text_kurz: "Und alsbald, als er aus dem Wasser stieg, sah er, dass sich der Himmel auftat und der Geist wie eine Taube auf ihn herabfuhr. (Markus 1,10) und „Und Jesus kehrte in der Kraft des Geistes zurück nach Galiläa…“ (Lukas 4,14) Und er liest über sich selbst: „Der Geist des Herrn ist auf mir, weil er mich gesalbt hat…“ (Lukas 4,18; vgl. Jesaja 61,1)",
    kommentar: "Die Salbung durch den Heiligen Geist ist die offizielle Bevollmächtigung für das messianische Amt. In Jesus wirken die Gaben des Geistes in ihrer vollkommenen Fülle, was sich in seiner Lehre, seinen Wundern und seinem unerschütterlichen Rat zeigt.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Jesaja11%2C2", "https://www.bibleserver.com/SCH2000/Lukas4%2C18"],
    tags: ["Weisheit", "Heiliger Geist", "Salbung", "Jesaja"]
  },
  {
    id: 9,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Hände und Füße durchgraben (Kreuzigung).",
    ot_stelle: "Psalm 22,17",
    ot_text_kurz: "Sie haben meine Hände und meine Füße durchgraben.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Johannes 19,18",
    nt_text_kurz: "Wo sie ihn kreuzigten und zwei andere mit ihm...",
    kommentar: "Die Kreuzigung als Todesart war zur Zeit Davids in Israel völlig unbekannt. Die detaillierte Beschreibung der durchbohrten Hände und Füße ist eine prophetische Vorausschau auf die römische Hinrichtungsmethode und bestätigt Jesus als den Leidenden Knecht.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Psalm22%2C17", "https://www.bibleserver.com/SCH2000/Johannes19%2C18"],
    tags: ["Kreuzigung", "Leiden", "Psalm 22"]
  },
  {
    id: 12,
    kategorie: ProphecyCategory.AUFERSTEHUNG,
    beschreibung: "Er wird nicht im Tod bleiben (Auferstehung).",
    ot_stelle: "Psalm 16,10",
    ot_text_kurz: "Denn du wirst meine Seele nicht dem Totenreich preisgeben und nicht zulassen, dass dein Getreuer die Verwesung sieht.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Apostelgeschichte 2,31",
    nt_text_kurz: "Hat er vorausschauend von der Auferstehung des Christus geredet...",
    kommentar: "Die Auferstehung ist der ultimative Sieg über Sünde und Tod. David spricht hier als Prophet über den einen Nachkommen, dessen Körper die biologische Verwesung nicht erfahren würde – Jesus Christus, der Erstling der Entschlafenen.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Psalm16%2C10", "https://www.bibleserver.com/SCH2000/Apostelgeschichte2%2C31"],
    tags: ["Auferstehung", "Sieg", "Tod"]
  },
  {
    id: 11,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Kein Knochen soll ihm zerbrochen werden.",
    ot_stelle: "Psalm 34,21",
    ot_text_kurz: "Er bewahrt ihm alle seine Gebeine, nicht eines von ihnen wird zerbrochen.",
    ot_2_stelle: "2. Mose 12,46",
    ot_2_text_kurz: "Ihr sollt keinen Knochen an ihm (dem Passahlamm) zerbrechen.",
    ot_zeitraum: "ca. 1000 v. Chr.",
    nt_stelle: "Johannes 19,32-33",
    nt_text_kurz: "Da kamen die Soldaten und brachen dem ersten die Beine... Als sie aber zu Jesus kamen ... zerschlugen sie ihm die Beine nicht.",
    kommentar: "Jesus als das wahre Passahlamm erfüllt die rituellen Anforderungen des Alten Bundes. Dass die Soldaten entgegen der Routine seine Beine nicht brachen, bewahrte die Integrität des göttlichen Zeugnisses über das perfekte Opfer.",
    quelle_links: ["https://www.bibleserver.com/SCH2000/Psalm34%2C21", "https://www.bibleserver.com/SCH2000/Johannes19%2C33"],
    tags: ["Passahlamm", "Opfer", "Präzision"]
  }
];