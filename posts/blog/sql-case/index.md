---
title: "Uso si CASE per estrarre con SQL dal database dati utili ad analisi statistiche"
autore: Julian Bogdani
licenza: CC BY 4.0 International
livello: avanzato
tags: [sql, coding, database, riflessioni e appunti]
img: ./sql-snippets.jpg
date: 2022-03-03
sommario: "In questo breve articolo si descrive l'uso dell'asserzione `CASE` del linguaggio SQL, offrendo un caso di studio archeologico"
---

In questo breve articolo si descrive l'uso dell'asserzione `CASE` del linguaggio SQL, offrendo un caso di studio archeologico. 

`CASE` è un costrutto molto potente e spesso trascurato del linguaggio SQL, che permette di attraversare varie possibili condizioni fornite e restituisce un valore quando la prima condizione viene soddisfatta, esattamente come le asserzioni `if-then-else` in molti altri linguaggi di programmazione.

Quando una condizione si verifica, il ciclio si fermerà e restituirà il risultato corrispondente fornito. Se nessuna condizione viene siddisfatta, verrà restituito il valore contenuto nalla clausola `ELSE`.

Se, infine, la parte `ELSE` non viene fornita, verrà restituito il valore `NULL` (che è diverso dalla stringa `'NULL'`).

La sintassi di `CASE` è la seguente:

```sql
CASE
   WHEN consizione_1 THEN "qualcosa"
   WHEN condizione_2 THEN "qualcos'altro"
   ...
   ELSE "Valore di default"
END
```

Un esempio vale più di mille spiegazioni, ecco allora che nei prossimi paragrafi introduco un caso di studio reale, lo stesso che mi ha fatto scoprire questa funzione.

In concreto, stavo lavorando su una banca dati relativa alla necropoli romana della [città romana di Suasa](https://it.wikipedia.org/wiki/Suasa) e avevo bisogno di estrarre alcuni dati per creare dei grafici piuttosto semplici. In particolare, avevo bisogno di estrarre in maniera veloce il totale delle tombe divise per fase, e all'interno di ogna fase il totale delle tombe a inumazioneo e di quelle a cremazione. La necessità finale era quella di ottenere un grafico a barre, che per ogni fase visualizzasse il numero totale di tombe per ciascuno dei due riti.

Di seguito, fornisco un estratto della struttura della tabella di riferimento dalla quale estrarre queta informazione. La tabella è più complessa, ma estraggo qui solo le colonne che ci interessano.

Query:

```sql
SELECT id,
       nome,
       rito,
       fase
  FROM suasa__tombe;

```

Risultato: 

|id|numero tomba|rito|fase|
|-|-|-|-|
1|503|cremazione|10
2|511|cremazione|8
4|501|cremazione|11
5|502|cremazione|11
6|508|cremazione|10
7|509|cremazione|10
8|512|inumazione|7
10|514|cremazione|10
11|510|cremazione|10a
18|518|cremazione|7
19|519|cremazione|7
20|520|cremazione|7
21|521|cremazione|10
22|522|cremazione|7
23|524|cremazione|7
24|523|cremazione|10
25|528|cremazione|7
26|530|cremazione|11
27|533|cremazione|7
28|531|cremazione|10
29|529|cremazione|11
30|526|cremazione|7
32|534|cremazione|10
36|535|cremazione|6
37|537|cremazione|10b
38|538|inumazione|12
39|543|cremazione|10
40|542|cremazione|10
41|540|cremazione|10a
42|544|cremazione|10
43|539|cremazione|10b
44|541|inumazione|12
45|545|inumazione|12
46|547|cremazione|10
48|549|cremazione|10
49|548|cremazione|10
50|552|cremazione|10a
52|550|cremazione|10
53|555|cremazione|7
54|556|cremazione|7
56|557|cremazione|10
57|558|cremazione|10
59|554|inumazione|12
60|560|inumazione|12
61|561|cremazione|10
62|567|cremazione|10a
63|563|inumazione|12
64|568|cremazione|10a
65|566|inumazione|10a
66|565|inumazione|12
67|571|cremazione|9
68|569|cremazione|10a
69|570|cremazione|10a
70|572|cremazione|9
71|562|inumazione|12
72|564|inumazione|12
73|573|cremazione|11
74|574|cremazione|11
75|576|cremazione|11
76|575|cremazione|11
77|577|cremazione|11
78|578|cremazione|10a
79|579|cremazione|11
80|580|inumazione|11
81|581|cremazione|10b
82|584|cremazione|10
83|587|cremazione|10
84|589|inumazione|10b
87|582|cremazione|10b
88|585|cremazione|11
89|586|cremazione|11
90|590|cremazione|9
91|591|cremazione|9
92|601|cremazione|9
93|603|cremazione|9
95|583|cremazione|9
96|593|cremazione|10
97|594|cremazione|10
98|602|cremazione|7
99|607|cremazione|7
100|599|cremazione|9
101|596|inumazione|10b
102|598|cremazione|9
103|595|cremazione|10b
104|597|inumazione|10b
105|600|cremazione|8
106|606|inumazione|8
107|608|cremazione|10a
108|605|cremazione|9


Ecco allora la query per estrarre i dati che servono:

```sql
SELECT SUM(CASE WHEN rito = 'inumazione' THEN 1 ELSE 0 END) AS inumazioni,
       SUM(CASE WHEN rito = 'cremazione' THEN 1 ELSE 0 END) AS cremazioni,
       fase
  FROM suasa__tombe
 GROUP BY fase;
```

Ed ecco infine i risultati della query, pronti per essere trasformati in un grafico:
|inumazioni|cremazioni|fase|
|-|-|-|
0|22|10
1|9|10a
3|5|10b
1|12|11
9|0|12
0|1|6
1|12|7
1|2|8
0|10|9

In questo caso stiamo usando l'asserzione `CASE` nella definizione delle colonne e lo stiamo usando insieme alla funzione `SUM`, che calcola le somme.

In dettaglio, `SUM(CASE WHEN rito = 'inumazione' THEN 1 ELSE 0 END) AS inumazioni` e la definizione di una colonna alla quale viene attribuita l'etichetta o l'_alias_ `inumazioni`, come da asserzione `AS` ([segui questo collegamento per avere più informazioni su `AS`](https://www.w3schools.com/sql/sql_ref_as.asp)), all'unico fine di facilitare la lettura dei dati in uscita.

La colonna contiene una somma, le cui elementi vengono definiti da `CASE`. Per ogni riga della banca dati verrà valutata se l'espressione booleana `rito = 'inumazione'` risulta vera o false, in altre parole verrà valutato se il campo `rito` contiene esattamente il valore `inumazione`. Se la risposta è positiva (valore booleano `VERO`), allora (`THEN`) viene restituito alla funzione somma in numero `1` (al conteggio delle inumazioni viene aggiunto una unità), altrimenti (`ELSE`) viene restituito 0 (al conteggio delle inumazioni non viene in sostanza aggiunto nulla).

Lo stesso discorso vale per la seconda colonna, definita come: `SUM(CASE WHEN rito = 'cremazione' THEN 1 ELSE 0 END) AS cremazioni`, cambia solo l'etichetta e naturalmente il valore di riferimento del campo `rito`.

Abbiamo parlato sopra di _conteggio_ di valori, per ogni riga perché in questa query stiamo **raggruppando** valori, e nello specifico li stiamo raggruppando per il campo `fase`, com'è chiara dall'ultima parte della query principale `GROUP BY fase`, che aggiunge un principio di aggregazione ([segui questo collegamento per avere più informazioni su `GROUP BY`](https://www.w3schools.com/sql/sql_groupby.asp)).

Con `CASE` si possono usare tutti gli operatori SQL (es. `=`, `<`, `>`, `<=`, `>=`, `LIKE`, ecc.) ed è possibile concatenare più condizioni usando i soliti `AND` o `OR`. La cosa impotante che l'espressione tra `WHEN` e `THEN` restitusca un valore booleando di `VERO` o `FALSO`. Il nostro caso era semplice, ma è possibile anche prevedere più asserzione `WHEN...THEN`.

## Riferimenti
- SQL Tutorial: [https://www.sqltutorial.org/sql-case/](https://www.sqltutorial.org/sql-case/)
- Free Code Camp: [https://www.freecodecamp.org/news/case-statement-in-sql-example-query/](https://www.freecodecamp.org/news/case-statement-in-sql-example-query/)
- W3 Schools: [https://www.w3schools.com/sql/sql_case.asp](https://www.w3schools.com/sql/sql_case.asp)
