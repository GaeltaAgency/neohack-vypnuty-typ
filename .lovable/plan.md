# Prepis na Vypnutý typ + tlmená modrá

Layout, komponenty, PDF export, navigácia, animácie, štruktúra sekcií a všetky CSS triedy zostávajú **netknuté**. Mení sa len obsah a paleta akcentov.

## 1. Farebná paleta (CSS premenné v `:root`)

Iba akcent — pozadie ostáva čierne.

| Premenná | Pred | Po |
|---|---|---|
| `--acc` | `#A855F7` | `#3b82f6` |
| `--acc30` | `rgba(168,85,247,.30)` | `rgba(59,130,246,.30)` |
| `--acc12` | `rgba(168,85,247,.12)` | `rgba(59,130,246,.12)` |
| `--acc06` | `rgba(168,85,247,.06)` | `rgba(59,130,246,.06)` |
| Gradient bodky `#d8b4fe → #a855f7` | | `#93c5fd → #3b82f6` |
| Gradient nadpisov `#c084fc / #a855f7 / #7e22ce` | | `#60a5fa / #3b82f6 / #1e40af` |
| `#e9d8ff` (tag text) | | `#dbeafe` |
| `rgba(168,85,247,.45)` (toc line) | | `rgba(59,130,246,.45)` |
| `rgba(168,85,247,.08)` (tag bg) | | `rgba(59,130,246,.08)` |

Inline `style="color:var(--acc)"` v texte ostáva — mení sa automaticky cez premennú.

## 2. Obsahové zmeny — 1:1 z DOCX `energeticky_kompas_vypnuty_final.docx`

### Cover (sekcia `#cover`)
- Tag: `Dopamínová fragmentácia` → **`Nízka aktivácia nervového systému`**
- H1: `Rozptýlený typ.` → **`Vypnutý typ.`**
- Lead: → **`Keď telo stratilo chuť bojovať — a ty nevieš prečo.`**
- Hero desc: ponechať generický odsek z DOCX str. 2 ("Držíš v rukách manuál…")
- Meta chip: `Typ: Rozptýlený` → **`Typ: Vypnutý`**
- TOC položky a `data-title` v `<section>` sa aktualizujú podľa nových názvov sekcií nižšie.

### Sekcia 01 — Tvoj prvý krok: Odomknutie systému
Prepísať odseky podľa DOCX str. 2 (úvod + "Možno si v poslednej dobe…", "Zastavme to presne tu…", "Tvoj nervový systém… zatiahol ručnú brzdu… nízka aktivácia nervového systému", "Tvoj problém nie je v hlave…", "V tomto manuáli…").
- Quote 1: **„Volá sa to nízka aktivácia nervového systému.“**
- Callout: **„Zastavme to tu a teraz a pozrime sa na tvoju biológiu bez tlaku a sebaobviňovania.“**
- Quote 2: **„Dobrá správa? Je to len dočasný systémový vzorec. A ten dokážeme krok za krokom rekalibrovať.“**
- Disclaimer ostáva (už tam je).

### Sekcia 02 — Anatómia vypnutia: Prečo tvoj motor nenaštartuje?
Telo z DOCX str. 3 (mitochondrie, dopamín, ATP, „nízka bazálna hladina dopamínu", spánok 10 hod).
- Quote: **„Tvoje bunky nevyrábajú dosť paliva. Spánok to už nespraví.“**
- Callout (veľký): **„TVOJE TELO NEZLYHALO. IBA SA PREPLO DO OCHRANNÉHO MÓDU.“**

### Sekcia 03 — Symptómy: Ako vyzerá tvoje vypnutie v praxi?
6 kariet `.eb-item` s číslami 01–06:
1. **SYNDRÓM ŤAŽKÝCH RÁN**
2. **APATIA A STRATA VNÚTORNEJ ISKRY**
3. **MENTÁLNA A FYZICKÁ POMALOSŤ**
4. **NÍZKE LIBIDO**
5. **ÚNAVA BEZ NAPÄTIA (PLOCHOSŤ)**
6. **EMOČNÁ PLOCHOSŤ A ÚTLM**

(texty 1:1 z DOCX str. 3)

### Sekcia 04 — Ako sa snažíš oklamať vlastný systém: Tvoje kompenzácie
3 karty `.eb-item`:
1. **KOFEÍNOVÉ ZÁCHRANNÉ KOLESO**
2. **RÝCHLY CUKOR**
3. **ILÚZIA ODDYCHU (PASÍVNA KONZUMÁCIA)**

\+ pod-blok "PREČO SA TÝM LEN PREPADÁVAŠ HLBŠIE" → "CENA ZA RÝCHLU ENERGIU" + "PREČO ŤA TIETO SKRATKY NIČIA" (DOCX str. 4).

### Sekcia 05 — Tvoj skutočný deficit: Čo tvojmu telu chýba?
`.eb-deficit` 3 položky:
- **AKTIVÁCIA NERVOVÉHO SYSTÉMU**
- **ZÁKLADNÁ HLADINA DOPAMÍNU**
- **MITOCHONDRIÁLNA ENERGIA**

\+ podsekcia "Ako si sa sem dostal? Biológia dlhodobého tlaku." so 4 kartami `.eb-item`:
1. **CHRONICKÝ STRES A KOLAPS** — Systém zatiahol brzdu
2. **BEZMOCNOSŤ A POTLÁČANIE EMÓCIÍ** — Dopamínové dráhy ochabli
3. **MÁLO PRIRODZENÉHO POHYBU** — Mitochondrie začali degenerovať
4. **ABSENCIA RANNÉHO SVETLA** — Cirkadiánny rytmus sa rozpadol

### Sekcia 06 — Resetovací protokol: 3 kroky, ktoré ti pomôžu vrátiť energiu
3× `.eb-step`:
1. **RANNÉ SLNEČNÉ SVETLO (10 MINÚT)** — Kortizolový pulz / Serotonín→melatonín / Cirkadiánna kalibrácia / Ako na to
2. **EXPOZÍCIA CHLADU (SYMPATICKÁ AKTIVÁCIA)** — Noradrenalín / Dopamínová vlna / Mitochondriálna adaptácia / Ako na to
3. **SILOVÝ POHYB (3× TÝŽDENNE)** — Hormonálny reštart / Hustota mitochondrií / Dlhodobý dopamínový efekt / Ako na to

### Sekcia 07 — Tvoja nová architektúra dňa: Ochrana tvojej rannej kapacity
3× `.eb-step`:
1. **RANNÝ REŽIM BEZ OBRAZOVKY**
2. **VYŠŠÍ PRÍJEM BIELKOVÍN (PROTEÍNOV)**
3. **ELIMINÁCIA VEČERNÉHO CUKRU**

### Sekcia 08 — Vylúčenie fyzického deficitu: Čo si nechať skontrolovať
`.eb-blood` 6 položiek:
- **ŠTÍTNA ŽĽAZA (TSH, fT3, fT4)**
- **ŽELEZO A FERITÍN**
- **VITAMÍN B12 a D**
- **CRP (Zápalový marker)**
- **TESTOSTERÓN (u mužov)**
- **RANNÝ KORTIZOL**

### Sekcia 09 — NEOHACK Protokol — Prvých 6–8 týždňov
3 hlavné produkty `.eb-product`:
1. **METAFOCUS** — Ranná aktivácia bez pádu
2. **HYDROFUEL** — Okamžitá nervová vodivosť
3. **METHYLFUEL B-COMPLEX** — Ranný bunkový štartér

3 nadstavbové produkty `.eb-product muted` (Po 2–3 týždňoch):
4. **AminoFuel** — pre nedostatok ranných bielkovín
5. **Omega3Fuel** — pri pretrvávajúcej mentálnej hmle a zápale
6. **ImmunoCore** — poistka pre obdobia stresu

CTA odkazy `https://neohack.sk` ostávajú.

### Záverečná sekcia (`.eb-final`)
- Nadpis: **„Malá zmena. Presné miesto. Veľký rozdiel.“**
- Telo z DOCX str. 11 ("Nemusíš opraviť celý život za jeden týždeň…").
- CTA tlačidlo (download PDF) ostáva.

## 3. Disclaimer
Aktuálny disclaimer v sekcii 01 už zodpovedá požiadavke (`⚠️ Upozornenie: Tento manuál nie je náhradou…`). **Ponechať bez zmeny.**

## 4. Čo sa NEMENÍ
- Celá `<head>` (meta, fonts, štruktúra), všetky `@media print` a `body.pdf-export` pravidlá
- PDF export skript, navigácia, mobilné menu, diagnostický panel, PDF preview modal
- Triedy `.eb-*`, layout grid, spacing, typografia (rozmery)
- `data-title` atribúty (len texty sa upravia podľa nových sekcií, štruktúra ostane)
- Súbor `neohack.html` ostane jediný menený súbor

## Otázky pre teba pred implementáciou
Žiadne — máme texty z DOCX, akcent (modrá #3b82f6), pozadie ostáva čierne, disclaimer je doriešený.

Potrebuješ ešte niečo (napr. zmenu textu na CTA tlačidle, iný cover-tag, alebo zmenu názvu PDF súboru `Energeticky_Kompas_Vypnuty.pdf`)?
