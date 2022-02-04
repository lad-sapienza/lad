---
title: Codifica digitale della cronologia
autore: Julian Bogdani
licenza: CC BY 4.0 International
livello: avanzato
tags: [riflessioni a appunti]
img: ./b-dus-db.png
date: 2021-07-30
---

## Introduzione

La rappresentazione, codifica e ricerca del dato cronologico (datazione) è sicuramente uno degli aspetti più delicati nella progettazione di un banca dati che contenga dati storici, archeologici, museali e simili. Il problema principale consiste nel trovare una maniera **sintetica**, **rigorosa** ed **efficiente** per rappresentare date puntuali e/o intervalli di date e che siano in grado si rappresentare in maniera dinamica i concetti di **approssimazione** e **incertezza**.

Prima di procedere con qualche esempio che potrebbe aiutare a meglio focalizzare la questione, proviamo a definire meglio alcuni concetti fondamentali appena elencati:

- con **sintentico** si intende la necessità si restringere il più possibile il numero di campi del database che useremo per codificare l'informazione e, soprattutto, ridurre per quanto possibile la ridondanza dell'informazione, ovvero la sua ripetizione anche se in forme diverse;
- con **rigoroso** si intendono sintassi di codifica che non siano ambigui e che non possano lasciare spazio a interpretazioni diverse dello stesso dato o viceversa non usare etichette testuali diverse per rappresentare lo stesso concetto. Solo a mero titolo esemplificativo “ca. 31 a.C.”, “c. 31 a.C.”, “appross. 31 a.C.” sono tutte forme diverse per rappresentare la stessa informazione;
- con **efficiente** si intende la facilità e velocità di validare l'infrmazione immessa e soprattutto di ricercarla, e quindi estrarrla dalla banca dati. Sintesi ed efficienza vanno a braccetto, ma solo fintantoché il dato è semplice, puntuale e preciso ovvero non coinvolge approssimazione e incertezza;
- di contro, l'**approssimazione** è un concetto estremamente presente nel dato storico o archeologico, anzi, fatte pochissime eccezioni, tutte le date che ci troveremo a dover rappresentare in una banca dati sono per definizione approssimative, e questo non dipende tanto dalla scarsa precisione di metodi e strumenti di datazione che usiamo in archeologia (e che potrebbero migliorare nel futuro), quanto dalla natura stessa dei manu/ecofatti oggetto della nostra indagine che solo raramente ci interessano per il momento puntuale della loro “produzione” quando per l'arco cronologico della loro “funzione”;
- l'**incertezza**, invece, dipende dalla natura non puntuale e precisa di metodie strumenti che usiamo per datare i nostri contesti. In questo caso, gli sviluppi tecnologici hanno di gran lunga migliorato il nostro lavoro, trasformando in molti casi l'incertezza in approssimazione (v. le datazioni al radiocarbonio) ma ciononostante rimane sempre fondamentale poter inglobare il concetto di incertezza nella nostra impalcatura teoretica.

## Qualche esempio di date possibili

Qualche esempio, meglio di molte parole, potrebbe aiutare a inquadrare il problema. Ecco allora una serie di date con le quali ci troviamo spesso ad avere a che fare:

- 2 settembre 31 a.C.: è la data puntuale della [battaglia di Azio](https://it.wikipedia.org/wiki/Battaglia_di_Azio), con una precisione al giorno;
- 44 a.C. - 31 a.C.: sono le date di inizio-fine (un intervallo, dunque) della [Guerra civile romana](<https://it.wikipedia.org/wiki/Guerra_civile_romana_(44-31_a.C.)>) che termina con la battaglia di Azio, con precisione all'anno;
- 23 settembre 63 a.C. - 19 agosto 14 d.C.: è un altro intervallo, con precisione al giorno, che rappresenta la vita di Gaio Ottavio Turino, meglio noto come Gaio Giulio Cesare Augusto, il fondatore dell'Impero romano;
- Prima metà del I sec. a.C.: un tipo di indicazione molto diffusa, con precsione al decennio
- 24 agosto 79 _oppure_ 24 ottobre 79: data dell'eruzione del Vesuvio, due date puntuali (precisione al giorno) che si esclusono a l'un l'altra e che coinvolgono, anche se in maniera molto puntuale, il concetto di incertezza;
- 42000 BP (2000) – 12001 BP (2000): Paleolotico superiore relativamente alla Sicilia, come definito dal progetto ARIADNE nel 2015 e pubblicato su PeriodO al permalink: [http://n2t.net/ark:/99152/p0qhb66j7jg](http://n2t.net/ark:/99152/p0qhb66j7jg). Da notare che le date sono da intendere non relativamente all'anno zero ma dal presente (BP: before present) e dove con presente si intende l'anno 2000.
- ca. 3345 AEC - ca. 3300 AEC: arco di vita approssimativo e che può varirare di uno o più centinaio di anni, della [mummia del Similaun, o Ötsi](https://it.wikipedia.org/wiki/Mummia_del_Similaun), dove AEC/EC (avanti era comune / era comune) è una indicazione alternativa, ma svincolata da riferimenti religiosi, al sistema a.C./d.C., equivalenet all'inglese BCE/CE. Il secondo termine è dato dalle misurazioni al radiocarbone e segue le oscillazioni di questo strumento (~200 anni in questo caso), il primo, invece è legato al secondo attraverso la determinazione dell'età di morte, un dato piuttosto sicuro.

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

- 2 settembre 31 a.C.

| data_da | data_a |
| ------- | ------ |
| -31     | -31    |

Non è dunque possibile indicare mese e anno con granularità annuale.

- 44 a.C. - 31 a.C.

| data_da | data_a |
| ------- | ------ |
| -44     | -31    |

- 23 settembre 63 a.C. - 19 agosto 14 d.C.

| data_da | data_a |
| ------- | ------ |
| -63     | 14     |

Ancora una volta, si perde ogni informazione di durata inferiore all'anno.

- Prima metà del I sec. a.C

| data_da | data_a |
| ------- | ------ |
| -100    | -51    |

In questo caso gli anni d'inizio e di fine sono convenzionali e approssimativi, anche se questa informazione non è indicata espressamente nei dati.

- 24 agosto 79 oppure 24 ottobre 79

Non è possibile indicare con questo sistema date alternative, come quella sopra.

- 42000 BP (2000) – 12001 BP (2000)

| data_da | data_a |
| ------- | ------ |
| -4000   | -10001 |

È fortemente consigliato di usare un unico sistema cronologico per un determinato database e quindi convertire le date in sistemi diversi. In questo caso sono state transformate le dare BP (2000) in date AEC.

- ca. 3345 AEC - ca. 3300 AEC

| data_da | data_a |
| ------- | ------ |
| -3345   | -3300  |

In questo caso non c'è modo di esplicitare l'approssimazione della data di morte della mummia di Similaun. Probabilmente, se si tratasse di un database prosopografico, potrebbe essere utile registrare non l'intervallo di vita, ma le due date di nascita e morte, ciascuna definita da un intervallo. Questo permetterebbe di registrare l'approssimazione, a scapito della sintesi:

| nato_da | nato_a | morto_da | morto_a |
| ------- | ------ | -------- | ------- |
| -3345   | -3145  | -3300    | -3100   |

## Soluzione 2: Extended Date/Time Format

Lo standard ISO di base per la codifica del tempo è stato a lungo l'[ISO 8601:2004](https://www.iso.org/standard/40874.html) che però non era molto espressivo a livello di qualifiche e concetti semantici, per esempio non era in grado di rappresentare l'approssimazione e l'incertezza ([più informazioni](https://www.loc.gov/standards/datetime/background.html)). Per questo motivo la Biblioteca del Congresso Americano (Library of Congress) ha creato nel 2019 l'Extended Date/Time Format (EDTF) . Nello stesso anno è diventato standard [ISO 8601:2019](https://www.iso.org/standard/70907.html), poi [ISO 8601-2:2019](https://www.iso.org/standard/70908.html).

Questo standard, le cui specifiche complete possono essere consultate a questo link: [https://www.loc.gov/standards/datetime/](https://www.loc.gov/standards/datetime/), permette di codificare in maniera dettagliata e con granularità variabile (dall'anno al secondo) date puntuali o intervalli (periodi) di approssimazione e certezza diversa. Lo standard è diviso in tre livelli (0, 1 e 2) di espressività e complessità progressiva. Lo standard prevede moltissime opzioni, ben esposte nella documentazione, ma ai fini di questa trattazione prenderemo in esame solo le opzioni che hanno un riscontro nella ricerca storica, archeologica o museale.

### EDTF Livello 0

Questo livello permette di codificare date, orari in vari fusi orari (qui non trattati), e periodi come da esempi:

- `1985-04-12`: 12 aprile del 1985 (precisione al giorno)

- `1985-04`: maggio 1985 (precisione al mese)

- `1964/2008`: intervallo che comincia in un momento non definito dell'anno 1964 e termina in un momento non definito dell'anno 2008.

- `2004-06/2006-08`: intervallo che comincia in un momento non definito del mese di giugno 2004 e termina in un momento non definito dell'agosto 2008.

- `2004-02-01/2005-02-08`: intervallo che comincia il 1 febraio 2004 e termina l'8 febraio del 2005.

- `2004-02-01/2005-02`: intervallo che comincia il 1 febbraio 2004 e termina in un momento non definito del febbraio 2005.

- `2004-02-01/2005`: intervallo che comincia il 1 febbraio 2004 e termina in un momento non definito dell'anno 2005.

- `2005/2006-02`: intervallo che comincia in un momento non definito del 2005 e termina in un momento non definito del fabrario 2006.

### EDTF Livello 1

Oltre a comprendere tutte le funzioni del livello precedente, il livello 1 aggiunge le seguenti funzionalità:

- Supporto per anni di più di 4 cifre, introdotti da Y (year), abbastanza importanti per l'archeologia:

  - `Y170000002`: è l'anno 170000002 EC

  - `Y-170000002`: è l'anno 170000002 AEC

- Qualifica della data: i caratteri **?**, **~** e **%** vengono usati per indicare rispettivamente **incertezza**, **approssimazione** e **incertezze e approssimazione**. Questi caratteri vengono posti alla fine di una data e qualificano l'intera data:

  - `1984?`: anno incerto, forse il 1984, ma non sicuro

  - `2004-06~`: anno-mese approssimativo

  - `2004-06-11%`: tutta la data (anno-mese-giorno) è incerta e approssimativa

- Caratere non specificato a destra, indicato con una o più **X**:

  - `201X`: un anno non specificato compreso tra 2010 e 2019 (precisione all'anno)
  
  - `20XX`: un anno non specificato compreso tra 2000 e 2099 (precisione all'anno)
  
  - `2004-XX`: un mese non specificato dell'anno 2020 (precisione al mese)
  
  - `1985-04-XX`: un giorno non specificato del mese di aprile 1985 (precisione al giorno)
  
  - `1985-XX-XX`: un giorno non specificato di un mese non specificato dell'anno 1985 (precisione al giorno)
  
- Negli intervalli, una delle due estremità può essere laciata vuota (_null_), a indicare una data di inzio o fine sconosciuta:

  - `1985-04-12/`: intervallo che comincia il 12 aprile 1985 e il cui termine è sconosciuto
  
  - `1985-04/`: intervallo che comincia in aprile 1985 e il cui termine è sconosciuto
  
  - `1985/`: intervallo che comincia genericamente nel 1985 e il cui termine è sconosciuto
  
  - `/1985-04-12`: intervallo con inizio sconosciuto e termine il 12 aprile 1985
  
  - `/1985-04`: intervallo con inizio sconosciuto e termine nell'aprile 1985
  
  - `/1985`: intervallo con inizio sconosciuto e termine nel 1985
  
- Il doppio punto (**..**) indica un inizio o termine di intervallo non specificato, o perché non c'è o per altri motivi:

  - `1985-04-12/..`: intervallo che inizia il 12 aprile 1985 con termine finale aperto
  
  - `1985-04/..`: intervallo che inizia nell'aprile 1985 con termine finale aperto
  
  - `1985/..`: intervallo che inizia genericamente nel 1985 con termine finale aperto
  
  - `../1985-04-12`: intervallo con termine iniziale aperto che termina il 12 aprile 1985
  
  - `../1985-04`: intervallo con termine iniziale aperto che termina nell'aprile 1985
  
  - `../1985`: intervallo con termine iniziale aperto che termina genericamente nel 1985
  
- Supporto per anni negativi, non previsti nel Livello 0:

  - `1985`: 1985 AEC

### EDTF Livello 2

- Caratteri significativi: è possibile far seguire un anno con una **S** e un numero positivo per indicare il numero di caratteri significativi

  - `1950S2`: indica un anno tra 1900 and 1999, stimato di essere 1950
  
  - `Y171010000S3`: un anno tra 171.000.000 e 171.999.999, stimato di essere 171.010.000
  
  - `Y3388E2S3`: un anno tra  338.000 and 338.999, stimato di essere 338.800.
  
- Set: le parentesi quadrate racchiudono una lista esclusiva (seleziona solo un membro)

  - `[1667,1668,1670..1672]`: uno tra gli anni 1667, 1668, 1679, 1671, 1672. I due punti consecutivi indicano uno o più valori compresi tra i due valori che da queste sono separate
  
  - `[..1760-12-03]`: 3 dicembre 1760 o qualche data anteriore. I due punti all'inizio o alla fine indicano la data precisa o precedenti / successive.
  
  - `[1760-12..]`: Dicembre 1760, o qualche mese dopo
  
  - `[1760-01,1760-02,1760-12..]`: gennaio o febbraio 1760 o Dicembre 1760, o qualche mese dopo
  
  - `[1667,1760-12]`: l'anno 1667 o il mese di dicembre 1760.
  
  - `[..1984]`: L'anno 1984 o qualche anno precedente

- Set: le parentesi grafe racchiudono una lista inclusiva (tutti i membri sono compresi)

  - `{1667,1668,1670..1672}`:  tutti gli anni 1667, 1668, 1670, 1671, 1672
  
  - `{1960,1961-12}`: L'anno 1960 e il mese di dicembre 1961.
  
  - `{..1984}`: L'anno 1984 e tutti gli anni precedenti.

- Qualifica: un carattere di qualifica a destra di un componente, si applica non solo a quel componente ma anche a quelli alla sua sinistra:

  - `2004-06-11%`: anno, mese, giorno incerto e approssimativi
  
  - `2004-06~-11`: anno, mese e giorno approssimativi
  
  - `2004?-06-11`: anno incerto

- Qualifica: un carattere di qualifica a sinistra di un componente di applica solo a questo

  - `?2004-06-~11`: anno incerto, mese noto, giorno approssimativo

  - `2004-%06-11`: anno incerto e approssimativo; anno e giorno noti

- Il carattere non specificato, al Livello 2, può comparire in ogni posizione di un componente:

  - `156X-12-25`: 25 dicembre di un uno degli anni 1560
  
  - `15XX-12-25`: 25 dicembre di uno degli anni 1500
  
  - `XXXX-12-XX`: un qualche giorno di dicembre di qualche anno
  
  - `1XXX-XX`: qualche mese durante gli anni 1000
  
  - `1XXX-12`: qualche mese di dicembre degli anni 1000
  
  - `1984-1X`: ottobre, novembre o dicembre 1984

- Intervallo: al Livello 2, parti di date in un intervallo possono essere definite come approssimative, incerte o non specificate:

  - `2004-06-~01/2004-06-~20`: Un intervallo nel mese di giugno 2004 che ha inizio nei primi giorni e termina intorno al 20
  
  - `2004-06-XX/2004-07-03`: Un intervallo che inizia in un giorno non specificato di giugno 2004 e finisce il 3 Luglio

### Esempi di codifica come EDTF

Per ritornare al nostro “banco di prova”, si elencano di seguito le codifiche delle date già viste:

- **2 settembre 31 a.C.**
  - Y-31-09-02`
  - La Y davanti all'anno è necessaria perché altrimenti EDTF si aspetta un anno a 4 cifre. Per rappresentare questa data è necessario il Livello 1.  
- **44 a.C. - 31 a.C.**
  - `Y-44/Y-31`

- **23 settembre 63 a.C. - 19 agosto 14 d.C.**
  - `Y-63-09-23/Y14-08-19`

- **Prima metà del I sec. a.C**
  - `Y-100/Y-51`

- **24 agosto 79 oppure 24 ottobre 79**
  - `[Y79-08-24,Y79-19-24]`

- **42000 BP (2000) – 12001 BP (2000)**
  - `Y-40000/Y-12001`

- **ca. 3345 AEC - ca. 3300 AEC**
  - `Y-3345~/Y-3300~`

### Attenzione

Al momento nessun software di database supporta nativamente il formato EDTF. Chiaramente, non si tratta di un problema di registrazione del dato, in quando un campo testuale non avrebbe problemi a conservarlo quanto un problema di ricerca ed estrazione dei dati. In caso di utilizzo di EDTF tutta la logica relativa all'inserimento, validazione e ricerca del dato dovrebbe essere a carico esclusivo dell'applicazione. Se da una parte il formato, soprattutto nei livelli 1 e 2, è estremamente espressivo, il lavoro di programmazione necessario per sostenere l'utilizzo di questa sintassi potrebbe essere davvero impegnativo.

### Librerie di vari linguaggi di programmazione che supportano EDTF

Esistono, per contro, diverse implementazioni di questo formato in vari linguaggi di programmazione che possono facilitare il lavoro di programmazione. Di seguito un breve e non esautivo elenco (le segnalazioni sono benvenute):

- C#: EDTF.NET, [https://github.com/richardtallent/EdtfDotNet](https://github.com/richardtallent/EdtfDotNet)

- Ruby: EDTF-Ruby, [https://github.com/inukshuk/edtf-ruby](https://github.com/inukshuk/edtf-ruby)

- Ruby: edtf-humanize, [https://github.com/duke-libraries/edtf-humanize](https://github.com/duke-libraries/edtf-humanize)

- Javascript: EDTF.js, [https://github.com/inukshuk/edtf.js](https://github.com/inukshuk/edtf.js)

- Javascript: edtfy, [https://github.com/nicompte/edtfy](https://github.com/nicompte/edtfy)

- Python: python-edtf, [https://pypi.org/project/edtf/](https://pypi.org/project/edtf/)

- PHP: php-EDTF, [https://github.com/computerminds/php-edtf](https://github.com/computerminds/php-edtf)

- PHP: EDTF PHP Library, [https://github.com/ProfessionalWiki/EDTF](https://github.com/ProfessionalWiki/EDTF)

- Dart: edtf, [https://github.com/maalexy/edtf](https://github.com/maalexy/edtf)

Infine esiste un servizio web che può essere usato per validare la sintassi stringhe EDTF, raggiungibile all'indirizzo: [https://digital2.library.unt.edu/edtf/](https://digital2.library.unt.edu/edtf/)

## Soluzione 3: tecnologie di Linked Data e _gazzeteer_ di periodi

Se il problema da affrontare è quello della codifica dell'informazione cronologica in un database, allora certamente questa soluzione non è la più addatta. L'idea di base di questa soluzione è quella di definire un elenco di periodi, ciascuno con una cronologia (inizio-fine) specifico e contrassegnato da un identificativo univoco ([Uniform Resource Identifier o URI](https://it.wikipedia.org/wiki/Uniform_Resource_Identifier)). Una volta che la risorsa è disponibile, il singolo record semplicemente si collega alla cronologia citando l'URI. Esistono _repository_ collaborativi e condivisi che raccolgono e rendono disponibili _gazetteer_ temporali diversi e che garantiscono il mantenimento degli URI e relativi URL. Il progetto più famso è senza dubbio [PeriodO](https://perio.do/en/), ideato proprio per facilitare il collegamento di dati di database diversi.

Il collegamento di banche dati diverse è senza dubbio l'elemento più impotrante di questo approccio: faccendo riferimento a risorse condivise è possibile raccogliere “sotto” lo stesso URI più elementi della stessa banca dati o anche di banche dati diverse, permettendo dunque una lettura comparata dei dati. Il prezzo da pagare è naturalmente la specificità: per potere mettere la stessa etichetta a più record è necessario creare delle classi cronologiche (periodi) più generiche. Più una classe è generica, più potenziali individui conterrà, e viceversa, più è specifica e meno candidati ne faranno parte.

## Conclusioni

In conclusione, si può dire che la soluzione “giusta” e applicabile con il massimo profitto in ogni situazione ovviamente non esiste. A seconda delle varie esigenze, precisione della definizione cronologia, facilità di inserimento e ricerca del dato e possibilità facilitata di aggregare dati simili, ognuna delle soluzioni indicate sopra presenta pro e contro.

Se si stanno schedando i reperti di uno scavo, la precisione della datazione è un elemento importantantissimo, ma lo è altrettanto la possibilità di fare ricerche in maniere veloce ed efficiente. In questo caso, probabilmente una soluzione ibrida che intrecci la codifica come intervallo con precisione all'anno (anno inizio - anno fine) può certamente soddisfare la maggior parte delle eseigenze. A questi due campi, può essere associato un ulteriore campo con la data in formato EDTF, per recuperare eventualmente precisioni perse nella datazione all'anno e per offrire un metodo uniforme di indicare la cronologia, anche se rimane molto difficile usarlo per le ricerche.

Se si sta facendo una catalogazione per una collezione museale, allora la possibilità di precisione ed elasticità sono certamente le più importanti. Anche in questo caso la formattazione secondo EDTF rimane la scelta preferita. Le ricerche potranno essere facilitato da funzionalità software aggiuntive che siano in grado di “leggere” e “capire” questo formato. In questo caso un maggiore investimento sul software è giustificato dalla creazione di un archivio standard che ha maggiori possibilità di durare nel tempo, rispetto a soluzioni estemporanee, poco documentate o individuali.

In ogni caso, è sconsigliato integrare in un database di lavoro, caratterizzato da azioni frequenti di inserimento/modifica, URI in quanto non sono immediatamente comprensibili ad un operatore e quindi potrebero facilitare l'inserimento di errori. Se è prevista la creazione e pubblicazione di dati aperti e collegati (Linked Open Data o LOD, pratica che andrebbe fortemente incentivata, anche per progetti di piccola scala), allora la soluzione migliore è quella di aggiungere alle banche dati delle funzioni automatiche, dei [middleware](https://it.wikipedia.org/wiki/Middleware), che in maniera autonoma “leggano” una data standard, per esempio in formato EDTF e la “traducano” in un periodo identificato da URI, seguendo una mappa prestabilita. Questa soluzione permette di mantenere l'operatore umano maggiormente concentrato sul proprio lavoro di studio e datazione e affidare alla macchina la “traduzione al volo” della cornologia in altri formati. Una soluzione del genere, inoltre, permette anche di pubblicare lo stesso dato con varie “etichette cronologiche”, vari periodi riferiti a sistemi diversi o altrenativi di periodizzione, semplicemente cambiando la mappa o le mappe di riferimento, senza dovere intervenire a modificare i dati salvati nella banca dati.

## Riferimenti

- Datatype di data/tempo per MariaDB: [https://mariadb.com/kb/en/date-and-time-data-types/](https://mariadb.com/kb/en/date-and-time-data-types/)

- Data type di data/tempo per MySQL: [https://dev.mysql.com/doc/refman/5.7/en/date-and-time-types.html](https://dev.mysql.com/doc/refman/5.7/en/date-and-time-types.html)

- Data type di data/tempo per PostgreSQL: [https://www.postgresql.org/docs/9.1/datatype-datetime.html](https://www.postgresql.org/docs/9.1/datatype-datetime.html)

- ISO 8601:2004, [https://www.iso.org/standard/40874.html](https://www.iso.org/standard/40874.html)

- ISO 8621:2019 , [https://www.iso.org/standard/70907.html](https://www.iso.org/standard/70907.html)

- ISO 8601-2:2019, [https://www.iso.org/standard/70908.html](https://www.iso.org/standard/70908.html)

- PeriodO: [https://perio.do/](https://perio.do/)

- Specifica EDTF: [https://www.loc.gov/standards/datetime/](https://www.loc.gov/standards/datetime/)

- Servizio di validazione per EDTF: [https://digital2.library.unt.edu/edtf/](https://digital2.library.unt.edu/edtf/)

- Lista delle implementazioni nel sito della Library of Congress [https://www.loc.gov/standards/datetime/implementations.html](https://www.loc.gov/standards/datetime/implementations.html)
