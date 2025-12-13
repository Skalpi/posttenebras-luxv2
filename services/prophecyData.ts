import { Prophecy, ProphecyCategory } from '../types';

/* 
  HINWEIS ZUR ERWEITERUNG:
  Diese Datei enthält nun ca. 50 Prophetien inkl. Datierung.
  Datierungen basieren auf konservativer bibeltreuer Einleitungswissenschaft.
*/

export const prophecies: Prophecy[] = [
  // --- HERKUNFT & GEBURT ---
  {
    id: 1,
    kategorie: ProphecyCategory.GEBURT,
    beschreibung: "Der Messias wird in Bethlehem Efrata geboren werden.",
    ot_stelle: "Micha 5,1",
    ot_text_kurz: "Und du, Bethlehem Efrata ... aus dir wird mir der hervorgehen, der Herrscher über Israel sein soll.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 2,1",
    nt_text_kurz: "Als nun Jesus geboren war in Bethlehem in Judäa, in den Tagen des Königs Herodes...",
    quelle_links: [
      "https://www.youtube.com/watch?v=_y56S4IUCdQ",
      "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"
    ],
    tags: ["Messias", "Geburt", "Ort"]
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
    quelle_links: [
      "https://www.youtube.com/watch?v=qNq2x6VkEq8&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=3"
    ],
    tags: ["Jungfrauengeburt", "Immanuel"]
  },
  {
    id: 3,
    kategorie: ProphecyCategory.HERKUNFT,
    beschreibung: "Er stammt aus dem Stamm Juda.",
    ot_stelle: "1. Mose 49,10",
    ot_text_kurz: "Das Zepter wird nicht von Juda weichen ... bis der Schilo kommt, dem der Gehorsam der Völker gebührt.",
    ot_zeitraum: "ca. 1400 v. Chr. (Zeit Mose)",
    nt_stelle: "Lukas 3,33",
    nt_text_kurz: "...der war ein Sohn des Aminadab, der war ein Sohn des Aram, der war ein Sohn des Hezron, der war ein Sohn des Perez, der war ein Sohn des Juda.",
    quelle_links: [],
    tags: ["Stammbaum", "Juda"]
  },
  {
    id: 16,
    kategorie: ProphecyCategory.HERKUNFT,
    beschreibung: "Nachkomme Abrahams: Durch ihn sollen alle Völker gesegnet werden.",
    ot_stelle: "1. Mose 22,18",
    ot_text_kurz: "Und in deinem Samen sollen alle Völker der Erde gesegnet werden, weil du meiner Stimme gehorcht hast.",
    ot_zeitraum: "ca. 1400 v. Chr. (Zeit Mose)",
    nt_stelle: "Apostelgeschichte 3,25",
    nt_text_kurz: "...in deinem Samen sollen gesegnet werden alle Geschlechter der Erde.",
    quelle_links: [],
    tags: ["Abraham", "Segen", "Bund"]
  },
  {
    id: 17,
    kategorie: ProphecyCategory.HERKUNFT,
    beschreibung: "Nachkomme Isaaks: Der Bund wird über Isaak fortgeführt.",
    ot_stelle: "1. Mose 17,19",
    ot_text_kurz: "Nein, sondern Sara, deine Frau, soll dir einen Sohn gebären ... und ich werde meinen Bund mit ihm aufrichten.",
    ot_zeitraum: "ca. 1400 v. Chr. (Zeit Mose)",
    nt_stelle: "Matthäus 1,2",
    nt_text_kurz: "Abraham zeugte den Isaak, Isaak zeugte den Jakob...",
    quelle_links: [],
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
    quelle_links: [],
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
    quelle_links: [],
    tags: ["David", "Königtum"]
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
    quelle_links: [],
    tags: ["Herodes", "Leid", "Bethlehem"]
  },
  {
    id: 21,
    kategorie: ProphecyCategory.GEBURT,
    beschreibung: "Der Messias wird aus Ägypten gerufen.",
    ot_stelle: "Hosea 11,1",
    ot_text_kurz: "Als Israel jung war, gewann ich es lieb, und aus Ägypten habe ich meinen Sohn gerufen.",
    ot_zeitraum: "ca. 750 v. Chr.",
    nt_stelle: "Matthäus 2,15",
    nt_text_kurz: "...damit erfüllt würde, was der Herr durch den Propheten geredet hat: Aus Ägypten habe ich meinen Sohn gerufen.",
    quelle_links: [],
    tags: ["Flucht", "Ägypten"]
  },
  {
    id: 22,
    kategorie: ProphecyCategory.GEBURT,
    beschreibung: "Anbetung und Geschenke von Königen.",
    ot_stelle: "Psalm 72,10",
    ot_text_kurz: "Die Könige von Tarsis und von den Inseln sollen Geschenke bringen... alle Könige sollen ihn anbeten.",
    ot_zeitraum: "ca. 950 v. Chr. (Salomo)",
    nt_stelle: "Matthäus 2,11",
    nt_text_kurz: "Da taten sie ihre Schätze auf und schenkten ihm Gold, Weihrauch und Myrrhe.",
    quelle_links: [],
    tags: ["Weise", "Geschenke", "Anbetung"]
  },

  // --- LEBEN & DIENST ---
  {
    id: 4,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Dem Messias wird ein Wegbereiter vorausgehen.",
    ot_stelle: "Jesaja 40,3",
    ot_text_kurz: "Die Stimme eines Rufenden ertönt: In der Wüste bereitet den Weg des HERRN!",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 3,3",
    nt_text_kurz: "Das ist der, von welchem durch den Propheten Jesaja gesagt ist: Eine Stimme ruft in der Wüste...",
    quelle_links: ["https://www.youtube.com/watch?v=mf7C57RtfpA"],
    tags: ["Wegbereiter", "Wüste", "Johannes der Täufer"]
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
    quelle_links: [],
    tags: ["Weisheit", "Heiliger Geist"]
  },
  {
    id: 24,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Dienst in Galiläa (Land Sebulon/Naphtali).",
    ot_stelle: "Jesaja 8,23",
    ot_text_kurz: "...wie er in der früheren Zeit das Land Sebulon gering gemacht hat, so wird er in der künftigen Zeit das Land am See zu Ehren bringen.",
    ot_zeitraum: "ca. 735 v. Chr.",
    nt_stelle: "Matthäus 4,12-15",
    nt_text_kurz: "Als Jesus hörte, dass Johannes gefangen gesetzt war, entwich er nach Galiläa ... das Land Sebulon und das Land Naphtali.",
    quelle_links: [],
    tags: ["Galiläa", "Licht"]
  },
  {
    id: 25,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Er wirkt Wunder: Blinde sehen, Taube hören.",
    ot_stelle: "Jesaja 35,5-6",
    ot_text_kurz: "Dann werden die Augen der Blinden aufgetan und die Ohren der Tauben geöffnet werden.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Matthäus 11,5",
    nt_text_kurz: "Blinde sehen und Lahme gehen, Aussätzige werden rein und Taube hören...",
    quelle_links: [],
    tags: ["Wunder", "Heilung"]
  },
  {
    id: 26,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Er predigt in Gleichnissen.",
    ot_stelle: "Psalm 78,2",
    ot_text_kurz: "Ich will meinen Mund auftun in Gleichnissen, will Rätsel verkünden aus der Vorzeit.",
    ot_zeitraum: "ca. 1000 v. Chr. (Asaph)",
    nt_stelle: "Matthäus 13,34-35",
    nt_text_kurz: "Dies alles redete Jesus in Gleichnissen zur Volksmenge ... damit erfüllt würde, was durch den Propheten geredet ist.",
    quelle_links: [],
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
    quelle_links: [],
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
    quelle_links: [],
    tags: ["Heiden", "Licht der Welt"]
  },
  {
    id: 29,
    kategorie: ProphecyCategory.DIENST,
    beschreibung: "Eifer für das Haus Gottes (Tempelreinigung).",
    ot_stelle: "Psalm 69,10",
    ot_text_kurz: "Denn der Eifer um dein Haus hat mich verzehrt.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Johannes 2,17",
    nt_text_kurz: "Da dachten seine Jünger daran, dass geschrieben steht: Der Eifer um dein Haus hat mich verzehrt.",
    quelle_links: [],
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
    quelle_links: [],
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
    quelle_links: [],
    tags: ["Heiligkeit", "Sündlosigkeit"]
  },
  
  // --- EINZUG, LEIDEN & VERRAT ---
  {
    id: 5,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Einzug in Jerusalem auf einem Esel.",
    ot_stelle: "Sacharja 9,9",
    ot_text_kurz: "Juble laut, Tochter Zion! ... Siehe, dein König kommt zu dir ... demütig und reitet auf einem Esel.",
    ot_zeitraum: "ca. 520 v. Chr.",
    nt_stelle: "Matthäus 21,4-5",
    nt_text_kurz: "Sage der Tochter Zion: Siehe, dein König kommt zu dir sanftmütig und reitet auf einer Eselin...",
    quelle_links: ["https://www.youtube.com/watch?v=v_-Rupawa5M&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=8"],
    tags: ["Palmsonntag", "Einzug", "Demut"]
  },
  {
    id: 32,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Der Stein, den die Bauleute verwarfen.",
    ot_stelle: "Psalm 118,22",
    ot_text_kurz: "Der Stein, den die Bauleute verworfen haben, ist zum Eckstein geworden.",
    ot_zeitraum: "Unbekannt (nachexilisch)",
    nt_stelle: "Matthäus 21,42",
    nt_text_kurz: "Habt ihr noch nie in den Schriften gelesen: Der Stein, den die Bauleute verworfen haben...?",
    quelle_links: [],
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
    quelle_links: [],
    tags: ["Ablehnung", "Israel"]
  },
  {
    id: 34,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Verrat durch einen engen Freund.",
    ot_stelle: "Psalm 41,10",
    ot_text_kurz: "Auch mein Freund, dem ich vertraute, der mein Brot aß, hat die Ferse gegen mich erhoben.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Johannes 13,18",
    nt_text_kurz: "...damit die Schrift erfüllt würde: Der mein Brot isst, hat die Ferse gegen mich erhoben.",
    quelle_links: [],
    tags: ["Judas", "Verrat"]
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
    quelle_links: [],
    tags: ["Judas", "Verrat", "Silber"]
  },
  {
    id: 7,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Das Geld wird dem Töpfer hingeworfen.",
    ot_stelle: "Sacharja 11,13",
    ot_text_kurz: "Und ich nahm die 30 Silberlinge und warf sie ins Haus des HERRN für den Töpfer.",
    ot_zeitraum: "ca. 520 v. Chr.",
    nt_stelle: "Matthäus 27,7",
    nt_text_kurz: "Sie hielten aber Rat und kauften dafür den Acker des Töpfers als Begräbnisstätte für die Fremden.",
    quelle_links: ["https://www.youtube.com/watch?v=1_Mx6q6dPg8&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=11"],
    tags: ["Blutacker", "Töpfer"]
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
    quelle_links: [],
    tags: ["Flucht", "Jünger"]
  },
  {
    id: 36,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Falsche Zeugen stehen gegen ihn auf.",
    ot_stelle: "Psalm 35,11",
    ot_text_kurz: "Es treten freche Zeugen auf; sie verhören mich über Dinge, von denen ich nichts weiß.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Matthäus 26,60",
    nt_text_kurz: "Und obwohl viele falsche Zeugen herzutraten, fanden sie nichts. Zuletzt aber traten zwei falsche Zeugen herzu.",
    quelle_links: [],
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
    quelle_links: [],
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
    quelle_links: [],
    tags: ["Misshandlung", "Spott"]
  },
  {
    id: 38,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Ohne Grund gehasst.",
    ot_stelle: "Psalm 69,5",
    ot_text_kurz: "Die mich ohne Ursache hassen, sind mehr als die Haare auf meinem Haupt.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Johannes 15,25",
    nt_text_kurz: "Doch das geschieht, damit das Wort erfüllt würde ... Sie haben mich ohne Grund gehasst.",
    quelle_links: [],
    tags: ["Hass", "Ablehnung"]
  },

  // --- TOD & KREUZIGUNG ---
  {
    id: 9,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Hände und Füße durchgraben (Kreuzigung).",
    ot_stelle: "Psalm 22,17",
    ot_text_kurz: "Denn Hunde haben mich umgeben, eine Rotte von Übeltätern hat mich umzingelt; sie haben meine Hände und meine Füße durchgraben.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Lukas 23,33",
    nt_text_kurz: "Und als sie an den Ort kamen, den man Schädelstätte nennt, kreuzigten sie dort ihn und die Übeltäter.",
    quelle_links: ["https://www.youtube.com/watch?v=fHejfjzldOg&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=6"],
    tags: ["Kreuzigung", "Psalm 22"]
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
    quelle_links: [],
    tags: ["Kreuzigung", "Räuber"]
  },
  {
    id: 40,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Sie würfeln um seine Kleider.",
    ot_stelle: "Psalm 22,19",
    ot_text_kurz: "Sie teilen meine Kleider unter sich und werfen das Los über mein Gewand.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Johannes 19,24",
    nt_text_kurz: "Lasst uns es nicht zertrennen, sondern darum losen, wem es gehören soll.",
    quelle_links: [],
    tags: ["Kleider", "Soldaten"]
  },
  {
    id: 41,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Verspottet von den Zuschauern.",
    ot_stelle: "Psalm 22,8",
    ot_text_kurz: "Alle, die mich sehen, spotten über mich, sperren das Maul auf und schütteln den Kopf.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Matthäus 27,39",
    nt_text_kurz: "Die aber vorübergingen, lästerten ihn, schüttelten den Kopf und sprachen...",
    quelle_links: [],
    tags: ["Spott", "Kreuz"]
  },
  {
    id: 42,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Er betet für seine Feinde.",
    ot_stelle: "Jesaja 53,12 (vgl. Ps 109,4)",
    ot_text_kurz: "...er aber hat die Sünde vieler getragen und für die Übeltäter gebetet.",
    ot_zeitraum: "ca. 700 v. Chr.",
    nt_stelle: "Lukas 23,34",
    nt_text_kurz: "Jesus aber sprach: Vater, vergib ihnen, denn sie wissen nicht, was sie tun!",
    quelle_links: [],
    tags: ["Vergebung", "Gebet"]
  },
  {
    id: 43,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Der Schrei der Verlassenheit.",
    ot_stelle: "Psalm 22,2",
    ot_text_kurz: "Mein Gott, mein Gott, warum hast du mich verlassen?",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Matthäus 27,46",
    nt_text_kurz: "Um die neunte Stunde aber schrie Jesus mit lauter Stimme ... Mein Gott, mein Gott, warum hast du mich verlassen?",
    quelle_links: [],
    tags: ["Gottverlassenheit", "Psalm 22"]
  },
  {
    id: 13,
    kategorie: ProphecyCategory.LEIDEN,
    beschreibung: "Sie geben ihm Galle und Essig zu trinken.",
    ot_stelle: "Psalm 69,22",
    ot_text_kurz: "Und sie gaben mir Galle zur Speise und Essig zu trinken in meinem Durst.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Matthäus 27,34",
    nt_text_kurz: "Da gaben sie ihm Essig mit Galle vermischt zu trinken; und als er es kostete, wollte er nicht trinken.",
    quelle_links: [],
    tags: ["Kreuzigung", "Durst"]
  },
  {
    id: 44,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Durst am Kreuz.",
    ot_stelle: "Psalm 22,16",
    ot_text_kurz: "Meine Kraft ist vertrocknet wie eine Scherbe, und meine Zunge klebt an meinem Gaumen.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Johannes 19,28",
    nt_text_kurz: "Danach, da Jesus wusste, dass alles schon vollbracht war, spricht er ...: Mich dürstet!",
    quelle_links: [],
    tags: ["Durst", "Menschlichkeit"]
  },
  {
    id: 11,
    kategorie: ProphecyCategory.TOD,
    beschreibung: "Kein Knochen soll ihm zerbrochen werden.",
    ot_stelle: "Psalm 34,21",
    ot_text_kurz: "Er bewahrt ihm alle seine Gebeine, nicht eines von ihnen wird zerbrochen.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Johannes 19,33",
    nt_text_kurz: "Als sie aber zu Jesus kamen und sahen, dass er schon gestorben war, zerschlugen sie ihm die Beine nicht.",
    quelle_links: ["https://www.bibellesebund.ch/files/content/Medienbereich/BLB_Arbeitsmaterial_Erfuellte_Prophetien_auf_Jesus.pdf"],
    tags: ["Passahlamm", "Kreuzigung"]
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
    quelle_links: [],
    tags: ["Lanze", "Blut und Wasser"]
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
    quelle_links: [],
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
    quelle_links: [],
    tags: ["Sühne", "Evangelium"]
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
    quelle_links: [],
    tags: ["Begräbnis", "Joseph von Arimathäa"]
  },

  // --- AUFERSTEHUNG & HERRLICHKEIT ---
  {
    id: 12,
    kategorie: ProphecyCategory.AUFERSTEHUNG,
    beschreibung: "Er wird nicht im Tod bleiben (Auferstehung).",
    ot_stelle: "Psalm 16,10",
    ot_text_kurz: "Denn du wirst meine Seele nicht dem Totenreich preisgeben und nicht zulassen, dass dein Getreuer die Verwesung sieht.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Apostelgeschichte 2,31",
    nt_text_kurz: "Hat er vorausschauend von der Auferstehung des Christus geredet, dass seine Seele nicht dem Totenreich preisgegeben wurde.",
    quelle_links: ["https://www.youtube.com/watch?v=1VJXNmj6Okc&list=PLuTOWnFpYJ0lGYINhcvTiL67y22AuukS9&index=12"],
    tags: ["Auferstehung", "Sieg"]
  },
  {
    id: 47,
    kategorie: ProphecyCategory.AUFERSTEHUNG,
    beschreibung: "Auferstehung am dritten Tag.",
    ot_stelle: "Jona 2,1 (vgl. Hos 6,2)",
    ot_text_kurz: "Und der HERR bestellte einen großen Fisch ... und Jona war im Bauch des Fisches drei Tage und drei Nächte.",
    ot_zeitraum: "ca. 760 v. Chr.",
    nt_stelle: "Matthäus 12,40",
    nt_text_kurz: "Denn wie Jona drei Tage und drei Nächte im Bauch des Walfisches war, so wird der Sohn des Menschen drei Tage und drei Nächte im Schoß der Erde sein.",
    quelle_links: [],
    tags: ["Jona", "Drei Tage"]
  },
  {
    id: 15,
    kategorie: ProphecyCategory.AUFERSTEHUNG,
    beschreibung: "Himmelfahrt: Er ist aufgefahren in die Höhe.",
    ot_stelle: "Psalm 68,19",
    ot_text_kurz: "Du bist zur Höhe emporgestiegen, hast Gefangene weggeführt...",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Lukas 24,51",
    nt_text_kurz: "Und es geschah, indem er sie segnete, schied er von ihnen und wurde aufgehoben in den Himmel.",
    quelle_links: [],
    tags: ["Himmelfahrt"]
  },
  {
    id: 48,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Sitz zur Rechten Gottes.",
    ot_stelle: "Psalm 110,1",
    ot_text_kurz: "Der HERR sprach zu meinem Herrn: Setze dich zu meiner Rechten, bis ich deine Feinde hinlege als Schemel für deine Füße.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Hebräer 1,3",
    nt_text_kurz: "...hat er sich gesetzt zur Rechten der Majestät in der Höhe.",
    quelle_links: [],
    tags: ["Herrschaft", "Thron"]
  },
  {
    id: 49,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Er ist der Sohn Gottes.",
    ot_stelle: "Psalm 2,7",
    ot_text_kurz: "Der HERR hat zu mir gesprochen: Du bist mein Sohn, heute habe ich dich gezeugt.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Matthäus 3,17",
    nt_text_kurz: "Und siehe, eine Stimme aus dem Himmel sprach: Dies ist mein geliebter Sohn, an dem ich Wohlgefallen habe.",
    quelle_links: [],
    tags: ["Sohnschaft", "Gott"]
  },
  {
    id: 50,
    kategorie: ProphecyCategory.KOENIGTUM,
    beschreibung: "Priester für immer nach der Weise Melchisedeks.",
    ot_stelle: "Psalm 110,4",
    ot_text_kurz: "Der HERR hat geschworen ... Du bist Priester in Ewigkeit nach der Weise Melchisedeks.",
    ot_zeitraum: "ca. 1000 v. Chr. (David)",
    nt_stelle: "Hebräer 5,6",
    nt_text_kurz: "Wie er auch an einer anderen Stelle spricht: Du bist Priester in Ewigkeit nach der Weise Melchisedeks.",
    quelle_links: [],
    tags: ["Hohepriester", "Melchisedek"]
  }
];