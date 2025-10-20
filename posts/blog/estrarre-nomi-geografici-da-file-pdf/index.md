---
title: "geoNamesFromPdf: Estrazione automatica di toponimi da documenti PDF con intelligenza artificiale"
autore: Julian Bogdani
date: 2025-10-20
licenza: CC BY 4.0 International
livello: avanzato
img: ./geoNamesFromPdf.jpg
sommario: "Presentazione di geoNamesFromPdf, uno strumento open-source per l'estrazione automatica di nomi geografici da documenti PDF, sviluppato per facilitare l'analisi spaziale e l'organizzazione geografica della bibliografia accademica."
tags:
  - strumenti-digitali
  - nlp
  - geospatial
  - python
  - open-source
  - intelligenza-artificiale
  - digital-humanities
inhome: true
---

# geoNamesFromPdf: Estrazione automatica di toponimi da documenti PDF

## Sommario

- [Introduzione](#introduzione)
- [Che cos'è geoNamesFromPdf](#che-cosè-geonamesfrompdf)
- [Caratteristiche principali](#caratteristiche-principali)
- [Come funziona](#come-funziona)
- [Casi d'uso in ambito accademico](#casi-duso-in-ambito-accademico)
  - [Organizzazione geografica della bibliografia](#organizzazione-geografica-della-bibliografia)
  - [Analisi spaziale della letteratura](#analisi-spaziale-della-letteratura)
  - [Gestione di archivi documentali](#gestione-di-archivi-documentali)
  - [Ricerca e sintesi geografica](#ricerca-e-sintesi-geografica)
- [Installazione e utilizzo](#installazione-e-utilizzo)
- [Supporto multilingue](#supporto-multilingue)
- [Sviluppo assistito da AI](#sviluppo-assistito-da-ai)
- [Conclusioni](#conclusioni)

## Introduzione

Nel lavoro di ricerca accademica, specialmente in discipline come l'archeologia, la storia, la geografia e le scienze sociali, la dimensione spaziale è spesso un elemento cruciale per l'analisi e l'interpretazione dei dati. La capacità di identificare rapidamente ed estrarre i riferimenti geografici da grandi volumi di letteratura scientifica può trasformare radicalmente il modo in cui organizziamo, analizziamo e comprendiamo le fonti bibliografiche.

È in questo contesto che nasce **geoNamesFromPdf**, uno strumento open-source sviluppato presso il LAD - Laboratorio di Archeologia Digitale della Sapienza Università di Roma, progettato per automatizzare l'estrazione di toponimi (nomi di luoghi) da documenti PDF utilizzando tecniche avanzate di Natural Language Processing (NLP).

## Che cos'è geoNamesFromPdf

geoNamesFromPdf è un'applicazione Python a riga di comando che sfrutta la potenza di **spaCy**, una delle librerie più avanzate per il processamento del linguaggio naturale, per identificare ed estrarre automaticamente nomi geografici da documenti PDF. Lo strumento è in grado di riconoscere entità geografiche come:

- **Città e località** (Roma, Milano, Atene, Il Cairo)
- **Stati e regioni** (Italia, Lazio, Francia, Toscana)
- **Elementi geografici naturali** (Alpi, Mar Mediterraneo, Fiume Tevere)
- **Strutture e luoghi di interesse** (Colosseo, Acropoli, Foro Romano)

Il software si distingue per la sua capacità di **rilevare automaticamente la lingua** del documento e applicare il modello linguistico più appropriato, garantendo risultati accurati per testi in italiano, inglese, spagnolo, francese, tedesco e molte altre lingue.

## Caratteristiche principali

### 🌍 Supporto multilingue
Lo strumento supporta nativamente oltre 10 lingue, con possibilità di espansione. Il rilevamento automatico della lingua assicura che venga utilizzato il modello NER (Named Entity Recognition) più appropriato per ogni documento.

### 🚀 Installazione zero-friction
Al primo avvio, geoNamesFromPdf verifica automaticamente la presenza delle dipendenze necessarie e, con il consenso dell'utente, procede all'installazione di tutto il necessario, inclusi i modelli linguistici richiesti. Questo elimina le barriere tecniche per gli utenti meno esperti.

### 🎯 Alta precisione
Utilizzando i modelli "large" di spaCy, lo strumento garantisce un'elevata accuratezza nel riconoscimento delle entità geografiche, riducendo significativamente i falsi positivi rispetto ad approcci basati su semplici dizionari o espressioni regolari.

### ⚡ Facilità d'uso
L'interfaccia a riga di comando è intuitiva e richiede un singolo comando per processare un documento:

```bash
python geoNamesFromPdf.py documento.pdf
```

### 🔧 Flessibilità
Gli utenti possono:
- Forzare una lingua specifica per documenti particolari
- Installare facilmente nuovi modelli linguistici
- Visualizzare i modelli disponibili
- Processare batch di documenti

## Come funziona

Il processo di estrazione si articola in diverse fasi:

1. **Estrazione del testo**: Utilizzo di PyMuPDF per estrarre il testo dal PDF
2. **Rilevamento della lingua**: Analisi automatica del testo per identificare la lingua predominante
3. **Caricamento del modello**: Selezione e caricamento del modello spaCy appropriato
4. **Named Entity Recognition**: Identificazione delle entità geografiche nel testo
5. **Post-processing**: Rimozione dei duplicati e ordinamento alfabetico dei risultati

Esempio di output:

```
🌐 Detected language: it
🧠 Using model: core_news_lg v3.8.0

📍 Toponyms found in the PDF (15 total):

- Atene
- Bologna
- Egitto
- Firenze
- Grecia
- Italia
- Mediterraneo
- Milano
- Napoli
- Roma
- Sicilia
- Tevere
- Torino
- Toscana
- Venezia
```

## Casi d'uso in ambito accademico

### Organizzazione geografica della bibliografia

Uno dei casi d'uso più immediati e potenti è l'**organizzazione geografica della bibliografia scientifica**. Consideriamo alcuni scenari pratici:

#### Catalogazione per area geografica
Un archeologo che lavora sull'archeologia romana può utilizzare geoNamesFromPdf per processare centinaia di articoli e monografie, estraendo automaticamente i toponimi menzionati. Questo permette di:

- Creare indici geografici automatici della propria biblioteca digitale
- Identificare rapidamente quali pubblicazioni trattano specifiche aree geografiche
- Scoprire connessioni geografiche tra diverse ricerche
- Organizzare le fonti bibliografiche per regioni di interesse

**Esempio pratico**: Un ricercatore che studia le vie commerciali nell'antichità può processare la sua collezione di 300 PDF e generare un database che mostra quali articoli menzionano specifiche città portuali del Mediterraneo, facilitando la ricerca tematica e comparativa.

#### Database bibliografico geospaziale
Integrando geoNamesFromPdf con un database geografico, è possibile creare un sistema bibliografico geospaziale dove:

- Ogni riferimento bibliografico è associato ai luoghi geografici menzionati
- Le ricerche possono essere filtrate per area geografica
- È possibile visualizzare su mappa la distribuzione geografica della letteratura scientifica
- Si possono identificare lacune nella copertura geografica degli studi

### Analisi spaziale della letteratura

geoNamesFromPdf può essere utilizzato per analisi più sofisticate della distribuzione geografica della ricerca accademica:

#### Mappatura delle aree di ricerca
Processando corpus significativi di letteratura scientifica, è possibile:

- Identificare quali aree geografiche sono più studiate
- Scoprire regioni sotto-rappresentate nella ricerca
- Analizzare l'evoluzione temporale dell'interesse geografico
- Confrontare la distribuzione geografica tra diverse discipline

**Esempio**: Un'analisi di 1000 articoli di archeologia italiana potrebbe rivelare che mentre alcune regioni (es. Lazio, Toscana) sono ampiamente studiate, altre aree presentano lacune nella ricerca.

#### Analisi delle reti geografiche
Lo strumento può aiutare a identificare:

- Connessioni geografiche frequenti nella letteratura (es. Roma-Atene, Venezia-Costantinopoli)
- Schemi di diffusione culturale o commerciale studiati
- Aree di interazione storica più analizzate

### Gestione di archivi documentali

Per istituzioni che gestiscono grandi archivi documentali:

#### Indicizzazione automatica
- Creazione automatica di indici geografici per documenti storici digitalizzati
- Arricchimento dei metadati documentali con informazioni geografiche
- Facilitazione della ricerca e del recupero di documenti per area geografica

#### Controllo qualità
- Verifica della completezza degli indici geografici esistenti
- Identificazione di possibili errori o omissioni nella catalogazione manuale
- Confronto tra diverse versioni o edizioni di documenti

### Ricerca e sintesi geografica

#### Review sistematiche
Per chi conduce review sistematiche della letteratura:

- Identificazione rapida della copertura geografica degli studi
- Estrazione di informazioni geografiche da abstract e testi completi
- Creazione di tabelle riassuntive della distribuzione geografica della ricerca

#### Sintesi geografica rapida
Prima di leggere un documento, è possibile:

- Ottenere una panoramica immediata dei luoghi trattati
- Valutare la rilevanza geografica per la propria ricerca
- Decidere quali documenti approfondire in base alla copertura geografica

### Esempio concreto: Organizzazione di una biblioteca di archeologia

Immaginiamo di avere una biblioteca personale di 500 PDF su archeologia classica. Utilizzando geoNamesFromPdf, possiamo:

1. **Fase 1 - Estrazione massiva**:
   ```bash
   for pdf in biblioteca/*.pdf; do
       python geoNamesFromPdf.py "$pdf" > "toponimi/$(basename "$pdf" .pdf).txt"
   done
   ```

2. **Fase 2 - Creazione database**:
   Importare i risultati in un database (SQLite, PostgreSQL) o foglio di calcolo, creando una tabella che associa ogni PDF ai toponimi estratti.

3. **Fase 3 - Analisi e query**:
   - "Quali articoli parlano di Pompei?"
   - "Trovare tutti i documenti che menzionano sia Roma che Cartagine"
   - "Elencare la bibliografia per regione: Campania, Lazio, Sicilia, etc."

4. **Fase 4 - Visualizzazione**:
   Utilizzare i dati per creare mappe interattive che mostrano:
   - La distribuzione geografica della propria bibliografia
   - Le aree con maggiore copertura bibliografica
   - Le connessioni tra luoghi frequentemente co-citati

## Installazione e utilizzo

### Installazione rapida

Il progetto è disponibile su GitHub ed è distribuito con licenza MIT open-source:

```bash
# Clone del repository
git clone https://github.com/lad-sapienza/geoNamesFromPdf.git
cd geoNamesFromPdf

# Creazione ambiente virtuale (consigliato Python 3.12)
python3.12 -m venv venv
source venv/bin/activate  # su macOS/Linux

# Primo avvio - installazione automatica
python geoNamesFromPdf.py documento.pdf
```

Al primo avvio, lo strumento verifica le dipendenze e propone l'installazione automatica:

```
======================================================================
🚀 FIRST RUN SETUP - geoNamesFromPdf
======================================================================

Checking dependencies...

📦 Missing Python packages:
   ❌ PyMuPDF
   ❌ spacy
   ❌ langdetect

🌍 Missing essential language models:
   ❌ EN - en_core_web_lg
   ❌ IT - it_core_news_lg

❓ Do you want to install missing dependencies now? (yes/no):
```

Rispondendo "yes", tutto viene installato automaticamente.

### Utilizzo base

```bash
# Estrazione automatica con rilevamento lingua
python geoNamesFromPdf.py articolo.pdf

# Forzare una lingua specifica
python geoNamesFromPdf.py -l it documento_italiano.pdf

# Visualizzare lingue disponibili
python geoNamesFromPdf.py --list-languages

# Installare una nuova lingua
python geoNamesFromPdf.py --install-language es
```

## Supporto multilingue

geoNamesFromPdf supporta nativamente:

- 🇮🇹 **Italiano** (it_core_news_lg)
- 🇬🇧 **Inglese** (en_core_web_lg)
- 🇪🇸 **Spagnolo** (es_core_news_lg)
- 🇫🇷 **Francese** (fr_core_news_lg)
- 🇩🇪 **Tedesco** (de_core_news_lg)
- 🇵🇹 **Portoghese** (pt_core_news_lg)
- 🇳🇱 **Olandese** (nl_core_news_lg)
- 🇬🇷 **Greco** (el_core_news_lg)
- 🇵🇱 **Polacco** (pl_core_news_lg)
- 🇷🇴 **Rumeno** (ro_core_news_lg)

Questa copertura multilingue è particolarmente preziosa in contesti accademici internazionali, dove è comune lavorare con bibliografia in diverse lingue.

## Sviluppo assistito da AI

È interessante notare che **geoNamesFromPdf è stato interamente sviluppato utilizzando Claude Sonnet 4.5 tramite GitHub Copilot**. Questo rappresenta un esempio concreto di come l'intelligenza artificiale possa assistere lo sviluppo software in ambito accademico e di ricerca.

### Il processo di sviluppo

Lo sviluppo è stato condotto attraverso una conversazione iterativa con Claude, dove:

1. **Definizione dei requisiti**: Identificazione delle esigenze specifiche per l'estrazione di toponimi da PDF
2. **Scelta delle tecnologie**: Selezione di spaCy, PyMuPDF e langdetect come librerie ottimali
3. **Implementazione progressiva**: Sviluppo incrementale delle funzionalità:
   - Estrazione base di toponimi
   - Aggiunta del rilevamento automatico della lingua
   - Implementazione del supporto multilingue
   - Creazione del sistema di installazione automatica delle dipendenze
   - Sviluppo dell'interfaccia a riga di comando
4. **Testing e refinement**: Identificazione e correzione di problemi (es. compatibilità Python 3.14, gestione emoji nel README)
5. **Documentazione**: Creazione di README completo, CONTRIBUTING.md, e documentazione d'uso

### Vantaggi dello sviluppo assistito da AI

Questo approccio ha permesso di:

- **Accelerare lo sviluppo**: Un progetto che avrebbe richiesto giorni è stato completato in una sessione di lavoro
- **Migliorare la qualità**: Claude ha suggerito best practices, gestione errori robusta, e un'architettura pulita
- **Ampliare le funzionalità**: Features come l'auto-setup e il supporto multilingue sono stati aggiunti naturalmente durante la conversazione
- **Produrre documentazione completa**: README, CONTRIBUTING, e esempi d'uso sono stati generati contestualmente al codice
- **Preparare per open-source**: Licenza MIT, .gitignore completo, e struttura GitHub-ready

### Implicazioni per la ricerca accademica

Questo esperimento dimostra come gli strumenti di AI generativa possano:

- Abbassare le barriere tecniche per ricercatori umanisti che necessitano di strumenti digitali personalizzati
- Permettere la prototipazione rapida di soluzioni per problemi specifici di ricerca
- Facilitare la creazione di strumenti open-source riutilizzabili dalla comunità accademica
- Accelerare il ciclo di sviluppo-test-refinement degli strumenti di ricerca

## Conclusioni

geoNamesFromPdf rappresenta un esempio di come tecnologie avanzate di NLP possano essere rese accessibili e utili per la ricerca umanistica e scientifica. La capacità di estrarre automaticamente informazioni geografiche da grandi volumi di documenti apre nuove possibilità per:

- L'organizzazione e la gestione della bibliografia accademica
- L'analisi spaziale della letteratura scientifica
- La scoperta di pattern e connessioni geografiche nella ricerca
- La creazione di sistemi di information retrieval geograficamente consapevoli

Lo strumento è completamente **open-source** e disponibile su GitHub, dove la comunità accademica può:

- Utilizzarlo liberamente per le proprie ricerche
- Contribuire con miglioramenti e nuove funzionalità
- Adattarlo alle proprie esigenze specifiche
- Condividere casi d'uso e best practices

### Link e risorse

- **Repository GitHub**: https://github.com/lad-sapienza/geoNamesFromPdf
- **Licenza**: MIT License
- **Tecnologie utilizzate**: Python, spaCy, PyMuPDF, langdetect
- **Supporto**: Issues su GitHub

### Per iniziare

Invitiamo tutti i ricercatori interessati a provare geoNamesFromPdf con i propri documenti e a condividere feedback ed esperienze. Il progetto è in continua evoluzione e il contributo della comunità accademica è fondamentale per migliorarlo e adattarlo alle diverse esigenze di ricerca.
