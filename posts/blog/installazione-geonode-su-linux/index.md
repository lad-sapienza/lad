---
title: "Guida all'installazione di GeoNode su server linux"
autore: Eleonora Iacopini
licenza: CC BY 4.0 International
livello: avanzato
tags: [geodati, open source, gis, webGIS, tutorial]
img: ./geonode.png
date: 2022-10-18
sommario: "Git è oggi il software più famoso e usato per il controllo delle versioni, usato nella stragrande maggioranaza dei progetti di sviluppo software, ma può tornare estremamente utile in tanti scenari diversi che non hanno a che fare propriamente con lo sviluppo."
---

## Introduzione

Questo articolo è il secondo di una serie di contributi dedicati alle metodologie e software per la pubblicazione online dei dati archeologici geografici. Si rimanda, pertanto, all'articolo specifico per un'introduzione sugli [software open source per la condivisione di dati geografici online](../softwater-os-condivisione-dati-geografici-online).

Nel presente articolo si affronterà in maniera molto pratica e concreta il processo di installazione della più recente versione di [GeoNode](https://geonode.org/), il cui codice sorgente è disponibile nel relativo repository di [GitHub](https://github.com/GeoNode/geonode/). Al momento in cui pubblichiamo questo contributo (ottobre 2022) la versione dispnibile più recente di GeoNode è la **4.0.0**.

Come ben noto, è possibile installare GeoNode su diversi sistemi operativi e piattaforme e presenza dei requisiti minimi dell'amiente di produzione piuttosto importanti, ovvero un'a 'architettura a **64-bit**, **16GB di RAM**, un processore **2.2GHz** con **4 core**, un minimo di **30GB** di spazio disco per il solo software.

In questa guida si descriverà l'installazione su un sistema operativo [Linux](https://it.wikipedia.org/wiki/Linux) della famiglia [Debian](https://www.debian.org/index.it.html), nello specifico [Ubuntu 20.4](https://www.ubuntu-it.org). Questa scelta è dettata dalla grandissima diffusione oggi dei sistemi operativi Debian/Ubuntu nel settore server, per qui è molto facile che, se si acquista un servizio [VPS](https://it.wikipedia.org/wiki/Virtual_private_server), ci si trovi davanti a questi sistemi operativi.

Infine, esistono vari modi di installare GeoNode e in questa guids si seguirà quello che prevede l'utilizzo di [Docker](https://www.docker.com/), raccomndato anche nella [guida ufficiale](https://github.com/GeoNode/geonode/#install). Docker è una piattaforma software che permette di creare, testare e distribuire applicazioni con la massima rapidità, in quanto raccoglie il software in unità standardizzate chiamate _**container**_ che offrono tutto il necessario per la loro corretta esecuzione, incluse librerie, strumenti di sistema, codice e _runtime_. Con Docker, è possibile distribuire e ricalibrare le risorse per un'applicazione in qualsiasi ambiente, tenendo sempre sotto controllo il codice eseguito. In altre parole, con Docker è possibile creare ambienti di esecuzione del tutto simili o identici su piattaforme (hardware e sistema operativo) anche molto diversi tra loro.

## Requisiti
Per fare questo è necessario avere familiarità con i comandi da console del server su cui stiamo operando. Partendo dal presupposto di avere una nuova installazione di Ubuntu 20.4 su un vostro computer o su uno spazio cloud a pagamento come [Hetzner](https://www.hetzner.com), dovremmo accedere al server tramite la console di comando inserendo la propria username e password.

1.	Il primo step che dobbiamo compiere è quello di installare il repository [Ubuntugis](https://wiki.ubuntu.com/UbuntuGIS), il quale consente di dotare il server di tutti i pacchetti necessari per poter lavorare con i dati geografici.

```bash
sudo add-apt-repository ppa:ubuntugis/ppa
```

2.	Aggiorniamo dunque il package index files.

```bash
sudo apt update –y
```

3.	Installazione delle dipendenze.

```bash
sudo apt install -y python3-gdal=3.3.2+dfsg-2~focal2 gdal-bin=3.3.2+dfsg-2~focal2 libgdal-dev=3.3.2+dfsg-2~focal2
```

```bash
sudo apt install -y python3-pip python3-dev python3-virtualenv python3-venv virtualenvwrapper
```

```bash
sudo apt install -y libxml2 libxml2-dev gettext
```

```bash
sudo apt install -y libxslt1-dev libjpeg-dev libpng-dev libpq-dev
```

```bash
sudo apt install -y software-properties-common build-essential
```

```bash
sudo apt install -y git unzip gcc zlib1g-dev libgeos-dev libproj-dev
```

```bash
sudo apt install -y sqlite3 spatialite-bin libsqlite3-mod-spatialite
```


4.	Come accennato all’inizio del tutorial per installare GeoNode sulla nostra macchina andremo ad utilizzare Docker. Docker è un sistema che consente di raccoglie un software in un container, nel quale è contenuto tutto ciò che serve per eseguire l’applicazione (librerie, strumenti di sistema, codice di programmazione etc..). Oltre a questo metodo di installazione ce ne sono anche altri, come indicato nella guida al seguente [link](https://docs.geonode.org/en/master/install/advanced/core/index.html).

Per prima cosa installiamo i pacchetti necessari per l’utilizzo di Docker.


```bash
sudo add-apt-repository universe
```

```bash
sudo apt-get update –y
```

```bash
sudo apt-get install -y git-core git-buildpackage debhelper devscripts
```

```bash
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

```bash
sudo apt-get update –y
```

```bash
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
```

5.	A differenza della guida ufficiale, che potrete trovare a questo [link](https://docs.geonode.org/en/master/install/advanced/core/index.html#docker), questa installazione prevede l’aggiornamento del Docker compose alla versione 1.29. Per fare questo è necessario scaricare lo script e renderlo eseguibile mediante questi passaggi.

```bash
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

```bash
chmod +x /usr/local/bin/docker-compose
```

```bash
sudo usermod -aG docker ${USER}
```

```bash
su ${USER}
```

6.	Creiamo la cartella sul nostro sistema operativo dove clonare la versione di GeonNde che vogliamo, in questo caso noi utilizzeremo l’ultima release 4.0.0post1.

```bash
sudo mkdir -p /opt/geonode/
```

```bash
sudo usermod -a -G www-data geonode
```

```bash
sudo chown -Rf geonode:www-data /opt/geonode/
```

```bash
sudo chmod -Rf 775 /opt/geonode/
```
 
```bash
cd /opt
```

```bash
git clone https://github.com/GeoNode/geonode.git -b 4.0.0post1
```

7.	Una volta clonato il programma nella cartella GeoNode, navighiamo fino alla cartella principale e lanciamo il comando per costruire il programma ovvero "build”.

```bash
cd /opt/geonode
```

```bash
docker-compose build --no-cache
```

8.	Una volta conclusa la fase di installazione, che richiede alcuni minuti è possibile avviare i pacchetti e renderli attivi attraverso il comando.

```bash
docker-compose up –d
```

9.	L’ultimo step richiede di modificare il file .env (Fig. da 1 a 7) che si trova nella cartella GeoNode, per impostare i parametri personalizzati riguardanti l’hosting.

```bash
cd/opt/geonode
```

```bash
nano .env
```

Prima di editare il file è necessario attivare la procedura di riconoscimento della proprietà del dominio che si intende usare con [Google console](https://console.cloud.google.com) e attivare una API per avere [0Auth id client e client secrets](https://docs.geoserver.org/latest/en/user/community/oauth2/index.html).


10.	 Una volta finito di compilare il file .env è necessario digitare nuovamente il comando compose up per fare il restart dei servizi.

```bash
docker-compose up –d
```

### Procedure di controllo della corretta attivazione dei servizi:

```bash
docker-compose ps
```

```bash
docker-compose logs -f django
```

```bash
docker-compose logs -f geoserver
```
 
```bash
docker-compose logs -f db
```
 
```bash
docker-compose logs -f geonode
```

### Riferimenti

Docker
- Docker  sito ufficiale, [https://www.docker.com/](https://www.docker.com/)
- Cos'è Docker? AWS, [https://aws.amazon.com/it/docker/](https://aws.amazon.com/it/docker/)
- Docker su Wikipedia, [https://it.wikipedia.org/wiki/Docker](https://it.wikipedia.org/wiki/Docker)
Geonode
- GeoNode, sito ufficiale, [https://geonode.org/](https://geonode.org/)
- GeoNode, su GitHub, [https://github.com/GeoNode/geonode](https://github.com/GeoNode/geonode)
Linux, Debian, Ubuntu
- Debian, sito ufficiale in italiano, [https://www.debian.org/index.it.html](https://www.debian.org/index.it.html)
- Linux su Wikipedia, [https://it.wikipedia.org/wiki/Linux](https://it.wikipedia.org/wiki/Linux)
- Sistema operativo Ubuntu, sito italiano, [https://www.ubuntu-it.org](https://www.ubuntu-it.org)

- Hetzner  https://www.hetzner.com
- Ubuntu Gis  https://wiki.ubuntu.com/UbuntuGIS
- https://docs.geonode.org/en/master/install/advanced/core/index.html#docker
- https://console.cloud.google.com
- https://docs.geoserver.org/latest/en/user/community/oauth2/index.html

