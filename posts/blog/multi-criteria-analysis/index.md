---
title: "Multi criteria weighted-overlay analysis: una guida archeologica"
autore: Domizia D'Erasmo
licenza: CC BY 4.0 International
livello: avanzato
tags: [gis, spatial analysis, landscape archaeology, tutorial]
img: ./mca.png
date: 2022-10-25
sommario: "In questa guida sarà affrontato un caso di utilizzo di multi criteria weighted-overlay analysis tramite software QGIS. Verrà preso in considerazione un caso di studio concreto, una domanda di tipo archeologico relativa ad un ambito cronologico e geografico ben preciso..."
---

# Introduzione

Ogni anno il LAD organizza dei [laboratori GIS](../../didattica/laboratorio-gis-db) fruibili dagli studenti Sapienza e non solo. Nell'ultima edizione (a.a. 2021/2022) durante il laboratorio di GIS Avanzato abbiamo pensato di riadattare un esempio di analisi di sovrapposizione ponderata multi-criteri effettuata su dati contemporanei a un caso prettamente archeologico. L'esperimento ha trovato largo apprezzamento da parte di tutti i partecipanti e pertanto abbiamo deciso di pubblicarlo nel nostro blog con la speranza che possa essere d'aiuto e d'ispirazione a tutti coloro che si muovono nel campo delle analisi territoriali.

>L'analisi di sovrapposizione ponderata multi-criteri (o _multi criteria weighted-overlay analysis_) è un processo di classificazione di aree sulla base di una serie di attributi che queste dovrebbero possedere secondo precisi criteri scelti dall'utente. 

In questa guida sarà affrontato un caso di utilizzo di _multi criteria weighted-overlay analysis_ tramite software QGIS. Verrà preso in considerazione un caso di studio concreto, una domanda di tipo archeologico relativa ad un ambito cronologico e geografico ben preciso.

La domanda archeologica formulata è la seguente:

> Quali sono le aree dell'attuale regione del Lazio che presentano caratteristiche ottimali per lo sviluppo degli insediamenti di età romana imperiale ma che, ad oggi, non hanno dato tracce sicure in tal senso?

Per rispondere in maniera concreta, per reperire i dati necessari a questo tipo di analisi e anche per capire concretamente quali analisi dovranno essere effettuate, è necessario esplicitare meglio la richiesta.

**Guida non archeologica disponibile a:** [http://www.qgistutorials.com/it/docs/3/multi_criteria_overlay.html](http://www.qgistutorials.com/it/docs/3/multi_criteria_overlay.html)

È stato creato un repository per l'accesso a tutti i dati necessari per seguire passo passo la guida: [https://github.com/lab-archeologia-digitale/mcwoa-archeo/](https://github.com/lab-archeologia-digitale/mcwoa-archeo/)

## I dati

### Limite geografico

Il limite geografico è l'informazione più semplice da capire e anche il dato più semplice da reperire. La **Regione del Lazio** ha dei confini amministrativi ben definiti facilmente reperibili online in formato GIS, in particolare per questo esercizio i dati sono stati scaricati da: [https://www.diva-gis.org/gdata](https://www.diva-gis.org/gdata)

### Caratteristiche ottimali per l'insediamento: requisiti, dati, parametri

Questo è un elemento molto più difficile da definire e valutare e certamente molto più soggettivo.

Ai fini di questo esercizio, solo alcuni elementi verranno presi in esame, con parametri decisi a tavolino, ma che possono essere oggetto di discussione. Nello specifico, si ritengono particolarmente interessanti i seguenti elementi:

1. vicinanza alla rete viaria
2. non immediata vicinanza alla rete idrica, che da sempre è causa di rischio, ma neppure troppo distante, visto che l'acqua è una risorsa "costosa" da trasportare
3. non eccessiva vicinanza a insediamenti esistenti, che “esauriscono” il potenziale dell'area  
   
Per calcolare queste variabili abbiamo dunque bisogno di:

4. **una rete stradale di età romana imperiale**: elaborata dal [Ancient World Mapping Center](http://awmc.unc.edu/wordpress/) e liberamente disponibile in formato GIS, all'indirizzo [http://awmc.unc.edu/awmc/map_data/shapefiles/ba_roads/](http://awmc.unc.edu/awmc/map_data/shapefiles/ba_roads/)
5. **Le estensioni interne di acqua (laghi)** sono disponibili sempre a cura del [Ancient World Mapping Center](http://awmc.unc.edu/wordpress/), in formato GIS, all'indirizzo: [http://awmc.unc.edu/awmc/map_data/shapefiles/physical_data/inlandwater/](http://awmc.unc.edu/awmc/map_data/shapefiles/physical_data/inlandwater/)
6. **La rete fluviale** è stata scaricata da [https://www.diva-gis.org/gdata](https://www.diva-gis.org/gdata). Questo dato non è riferito specificatamente all'età romana, quindi al fine di rendere più corretta questa analisi sarebbe necessario un ulteriore lavoro su questo dato.
7. **La rete di insediamenti noti di età romana imperiale** è stata invece scaricata da [Pleiades](https://pleiades.stoa.org/), all'indirizzo: [http://atlantides.org/downloads/pleiades/kml/pleiades-latest.kmz](http://atlantides.org/downloads/pleiades/kml/pleiades-latest.kmz)
8. Infine, il modello digitale del terreno (DEM) con risoluzione di 30m è stato scaricato da [https://opentopography.org/](https://opentopography.org/), attraverso il plugin di `QGIS OpenTopography DEM Downloader`

[Accesso ai dati](https://github.com/lab-archeologia-digitale/mcwoa-archeo/) > Dataset utile allo svolgimento dell'esercizio

1. Creare un nuovo progetto in QGIS e importare i dati elencati precedentemente e presenti nelle cartelle del repository del LAD al seguente link: [https://github.com/lab-archeologia-digitale/mcwoa-archeo/](https://github.com/lab-archeologia-digitale/mcwoa-archeo/)
> Il primo step dell'esercizio consiste nella conversione di ogni layer vettoriale in formato raster. Ai fini della buona riuscita dell'analisi è importante tenere presente che tutti i file raster che da qui in poi saranno convertiti dovranno avere necessariamente la stessa estensione che, nel nostro caso, sarà quella del vettore `confine-lazio`.  

> Il nostro intento è quello di creare dei raster di output assegnando ai pixel il valore di `1` quando ci troviamo di fronte a una strada, un fiume, un lago o un insediamento imperiale e il valore `0` laddove questi elementi non sono presenti.
2. Raggruppare i livelli vettoriali (`fiumi-lazio`, `strade-lazio`, `acque-interne-lazio` e `insediamenti-imperiali`) in un gruppo chiamato `Step-1`
3. Rasterizzare i vettori del gruppo `Step-1`
   1. Menu `Processing` > `Strumenti`
   2. Nel panello che siapre cercare e pprire lo strumento `Rasterize (da vettore a raster)`
      1. In `Parametri` selezionare `strade-lazio` come `Layer in ingresso`
      2. Impostare come `valore fissato da scrivere` a `1,000000`
      3. Impostare `unità di misura del raster in uscita` come `unità georeferenziate`
      4. Impostare `larghezza/risoluzione orizzontale` a `15,000000`
      5. Impostare `altezza/risoluzione verticale` a `15,000000`
      6. Impostare `estensione risultato [opzionale]` come `confine-lazio`
      7. In `attribuisci un determinato valore nullo alle bande in uscita` impostare `non impostato` cancellando il contenuto della casella che di default (è `0,000000`)
      8. In `rasterizzato` salvare il nuovo file come `strade-raster`
         ![rasterizza-strade-1.png](./rasterizza-strade-1.png)
         ![rasterizza-strade-2.png](./rasterizza-strade-2.png)
    > È molto importante che nel campo `attribuisci un determinato valore nullo alle bande in uscita` si assegni `non impostato` (in origine il valore dovrebbe essere impostato su `nodata`). Questa scelta deve essere fatta in prospettiva dell'utilizzo successivo del `calcolatore raster`: quando il `calcolatore raster` incontra un pixel con valore `nodata` imposta anche l'output su `nodata` generando quindi un risultato sbagliato ai fini della nostra analisi.
   3. Ripetere l'operazione sopra per gli altri layer: `fiumi-lazio`, `acque-interne-lazio` e `insediamenti-imperiali` , utilizzando gli stessi parametri. Per quest'ultimo cambiare la risoluzione a 30x30m.

   
   > A questo punto nel progetto GIS saranno presenti 4 file raster e due di questi fanno riferimento a fiumi e laghi. Al fine di ottenere un unico file che rappresenti l'idrografia della regione lazio procederemo, attraverso il `calcolatore raster`, all'unione dei file `acque-interne-raster` e `fiumi-raster`.
   4. Creare un gruppo di layer chiamato `Step-2` e includervi tutti i raster creati in questo passaggio
4. Creare un unico raster per l'idrografia
   1. Cercare e aprire nel panello processing `Calcolatore raster` (sotto `GDAL` > `Raster miscellanea`)
   2. Inserire l'espressione: `"acque-interne-raster@1" + "fiumi-raster@1"`
   3. Utilizzare `confine-raster` come `layer di riferimento`
   4. Salvare il file come `idrografia-3-valori`  
      ![unione-fiumi-acque-interne.png](./unione-fiumi-acque-interne.png)
Il raster in uscita e cioè `raster_idrografia` avrà valore 1 nei pixel dove è presente un corso d'acqua.
>**Importante**: le aree in cui si trovano sia corsi d'acqua che laghi avranno invece valore 2 e questo accade perchè il `calcolatore raster` avrà giustamente sommato i valori riportati nei pixel di `1` ( per un fiume) e `1` ( per un lago). Per correggere questo "errore" e ottenere un output in cui tutte le aree contenenti sia laghi che fiumi avranno il solo valore  di `1` seguire il prossimo step:
5. Eliminare valore 2 e sostituirlo con 1 nel layer `idrografia-3-valori`
   1. Aprire nuovamente il `Calcolatore raster`
   2. Utilizzare la seguente espressione: `"idrografia-3-valori@1" > 0`
   3. Salvare il file come `idrografia-raster`
6. Creare un gruppo di layer chiamato `Step-3` e includervi tutti i raster creati in questo passaggio
> I raster ottenuti fin'ora rappresentano attraverso pixel di valori differenti (`0`,`1`) strade, idrografia ed insediamenti della regione Lazio. Il prossimo obiettivo sarà quindi quello di creare un `raster di prossimità` (_proximity raster_) attraverso un'analisi di prossimità attraverso l'algoritmo `distanza raster`. Questo procedimento creerà una mappa di prossimità raster in cui ogni pixel rappresenterà la distanza dal pixel più vicino nel raster sorgente. Il `raster di prossimità` potrà quindi essere utilizzato per determinaree le aree che si trovano a una certa distanza dall'imput rispondendo, quindi, alla domanda formulata nell'introduzione della guida.
7. Analisi di prossimità (distanza raster)
   1. Aprire lo strumento `Prossimità (distanza raster)` (sotto `GDAL` > `Analisi raster`)
   2. In `layer di ingresso` selezionare `strade-raster`
   3. Come `unità di distanza` impostare `unità georeferenziate`
   4. Impostare come `massima distanza che deve essere generata` il valore `6000` (= 6km)
   5. Impostare `valore Nodata` a `non impostato`
   6. Salvare il file come `strade-prossimita`
      ![prossimita-idrografia.png](./prossimita-idrografia.png)
   7. Aprire il pannello dello `stile dei layer`
   8. In `gradiente colore` impostare come valore massimo (max) `6000`
   9. Ripetere le stesse operazioni per i layer `idrografia-raster` e `insediamenti-raster`
> Allo stato attuale tutti i raster elaborati tramite l'algoritmo `distanza raster` presentano un _continuum_ di valori da 0 a 5000. Per poter procedere all'analisi di sovrapposizione ponderata multi-criteri è opportuno riclassificare i raster per creare dei valori discreti che rappresentino rispettivamente l'idoneità relativa ai pixel in relazione alla distanza da strade, idrografia e insediamenti.
8. Ricalssificazione strade, definendo tre classi, rispettivamente:
   - **100** che raccoglie le aree fino a 1km di distanza,
   - **50** che raccoglie le aree tra 1km e 5 km e
   - **10** che raccoglie le aree distanti più di 6km.
   1. Aprire il `calcolatore dei raster`
   2. Inserire la seguente espressione:  
      `100*("strade-prossimita@1"<=1000) + 50*("strade-prossimita@1">1000)*("strade-prossimita@1"<=6000) + 10*("strade-prossimita@1">6000)`
   3. In `Referencelayer(s)` selezionare `confine-lazio`
   4. Salvare il file come `strade-riclassificato`
      ![strade-classificate.png](./strade-classificate.png)
      ![strade-riclassificate-2.png](./strade-riclassificate-2.png)
9. Riclassificazione acque, definendo tre classi, rispettivamente:
   - **100** che raccoglie le aree oltre i 6km di distanza,
   - **50** che raccoglie le aree tra 1km e 5 km e
   - **10** che raccoglie le aree distanti meno di 1km.
   1. Aprire il `calcolatore dei raster`
   2. Inserire la seguente espressione:  
      `100*("idrografia-prossimita@1">6000) + 50*("idrografia-prossimita@1">1000) * ("idrografia-prossimita@1"<=6000) + 10*("idrografia-prossimita@1"<1000)`
   3. In `Referencelayer(s)` selezionare `confine-lazio`
   4. Salvare il file come `idrografia-riclassificato`
      ![idrografia-riclassificato.png](./idrografia-riclassificato.png)
10. Riclassificare gli insediamenti, definendo tre classi, rispettivamente:
    - **100** che raccoglie le aree oltre i 6km di distanza,
    - **50** che raccoglie le aree tra 1km e 5 km e
    - **10** che raccoglie le aree distanti meno di 1km.
    1. Aprire il `calcolatore dei raster`
    2. Inserire la seguente espressione:  
       `100*("insediamenti-prossimita@1">6000) + 50*("insediamenti-prossimita@1">1000) * ("insediamenti-prossimita@1"<=6000) + 10*("insediamenti-prossimita@1"<1000)`
    3. In `Referencelayer(s)` selezionare `confine-lazio`
    4. Salvare il file come `insediamenti-riclassificato`
       ![insediamenti-riclassificato.png](./insediamenti-riclassificato.png)
> Il penultimo step è quello di procedere con l'analisi di sovrapposizione multi-criteri dove saranno sommati tutti i raster riclassificati tramite lo strumento `calcolatore raster` con il fine di ottenere un solo output che risponda alla richiesta formulata inzialmente: "Quali sono le aree dell'attuale regione del Lazio che presentano caratteristiche ottimali per lo sviluppo degli insediamenti di età romana imperiale ma che, ad oggi, non hanno dato tracce sicure in tal senso?"
11. Analisi finale
    1. Aprire il `calcolatore dei raster`
    2. Inserire la seguente espressione:  
       `("strade-riclassificato@1" + "idrografia-riclassificato@1")*("insediamenti-riclassificato@1" != 1 ) * "confine-raster@1"`
    3. In `Referencelayer(s)` selezionare `confine-lazio`
    4. Salvare il file come `overlay`
> I valori dei pixel del raster `oerlay` vanno da 0 a 300: 0 è l'area considerata meno ottimale allo sviluppo di insediamenti di età romana imperiale nel Lazio mentre 300 è quella considerata più adatta. Volendo visualizzare al meglio il risultato dell'analisi si può procedere all'assegnazione di una simbologia che riporti una scala gradiente di colori per il raster `overlay` e che, soprattutto, permetta di rappresentare al meglio le sfumature che intercorrono tra i valori `0` e `300`.
12. Impostare simbologia `banda singola falso colore`
    - Aprire le proprietà del layer
    - In tipo di visualizzazione impostare `banda singola falso colore`
    - Classificare
      ![overlay.png](./overlay-finale.png)
> Da quì in avanti procedere con l'interpretazione dei dati da parte dell'archeologo!

## Sitografia

1. Ancient World Mapping Center, <[http://awmc.unc.edu/wordpress/](http://awmc.unc.edu/wordpress/)>,  ultimo accesso effettuato il 25 ottobre 2022.
2. DIVA-GIS: free, simple & effective, <[https://www.diva-gis.org/gdata](https://www.diva-gis.org/gdata)>,  ultimo accesso effettuato il 25 ottobre 2022.
3. OpenTopography: Higt-Resolution Topography Data and Tools, <[https://www.opentopography.org/](https://www.opentopography.org/)>, ultimo accesso effettuato il 25 ottobre 2022.
4. Pleiades, <[https://pleiades.stoa.org/](https://pleiades.stoa.org/)>, ultimo accesso effettuato il 25 ottobre 2022.
5. QGIS Tutorials and Tips, <[http://www.qgistutorials.com/it/docs/3/multi_criteria_overlay.html](http://www.qgistutorials.com/it/docs/3/multi_criteria_overlay.html)>,  ultimo accesso effettuato il 25 ottobre 2022.




