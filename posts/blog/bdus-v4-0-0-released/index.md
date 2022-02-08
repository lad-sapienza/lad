---
title: "BDUS v4.0.0 released"
autore: Julian Bogdani
licenza: CC BY 4.0 International
livello: avanzato
tags: [notizie, bdus4]
img: ./bdus.png
date: 2021-03-28
---


Version 4 has finally been released and the good ol’ 
version 3 has been deprecated after 8 years of distinguished service.
While common ysers will notice onlyb minor graphical changes, 
an almost total rewrite of the project is done under the hood.

A huge effort has been spent on keeping things working and making 
the migration of the available applications as smooth as possibile.
This new version opens the door to future rewriting of the GUI, by
clearly separatng the application logic from the data presentation.

The most important new features are:
- the possibility of interchangeably using SQLite, MySQL, MariaDB 
or PostgreSQL as database engines and data storage
- easily [creating a new application](https://docs.bdus.cloud/create_app/) using GUI tools
- easily managing settingd and database schema using GUI features: 
adding, renaming and removing tables, columns, relations has never been so easy
- a totally [new API](https://docs.bdus.cloud/api/) with a secure and flexible query language shaped after SQL,
and named [ShortSQL](https://docs.bdus.cloud/api/shortsql) to easily and securely 
query your data and build new applications.
- a new guide and documentation site availabe at [https://docs.bdus.cloud/](https://docs.bdus.cloud/)
- more that 200 automated unit tests to rapidly and thoroughly test various parts of the lifecycle
of the application, from creation to configuration and data management, for SQLite, MySQL/MariaDB and PostgreSQL.
- Four different hosting solutions:
    - stable version 4
    - legacy version 3
    - a free to use educational version 4, for younger researchers
    - a development and testing version.
- Finally, version 4 is released with [GNU Affero General Public Licese (AGPL) 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html), instead of the MIT of versions up to 3.  
The GNU Affero General Public License is a modified version of the ordinary GNU GPL version 3. It has one added requirement: if you run a modified program on a server and let other users communicate with it there, your server must also allow them to download the source code corresponding to the modified version running there. The purpose of the GNU Affero GPL is to prevent a problem that affects developers of free programs that are often used on servers. Suppose you develop and release a free program under the ordinary GNU GPL. If developer D modifies the program and releases it, the GPL requires him to distribute his version under the GPL too. Thus, if you get a copy of his version, you are free to incorporate some or all of his changes into your own version. But suppose the program is mainly useful on servers. When D modifies the program, he might very likely run it on his own server and never release copies. Then you would never get a copy of the source code of his version, so you would never have the chance to include his changes in your version. You may not like that outcome. Using the GNU Affero GPL avoids that outcome. If D runs his version on a server that everyone can use, you too can use it. Assuming he has followed the license requirement to let the server's users download the source code of his version, you can do so, and then you can incorporate his changes into your version. (If he hasn't followed it, you have your lawyer complain to him.). [Source [https://www.gnu.org/licenses/why-affero-gpl.html](https://www.gnu.org/licenses/why-affero-gpl.html)]



In the next weeks all available applcations will be migrated to the new version 3 and hopefully we will 
be able to definitively retire v3.

As usual, stay tuned and help testing and bug detection! [Read the docs](https://docs.bdus.cloud/) and 
[file an issue](https://github.com/bdus-db/BraDypUS/issues) is something is not working as expected!