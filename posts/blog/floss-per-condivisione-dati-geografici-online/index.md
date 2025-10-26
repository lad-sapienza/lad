---
title: "Software open source per la condivisione di dati geografici online"
autore: Eleonora Iacopini
date: 2025-03-09
licenza: CC BY 4.0 International
livello: avanzato
img: ./geoserver.jpg
description: "La diffusione di programmi open source sempre più performanti per la gestione dei dati geografici come QGIS, con il conseguente aumento di creatori di dati spaziali fa emergere l’esigenza di avere a disposizione sistemi di gestione di questa mole di dati per la loro fruizione pubblica. Questo articolo propone una panoramica degli strumenti open source a tal scopo oggi più interessanti."
tags:
  - FLOSS
  - Dati Geografici
  - Condivisione
  - GeoNetwork
  - GeoNode

---

## Introduzione

La diffusione di programmi a [sorgente aperta (open source)](https://it.wikipedia.org/wiki/Open_source) sempre più performanti per la gestione dei dati geografici come [QGIS](https://www.qgis.org/it/site/), con il conseguente aumento di creatori di dati spaziali, e la tendenza delle pubbliche amministrazioni italiane a rendere liberamente consultabili i propri dataset online, in applicazione della direttiva [UE 2019/1024](https://eur-lex.europa.eu/legal-content/IT/TXT/PDF/?uri=OJ:L:2019:172:FULL&from=IT), detta **Direttiva Open Data**, recepita nel nostro ordinamento con il [D. Lgs. 200/2021](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2021-11-30&atto.codiceRedazionale=21G00213&elenco30giorni=false), entrato in vigore dal 15 dicembre 2021 fa emergere l’esigenza di avere a disposizione sistemi di gestione di questa mole di dati per la loro fruizione pubblica.

Parlando di [Dati Aperti (Open Data)](https://it.wikipedia.org/wiki/Dati_aperti), non ci si riferisce dal punto di vista del legislatore ad una certa tipologia specifica di dati, ma alla pratica di pubblicare online i dati cosiddetti grezzi (tabelle, statistiche, dati geografici, etc..), rendendoli accessibili con [licenza libera](https://it.wikipedia.org/wiki/Licenza_libera), agli utenti che ne fanno richiesta per la loro condivisione e riuso.

Secondo questa filosofia negli ultimi anni sono stati rilasciati diversi programmi *open source* che consentono di gestire la pubblicazione e la condivisione di varie tipologie di dati, corredati da una serie di informazioni descrittive degli stessi ([metadati](https://it.wikipedia.org/wiki/Metadato)) con particolare attenzione a quelli aventi una natura geografica e dunque alla loro visualizzazione *online*. Tra i molti software e pacchetti, in questo articolo ytratteremo di [Geonetwork](https://geonetwork-opensource.org/) e [Geonode](https://geonode.org/), oggi tra le soluzioni più diffuse per la condivisione dei dati geografici.

> È necessaria una **brevissima precisazione**: non tratteremo qui di [librerie](https://it.wikipedia.org/wiki/Libreria_(software)) e software *client* per la visualizzazione di dati geografici sul Web, quali possono essere [Leaflet](https://leafletjs.com/), [OpenLayers](https://openlayers.org/), [MapLibre](https://maplibre.org/projects/) e altri progetti simili, bensì di strumenti *server* che permettono di pubblicare *online* dati geografici, tipicamente prodotti con strumenti dekstop, in diversi formati, protocolli e standard. Normalmente, i dati pubblicati attravers un server geografico vengono trattati con librerie *client* per la creazione di strumenti webGIS.

### Geonetwork

[Geonetwork](https://geonetwork-opensource.org/) è una applicazione *open source* che si occupa della catalogazione di risorse cartografiche e dei relativi metadati associati ad ognuna di esse. Il sistema permette agli utenti di usufruire di strumenti interattivi, che consentono di gestire dati spaziali in maniera flessibile e condivisa. Un [*framework*](https://it.wikipedia.org/wiki/Framework) che si basa su un doppio principio della gestione dei dati, ovvero questi possono essere archiviati sia su un database interno al sistema, oppure possono essere collocati altrove nella rete. Questa tipologia di gestione dei *data set*, svincola il sistema dal dover archiviare tutti i dati in un unico database, garantendo in questo modo una maggiore fruibilità, reperibilità e standardizzazione dei dati.

I servizi ed i protocolli di Geonetwork si basano sugli [standard aperti (open standard)](https://it.wikipedia.org/wiki/Standard_aperto) come l’[ISO/TC211](https://www.ogc.org/ogc/partners/isotc211) e le specifiche dell’[Open Geospatial Consortium (OGC)](https://www.ogc.org/). Il software è progettato per catalogare una grande quantità di dati spaziali di tipo eterogeneo provenienti da diverse fonti e renderle disponibili agli utenti in modo veloce e standardizzato, con lo scopo di incrementare la cooperazione tra enti ed associazioni, evitare duplicati e rendere sempre aggiornate le risorse implementate nel sistema.

Dal punto di vista dei **requisiti di sistema** Geonetwork richiede la presenza sul server di:
- [Java 8 JDK](https://www.java.com/it/download/help/java8.html)  (Java 11 LTS non è supportata), 
- [Apache Tomcat](https://tomcat.apache.org/) 9.0 e 
- [PostgreSQL](https://www.postgresql.org/) come database anche se di default il DBMS [H2](https://h2database.com/html/main.html) è integrato con l’installazione. 

Dal punto di vista delle risorse Geonetwork richiede un minimo di **1 GB di RAM** e **250 GB SSD**, anche se l’applicazione occupa solo 350 MB.

All’utente non registrato il sistema consente di utilizzare sostanzialmente la ricerca mediante parole chiave libere e la visualizzazione dei dati immessi nel sistema. Effettuata la ricerca, l’utente viene reindirizzato alla pagina dei risultati che possono essere ulteriormente scremati tramite dei filtri preimpostati o zoomando su una piccola mappa per filtrare per posizione. L’utente potrà visualizzare la risorsa come scheda di dettaglio, vederla sulla mappa, oppure scaricarla. Cliccando su una o più risorse è possibile aggiungerle automaticamente alla mappa. Sulla mappa l’utente può aggiungere dei *layers* tramite link [WMS](https://it.wikipedia.org/wiki/Web_Map_Service), [WFS](https://it.wikipedia.org/wiki/Web_Feature_Service) esterni, effettuare misurazioni, stampare, annotare delle considerazioni e filtrare i dati.

Come utente registrato al sistema è possibile oltre ad effettuare tutte le operazioni sopra descritte, contribuire attivamente all’implementazione dei dati, caricando i propri progetti. L’utente può dunque modificare/cancellare o aggiungere diverse tipologie di dati come file vettoriali, file raster, tabelle, WFS (Web Feature Service) e WMS (Web Map Service).

Quando si caricano i dati viene richiesto di scegliere un *template* di metadati, per descrivere le informazioni immesse nel sistema.  I template sono delle schede precompilate di campi, che si basano su standard ISO, quindi quando si inserisce un dato nel sistema è necessario scegliere il template ISO adeguato per descrivere la risorsa immessa, tra questi vi sono il [Dublin core](https://www.dublincore.org/), l’[ISO 19110:2005](https://www.iso.org/standard/39965.html) e l’[ISO 19139:2007](https://www.iso.org/standard/32557.html).

Dalla mappa l’utente può creare nuove mappe.

Dal punto di vista della gestione del sistema la console di amministrazione permette di gestire le seguenti voci:
- Gestione utenti e gruppi
- Harvesting: processo di acquisizione di metadati da origini remote e di archiviazione localmente nel catalogo per una ricerca rapida con possibilità di schedulare i dati.
- Statistiche
- Report (statistiche dei dati inseriti nel sistema e statistiche sulle ricerche effettuate con visualizzazione di grafici a torta, visualizzati sotto forma di report)
- Sistema di classificazione dei metadati
- Impostazioni (configurazione generale del portale e configurazioni: del server; dell’interfaccia utente; dei CSS; del CSW; del Map server)
- Tool (Import Metadata, INSPIRE Reference Validator)

### Geonode

GeoNode è un altro [Content Management System (CMS)](https://it.wikipedia.org/wiki/Content_management_system) per dati geospaziali che permette la loro creazione, condivisione e l’uso collaborativo. I set di dati possono essere caricati in diversi formati, le mappe possono essere modificate, cambiate di stile e aggregate attraverso strumenti utilizzabili dal browser, mappe e metadati possono essere pubblicati e ricercate, mentre gli utenti possono caricare revisioni, voti e commenti.

Geonode è creato utilizzando: 
- [GeoServer](https://geoserver.org/), 
- [GeoExplorer](GeoExplorer), 
- [pycsw](https://pycsw.org/), 
- [Django](https://www.djangoproject.com/) e 
- [GeoExt](https://geoext.org/).

Rispetto a Geonetwork, Geonode richiede un server molto più potente che abbia come requisiti minimi **16GB di RAM** per l'ambiente di produzione, un processore **2.2GHz con 4 core**, **30 GB** di spazio utilizzato solo per il software ed una architettura a **64-bit** fortemente consigliata.

In Geonode l’utente registrato può effettuare le ricerche sul catalogo dei dati e pubblicare i propri. Le estensioni supportate per il caricamento sono: 
- [ESRI Shapefile](https://it.wikipedia.org/wiki/Shapefile), 
- [GeoTIFF](https://it.wikipedia.org/wiki/GeoTIFF), 
- [Comma-separated Value (CSV)](https://it.wikipedia.org/wiki/Comma-separated_values), 
- Zip Archive, 
- XML Metadata File, 
- [Styled Layer Descriptor (SLD)](https://en.wikipedia.org/wiki/Styled_Layer_Descriptor).

Geonode offre la possibilità anche di modificare direttamente i dati inseriti nel sistema (*Editing online*) per quanto riguarda gli stili, i metadati associati alle risorse e le informazioni contenute ad esempio nelle tabelle degli attributi relative ai file vettoriali. La modifica degli stili grafici dei dati vettoriali può essere fatta sia mediante l’interfaccia grafica, sia modificando il codice sorgente.

I dati inseriti nel sistema possono essere condivisi, stampati, filtrati ed esportati in base alle esigenze. I dati possono essere esportati in diversi formati, tra cui [Geojson](https://it.wikipedia.org/wiki/GeoJSON), [GML](https://it.wikipedia.org/wiki/Geography_Markup_Language), Shapefile e CSV.

In Geonode oltre a archiviare dati geospaziali è possibile caricare moltissime tipologie di documenti di diversa natura come immagini, documenti testuali, file compressi, audio, video oppure presentazioni.
Tra le varie funzioni, il programma consente anche di creare *ex-novo* un dataset vettoriale, specificando la tipologia geometrica e i campi della tabella degli attributi.

Anche Geonode offre la possibilità di gestire gli utenti e rispettivi permessi di accesso ad un determinato gruppo di lavoro, aggiungendo anche un sistema di revisioni, voti e commenti sui dati ed il tracciamento dei Flussi delle attività, con la disponibilità di attivare Annunci e notifiche.

![geonode_workflow.jpg](./geonode_workflow.jpg)  
_Schema del Workflow di pubblicazione dei dati, dall’inserimento al rilascio._



### Tabelle riassuntiva delle funzioni a confronto

| | Geonetwork | Geonode |
| ------- | ------- | ------ |
|Gestione metadati ISO19115/ISO19119/ISO19139/ISO19110 e Dublin Core|✓|✓|
|Editing metadati e template|✓|✓|
|Gestione Thesauri metadati|✓|✓|
|Sincronizzazione metadati tra cataloghi (GeoNetwork, CSW, OGC WxS GetCapabilities, WebDav, ArcSDE, Thredds, OGC WFS Features, OAI-PMH)|✓| ✓|
|Web Map Services (WMS)|✓|✓|
|Web Map Tile Services (WMTS)|✓|✓|
|Web Features Services (WFS)|✓|✓|
|Catalogue Services for the Web (CSW)|✓|✓|
|Web Coverage Services (WCS)|✓|✓|
|Web Processing Service (WPS)|✓|✓|
|Web Map Context (WMC)| |✓|
|Tile Map Service (TMS)| |✓|
|Styled Layer Descriptor (SLD)|✓|✓|
|Gestione utenti e gruppi|✓|✓|
|Upload files vettoriali|✓|✓|
|Upload files raster|✓|✓|
|Upload files tabellari|✓|✓|
|Upload files PDF|✓|✓|
|Editing Online| |✓|
|Creazione nuovi dataset vettoriali| |✓|
|Support commenting|✓|✓|
|Generate charts|✓|✓|
|Rate datasets| |✓|
|Edit permissions|✓|✓|
|Connessione ad altri database|✓|✓|
|Feed Rss|✓|  |
|GeoRss|✓|✓|
|Interfaccia multilingua|✓|✓|
|Open Archives Initiatives (OAI-PMH)|✓|  |
|OpenSearch-Geo / INSPIRE Atom|✓| |
 

## Riferimenti
- Direttiva UE 2019/1024, [https://eur-lex.europa.eu/legal-content/IT/TXT/PDF/?uri=OJ:L:2019:172:FULL&from=IT]()

- D. Lgs. 200/2021, [https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2021-11-30&atto.codiceRedazionale=21G00213&elenco30giorni=false](https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2021-11-30&atto.codiceRedazionale=21G00213&elenco30giorni=false)
- Geonetwork, [https://geonetwork-opensource.org/](https://geonetwork-opensource.org/)
- Geonode, [https://geonode.org/](https://geonode.org/)
- ISO/TC 211 Geographic information/Geomatics,  [https://www.ogc.org/ogc/partners/isotc211](https://www.ogc.org/ogc/partners/isotc211)
- Open Geospatial Consortium, [https://www.ogc.org/](https://www.ogc.org/)
- Dublin core, [https://www.dublincore.org/](https://www.dublincore.org/)
- ISO 19110:2005, [https://www.iso.org/standard/39965.html](https://www.iso.org/standard/39965.html)
- ISO 19139:2007, [https://www.iso.org/standard/32557.html](https://www.iso.org/standard/39965.html)
- Geoserver, [https://geoserver.org/](https://geoserver.org/)
- Geoexplorer, [https://github.com/GeoNode/geoexplorer](https://github.com/GeoNode/geoexplorer)
- PyCSW, [https://pycsw.org/](https://pycsw.org/)
- Django, [https://www.djangoproject.com/](https://www.djangoproject.com/)
- GeoExt, [https://geoext.org/](https://geoext.org/)
- Qgis, [https://www.qgis.org/it/site](https://www.qgis.org/it/site)
