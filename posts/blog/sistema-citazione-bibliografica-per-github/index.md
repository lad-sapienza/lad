---
title: Sistema di citazione bibliografica per GitHub e non solo
autore: Julian Bogdani
licenza: CC BY 4.0 International
livello: medio
img: ./b-dus-db.png
date: 2021-08-22
sommario: "La ricerca scientifica passa sempre di più attraverso la programmazione e la scrittura di codice. Per questo motivo è nato uno standard di citazione bibliografica per le repository digitali che ne permette il riconoscimento academico."
tags:
  - GitHub
  - Citazione
  - CFF
  - Open Standard
  - Ricerca
---

## Introduzione

Il 19 agosto 2021 [GitHub](https://github.com/), la più grande piattaforma per l'hosting di codice _open source_ basata sul [sistema di versionamento Git](https://git-scm.com/), ha [annunciato attraverso un blog-post](https://github.blog/2021-08-19-enhanced-support-citations-github/) l'introduzione di un sistema integrato di citazione bibliografica, che permette agli sviluppatori di indicare in maniera chiara come debba essere citato in ambito academico il loro lavoro di sviluppo.

GitHub è un'azienda che offre servizi agli sviluppatori, aiutando la loro collaborazione, la risoluzione di problemi comuni e lo sviluppo delle tecnologie _open source_. Per questo è stato creata una piattaforma che permette l'_hosting_ di codice open source e un sistema integrato di versionamento utilizzando [Git](https://git-scm.com/), il software _open source_ per la gestione delle versioni [ideato e svilupato da Linus Torvalds](https://en.wikipedia.org/wiki/Git). GitHub è stato acquistato nel 2018 da Microsoft, che ha [sborsato 7,5 miliardi di USD](https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/) per entrare in possesso della piattforma attivamente frequentata da più di 29 milioni di sviluppatori.

## Perché è necessario un sistema di citazioni per il codice

La scrittura di codice, la programmazione ovvero il _coding_, è sempre più una pratica diffusa, entrata a fare parte della metodologia corrente di molte branchie della scienza. La creazione di algoritmi, la loro implementazione e applicazione, la creazione di interfaccie di visualizzzione e analisi dei dati sono a pieno titoli prodotti della ricerca che richiedono un importante investimento in termini di preparazione e di tempo di implementazione. Questo investimento, però, molto raramente (e quasi mai per quanto riguarda le scienze umanistiche) riceve un riconoscimento da parte dell'accademia. Si vengono a creare in questo modo delle vere e proprie barriere alle carriere dei ricercatori che investono parte importante dei loro sforzi in effettivi prodotti della ricerca che vengono ignorati ed esclusi dai sistemi di valutazione della _performance_ scientifica. Eppure lo sviluppo _open source_ è per definizione sottoposto al sistema di [revisione paritara](https://it.wikipedia.org/wiki/Revisione_paritaria), il principale strumento oggi di valutazione della ricerca.

Il forte conservatorismo dell'accademia, restia a prendere in considerazione prodotti diversi dai tradizionali articoli e monografie, è aiutato in questa direzione dalla difficolta oggettiva di citare il lavoro di scrittura di codice open source e quindi di riconoscere il lavoro di colleghi. La possibilità di introdurre un sistema di citazione standard, rende più facile il riconoscimento del contributo di ciascun ricercatore, non solo all'interno di prodotti alterantivi (altri software) ma anche all'interno di prodotti più tradizionali della ricerca, come articoli o monografie.

È per facilitare questa buona pratica che GitHub ha introdotto il supporto per il formato CFF permettendo ai ricercatori di indicare in maniera chiara ai colleghi come desiderano essere citati e come vogliono che il loro lavoro sia riconosiuto.

## Lo standard Citation File Format (CFF)

La necessità per l'implementazione di un sistema di citazione è stata sottolineata dal Software Sustainability Institute, un ente senza scopo di  lucro che significativamente ha come motto “Better Software Better research” nel [2017](https://www.software.ac.uk/blog/2017-12-12-standard-format-citation-files).

Si tratta di un formato testuale non formattato (_plain text_), facilmemte leggibe da un occhio umano e altrettanto facilmente interpretabile da una macchina, che riporta tutte le indicazioni principali. Questi file devono essere compilati e inclusi nei repositori di codice che descivono per facilitare i colleghi che voglioni citare il lavoro. Le specifiche, molto semplici da implementare, sono pubblicate all'indirizzo: [https://citation-file-format.github.io/](https://citation-file-format.github.io/).

Nel file possono essere indicati:

- `cff-version`: la versione dello standard CFF usato, al momento della compilazione di questo document (agosto 2021) la 1.2.0
- `message`: un messaggio testuale rivolto a chi deve usare la citazione
- `authors`: la lista dettagliata degli autori del software, per ciascuno è possibile indicare:
  - `family-names`: il cognome o i cognomi, se un determinato autore ne ha più di uno
  - `given-names`: il nome o i nomi di battesimo
  - `orcid`: l'URL all'identificativo [ORCID](https://orcid.org/) dell'autore (v. sotto)
- `title`: titolo o nome del software, _data set_, ecc. come si desidera che debba essere citato
- `version`: versione del software, _data set_, ecc.
- `doi`: Il Digital Object Identifier che opzionalmente identifica l'opera (v. sotto)
- `date-released`: la data del più recente rilascio, nel dormato AAAA-MM-GG, es. 2021-08-22

La guida completa al formato è disponibile a questo indirizzo: [https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md](https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md).

Anche se non viene riportato nella documentazione ufficiale, CFF utilizza il formato [YAML](https://yaml.org/) per la scrittura dei dati.

### Esempio di implementazione

Per illustrare in maniera pratica e molto semplice un'implementazione di questa nuova funzionalità in GitHub si porta l'esempio della repository di Bradypus, il sistema di gestione di banche dati archeologiche sul Web, uno dei progetti principali del LAD.

Nella repository principale è stato creato il file CITATION.cff con il seguente contenuto:

```yml
cff-version: 1.2.0  
message: "If you use this software, please cite it as below."  
authors:  
  family-names: Bogdani  
  given-names: Julian  
  orcid: https://orcid.org/0000-0001-5250-927X  
title: "BraDypUS"  
version: 4.1.2  
doi: 10.5281/zenodo.1467904  
date-released: 2021-08-22  
```

In questo caso, l'autore è unico, e in caso fossero più di uno il blocco delle linee 4-6 sarebbe ripetuto per ogni autore.

GitHub rivela la presenza del file, lo processa in automatico e produce sulla destra (v. immagine in chiusura) lo snippet per la citazione formattata secono lo stile APA ([Amerian Psychological Association](https://apastyle.apa.org/)) o nel formato [BibTeX](http://www.bibtex.org/).

## CFF: Non solo GitHub

GitHub è sicuramente la piattaforma più famosa per lo sviluppo collaborativo di codice e nel suo ambito è la prima ad avere aggiunto il supporto per il formato CFF. Altre piattaforme di hosting collaborativo di codice come [GitLab](https://about.gitlab.com/), [BitBucket](https://bitbucket.org/) o [Codeberg](https://codeberg.org/) ancora non hanno implementato un supporto nativo del formato CFF, con la possibilità automatica di produrre una citazione formattata, ma nulla vieta, anzi è fortemente consogliato di includere comunque anche in questi _repository_ il file CITATION.cff, in quanto si tratta è un formato indipendente da GitHub.

Attualmente (agosto 2021), il formato CFF è stato adottato dai seguenti progetti, stando a quanto dichiarato nella pagina ufficiale ([https://citation-file-format.github.io/](https://citation-file-format.github.io/)):

- [GitHub](https://github.com/)
- [Zenodo](https://zenodo.org/)
- [Zotero](https://www.zotero.org/)

Inoltre sono stati sviluppati vari strumenti per lavorare con questo formato, es.:

- `initializer` può essere usato per creare un file CITATION.cff: [https://citation-file-format.github.io/cff-initializer-javascript/](https://citation-file-format.github.io/cff-initializer-javascript/)

- `converter` può convertire un file CITATION.cff in altri formati (es., BibTeX, RIS, CodeMeta, e altri): [https://github.com/citation-file-format/cff-converter-python](https://github.com/citation-file-format/cff-converter-python)

Altri strumenti sono elencati in questo link, dalla documentaizone ufficile: [https://github.com/citation-file-format/citation-file-format#tools-to-work-with-citationcff-files-wrench](https://github.com/citation-file-format/citation-file-format#tools-to-work-with-citationcff-files-wrench)

Dal momento che il CFF è un formato aperto, il contributo di tutti è benaccetto ed è stata publicata una guida per facilitare la collaborazione, dispobile all'indirizzo: [https://github.com/citation-file-format/citation-file-format/blob/main/CONTRIBUTING.md](https://github.com/citation-file-format/citation-file-format/blob/main/CONTRIBUTING.md)

## Conclusione

La disponibilità del formato aperto CFF e il recente supporto di GitHub per la sua lettura e formattazione permettono ai ricercatori che si occupano anche di sviluppo software di dare maggiore risalto e valore alla loro ricerca. Attraverso la semplicissima adozione di un file CITATION.cff, hanno la possibilità di definire in maniera chiara come desiderano essere citati dai loro colleghi, e incentivare il riconoscimento accademico del proprio lavoro.

È quindi una conclusione ovvia, quella di incentivare il più possibile l'adozione di questo strumento non solo nelle repository su GitHub, ma anche in altre piattaforme, che allo stato attuale non implementano ancora strumenti per la lettura e formattazione programmatica delle informazioni bibliografiche, con la speranza che lo facciano presto.

La cosa più importante è che il formato è [supportato da Zotero](https://twitter.com/zotero/status/1420515377390530560), quindi se si usa questo software per la gestione dei riferimenti bibliografici, non si avreanno particolari problemi sulla raccolta e utilizzo delle citazioni.

## Approfondimento: Zenodo e gli identificatori ORCID e DOI

**Zenodo** è un repository generica open-access, sviluppato nell'amito del progetto europero [OpenAIRE](https://www.openaire.eu/) e gestito dal [CERN](https://home.cern/). e permette ai ricercatori di depositare articoli, data sets, software di ricerca, report e in generale qualsiasi oggetto digitale relativo alla ricerca. A ogni deposito viene assegnato un DOI, che rende l'oggetto facilmente citabile.

**DOI** sta per _digital object identifier_ ed è un identificativo stabile e univoco per le risorse digitali, standard dell'International Organization for Standardization (ISO). Viene usato per identificare  risorse accademiche, professionali e governative, come gli articoli di riviste, resoconti scientifici, data set, pubblicationi ufficiali, ecc. Il DOI è legato anche a metadati e soprattutto ad un URL dove è possibile trovare la risorsa ed è quindi anche un sistema efficiente di localizzazione. La piatttaforma [https://dx.doi.org/](https://dx.doi.org/) permette di 'risolvere' un DOI, ovvero permette ri raggiungere l'URL più recente di un determinato identificativo.

**ORCID** sta per Open Researcher and Contributor ID edè un sistema di identificazione degli autori della ricerca scientifica. Il sistema risolve i problemi relativi all'omonimia o a cambiamenti di nome degli autori e permette di disambiguare le singole persone. È un sistema molto diffuso nelle scienze dure e tuttora poco diffuso in quelle umanistiche. Le varie istituzioni di ricerca italiane incentivano con vari strumenti la sua adozione. La piattaforma [https://orcid.org/](https://orcid.org/) permette l'assegnazione dell'identificativo e la gestione dei metadati relativi: dati sulla persona e sulla sua produzione scientifica.

## Riferimenti

(in ordine alfabetico)

- APA, stile di formattazione, pagina principale: [https://apastyle.apa.org/](https://apastyle.apa.org/)
- BibTeX: [http://www.bibtex.org/](http://www.bibtex.org/)
- BitBucket, pagina principale: [https://bitbucket.org/](https://bitbucket.org/)
- CFF, presentazione dello standard [https://citation-file-format.github.io/](https://citation-file-format.github.io/)
- CFF, specifiche dello standard [https://github.com/citation-file-format/citation-file-format/blob/main/README.md](https://github.com/citation-file-format/citation-file-format/blob/main/README.md)
- CFF convecrte, strumento per convertire un file CFF in altri formati: [https://github.com/citation-file-format/cff-converter-python](https://github.com/citation-file-format/cff-converter-python)
- CFF initializer, strumento per creare un file CFF: [https://citation-file-format.github.io/cff-initializer-javascript/](https://citation-file-format.github.io/cff-initializer-javascript/)
- CFF, altri strumenti di lavoro: [https://github.com/citation-file-format/citation-file-format#tools-to-work-with-citationcff-files-wrench](https://github.com/citation-file-format/citation-file-format#tools-to-work-with-citationcff-files-wrench)
- CFF, guida completa: [https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md](https://github.com/citation-file-format/citation-file-format/blob/main/schema-guide.md)
- CFF, guida per la collaborazione:[https://github.com/citation-file-format/citation-file-format/blob/main/CONTRIBUTING.md](https://github.com/citation-file-format/citation-file-format/blob/main/CONTRIBUTING.md)
- Codeberg, pagina principale: [https://codeberg.org/](https://codeberg.org/)
- Git, pagina ufficiale: [https://git-scm.com/](https://git-scm.com/)
- Git, pagina dedicata su Wikipedia: [https://en.wikipedia.org/wiki/Git](https://en.wikipedia.org/wiki/Git)
- GitHub, pagina principale della piattaforma: [https://github.com/](https://github.com/)
- GitHub: Annuncio dell'aggiunta della funzine di citazione: [https://github.blog/2021-08-19-enhanced-support-citations-github/](https://github.blog/2021-08-19-enhanced-support-citations-github/)
- GitHub acquistato da Microsoft per 7,5 miliardi di dollari nel 2018: [https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/](https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/)
- GitLab, pagina principale: [https://about.gitlab.com/](https://about.gitlab.com/)
- Programma OpenAIRE: [https://www.openaire.eu/](https://www.openaire.eu/)
- ORCID: [https://orcid.org/](https://orcid.org/)
- Software Sustainability Institute, pagina principale: [https://www.software.ac.uk](https://www.software.ac.uk)
- SSI, proposta dello standard CITATATION: [https://www.software.ac.uk/blog/2017-12-12-standard-format-citation-files](https://www.software.ac.uk/blog/2017-12-12-standard-format-citation-files)
- YAML, specifice del formato: [https://yaml.org/](https://yaml.org/)
- Zenodo, pagina principale: [https://zenodo.org/](https://zenodo.org/)
- Zotero, pagina principale: [https://www.zotero.org/](https://www.zotero.org/)
- Zotero, annuncio del supporto del formato CFF: [https://twitter.com/zotero/status/1420515377390530560](https://twitter.com/zotero/status/1420515377390530560)
