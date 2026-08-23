---
title: "The IT system of IN-Rome. The INscribed city: urban structures and interaction in imperial ROME"
author: Eleonora Iacopini
date: 2023-09-06
description: Research project, P.I. Barbara Borg, ERC Advanced Grant no. 101054143 IN-ROME 2022-2027
order: 17
img: inrome.jpg
---

## Research project details

- **P.I.**: Barbara Borg
- **Funding**: 2022 - 2027 ERC Advanced Grant no. 101054143 IN-ROME
- **Year**: 2022 - 2027
- **Protocol no.**: 101054143
- **LAD Sapienza University of Rome team**:
  - Julian Bogdani [julian.bogdani@uniroma1.it](mailto:julian.bogdani@uniroma1.it)
  - Eleonora Iacopini, [eleonora.iacopini@uniroma1.it](mailto:eleonora.iacopini@uniroma1.it)

## Abstract

[LAD: Digital Archaeology Laboratory at Sapienza](https://lad.saras.uniroma1.it) is part of the working group of the ERC Advanced project IN-Rome, led by the Scuola Normale Superiore, with [Barbara Borg](https://en.wikipedia.org/wiki/Barbara_Borg) as Principal Investigator.

The IN-Rome project aims to understand the urban development and use of space in the suburbs of Rome, in an area of about 13 km from the circuit of the Servian Walls, from the late Republic to the 3rd century AD, drawing on the informational potential contained in the inscriptions held in the [Epigraphic Database Roma (EDR)](http://www.edr-edr.it), whose scientific coordinators include Silvia Orlandi, Professor of Epigraphy at Sapienza.

The georeferencing of the epigraphic data, which currently amounts to around 50,000 items, will provide a huge body of data, essential for a different understanding of urban and social development in space and time. This new geographic-epigraphic approach will make it possible to explore the distribution of human activities across the territory, allowing entirely new models of the settlement and landscape of the City to be developed.

For the georeferencing of the epigraphic data, from a methodological point of view, the project involves cross-referencing the topographic data archived in EDR with those contained in the maps and cadastral registers (_brogliardi_) of the Catasto Gregoriano, the first parcel-based cadastre of the Papal States, promoted by Pius VII in 1816 and put into effect by Gregory XVI in 1835, the digitisation and vectorisation of which is being carried out by the Vienna-based team of the [Austrian Institute of Technology (AIT)](https://www.ait.ac.at/en/).

LAD specifically handles the design and implementation of the IT infrastructure, managing both the server and client sides. As for the database, intended to hold the information from the registers relating to the parcels of the Catasto Gregoriano, an _open source_ system was chosen, using the Directus software, available at [https://inrome.sns.it/db/](https://inrome.sns.it/db/), connected to a [PostgreSQL](https://www.postgresql.org/) database with the [PostGIS](https://postgis.net/) geographic extension for managing the geometric primitives associated with the tabular data. The software's very simple and intuitive interface has enabled all members of the IN-Rome team to access and interact with the database, populating it with various information. The place-name data and the data relating to the ownership of the parcels of the historical cadastre will subsequently be cross-referenced with the location information already available in EDR, thereby enhancing the georeferencing of the individual inscriptions.

In addition to the internal IT management of the project, the Laboratory is also responsible for building the IN-Rome website, [https://inrome.sns.it](https://inrome.sns.it), which is developed with [Gatsby](https://www.gatsbyjs.com), an open-source framework based on [React](https://react.dev/), a JavaScript front-end library used to build user interfaces. The website's content is dynamic and is updated through [GraphQL](https://graphql.org/) queries to the database, making the content easy to keep up to date.

## Resources
- Project page on the website of the Scuola Normale Superiore di Pisa [https://www.sns.it/it/evento/inscribed-city-urban-structures-and-interaction-imperial-rome](https://www.sns.it/it/evento/inscribed-city-urban-structures-and-interaction-imperial-rome)
- Project website (under construction): [https://inrome.sns.it](https://inrome.sns.it)
- Project database: [https://inrome.sns.it/db/](https://inrome.sns.it/db/)
