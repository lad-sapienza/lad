---
title: "Git: controllo di versioni open source #1"
autore: Julian Bogdani
licenza: CC BY 4.0 International
livello: avanzato
tags: [Riflessioni e appunti, Open source, Git, Versionamento, Tutorial, Coding]
img: ./git-logo.png
date: 2022-04-26
description: "Git è oggi il software più famoso e usato per il controllo delle versioni, usato nella stragrande maggioranaza dei progetti di sviluppo software, ma può tornare estremamente utile in tanti scenari diversi che non hanno a che fare propriamente con lo sviluppo."
---

## Premessa

Questo articolo è il primo di una serie dedicato a Git, un software per il controllo di versione _open source_. Man mano che i prossimi articoli saranno pronti verrano elencati, per facilità, di seguito. Verrà usato come esempio la creazione di un diario di scavo usando file testuali scritti in [Markdown](https://daringfireball.net/projects/markdown/), perciò questa guida ha la doppia valenza di spiegare il funzionamento base di Git e contemporaneamete forire un esempio di buone pratiche per la redazione collaborativa di un possibile diario di scavo.

## Introduzione

Git in parole semplice è un software progettato per il controllo delle versioni, ovvero un sistema che permette di tenere traccia di ogni modifica che viene fatta ai file digitali di un _repository_, tipicamente i file contenti il codice sorgente di un progetto software. In particolare si tratta di un sistema di controllo di versioni **distribuito**, il che significa che il singolo utente che ne fa uso ha una copia totale del database delle modifiche localmente nel proprio computer e non ha necessariamente bisogno di fare riferimento ad una copia principale su un software remoto, com'è il caso di altri progetti simili anche molto famosi nel passato, come [Subversion](https://it.wikipedia.org/wiki/Subversion) e [Mercurial](https://it.wikipedia.org/wiki/Mercurial).

Git è stato creto da [Linus Torvalds](https://it.wikipedia.org/wiki/Linus_Torvalds), il creatore del [_kernel_ Linux](https://it.wikipedia.org/wiki/Linux_(kernel)) nel 2005 ispirandosi ad altri progetti proprietari, proprio al fine di creare uno strumento per gestire lo sviluppo  di Linux.


Git è alla base di progetti e piattaforme per lo sviluppo collaborativo estremamente diffuse quali [GitHub](https://github.com/), [BitBucket](https://bitbucket.org/), [GitLab](https://gitlab.com/) e [Codeberg](https://codeberg.org/).

Ma Git può essere usato anche fuori da quello che può essere l'ambito ristretto dello sviluppo collaborativo e in generale è utilissimo in ogni ambito in qui è necessario tenere traccia delle modifiche nel tempo si un file o di un'intera cartella con la possibilita di “riavvolgere” il tempo e ritornare in un punto preciso nella storia passata del file, senza perdere la storia generale delle modifiche, passate e future.

Insomma, è posisbile fare a meno di creare file diversi con nomi fantasiosi pr tenere traccia delle modifiche nel tempo:
- `testo_finale`
- `testo_finale2`
- `testo_finale_rev`
- `testo_finale_rev_corr`
- `testo_finale_rev_corr2`
- `testo_finale_rev_corr2b`
- `testo_finale_rev_corr2b-2022-4-6`
- `testo_finale_def`
- `testo_finale_def-2`

Prima di cominciare a dare uno sguardo in profondità, però, è necessaria qualche precisazione iniziale:
- Git è stato progettato per essere usato da interfaccia a riga di commando, quindi è necessario disporre di terminale, anche se esistono varie soluzioni grafiche. Per semplicità questa guida farà riferimento solemente ai commando da terminale.
- Git funziona con qualsiasi tipo di file, anche con file di grandi dimensioni attraverso specifiche estensioni. Bisogna però premettere che è sui file di testo che Git dà il meglio di se in efficienza e velocità, in quanto ci permette di visualizzare anche le singola righe di testo che sono cambiate. Dal momento che Git usa l'algoritmo crittografico SHA-1 ([Secure Hash Algorithm 1](https://en.wikipedia.org/wiki/SHA-1)) per calcolare l'impronta (hash) di ciascun file, potrebbe essere necessario del tempo di attesa per repository pesanti.

## Concetti base
Git basa il suo funzinamento su alcuni concetti fondamentali, che è bene chiarire per potere procedere con la guida.
- Con `repository` si intende l'insieme dei file che si sta sottoponendo a controllo di versione. Il concetto di repository coincide con quello della cartella superiore che contiene tutto il progetto
- Con `stage`, scena, si intende uo stato intermedio delle nostre modifiche, la cui storia è “fotografata”, una istantanea (_snapshot_) dunque che non è stata ancora salvata nel registro principale delle modifiche.
- Con `commit` si intende l'azione per cui un’istantanea, ovvero alcune modifiche che si trovano nello `stage` vengono registrate nel database principale.
- Con `remote` si intende l'eventuale copia remota, su un server, della nostra repository. Possiamo usare Git senza necessità di avere una copia remota, ma se pianifichiamo di collaborare con altre persone, allora è necessario prevedere la possibilità di una copia remota che faccia da punto di riferimento per tutti i collaboratori.
- Con `branch`, ramo, si intende una funzione fondamentale di Git, ovvero la possibilità di creare una linea di modifiche parallela a quella principale, dove uno o più collaboratori possono intervenire liberamente senza toccare il ramo principale. Una volta che si ritieneche le modifiche sul ramo secondario hanno raggiunto un grado di maturazione sufficiente, allora questo `branch` può essere unito (`merge`) a quello principale. Dopo questa unione, il `branch` secondario può essere cancellato. La documentazine di Git afferma che la i `branch` sono economici in termini di spazio e risorse e quindi viene raccomandato di fare un largo uso.
- Con `conflict` si intende la situazione che si crea quando sullo stesso file sono reistrate modifiche da parte di più collaboratori e viene richiesta un’azione esplicitia per risolvere questo problema. I file di testo vengono annotati internamente, sehnalando le singole porzioni di testo che ciascun collaboratore ha modificato, dando la possibilità di risolvere il conflitto in maniera molto dettagliata.

## Guida semplificata per esempi

> **Attenzione**  
>In questa guida faremo uso del terminale per tutte le operazioni sia di Git che di interazione con il filesystem e con i singoli file. Naturalmente molte di queste operazioni possono essere svolte anche con altri strumenti, quali il gestore di cartelle del vostro sistema operativo e un editor di testi. Le operazioni che possono essere svolte con altri strumenti sono segnalata da (*)

### Creazione del repository
Creiamo una cartelle che conterrà il nostro progetto*

```bash
mkdir diario-di-scavo
```

Ci spostiamo quindi dentro all nuova cartella*

```bash
cd diario-di-scavo
```
Avviamo Git per questa cartella, ovvero creiamo il repository

```bash
git init
```
E avremo come risposta qualcosa di simile:

```bash
Initialized empty Git repository in /qualche/percorso/diario-di-scavo/.git/
```

Abbiamo avviato la nostra prima repository Git, adesso aggiungiam qualche file. Per questa guida useremo dei file di testo scritti in [Markdown](https://daringfireball.net/projects/markdown/) un linguaggio di marcatura estremamente semplice da scrivere e leggere.

Creiamo dentro la cartella un nuovo file chiamato `index.md`*
```bash
touch index.md
```

Apriamo il file e aggiungiamo del testo*
```bash
nano index.md
```

E scriviamo*
```md
# Diario di scavo
Questo repository contiene il diario di scavo diviso per settori e in ordine cronologico.
```
Poi salviamo e chiudiamo il file premendo `ctr+x` e rispondendo `y` alla domanda se vogliamo salvare o meno, poi invio, confermando il nome del file.

Abbiamo aggiunto un nuovo file, ma Git ancora non ha salvato nel proprio database queste modifiche. Git non traccia le modifiche in maniera automatica e dobbiamo essere sempre noi, in maniera esplicita, ad addiungere ciascuna modifica alla sua storia delle modifiche.

In ogni momento è possibile controllare lo stato del nostro repository con `git status`, anche in questa fase iniziale quando ancora non stiamo tracciando alcun file:

```bash
git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	index.md

nothing added to commit but untracked files present (use "git add" to track)
```

Il _report_ ci informa che ci troviamo sul ramo master (`On branch master`). Anche se non abbiamo fornito alcuna informazione su come si intendeva organizzare il _repository_, Git crea per noi un `branch` iniziale che chiama `master`.  
Inoltre il report ci informa che non ci sono ancora `commit` disponibili (`No commits yet`).  
Successivamente ci fornisce una lista dei file presenti nella cartella che non sono ancora stati segnalati a Git per il traccamento, in questo caso si tratta del file `index.md`.  
Il commando ci fornisce, infine, anche qualche suggerimento per come proseguire a tracciare i file.

Questa azione si articola in due passaggi: aggiungere ciascuno dei file modificati allo `stage` (v. sopra i [Concetti base](#concetti-base)) creando di fatto un'istantanea del nostro _repository_ e successicamente aggiungere questa istantanea al database di Git, faccendo un `commit` (v. sopra i [Concetti base](#concetti-base)).

```bash
git add index.md
```

`git add` aggiunge un file all'istantanea, indice o `stage`. Possono essere elencati di seguito al commando singolarmente i singoli file (come abbiamo fatto per `index.md`) oppure può essere usato il carattere `*` per intendere tutti i file modificati.

Se invece si vuole togliere un file specifico dallo `stage` allora è disponibile il commando `git reset -- <nome file>`. A **scopo puramente esemplificativo**, il commando per togliere index.md dallo `stage` sarebbe (per ora non lo dobbiamo eseguire):

```bash
git reset -- index.md
```

Finalmente per aggiungere l'istantanea, al database di Git dobbiamo usare il commando `commit` che richiede l'aggiunta di un messaggio testuale. Il consiglio è quello di descrivere in questo messaggio la modifica effettuata nella maniera più precisa e concisa possibile, in maniera di fornire informazioni utili ai nostri collaboratori (o al nostro noi del futuro). Ecco allora come potrebbe apparire il nostro primo commando di `commit`:

```bash
git commit -m "Primo commit: aggiunto index.md"
```

Il programma ci darà come risposta un _report_ simile al seguente

```bash
[master (root-commit) c5bea7e] Primo commit: aggiunto index.md
 1 file changed, 3 insertions(+)
 create mode 100644 index.md
```

Nello specifico `c5bea7e` sono i primi 7 caratteri dello `hash` o impronta del `commit` che servono da identificativo. Per Git questo è il nome con il quale ci dobbiamo riferire a questo `commit` ogni volta che abbiamo necessità.  
Il report prosegue dicendoci chè e stato mofificato 1 solo file (`1 file changed`) e nello specifico sono state inserite 3 nuove righe (`3 insertions(+)`).

Ogni volta che si introduce qualche nuova modifica dei file sottoposti al versionamento, sarà possibile aggiungere queste modifiche allo storico generale con i commandi `git add <nome file>` e `git commit -m "Messagio di commit>`.

Complimenti, avete percorso i vostri primi passi nel mondo di `git` e della collaborazione.
