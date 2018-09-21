Dokumentasjon av prosjekt 2
---------------------------
### Valg av layout:
Vi ønsker et layout som er enkelt å bruke, intuitivt og raskt - og som setter bildet, lyden
og teksten i fokus. Derfor har vi prøvd å lage et layout som støtter dette. Bildet og teksten er i hovedfokus og opptar derfor størst del av siden.
Det skal være intuitivt å navigere mellom de forskjellige valgene man har, men valgene burde ikke ta for stor plass på siden, eller vises som for mange av gangen. Dette føler vi at vårt layout løser bra.

Generelt er siden bygd opp av header og content, der content igjen er delt opp i en valgmeny (som lar deg velge mellom bilde, lyd, og tekst), bildet som er representert, teksten, samt en valgmeny som lar deg skifte til en annen kombinasjon av bilde, lyd, tekst som er valgt.

Layouten endrer seg basert på bredde til høyde forholdet
    i) portrett
    Her finner man valgmenyen for bilde, lyd, tekst øverst av content
    Dette er i høydeformat
ii) landskap        
        Her er valgmenyene til siden som en sidebar.
        Dette er i breddeformat

### Valg av bilder, tekst og lyd:
Vi har valgt å ha bilder, tekst og lyd som er koblet opp mot samme tema; følelser. Disse følelsene er: “elated”, “furious” og “melancholic”.
Bildene er av typen SVG og alle sammen er hentet fra openclipart.
Dette er en side som lar deg bruke bildene til “unlimited-commercial use”. De har også en Q&A side om hvordan man kan bruke bildene.
På denne siden gjør de det ganske åpenbart at vi kan bruke bildene til dette formålet.
Forøvrig har vi valgt svart-hvit tema på bildene, fordi vi vil at de skal ha litt lik stil og matche.
Dette hjelper også å fremheve følelsene synes vi.
Det er ingen CopyRight på quotes. Vi har samlet diverse quotes som vi føler reflekterer følelsene vi prøver å fremheve. Vi oppgir også hvem som er opphavet til quotesene på siden.
Lydene er på formatet mp3. Alle er mellom 2-8 sekunder lange, og går i loop på siden.

### Krav til bruk av teknologi
__React__

Vår løsning er totalt basert på React. Den er opprettet ved hjelp av kommandoen ‘npx create-react-app’ og node slik oppgaven spesifiserte. Det har vært positivt å bruke React av flere grunner. Ettersom React er komponent-basert, forblir koden lesbar, da den deles inn i flere naturlige komponenter. Vi erfarte at react var et nokså intuitivt rammeverk å sette seg inn i, og det gikk fort å lære. 

Komponent strukturen var også en stor fordel når vi skulle laste inn de ulike mediefilene. React kjører sitt eget virtuelle DOM, og oppdaterer kun nettleseren sitt DOM når det er nødvendig, og kun den delen av det som har endret seg. Dette gjør at siden er raskere enn den hadde vært med en tradisjonell implementasjon.

Komponenter egner seg også veldig godt til gjenbruk av kode, noe vi har gjort med komponentene NavItem.js, CategoryItem.js og CategoryOption.js.

Når vi tok valget om å lage en ny komponent, vurderte vi om elementet måtte oppbevare informasjon, eller ha en noenlunde avansert funksjonalitet. Dersom det ikke hadde det, implementerte vi det bare i JSX hos parent.

__Ajax__

Som spesifisert i oppgaven har vi brukt AJAX. I starten brukte vi standard XMLHttpRequest - før vi gikk videre til fetch() for så å bytte til axios. XMLHttpRequest er ganske lavnivå, men fint å bruke for å forstå litt hvordan AJAX fungerer. Vi valgte å bruke axios ettersom det så oversiktlig og enkelt ut. Axios har metodene vi trengte og med node er det veldig lett å installere. 

Vi implementerte axios.get() to separate steder: en for å hente ut svg bilde, og en for å hente ut json fila med sitater. Å hente ut json fila er veldig kjekt med Axios, den konverterer den til javascript-objekter med en gang som vi enkelt kan bruke, uten å kalle parse() eller stringify().
Tilsvarende enkelt var det med svg-bildene, Axios “henter” dem enkelt fra serveren og “serverer” dem til oss som XML. 

__Responsive Web Design__

Vi har benyttet flere ulike teknologier for å oppnå et mest mulig responsivt webdesign. Siden vår benytter CSS grid, der elementene inn i hver kolonne fyller opp en gitt %-andel av plassen. Noen av elementene har vi også valgt å gi en bestemt vw(viewport-width), vh(viewport-height) eller vmin(viewport of smallest side). Dermed er layouten flytende. Altså at elementene tilpasser seg containeren den tilhører.

Designet er i hovedsak laget for mobil-view, siden pc-utgave i mobil ser ille ut, ikke nødvendigvis motsatt. For å gjøre siden mer flexibel/ responsiv, og at den gir best opplevelse for alle enheter, har vi valgt å benytte @media-queries, slik at elementene på siden flytter seg for personer som besøker siden med tablet/ pc. 

Alle bildene som er benyttet er av typen SVG (Scalable Vector Graphics). Siden dette er vektorgrafikk, gjør dette at de kan skalere vertikalt og horisontalt.

__Git__

Vi organiserte repositoriet omtrent som vi lærte i git-forelesning. Vi hadde en master branch som vi sjeldent oppdaterte. En Develop branch som vi oppdaterte hver gang vi la til en ny feature. I tillegg til de, hadde vi feature branches, som var knyttet til issues for det meste var maks èn person per branch. I hver commit(så sant det lar seg gjøre) knytter den opp til et issue og beskriver endringene i korte trekk.

__Node.js & NPM__

Vi satt opp prosjektet ved hjelp av npm. Vi brukte kommandoen 'npx create-react-app' for å sette opp standard dependencies og npm kommandoer, sånn som npm start og npm run build. Vi importerte også bibliotekene classnames og axios for hhv. conditional css klasser og Ajax kall.

### Testing:
Som beskrevet i layout, endrer siden oppsett basert på skjermorientering. For å teste har vi hovedsakelig brukt inspiser verktøyet i både chrome og firefox, men vi har også brukt webappen med mobil. I inspiser kan man simulere at man bruker webappen på ulike enheter. Man kan også velge “responsiv” slik at man kan skreddersy dimensjonene. Under testene prøvde vi ut all funksjonaliteten til webappen for å sjekke at alt fungerte som det skulle. For mobile enheter gjorde vi dette for både portrett og landskaps orientering.

Hjemmesiden har skalert godt for alle enhetene vi testet på. Samsung Galaxy S5, Ipad, PC, og i tillegg for responsiv (der vi regulerte skjermen kontinuerlig for å se endringene).

### Kilder
* [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)
* [https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)
* [https://stackoverflow.com/questions/44472827/how-to-get-the-latest-selected-value-in-reactjs?noredirect=1&lq=1](https://stackoverflow.com/questions/44472827/how-to-get-the-latest-selected-value-in-reactjs?noredirect=1&lq=1)
* [https://stackoverflow.com/questions/2310734/how-to-make-html-text-unselectable#6382492](https://stackoverflow.com/questions/2310734/how-to-make-html-text-unselectable#6382492)
* [https://stackoverflow.com/questions/24147331/react-the-right-way-to-pass-form-element-state-to-sibling-parent-elements#24151862](https://stackoverflow.com/questions/24147331/react-the-right-way-to-pass-form-element-state-to-sibling-parent-elements#24151862)
* [https://stackoverflow.com/questions/41147874/react-native-parent-child-communication-and-return-values#41148983](https://stackoverflow.com/questions/41147874/react-native-parent-child-communication-and-return-values#41148983)
* [https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children?noredirect=1&lq=1](https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children?noredirect=1&lq=1)
* [https://stackoverflow.com/questions/35850118/setting-state-on-componentdidmount#35853603](https://stackoverflow.com/questions/35850118/setting-state-on-componentdidmount#35853603)
* [https://stackoverflow.com/questions/29490581/react-state-not-updated](https://stackoverflow.com/questions/29490581/react-state-not-updated)


