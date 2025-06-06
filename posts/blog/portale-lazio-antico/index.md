---
title: Portale Lazio Antico
autore: Julian Bogdani
licenza: CC BY 4.0 International
livello: base
tags: [Recensioni, Applicazioni web, Dati geografici, WebGIS]
img: ./portale-lazio-antico.jpg
date: 2022-03-21
sommario: "Il portale Lazio Antico, a cura della Sapienza UnIversità di Roma e Regione Lazio offre una mappatura digitale completa dei beni archeologici, dei siti e delle emergenze riferibili al mondo Antico in un periodo compreso tra la metà del sec. IX a.C. e la metà del sec. VI d.C. ."
---

## Introduzione

Il portale Lazio Antico ([https://lazioantico.datascape.dev/](https://lazioantico.datascape.dev/)) è frutto del progetto omonimo, reso possibile da uno specifico accordo interistituzionale che ha visto la Regione Lazio e Sapienza Università di Roma mettere in comune le proprie risorse e conoscenze al fine di valorizzare la ricerca nel settore dei Beni Culturali e facilitare l'avviamento dei giovani ai percorsi della ricerca.

Il portale è stato ufficialmente presentazione il 16 dicembre 2021 all'aula Magna della Sapienza Università di Roma, alla presenza del Ministro della Cultura  Dario Franceschini, il Presidente della Regione Lazio Nicola Zingaretti, la Magnifica Rettrice della Sapienza Università di Roma Antonella Polimeni, il Prorettore al Patrimonio Archeologico della Sapienza Università di Roma Paolo Carafa, la Prorettrice alla Ricerca della Sapienza Università di Roma Maria Sabrina Sarto e il Presidente del FAI, professore emerito Andrea Carandini.

Citando il sito: 
> Lazio Antico offre una mappatura digitale completa dei beni archeologici, dei siti e delle emergenze riferibili al mondo Antico in un periodo compreso tra la metà del sec. IX a.C. e la metà del sec. VI d.C. Lazio Antico copre, oggi, tutto il territorio del Lazio a sud del Tevere e potrà essere esteso a tutta la Regione con una seconda fase di progetto.

Il portale, si articola in due sezioni, una prima pagina di benvenuto che offre informazioni istituzionali e un importante riassunto dei dati finora contenuti (v. sotto); inoltre vi è contenuto un video che mostra in maniera molto efficace l'utilizzo dello stesso. L'atlante vero e proprio si articola come un [Single Page Application](https://developer.mozilla.org/en-US/docs/Glossary/SPA) che ha alla sua base la mappa dinamica del Lazio antico, sulla quale sono rappresetate in maniera dettagliata e non simbolica le evidenze archeologiche.

La mappa dinamica ha varie funzioni di consultazione, sia in 2D, con la classica vista zenitale, che in 3D con la possibilità di inclinare il unto di vista quasi a sfiorare il terreno. Le evidenze archeologiche sono posizionate su una mappa di base che ricostruisce quello che doveva essere il paesaggio antico, sulla quale sono materializzate le aree pertinenti ai singoli cerntro, calcolati—ad eccezione del territorio dell'Urbe—usando i [poligoni di Voronoi](https://it.wikipedia.org/wiki/Diagramma_di_Voronoi). È inoltre possibile sostiture la mappa di base con una base fotografica odierna, uno strumento molto utile per confrontare i cambiamenti nel tempo: l'esempio della foce del Tevere è un caso molto didattico.

È inoltre possibile visualizzare a video delle brevi schede riassuntive per ciascuno dei territori, usando il menu a pie' di pagina (voce _Territori_) e selezionando il territorio dall'elenco che si apre a destra. Quest'elenco è sincronizzato con la mappa, quindi è sufficiente spostarsi nella mappa o zoomare per aggiornare l'elenco.

In maniera simile è possibile sfogliare e consultare le schede dedicate ai molto monumenti ricostruiti (voce _Ricostruzioni_). IN questo caso, la breve descrizione testuale è accompagnata da uno o più allegati sotto forma di immagini raster che contengono le tavole plano-altimetriche dedicate alla singola struttura, utilizzando lo stesso linguaggio grafico messo a punto ed efficacemente utilizzato nel precedente [Atlante di Roma (Princeton University Press 2017)](https://www.worldcat.org/title/atlante-di-roma-antica-biografia-e-ritratti-della-citta/oclc/1006032427).

È possibile filtrare i dati secondo la cronologia, utilizzando un utilissimo _widget_ localizzato nella parte bassa dello schermo, con il semplice trascinamento dei lati corti e/o il trascinemento della finestra attiva delle cronologia. In tempo reale, le evidenze visualizzate a schermo vengono filtrate, nascoste o visualizzate. Si tratta di una funzione molto utile che permette di visualizzare in maniera estrememente semplice anche la quarta dimensione, ovvero il tempo.

La mappa, infine, è implementata utilizzando una serie di icone che facilitano la lettura della tipologia dei resti visualizzati. Ad ogni elemento archeologico mostrato sulla mappa è accopiato, infatti, un elemento puntiforme al quale sono gollegate le informazioni principali per ogni elemento: l'identificativo, la cronoogia, quando è disponibile, la tipologia, e le schede grafiche quando sono disponibili.

## I dati
Al momento della redazione di questa recensione (febbrario 2022), e secondo le informazioni pubblicate nella pagina iniziale del sito, il portale raccoglie e pubblica:
- più di 300.000 record di base;
- più di 41.000 oggetti aggregati;
- circa 70 città/centri abitati e i rispettivi territori;
- circa 150 monumenti ricostruiti in quasi 200 tavole;
- 16 classi di complessi archeologici (Vocaboli), articolate in 184 sottoclassi.

Questi dati si riferiscono all'area del Lazio che si trova a sud del fiume Tevere, che è stato considerato uno dei confini geografici del presente progetto. Questo limite verrà presto eliminato dal proseguimento delle ricerche, come'è stato anticipato nella presentazione ufficiale del progetto del 16 dicembre 2021.

Allo stato attuale i dati sono visualizzabili attraverso la pagina Web ma non è possibile fruirli come servizio esternamento in un Desktop GIS o in altre applicazioni web o meno (WFS/WCS/API ecc.).

## La piattaforma

Non sono state pubblicate sul sito informazioni sulla tecnologia con la quale è costruita l'applicazione web, ma chiaramente si tratta di una applicazione basata su JavaScript. In particolare, per le funzionalità della mappa viene usato [Mapbox GL JS](https://www.mapbox.com/mapbox-gljs) una libreria JavaScript fino a poco tempo fa open source.

Anche per la distribuzione dei dati geografici ci si affida ad un servizio di Mapbox, ovvero [Mapbox Tiling Service](https://www.mapbox.com/mts).

---

## Riferimenti
- Pagina principale del portale: [https://lazioantico.datascape.dev/](https://lazioantico.datascape.dev/)
- Pagina del sito del Dipartimento di Scienze dell'Antichità, Sapienza Università di Roma dedicato al progetto: [https://www.antichita.uniroma1.it/progetto-lazio-antico-paesaggi-urbani-e-rurali-antichi-nella-regione-lazio-analisi-ricostruzione-e](https://www.antichita.uniroma1.it/progetto-lazio-antico-paesaggi-urbani-e-rurali-antichi-nella-regione-lazio-analisi-ricostruzione-e)
- Notizia della presentazione del progetto, presso il sito della Regione Lazio: [https://regione.lazio.it/notizie/cultura-regione-sapienza-roma-lazio-antico](https://regione.lazio.it/notizie/cultura-regione-sapienza-roma-lazio-antico)
