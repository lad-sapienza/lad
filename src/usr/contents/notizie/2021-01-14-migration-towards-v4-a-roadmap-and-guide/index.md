---
title: "Migration towards v4: a roadmap and guide"
img: ./bdus.png
date: 2021-01-14
description: "Version 4 is an almost total rewrite of the previous glorious version 3 that has been around since 2013. In these many years multiple features have been added  and many buges have been fixed, making v3 extremly stable and reliable."
tags:
  - BDUS
  - Migrazione
  - Rilascio Versione
  - Software Libero
  - Documentazione
---

Version 4 is an **almost** total rewrite of the previous glorious version 3
that has been around since 2013. In these many years multiple features have been added
and many buges have been fixed, making v3 extremly stable and reliable.
It is currently used in production by almost 30 international research projects
focusing on archaeology and cultural heritage.

Yet, since nothing is forever, it is time to start a gradual migration towards version 4,
which is the right path towards the future. At present, a great work has been done in porting
all the features of the v3 to the new one and we are almost done!


### What's new in V4

#### New DB engines
A very important new feature of v4 is the support for other database engines other then
sqlite. Currently MySQL (and thus MariaDB and PerconaDB) and PostgreSQL are supported.
This comes at some cost: possible bugs and a stricter adhesion to Standard SQL.


#### Safer API
Version 4 makes exclusive usage of [ShortSQL](https://docs.bdus.cloud/api/shortsql)
language to query the database.
Since ShortSQL permits a very granularvalidation of the input data, allowing a high
flexibiluty and query power, the v4 API reaches a high degree of security.
In the first stable release of v4, API v1, deprecated since 2022-01-14 will be removed.
API versioning will be also removed and the API will follow the main versioning pattern.


#### Total rewrite with minimal API change
The whole PHP code has been rewritten trying not to change the main API, debugging
and improving the current functionalities. namespaces, strongly typed PHP code and whitespread
usage of inline documentation will help collaboration anf further development. The update of
all dependencies, both PHP and JS, also improve security.

### TODO list
Before releasing the v4, some more testing and bug-fixing is required. Also the multiplication
of the available database engines, make testing and debugging much more complex and time-consuming.
Also some web-applications already available making wide usage of the API v1 must be migrated
in order to fully comply with the newest version.

So, stay tuned and help testing and bug detection! [Read the docs](https://docs.bdus.cloud/) and 
[file an issue](https://github.com/bdus-db/BraDypUS/issues) is something is not working as expected!