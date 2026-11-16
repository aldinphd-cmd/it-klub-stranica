# Wireframe i Mockup – Školski IT Klub

Ovaj dokument sadrži plan rasporeda elemenata (wireframe) i vizualnog identiteta (mockup) za prezentacijsku web stranicu školskog IT kluba.

---

## 1. Wireframe (Skica rasporeda elemenata)

### Desktop prikaz (širina ekrana > 768px)
```text
+-------------------------------------------------------------------+
| [LOGO: IT Klub]                 [Početna] [O nama] [Projekti] ... |
+-------------------------------------------------------------------+
|                                                                   |
|                  DOBRODOŠLI U ŠKOLSKI IT KLUB                     |
|         Kratki opis kluba i poziv na akciju (CTA tekst)           |
|                       [ Prijavi se odmah ]                        |
|                                                                   |
+-------------------------------------------------------------------+
|                         O NAMA & OSNIVAČ                          |
|                    +-------------------------+                    |
|                    |      [Avatar Ikona]     |                    |
|                    |      Aldin Subašić      |                    |
|                    |    Opis i uloga člana   |                    |
|                    +-------------------------+                    |
+-------------------------------------------------------------------+
|                           NAŠI PROJEKTI                           |
|  +-------------------+  +-------------------+  +---------------+  |
|  | Raspored Škole    |  | Pametna Učionica  |  | Eko-Mapa      |  |
|  | Kratki opis...    |  | Kratki opis...    |  | Kratki opis.. |  |
|  +-------------------+  +-------------------+  +---------------+  |
+-------------------------------------------------------------------+
|                      PRIJAVI SE U IT KLUB                         |
|               +-----------------------------------+               |
|               | Ime i prezime: [________________] |               |
|               | Email adresa:  [________________] |               |
|               | Razlog:        [________________] |               |
|               | [ Pošalji prijavu ]               |               |
|               +-----------------------------------+               |
+-------------------------------------------------------------------+
|               © 2026 Školski IT Klub. Sva prava zadržana.         |
+-------------------------------------------------------------------+
```

### Mobilni prikaz (širina ekrana ≤ 768px)
```text
+---------------------------+
| [LOGO: IT Klub]           |
+---------------------------+
|   DOBRODOŠLI U IT KLUB    |
|     Kratki opis kluba     |
|    [ Prijavi se odmah ]   |
+---------------------------+
|      O NAMA & OSNIVAČ     |
|  +---------------------+  |
|  |    Aldin Subašić    |  |
|  +---------------------+  |
+---------------------------+
|       NAŠI PROJEKTI       |
|  +---------------------+  |
|  | Raspored Škole Bot  |  |
|  +---------------------+  |
|  +---------------------+  |
|  | Pametna Učionica    |  |
|  +---------------------+  |
|  +---------------------+  |
|  | Eko-Mapa grada      |  |
|  +---------------------+  |
+---------------------------+
|     PRIJAVI SE U KLUB     |
|  +---------------------+  |
|  | [Ime i prezime]     |  |
|  | [Email adresa]      |  |
|  | [Razlog]            |  |
|  | [ Pošalji prijavu ] |  |
|  +---------------------+  |
+---------------------------+
|  © 2026 Školski IT Klub   |
+---------------------------+
```

---

## 2. Mockup (Vizualni stil, boje i tipografija)

* **Paleta boja:**
  * **Primarna tamna (Header, Hero pozadina, Footer):** `#111111` i gradijent `#222831` $\rightarrow$ `#393e46` (moderni tehnološki izgled).
  * **Akcentna boja (Dugmad, hover efekti):** `#00adb5` (tirkizno-plava, daje kontrast na tamnoj i svijetloj podlozi).
  * **Pozadina sekcija:** `#f9f9f9` (svijetlo siva) i `#ffffff` (čisto bijela za kartice i sekciju projekata).
  * **Tekst:** `#333333` za glavni tekst, `#666666` za podnaslove, `#ffffff` na tamnim pozadinama.

* **Tipografija:**
  * Font: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` (čist, čitljiv sans-serif font prilagođen webu).
  * Hijerarhija veličina: Hero naslov `2.5rem` (desktop) / `2rem` (mobitel), osnovni tekst `1rem` sa visinom reda (`line-height`) `1.6`.

* **Komponente i raspored:**
  * **CSS Grid:** Korišten za sekciju projekata (`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`) kako bi se kartice automatski slagale jedna ispod druge na manjim ekranima.
  * **Kartice:** Blago zaobljeni rubovi (`border-radius: 8px`) i suptilna sjena (`box-shadow: 0 4px 6px rgba(0,0,0,0.05)`).

---

## 3. Pokretanje projekta

Stranica je statički HTML/CSS/JavaScript projekat. Za pregled je dovoljno otvoriti `index.html` u web pregledniku. Nije potreban build proces niti instalacija dodatnih paketa.

## 4. Funkcionalnosti

- Navigacija između sekcija stranice.
- Predstavljanje IT kluba, osnivača i projekata.
- Forma za simuliranu prijavu u klub sa osnovnom provjerom unosa.
- Responzivni raspored za manje ekrane.
