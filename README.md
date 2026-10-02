# LAD @ Sapienza — sito ufficiale

Questo è il repository del sito ufficiale del **LAD, Laboratorio di Archeologia Digitale della Sapienza Università di Roma**, pubblicato su **<https://lad-sapienza.it>**.

Il sito presenta le attività del Laboratorio: notizie, ricerca, didattica, blog, strumenti e infrastrutture digitali sviluppate in casa (tra cui [BraDypUS](https://bdus.lad-sapienza.it/)). È bilingue (italiano e inglese).

È costruito con [s:CMS](https://github.com/lad-sapienza/sCMS), il sistema di gestione dei contenuti statico sviluppato dal LAD su [Astro](https://astro.build/). Il framework vive nel pacchetto npm [`@lad-sapienza/scms-core`](https://www.npmjs.com/package/@lad-sapienza/scms-core); qui ci sono solo contenuti, pagine e configurazione del sito.

- **Responsabile del sito:** Julian Bogdani — <julian.bogdani@uniroma1.it>
- **Licenza:** vedi [LICENSE](LICENSE)

---

# Guida rapida per la manutenzione

*Appunti per il futuro me (o per chiunque riprenda in mano il sito): normale amministrazione, con le soluzioni ai problemi più comuni.*

## Come è fatto il repository

```
src/
├── content/                  # TUTTI i contenuti (Markdown/MDX + immagini + PDF)
│   ├── notizie/{it,en}/<data-slug>/index.md
│   ├── blog/{it,en}/<slug>/index.mdx
│   ├── ricerca/{it,en}/<slug>/index.md
│   ├── didattica/{it,en}/<slug>/index.md
│   └── didattica/*.pdf       # locandine dei laboratori GIS (livello radice della collezione)
├── content.config.ts         # schema (campi ammessi nel frontmatter) di ogni collezione
├── content-pages/            # pagine "statiche" lunghe (es. sviluppo)
├── pages/[locale]/…          # le rotte del sito (una sola serie, valida per it e en)
├── components/               # componenti propri (es. Team.jsx)
├── layouts/                  # BaseLayout.astro (head, favicon, ecc.)
├── utils/i18n.ts             # elenco lingue (LOCALES, DEFAULT_LOCALE)
└── user.config.mjs           # configurazione del sito e di scms-core (lingue, immagini, SEO)
public/                       # file statici serviti così come sono (loghi, foto del team, favicon)
.github/workflows/deploy.yml  # build e pubblicazione su GitHub Pages
.scms-optimize-images.json    # registro dell'ottimizzazione immagini (va committato)
```

Requisiti: **Node.js 22+** e npm.

## Lavorare in locale

```bash
npm install        # la prima volta, o dopo aver cambiato package.json
npm run dev        # server di sviluppo (http://localhost:4321)
npm run build      # build di produzione in dist/ (esegue anche il controllo immagini)
npm run preview    # serve dist/ per un controllo finale
```

## Aggiungere un contenuto

I contenuti sono cartelle, una per articolo, **una per lingua**:

```
src/content/notizie/it/2026-10-02-titolo-breve/
├── index.md                  # il testo
├── copertina.webp            # l'immagine di copertina (vedi sotto per il formato)
└── locandina.pdf             # eventuali allegati
src/content/notizie/en/2026-10-02-titolo-breve/
└── index.md                  # la versione inglese (di solito senza immagini proprie)
```

Il modo più rapido per partire è copiare una notizia recente della stessa collezione. In alternativa c'è la procedura guidata: `npm run add-content`.

Regole pratiche:

- **Nome della cartella:** `AAAA-MM-GG-slug` per le notizie (la data è quella dell'evento o della pubblicazione), solo `slug` per blog, ricerca e didattica. Lo stesso nome nelle due lingue: è quello che collega la versione italiana a quella inglese.
- **Frontmatter** (campi definiti in `src/content.config.ts`):

  ```yaml
  ---
  title: "Titolo"
  description: "Una o due frasi: compaiono nelle anteprime e nei motori di ricerca"
  date: "2026-10-02"          # obbligatoria per notizie, blog e didattica
  img: copertina.webp         # nome del file nella stessa cartella
  draft: false                # true = non pubblicare
  inhome: true                # true = compare nella home
  pinned: true                # opzionale: in evidenza (in cima a elenchi e home)
  order: 24                   # opzionale: ordinamento manuale
  author: "Nome Cognome"      # opzionale (blog)
  tags:
    - BraDypUS
  ---
  ```

- **Immagini nel testo:** `![descrizione](./nome-file.webp)`, con il file nella cartella dell'articolo.
- **Link a PDF o ad altri allegati:** usa sempre il **percorso assoluto dalla radice dei contenuti**, mai `./file.pdf`:

  ```md
  [Scarica la locandina](/notizie/it/2026-10-02-titolo-breve/locandina.pdf)
  ```

  I file di contenuto vengono pubblicati in `/<collezione>/<lingua>/<slug>/…` e un link relativo viene invece risolto rispetto all'URL della pagina (`/it/notizie/<slug>/`), quindi non troverebbe il file. Le pagine inglesi non hanno file propri: puntano alla cartella `it/` (`/notizie/it/<slug>/…`).
- **Gallerie:** le immagini in una sottocartella `gallery/` dell'articolo vengono caricate automaticamente dal componente Gallery (con didascalie opzionali in `gallery/captions.json`).
- **Pagina del Team** (`chi-siamo`): le persone sono in `src/components/Team.jsx`, le foto in `public/images/team/`.

Prima di pubblicare, `npm run build` e un colpo d'occhio con `npm run preview`.

## Immagini: come ottimizzarle

Il sito usa **WebP, lato lungo al massimo 2000 px**. Le immagini in `src/content` si ottimizzano con [`scms-optimize-images`](node_modules/@lad-sapienza/scms-core/README.md), che fa tutto da solo:

- converte JPG/PNG in WebP (JPG lossy qualità 82; PNG lossless, con ripiego lossy se restano troppo pesanti);
- ridimensiona a 2000 px (solo riduzione);
- **cancella gli originali** (restano nella storia git);
- **riscrive i riferimenti** nei `.md`/`.mdx` (`img:`, `![](…)`, link, anche nelle pagine `en`).

Flusso normale quando aggiungi immagini nuove (anche JPG/PNG diretti da fotocamera o da Photoshop):

```bash
npm run images -- --dry-run   # facoltativo: mostra cosa cambierebbe, non tocca niente
npm run images                # converte, ridimensiona e riscrive i riferimenti
git status                    # controlla: .webp nuovi, originali eliminati, .md aggiornati
```

Poi `git add` di **tutto** (anche `.scms-optimize-images.json`, se è cambiato) e commit.

Cose da sapere:

- Le immagini in `public/` **non** vengono toccate (sono citate dal codice).
- I JPG già molto compressi (in WebP pesano di più) restano JPG: sono elencati in `.scms-optimize-images.json` come "valutati e tenuti" e non vengono più riprocessati. Il file va committato.
- Se due immagini nella stessa cartella hanno lo stesso nome con estensione diversa (`foto.jpg` e `foto.png`), il comando tiene quella citata da un `index.md` e cancella l'altra.
- Il comando **non** riscrive i riferimenti nel codice (`.astro`, `.jsx`, `.mjs`): li segnala soltanto, vanno corretti a mano.
- Parametri (dimensione massima, qualità, cartelle escluse): blocco `images` in `src/user.config.mjs`; i valori predefiniti sono documentati nel README di `scms-core`. Le lingue (`i18n`) devono restare allineate con `src/utils/i18n.ts`.

### Il controllo automatico (hook di commit e build)

Due controlli impediscono di pubblicare immagini non ottimizzate:

| Dove | Cosa fa | Quando scatta |
| --- | --- | --- |
| **`prebuild`** in `package.json` | `scms-optimize-images --check` su tutto il sito. Se trova qualcosa la build **non parte**. | Ogni `npm run build`, anche nel deploy su GitHub. |
| **Hook `pre-commit`** (solo locale) | Lo stesso controllo, ma solo sulle immagini in staging. Blocca il **commit**. | Ogni `git commit` sul computer dove è installato. |

`--check` non modifica mai nulla.

L'hook non è versionato (`.git/hooks` resta fuori dal repository): **su un nuovo clone va reinstallato**. Crea `.git/hooks/pre-commit`, rendilo eseguibile con `chmod +x`, con questo contenuto:

```sh
#!/bin/sh
# Blocca il commit se un'immagine in staging non è ottimizzata
git diff --cached --name-only --diff-filter=AM -z -- '*.jpg' '*.jpeg' '*.png' '*.JPG' '*.JPEG' '*.PNG' '*.webp' \
  | xargs -0 npx scms-optimize-images --check --only || {
    echo "Run 'npm run images', review the changes and stage them." >&2
    exit 1
  }
```

## Aggiornare

**Dipendenze e framework.** Il framework non è più copiato nel repository: arriva dal pacchetto npm `@lad-sapienza/scms-core`, quindi si aggiorna come ogni dipendenza.

```bash
npm outdated                                    # cosa è aggiornabile
npm install @lad-sapienza/scms-core@latest      # solo il core di s:CMS
npm update                                      # le altre dipendenze (entro i vincoli di package.json)
npm run build                                   # verifica: deve passare senza errori
```

Dopo aver aggiornato `scms-core`, leggi le note di rilascio e il suo README: se cambiano le opzioni di `user.config.mjs` (per esempio `images` o `i18n`), vanno adattate qui. Aggiornamenti di versione maggiore (Astro, React) vanno fatti in un commit a parte, con build verificata.

**Il remote `upstream`** punta al vecchio template `lad-sapienza/sCMS`: non serve più per gli aggiornamenti del framework, che passano da npm.

**Node.** La CI usa Node 22 (`.github/workflows/deploy.yml`). Se aggiorni la versione in locale, aggiorna anche la workflow.

## Pubblicare (deploy)

Pubblicare = **push su `master`**. La workflow `.github/workflows/deploy.yml` (GitHub Actions):

1. fa il checkout ed esegue `npm ci`;
2. esegue `npm run build`, quindi `prebuild` (controllo immagini), `astro check` (TypeScript) e `astro build`;
3. pubblica `dist/` su GitHub Pages, al dominio `lad-sapienza.it` (file `public/CNAME`).

Lo stato è nella scheda *Actions* del repository su GitHub. Si può rilanciare a mano con *Run workflow* (`workflow_dispatch`).

Prima di un push importante: `npm run build` in locale. Se passa lì, passa anche su GitHub.

## Se qualcosa non va

**Il commit viene bloccato dall'hook** (`JPG/PNG images to convert`, `…larger than 2000px`).
È l'hook che fa il suo lavoro. Lancia `npm run images`, controlla con `git status` e rimetti in staging i `.webp` nuovi, i file eliminati e i `.md` riscritti; poi rifai il commit. Solo in caso di vera necessità: `git commit --no-verify` (ma poi sarà il `prebuild` a bloccare la build, quindi conviene sistemare subito).

**La build o il deploy su GitHub falliscono con "problem(s) found" (JPG/PNG images to convert, WebP troppo grandi…).**
Qualcuno ha committato una immagine non ottimizzata (di solito su un computer senza hook). In locale: `git pull`, `npm run images`, controlla, commit e push. Il deploy riparte da solo.

**La build segnala riferimenti a immagini "da codice" (`.astro`, `.jsx`, …).**
Un'immagine convertita o da convertire è citata nel codice con la vecchia estensione (es. `/didattica/didattica.jpg` in `src/pages/[locale]/didattica/index.astro`). Aggiorna a mano l'estensione in `.webp` nel file indicato. Vale solo per le immagini di `src/content`: quelle in `public/` non cambiano.

**Un'immagine non si vede dopo la conversione.**
Controlla che il nome nel frontmatter (`img:`) o nel testo coincida con quello del `.webp` nella cartella, e per le pagine `en` che il file esista nella cartella `it/` gemella. Dopo la conversione la vecchia estensione non deve comparire da nessuna parte: `git grep -n "nome-file.jpg" -- src`.

**Un link a un PDF o a una locandina dà 404.**
Quasi sempre è un link relativo (`./file.pdf`). Sostituiscilo con il percorso assoluto `/<collezione>/<lingua>/<slug>/file.pdf` (vedi *Aggiungere un contenuto*).

**`npm run images` non converte un JPG.**
Se è elencato tra i file "kept" è normale: in WebP pesava di più ed è già abbastanza compresso. Per forzarlo, cancella la sua voce da `.scms-optimize-images.json`, oppure abbassa `quality` in `user.config.mjs` e rilancia.

**Avvisi innocui in build.** `The collection "sviluppo" does not exist or is empty`, `Both esbuild and oxc options were set` e i warning TypeScript di `Team.jsx` sono noti e non bloccano nulla.

**Il repository sta diventando pesante.**
Immagini di grandi dimensioni committate in passato restano nella storia git anche se oggi sono ottimizzate. Per questo conviene far passare **sempre** le immagini da `npm run images` *prima* del commit e non dopo.
