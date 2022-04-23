---
title: Bradypus cloud databases
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

Allo stato attuale, le opzioni personalizzabili sono:
- Impaginazione dei risultati delle query, che possono essere divise per pagine o infinite scroll
- Lingua dell'interfaccia: attualmente italiano e inglese
- Selezione di quali maschere di visualizzazione/inserimento vuole usare per ciascuna tabella e per ciascun contesto, tra lettura e modifica/inserimento
- Selezionare quali campi vuole visualizzare nell'anteprima dei risultati di una query 

## CRUD
Accesso grafico a funzioni CRUD su ogni record di ogni tabella
Possibilità di allegare file drag&drop
Possibilità di inserire dati geografici come testo e via GUI webGIS
Possibilità di modifiche multiple di più record
Layout di stampa semplificato
Possibilità di duplicare record (save as new) limitata ai campi della tabella principale e non anche dei dati delle tabelle figlie, 1-n (cd. plugin)
Funzione trova/sostituisci a livello cella
Bdus5: sarebbe comodo passare ad una modalità autosalva in fase di modifica

## Ricerca
Tutte le funzioni di ricerca sono ora basate sulla singola entità/tabella
bdus5: sarebbe bello avere funzioni di ricerca full-text che cercano su tutte le entità in contemporanea 
Possibilità di ricerca veloce: per stringa su tutti i campi di una tabella (LIKE)
Possibilità di ricerca avanzata (campo - operatore - valore), con possibilità di concatenare n asserzioni legate da AND|OR
Possibilità di ricerca per esperti SQL inserendo codice SQL, con possibilità anche di fare JOIN. Qui c'è un sistema rudimentale di protezione dei dati che vieta l'uso di asserzioni pericolose
Possibilità di salvare delle ricerche/filtri, assegnare a ogni "segnalibro" un nome e condividerli con gli altri utenti
Possibilità di esporre i segnalibri all'API

## Esportazione dati
È possibile esportare i dati relativi ad una entità (ma non delle tabelle 1-m ad essa collegate, plugin) o di un sottoinsieme (risultati di una ricerca) in:
JSON
XLS
SQL (INSERT)
CSV
HTML
XML

## Interfaccia Geografica
È disponibile una interfaccia geografica per la visualizzazione di dati geografici. Questi sono salvati in formato WKT in una tabella apposita che può essere collegata in n-1 con ogni altra tabella dati. 
Le operazioni CRUD sono disponibili sia sotto forma testuale, che da interfaccia GIS integrata. 
È stato scelto di lavorare con WKT invece che con le estensioni spaziale per mantenere basso il numero delle dipendenze. Attualmente bdus non richiede postgis o spatialite. 
Possibilità di usare più mappe di base, ma la funzione è attualmente hard coded e non personalizzabile. 
Possibilità di visualizzare altri temi in geojson, funzione non documentata e che richiede accesso al filesystem. Mai implementata da GUI perché poco richiesta. 
Possibilità di bulk upload di dati geografici, via geojson, e collegati ai dati presenti 
Bdus5: valutare se conviene affidare la gestione geografica ad estensioni spaziali o se mettere in piedi soluzioni ibride, con trigger che convertono il wkt in geometrie in altri campi ad ogni modifica. 
Bdus5: sicuramente implementare la possibilità di caricare wms, wmts, e simili custom e layer vettoriali statici, tipo geojson, disponibili localmente o via http.

## Harris Matrix
Disponibile plugin di sistema, attivabile per n entità per la codifica e la visualizzazione dei rapporti stratigrafici. Prima si usava l'eseguibile di Graphiz, che doveva essere quindi presente nel sistema (dipendenza), ora si un un port dello stesso in JS, con d3.js
Oltre alla costruzione del grafo, viene offerta come funziona la validazione della coerenza dei dati, impedendo di definire un rapporto più volte
Costruzione di grafici quantitativi
C'è la possibilità di costruire grafici a barre a partire da dati quantitativi contenuti nelle tabelle, ma il procedimento, pur essendoci un GUI apposita è piuttosto complesso. I grafici sono disponibili per la totalità dei record di una tabella oppure per un sottoinsieme (risultati di ricerca)
Possibilità di salvare un dato grafico e quindi eseguirlo al volo, senza doverlo ricomporre nuovamente.
Possibilità di condividere i grafici salvati con altri utenti



## Internazionalizzazione
Il sistema è disponibile in due lingue, italiano e inglese.
c'è la possibilità di aggiungerne altre
la traduzione si può fare attraverso interfaccia grafica
in mancanza di una indicazione dell'utente, viene usata la lingua del browser/sistema

## Gestione vocabolari
Esiste una gestione centralizzata dei vocabolari, gestita attraverso un'unica tabella
Un amministratore può aggiungere nuovi vocabolari, modificare le voci di vocabolari pre-esistenti, riordinarle e/o cancellarle
Il sistema non esegue controlli sui dati al momento della modifica dei vocabolari.
I vocabolari gestiscono stringhe: i campi che usano i vocabolari vengono valorizzati con le stringhe, non con le chiavi esterne
Altre fonti di valori per campi indicizzati
Esistono vari modi per creare tendine di suggerimenti per i campi indicizzati, che siano select, multiselect, tag, oppure select opzionali con possibilità di valori personalizzati, ecc.:
uso di vocabolari
recuperare valori unici da un determinato campo di una determinata tabella (può essere anche se stesso)
id di un record di un'altra tabella (FK): nel db viene inserito l'id, ma viene visualizzato il campo della tabella di destinazione che viene definito come id_field, ovvero una specie di chiave primaria per l'utente, che può o meno coincidere con la vera chiave primaria

## Sistema di messaggistica 
È possibile inviare email di gruppo, a singoli utenti o a gruppi di utenti (per privilegio). Viene usata la funzione email di php e non è fornito un server SMPT.
Bdus5: prevedere la possibilità di fornire una configurazione di server SMPT per l'invio della posta

## Tipologie di campi disponibili per i moduli di inserimento/modifica
Le seguenti tipologia di campi sono disponibili
text: input di una sola linea, semplice
date: campo data. Viene usato il widget del sistema (HTML5) per l'inserimento; prima c'era un plugin jquery
long_text: un textarea multilinea
select: un menu a tendina, select, semplice
combo_select: menu a tendina, con possibilità di aggiungere valori personalizzati
multi_select: possibilità di inserire più di un valore da un menu a tendina, tipo tag. Nel db i valori vengono salvati come stringa, separati da punto-e-virgola
boolean: menu a tendina con valori si/no o yes/no (ecc,, a seconda della lingua) e nel db viene inserito 0/1

## Validazione dei dati 

È possibile, per ciascun campo, definire una politica di validazione dei dati in inserimento. Attualmente la validazione avviene nel client e solo parzialmente anche nel server
int: numerico
email: stringa email
no_dupl: il valore inserito non deve essere già presente in questo campo: non devono esserci duplicati
not_empty: il camp non può essere vuoto
range: il valore deve essere compreso in un range numerico del quale vengono forniti gli estremi
regex: viene fornita una espressione regolare per la validazione
valid_wkt: la stringa deve essere una coordinata WKT valida. La validazione avviene attraverso una chiamata al server

## Uso offline (locale)

---

## Bibliografia


## Risorse online

- Sito web: [https://bdus.cloud/](https://bdus.cloud/)
- Documentazione: [https://docs.bdus.cloud/](https://docs.bdus.cloud/)
- Servizio gestito: [https://bdus.cloud/db/](https://bdus.cloud/db/)
- Servizio gratuito gestito educational (per giovani ricercatori, studenti, appassionati): [https://bdus.cloud/edu/db/](https://bdus.cloud/edu/db/)
- Codice sorgente: [https://github.com/bdus-db/BraDypUS](https://github.com/bdus-db/BraDypUS)