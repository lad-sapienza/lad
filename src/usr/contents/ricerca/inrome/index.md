---
title: "Il sistema informatico di IN.Rome. The INscribed city: urban structures and interaction in imperial ROME"
author: Eleonora Iacopini
date: 2023-09-06
description: Progetto di ricerca, P.I. Barbara Borg, ERC Advanced Grant no. 101054143 IN-ROME 2022-2027
sort: 17
img: ./inrome.jpg
---

## Dettagli del progetto di ricerca

- **P.I.**: Barbara Borg
- **Finanziamento**: 2022 - 2027 ERC Advanced Grant no. 101054143 IN-ROME
- **Anno**: 2022 - 2027
- **Nr. prot.**: 101054143
- **Team LAD Sapienza Università di Roma**:
  - Julian Bogdani [julian.bogdani@uniroma1.it](mailto:julian.bogdani@uniroma1.it)
  - Eleonora Iacopini, [eleonora.iacopini@uniroma1.it](mailto:eleonora.iacopini@uniroma1.it)

## Abstract

Il [LAD: Laboratorio di Archeologia Digitale della Sapienza](https://lad.saras.uniroma1.it) fa parte del gruppo di lavoro del progetto ERC Advanced IN.Rome, che vede come capofila la Scuola Normale Superiore e [Barbara Borg](https://en.wikipedia.org/wiki/Barbara_Borg) come Principal Investigator.

Il progetto IN.Rome ha l’obiettivo di comprendere lo sviluppo urbano e l’uso dello spazio del suburbio di Roma, in un’area di circa 13 km rispetto al circuito delle Mura Serviane dalla tarda Repubblica al III secolo d.C. sfruttando il potenziale informativo contenuto nelle iscrizioni conservate nella banca dati [Epigraphic Database Roma (EDR)](http://www.edr-edr.it), che vede tra i responsabili scientifici del progetto Silvia Orlandi, Professoressa di Epigrafia presso la Sapienza.

Il georiferimento dei dati epigrafici, che attualmente ammonta a circa 50.000 esemplari consentirà di avere una mole di dati enorme, indispensabili per una diversa comprensione dello sviluppo urbanistico e sociale nello spazio e nel tempo. Questo nuovo approccio geografico-epigrafico consentirà di esplorare la distribuzione delle attività umane sul territorio, permettendo di elaborare modelli completamente nuovi rispetto al popolamento e al paesaggio dell’Urbe.

Per il georiferimento dei dati epigrafici, dal punto di vista metodologico, il progetto prevede di incrociare i dati topografici archiviati in EDR con quelli contenuti nelle mappe e nei brogliardi del Catasto Gregoriano, il primo catasto particellare dello Stato Pontificio, promosso da Pio VII nel 1816 e attivato da Gregorio XVI nel 1835, della cui digitalizzazione e vettorializzazione si sta occupando il _team_ viennese dell’[Austrian Institute of Technology (AIT)](https://www.ait.ac.at/en/).

Il LAD nello specifico si occupa della ideazione e realizzazione della infrastruttura informatica, gestendo sia la parte _server_ che client. Per quanto riguarda la banca dati, destinata ad accogliere le informazioni dei brogliardi relativi alle particelle del catasto Gregoriano, si è optato per un sistema _open source_, con l’utilizzo del software Directus, disponibile all'indirizzo [https://inrome.sns.it/db/](https://inrome.sns.it/db/) a cui si collega un database [PostgreSQL](https://www.postgresql.org/) con estensione geografica [PostGIS](https://postgis.net/) per la gestione delle primitive geometriche associate ai dati tabellari. L’interfaccia molto semplice e intuitiva del software ha messo in condizione tutti i membri del team IN.Rome di accedere ed interagire con la banca dati, implementandola con le diverse informazioni. I dati toponomastici e quelli relativi alla proprietà delle particelle del catasto storico, saranno successivamente incrociati con le informazioni sui luoghi già disponibili in EDR, andando così ad implementare il georiferimento delle singole iscrizioni.

Oltre alla gestione informatica interna del progetto, il Laboratorio si occupa anche della realizzazione del sito web di IN.Rome, [https://inrome.sns.it](https://inrome.sns.it), il quale è sviluppato con [Gatsby](https://www.gatsbyjs.com) un framework open source basato su [React](https://react.dev/), una libreria front-end javascript utilizzata per la creazione di interfacce utente. I contenuti del sito web sono dinamici e si aggiornano tramite query di [GraphQL](https://graphql.org/) alla banca dati, rendendo facilmente aggiornabili i contenuti.

## Risorse
- Pagina del progetto nel sito della Scuola Normale Superiore di Pisa  [https://www.sns.it/it/evento/inscribed-city-urban-structures-and-interaction-imperial-rome](https://www.sns.it/it/evento/inscribed-city-urban-structures-and-interaction-imperial-rome)
- Sito web del progetto (in costruzione): [https://inrome.sns.it](https://inrome.sns.it)
- Database del progetto: [https://inrome.sns.it/db/](https://inrome.sns.it/db/)
