---
title: "Guida all'installazione di Geonode su server Linux"
autore: Eleonora Iacopini
licenza: CC BY 4.0 International
livello: avanzato
tags: [geodati, open source, gis, webGIS, tutorial]
img: ./geonode.png
date: 2022-10-18
sommario: "Geonode è un software molto diffuso per la condivisione dei dati geografici, utilizzato da numerosi enti pubblici e privati per la gestione e la distribuzione di varie tipologie di risorse cartografiche e non solo."
---

## Introduzione

Questo articolo è il secondo di una serie di contributi dedicati alle metodologie e software per la pubblicazione online dei dati archeologici geografici. Si rimanda, pertanto, all'articolo specifico per un'introduzione sui [software open source per la condivisione di dati geografici online](../softwater-os-condivisione-dati-geografici-online).

Nel presente articolo si affronterà in maniera molto pratica e concreta il processo di installazione della più recente versione di [GeoNode](https://geonode.org/), il cui codice sorgente è disponibile nel relativo repository di [GitHub](https://github.com/GeoNode/geonode/). Al momento in cui pubblichiamo questo contributo (ottobre 2022) la versione disponibile più recente di GeoNode è la **4.0.0**.

Come ben noto, è possibile installare GeoNode su diversi sistemi operativi e piattaforme, tuttavia è necessario avere un ambiente di produzione con dei requisiti piuttosto alti; infatti il software per poter essere performante necessita di una architettura a **64-bit**, **16GB di RAM**, un processore **2.2GHz** con **4 core**, un minimo di **30GB** di spazio disco dedicato solo al programma.

In questa guida si descriverà l'installazione su un sistema operativo [Linux](https://it.wikipedia.org/wiki/Linux) della famiglia [Debian](https://www.debian.org/index.it.html), nello specifico [Ubuntu 20.4](https://www.ubuntu-it.org). Questa scelta è dettata dalla grandissima diffusione oggi dei sistemi operativi Debian/Ubuntu nel settore server, per cui è molto facile che, se si acquista un servizio [VPS](https://it.wikipedia.org/wiki/Virtual_private_server), ci si trovi davanti a questi sistemi operativi.

Infine, esistono vari modi di installare GeoNode e in questa guida si seguirà quello che prevede l'utilizzo di [Docker](https://www.docker.com/), raccomandato anche nella [guida ufficiale](https://github.com/GeoNode/geonode/#install). Docker è una piattaforma software che permette di creare, testare e distribuire applicazioni con la massima rapidità, in quanto raccoglie il software in unità standardizzate chiamate _**container**_ che offrono tutto il necessario per la loro corretta esecuzione, incluse librerie, strumenti di sistema, codice e _**runtime**_. Con Docker, è possibile distribuire e ricalibrare le risorse per un'applicazione in qualsiasi ambiente, tenendo sempre sotto controllo il codice eseguito. In altre parole, con Docker è possibile creare ambienti di esecuzione del tutto simili o identici su piattaforme (hardware e sistema operativo) anche molto diversi tra loro.

## Requisiti
Per seguire il processo di installazione che verrà spiegata di seguito, è necessario avere già a propria disposizione una macchina virtuale o reale con preinstallato la più recente versione di Ubuntu, ovvero la versione 20.10. Sarà necessario avere accesso al terminale della macchina, dal momento che per tutte le operazioni di installazione e configurazione richiedono accesso al terminale. Se  si tratta di una macchina remota, sarà dunque necessario avere accesso `ssh`. Questa guida non copre la fase di installazione del sistema operativo e il primo accesso alla macchina. Esistono oggi moltissime soluzioni cloud-based, di costo anche esiguo, che vi permettono di acquistare un servizio [VPS (Virtual Private Server)](https://it.wikipedia.org/wiki/Virtual_private_server) molto efficiente. A scopo semplificativo, si possono elencare, tra le tantissime opzioni disponibili, [OVH Cloud](https://www.ovhcloud.com/it/) e [Hetzner](https://www.hetzner.com), aziende con le quali non abbiamo nessun legame, se non l'esperienza di utilizzo per progetti di varia scala.

**Attenzione**  
Alcuni dei commandi che vendono elencati necessitano per poter essere eseguiti di un livello di accesso di amministratore del sistema. Tali commandi sono facili da individuare, in quanto sono preceduti dalla parola `sudo`, acronimo della frase inglese _Super User Do_ (utente amministratore esegui). A seconda da com'è impostato il sistema è possibile che la richiesta di eseguire un commando con `sudo` sia accompagnata dalla richiesta della password. In alcune configurazione all'utente `root` non viene richiesta la password.

## Guida all'installazione

### 1. Installazione delle dipendenze generiche

Per poter funzionare, GeoNode ha bisogno di alcuni pacchetti software generici legati alle funzionalità GIS. Per quanto generici, queste librerie e software sono comunque settoriali, relativi alla visualizzazione e analisi spaziale, e quindi non sono disponibili nel _repository_ principale di Ubuntu, chiamato **Main**. Si può considerare il _repository_ Linux come un registro centralizzato dove vengono elencati e resi disponibili software e librerie per una installazione facilitata e se si vuole approfondire l'argomento si rimanda all'articolo in inglese disponibile al seguente indirizzo:[https://itsfoss.com/ubuntu-repositories/](https://itsfoss.com/ubuntu-repositories/).


#### 1.1. Aggiunta del repository UbuntuGIS

I pacchetti necessari sono mantenuti nel _repository_ [Ubuntugis](https://wiki.ubuntu.com/UbuntuGIS). Si tratta di un _repository_ ufficiale e specializato per il mondo GIS che rende possibile installare in maniera facilitata software e pacchetti necessari per poter lavorare con i dati geografici. Tra i numerosi contenuti a cui dà accesso questo pacchetto ricordiamo:
- la libreria [GDAL](https://gdal.org/) che serve per leggere e scrivere numerosi formati dati geografici, 
- [GRASS](https://gdal.org/), 
- [Mapnik](https://mapnik.org/), 
- [Leaflet](https://leafletjs.com/) che è una libreria JavaScript per lo sviluppo di mappe geografiche interattive,
- [Mapserver](https://mapserver.org/)
- ecc.

Si aggiunge il _repository_ alla lista delle _repository_ disponibili e attive:

```bash
sudo add-apt-repository ppa:ubuntugis/ppa
```

E quindi si aggiorna l'indice:

```bash
sudo apt update –y
```

Ricordiamo che `-y` sta per `yes` e permette di sopprimere eventuali richieste di conferme da parte del programma di installazione, rispondendo a tutte positivamente.


#### 1.2. Installazione delle dipendenze generiche

Siamo ora pronti per installati una serie di pacchetti e librerie, necessari all'installazione di Geonode. Anche in questo caso forniamo la risposta di default `-y` per velocizzare il processo di installazione.

```bash
sudo apt install -y python3-gdal=3.3.2+dfsg-2~focal2 gdal-bin=3.3.2+dfsg-2~focal2 libgdal-dev=3.3.2+dfsg-2~focal2 python3-pip python3-dev python3-virtualenv python3-venv virtualenvwrapper libxml2 libxml2-dev gettext libxslt1-dev libjpeg-dev libpng-dev libpq-dev software-properties-common build-essential git unzip gcc zlib1g-dev libgeos-dev libproj-dev sqlite3 spatialite-bin libsqlite3-mod-spatialite
```

Nel commando appena inserito i vari pacchetti sono elencati separati da spazio. Tra gli altri, il commando sopra installerà:
- [Python3-gdal](https://packages.debian.org/stretch/python3-gdal) che consente a python di manipolare i dati Gdal (Geospatial Data Abstraction Library),
- [GEOS](https://packages.debian.org/stretch/libgeos-dev) che fornisce al sistema funzioni geometriche fondamentali sui dati spaziali, 
- [PROJ](https://packages.debian.org/stretch/libproj-dev) per la gestione delle proiezioni cartografiche e l'estensione geospaziale
- [SQLite](https://www.sqlite.org/index.html),
- ecc.


### 2. Installazione di Docker
Come accennato nei paragrafi iniziali, si installerà Geonode come un _conmtainer_ di Docker, dunque è fondamentale installare i pacchetti preliminari essenziali. È quindi necessario attivare il _repository_ Universe, che è un repository standard di Ubuntu, che in modo simile al _repository_ Main contiene software FOS (free and open source), ma a differenza di questo non è mantenuto dagli sviluppatori di Ubuntu, i quali non garantiscono aggiornamenti costanti di sicurezza.

#### 2.1 Aggiungiamo il repository Universe
```bash
sudo add-apt-repository universe
```
Successivamente è necessario aggiornare l'indice:
```bash
sudo apt-get update –y
```

#### 2.2. Installiamo le dipendenze di Docker
A questo punto siamo pronti per installare le dipendenze di Docker, tra i quali anche [git](../git-controllo-di-versioni-1/) e alcuni pacchetti per la sicurezza dell'installazione:

```bash
sudo apt-get install -y git-core git-buildpackage debhelper devscripts apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

#### 2.3. Installazione della chiave crittografica di Docker
Si è quasi pronti a scaricare Docker per Ubuntu dal [sito ufficiale](https://download.docker.com/linux/ubuntu/gpg); è solo necessario prima scaricare e installare una chiave crittografica di verifica che assicura che il pacchetto che si verrà installato è esattamente quello ufficialmente rilasciato. Si userà [cURL](https://curl.se/) per scaricare la chiave e `apt-key add` per installarla:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

#### 2.4. Aggiungiamo il repository specifico di Docker
Possiamo quindi aggiungere il _repository_ di Docker e aggiornare l'indice:

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt-get update –y
```
#### 2.5 Installiamo Docker
E finalmente è possibile installare Docker:
```bash
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
```

#### 2.6. Installiamo Docker Composer
A differenza della guida ufficiale, che potrete trovare a questo [link](https://docs.geonode.org/en/master/install/advanced/core/index.html#docker), questa installazione qui descritta prevede l’aggiornamento di `Docker Compose` alla versione 1.29. [Docker Compose](https://docs.docker.com/get-started/08_using_compose/) è uno strumento sviluppato per definire e condividere applicazioni composti da molti _container_:

```bash
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
sudo usermod -aG docker ${USER}
```

I tre commandi sopra, in ordine:
- scaricano il pacchetto,
- lo rendono eseguibile, aggiungendo i permessi di esecuzione (`+x`) al file,
- aggiungiamo all'utente corrente (ovvero il nostro, quello che sta faccendo l'installazione) il gruppo `docker` ([maggiori informazioni qui](https://techoverflow.net/2019/04/30/what-does-sudo-usermod-a-g-docker-user-do-on-linux/)),

### 3. Installazione di Genode

#### 3.1. Creazione cartella e configurazione permessi
A questo punto è possibile installare GeoNode, per cui si crea la cartella che conterrà l'installazione (l'opzione `-p` consente di creare in automatico tutte le sotto cartelle del percorso in oggetto):

```bash
sudo mkdir -p /opt/geonode/
```
Si configurano i permessi della cartella appena creata e dell'utente `loggato ($USER)` come segue:

``` bash
sudo usermod -a -G www-data $USER
sudo chown -Rf $USER:www-data /opt/geonode/
sudo chmod -Rf 775 /opt/geonode/
```

In dettaglio i commandi sopra permettono di:
- aggiungere al gruppo `www-data`, lo stesso gruppo del server web (`apache`), l'utente `loggato ($USER)`
- si cambia l'utente proprietario e il gruppo principale alla cartella `/opt/geonode`; il nuovo utente proprietario sarà l'utente `loggato ($USER)` e il nuovo gruppo principale sarà `www-data`
- si cambiano al directory `opt/geonode`  permessi in `775`, che significa che proprietario e membri del gruppo principale possono leggere, scrivere ed eseguire i file della cartella, mentre gli altri utenti possono solo leggere ed eseguire.

Ci si sposta a questo punto dentro la cartella `/opt` e vi si clona la repository ufficiale di GeoNode, usando `git`; nello specifico si installerà la versione **4.0.0post1** di GeoNode:

#### 3.2. Scaricamento, installazione e avvio di GeoNode
```bash
cd /opt/geonode
git clone https://github.com/GeoNode/geonode.git -b 4.0.0post1 .
```

Ci si sposta dentro la cartella che contiene i file del programma e installiamo (facciamo un _build_) il software:

```bash
cd /opt/geonode
docker-compose build --no-cache
```

Una volta conclusa la fase di installazione, che richiede alcuni minuti è possibile avviare i pacchetti e renderli attivi attraverso il comando.

```bash
docker-compose up –d
```

### 4. Configurazione di GeoNode

A questo punto GeoNode è installato e avviato, ma è necessario configurarlo con alcuni parametri minimi personalizzati per un utilizzo ottimale. La configurazione di GeoNode è centralizzata e affidata ad un unico file che contiene le configurazioni principali sotto forma di variabili semplici, che vengono caricate all'avvio del programma e fanno farte dell'ambiente di esecuzione.  
Il file è `/opt/geonode/.env` ed è necessario un semplice editor di testo per modificarlo.  
Per facilità, si userà in questa guida [`nano`](https://linux.die.net/man/1/nano), un editor che è spesso incluso nelle installazioni Linux.

Per comprendere la compilazione di alcuni di questi parametri è opportuno spiegare brevemente il sistema di autenticazione e autorizzazione di Geonode ed il suo rapporto con le componenti esterne che utilizza per determinate operazioni, come ad esempio Geoserver.
Geonode ha un sistema di autenticazione che si basa sul sistema di sicurezza di [Django](https://www.djangoproject.com/), il framework con il quale è stato realizzato il software, che consente al programma di gestire utenti, gruppi, ruoli e permessi, mentre le componenti esterne come Geoserver, hanno il loro sistema di autenticazione che deve essere sincronizzato con quello di Geonode. Geonode interagisce con Geoserver utilizzando un sistema di sicurezza basato sul protocollo [OAuth2](https://it.wikipedia.org/wiki/OAuth), questo consente agli utenti registrati su Geonode di poter accedere direttamente a Geoserver. 
Geonode è abilitato per fare da _**OAuth Provider**_ per certificare la veridicità dell'identità dell'utente, consentendo così al sistema di lavorare in un ambiente isolato e consentire al software stesso di autenticare utenti privati gestiti dal sottosistema di autenticazione DJango.
Dunque nel file .env troveremo tre campi che si riferiscono al sistema di autenticazione:
- OAUTH2_CLIENT_ID
- OAUTH2_CLIENT_SECRET
- SECRET_KEY

L'installazione di Geonode normalmente assegna a questi campi dei valori di default:

- OAUTH2_CLIENT_ID=Jrchz2oPY3akmzndmgUTYrs9gczlgoV20YPSvqaV
- OAUTH2_CLIENT_SECRET=rCnp5txobUo83EpQEblM8fVj3QT5zb5qRfxNsuPzCqZaiRyIoxM4jdgMiZKFfePBHYXCLd7B8NlkfDBY9HKeIQPcy5Cp08KQNpRHQbjpLItDHv12GvkSeXp6OxaUETv3
- SECRET_KEY='myv-y4#7j-d*p-__@j#*3z@!y24fz8%^z2v6atuy4bo9vqr1_a'

Valori che poi ritroveremo nell'area di amministrazione nella sezione _**Home - Django OAuth Toolkit - Applications - GeoServer**_ . che consigliamo di modificare una volta finita l'installazione sia nel file .env che nella parte amministrativa.
Per maggiori informazioni potete leggere il capitolo specifico di Geonode in cui parla del sistema di Autenticazione e Autorizzazioni a questo [link](https://docs.geonode.org/en/master/advanced/components/index.html).


Per aprire e modificare il file, eseguire:
```bash
nano /opt/geonode/.env
```


#### 4.1. Il file .env

Nei prossimi paragrafi verranno proposte alcune modifiche al file `.env` utili a personalizzare GeoNode, senza pretesa di essere esaustivi.

**Attenzione**: è molto importante tenere segreto in fase di produzione il file `.env`, dal momento che contiene le password, chiavi crittografiche e altri dati sensibili della vostra applicazione.

Iniziamo con un breve elenco delle voci da cambiare e, poi, diamo una versione completa del file, dopo i cambiamenti.

- `GEONODE_LB_HOST_IP` (circa linea 3 del file): andrebbe valorizzato la con il nome del dominio dove sarà disponibile l'installazione. Solo per fornire un esempio, indichiamo un dominio fasullo: **geonode.example.com**
- `GEONODE_LB_PORT` (circa linea 4 del file): andrebbe valorizzato la porta dove sarà disponibile l'installazione. Di norma la porta di default del protocollo `http` è l'80 e viene spesso ommessa. Solo per fornire un esempio, indichiamo la porta **80**
- `SITEURL` (circa linea 35 del file): andrebbe valorizzato la con l'URL completo del dominio dove sarà disponibile l'installazione. Solo per riprendere l'esempio di prima, indichiamo un URL fasullo: **https://geonode.example.com**
@Julian: il resto da fare
- ALLOWED_HOSTS=['django', '*','geonode.example.com']
- HTTPS_HOST=https://geonode.example.com
- GEOSERVER_WEB_UI_LOCATION=https://geonode.example.com/geoserver/
- GEOSERVER_PUBLIC_LOCATION=https://geonode.example.com/geoserver/
- GEOSERVER_LOCATION=http://geoserver:8080/geoserver/
- ADMIN_EMAIL=admin@geonode.example.com
- DEFAULT_FROM_EMAIL='GeoNode <no-reply@geonode.example.com>'

Per questi ultimi tre campi si veda il paragrafo precedente.
- OAUTH2_CLIENT_ID=Jrchz2oPY3akmzndmgUTYrs9gczlgoV20YPSvqaV
- OAUTH2_CLIENT_SECRET=rCnp5txobUo83EpQEblM8fVj3QT5zb5qRfxNsuPzCqZaiRyIoxM4jdgMiZKFfePBHYXCLd7B8NlkfDBY9HKeIQPcy5Cp08KQNpRHQbjpLItDHv12GvkSeXp6OxaUETv3
- SECRET_KEY='myv-y4#7j-d*p-__@j#*3z@!y24fz8%^z2v6atuy4bo9vqr1_a'



```ini
COMPOSE_PROJECT_NAME=geonode
DOCKERHOST=
DOCKER_HOST_IP=
DOCKER_ENV=production
DOCKER_API_VERSION="1.24"
BACKUPS_VOLUME_DRIVER=local
C_FORCE_ROOT=1
FORCE_REINIT=false
INVOKE_LOG_STDOUT=true
DJANGO_SETTINGS_MODULE=geonode.settings
GEONODE_INSTANCE_NAME=geonode
GEONODE_LB_HOST_IP=geonode.example.com
GEONODE_LB_PORT=80
PUBLIC_PORT=80
NGINX_BASE_URL=
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
GEONODE_DATABASE=geonode
GEONODE_DATABASE_PASSWORD=geonode
GEONODE_GEODATABASE=geonode_data
GEONODE_GEODATABASE_PASSWORD=geonode_data
GEONODE_DATABASE_SCHEMA=public
GEONODE_GEODATABASE_SCHEMA=public
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_URL=postgis://geonode:geonode@db:5432/geonode
GEODATABASE_URL=postgis://geonode_data:geonode_data@db:5432/geonode_data
GEONODE_DB_CONN_MAX_AGE=0
GEONODE_DB_CONN_TOUT=5
DEFAULT_BACKEND_DATASTORE=datastore
BROKER_URL=amqp://guest:guest@rabbitmq:5672/
CELERY_BEAT_SCHEDULER=celery.beat:PersistentScheduler
ASYNC_SIGNALS=True

SITEURL=https://geonode.example.com

ALLOWED_HOSTS=['django', '*','geonode.example.com']
DEFAULT_BACKEND_UPLOADER=geonode.importer
TIME_ENABLED=True
MOSAIC_ENABLED=False
HAYSTACK_SEARCH=False
HAYSTACK_ENGINE_URL=http://elasticsearch:9200/
HAYSTACK_ENGINE_INDEX_NAME=haystack
HAYSTACK_SEARCH_RESULTS_PER_PAGE=200
GEONODE_LB_HOST_IP=_**tuodominio.com**_ @Eleonora: ma questo l'avevamo già definito sopra! @Julian Effettivamente è vero, ma mi sono accorta che è cosi anche nel file originale. Forse è un loro refuso quindi possiamo togliere
GEONODE_LB_PORT=80 @Eleonora: anche questo l'avevamo definito sopra, no? @Julian idem

HTTP_HOST=
HTTPS_HOST=https://geonode.example.com

HTTP_PORT=80
HTTPS_PORT=443

LETSENCRYPT_MODE=disabled

RESOLVER=127.0.0.11


GEOSERVER_WEB_UI_LOCATION=https://geonode.example.com/geoserver/
GEOSERVER_PUBLIC_LOCATION=https://geonode.example.com/geoserver/
GEOSERVER_LOCATION=http://geoserver:8080/geoserver/
GEOSERVER_ADMIN_USER=admin
GEOSERVER_ADMIN_PASSWORD=geoserver

OGC_REQUEST_TIMEOUT=30
OGC_REQUEST_MAX_RETRIES=1
OGC_REQUEST_BACKOFF_FACTOR=0.3
OGC_REQUEST_POOL_MAXSIZE=10
OGC_REQUEST_POOL_CONNECTIONS=10


ENABLE_JSONP=true
outFormat=text/javascript
GEOSERVER_JAVA_OPTS="-Djava.awt.headless=true -Xms2G -Xmx4G -XX:+UnlockDiagnosticVMOptions -XX:+LogVMOutput -XX:LogFile=/var/log/jvm.log -XX:PerfDataSamplingInterval=500 -XX:SoftRefLRUPolicyMSPerMB=36000 -XX:-UseGCOverheadLimit -XX:+UseConcMarkSweepGC -XX:ParallelGCThreads=4 -Dfile.encoding=UTF8 -Djavax.servlet.request.encoding=UTF-8 -Djavax.servlet.response.encoding=UTF-8 -Duser.timezone=GMT -Dorg.geotools.shapefile.datetime=false -DGEOSERVER_CSRF_DISABLED=true -DPRINT_BASE_URL=http://geoserver:8080/geoserver/pdf -DALLOW_ENV_PARAMETRIZATION=true -Xbootclasspath/a:/usr/local/tomcat/webapps/geoserver/WEB-INF/lib/marlin-0.9.3-Unsafe.jar -Dsun.java2d.renderer=org.marlin.pisces.MarlinRenderingEngine"


ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin
ADMIN_EMAIL=admin@geonode.example.com

EMAIL_ENABLE=False
DJANGO_EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
DJANGO_EMAIL_HOST=localhost
DJANGO_EMAIL_PORT=25
DJANGO_EMAIL_HOST_USER=
DJANGO_EMAIL_HOST_PASSWORD=
DJANGO_EMAIL_USE_TLS=False
DJANGO_EMAIL_USE_SSL=False
DEFAULT_FROM_EMAIL='GeoNode <no-reply@geonode.example.com>'


LOCKDOWN_GEONODE=False
CORS_ALLOW_ALL_ORIGINS=True
X_FRAME_OPTIONS="SAMEORIGIN"
SESSION_EXPIRED_CONTROL_ENABLED=True
DEFAULT_ANONYMOUS_VIEW_PERMISSION=True
DEFAULT_ANONYMOUS_DOWNLOAD_PERMISSION=True


ACCOUNT_OPEN_SIGNUP=True
ACCOUNT_EMAIL_REQUIRED=True
ACCOUNT_APPROVAL_REQUIRED=False
ACCOUNT_CONFIRM_EMAIL_ON_GET=False
ACCOUNT_EMAIL_VERIFICATION=none
ACCOUNT_EMAIL_CONFIRMATION_EMAIL=False
ACCOUNT_EMAIL_CONFIRMATION_REQUIRED=False
ACCOUNT_AUTHENTICATION_METHOD=username_email
AUTO_ASSIGN_REGISTERED_MEMBERS_TO_REGISTERED_MEMBERS_GROUP_NAME=True

OAUTH2_API_KEY=
OAUTH2_CLIENT_ID=Jrchz2oPY3akmzndmgUTYrs9gczlgoV20YPSvqaV
OAUTH2_CLIENT_SECRET=rCnp5txobUo83EpQEblM8fVj3QT5zb5qRfxNsuPzCqZaiRyIoxM4jdgMiZKFfePBHYXCLd7B8NlkfDBY9HKeIQPcy5Cp08KQNpRHQbjpLItDHv12GvkSeXp6OxaUETv3


API_LOCKDOWN=False
TASTYPIE_APIKEY=

DEBUG=False

SECRET_KEY='myv-y4#7j-d*p-__@j#*3z@!y24fz8%^z2v6atuy4bo9vqr1_a'

STATIC_ROOT=/mnt/volumes/statics/static/
MEDIA_ROOT=/mnt/volumes/statics/uploaded/
GEOIP_PATH=/mnt/volumes/statics/geoip.db

CACHE_BUSTING_STATIC_ENABLED=False

MEMCACHED_ENABLED=False
MEMCACHED_BACKEND=django.core.cache.backends.memcached.MemcachedCache
MEMCACHED_LOCATION=127.0.0.1:11211
MEMCACHED_LOCK_EXPIRE=3600
MEMCACHED_LOCK_TIMEOUT=10

MAX_DOCUMENT_SIZE=2
CLIENT_RESULTS_LIMIT=5
API_LIMIT_PER_PAGE=1000


GEONODE_CLIENT_LAYER_PREVIEW_LIBRARY=mapstore
MAPBOX_ACCESS_TOKEN=
BING_API_KEY=
GOOGLE_API_KEY=


MONITORING_ENABLED=True
MONITORING_DATA_TTL=365
USER_ANALYTICS_ENABLED=True
USER_ANALYTICS_GZIP=True
CENTRALIZED_DASHBOARD_ENABLED=False
MONITORING_SERVICE_NAME=local-geonode
MONITORING_HOST_NAME=geonode


MODIFY_TOPICCATEGORY=True
AVATAR_GRAVATAR_SSL=True
EXIF_ENABLED=True
CREATE_LAYER=True
FAVORITE_ENABLED=True


RESOURCE_PUBLISHING=False
ADMIN_MODERATE_UPLOADS=False

POSTGRESQL_MAX_CONNECTIONS=200


DEFAULT_MAX_UPLOAD_SIZE=5368709120
DEFAULT_MAX_PARALLEL_UPLOADS_PER_USER=100


LDAP_ENABLED=False
LDAP_SERVER_URL=ldap://<the_ldap_server>
LDAP_BIND_DN=uid=ldapinfo,cn=users,dc=ad,dc=example,dc=org
LDAP_BIND_PASSWORD=<something_secret>
LDAP_USER_SEARCH_DN=dc=ad,dc=example,dc=org
LDAP_USER_SEARCH_FILTERSTR=(&(uid=%(user)s)(objectClass=person))
LDAP_GROUP_SEARCH_DN=cn=groups,dc=ad,dc=example,dc=org
LDAP_GROUP_SEARCH_FILTERSTR=(|(cn=abt1)(cn=abt2)(cn=abt3)(cn=abt4)(cn=abt5)(cn=abt6))
LDAP_GROUP_PROFILE_MEMBER_ATTR=uniqueMember
```



#### 4.2. Riavvio di Genode

Una volta finito di modificare il file `.env` è necessario riavviare i servizi, affinche le nuove configurazoini vengano recepite:

```bash
docker-compose up –d
```

## Procedure di controllo della corretta attivazione dei servizi

È possibile eseguire dei controlli a verificare che tutti i servizi installati e attivati stiano funzinando correttamente.


```bash
docker-compose ps
```

Fornisce una lista dei _containers_ di un progetto di Compose, con lo stato corrente e le porte esposte. Maggiori informazioni: [https://docs.docker.com/engine/reference/commandline/compose_ps/](https://docs.docker.com/engine/reference/commandline/compose_ps/)

```bash
docker-compose logs -f django
```

Visualizza a schermo i log del framework django. L'opzione `-f` fa in modo di visualizzare in tempo reale i cambiamenti al file, di fatto “seguendolo” (f = follow). Per uscire dalla visualizzazione usate la combinazione `CTRL+C`.
Maggiori informazioni sul commando `docker-compose logs` sono disponibili nella guida ufficiale, all'indirizzo: [https://docs.docker.com/engine/reference/commandline/compose_logs/](https://docs.docker.com/engine/reference/commandline/compose_logs/).

```bash
docker-compose logs -f geoserver
```

Visualizza a schermo, aggiornandoli in tempo reale, i log di geoserver.
 
```bash
docker-compose logs -f db
```
Visualizza a schermo, aggiornandoli in tempo reale, i log del database.

```bash
docker-compose logs -f geonode
```
Visualizza a schermo, aggiornandoli in tempo reale, i log di GeoNode.

## Riferimenti

**Docker**
- Docker  sito ufficiale, [https://www.docker.com/](https://www.docker.com/)
- Cos'è Docker? AWS, [https://aws.amazon.com/it/docker/](https://aws.amazon.com/it/docker/)
- Docker su Wikipedia, [https://it.wikipedia.org/wiki/Docker](https://it.wikipedia.org/wiki/Docker)
- Guida ufficiale su Docker compose, [https://docs.docker.com/get-started/08_using_compose/](https://docs.docker.com/get-started/08_using_compose/)

**Geonode**
- GeoNode, sito ufficiale, [https://geonode.org/](https://geonode.org/)
- GeoNode, su GitHub, [https://github.com/GeoNode/geonode](https://github.com/GeoNode/geonode)
- GeoNode, sistema di sicurezza, [https://docs.geonode.org/en/master/advanced/components/index.html](https://docs.geonode.org/en/master/advanced/components/index.html)
- Protocollo OAuth, [https://it.wikipedia.org/wiki/OAuth](https://it.wikipedia.org/wiki/OAuth)
- Django, [https://www.djangoproject.com/](https://www.djangoproject.com/)

**Linux, Debian, Ubuntu**
- Debian, sito ufficiale in italiano, [https://www.debian.org/index.it.html](https://www.debian.org/index.it.html)
- Linux su Wikipedia, [https://it.wikipedia.org/wiki/Linux](https://it.wikipedia.org/wiki/Linux)
- Sistema operativo Ubuntu, sito italiano, [https://www.ubuntu-it.org](https://www.ubuntu-it.org)
- UbuntuGIS  [https://wiki.ubuntu.com/UbuntuGIS](https://wiki.ubuntu.com/UbuntuGIS)
- Guida alle repositories di Linux, [https://itsfoss.com/ubuntu-repositories/](https://itsfoss.com/ubuntu-repositories/)
- Manuale ufficiale del text editor nano, [https://linux.die.net/man/1/nano](https://linux.die.net/man/1/nano)

**Cloud provider**
- Hetzner [https://www.hetzner.com](https://www.hetzner.com)
- OVH Cloud, [https://www.ovhcloud.com/it/](https://www.ovhcloud.com/it/)
