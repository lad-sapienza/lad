---
title: Codifica digitale della cronologia
autore: Julian Bogdani
licenza: CC BY 4.0 International
livello: avanzato
sezione: riflessioni a appunti
img: './b-dus-db.png'
date: 01 Feb 2020
---

## Introduzione

La rappresentazione, codifica e ricerca del dato cronologico (datazione) è sicuramente uno degli aspetti più delicati nella progettazione di un banca dati che contenga dati storici, archeologici, museali e simili. Il problema principale consiste nel trovare una maniera **sintetica**, **rigorosa** ed **efficiente** per rappresentare date puntuali e/o intervalli di date e che siano in grado si rappresentare in maniera dinamica i concetti di **approssimazione** e **incertezza**.

Prima di procedere con qualche esempio che potrebbe aiutare a meglio focalizzare la questione, proviamo a definire meglio alcuni concetti fondamentali appena elencati:

- con **sintentico** si intende la necessità si restringere il più possibile il numero di campi del database che useremo per codificare l'informazione e, soprattutto, ridurre per quanto possibile la ridondanza dell'informazione, ovvero la sua ripetizione anche se in forme diverse;
- con **rigoroso** si intendono sintassi di codifica che non siano ambigui e che non possano lasciare spazio a interpretazioni diverse dello stesso dato o viceversa non usare etichette testuali diverse per rappresentare lo stesso concetto. Solo a mero titolo esemplificativo “ca. 31 a.C.”, “c. 31 a.C.”, “appross. 31 a.C.” sono tutte forme diverse per rappresentare la stessa informazione;
- con **efficiente** si intende la facilità e velocità di validare l'infrmazione immessa e soprattutto di ricercarla, e quindi estrarrla dalla banca dati. Sintesi ed efficienza vanno a braccetto, ma solo fintantoché il dato è semplice, puntuale e preciso ovvero non coinvolge approssimazione e incertezza;
- di contro, l'**approssimazione** è un concetto estremamente presente nel dato storico o archeologico, anzi, fatte pochissime eccezioni, tutte le date che ci troveremo a dover rappresentare in una banca dati sono per definizione approssimative, e questo non dipende tanto dalla scarsa precisione di metodi e strumenti di datazione che usiamo in archeologia (e che potrebbero migliorare nel futuro), quanto dalla natura stessa dei manu/ecofatti oggetto della nostra indagine che solo raramente ci interessano per il momento puntuale della loro “produzione” quando per l'arco cronologico della loro “funzione”;
- l'**incertezza**, invece, dipende dalla natura non puntuale e precisa di metodie strumenti che usiamo per datare i nostri contesti. In questo caso, gli sviluppi tecnologici hanno di gran lunga migliorato il nostro lavoro, trasformando in molti casi l'incertezza in approssimazione (v. le datazioni al radiocarbonio) ma ciononostante rimane sempre  fondamentale poter inglobare il concetto di incertezza nella nostra impalcatura teoretica.

## Qualche esempio di date possibili

Qualche esempio, meglio di molte parole, potrebbe aiutare a inquadrare il problema. Ecco allora una serie di date con le quali ci troviamo spesso ad avere a che fare:

- 2 settembre 31 a.C.: è la data puntuale della [battaglia di Azio](https://it.wikipedia.org/wiki/Battaglia_di_Azio), con una precisione al giorno;
- 44 a.C. - 31 a.C.: sono le date di inizio-fine (un intervallo, dunque) della [Guerra civile romana](https://it.wikipedia.org/wiki/Guerra_civile_romana_(44-31_a.C.)) che termina con la battaglia di Azio, con precisione all'anno;
- 23 settembre 63 a.C. - 19 agosto 14 d.C.: è un altro intervallo, con precisione al giorno, che rappresenta la vita di Gaio Ottavio Turino, meglio noto come Gaio Giulio Cesare Augusto, il fondatore dell'Impero romano;
- Prima metà del I sec. a.C.: un tipo di indicazione molto diffusa, con precsione al decennio
- 24 agosto 79 _oppure_ 24 ottobre 79: data dell'eruzione del Vesuvio, due date puntuali (precisione al giorno) che si esclusono a l'un l'altra e che coinvolgono, anche se in maniera molto puntuale, il concetto di incertezza;
- 42000 BP (2000) – 12001 BP (2000): Paleolotico superiore relativamente alla Sicilia, come definito dal progetto ARIADNE nel 2015 e pubblicato su PeriodO al permalink: [http://n2t.net/ark:/99152/p0qhb66j7jg](http://n2t.net/ark:/99152/p0qhb66j7jg). Da notare che le date sono da intendere non relativamente all'anno zero ma dal presente (BP: before present) e dove con presente si intende l'anno 2000.
- ca. 3345 AEC - ca. 3300 AEC: arco di vita approssimativo e che può varirare di uno o più centinaio di anni, della [mummia del Similaun, o Ötsi](https://it.wikipedia.org/wiki/Mummia_del_Similaun), dove AEC/EC (avanti era comune / era comune) è una indicazione alternativa, ma svincolata da riferimenti religiosi, al sistema a.C./d.C., equivalenet all'inglese BCE/CE. Il secondo termine è dato dalle misurazioni al  radiocarbone e segue le oscillazioni di questo strumento (~200 anni in questo caso), il primo, invece è legato al secondo attraverso la determinazione dell'età di morte, un dato piuttosto sicuro.

## Soluzione 1: codificare la data con un intervallo

La soluzione normalmente più utilizzata è quella di usare un minimo di due campi del database per rappresentare i due termini di una determinata data: l'inizio e la fine, anche quando si tratta di una data puntuale. È necessario, però, stabilire in anticipo (e condividere con i possibili fruitori della banca dati) alcune convenzioni necessarie per avere un minimo di rigore nella lettura/interpretazione.

Un esempio pratico di implementazione potrebbe essere quello di definire i campo `data_da` e `data_a` di una tipologia atta a contenere date/tempo. A seconda delle soluzioni software scelte e della granularità decisa a monte la scelta della tipologia del campo potrebbe cambiare. Per una lista dei data types possibili si rimanda alla documentazione ufficiale di [MariaDB](https://mariadb.com/kb/en/date-and-time-data-types/), [MySQL](https://dev.mysql.com/doc/refman/5.7/en/date-and-time-types.html) e [PostgreSQL](https://www.postgresql.org/docs/9.1/datatype-datetime.html). Com'è noto [SQLite](https://www.sqlite.org/index.html) è estremamente permissivo sui _data type_, quindi il lavoro di validazione dei dati viene di norma affidata alla logica dell'applicazione e non al _database engine_.

Con **granularità** si intende l'unità minima (non divisibile o atomica) di tempo che il database sarà in grado di registrare. Se si decide di fermarsi all'anno, come di norma succede per database archeologici o storici, sarà impossibile registrare informazioni relative al mese o giorno. Se invece si vuole ottenere un dettaglio maggiore bisognerà prevedere anche l'inserimento del mese o addirittura del giorno.

Naturalmente, è anche possibile prevedere un campo di testo opzionale dove registrare la data in formato “umano”, ovvero in una lingua naturale, che però più difficilmnte potrà essere usato per le ricerche.

## Attenzione

È bene ricordare che tutti i prodotti in circolazione hanno dei limiti sui loro _data type_ relativi alla data e che quindi è necessario consultare la documentaizone ufficiale in fase di progettazione, per non trovarsi davanti a spiacevoli sorprese. A scopo puramente esemplificativo e non esaustivo, ecco alcuni limiti:

- Il tipo _timestamp_ di PostgreSQL può registare valori compresi tra il 4.713 AEC e il 29.4276 EC, con evidenti limiti per l'archeologia preistorica.
- Il typo _year_ di MariaDB e di MySQL è limitato ad un intervallo compreso tra 1901 e 2155, al quale si aggiunge il valore 0000

È possibile, naturalmente, evitare queste limitazioni utilizzando un campo numerico per la rappresentazione della data, ma in qusto caso si è costretti a mantenere una granularità annuale e inoltre rinnunciare alle funzioni interne che ciascun database fornisce per la gestione del tempo.

Va ricordato che la possibile aggiunta di un campo di testo con la datazione in lingua naturale aggiunge un elemento di ridondanza, che corre il rischio di produrre disallineamenti se gli aggiornamenti non vengono riportati in entrambi i sistemi.

## Esempi di codifica come intervallo
