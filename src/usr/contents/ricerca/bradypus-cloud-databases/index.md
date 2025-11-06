---
title: Bradypus cloud databases
date: 2022-02-04
sort: 9
img: ./bdus.png
---

Bradypus è un software libero e open-source sviluppato alla Sapienza Università di Roma da Julian Bogdani e rilasciato con la licenza [GNU AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html). È finalizzato alla creazione, implementazione e pubblicazione di banche dati relazionali sul  Web. Allo stato attuale è attivamente usato da circa 30 progetti di ricerca italiani e internazionali, per lo più di carattere archeologico e più in generale relativi ai Beni Culturali.

## Filosofia di base e funzioni principali
- Bradypus si basa sull'idea di usare un set minimale di configurazioni per implementare un [RDBMS,Relational database management system](https://it.wikipedia.org/wiki/Relational_database_management_system) basato su interfaccie web, pienamente funzionante, con la possibilità di avere record strutturati anche con tabelle dipendenti 1-n, chiamate plugin. 
- Inoltre, viene offerta la possibilità per un amministratore di modificare in tempo reale la struttura del db, la politica di inserimento dati (tipi di campo e fonte di dati per campi che prevedono una qualsiasi froma di indicizzazione) e la validazione dei dati immessi in tempo reale. 
- Si possono caricare immagini e altri tipi di file e associarli a uno o più record di una o più entità.
- È possibile creare più di maschere (`template`) personalizzate per la lettura/modifica dei dati di ogni entità.L'uso delle maschere può essere generalizzato (per tutti gli utenti) o personalizzato, per utente e per contesto di utilizzo; infatti è possibile usare maschere diverse per l'inserimento dei dati, per la lettura e per la modifica, ecc. 
- L'intera piattaforma è stata pensata come un sistema modulare ed espandibile. In ogni momento è possibile aggiungere nuove funzionalità, non previste inizialmente.
- Lo sviluppo segue un sistema di versionamento detto [Semantic versioning o semver](https://semver.org/), che prevede una numerazione delle versioni in tre parti. Il primo blocco da sinistra indica le versioni `major`, ovvero versioni che introducono cambiamenti importanti e che spesso non prevedono la piena compatibilità con le precedenti. Attualmente (aprile 2022) Bradypus si trova nella `major` 4. Il secondo blocco cambia ogni qualvolta si introducano nuove funzionalità all'interno della stessa versione `major` e si chiama `minor`. Questi cambiamenti non creano problemi di retro-compatibilità. Attualmente (aprile 2022) Bradypus si trova nella versione `minor` 2. Il terzo blocco, detto `patch`, cambia ogni qualvolta ci sia un nuovo rilascio finalizzato a risolvere bug o altri tipi di problemi. Questi cambiamenti non introducono nuove funzioni, semplicemente migliorano l'uso di quelle disponibili. Attualmente (aprile 2022) Bradypus si trova nella versione `patch` 2.
- Il software è rilasciato con licenza libera, [AGPL-3](https://www.gnu.org/licenses/agpl-3.0.en.html).

## DB supportati
Ad oggi (v.4.x.x) Bradypus supporta in maniera assolutamente trasparente per gli utenti i seguenti database:
- Sqlite (default) 
- PostgreSQL
- MariaDB, Mysql
‘In maniera trasparente’ significa che tutte le funzionalità di Bradypus ad oggi implementate sono disponibili per tutti questi tre importanti motori database e sta all'utente scegliere quello più addatto alle proprie esigenze.

[SQLite](https://www.sqlite.org/index.html) è il database predefinito e il più semplice e duttile, in quanto non richede la configurazione di un server. È la scelta perfetta nella maggior parte degi casi, soprattutto quando di prevede l'uso offline della banca dati.

[PostgreSQL](https://www.postgresql.org/) e [MariaDB](https://mariadb.org/) / [MySQL](https://www.mysql.com/) sono la scelta consigliata quando si ritiene che Bradypusnon sarà l'unico punto di accesso ai dati. Un caso tipico è l'utilizzo dei dati anche attraverso altri programmi desktop quali [QGIS](https://www.qgis.org/), [R](https://www.r-project.org/), ecc., per l'analisi dei dati. Soprattutto per quanto riguarda i software GIS, che potrebbero essere avvantaggiati anche dalle estensioni spaziali che questi tipi di database mettono a disposizione. La configurazione del server database viene fatta esternamente a Bradypus.

## Autenticazione e gestione utenti
Bradypus è un sistema multi utente, il che significa che molti profili di utenti diversi possono essere creati per interagire in tempo reale con i dati, anche con profili di accesso (privilegi) diversi. Gli itenti accedono al sistema per mezzo di un username (indirizzo email) e una password.

Alla versione attuale (4.2.x), sono disponibili i seguenti profili di accesso:
- `attesa` (nessun accesso): è il profilo predefinito degli utenti che si registrano di loro iniziativa e la cui richiesta dovrà essere autorizzata da parte di un amministratore del sistema:
    - l'utente è presente nella banca dati,
    - l'utente non ha alcun accesso ai dati;
- `lettura`: è il profilo base di consultazione:
    - l'utente ha accesso al database,
    - l'utente legge tutti i record di tutte le tabelle,
    - l'utente non può inserire nuovi dati o modificare gli esietenti;
- `lettura e scrittura solo propri record`: oltre a quanto già previsto per `lettura`:
    - l'utente può aggiungere nuovi record su tutte le entità presenti nel database,
    - l'utente può modificare a piacimento solo i record che lui stesso ha inserito,
    - l'utente non può modificare gli altri record, disponibili solo in lettura;
- `lettura scrittura`, oltre a quanto già revisto per `lettura e scrittura solo propri record`:
    - l'utente può modificare e cancellare liberamente tutti i record di tutte le entità della banca dati;
- `admin`: oltre a quanto previsto da `lettura scrittura`:
    - l'utente ha accesso alla gestione degli utenti; un `admin` può aggiungere, eliminare e cambiare le impostazioni degli altri utenti del database (ma non degli `superadmin`),
    - l'utente ha  accesso alla piena gestione dei vocabolari (aggiunta, modifica, inserimento, cancellazione),
    - l'utente può creare maschere di accesso ai dati,
    - l'utente puòinviare email di gruppo;
- `superadmin`: oltre a quanto previsto da `admin`:
    - l'utente ha pieno accesso alle funzioni di gestione e modifica della struttura del database, possono aggiungere, modificare o eliminare tabelle, campi, impostazioni,
    - l'utente può eseguire query SQL libere,
    - l'utente ha accesso alle funzioni di traduzionedell'interfaccia,
    - l'utente può svuotare la cache del sistema,
    - l'utente ha pieno accesso ai log del sistema

È in fase di sperimentazione una gestine più detagliata dei privilegi di accesso, che potrà scendere a livello della singola entità oppure del singolo record.

Gli utenti possono registrarsi in autonomia ad un progetto specifico. A questi utenti viene attribuito il privilegio di `attesa`, in attesa, appunto, che un amministratore valuti il loro accesso.

Ciascun utente che ha acesso alla bancadati (da `lettura` in su) può modificare a piacimento i propri dati, con l'eccezione naturalmente del privilegio di accesso. 

È disponiile, inoltre, una funzione di cambio della propria password, senza avere accesso alla piattaforma, incaso un utente non ricordi più la propria password e non riesca più adaccedere. La procedura prevede una conferma via email.

## Configurazioni personalizzate utente
Tutti gli utenti possono persnalizzare la propria esperienza di lavoro con la banca dati, configurando opzioni personalizzate che valgono perla sessione corrente (fino al logout) oppure che possono essere salvate nel database ed essere disponibili per tutte le future sessionidi lavoro.

Allo stato attuale (v4.2.x), le opzioni personalizzabili sono:
- libera scelta della lingua dell'interfaccia, attualmente (v. 4.2.x) sono pienemanete supportate l'italiano e l'inglese;
- modo di impaginare i risultati di una interrogazione (query); attualmente sono disponibilela divisione in pagne (scelta predefinita) oppure il caricamento automatico allo scorrere dei risultati (infinite scroll);
- selezione delle maschere di visualizzazione/inserimento da usare per ciascuna tabella e per ciascun contesto (lettura e/o modifica/inserimento);
- selezionare dei campi da visualizzare nell'anteprima dei risultati di una interrogazione (query).

## CRUD e gestione dati
È possibile eseguire tutte le operazioni cosiddette CRUD, ovvero creazione, lettura, aggiornamento e cancellazione, su tutti i record di tutte le entità da interfacce grafiche. È anche possibile usare la funzione di duplicazione di record, per record particolarmnete complessi e ripetitivi, nonché modificare più record contemporanamente, sempre per inserimenti ripetitivi.

Inoltre, c'è la possibilità di eseguire modifiche su gruppi di record (modifiche multiple), in caso sia necessario insere lo stesso valore in uno o più campi su un numero grande di record. Sempre per la gestione massiva dei dati, è possibile avviare una procedure di cerca e sostiuisci in maniera molto mirata,su un campo specifico di una entità, su tutto il database.

In fase di imissionedei dati, quando si trata di entità complesse chepresentano dati simili (es. la schedatura della ceramica), è possibile sfruttare la funzione della duplicazione del record.

## Tipologie di campi disponibili per i moduli di inserimento/modifica
L'inserimento e modifica è facilitato da un ampio spettro di tipologie diverse di widget grafici per i singoli campi, facimente configurabli:
- `text`: una casella di inserimento semplice, di una sola linea;
- `long_text`: una casella di inserimento semplice, multilinea
- `date`: campo data, che visualizza un calendario (viene usato il widget di sistema del browser)
- `select`: un menu a tendina, semplice; i valori possono essere recuperati da un vocabolario oppure dai valori usati in qualsiasi campo di qualsiasi entità del database;
- `combo_select`: menu a tendina, con possibilità di aggiungere valori personalizzati e non previsti inizialmente; i valori indicizzati seguono quanto detto per `select`;
- `multi_select`: possibilità di inserire più di un valore da un menu a tendina, tipo tag; nel database i valori vengono salvati come stringa, separati da punto-e-virgola; i valori indicizzati seguono quanto detto per `select`;
- `boolean`: menu a tendina con valori si/no; nel db viene inserito 0/1

## Gestione vocabolari
È disponibile un sistema di gestione centralizzata dei vocabolari. Un amministratore può aggiungere nuovi vocabolari, modificare le voci di vocabolari preesistenti, riordinarle e/o cancellarle.  
Alla versione attuale (4.2.x) il sistema non esegue controlli sui dati già inseriti al momento della modifica delle singole voci di vocabolari.

## Validazione dei dati 
È possibile, per ciascun campo, definire una politica di validazione dei dati in fase di inserimento e di modifica. Attualmente (v4.2.x) ipossibili controlli dui dati inseriti possono essere una o combinazioni delle seguenti voci:
- `int`: il valore inserito deve essere un numero;
- `email`: il valore inserito deve essere un indirizzo email formalmente valido (non viene controllato che effettivamente esista);
- `no_dupl`: il valore inserito non deve essere già presente in questo campo, ovvero non devono esserci duplicati;
- `not_empty`: il campo deve essere valorizzato e non può essere vuoto;
- `range`: il valore (numerico) deve essere compreso in una scala numerica della quale vengono forniti gli estremi;
- `regex`: il valore inseito deve rispettare una espressione regolare, che dovrà essere specificata;
- `valid_wkt`: la stringa deve essere una coordinata [WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) valida.


## Ricerca
Il sistema implementa vari tipi di ricerca, tutte basate sulla singola entità: dalla semplice ricerca per una stringa alla possibilità di costruire interrogazioni SQL molto complesse da interfaccia grafica, senza la necessità di conoscere il linguaggio SQL. Attraveso menu a tendina popolati con i nomi dei campo da ricercare e sistemi dinamici di estrazione di valori unici nelle tabelle, è possibile costruire una o più asserzioni semplici e concatenarle usando gli operatori logici di `AND` od `OR`.

Inoltre, per gli utenti esperti è disponibile la possibilità di scrivere frammenti di SQL e interrogare più entità in contemporanea, utilizzando  gli [JOIN di SQL](https://it.wikipedia.org/wiki/Join_(SQL)).

La funzione di salvare le query, permette di creare una sorta di segnalibro per ricerche particolarmente complesse, caraterrizate da un nome e per le quali è disponibile la possibilità di condividere con altri utenti. Si tratta di una finzionalità particolarmente adatta per analisi piuttosto complesse e lunghe da comporre, che rende i risultati facilmente consultabili anche da parte di utenti poco esperti.

## Esportazione dati
È possibile esportare i dati relativi ad una entità di un suo sottoinsieme (ovvero i risultati di una ricerca) in vari formati, quali:
- JSON
- XLS
- SQL (INSERT)
- CSV
- Tabella HTML
- XML
Le esportazioni sono salvate come file statici ed è possibile sia slvarle sulla propria machina locale, sia condividerle con altri utenti.
Inoltre, è disponible la possibilita di creare record completi di record in sequenza, in lettura adatti per la stampa, su file PDF o verso dispositivi di stampa.

## Interfaccia Geografica
BraDypUS è completato da un'interfaccia geografica chiamata GeoFace, per la visualizzazione, analisi e modifica di dati geografici, collegati ai record. Le geometrie sono salvate in formato [WKT: Well Known Text](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) in una tabella apposita che può essere collegata in n-1 con ogni altra tabella dati. 
Le operazioni CRUD sono disponibili sia sotto forma testuale, che da interfaccia grafica su base GIS integrata nel sistema. 

È inoltre possibile di usare più mappe di base, anche sela funzione non è attualmente (v4.2.x) personalizzabile dagli utenti. Oltre alle geometrie e alle mappe di base, è possibile visualizzare altri temi in codificati in formato [GeoJSON](https://geojson.org/).

Per semplificare il lavoro con data set strutturati esternamente, es. in QGIS,è possibile caricare massivamente dati geografici e collegarli in automatico ai record presenti.

## Harris Matrix
È disponibile un plugin di sistema, attivabile per più entità, per la codifica e la visualizzazione dei rapporti stratigrafici. Il plugin prevede un modulo di inserimento dei dati, che permette di inserire le relazioni una alla volta, effettuando un controllo di consistenza che impedisce di definire una relazione già definita. A livello del singolo record, è possibile  visualizzare sotto forma di semplice tabella tutti i rapporti già definiti: in alto i record più recenti, sullo stesso livello i contemporanei e in basso i più antichi. Al centro della tabella è il record corrente.
È poi possibile costruire rappresentanzioni grafiche ben più complesse del matrix di Harris, dei grafi orientati, zoomabili, navigabili e interattivi (il click sul nodo apre la scheda del record relativo) per sottoinsieme o totali dei dati, attraverso la costruzione di qualsiasi tipo di ricerca.


## Costruzione di grafici quantitativi
C'è la possibilità di costruire grafici a barre a partire da dati quantitativi contenuti nelle varie entità. I grafici possono essere construiti per la totalità dei record di un'entità, oppure per un sottoinsieme, ovvero i risultati di una ricerca. Come se singole ricerche, anche i grafici possono essere salvati e condivisi facilmente con gli altri utenti. Come le matrici di Harris, anche i grafici sono entità dinamiche: una volta definiti, cambiaano con il variare dei dati.

## Internazionalizzazione
Il sistema è disponibile con un'interfaccia in due lingue, italiano e inglese. È possibile per un super-amministratore aggiunere altre traduzioni in maniera facile, da interfccia grafica, come, sempre da interfaccia grafica, è possibile aggiornare e manutenere le lingue attualmente disponibili. La lingua di utilizzo viene desunta dalla impostazione linguista del browser dell'utente, il quale però la può cambiare a piacimento, come configurazione personale.

## Sistema di messaggistica 
Il sistema permette ad un amministratore di inviare email a singoli utenti o a gruppi di utenti (per privilegio), per comunicaizoni interne.

## Uso offline (locale)
Alla versione attuale (v4.2.x) BraDypUS è un pacchetto senza dipendenze esterne dipendenti da una connessione Internet. Questo significa che è possibile eseguire il software in una macchina o rete locale senza una connessione alla Rete. Questo lo rende particolarmente addatto all'uso nei cantieri archeologici, depositi o archivi dove la connessione non è sempre disponibile. In gerenrale, è possibile eseguire il software come programma a singolo utente, ma è anche possibile creare una rete locale e usarlo in gruppo.
Per garantire l'integrità dei dati, è possibile “congelare“ la versione in cloud mentre è disponibile una versione locale. Il congelamento permette l'accesso in sola lettura ai dati, ma non lo loro modifica, da parte di tutti gli utenti attivi. Alla chiusura dei lavori sul campo è possibile sincronizzare la versione locale con quellla online e “scongelare” quest'ultima.zo


---

## Bibliografia 
- Bogdani, Julian. 2022. “Archaeological Documentation as a Service. Archaeological Information Systems in the Cloud Era: the Bradypus Case-study”, in _Archeologia e Calcolatori_ 33 (2): 115-134. [DOI: 10.19282/ac.33.2.2022.07](https://dx.doi.org/10.19282/ac.33.2.2022.07); [http://hdl.handle.net/11573/1657651](http://hdl.handle.net/11573/1657651).
- Bogdani, Julian. (2006) 2021. BraDypUS Relational Web Database Managing System for Cultural Heritage. Bologna, Rome. https://doi.org/10.5281/zenodo.1467905.
- ‘BraDypUS Official Guide’. (2020) 2021. 2021. https://docs.bdus.cloud/.
- Bogdani, Julian, and Erika Vecchietti. 2010. ‘From “Text” to “Con-Text”: Using the Web in the Archaeological Research’. In Vesuviana. Archeologie a Confronto, Atti Del Convegno Internazionale (Bologna, 14-16 Gennaio 2008), 809–18. Bologna.


## Risorse online

- Sito web: [https://bdus.cloud/](https://bdus.cloud/)
- Documentazione: [https://docs.bdus.cloud/](https://docs.bdus.cloud/)
- Servizio gestito: [https://bdus.cloud/db/](https://bdus.cloud/db/)
- Servizio gratuito gestito educational (per giovani ricercatori, studenti, appassionati): [https://bdus.cloud/edu/db/](https://bdus.cloud/edu/db/)
- Codice sorgente: [https://github.com/bdus-db/BraDypUS](https://github.com/bdus-db/BraDypUS)