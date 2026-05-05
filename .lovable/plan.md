## QA výsledok exportu (NEOHACK-Rozptyleny-typ-5.pdf, 14 strán)

Prešiel som všetkých 14 strán. Layout, šírka, farby a typografia sú **OK** — žiadny orezaný text, žiadne čierne pásy vpravo, posledná strana má plné tmavé pozadie a vycentrovaný citát. Zostávajú už len **3 kozmetické chyby**:

### Chyba 1 — Prázdna strana 7 (kritické)
Strana 7 je **úplne prázdna**, len malé „07" číslo úplne dole. Vznikla artefaktom zalamovania medzi sekciou „Resetovací protokol" (str. 6) a „Nová architektúra dňa" (str. 8). Pravdepodobne `page-break-before:always` alebo nadrozmerný spacer pred sekciou „Nová architektúra dňa" tlačí jej obsah o stranu nižšie a vytvorí prázdnu vsuvku.

### Chyba 2 — Prázdne spodky strán 4, 6, 9 (drobné)
Strany 4 (Symptómy), 6 (závisí od chyby 1) a 9 (Vylúčenie deficitu) majú spodnú tretinu/polovicu prázdnu, lebo karty sa kvôli `page-break-inside:avoid` posunuli celé na ďalšiu stranu. Toto je normálny side-effekt PDF zalamovania, ale dá sa zmierniť kompaktnejším vertikálnym rytmom v PDF móde (menšie `margin` medzi kartami a sekciami) tak, aby sa viac obsahu zmestilo na predošlú stranu.

### Chyba 3 — Cover (str. 1) má veľa prázdneho miesta
Obálka má všetok obsah v hornej polovici (titulok + TOC), spodná polovica je prázdna. Nie je to chyba, ale strata príležitosti — chýba vizuálny kotvič dole (napr. CTA-like riadok „Personalizovaný sprievodca · NEOHACK.SK" alebo decentný gradient/akcent dole).

## Plán opráv (`public/neohack.html`, len `body.pdf-export …` selektory)

### 1. Vyriešiť prázdnu stranu 7
- Nájsť sekciu „Nová architektúra dňa" (zhruba ID `architektura` alebo trieda v rámci sekcií 06–07) a v PDF móde **odstrániť `page-break-before:always`** (resp. nahradiť za `page-break-before:auto`). To isté skontrolovať pre všetky `<section>` v rámci `body.pdf-export` — povoliť prirodzené zalomenie všade okrem cover/final.
- Dať si pozor, aby cover (`#cover`) a final (`.eb-final`) zostali samostatné strany (`page-break-after:always` resp. `page-break-before:always` len pre tieto dva uzly).
- QA cieľ: 13 strán namiesto 14, žiadna prázdna.

### 2. Zhustiť vertikálny rytmus v PDF móde
- V `body.pdf-export` znížiť:
  - `section { padding-top/bottom }` z aktuálnej hodnoty (~64–80 px) na **40 px**
  - `.eb-item, .eb-step, .eb-product, .eb-deficit, .eb-blood { margin-bottom }` na **14 px**
  - `h2 { margin-top/bottom }` skrátiť o ~30 %
- To dovolí ďalšej karte „dosadnúť" pred zalomenie a zredukuje prázdne spodky.

### 3. Cover — vyplniť spodok strany
- V `body.pdf-export #cover` pridať pod TOC tichý spacer + decentný riadok:
  - Tenká fialová linka + text malými capitals: **„NEOHACK.SK · DOPAMÍNOVÝ PROTOKOL · ROZPTÝLENÝ TYP"**
  - Vertikálne ho ukotviť cca 60 mm od spodu (pomocou `position:absolute; bottom:60px` v rámci `#cover` ktorý dostane `position:relative; min-height:1123px`).
- Alternatíva (jednoduchšia): cover sekciu nastaviť `min-height:1123px; display:flex; flex-direction:column; justify-content:space-between` aby sa TOC/úvod prirodzene roztiahli s footer-pásom dole.

### 4. Povinný QA cyklus
1. Vyrenderovať PDF, `pdftoppm -jpeg -r 120 export.pdf qa`, pozrieť **každú** stranu.
2. Skontrolovať: žiadna prázdna strana, žiadny veľký prázdny spodok (max ~15 % výšky), cover má vyplnený spodok, final má citát stále vycentrovaný.
3. Iterovať max 2× ak treba doladiť spacing.

## Čo sa NEMENÍ
- Šírka layoutu (794 px), padding (53 px), farby, typografia, obsah.
- Webová verzia.
- Posledná strana (final) — funguje OK.

## Dotknuté riadky
`public/neohack.html` riadky ~417–492 (PDF override blok) + jeden nový blok pre `#cover` v PDF móde. Žiadne zmeny v React kóde.
