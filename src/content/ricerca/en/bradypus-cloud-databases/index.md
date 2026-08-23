---
title: Bradypus cloud databases
date: 2022-02-04
order: 9
img: bdus.png
description: This post presents Bradypus, an open-source software developed for creating and managing relational web databases, with a particular focus on archaeological research projects and Cultural Heritage. It illustrates the main features, the development philosophy and the databases supported by the platform.

---

Bradypus is free, open-source software developed at Sapienza University of Rome by Julian Bogdani and released under the [GNU AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) licence. It is designed for the creation, implementation and publication of relational databases on the Web. It is currently actively used by around 30 Italian and international research projects, mostly in the field of archaeology and Cultural Heritage more broadly.

## Basic philosophy and main functions
- Bradypus is based on the idea of using a minimal set of configurations to implement a fully functional [RDBMS, Relational Database Management System](https://en.wikipedia.org/wiki/Relational_database_management_system) based on web interfaces, with the possibility of having structured records that also include 1-n dependent tables, called plugins.
- It also allows an administrator to modify the database structure, the data-entry policy (field types and data sources for fields requiring any form of indexing) and the validation of entered data in real time.
- Images and other types of files can be uploaded and associated with one or more records of one or more entities.
- It is possible to create more than one custom form (`template`) for reading/editing the data of each entity. The use of forms can be generalised (for all users) or customised, by user and by context of use; indeed, different forms can be used for data entry, reading and editing, etc.
- The whole platform has been designed as a modular, expandable system. New features not originally planned can be added at any time.
- Development follows a versioning system called [Semantic Versioning, or semver](https://semver.org/), which numbers versions in three parts. The first, leftmost block indicates `major` versions, i.e. versions that introduce significant changes and that often do not guarantee full backward compatibility. Bradypus is currently (April 2022) at `major` version 4. The second block changes whenever new features are introduced within the same `major` version, and is called `minor`. These changes do not create backward-compatibility issues. Bradypus is currently (April 2022) at `minor` version 2. The third block, called `patch`, changes whenever a new release is issued to fix bugs or other issues. These changes do not introduce new features; they simply improve the use of those already available. Bradypus is currently (April 2022) at `patch` version 2.
- The software is released under a free licence, [AGPL-3](https://www.gnu.org/licenses/agpl-3.0.en.html).

## Supported databases
As of today (v.4.x.x), Bradypus supports the following databases in a way that is fully transparent to users:
- SQLite (default)
- PostgreSQL
- MariaDB, MySQL

“Transparently” means that all the features currently implemented in Bradypus are available for all three of these major database engines, and it is up to the user to choose the one best suited to their needs.

[SQLite](https://www.sqlite.org/index.html) is the default database and the simplest and most flexible, as it does not require server configuration. It is the perfect choice in most cases, especially when offline use of the database is anticipated.

[PostgreSQL](https://www.postgresql.org/) and [MariaDB](https://mariadb.org/) / [MySQL](https://www.mysql.com/) are the recommended choice when Bradypus is not expected to be the only point of access to the data. A typical case is when the data is also accessed through other desktop programs such as [QGIS](https://www.qgis.org/), [R](https://www.r-project.org/), etc., for data analysis. This is especially relevant for GIS software, which can also benefit from the spatial extensions offered by these types of databases. The database server configuration is done outside of Bradypus.

## Authentication and user management
Bradypus is a multi-user system, meaning that many different user profiles can be created to interact with the data in real time, including with different access privileges. Users log in to the system using a username (email address) and a password.

As of the current version (4.2.x), the following access profiles are available:
- `pending` (no access): this is the default profile for users who register on their own initiative, and whose request must be authorised by a system administrator:
    - the user exists in the database,
    - the user has no access to the data;
- `read`: this is the basic browsing profile:
    - the user has access to the database,
    - the user can read all records in all tables,
    - the user cannot add new data or modify existing data;
- `read and write, own records only`: in addition to what is already provided for `read`:
    - the user can add new records to all entities present in the database,
    - the user can freely edit only the records they themselves created,
    - the user cannot edit other records, which remain read-only;
- `read and write`, in addition to what is already provided for `read and write, own records only`:
    - the user can freely edit and delete all records of all entities in the database;
- `admin`: in addition to what is provided for `read and write`:
    - the user has access to user management; an `admin` can add, remove and change the settings of other database users (but not of `superadmin` users),
    - the user has full access to vocabulary management (adding, editing, inserting, deleting),
    - the user can create data-entry forms,
    - the user can send group emails;
- `superadmin`: in addition to what is provided for `admin`:
    - the user has full access to the management and modification functions of the database structure, and can add, edit or delete tables, fields and settings,
    - the user can run free-form SQL queries,
    - the user has access to interface translation functions,
    - the user can clear the system cache,
    - the user has full access to the system logs.

A more detailed management of access privileges, potentially down to the level of a single entity or a single record, is currently being tested.

Users can register independently for a specific project. These users are assigned the `pending` privilege, awaiting evaluation of their access by an administrator.

Any user who has access to the database (`read` privilege or above) can freely edit their own data, with the obvious exception of the access privilege itself.

A function is also available to change one's own password without having access to the platform, in case a user no longer remembers their password and can no longer log in. The procedure requires confirmation via email.

## Custom user settings
All users can customise their working experience with the database by configuring custom options that apply either to the current session (until logout) or that can be saved in the database and made available for all future work sessions.

As of the current version (v4.2.x), the customisable options are:
- free choice of interface language; currently (v. 4.2.x), Italian and English are fully supported;
- how query results are paginated; currently, either pagination (the default choice) or automatic loading as results are scrolled (infinite scroll) is available;
- selection of the display/entry forms to be used for each table and for each context (reading and/or editing/entry);
- selection of the fields to display in the results preview of a query.

## CRUD and data management
It is possible to perform all so-called CRUD operations — i.e. create, read, update and delete — on all records of all entities via graphical interfaces. It is also possible to use the record-duplication function for particularly complex, repetitive records, as well as to edit multiple records at the same time, again for repetitive entries.

In addition, it is possible to perform changes on groups of records (bulk edits), should it be necessary to insert the same value in one or more fields across a large number of records. Also for the purposes of bulk data management, it is possible to run a very targeted find-and-replace procedure on a specific field of an entity, across the whole database.

During data entry, when dealing with complex entities that present similar data (e.g. pottery cataloguing), the record duplication function can be used to speed up the process.

## Field types available for entry/editing forms
Data entry and editing is facilitated by a wide range of different graphical widget types for individual fields, which are easy to configure:
- `text`: a simple, single-line entry box;
- `long_text`: a simple, multi-line entry box;
- `date`: a date field, displaying a calendar (the browser's native widget is used);
- `select`: a simple drop-down menu; values can be retrieved from a vocabulary or from the values used in any field of any entity in the database;
- `combo_select`: a drop-down menu with the option to add custom values not originally planned; indexed values follow the same rules as `select`;
- `multi_select`: allows more than one value to be entered from a drop-down menu, like tags; in the database the values are saved as a string, separated by semicolons; indexed values follow the same rules as `select`;
- `boolean`: a drop-down menu with yes/no values; 0/1 is stored in the database.

## Vocabulary management
A centralised vocabulary management system is available. An administrator can add new vocabularies, edit entries in existing vocabularies, and reorder or delete them.
As of the current version (4.2.x), the system does not run checks on already-entered data when individual vocabulary entries are modified.

## Data validation
For each field, it is possible to define a data validation policy for use during entry and editing. Currently (v4.2.x), the possible checks on entered data can be one or a combination of the following:
- `int`: the entered value must be a number;
- `email`: the entered value must be a formally valid email address (its actual existence is not checked);
- `no_dupl`: the entered value must not already be present in this field, i.e. there must be no duplicates;
- `not_empty`: the field must be filled in and cannot be left empty;
- `range`: the (numeric) value must fall within a numeric range, whose bounds are provided;
- `regex`: the entered value must match a regular expression, which must be specified;
- `valid_wkt`: the string must be a valid [WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) coordinate.


## Search
The system implements various types of search, all based on individual entities: from a simple string search to the ability to build very complex SQL queries through a graphical interface, without the need to know the SQL language. Through drop-down menus populated with the names of the fields to be searched and dynamic systems for extracting unique values from tables, it is possible to build one or more simple assertions and chain them together using the logical operators `AND` or `OR`.

In addition, expert users can write SQL fragments and query multiple entities at once, using [SQL JOINs](https://en.wikipedia.org/wiki/Join_(SQL)).

The ability to save queries makes it possible to create a kind of bookmark for particularly complex searches, given a name, which can then be shared with other users. This is a feature particularly suited to fairly complex, time-consuming analyses, making the results easily accessible even to less experienced users.

## Data export
Data relating to an entity, or a subset of it (i.e. the results of a search), can be exported in various formats, such as:
- JSON
- XLS
- SQL (INSERT)
- CSV
- HTML table
- XML

Exports are saved as static files and can either be saved to the user's own machine or shared with other users.
It is also possible to create complete sets of records in sequence, formatted for print-ready reading, as PDF files or sent directly to printing devices.

## Geographic interface
BraDypUS is complemented by a geographic interface called GeoFace, for the visualisation, analysis and editing of geographic data linked to records. Geometries are saved in [WKT: Well Known Text](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) format, in a dedicated table that can be linked in an n-1 relationship to every other data table.
CRUD operations are available both in text form and through a graphical interface based on the integrated GIS built into the system.

It is also possible to use multiple base maps, although this feature is not currently (v4.2.x) customisable by users. In addition to geometries and base maps, other themes encoded in [GeoJSON](https://geojson.org/) format can be displayed.

To simplify working with externally structured datasets, e.g. in QGIS, it is possible to bulk-upload geographic data and automatically link it to existing records.

## Harris Matrix
A system plugin is available, which can be activated for multiple entities, for encoding and visualising stratigraphic relationships. The plugin includes a data-entry module that allows relationships to be entered one at a time, performing a consistency check that prevents a relationship from being defined twice. At the level of the individual record, it is possible to view, in the form of a simple table, all the relationships already defined: the most recent records at the top, contemporary ones on the same level, and the oldest ones at the bottom. The current record sits at the centre of the table.
It is also possible to build much more complex graphical representations of the Harris matrix, as directed graphs — zoomable, navigable and interactive (clicking on a node opens the record sheet for the corresponding item) — for a subset or the whole of the data, through the construction of any kind of search.


## Building quantitative charts
It is possible to build bar charts from quantitative data contained in the various entities. Charts can be built for the entirety of an entity's records, or for a subset, i.e. the results of a search. As with individual searches, charts can also be saved and easily shared with other users. Like Harris matrices, charts are also dynamic entities: once defined, they change as the underlying data changes.

## Internationalisation
The system is available with an interface in two languages, Italian and English. A super-administrator can easily add other translations via the graphical interface, just as the currently available languages can be updated and maintained, again through the graphical interface. The display language is inferred from the user's browser language settings, though the user can change it at will as a personal setting.

## Messaging system
The system allows an administrator to send emails to individual users or to groups of users (by privilege), for internal communications.

## Offline (local) use
As of the current version (v4.2.x), BraDypUS is a package with no external dependencies requiring an Internet connection. This means the software can be run on a single machine or local network without a connection to the Internet. This makes it particularly suited to use on archaeological excavations, storerooms or archives, where a connection is not always available. In general, the software can be run as a single-user program, but it is also possible to set up a local network and use it as a group.
To ensure data integrity, it is possible to “freeze” the cloud version while a local version is in use. Freezing allows read-only access to the data, but not editing, for all active users. At the end of fieldwork, the local version can be synchronised with the online one, and the latter can then be “unfrozen”.


---

## Bibliography
- Bogdani, Julian. 2022. “Archaeological Documentation as a Service. Archaeological Information Systems in the Cloud Era: the Bradypus Case-study”, in _Archeologia e Calcolatori_ 33 (2): 115-134. [DOI: 10.19282/ac.33.2.2022.07](https://dx.doi.org/10.19282/ac.33.2.2022.07); [http://hdl.handle.net/11573/1657651](http://hdl.handle.net/11573/1657651).
- Bogdani, Julian. (2006) 2021. BraDypUS Relational Web Database Managing System for Cultural Heritage. Bologna, Rome. https://doi.org/10.5281/zenodo.1467905.
- ‘BraDypUS Official Guide’. (2020) 2021. 2021. https://docs.bdus.cloud/.
- Bogdani, Julian, and Erika Vecchietti. 2010. ‘From “Text” to “Con-Text”: Using the Web in the Archaeological Research’. In Vesuviana. Archeologie a Confronto, Atti Del Convegno Internazionale (Bologna, 14-16 Gennaio 2008), 809–18. Bologna.


## Online resources

- Website: [https://bdus.cloud/](https://bdus.cloud/)
- Documentation: [https://docs.bdus.cloud/](https://docs.bdus.cloud/)
- Managed service: [https://bdus.cloud/db/](https://bdus.cloud/db/)
- Free managed educational service (for young researchers, students, enthusiasts): [https://bdus.cloud/edu/db/](https://bdus.cloud/edu/db/)
- Source code: [https://github.com/bdus-db/BraDypUS](https://github.com/bdus-db/BraDypUS)