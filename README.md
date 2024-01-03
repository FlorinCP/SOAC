# Simularea şi Optimizarea Arhitecturilor de Calcul

## Descriere
Proiectul vizează scrierea unui simulator pentru o arhitectură superscalară parametrizabilă. Scopul principal este de a determina diferiţi parametri de performanţă și configurații optime pentru o arhitectură Harvard de memorie, cu cache-uri de instrucţiuni şi date separate.

## Parametrii Principali ai Arhitecturii
- **FR (Fetch Rate):** Specifică numărul de instrucţiuni citite simultan din cache sau memorie într-un ciclu de tact. Valorile posibile: 4, 8, 16.
- **IBS (Instruction Buffer Size):** Dimensiunea buffer-ului de prefetch, măsurată în număr de instrucţiuni. Valorile posibile: 4, 8, 16, 32.
- **IRmax (Issue Rate Maxim):** Numărul maxim de instrucţiuni lansate în execuţie simultan într-un ciclu de execuţie, din buffer-ul de prefetch. Valorile posibile: 2, 4, 8, 16.
- **Latenţa:** Numărul de cicli necesari execuţiei instrucţiunilor aritmetice, de salt și cele cu referire la memorie.
- **Cache-uri (IC și DC):** Cache-ul de instrucţiuni și Cache-ul de date sunt cache-uri mapate direct, organizate în blocuri de capacităţi parametrizabile.
- **Memoria Principală:** Are o latenţă parametrizabilă de N_PEN (10, 15, 20) tacţi procesor.
- **Alţi Parametri:** Presupunem existenţa unui număr suficient de mare de seturi de regiştrii generali și un branch prediction perfect.

## Obiective
- Determinarea ratei de procesare (număr de instrucţiuni raportat la număr de cicli de execuţie).
- Analiza ratelor de miss în cache-uri (IC, DC).
- Determinarea procentului din timpul total cât buffer-ul de prefetch este gol.
- Identificarea parametrilor optimi și factorilor de limitare pentru diverse configurații.

## Mod de Utilizare
@TODO

## Fișiere Trace (*.trc)
Programul va simula fișiere trace (*.trc), rulate pe arhitectura HSA (Hartfield Superscalar Architecture), care cuprind 8 benchmark-uri Stanford (sortare, problema turnurilor din Hanoi, problema damelor, generare de permutări și înmulțiri de matrici).

## Rezultate și Interpretări
@TODO

## CARACTERISTICI DISTINCTE

Proiectul nostru abordează mai multe aspecte critice ale arhitecturilor superscalare, concentrându-se pe optimizarea și simularea performanțelor. Printre caracteristicile distinctive ale simulatorului se numără:

### 1.1. Analiza Ratei de Fetch (FR)
- **Generația de Rezultate și Grafice:** Simulatorul generează rezultate și grafice ilustrând influența ratei de fetch (FR) asupra ratei de procesare IR(FR), precum și asupra ratelor de miss în cache-urile de date și instrucțiuni (RmissDC(FR) și RmissIC(FR)).
- **Obiective de Studiu:** Determinați configurația optimă pentru rata de fetch și înțelegeți cum variația acesteia influențează eficiența generală și rata de miss a cache-urilor.

### 1.2. Impactul Dimensiunii Buffer-ului de Prefetch
- **Studiu asupra Ratei de Procesare:** Analizați cum dimensiunea buffer-ului de prefetch afectează rata de procesare IR(IBS).
- **Analiza Timpului de Inactivitate al Procesorului:** Evaluează procentul din timpul total în care buffer-ul de prefetch este gol (IBE - instruction buffer empty), ceea ce indică perioadele în care procesorul nu are instrucțiuni de executat.

### 1.3. Influences of Instruction Cache Capacity
- **Studiu asupra Capacității Cache-ului de Instrucțiuni:** Investigați cum variația dimensiunii cache-ului de instrucțiuni (SIZE_IC) influențează rata de procesare IR(SIZE_IC) și rata de miss în cache-ul de instrucțiuni (RmissIC(SIZE_IC)).
- **Optimizarea Configurației Cache-ului:** Identificați dimensiunea optimă pentru cache-ul de instrucțiuni pentru a minimiza ratelor de miss și pentru a îmbunătăți rata de procesare.

