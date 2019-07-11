/* 
 * numer przy addSum2, add-sum2, sum2 oznacza liczbe przez którą mnożymy czyli 2
 * numer przy np Latarnia2 oznacza kolejność chronologiczna elementu <td> w html
 */
/**KUCHARZ polecenia ułozone są alfabetycznie---------------------------------*/
/**BULION RYBNY*/
var calcBulion = document.getElementById("calc-bulion");
var addSum1Bulion1 = document.getElementById("bulion1_add-sum1");
var addSum1Bulion2 = document.getElementById("bulion2_add-sum1");
var addSum1Bulion3 = document.getElementById("bulion3_add-sum1");
calcBulion.addEventListener("input", add);
/**CIASTECZKA KUKURYDZIANE*/
var calcCiasteczka = document.getElementById("calc-ciasteczka");
var addSum2Ciasteczka1 = document.getElementById("ciasteczka1_add-sum2");
var addSum2Ciasteczka2 = document.getElementById("ciasteczka2_add-sum2");
var addSum2Ciasteczka3 = document.getElementById("ciasteczka3_add-sum2");
calcCiasteczka.addEventListener("input", add);
/**CIASTO*/
var calcCiasto = document.getElementById("calc-ciasto");
var addSum1Ciasto1 = document.getElementById("ciasto1_add-sum1");
var addSum1Ciasto2 = document.getElementById("ciasto2_add-sum1");
calcCiasto.addEventListener("input", add);
/**DORSZ*/
var calcDorsz = document.getElementById("calc-dorsz");
var addSum1Dorsz1 = document.getElementById("dorsz1_add-sum1");
var addSum1Dorsz2 = document.getElementById("dorsz2_add-sum1");
calcDorsz.addEventListener("input", add);
/**DZBAN WODY*/
var calcDzban = document.getElementById("calc-dzban");
var addSum1Dzban1 = document.getElementById("dzban1_add-sum1");
var addSum1Dzban2 = document.getElementById("dzban2_add-sum1");
calcDzban.addEventListener("input", add);
/**DZEM*/
var calcDzem = document.getElementById("calc-dzem");
var addSum2Dzem1 = document.getElementById("dzem1_add-sum2");
var addSum2Dzem2 = document.getElementById("dzem2_add-sum2");
var addSum1Dzem3 = document.getElementById("dzem3_add-sum1");
calcDzem.addEventListener("input", add);
/**FASOLA W PUSZCE*/
var calcFasPuszka = document.getElementById("calc-fasola-puszka");
var addSum12FasPuszka1 = document.getElementById("fasola-puszka1_add-sum12");
var addSum12FasPuszka2 = document.getElementById("fasola-puszka2_add-sum12");
var addSum7FasPuszka3 = document.getElementById("fasola-puszka3_add-sum7");
var addSum5FasPuszka4 = document.getElementById("fasola-puszka4_add-sum5");
var addSum3FasPuszka5 = document.getElementById("fasola-puszka5_add-sum3");
calcFasPuszka.addEventListener("input", add);
/**FASOLA Z BEKONEM*/
var calcFasolaBekon = document.getElementById("calc-fasola-bekon");
var addSum1FasolaBekon1 = document.getElementById("fasola-bekon1_add-sum1");
var addSum1FasolaBekon2 = document.getElementById("fasola-bekon2_add-sum1");
var addSum1FasolaBekon3 = document.getElementById("fasola-bekon3_add-sum1");
var addSum1FasolaBekon4 = document.getElementById("fasola-bekon4_add-sum1");
calcFasolaBekon.addEventListener("input", add);
/**GROG*/
var calcGrog = document.getElementById("calc-grog");
var addSum2Grog1 = document.getElementById("grog1_add-sum2");
var addSum2Grog2 = document.getElementById("grog2_add-sum2");
var addSum1Grog3 = document.getElementById("grog3_add-sum1");
var addSum1Grog4 = document.getElementById("grog4_add-sum1");
calcGrog.addEventListener("input", add);
/**GULASZ*/
var calcGulasz = document.getElementById("calc-gulasz");
var addSum1Gulasz1 = document.getElementById("gulasz1_add-sum1");
var addSum1Gulasz2 = document.getElementById("gulasz2_add-sum1");
var addSum1Gulasz3 = document.getElementById("gulasz3_add-sum1");
var addSum1Gulasz4 = document.getElementById("gulasz4_add-sum1");
calcGulasz.addEventListener("input", add);
/**GUMA DO ZUCIA*/
var calcGuma = document.getElementById("calc-guma");
var addSum1Guma1 = document.getElementById("guma1_add-sum1");
var addSum1Guma2 = document.getElementById("guma2_add-sum1");
var addSum1Guma3 = document.getElementById("guma3_add-sum1");
calcGuma.addEventListener("input", add);
/**KADZIDLO*/
var calcKadzidlo = document.getElementById("calc-kadzidlo");
var addSum4Kadzidlo1 = document.getElementById("kadzidlo1_add-sum4");
var addSum2Kadzidlo2 = document.getElementById("kadzidlo2_add-sum2");
var addSum1Kadzidlo3 = document.getElementById("kadzidlo3_add-sum1");
calcKadzidlo.addEventListener("input", add);
/**KAWALEK TORTU*/
var calcKawTortu = document.getElementById("calc-kaw-tortu");
var addSum1KawTortu1 = document.getElementById("kaw-tortu1_add-sum1");
var addSum1KawTortu2 = document.getElementById("kaw-tortu2_add-sum1");
var addSum1KawTortu3 = document.getElementById("kaw-tortu3_add-sum1");
calcKawTortu.addEventListener("input", add);
/**MARYNOWANY STEK*/
var calcMarStek = document.getElementById("calc-mar-stek");
var addSum1MarStek1 = document.getElementById("mar-stek1_add-sum1");
var addSum1MarStek2 = document.getElementById("mar-stek2_add-sum1");
var addSum1MarStek3 = document.getElementById("mar-stek3_add-sum1");
calcMarStek.addEventListener("input", add);
/**MAKA KUKURYDZIANA*/
var calcMaka = document.getElementById("calc-maka-kuk");
var addSum1Maka1 = document.getElementById("maka-kuk1_add-sum1");
var addSum1Maka2 = document.getElementById("maka-kuk2_add-sum1");
calcMaka.addEventListener("input", add);
/**MIOD*/
var calcMiod = document.getElementById("calc-miod");
var addSum1Miod1 = document.getElementById("miod1_add-sum1");
var addSum1Miod2 = document.getElementById("miod2_add-sum1");
calcMiod.addEventListener("input", add);
/**MIOD PITNY*/
var calcMiodPitny = document.getElementById("calc-miod-pitny");
var addSum2MiodPitny1 = document.getElementById("miod-pitny1_add-sum2");
var addSum2MiodPitny2 = document.getElementById("miod-pitny2_add-sum2");
var addSum1MiodPitny3 = document.getElementById("miod-pitny3_add-sum1");
var addSum1MiodPitny4 = document.getElementById("miod-pitny4_add-sum1");
calcMiodPitny.addEventListener("input", add);
/**NAJOSTRZEJRZE CHILI NA ZACHODZIE*/
var calcChili = document.getElementById("calc-chili");
var addSum7Chili1 = document.getElementById("chili1_add-sum7");
var addSum5Chili2 = document.getElementById("chili2_add-sum5");
var addSum4Chili3 = document.getElementById("chili3_add-sum4");
var addSum1Chili4 = document.getElementById("chili4_add-sum1");
calcChili.addEventListener("input", add);
/**OBIAD DZENTELMENA*/
var calcObiad = document.getElementById("calc-obiad-dz");
var addSum3Obiad1 = document.getElementById("obiad-dz1_add-sum3");
var addSum2Obiad2 = document.querySelector("#obiad-dz2_add-sum2");
var addSum1Obiad3 = document.querySelector("#obiad-dz3_add-sum1");
calcObiad.addEventListener("input", add);
/**PIECZONY INDYK*/
var calcPieczonyIndyk = document.getElementById("calc-piecz-indyk");
var addSum2PieczonyIndyk1 = document.getElementById("piecz-indyk1_add-sum2");
var addSum1PieczonyIndyk2 = document.getElementById("piecz-indyk2_add-sum1");
var addSum1PieczonyIndyk3 = document.getElementById("piecz-indyk3_add-sum1");
var addSum1PieczonyIndyk4 = document.getElementById("piecz-indyk4_add-sum1");
calcPieczonyIndyk.addEventListener("input", add);
/**PIEROG Z WARZYWAMI*/
var calcPierog = document.getElementById("calc-pierog");
var addSum1Pierog1 = document.getElementById("pierog1_add-sum1");
var addSum1Pierog2 = document.getElementById("pierog2_add-sum1");
var addSum1Pierog3 = document.getElementById("pierog3_add-sum1");
calcPierog.addEventListener("input", add);
/**PUREE POMIDOROWE*/
var calcPuree = document.getElementById("calc-puree");
var addSum1Puree1 = document.getElementById("puree1_add-sum1");
var addSum1Puree2 = document.getElementById("puree2_add-sum1");
calcPuree.addEventListener("input", add);
/**RYBA ZAWINIETA W GAZETE*/
var calcRyba = document.getElementById("calc-ryba-zawinieta");
var addSum4Ryba1 = document.getElementById("ryba-zawinieta1_add-sum4");
var addSum4Ryba2 = document.getElementById("ryba-zawinieta2_add-sum4");
var addSum2Ryba3 = document.getElementById("ryba-zawinieta3_add-sum2");
calcRyba.addEventListener("input", add);
/**SIEKANE MIESO*/
var calcSiekaneM = document.getElementById("calc-siekane-mieso");
var addSum2SiekaneM1 = document.getElementById("siekane-mieso1_add-sum2");
var addSum1SiekaneM2 = document.getElementById("siekane-mieso2_add-sum1");
var addSum1SiekaneM3 = document.getElementById("siekane-mieso3_add-sum1");
calcSiekaneM.addEventListener("input", add);
/**SOK Z KAKTUSA*/
var calcSokKaktus = document.getElementById("calc-sok-kaktus");
var addSum2SokKaktus1 = document.getElementById("sok-kaktus1_add-sum2");
var addSum2SokKaktus2 = document.getElementById("sok-kaktus2_add-sum2");
var addSum1SokKaktus3 = document.getElementById("sok-kaktus3_add-sum1");
var addSum1SokKaktus4 = document.getElementById("sok-kaktus4_add-sum1");
calcSokKaktus.addEventListener("input", add);
/**SOS*/
var calcSos = document.getElementById("calc-sos");
var addSum1Sos1 = document.getElementById("sos1_add-sum1");
var addSum1Sos2 = document.getElementById("sos2_add-sum1");
calcSos.addEventListener("input", add);
/**SOS POMIDOROWY*/
var calcSosPomidorowy = document.getElementById("calc-sos-pomidorowy");
var addSum1SosPomidorowy1 = document.getElementById("sos-pomidorowy1_add-sum1");
calcSosPomidorowy.addEventListener("input", add);
/**SUSZONE MIESO*/
var calcSuszMieso = document.getElementById("calc-susz-mieso");
var addSum6SuszMieso1 = document.getElementById("susz-mieso1_add-sum6");
var addSum6SuszMieso2 = document.getElementById("susz-mieso2_add-sum6");
var addSum4SuszMieso3 = document.getElementById("susz-mieso3_add-sum4");
var addSum4SuszMieso4 = document.getElementById("susz-mieso4_add-sum4");
calcSuszMieso.addEventListener("input", add);
/**TORT*/
var calcTort = document.getElementById("calc-tort");
var addSum2Tort1 = document.getElementById("tort1_add-sum2");
var addSum1Tort2 = document.getElementById("tort2_add-sum1");
calcTort.addEventListener("input", add);
/**TRUNEK*/
var calcTrunek = document.getElementById("calc-trunek");
var addSum2Trunek1 = document.getElementById("trunek1_add-sum2");
var addSum1Trunek2 = document.getElementById("trunek2_add-sum1");
var addSum1Trunek3 = document.getElementById("trunek3_add-sum1");
calcTrunek.addEventListener("input", add);
/**WEGIEL DRZEWNY*/
var calcWegiel = document.getElementById("calc-wegiel");
var addSum1Wegiel1 = document.getElementById("wegiel1_add-sum1");
var addSum1Wegiel2 = document.getElementById("wegiel2_add-sum1");
calcWegiel.addEventListener("input", add);
/**ZACIER*/
var calcZacier = document.getElementById("calc-zacier");
var addSum1Zacier1 = document.getElementById("zacier1_add-sum1");
var addSum1Zacier2 = document.getElementById("zacier2_add-sum1");
var addSum1Zacier3 = document.getElementById("zacier3_add-sum1");
calcZacier.addEventListener("input", add);
/**ZAPIECZONE FASOLKI*/
var calcZapieczone = document.getElementById("calc-zapieczone");
var addSum1Zapieczone1 = document.getElementById("zapieczone1_add-sum1");
var addSum1Zapieczone2 = document.getElementById("zapieczone2_add-sum1");
calcZapieczone.addEventListener("input", add);
/**ZUPA RYBNA*/
var calcZupa = document.getElementById("calc-zuparybna");
var addSum1Zupa1 = document.getElementById("zuparybna1_add-sum1");
var addSum1Zupa2 = document.getElementById("zuparybna2_add-sum1");
calcZupa.addEventListener("input", add);
/**ŻEBERKA*/
var calcZeberka = document.getElementById("calc-zeberka");
var addSum4Zeberka1 = document.getElementById("zeberka1_add-sum4");
var addSum4Zeberka2 = document.getElementById("zeberka2_add-sum4");
var addSum4Zeberka3 = document.getElementById("zeberka3_add-sum4");
calcZeberka.addEventListener("input", add);
/**ZNACHOR polecenia ułozone są alfabetycznie---------------------------------*/
/**AMULET*/
var calcAmulet = document.getElementById("calc-amulet");
var addSum1Amulet1 = document.getElementById("amulet1_add-sum1");
var addSum1Amulet2 = document.getElementById("amulet2_add-sum1");
calcAmulet.addEventListener("input", add);
/**ATRAMENT*/
var calcAtrament = document.getElementById("calc-atrament");
var addSum1Atrament1 = document.getElementById("atrament1_add-sum1");
var addSum1Atrament2 = document.getElementById("atrament2_add-sum1");
calcAtrament.addEventListener("input", add);
/**ATRAMENT SYMPATYCZNY*/
var calcAtramentS = document.getElementById("calc-atrament-symp");
var addSum1AtramentS1 = document.getElementById("atrament-symp1_add-sum1");
var addSum1AtramentS2 = document.getElementById("atrament-symp2_add-sum1");
var addSum1AtramentS3 = document.getElementById("atrament-symp3_add-sum1");
calcAtramentS.addEventListener("input", add);
/**BATERIA*/
var calcBateria = document.getElementById("calc-bateria");
var addSum1Bateria1 = document.getElementById("bateria1_add-sum1");
var addSum1Bateria2 = document.getElementById("bateria2_add-sum1");
calcBateria.addEventListener("input", add);
/**BIMBER*/
var calcBimber = document.getElementById("calc-bimber");
var addSum4Bimber1 = document.getElementById("bimber1_add-sum4");
var addSum3Bimber2 = document.querySelector("#bimber2_add-sum3");
var addSum2Bimber3 = document.querySelector("#bimber3_add-sum2");
var addSum1Bimber4 = document.getElementById("bimber4_add-sum1");
calcBimber.addEventListener("input", add);
/**BLYSZCZĄCA MIKSTURA*/
var calcMikstura = document.getElementById("calc-mikstura");
var addSum3Mikstura1 = document.getElementById("mikstura1_add-sum3");
var addSum3Mikstura2 = document.querySelector("#mikstura2_add-sum3");
var addSum2Mikstura3 = document.querySelector("#mikstura3_add-sum2");
var addSum1Mikstura4 = document.getElementById("mikstura4_add-sum1");
calcMikstura.addEventListener("input", add);
/**BOZEK*/
var calcBozek = document.getElementById("calc-bozek");
var addSum2Bozek1 = document.getElementById("bozek1_add-sum2");
var addSum2Bozek2 = document.getElementById("bozek2_add-sum2");
var addSum1Bozek3 = document.getElementById("bozek3_add-sum1");
calcBozek.addEventListener("input", add);
/**CYRKIEL*/
var calcCyrkiel = document.getElementById("calc-cyrkiel");
var addSum3Cyrkiel1 = document.getElementById("cyrkiel1_add-sum3");
var addSum2Cyrkiel2 = document.querySelector("#cyrkiel2_add-sum2");
calcCyrkiel.addEventListener("input", add);
/**DESTYLAT*/
var calcDestylat = document.getElementById("calc-destylat");
var addSum3Destylat1 = document.getElementById("destylat1_add-sum3");
var addSum1Destylat2 = document.getElementById("destylat2_add-sum1");
var addSum1Destylat3 = document.getElementById("destylat3_add-sum1");
calcDestylat.addEventListener("input", add);
/**DUCHOWA MUZYKA*/
var calcDuchMuz = document.getElementById("calc-duchowa-muzyka");
var addSum4DuchMuz1 = document.getElementById("duchowa-muzyka1_add-sum4");
var addSum2DuchMuz2 = document.getElementById("duchowa-muzyka2_add-sum2");
var addSum1DuchMuz3 = document.getElementById("duchowa-muzyka3_add-sum1");
var addSum1DuchMuz4 = document.getElementById("duchowa-muzyka4_add-sum1");
var addSum1DuchMuz5 = document.getElementById("duchowa-muzyka5_add-sum1");
calcDuchMuz.addEventListener("input", add);
/**DYSK Z PIRYTU*/
var calcDysk = document.getElementById("calc-dysk");
var addSum1Dysk1 = document.getElementById("dysk1_add-sum1");
calcDysk.addEventListener("input", add);
/**HERBATA*/
var calcHerbata = document.getElementById("calc-herbata");
var addSum3Herbata1 = document.getElementById("herbata1_add-sum3");
var addSum1Herbata2 = document.getElementById("herbata2_add-sum1");
calcHerbata.addEventListener("input", add);
/**KRZESIWO*/
var calcKrzesiwo = document.getElementById("calc-krzesiwo");
var addSum1Krzesiwo1 = document.getElementById("krzesiwo1_add-sum1");
var addSum1Krzesiwo2 = document.getElementById("krzesiwo2_add-sum1");
var addSum1Krzesiwo3 = document.getElementById("krzesiwo3_add-sum1");
calcKrzesiwo.addEventListener("input", add);
/**KWAS SIARKOWY*/
var calcKwasSiarkowy = document.getElementById("calc-kwas-siarkowy");
var addSum1KwasSiarkowy1 = document.getElementById("kwas-siarkowy1_add-sum1");
var addSum1KwasSiarkowy2 = document.getElementById("kwas-siarkowy2_add-sum1");
calcKwasSiarkowy.addEventListener("input", add);
/**LEGENDARNE ANTIDOTUM*/
var calcAntidotum = document.getElementById("calc-antidotum");
var addSum5Antidotum1 = document.getElementById("antidotum1_add-sum5");
var addSum4Antidotum2 = document.getElementById("antidotum2_add-sum4");
var addSum4Antidotum3 = document.getElementById("antidotum3_add-sum4");
var addSum1Antidotum4 = document.getElementById("antidotum4_add-sum1");
calcAntidotum.addEventListener("input", add);
/**LEK NA ZOLADEK*/
var calcLek = document.getElementById("calc-lek");
var addSum2Lek1 = document.getElementById("lek1_add-sum2");
var addSum1Lek2 = document.getElementById("lek2_add-sum1");
calcLek.addEventListener("input", add);
/**LIKIER ZIOLOWY*/
var calcLikier = document.getElementById("calc-likier-ziol");
var addSum1Likier1 = document.getElementById("likier-ziol1_add-sum1");
var addSum1Likier2 = document.getElementById("likier-ziol2_add-sum1");
calcLikier.addEventListener("input", add);
/**LUG*/
var calcLug = document.getElementById("calc-lug");
var addSum3Lug1 = document.getElementById("lug1_add-sum3");
var addSum1Lug2 = document.getElementById("lug2_add-sum1");
var addSum1Lug3 = document.getElementById("lug3_add-sum1");
var addSum1Lug4 = document.getElementById("lug4_add-sum1");
calcLug.addEventListener("input", add);
/**NAFTA*/
var calcNafta = document.getElementById("calc-nafta");
var addSum1Nafta1 = document.getElementById("nafta1_add-sum1");
var addSum1Nafta2 = document.getElementById("nafta2_add-sum1");
var addSum1Nafta3 = document.getElementById("nafta3_add-sum1");
calcNafta.addEventListener("input", add);
/**NALEWKA*/
var calcNalewka = document.getElementById("calc-nalewka");
var addSum5Nalewka1 = document.getElementById("nalewka1_add-sum5");
var addSum1Nalewka2 = document.getElementById("nalewka2_add-sum1");
var addSum1Nalewka3 = document.getElementById("nalewka3_add-sum1");
calcNalewka.addEventListener("input", add);
/**NIEOSZLIFOWANY PIRYT*/
var calcNieoszPiryt = document.getElementById("calc-nieosz-piryt");
var addSum1NieoszPiryt1 = document.getElementById("nieosz-piryt1_add-sum1");
calcNieoszPiryt.addEventListener("input", add);
/**ODZYWKA DO WLOSOW*/
var calcOdzywka = document.getElementById("calc-odzywka");
var addSum1Odzywka1 = document.getElementById("odzywka1_add-sum1");
var addSum1Odzywka2 = document.getElementById("odzywka2_add-sum1");
var addSum1Odzywka3 = document.getElementById("odzywka3_add-sum1");
calcOdzywka.addEventListener("input", add);
/**PANACEUM*/
var calcPanaceum = document.getElementById("calc-panaceum");
var addSum1Panaceum1 = document.getElementById("panaceum1_add-sum1");
var addSum1Panaceum2 = document.getElementById("panaceum2_add-sum1");
var addSum1Panaceum3 = document.getElementById("panaceum3_add-sum1");
calcPanaceum.addEventListener("input", add);
/**PAPIER*/
var calcPapier = document.getElementById("calc-papier");
var addSum5Papier1 = document.getElementById("papier1_add-sum5");
var addSum1Papier2 = document.querySelector("#papier2_add-sum1");
calcPapier.addEventListener("input", add);
/**PAPIEROS Z FILTREM*/
var calcPapieros = document.getElementById("calc-papieros");
var addSum1Papieros1 = document.getElementById("papieros1_add-sum1");
var addSum1Papieros2 = document.getElementById("papieros2_add-sum1");
var addSum1Papieros3 = document.getElementById("papieros3_add-sum1");
calcPapieros.addEventListener("input", add);
/**PROCH STRZELNICZY*/
var calcProch = document.getElementById("calc-proch");
var addSum3Proch1 = document.getElementById("proch1_add-sum3");
var addSum3Proch2 = document.querySelector("#proch2_add-sum3");
var addSum3Proch3 = document.querySelector("#proch3_add-sum3");
var addSum2Proch4 = document.getElementById("proch4_add-sum2");
calcProch.addEventListener("input", add);
/**PRYMKA*/
var calcPrymka = document.getElementById("calc-prymka");
var addSum2Prymka1 = document.getElementById("prymka1_add-sum2");
var addSum1Prymka2 = document.getElementById("prymka2_add-sum1");
var addSum1Prymka3 = document.getElementById("prymka3_add-sum1");
calcPrymka.addEventListener("input", add);
/**REMEDIUM SILY*/
var calcRemedium = document.getElementById("calc-remedium");
var addSum2Remedium1 = document.getElementById("remedium1_add-sum2");
var addSum1Remedium2 = document.getElementById("remedium2_add-sum1");
var addSum1Remedium3 = document.getElementById("remedium3_add-sum1");
var addSum1Remedium4 = document.getElementById("remedium4_add-sum1");
calcRemedium.addEventListener("input", add);
/**SIARKA*/
var calcSiarka = document.getElementById("calc-siarka");
var addSum1Siarka1 = document.getElementById("siarka1_add-sum1");
calcSiarka.addEventListener("input", add);
/**UZDRAWIAJACA MARIONETKA*/
var calcMarionetka = document.getElementById("calc-marionetka");
var addSum2Marionetka1 = document.getElementById("marionetka1_add-sum2");
var addSum1Marionetka2 = document.getElementById("marionetka2_add-sum1");
var addSum1Marionetka3 = document.getElementById("marionetka3_add-sum1");
var addSum1Marionetka4 = document.getElementById("marionetka4_add-sum1");
calcMarionetka.addEventListener("input", add);
/**WLOKNO LNU*/
var calcWlokno = document.getElementById("calc-wlokno-lnu");
var addSum3Wlokno1 = document.getElementById("wlokno-lnu1_add-sum3");
var addSum2Wlokno2 = document.querySelector("#wlokno-lnu2_add-sum2");
var addSum2Wlokno3 = document.querySelector("#wlokno-lnu3_add-sum2");
var addSum1Wlokno4 = document.getElementById("wlokno-lnu4_add-sum1");
calcWlokno.addEventListener("input", add);
/**WODA ROZANA*/
var calcWodaRozana = document.getElementById("calc-woda-rozana");
var addSum2WodaRozana1 = document.getElementById("woda-rozana1_add-sum2");
var addSum2WodaRozana2 = document.getElementById("woda-rozana2_add-sum2");
calcWodaRozana.addEventListener("input", add);
/**WYCIOR*/
var calcWycior = document.getElementById("calc-wycior");
var addSum1Wycior1 = document.getElementById("wycior1_add-sum1");
var addSum1Wycior2 = document.getElementById("wycior2_add-sum1");
var addSum1Wycior3 = document.getElementById("wycior3_add-sum1");
calcWycior.addEventListener("input", add);
/**ZNAKOMITY TRUNEK*/
var calcZTrunek = document.getElementById("calc-znakomity-trunek");
var addSum1ZTrunek1 = document.getElementById("znakomity-trunek1_add-sum1");
var addSum1ZTrunek2 = document.getElementById("znakomity-trunek2_add-sum1");
var addSum1ZTrunek3 = document.getElementById("znakomity-trunek3_add-sum1");
calcZTrunek.addEventListener("input", add);
/**ZYWICA*/
var calcZywica = document.getElementById("calc-zywica");
var addSum1Zywica1 = document.getElementById("zywica1_add-sum1");
var addSum1Zywica2 = document.getElementById("zywica2_add-sum1");
var addSum1Zywica3 = document.getElementById("zywica3_add-sum1");
calcZywica.addEventListener("input", add);
/**RYMARZ polecenia ułozone są alfabetycznie----------------------------------*/
/**ARRAS*/
var calcArras = document.getElementById("calc-arras");
var addSum2Arras1 = document.getElementById("arras1_add-sum2");
var addSum1Arras2 = document.getElementById("arras2_add-sum1");
var addSum1Arras3 = document.getElementById("arras3_add-sum1");
var addSum1Arras4 = document.getElementById("arras4_add-sum1");
calcArras.addEventListener("input", add);
/**CZESC POWOZU */
var calcCzescPowozu = document.getElementById("calc-czesc-powozu");
var addSum3CzescPowozu1 = document.getElementById("czesc-powozu1_add-sum3");
var addSum2CzescPowozu2 = document.querySelector("#czesc-powozu2_add-sum2");
var addSum1CzescPowozu3 = document.querySelector("#czesc-powozu3_add-sum1");
calcCzescPowozu.addEventListener("input", add);
/**DERA*/
var calcDera = document.getElementById("calc-dera");
var addSum1Dera1 = document.getElementById("dera1_add-sum1");
var addSum1Dera2 = document.getElementById("dera2_add-sum1");
var addSum1Dera3 = document.getElementById("dera3_add-sum1");
calcDera.addEventListener("input", add);
/**DESKA DO KROJENIA*/
var calcDeska = document.getElementById("calc-deska");
var addSum1Deska1 = document.getElementById("deska1_add-sum1");
calcDeska.addEventListener("input", add);
/**ELIKSIR CELNOSCI*/
var calcEliksir = document.getElementById("calc-eliksir");
var addSum2Eliksir1 = document.getElementById("eliksir1_add-sum2");
var addSum1Eliksir2 = document.getElementById("eliksir2_add-sum1");
var addSum1Eliksir3 = document.getElementById("eliksir3_add-sum1");
calcEliksir.addEventListener("input", add);
/**KOLO POWOZU */
var calcKoloPowozu = document.getElementById("calc-kolo-powozu");
var addSum3KoloPowozu1 = document.getElementById("kolo-powozu1_add-sum3");
var addSum2KoloPowozu2 = document.querySelector("#kolo-powozu2_add-sum2");
var addSum1KoloPowozu3 = document.querySelector("#kolo-powozu3_add-sum1");
calcKoloPowozu.addEventListener("input", add);
/**LECIUTKA SKÓRA*/
var calcLeciutkaSkora = document.getElementById("calc-leciutka-skora");
var addSum5LeciutkaSkora1 = document.getElementById("leciutka-skora1_add-sum5");
var addSum3LeciutkaSkora2 = document.getElementById("leciutka-skora2_add-sum3");
var addSum3LeciutkaSkora3 = document.getElementById("leciutka-skora3_add-sum3");
var addSum1LeciutkaSkora4 = document.getElementById("leciutka-skora4_add-sum1");
calcLeciutkaSkora.addEventListener("input", add);
/**MANIERKA*/
var calcManierka = document.getElementById("calc-manierka");
var addSum1Manierka1 = document.getElementById("manierka1_add-sum1");
var addSum1Manierka2 = document.getElementById("manierka2_add-sum1");
calcManierka.addEventListener("input", add);
/**LEK SIODLA*/
var calcLekSiodla = document.getElementById("calc-lek-siodla");
var addSum1LekSiodla1 = document.getElementById("lek-siodla1_add-sum1");
var addSum2LekSiodla2 = document.getElementById("lek-siodla2_add-sum2");
calcLekSiodla.addEventListener("input", add);
/**NAPRAWIONE SIODLO*/
var calcNaprSiodlo = document.getElementById("calc-napr-siodlo");
var addSum3NaprSiodlo1 = document.getElementById("napr-siodlo1_add-sum3");
var addSum1NaprSiodlo2 = document.getElementById("napr-siodlo2_add-sum1");
var addSum1NaprSiodlo3 = document.getElementById("napr-siodlo3_add-sum1");
var addSum1NaprSiodlo4 = document.getElementById("napr-siodlo4_add-sum1");
calcNaprSiodlo.addEventListener("input", add);
/**NIEWYREGULOWANY KOMPAS*/
var calcKompas = document.getElementById("calc-kompas");
var addSum1Kompas1 = document.getElementById("kompas1_add-sum1");
var addSum1Kompas2 = document.getElementById("kompas2_add-sum1");
calcKompas.addEventListener("input", add);
/**NOTATNIK*/
var calcNotatnik = document.getElementById("calc-notatnik");
var addSum1Notatnik1 = document.getElementById("notatnik1_add-sum1");
var addSum1Notatnik2 = document.getElementById("notatnik2_add-sum1");
calcNotatnik.addEventListener("input", add);
/**OBDARTE SIODLO*/
var calcObdarteSiodlo = document.getElementById("calc-obdarte-siodlo");
var addSum1ObdarteSiodlo1 = document.getElementById("obdarte-siodlo1_add-sum1");
var addSum1ObdarteSiodlo2 = document.getElementById("obdarte-siodlo2_add-sum1");
calcObdarteSiodlo.addEventListener("input", add);
/**OSTROGI*/
var calcOstrogi = document.getElementById("calc-ostrogi");
var addSum3Ostrogi1 = document.getElementById("ostrogi1_add-sum3");
var addSum1Ostrogi2 = document.getElementById("ostrogi2_add-sum1");
var addSum1Ostrogi3 = document.getElementById("ostrogi3_add-sum1");
calcOstrogi.addEventListener("input", add);
/**OZDOBA*/
var calcOzdobaRym = document.getElementById("calc-ozdoba-rym");
var addSum1OzdobaRym1 = document.getElementById("ozdoba-rym1_add-sum1");
var addSum1OzdobaRym2 = document.getElementById("ozdoba-rym2_add-sum1");
var addSum1OzdobaRym3 = document.getElementById("ozdoba-rym3_add-sum1");
calcOzdobaRym.addEventListener("input", add);
/**PASZA TRESCIWA*/
var calcPasza = document.getElementById("calc-pasza");
var addSum3Pasza1 = document.getElementById("pasza1_add-sum3");
var addSum3Pasza2 = document.querySelector("#pasza2_add-sum3");
var addSum3Pasza3 = document.querySelector("#pasza3_add-sum3");
var addSum2Pasza4 = document.getElementById("pasza4_add-sum2");
calcPasza.addEventListener("input", add);
/**PODKUCIE KOPYT*/
var calcPodkucie = document.getElementById("calc-podkucie");
var addSum2Podkucie1 = document.getElementById("podkucie1_add-sum2");
var addSum1Podkucie2 = document.getElementById("podkucie2_add-sum1");
var addSum1Podkucie3 = document.getElementById("podkucie3_add-sum1");
calcPodkucie.addEventListener("input", add);
/**POWOZ WYSCIGOWY*/
var calcPowoz = document.getElementById("calc-powoz");
var addSum1Powoz1 = document.getElementById("powoz1_add-sum1");
var addSum1Powoz2 = document.getElementById("powoz2_add-sum1");
var addSum1Powoz3 = document.getElementById("powoz3_add-sum1");
calcPowoz.addEventListener("input", add);
/**RZEMIEN*/
var calcRzemien = document.getElementById("calc-rzemien");
var addSum1Rzemien1 = document.getElementById("rzemien1_add-sum1");
var addSum1Rzemien2 = document.getElementById("rzemien2_add-sum1");
calcRzemien.addEventListener("input", add);
/**SCHOWEK*/
var calcSchowek = document.getElementById("calc-schowek");
var addSum2Schowek1 = document.getElementById("schowek1_add-sum2");
var addSum1Schowek2 = document.getElementById("schowek2_add-sum1");
var addSum1Schowek3 = document.getElementById("schowek3_add-sum1");
var addSum1Schowek4 = document.getElementById("schowek4_add-sum1");
calcSchowek.addEventListener("input", add);
/**SIODŁO PONY EXPRESS*/
var calcSiodloPony = document.getElementById("calc-siodlo-pony");
var addSum6SiodloPony1 = document.getElementById("siodlo-pony1_add-sum6");
var addSum5SiodloPony2 = document.getElementById("siodlo-pony2_add-sum5");
var addSum4SiodloPony3 = document.getElementById("siodlo-pony3_add-sum4");
var addSum1SiodloPony4 = document.getElementById("siodlo-pony4_add-sum1");
calcSiodloPony.addEventListener("input", add);
/**SKORZANA TORBA*/
var calcSkorzTorba = document.getElementById("calc-skorz-torba");
var addSum1SkorzTorba1 = document.getElementById("skorz-torba1_add-sum1");
calcSkorzTorba.addEventListener("input", add);
/**SKORZANE POKRYCIE*/
var calcSkorzPokrycie = document.getElementById("calc-skorz-pokrycie");
var addSum1SkorzPokrycie1 = document.getElementById("skorz-pokrycie1_add-sum1");
var addSum1SkorzPokrycie2 = document.getElementById("skorz-pokrycie2_add-sum1");
var addSum1SkorzPokrycie3 = document.getElementById("skorz-pokrycie3_add-sum1");
calcSkorzPokrycie.addEventListener("input", add);
/**SPIWOR*/
var calcSpiwor = document.getElementById("calc-spiwor");
var addSum3Spiwor1 = document.getElementById("spiwor1_add-sum3");
var addSum2Spiwor2 = document.querySelector("#spiwor2_add-sum2");
var addSum1Spiwor3 = document.querySelector("#spiwor3_add-sum1");
calcSpiwor.addEventListener("input", add);
/**STRZEMIE*/
var calcStrzemie = document.getElementById("calc-strzemie");
var addSum1Strzemie1 = document.getElementById("strzemie1_add-sum1");
var addSum1Strzemie2 = document.getElementById("strzemie2_add-sum1");
var addSum1Strzemie3 = document.getElementById("strzemie3_add-sum1");
calcStrzemie.addEventListener("input", add);
/**TORBA PODROZNA*/
var calcTorbaPodr = document.getElementById("calc-torba-podr");
var addSum2TorbaPodr1 = document.getElementById("torba-podr1_add-sum2");
var addSum1TorbaPodr2 = document.getElementById("torba-podr2_add-sum1");
calcTorbaPodr.addEventListener("input", add);
/**TORBA Z PASZA*/
var calcTorbaPasza = document.getElementById("calc-torba-pasza");
var addSum1TorbaPasza1 = document.getElementById("torba-pasza1_add-sum1");
var addSum1TorbaPasza2 = document.getElementById("torba-pasza2_add-sum1");
calcTorbaPasza.addEventListener("input", add);
/**UZDA*/
var calcUzda = document.getElementById("calc-uzda");
var addSum2Uzda1 = document.getElementById("uzda1_add-sum2");
var addSum1Uzda2 = document.getElementById("uzda2_add-sum1");
var addSum1Uzda3 = document.getElementById("uzda3_add-sum1");
calcUzda.addEventListener("input", add);
/**WEDROWNY POZWOZ*/
var calcWPowoz = document.getElementById("calc-wedrowny-powoz");
var addSum2WPowoz1 = document.getElementById("wedrowny-powoz1_add-sum2");
var addSum1WPowoz2 = document.getElementById("wedrowny-powoz2_add-sum1");
var addSum1WPowoz3 = document.getElementById("wedrowny-powoz3_add-sum1");
calcWPowoz.addEventListener("input", add);
/**WYGARBOWANA SKORA*/
var calcWygarSkora = document.getElementById("calc-wygarb-skora");
var addSum1WygarSkora1 = document.getElementById("wygarb-skora1_add-sum1");
calcWygarSkora.addEventListener("input", add);
/**WYKWINTNY IMPREGNAT*/
var calcImpregnat = document.getElementById("calc-impregnat");
var addSum1Impregnat1 = document.getElementById("impregnat1_add-sum1");
var addSum1Impregnat2 = document.getElementById("impregnat2_add-sum1");
var addSum1Impregnat3 = document.getElementById("impregnat3_add-sum1");
calcImpregnat.addEventListener("input", add);
/**WYPELNIACZ*/
var calcWypelniacz = document.getElementById("calc-wypelniacz");
var addSum4Wypelniacz1 = document.getElementById("wypelniacz1_add-sum4");
var addSum4Wypelniacz2 = document.getElementById("wypelniacz2_add-sum4");
var addSum2Wypelniacz3 = document.getElementById("wypelniacz3_add-sum2");
calcWypelniacz.addEventListener("input", add);
/**WYTRZYMALA KABURA*/
var calcKabura = document.getElementById("calc-kabura");
var addSum1Kabura1 = document.getElementById("kabura1_add-sum1");
var addSum1Kabura2 = document.getElementById("kabura2_add-sum1");
var addSum1Kabura3 = document.getElementById("kabura3_add-sum1");
calcKabura.addEventListener("input", add);
/**WYTRZYMALE LEJCE*/
var calcLejce = document.getElementById("calc-lejce");
var addSum1Lejce1 = document.getElementById("lejce1_add-sum1");
var addSum1Lejce2 = document.getElementById("lejce2_add-sum1");
calcLejce.addEventListener("input", add);
/**ZNAKOWNIK*/
var calcZnakownik = document.getElementById("calc-znakownik");
var addSum2Znakownik1 = document.getElementById("znakownik1_add-sum2");
var addSum2Znakownik2 = document.getElementById("znakownik2_add-sum2");
var addSum1Znakownik3 = document.getElementById("znakownik3_add-sum1");
var addSum1Znakownik4 = document.getElementById("znakownik4_add-sum1");
calcZnakownik.addEventListener("input", add);

/**KOWAL polecenia ułozone są alfabetycznie-----------------------------------*/
/**BAGNET*/
var calcBagnet = document.getElementById("calc-bagnet");
var addSum3Bagnet1 = document.getElementById("bagnet1_add-sum3");
var addSum1Bagnet2 = document.getElementById("bagnet2_add-sum1");
var addSum1Bagnet3 = document.getElementById("bagnet3_add-sum1");
calcBagnet.addEventListener("input", add);
/**CHUSTA DO CHLODZENIA*/
var calcChusta = document.getElementById("calc-chusta");
var addSum2Chusta1 = document.getElementById("chusta1_add-sum2");
var addSum2Chusta2 = document.getElementById("chusta2_add-sum2");
var addSum1Chusta3 = document.getElementById("chusta3_add-sum1");
calcChusta.addEventListener("input", add);
/**GRAFIT*/
var calcGrafit = document.getElementById("calc-grafit");
var addSum1Grafit1 = document.getElementById("grafit1_add-sum1");
calcGrafit.addEventListener("input", add);
/**KABLAK*/
var calcKablak = document.getElementById("calc-kablak");
var addSum2Kablak1 = document.getElementById("kablak1_add-sum2");
var addSum2Kablak2 = document.getElementById("kablak2_add-sum2");
calcKablak.addEventListener("input", add);
/**KAMIEN POLERSKI*/
var calcKamPolerski = document.getElementById("calc-kam-polerski");
var addSum2KamPolerski1 = document.getElementById("kam-polerski1_add-sum2");
var addSum1KamPolerski2 = document.getElementById("kam-polerski2_add-sum1");
var addSum1KamPolerski3 = document.getElementById("kam-polerski3_add-sum1");
calcKamPolerski.addEventListener("input", add);
/**KOWADLO*/
var calcKowadlo = document.getElementById("calc-kowadlo");
var addSum1Kowadlo1 = document.getElementById("kowadlo1_add-sum1");
var addSum1Kowadlo2 = document.getElementById("kowadlo2_add-sum1");
var addSum1Kowadlo3 = document.getElementById("kowadlo3_add-sum1");
calcKowadlo.addEventListener("input", add);
/**KSZTALTOWNIK REWOLWERU*/
var calcKsztaltownik = document.getElementById("calc-ksztaltownik");
var addSum2Ksztaltownik1 = document.getElementById("ksztaltownik1_add-sum2");
var addSum2Ksztaltownik2 = document.getElementById("ksztaltownik2_add-sum2");
var addSum1Ksztaltownik3 = document.getElementById("ksztaltownik3_add-sum1");
var addSum1Ksztaltownik4 = document.getElementById("ksztaltownik4_add-sum1");
calcKsztaltownik.addEventListener("input", add);
/**LATARNIA*/
var calcLatarnia = document.getElementById("calc-latarnia");
var addSum3Latarnia1 = document.getElementById("latarnia1_add-sum3");
var addSum2Latarnia2 = document.querySelector("#latarnia2_add-sum2");
var addSum2Latarnia3 = document.querySelector("#latarnia3_add-sum2");
var addSum1Latarnia4 = document.getElementById("latarnia4_add-sum1");
calcLatarnia.addEventListener("input", add);
/**LANCUCH DO BRONI*/
var calcLancuch = document.getElementById("calc-lancuch");
var addSum2Lancuch1 = document.getElementById("lancuch1_add-sum2");
var addSum1Lancuch2 = document.getElementById("lancuch2_add-sum1");
calcLancuch.addEventListener("input", add);
/**NARZĘDZIA ZEGARMISTRZOWSKIE*/
var calcNarzZegarm = document.getElementById("calc-narz-zegarm");
var addSum3NarzZegarm1 = document.getElementById("narz-zegarm1_add-sum3");
var addSum2NarzZegarm2 = document.getElementById("narz-zegarm2_add-sum2");
var addSum2NarzZegarm3 = document.getElementById("narz-zegarm3_add-sum2");
var addSum2NarzZegarm4 = document.getElementById("narz-zegarm4_add-sum2");
var addSum1NarzZegarm5 = document.getElementById("narz-zegarm5_add-sum1");
calcNarzZegarm.addEventListener("input", add);
/**NIERDZEWNE SRUBY*/
var calcSruby = document.getElementById("calc-nierdzewne-sruby");
var addSum1Sruby1 = document.getElementById("nierdzewne-sruby1_add-sum1");
var addSum1Sruby2 = document.getElementById("nierdzewne-sruby2_add-sum1");
var addSum1Sruby3 = document.getElementById("nierdzewne-sruby3_add-sum1");
calcSruby.addEventListener("input", add);
/**NIEROZLUPANA GEODA*/
var calcGeoda = document.getElementById("calc-geoda");
var addSum1Geoda1 = document.getElementById("geoda1_add-sum1");
var addSum1Geoda2 = document.getElementById("geoda2_add-sum1");
var addSum1Geoda3 = document.getElementById("geoda3_add-sum1");
calcGeoda.addEventListener("input", add);
/**NIEZASTYGNIETA KULKA*/
var calcKulka = document.getElementById("calc-kulka");
var addSum1Kulka1 = document.getElementById("kulka1_add-sum1");
var addSum1Kulka2 = document.getElementById("kulka2_add-sum1");
calcKulka.addEventListener("input", add);
/**NITY*/
var calcNity = document.getElementById("calc-nity");
var addSum3Nity1 = document.getElementById("nity1_add-sum3");
var addSum1Nity2 = document.getElementById("nity2_add-sum1");
calcNity.addEventListener("input", add);
/**NOWOCZESNA ZBROJA*/
var calcNowZbroja = document.getElementById("calc-now-zbroja");
var addSum2NowZbroja1 = document.getElementById("now-zbroja1_add-sum2");
var addSum1NowZbroja2 = document.getElementById("now-zbroja2_add-sum1");
var addSum1NowZbroja3 = document.getElementById("now-zbroja3_add-sum1");
calcNowZbroja.addEventListener("input", add);
/**NOZ*/
var calcNoz = document.getElementById("calc-noz");
var addSum1Noz1 = document.getElementById("noz1_add-sum1");
var addSum1Noz2 = document.getElementById("noz2_add-sum1");
var addSum1Noz3 = document.getElementById("noz3_add-sum1");
calcNoz.addEventListener("input", add);
/**ODWAZNIK*/
var calcOdwaznik = document.getElementById("calc-odwaznik");
var addSum2Odwaznik1 = document.getElementById("odwaznik1_add-sum2");
var addSum1Odwaznik2 = document.getElementById("odwaznik2_add-sum1");
calcOdwaznik.addEventListener("input", add);
/**OLOWIANA FIGURKA*/
var calcFigurka = document.getElementById("calc-figurka");
var addSum3Figurka1 = document.getElementById("figurka1_add-sum3");
var addSum1Figurka2 = document.getElementById("figurka2_add-sum1");
var addSum1Figurka3 = document.getElementById("figurka3_add-sum1");
calcFigurka.addEventListener("input", add);
/**OZDOBA*/
var calcOzdobaKow = document.getElementById("calc-ozdoba-kow");
var addSum1OzdobaKow1 = document.getElementById("ozdoba-kow1_add-sum1");
calcOzdobaKow.addEventListener("input", add);
/**PATELNIA*/
var calcPatelnia = document.getElementById("calc-patelnia");
var addSum1Patelnia1 = document.getElementById("patelnia1_add-sum1");
var addSum1Patelnia2 = document.getElementById("patelnia2_add-sum1");
calcPatelnia.addEventListener("input", add);
/**PIERSIOWKA*/
var calcPiersiowka = document.getElementById("calc-piersiowka");
var addSum1Piersiowka1 = document.getElementById("piersiowka1_add-sum1");
var addSum1Piersiowka2 = document.getElementById("piersiowka2_add-sum1");
calcPiersiowka.addEventListener("input", add);
/**POZYTYWKA*/
var calcPozytywka = document.getElementById("calc-pozytywka");
var addSum5Pozytywka1 = document.getElementById("pozytywka1_add-sum5");
var addSum4Pozytywka2 = document.getElementById("pozytywka2_add-sum4");
var addSum4Pozytywka3 = document.getElementById("pozytywka3_add-sum4");
var addSum1Pozytywka4 = document.getElementById("pozytywka4_add-sum1");
calcPozytywka.addEventListener("input", add);
/**PRASA DO MIODU*/
var calcPrasa = document.getElementById("calc-prasa");
var addSum3Prasa1 = document.getElementById("prasa1_add-sum3");
var addSum2Prasa2 = document.getElementById("prasa2_add-sum2");
var addSum1Prasa3 = document.getElementById("prasa3_add-sum1");
var addSum1Prasa4 = document.getElementById("prasa4_add-sum1");
calcPrasa.addEventListener("input", add);
/**REKOJESC*/
var calcRekojesc = document.getElementById("calc-rekojesc");
var addSum1Rekojesc1 = document.getElementById("rekojesc1_add-sum1");
var addSum1Rekojesc2 = document.getElementById("rekojesc2_add-sum1");
var addSum1Rekojesc3 = document.getElementById("rekojesc3_add-sum1");
var addSum1Rekojesc4 = document.getElementById("rekojesc4_add-sum1");
calcRekojesc.addEventListener("input", add);
/**SCYZORYK*/
var calcScyzoryk = document.getElementById("calc-scyzoryk");
var addSum1Scyzoryk1 = document.getElementById("scyzoryk1_add-sum1");
var addSum1Scyzoryk2 = document.getElementById("scyzoryk2_add-sum1");
calcScyzoryk.addEventListener("input", add);
/**SIODLO WELLS FARGO*/
var calcWells = document.getElementById("calc-siodlo-wells");
var addSum1Wells1 = document.getElementById("siodlo-wells1_add-sum1");
var addSum1Wells2 = document.getElementById("siodlo-wells2_add-sum1");
var addSum1Wells3 = document.getElementById("siodlo-wells3_add-sum1");
calcWells.addEventListener("input", add);
/**SMAR GRAFITOWY*/
var calcSmar = document.getElementById("calc-smar");
var addSum1Smar1 = document.getElementById("smar1_add-sum1");
var addSum1Smar2 = document.getElementById("smar2_add-sum1");
calcSmar.addEventListener("input", add);
/**SPROSZKOWANY GRAFIT*/
var calcSproszGrafit = document.getElementById("calc-sprosz-grafit");
var addSum1SproszGrafit1 = document.getElementById("sprosz-grafit1_add-sum1");
calcSproszGrafit.addEventListener("input", add);
/**STAL*/
var calcStal = document.getElementById("calc-stal");
var addSum1Stal1 = document.getElementById("stal1_add-sum1");
var addSum1Stal2 = document.getElementById("stal2_add-sum1");
calcStal.addEventListener("input", add);
/**STALOWE OSTRZE*/
var calcStalOstrze = document.getElementById("calc-stal-ostrze");
var addSum2StalOstrze1 = document.getElementById("stal-ostrze1_add-sum2");
var addSum1StalOstrze2 = document.getElementById("stal-ostrze2_add-sum1");
var addSum1StalOstrze3 = document.getElementById("stal-ostrze3_add-sum1");
calcStalOstrze.addEventListener("input", add);
/**STOPIONE ZELAZO*/
var calcStopZelazo = document.getElementById("calc-stop-zelazo");
var addSum1StopZelazo1 = document.getElementById("stop-zelazo1_add-sum1");
var addSum1StopZelazo2 = document.getElementById("stop-zelazo2_add-sum1");
calcStopZelazo.addEventListener("input", add);
/**STOPIONY OLOW*/
var calcStopOlow = document.getElementById("calc-stop-olow");
var addSum1StopOlow1 = document.getElementById("stop-olow1_add-sum1");
var addSum1StopOlow2 = document.getElementById("stop-olow2_add-sum1");
calcStopOlow.addEventListener("input", add);
/**SZKLO*/
var calcSzklo = document.getElementById("calc-szklo");
var addSum1Szklo1 = document.getElementById("szklo1_add-sum1");
var addSum1Szklo2 = document.getElementById("szklo2_add-sum1");
var addSum1Szklo3 = document.getElementById("szklo3_add-sum1");
var addSum1Szklo4 = document.getElementById("szklo4_add-sum1");
calcSzklo.addEventListener("input", add);
/**WESTERNER*/
var calcWesterner = document.getElementById("calc-westerner");
var addSum1Westerner1 = document.getElementById("westerner1_add-sum1");
var addSum1Westerner2 = document.getElementById("westerner2_add-sum1");
calcWesterner.addEventListener("input", add);
/**ZAOSTRZENIEBRONI*/
var calcZaostrzenie = document.getElementById("calc-zaostrzenie");
var addSum2Zaostrzenie1 = document.getElementById("zaostrzenie1_add-sum2");
var addSum1Zaostrzenie2 = document.getElementById("zaostrzenie2_add-sum1");
calcZaostrzenie.addEventListener("input", add);

function add(){
  /**KUCHARZ polecenia ułozone są alfabetycznie--------------------*/
  /**BULION RYBNY*/
  var bulion = Number(calcBulion.value) || 0;
  var sum1Bulion1 = Number(bulion*1);
  addSum1Bulion1.innerHTML = sum1Bulion1+"/1x";
  var sum1Bulion2 = Number(bulion*1);
  addSum1Bulion2.innerHTML = sum1Bulion2+"/1x";
  var sum1Bulion3 = Number(bulion*1);
  addSum1Bulion3.innerHTML = sum1Bulion3+"/1x";
  /**CIASTECZKA KUKURYDZIANE*/
  var ciasteczka = Number(calcCiasteczka.value) || 0;
  var sum2Ciasteczka1 = Number(ciasteczka*2);
  addSum2Ciasteczka1.innerHTML = sum2Ciasteczka1+"/2x";
  var sum2Ciasteczka2 = Number(ciasteczka*2);
  addSum2Ciasteczka2.innerHTML = sum2Ciasteczka2+"/2x";
  var sum2Ciasteczka3 = Number(ciasteczka*2);
  addSum2Ciasteczka3.innerHTML = sum2Ciasteczka3+"/2x";
  /**CIASTO*/
  var ciasto = Number(calcCiasto.value) || 0;
  var sum1Ciasto1 = Number(ciasto*1);
  addSum1Ciasto1.innerHTML = sum1Ciasto1+"x";
  var sum1Ciasto2 = Number(ciasto*1);
  addSum1Ciasto2.innerHTML = sum1Ciasto2+"x";
  /**DORSZ*/
  var dorsz = Number(calcDorsz.value) || 0;
  var sum1Dorsz1 = Number(dorsz*1);
  addSum1Dorsz1.innerHTML = sum1Dorsz1+"x";
  var sum1Dorsz2 = Number(dorsz*1);
  addSum1Dorsz2.innerHTML = sum1Dorsz2+"x";
  /**DZBAN WODY*/
  var dzban = Number(calcDzban.value) || 0;
  var sum1Dzban1 = Number(dzban*1);
  addSum1Dzban1.innerHTML = sum1Dzban1+"x";
  var sum1Dzban2 = Number(dzban*1);
  addSum1Dzban2.innerHTML = sum1Dzban2+"x";
  /**DZEM*/
  var dzem = Number(calcDzem.value) || 0;
  var sum2Dzem1 = Number(dzem*2);
  addSum2Dzem1.innerHTML = sum2Dzem1+"x";
  var sum2Dzem2 = Number(dzem*2);
  addSum2Dzem2.innerHTML = sum2Dzem2+"x";
  var sum1Dzem3 = Number(dzem*1);
  addSum1Dzem3.innerHTML = sum1Dzem3+"x";
  /**FASOLA W PUSZCE*/
  var fasPuszka = Number(calcFasPuszka.value) || 0;
  var sum12FasPuszka1 = Number(fasPuszka*12);
  addSum12FasPuszka1.innerHTML = sum12FasPuszka1+"x";
  var sum12FasPuszka2 = Number(fasPuszka*12);
  addSum12FasPuszka2.innerHTML = sum12FasPuszka2+"x";
  var sum7FasPuszka3 = Number(fasPuszka*7);
  addSum7FasPuszka3.innerHTML = sum7FasPuszka3+"x";
  var sum5FasPuszka4 = Number(fasPuszka*5);
  addSum5FasPuszka4.innerHTML = sum5FasPuszka4+"x";
  var sum3FasPuszka5 = Number(fasPuszka*3);
  addSum3FasPuszka5.innerHTML = sum3FasPuszka5+"x";
  /**FASOLA Z BEKONEM*/
  var fasolaBekon = Number(calcFasolaBekon.value) || 0;
  var sum1FasolaBekon1 = Number(fasolaBekon*1);
  addSum1FasolaBekon1.innerHTML = sum1FasolaBekon1+"x";
  var sum1FasolaBekon2 = Number(fasolaBekon*1);
  addSum1FasolaBekon2.innerHTML = sum1FasolaBekon2+"x";
  var sum1FasolaBekon3 = Number(fasolaBekon*1);
  addSum1FasolaBekon3.innerHTML = sum1FasolaBekon3+"x";
  var sum1FasolaBekon4 = Number(fasolaBekon*1);
  addSum1FasolaBekon4.innerHTML = sum1FasolaBekon4+"x";
  /**GROG*/
  var grog = Number(calcGrog.value) || 0;
  var sum2Grog1 = Number(grog*2);
  addSum2Grog1.innerHTML = sum2Grog1+"x";
  var sum2Grog2 = Number(grog*2);
  addSum2Grog2.innerHTML = sum2Grog2+"x";
  var sum1Grog3 = Number(grog*1);
  addSum1Grog3.innerHTML = sum1Grog3+"x";
  var sum1Grog4 = Number(grog*1);
  addSum1Grog4.innerHTML = sum1Grog4+"x";
  /**GULASZ*/
  var gulasz = Number(calcGulasz.value) || 0;
  var sum1Gulasz1 = Number(gulasz*1);
  addSum1Gulasz1.innerHTML = sum1Gulasz1+"x";
  var sum1Gulasz2 = Number(gulasz*1);
  addSum1Gulasz2.innerHTML = sum1Gulasz2+"x";
  var sum1Gulasz3 = Number(gulasz*1);
  addSum1Gulasz3.innerHTML = sum1Gulasz3+"x";
  var sum1Gulasz4 = Number(gulasz*1);
  addSum1Gulasz4.innerHTML = sum1Gulasz4+"x";
  /**GUMA DO ZUCIA*/
  var guma = Number(calcGuma.value) || 0;
  var sum1Guma1 = Number(guma*1);
  addSum1Guma1.innerHTML = sum1Guma1+"x";
  var sum1Guma2 = Number(guma*1);
  addSum1Guma2.innerHTML = sum1Guma2+"x";
  var sum1Guma3 = Number(guma*1);
  addSum1Guma3.innerHTML = sum1Guma3+"x";
  /**KADZIDLO*/
  var kadzidlo = Number(calcKadzidlo.value) || 0;
  var sum4Kadzidlo1 = Number(kadzidlo*4);
  addSum4Kadzidlo1.innerHTML = sum4Kadzidlo1+"x";
  var sum2Kadzidlo2 = Number(kadzidlo*2);
  addSum2Kadzidlo2.innerHTML = sum2Kadzidlo2+"x";
  var sum1Kadzidlo3 = Number(kadzidlo*1);
  addSum1Kadzidlo3.innerHTML = sum1Kadzidlo3+"x";
  /**KAWALEK TORTU*/
  var kawTortu = Number(calcKawTortu.value) || 0;
  var sum1KawTortu1 = Number(kawTortu*1);
  addSum1KawTortu1.innerHTML = sum1KawTortu1+"x";
  var sum1KawTortu2 = Number(kawTortu*1);
  addSum1KawTortu2.innerHTML = sum1KawTortu2+"x";
  var sum1KawTortu3 = Number(kawTortu*1);
  addSum1KawTortu3.innerHTML = sum1KawTortu3+"x";
  /**MARYNOWANY STEK*/
  var marStek = Number(calcMarStek.value) || 0;
  var sum1MarStek1 = Number(marStek*1);
  addSum1MarStek1.innerHTML = sum1MarStek1+"x";
  var sum1MarStek2 = Number(marStek*1);
  addSum1MarStek2.innerHTML = sum1MarStek2+"x";
  var sum1MarStek3 = Number(marStek*1);
  addSum1MarStek3.innerHTML = sum1MarStek3+"x";
  /**MAKA KUKURYDZIANA*/
  var maka = Number(calcMaka.value) || 0;
  var sum1Maka1 = Number(maka*1);
  addSum1Maka1.innerHTML = sum1Maka1+"x";
  var sum1Maka2 = Number(maka*1);
  addSum1Maka2.innerHTML = sum1Maka2+"x";
  /**MIOD*/
  var miod = Number(calcMiod.value) || 0;
  var sum1Miod1 = Number(miod*1);
  addSum1Miod1.innerHTML = sum1Miod1+"x";
  var sum1Miod2 = Number(miod*1);
  addSum1Miod2.innerHTML = sum1Miod2+"x";
  /**MIOD PITNY*/
  var miodPitny = Number(calcMiodPitny.value) || 0;
  var sum2MiodPitny1 = Number(miodPitny*2);
  addSum2MiodPitny1.innerHTML = sum2MiodPitny1+"x";
  var sum2MiodPitny2 = Number(miodPitny*2);
  addSum2MiodPitny2.innerHTML = sum2MiodPitny2+"x";
  var sum1MiodPitny3 = Number(miodPitny*1);
  addSum1MiodPitny3.innerHTML = sum1MiodPitny3+"x";
  var sum1MiodPitny4 = Number(miodPitny*1);
  addSum1MiodPitny4.innerHTML = sum1MiodPitny4+"x";
  /**NAJOSTRZEJRZE CHILI NA ZACHODZIE*/
  var chili = Number(calcChili.value) || 0;
  var sum7Chili1 = Number(chili*7);
  addSum7Chili1.innerHTML = sum7Chili1+"x";
  var sum5Chili2 = Number(chili*5);
  addSum5Chili2.innerHTML = sum5Chili2+"x";
  var sum4Chili3 = Number(chili*4);
  addSum4Chili3.innerHTML = sum4Chili3+"x";
  var sum1Chili4 = Number(chili*1);
  addSum1Chili4.innerHTML = sum1Chili4+"x";
  /**OBIAD DZENTELMENA*/
  var obiad = Number(calcObiad.value) || 0;
  var sum3Obiad1 = Number(obiad*3);
  addSum3Obiad1.innerHTML = sum3Obiad1+"x";
  var sum2Obiad2 = Number(obiad*2);
  addSum2Obiad2.innerHTML = sum2Obiad2+"x";
  var sum1Obiad3 = Number(obiad*1);
  addSum1Obiad3.innerHTML = sum1Obiad3+"x";
  /**PIECZONY INDYK*/
  var pieczIndyk = Number(calcPieczonyIndyk.value) || 0;
  var sum2PieczonyIndyk1 = Number(pieczIndyk*2);
  addSum2PieczonyIndyk1.innerHTML = sum2PieczonyIndyk1+"x";
  var sum1PieczonyIndyk2 = Number(pieczIndyk*1);
  addSum1PieczonyIndyk2.innerHTML = sum1PieczonyIndyk2+"x";
  var sum1PieczonyIndyk3 = Number(pieczIndyk*1);
  addSum1PieczonyIndyk3.innerHTML = sum1PieczonyIndyk3+"x";
  var sum1PieczonyIndyk4 = Number(pieczIndyk*1);
  addSum1PieczonyIndyk4.innerHTML = sum1PieczonyIndyk4+"x";
  /**PIEROG Z WARZYWAMI*/
  var pierog = Number(calcPierog.value) || 0;
  var sum1Pierog1 = Number(pierog*1);
  addSum1Pierog1.innerHTML = sum1Pierog1+"x";
  var sum1Pierog2 = Number(pierog*1);
  addSum1Pierog2.innerHTML = sum1Pierog2+"x";
  var sum1Pierog3 = Number(pierog*1);
  addSum1Pierog3.innerHTML = sum1Pierog3+"x";
  /**PUREE POMIDOROWE*/
  var puree = Number(calcPuree.value) || 0;
  var sum1Puree1 = Number(puree*1);
  addSum1Puree1.innerHTML = sum1Puree1+"x";
  var sum1Puree2 = Number(puree*1);
  addSum1Puree2.innerHTML = sum1Puree2+"x";
  /**RYBA ZAWINIETA W GAZETE*/
  var ryba = Number(calcRyba.value) || 0;
  var sum4Ryba1 = Number(ryba*4);
  addSum4Ryba1.innerHTML = sum4Ryba1+"x";
  var sum4Ryba2 = Number(ryba*4);
  addSum4Ryba2.innerHTML = sum4Ryba2+"x";
  var sum2Ryba3 = Number(ryba*2);
  addSum2Ryba3.innerHTML = sum2Ryba3+"x";
  /**SIEKANE MIESO*/
  var siekaneM = Number(calcSiekaneM.value) || 0;
  var sum2SiekaneM1 = Number(siekaneM*2);
  addSum2SiekaneM1.innerHTML = sum2SiekaneM1+"x";
  var sum1SiekaneM2 = Number(siekaneM*1);
  addSum1SiekaneM2.innerHTML = sum1SiekaneM2+"x";
  var sum1SiekaneM3 = Number(siekaneM*1);
  addSum1SiekaneM3.innerHTML = sum1SiekaneM3+"x";
  /**SOK Z KAKTUSA*/
  var sokKaktus = Number(calcSokKaktus.value) || 0;
  var sum2SokKaktus1 = Number(sokKaktus*2);
  addSum2SokKaktus1.innerHTML = sum2SokKaktus1+"x";
  var sum2SokKaktus2 = Number(sokKaktus*2);
  addSum2SokKaktus2.innerHTML = sum2SokKaktus2+"x";
  var sum1SokKaktus3 = Number(sokKaktus*1);
  addSum1SokKaktus3.innerHTML = sum1SokKaktus3+"x";
  var sum1SokKaktus4 = Number(sokKaktus*1);
  addSum1SokKaktus4.innerHTML = sum1SokKaktus4+"x";
  /**SOS*/
  var sos = Number(calcSos.value) || 0;
  var sum1Sos1 = Number(sos*1);
  addSum1Sos1.innerHTML = sum1Sos1+"x";
  var sum1Sos2 = Number(sos*1);
  addSum1Sos2.innerHTML = sum1Sos2+"x";
  /**SOS POMIDOROWY*/
  var sosPomidorowy = Number(calcSosPomidorowy.value) || 0;
  var sum1SosPomidorowy1 = Number(sosPomidorowy*1);
  addSum1SosPomidorowy1.innerHTML = sum1SosPomidorowy1+"x";
  /**SUSZONE MIESO*/
  var suszMieso = Number(calcSuszMieso.value) || 0;
  var sum6SuszMieso1 = Number(suszMieso*6);
  addSum6SuszMieso1.innerHTML = sum6SuszMieso1+"x";
  var sum6SuszMieso2 = Number(suszMieso*6);
  addSum6SuszMieso2.innerHTML = sum6SuszMieso2+"x";
  var sum4SuszMieso3 = Number(suszMieso*4);
  addSum4SuszMieso3.innerHTML = sum4SuszMieso3+"x";
  var sum4SuszMieso4 = Number(suszMieso*4);
  addSum4SuszMieso4.innerHTML = sum4SuszMieso4+"x";
  /**TORT*/
  var tort = Number(calcTort.value) || 0;
  var sum2Tort1 = Number(tort*2);
  addSum2Tort1.innerHTML = sum2Tort1+"x";
  var sum1Tort2 = Number(tort*1);
  addSum1Tort2.innerHTML = sum1Tort2+"x";
  /**TRUNEK*/
  var trunek = Number(calcTrunek.value) || 0;
  var sum2Trunek1 = Number(trunek*2);
  addSum2Trunek1.innerHTML = sum2Trunek1+"x";
  var sum1Trunek2 = Number(trunek*1);
  addSum1Trunek2.innerHTML = sum1Trunek2+"x";
  var sum1Trunek3 = Number(trunek*1);
  addSum1Trunek3.innerHTML = sum1Trunek3+"x";
  /**WEGIEL DRZEWNY*/
  var wegiel = Number(calcWegiel.value) || 0;
  var sum1Wegiel1 = Number(wegiel*1);
  addSum1Wegiel1.innerHTML = sum1Wegiel1+"x";
  var sum1Wegiel2 = Number(wegiel*1);
  addSum1Wegiel2.innerHTML = sum1Wegiel2+"x";
  /**ZACIER*/
  var zacier = Number(calcZacier.value) || 0;
  var sum1Zacier1 = Number(zacier*1);
  addSum1Zacier1.innerHTML = sum1Zacier1+"x";
  var sum1Zacier2 = Number(zacier*1);
  addSum1Zacier2.innerHTML = sum1Zacier2+"x";
  var sum1Zacier3 = Number(zacier*1);
  addSum1Zacier3.innerHTML = sum1Zacier3+"x";
  /**ZAPIECZONE FASOLKI*/
  var zapieczone = Number(calcZapieczone.value) || 0;
  var sum1Zapieczone1 = Number(zapieczone*1);
  addSum1Zapieczone1.innerHTML = sum1Zapieczone1+"x";
  var sum1Zapieczone2 = Number(zapieczone*1);
  addSum1Zapieczone2.innerHTML = sum1Zapieczone2+"x";
  /**ZEBERKA*/
  var zeberka = Number(calcZeberka.value) || 0;
  var sum4Zeberka1 = Number(zeberka*4);
  addSum4Zeberka1.innerHTML = sum4Zeberka1+"x";
  var sum4Zeberka2 = Number(zeberka*4);
  addSum4Zeberka2.innerHTML = sum4Zeberka2+"x";
  var sum4Zeberka3 = Number(zeberka*4);
  addSum4Zeberka3.innerHTML = sum4Zeberka3+"x";
  /**ZUPA RYBNA*/
  var zupa = Number(calcZupa.value) || 0;
  var sum1Zupa1 = Number(zupa*1);
  addSum1Zupa1.innerHTML = sum1Zupa1+"x";
  var sum1Zupa2 = Number(zupa*1);
  addSum1Zupa2.innerHTML = sum1Zupa2+"x";
  
  /**PUREE POMIDOROWE*/
  var dodajKamienie = document.createElement("table");
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="puree1_add-sum1">'+sum1Puree1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum1Puree1===0) {
    parent_object.removeChild(dodajKamienie);
  }
  var dodajPomidor = document.createElement("table");
  dodajPomidor.innerHTML = 
  '<table><tr><td class="ilosc" id="puree2_add-sum1">'+sum1Puree2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/aa/Pomidor.png/33px-Pomidor.png" title="Pomidor"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPomidor");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPomidor);
  if (sum1Puree2===0) {
    parent_object.removeChild(dodajPomidor);
  }
  
  /**SOS POMIDOROWY*/
  var dodajPureePomidorowe = document.createElement("table");
  dodajPureePomidorowe.innerHTML = 
  '<table><tr><td class="ilosc" id="sos-pomidorowy1_add-sum1">'+sum1SosPomidorowy1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/b5/PureePomidorowe.png/33px-PureePomidorowe.png" title="Puree pomidorowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPureePomidorowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPureePomidorowe);
  if (sum1SosPomidorowy1===0) {
    parent_object.removeChild(dodajPureePomidorowe);
  }
  
  /**ZAPIECZONE FASOLKI*/
  var dodajSosPomidorowy = document.createElement("table");
  dodajSosPomidorowy.innerHTML = 
  '<table><tr><td class="ilosc" id="zapieczone1_add-sum1">'+sum1Zapieczone1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/6b/SosPomidorowy.png/33px-SosPomidorowy.png" title="Sos pomidorowy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSosPomidorowy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSosPomidorowy);
  if (sum1Zapieczone1===0) {
    parent_object.removeChild(dodajSosPomidorowy);
  }
  var dodajFasola = document.createElement("table");
  dodajFasola.innerHTML = 
  '<table><tr><td class="ilosc" id="zapieczone2_add-sum1">'+sum1Zapieczone2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/c9/Fasola.png/33px-Fasola.png" title="Fasola"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajFasola");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajFasola);
  if (sum1Zapieczone2===0) {
    parent_object.removeChild(dodajFasola);
  }
  
  /**WEGIEL DRZEWNY*/
  var dodajKamienie = document.createElement("table");
  sum1Wegiel1 = sum1Wegiel1 + sum1Puree1;
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="wegiel1_add-sum1">'+sum1Wegiel1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum1Wegiel1===0) {
    parent_object.removeChild(dodajKamienie);
  }
  var dodajDrewno = document.createElement("table");
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="wegiel2_add-sum1">'+sum1Wegiel2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum1Wegiel2===0) {
    parent_object.removeChild(dodajDrewno);
  }
  
  /**MAKA KUKURYDZIANA*/
  var dodajKamienie = document.createElement("table");
  sum1Maka1 = sum1Wegiel1 + sum1Maka1;
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="maka-kuk1_add-sum1">'+sum1Maka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum1Maka1===0) {
    parent_object.removeChild(dodajKamienie);
  }
  var dodajKukurydza = document.createElement("table");
  dodajKukurydza.innerHTML = 
  '<table><tr><td class="ilosc" id="maka-kuk2_add-sum1">'+sum1Maka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/0a/Kukurydza.png/33px-Kukurydza.png" title="Kukurydza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKukurydza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKukurydza);
  if (sum1Maka2===0) {
    parent_object.removeChild(dodajKukurydza);
  }
  
  /**DZBAN WODY*/
  var dodajDzban = document.createElement("table");
  dodajDzban.innerHTML = 
  '<table><tr><td class="ilosc" id="dzban1_add-sum1">'+sum1Dzban1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d9/Dzban.png/33px-Dzban.png" title="Dzban"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDzban");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDzban);
  if (sum1Dzban1===0) {
    parent_object.removeChild(dodajDzban);
  }
  var dodajSzklankaWody = document.createElement("table");
  dodajSzklankaWody.innerHTML = 
  '<table><tr><td class="ilosc" id="dzban2_add-sum1">'+sum1Dzban2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/cd/SzklankaWody.png/33px-SzklankaWody.png" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum1Dzban2===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  
  /**KAWALEK TORTU*/
  var dodajMaka = document.createElement("table");
  dodajMaka.innerHTML = 
  '<table><tr><td class="ilosc" id="kaw-tortu1_add-sum1">'+sum1KawTortu1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/01/Maka.png/33px-Maka.png" title="Mąka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMaka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMaka);
  if (sum1KawTortu1===0) {
    parent_object.removeChild(dodajMaka);
  }
  var dodajCukier = document.createElement("table");
  dodajCukier.innerHTML = 
  '<table><tr><td class="ilosc" id="kaw-tortu2_add-sum1">'+sum1KawTortu2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/eb/Cukier.png/33px-Cukier.png" title="Cukier"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCukier");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCukier);
  if (sum1KawTortu2===0) {
    parent_object.removeChild(dodajCukier);
  }
  var dodajJagody = document.createElement("table");
  dodajJagody.innerHTML = 
  '<table><tr><td class="ilosc" id="kaw-tortu3_add-sum1">'+sum1KawTortu3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl//images/thumb/1/18/Jagody.png/33px-Jagody.png" title="Jagody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajJagody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajJagody);
  if (sum1KawTortu3===0) {
    parent_object.removeChild(dodajJagody);
  }
  
  /**FASOLA Z BEKONEM*/
  var dodajWegielDrzewny = document.createElement("table");
  dodajWegielDrzewny.innerHTML = 
  '<table><tr><td class="ilosc" id="fasola-bekon1_add-sum1">'+sum1FasolaBekon1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/78/WegielDrzewny.png/33px-WegielDrzewny.png" title="Węgiel drzewny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegielDrzewny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegielDrzewny);
  if (sum1FasolaBekon1===0) {
    parent_object.removeChild(dodajWegielDrzewny);
  }
  var dodajPatelnia = document.createElement("table");
  dodajPatelnia.innerHTML = 
  '<table><tr><td class="ilosc" id="fasola-bekon2_add-sum1">'+sum1FasolaBekon2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4d/PatelniaRzemioslo.png/33px-PatelniaRzemioslo.png" title="Patelnia"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPatelnia");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPatelnia);
  if (sum1FasolaBekon2===0) {
    parent_object.removeChild(dodajPatelnia);
  }
  var dodajSzynka = document.createElement("table");
  dodajSzynka.innerHTML = 
  '<table><tr><td class="ilosc" id="fasola-bekon3_add-sum1">'+sum1FasolaBekon3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/be/Szynka.png/33px-Szynka.png" title="Szynka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzynka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzynka);
  if (sum1FasolaBekon3===0) {
    parent_object.removeChild(dodajSzynka);
  }
  var dodajFasola = document.createElement("table");
  sum1FasolaBekon4 = sum1FasolaBekon4 + sum1Zapieczone2;
  dodajFasola.innerHTML = 
  '<table><tr><td class="ilosc" id="fasola-bekon4_add-sum1">'+sum1FasolaBekon4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/c9/Fasola.png/33px-Fasola.png" title="Fasola"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajFasola");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajFasola);
  if (sum1FasolaBekon4===0) {
    parent_object.removeChild(dodajFasola);
  }
  
  /**DZEM*/
  var dodajBorowki = document.createElement("table");
  dodajBorowki.innerHTML = 
  '<table><tr><td class="ilosc" id="dzem1_add-sum2">'+sum2Dzem1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/ff/Borowki.png/33px-Borowki.png" title="Borówki"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBorowki");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBorowki);
  if (sum2Dzem1===0) {
    parent_object.removeChild(dodajBorowki);
  }
  var dodajCukier = document.createElement("table");
  sum2Dzem2 = sum2Dzem2 + sum1KawTortu2;
  dodajCukier.innerHTML = 
  '<table><tr><td class="ilosc" id="dzem2_add-sum2">'+sum2Dzem2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/eb/Cukier.png/33px-Cukier.png" title="Cukier"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCukier");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCukier);
  if (sum2Dzem2===0) {
    parent_object.removeChild(dodajCukier);
  }
  var dodajWegielDrzewny = document.createElement("table");
  sum1Dzem3 = sum1Dzem3 + sum1FasolaBekon1;
  dodajWegielDrzewny.innerHTML = 
  '<table><tr><td class="ilosc" id="dzem3_add-sum1">'+sum1Dzem3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/78/WegielDrzewny.png/33px-WegielDrzewny.png" title="Węgiel drzewny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegielDrzewny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegielDrzewny);
  if (sum1Dzem3===0) {
    parent_object.removeChild(dodajWegielDrzewny);
  }
  
  /**ZACIER*/
  var dodajZboze = document.createElement("table");
  dodajZboze.innerHTML = 
  '<table><tr><td class="ilosc" id="zacier1_add-sum1">'+sum1Zacier1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/0c/Zboze.png/33px-Zboze.png" title="Zboże" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZboze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZboze);
  if (sum1Zacier1===0) {
    parent_object.removeChild(dodajZboze);
  }
  var dodajDzbanWody = document.createElement("table");
  dodajDzbanWody.innerHTML = 
  '<table><tr><td class="ilosc" id="zacier2_add-sum1">'+sum1Zacier2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/52/DzbanWody.png/33px-DzbanWody.png" title="Dzban wody" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDzbanWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDzbanWody);
  if (sum1Zacier2===0) {
    parent_object.removeChild(dodajDzbanWody);
  }
  var dodajCukier = document.createElement("table");
  sum1Zacier3 = sum2Dzem2 + sum1Zacier3;
  dodajCukier.innerHTML = 
  '<table><tr><td class="ilosc" id="zacier3_add-sum1">'+sum1Zacier3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/eb/Cukier.png/33px-Cukier.png" title="Cukier"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCukier");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCukier);
  if (sum1Zacier3===0) {
    parent_object.removeChild(dodajCukier);
  }
  
  /**CIASTO*/
  var dodajDzbanWody = document.createElement("table");
  sum1Ciasto1 = sum1Ciasto1 + sum1Zacier2;
  dodajDzbanWody.innerHTML = 
  '<table><tr><td class="ilosc" id="ciasto1_add-sum1">'+sum1Ciasto1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/52/DzbanWody.png/33px-DzbanWody.png" title="Dzban wody" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDzbanWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDzbanWody);
  if (sum1Ciasto1===0) {
    parent_object.removeChild(dodajDzbanWody);
  }
  var dodajMaka = document.createElement("table");
  sum1Ciasto2 = sum1Ciasto2 + sum1KawTortu1;
  dodajMaka.innerHTML = 
  '<table><tr><td class="ilosc" id="ciasto2_add-sum1">'+sum1Ciasto2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/01/Maka.png/33px-Maka.png" title="Mąka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMaka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMaka);
  if (sum1Ciasto2===0) {
    parent_object.removeChild(dodajMaka);
  }
  /**MARYNOWANY STEK*/
  var dodajRum = document.createElement("table");
  dodajRum.innerHTML = 
  '<table><tr><td class="ilosc" id="mar-stek1_add-sum1">'+sum1MarStek1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/61/Rum.png/33px-Rum.png" title="Rum" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRum");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRum);
  if (sum1MarStek1===0) {
    parent_object.removeChild(dodajRum);
  }
  var dodajSaletra = document.createElement("table");
  dodajSaletra.innerHTML = 
  '<table><tr><td class="ilosc" id="mar-stek2_add-sum1">'+sum1MarStek2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/24/Saletra.png/33px-Saletra.png" title="Saletra" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSaletra");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSaletra);
  if (sum1MarStek2===0) {
    parent_object.removeChild(dodajSaletra);
  }
  var dodajStek = document.createElement("table");
  dodajStek.innerHTML = 
  '<table><tr><td class="ilosc" id="mar-stek3_add-sum1">'+sum1MarStek3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/82/Stek.png/33px-Stek.png" title="Stek" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStek);
  if (sum1MarStek3===0) {
    parent_object.removeChild(dodajStek);
  }
  /**TRUNEK*/
  var dodajTequila = document.createElement("table");
  dodajTequila.innerHTML = 
  '<table><tr><td class="ilosc" id="trunek1_add-sum2">'+sum2Trunek1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9f/Tequila.png/33px-Tequila.png" title="Tequila"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajTequila");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajTequila);
  if (sum2Trunek1===0) {
    parent_object.removeChild(dodajTequila);
  }
  var dodajBorowki = document.createElement("table");
  sum1Trunek2 = sum1Trunek2 + sum2Dzem1;
  dodajBorowki.innerHTML = 
  '<table><tr><td class="ilosc" id="trunek2_add-sum1">'+sum1Trunek2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/ff/Borowki.png/33px-Borowki.png" title="Borówki"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBorowki");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBorowki);
  if (sum1Trunek2===0) {
    parent_object.removeChild(dodajBorowki);
  }
  var dodajManierka = document.createElement("table");
  dodajManierka.innerHTML = 
  '<table><tr><td class="ilosc" id="trunek3_add-sum1">'+sum1Trunek3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/69/ManierkaRzemioslo.png/33px-ManierkaRzemioslo.png" title="Manierka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajManierka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajManierka);
  if (sum1Trunek3===0) {
    parent_object.removeChild(dodajManierka);
  }
  /**TORT*/
  var dodajCiasto = document.createElement("table");
  dodajCiasto.innerHTML = 
  '<table><tr><td class="ilosc" id="tort1_add-sum2">'+sum2Tort1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/db/CiastoRzemioslo.png/33px-CiastoRzemioslo.png" title="Ciasto"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCiasto");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCiasto);
  if (sum2Tort1===0) {
    parent_object.removeChild(dodajCiasto);
  }
  var dodajJagody = document.createElement("table");
  sum1Tort2 = sum1Tort2 + sum1KawTortu3;
  dodajJagody.innerHTML = 
  '<table><tr><td class="ilosc" id="tort2_add-sum1">'+sum1Tort2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl//images/thumb/1/18/Jagody.png/33px-Jagody.png" title="Jagody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajJagody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajJagody);
  if (sum1Tort2===0) {
    parent_object.removeChild(dodajJagody);
  }
  
  /**BULION RYBNY*/
  var dodajPstrag = document.createElement("table");
  dodajPstrag.innerHTML = 
  '<table><tr><td class="ilosc" id="bulion1_add-sum1">'+sum1Bulion1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fe/Pstrag.png/33px-Pstrag.png" title="Pstrąg"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPstrag");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPstrag);
  if (sum1Bulion1===0) {
    parent_object.removeChild(dodajPstrag);
  }
  var dodajLosos = document.createElement("table");
  dodajLosos.innerHTML = 
  '<table><tr><td class="ilosc" id="bulion2_add-sum1">'+sum1Bulion2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/11/Losos.png/33px-Losos.png" title="Łosoś"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLosos");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLosos);
  if (sum1Bulion2===0) {
    parent_object.removeChild(dodajLosos);
  }
  var dodajMiesoKraba = document.createElement("table");
  dodajMiesoKraba.innerHTML = 
  '<table><tr><td class="ilosc" id="bulion3_add-sum1">'+sum1Bulion3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3d/MiesoKraba.png/33px-MiesoKraba.png" title="Mięso kraba"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMiesoKraba");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMiesoKraba);
  if (sum1Bulion3===0) {
    parent_object.removeChild(dodajMiesoKraba);
  }
  
  /**PIECZONY INDYK*/
  var dodajJagody = document.createElement("table");
  sum2PieczonyIndyk1 = sum1Tort2 + sum2PieczonyIndyk1;
  dodajJagody.innerHTML = 
  '<table><tr><td class="ilosc" id="piecz-indyk1_add-sum2">'+sum2PieczonyIndyk1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl//images/thumb/1/18/Jagody.png/33px-Jagody.png" title="Jagody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajJagody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajJagody);
  if (sum2PieczonyIndyk1===0) {
    parent_object.removeChild(dodajJagody);
  }
  var dodajIndyk = document.createElement("table");
  dodajIndyk.innerHTML = 
  '<table><tr><td class="ilosc" id="piecz-indyk2_add-sum1">'+sum1PieczonyIndyk2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/6b/Indyk.png/33px-Indyk.png" title="Indyk"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajIndyk");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajIndyk);
  if (sum1PieczonyIndyk2===0) {
    parent_object.removeChild(dodajIndyk);
  }
  var dodajPomarancza = document.createElement("table");
  dodajPomarancza.innerHTML = 
  '<table><tr><td class="ilosc" id="piecz-indyk3_add-sum1">'+sum1PieczonyIndyk3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7f/Pomarancza.png/33px-Pomarancza.png" title="Pomarańcza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPomarancza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPomarancza);
  if (sum1PieczonyIndyk3===0) {
    parent_object.removeChild(dodajPomarancza);
  }
  var dodajWegielDrzewny = document.createElement("table");
  sum1PieczonyIndyk4 = sum1Dzem3 + sum1PieczonyIndyk4;
  dodajWegielDrzewny.innerHTML = 
  '<table><tr><td class="ilosc" id="piecz-indyk4_add-sum1">'+sum1PieczonyIndyk4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/78/WegielDrzewny.png/33px-WegielDrzewny.png" title="Węgiel drzewny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegielDrzewny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegielDrzewny);
  if (sum1PieczonyIndyk4===0) {
    parent_object.removeChild(dodajWegielDrzewny);
  }
  
  /**ZUPA RYBNA*/
  var dodajPureePomidorowe = document.createElement("table");
  sum1Zupa1 = sum1Zupa1 + sum1SosPomidorowy1;
  dodajPureePomidorowe.innerHTML = 
  '<table><tr><td class="ilosc" id="zuparybna1_add-sum1">'+sum1Zupa1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/b5/PureePomidorowe.png/33px-PureePomidorowe.png" title="Puree pomidorowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPureePomidorowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPureePomidorowe);
  if (sum1Zupa1===0) {
    parent_object.removeChild(dodajPureePomidorowe);
  }
  var dodajBulionRybny = document.createElement("table");
  dodajBulionRybny.innerHTML = 
  '<table><tr><td class="ilosc" id="zuparybna2_add-sum1">'+sum1Zupa2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/14/BulionRzemioslo.png/33px-BulionRzemioslo.png" title="Bulion rybny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBulionRybny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBulionRybny);
  if (sum1Zupa2===0) {
    parent_object.removeChild(dodajBulionRybny);
  }
  /**PIEROG Z WARZYWAMI*/
  var dodajDynia = document.createElement("table");
  dodajDynia.innerHTML = 
  '<table><tr><td class="ilosc" id="pierog1_add-sum1">'+sum1Pierog1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/75/Dynia.png/33px-Dynia.png" title="Dynia"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDynia");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDynia);
  if (sum1Pierog1===0) {
    parent_object.removeChild(dodajDynia);
  }
  var dodajZiemniak = document.createElement("table");
  dodajZiemniak.innerHTML = 
  '<table><tr><td class="ilosc" id="pierog2_add-sum1">'+sum1Pierog2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9e/Ziemniak.png/33px-Ziemniak.png" title="Ziemniak"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZiemniak");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZiemniak);
  if (sum1Pierog2===0) {
    parent_object.removeChild(dodajZiemniak);
  }
  var dodajCiasto = document.createElement("table");
  sum1Pierog3 = sum1Pierog3 + sum2Tort1;
  dodajCiasto.innerHTML = 
  '<table><tr><td class="ilosc" id="pierog3_add-sum1">'+sum1Pierog3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/db/CiastoRzemioslo.png/33px-CiastoRzemioslo.png" title="Ciasto"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCiasto");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCiasto);
  if (sum1Pierog3===0) {
    parent_object.removeChild(dodajCiasto);
  }
  /**SIEKANE MIESO*/
  var dodajSzynka = document.createElement("table");
  sum2SiekaneM1 = sum2SiekaneM1 + sum1FasolaBekon3;
  dodajSzynka.innerHTML = 
  '<table><tr><td class="ilosc" id="siekane-mieso1_add-sum2">'+sum2SiekaneM1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/be/Szynka.png/33px-Szynka.png" title="Szynka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzynka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzynka);
  if (sum2SiekaneM1===0) {
    parent_object.removeChild(dodajSzynka);
  }
  var dodajNoz = document.createElement("table");
  dodajNoz.innerHTML = 
  '<table><tr><td class="ilosc" id="siekane-mieso2_add-sum1">'+sum1SiekaneM2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/NozRzemioslo.png/33px-NozRzemioslo.png" title="Nóż"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNoz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNoz);
  if (sum1SiekaneM2===0) {
    parent_object.removeChild(dodajNoz);
  }
  var dodajDeskaDoKrojenia = document.createElement("table");
  dodajDeskaDoKrojenia.innerHTML = 
  '<table><tr><td class="ilosc" id="siekane-mieso3_add-sum1">'+sum1SiekaneM3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/57/DeskaDoKrojeniaRzemioslo.png/33px-DeskaDoKrojeniaRzemioslo.png" title="Deska do krojenia"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDeskaDoKrojenia");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDeskaDoKrojenia);
  if (sum1SiekaneM3===0) {
    parent_object.removeChild(dodajDeskaDoKrojenia);
  }
  /**DORSZ*/
  var dodajPstrag = document.createElement("table");
  sum1Dorsz1 = sum1Dorsz1 + sum1Bulion1;
  dodajPstrag.innerHTML = 
  '<table><tr><td class="ilosc" id="dorsz1_add-sum1">'+sum1Dorsz1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fe/Pstrag.png/33px-Pstrag.png" title="Pstrąg"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPstrag");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPstrag);
  if (sum1Dorsz1===0) {
    parent_object.removeChild(dodajPstrag);
  }
  var dodajPalDrewniany = document.createElement("table");
  dodajPalDrewniany.innerHTML = 
  '<table><tr><td class="ilosc" id="dorsz2_add-sum1">'+sum1Dorsz2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/2a/PalDrewniany.png/33px-PalDrewniany.png" title="Pal drewniany"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPalDrewniany");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPalDrewniany);
  if (sum1Dorsz2===0) {
    parent_object.removeChild(dodajPalDrewniany);
  }
  
  /**KADZIDLO*/
  var dodajLiscieTytoniu = document.createElement("table");
  dodajLiscieTytoniu.innerHTML = 
  '<table><tr><td class="ilosc" id="kadzidlo1_add-sum4">'+sum4Kadzidlo1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d5/LiscieTytoniu.png/33px-LiscieTytoniu.png" title="Liście tytoniu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLiscieTytoniu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLiscieTytoniu);
  if (sum4Kadzidlo1===0) {
    parent_object.removeChild(dodajLiscieTytoniu);
  }
  var dodajJagody = document.createElement("table");
  sum2Kadzidlo2 = sum2Kadzidlo2 + sum2PieczonyIndyk1;
  dodajJagody.innerHTML = 
  '<table><tr><td class="ilosc" id="kadzidlo2_add-sum2">'+sum2Kadzidlo2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl//images/thumb/1/18/Jagody.png/33px-Jagody.png" title="Jagody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajJagody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajJagody);
  if (sum2Kadzidlo2===0) {
    parent_object.removeChild(dodajJagody);
  }
  var dodajPapierosy = document.createElement("table");
  dodajPapierosy.innerHTML = 
  '<table><tr><td class="ilosc" id="kadzidlo3_add-sum1">'+sum1Kadzidlo3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/82/Papierosy.png/33px-Papierosy.png" title="Papierosy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPapierosy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPapierosy);
  if (sum1Kadzidlo3===0) {
    parent_object.removeChild(dodajPapierosy);
  }
  
  /**SOS*/
  var dodajPureePomidorowe = document.createElement("table");
  sum1Sos1 = sum1Zupa1 + sum1Sos1;
  dodajPureePomidorowe.innerHTML = 
  '<table><tr><td class="ilosc" id="sos1_add-sum1">'+sum1Sos1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/b5/PureePomidorowe.png/33px-PureePomidorowe.png" title="Puree pomidorowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPureePomidorowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPureePomidorowe);
  if (sum1Sos1===0) {
    parent_object.removeChild(dodajPureePomidorowe);
  }
  var dodajDynia = document.createElement("table");
  sum1Sos2 = sum1Sos2 + sum1Pierog1;
  dodajDynia.innerHTML = 
  '<table><tr><td class="ilosc" id="sos2_add-sum1">'+sum1Sos2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/75/Dynia.png/33px-Dynia.png" title="Dynia"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDynia");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDynia);
  if (sum1Sos2===0) {
    parent_object.removeChild(dodajDynia);
  }
  
  /**CIASTECZKA KUKURYDZIANE*/
  var dodajMakaKukurydziana = document.createElement("table");
  dodajMakaKukurydziana.innerHTML = 
  '<table><tr><td class="ilosc" id="ciasteczka1_add-sum2">'+sum2Ciasteczka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d0/MakaKukurydziana.png/33px-MakaKukurydziana.png" title="Mąka kukurydziana"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMakaKukurydziana");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMakaKukurydziana);
  if (sum2Ciasteczka1===0) {
    parent_object.removeChild(dodajMakaKukurydziana);
  }
  var dodajButelkaMleka = document.createElement("table");
  dodajButelkaMleka.innerHTML = 
  '<table><tr><td class="ilosc" id="ciasteczka2_add-sum2">'+sum2Ciasteczka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3f/ButelkaMleka.png/33px-ButelkaMleka.png" title="Butelka Mleka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajButelkaMleka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajButelkaMleka);
  if (sum2Ciasteczka2===0) {
    parent_object.removeChild(dodajButelkaMleka);
  }
  var dodajSuroweJajka = document.createElement("table");
  dodajSuroweJajka.innerHTML = 
  '<table><tr><td class="ilosc" id="ciasteczka3_add-sum2">'+sum2Ciasteczka3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e8/SuroweJajka.png/33px-SuroweJajka.png" title="Surowe jajka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSuroweJajka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSuroweJajka);
  if (sum2Ciasteczka3===0) {
    parent_object.removeChild(dodajSuroweJajka);
  }
  
  /**RYBA ZAWINIETA W GAZETE*/
  var dodajLosos = document.createElement("table");
  sum4Ryba1 = sum4Ryba1 + sum1Bulion2;
  dodajLosos.innerHTML = 
  '<table><tr><td class="ilosc" id="ryba-zawinieta1_add-sum4">'+sum4Ryba1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/11/Losos.png/33px-Losos.png" title="Łosoś"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLosos");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLosos);
  if (sum4Ryba1===0) {
    parent_object.removeChild(dodajLosos);
  }
  var dodajSkora = document.createElement("table");
  dodajSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="ryba-zawinieta2_add-sum4">'+sum4Ryba2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ab/Skora.png/33px-Skora.png" title="Skóra"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkora);
  if (sum4Ryba2===0) {
    parent_object.removeChild(dodajSkora);
  }
  var dodajGazeta = document.createElement("table");
  dodajGazeta.innerHTML = 
  '<table><tr><td class="ilosc" id="ryba-zawinieta3_add-sum2">'+sum2Ryba3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7f/Gazeta.png/33px-Gazeta.png" title="Gazeta"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajGazeta");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGazeta);
  if (sum2Ryba3===0) {
    parent_object.removeChild(dodajGazeta);
  }
  
  /**SOK Z KAKTUSA*/
  var dodajCukier = document.createElement("table");
  sum2SokKaktus1 = sum1Zacier3 + sum2SokKaktus1;
  dodajCukier.innerHTML = 
  '<table><tr><td class="ilosc" id="sok-kaktus1_add-sum2">'+sum2SokKaktus1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/eb/Cukier.png/33px-Cukier.png" title="Cukier"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCukier");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCukier);
  if (sum2SokKaktus1===0) {
    parent_object.removeChild(dodajCukier);
  }
  var dodajPomarancza = document.createElement("table");
  sum2SokKaktus2 = sum2SokKaktus2 + sum1PieczonyIndyk3;
  dodajPomarancza.innerHTML = 
  '<table><tr><td class="ilosc" id="sok-kaktus2_add-sum2">'+sum2SokKaktus2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7f/Pomarancza.png/33px-Pomarancza.png" title="Pomarańcza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPomarancza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPomarancza);
  if (sum2SokKaktus2===0) {
    parent_object.removeChild(dodajPomarancza);
  }
  var dodajNoz = document.createElement("table");
  sum1SokKaktus3 = sum1SokKaktus3 + sum1SiekaneM2;
  dodajNoz.innerHTML = 
  '<table><tr><td class="ilosc" id="sok-kaktus3_add-sum1">'+sum1SokKaktus3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/NozRzemioslo.png/33px-NozRzemioslo.png" title="Nóż"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNoz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNoz);
  if (sum1SokKaktus3===0) {
    parent_object.removeChild(dodajNoz);
  }
  var dodajDzbanWody = document.createElement("table");
  sum1SokKaktus4 = sum1Ciasto1 + sum1SokKaktus4;
  dodajDzbanWody.innerHTML = 
  '<table><tr><td class="ilosc" id="sok-kaktus4_add-sum1">'+sum1SokKaktus4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/52/DzbanWody.png/33px-DzbanWody.png" title="Dzban wody" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDzbanWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDzbanWody);
  if (sum1SokKaktus4===0) {
    parent_object.removeChild(dodajDzbanWody);
  }
  /**OBIAD DZENTELMENA*/
  var dodajWhiskey = document.createElement("table");
  dodajWhiskey.innerHTML = 
  '<table><tr><td class="ilosc" id="obiad-dz1_add-sum3">'+sum3Obiad1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Whiskey.png/33px-Whiskey.png" title="Whiskey"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajWhiskey");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWhiskey);
  if (sum3Obiad1===0) {
    parent_object.removeChild(dodajWhiskey);
  }
  var dodajCygara = document.createElement("table");
  dodajCygara.innerHTML = 
  '<table><tr><td class="ilosc" id="obiad-dz2_add-sum2">'+sum2Obiad2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/50/Cygara.png/33px-Cygara.png" title="Cygara"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCygara");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCygara);
  if (sum2Obiad2===0) {
    parent_object.removeChild(dodajCygara);
  }
  var dodajGazeta = document.createElement("table");
  sum1Obiad3 = sum1Obiad3 + sum2Ryba3;
  dodajGazeta.innerHTML = 
  '<table><tr><td class="ilosc" id="obiad-dz3_add-sum1">'+sum1Obiad3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7f/Gazeta.png/33px-Gazeta.png" title="Gazeta"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajGazeta");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGazeta);
  if (sum1Obiad3===0) {
    parent_object.removeChild(dodajGazeta);
  }
  
  /**SUSZONE MIESO*/
  var dodajWhiskey = document.createElement("table");
  sum6SuszMieso1 = sum6SuszMieso1 + sum3Obiad1;
  dodajWhiskey.innerHTML = 
  '<table><tr><td class="ilosc" id="susz-mieso1_add-sum6">'+sum6SuszMieso1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Whiskey.png/33px-Whiskey.png" title="Whiskey"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajWhiskey");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWhiskey);
  if (sum6SuszMieso1===0) {
    parent_object.removeChild(dodajWhiskey);
  }
  var dodajSzynka = document.createElement("table");
  sum6SuszMieso2 = sum2SiekaneM1 + sum6SuszMieso2;
  dodajSzynka.innerHTML = 
  '<table><tr><td class="ilosc" id="susz-mieso2_add-sum6">'+sum6SuszMieso2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/be/Szynka.png/33px-Szynka.png" title="Szynka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzynka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzynka);
  if (sum6SuszMieso2===0) {
    parent_object.removeChild(dodajSzynka);
  }
  var dodajSaletra = document.createElement("table");
  sum4SuszMieso3 = sum4SuszMieso3 + sum1MarStek2;
  dodajSaletra.innerHTML = 
  '<table><tr><td class="ilosc" id="susz-mieso3_add-sum4">'+sum4SuszMieso3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/24/Saletra.png/33px-Saletra.png" title="Saletra" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSaletra");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSaletra);
  if (sum4SuszMieso3===0) {
    parent_object.removeChild(dodajSaletra);
  }
  var dodajStek = document.createElement("table");
  sum4SuszMieso4 = sum4SuszMieso4 + sum1MarStek3;
  dodajStek.innerHTML = 
  '<table><tr><td class="ilosc" id="susz-mieso4_add-sum4">'+sum4SuszMieso4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/82/Stek.png/33px-Stek.png" title="Stek" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStek);
  if (sum4SuszMieso4===0) {
    parent_object.removeChild(dodajStek);
  }
  
  /**GUMA DO ZUCIA*/
  var dodajSuszoneMieso = document.createElement("table");
  dodajSuszoneMieso.innerHTML = 
  '<table><tr><td class="ilosc" id="guma1_add-sum1">'+sum1Guma1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/2a/SuszoneMiesoRzemioslo.png/33px-SuszoneMiesoRzemioslo.png" title="Suszone mięso"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajSuszoneMieso");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSuszoneMieso);
  if (sum1Guma1===0) {
    parent_object.removeChild(dodajSuszoneMieso);
  }
  var dodajDorsz = document.createElement("table");
  dodajDorsz.innerHTML = 
  '<table><tr><td class="ilosc" id="guma2_add-sum1">'+sum1Guma2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/a4/DorszRzemioslo.png/33px-DorszRzemioslo.png" title="Dorsz"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDorsz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDorsz);
  if (sum1Guma2===0) {
    parent_object.removeChild(dodajDorsz);
  }
  var dodajOstrePapryki = document.createElement("table");
  dodajOstrePapryki.innerHTML = 
  '<table><tr><td class="ilosc" id="guma3_add-sum1">'+sum1Guma3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8f/OstrePapryki.png/33px-OstrePapryki.png" title="Ostre papryki"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOstrePapryki");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOstrePapryki);
  if (sum1Guma3===0) {
    parent_object.removeChild(dodajOstrePapryki);
  }
  
  /**GROG*/
  var dodajWodka = document.createElement("table");
  dodajWodka.innerHTML = 
  '<table><tr><td class="ilosc" id="grog1_add-sum">'+sum2Grog1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/16/Wodka.png/33px-Wodka.png" title="Wódka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWodka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWodka);
  if (sum2Grog1===0) {
    parent_object.removeChild(dodajWodka);
  }
  var dodajZacier = document.createElement("table");
  dodajZacier.innerHTML = 
  '<table><tr><td class="ilosc" id="grog2_add-sum">'+sum2Grog2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/53/ZacierRzemioslo.png/33px-ZacierRzemioslo.png" title="Zacier"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZacier");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZacier);
  if (sum2Grog2===0) {
    parent_object.removeChild(dodajZacier);
  }
  var dodajRum = document.createElement("table");
  sum1Grog3 = sum1MarStek1 + sum1Grog3;
  dodajRum.innerHTML = 
  '<table><tr><td class="ilosc" id="grog3_add-sum1">'+sum1Grog3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/61/Rum.png/33px-Rum.png" title="Rum" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRum");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRum);
  if (sum1Grog3===0) {
    parent_object.removeChild(dodajRum);
  }
  var dodajProchStrzelniczy = document.createElement("table");
  dodajProchStrzelniczy.innerHTML = 
  '<table><tr><td class="ilosc" id="grog4_add-sum1">'+sum1Grog4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/59/ProchStrzelniczyRzemioslo.png/33px-ProchStrzelniczyRzemioslo.png" title="Proch strzelniczy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajProchStrzelniczy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajProchStrzelniczy);
  if (sum1Grog4===0) {
    parent_object.removeChild(dodajProchStrzelniczy);
  }
  
  /**GULASZ*/
  var dodajPureePomidorowe = document.createElement("table");
  sum1Gulasz1 = sum1Gulasz1 + sum1Sos1;
  dodajPureePomidorowe.innerHTML = 
  '<table><tr><td class="ilosc" id="gulasz1_add-sum1">'+sum1Gulasz1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/b5/PureePomidorowe.png/33px-PureePomidorowe.png" title="Puree pomidorowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPureePomidorowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPureePomidorowe);
  if (sum1Gulasz1===0) {
    parent_object.removeChild(dodajPureePomidorowe);
  }
  var dodajMarynowanyStek = document.createElement("table");
  dodajMarynowanyStek.innerHTML = 
  '<table><tr><td class="ilosc" id="gulasz2_add-sum1">'+sum1Gulasz2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/27/MarynowanyStekRzemioslo.png/33px-MarynowanyStekRzemioslo.png" title="Marynowany stek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMarynowanyStek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMarynowanyStek);
  if (sum1Gulasz2===0) {
    parent_object.removeChild(dodajMarynowanyStek);
  }
  var dodajWegiel = document.createElement("table");
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="gulasz3_add-sum1">'+sum1Gulasz3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum1Gulasz3===0) {
    parent_object.removeChild(dodajWegiel);
  }
  var dodajGarnekDoGotowania = document.createElement("table");
  dodajGarnekDoGotowania.innerHTML = 
  '<table><tr><td class="ilosc" id="gulasz4_add-sum1">'+sum1Gulasz4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3b/GarnekDoGotowania.png/33px-GarnekDoGotowania.png" title="Garnek do gotowania"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajGarnekDoGotowania");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGarnekDoGotowania);
  if (sum1Gulasz4===0) {
    parent_object.removeChild(dodajGarnekDoGotowania);
  }
  
  /**ZEBERKA*/
  var dodajStek = document.createElement("table");
  sum4Zeberka1 = sum4SuszMieso4 + sum4Zeberka1;
  dodajStek.innerHTML = 
  '<table><tr><td class="ilosc" id="zeberka1_add-sum4">'+sum4Zeberka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/82/Stek.png/33px-Stek.png" title="Stek" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStek);
  if (sum4Zeberka1===0) {
    parent_object.removeChild(dodajStek);
  }
  var dodajSos = document.createElement("table");
  dodajSos.innerHTML = 
  '<table><tr><td class="ilosc" id="zeberka2_add-sum4">'+sum4Zeberka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d6/SosRzemioslo.png/33px-SosRzemioslo.png" title="Sos"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSos");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSos);
  if (sum4Zeberka2===0) {
    parent_object.removeChild(dodajSos);
  }
  var dodajWegielDrzewny = document.createElement("table");
  sum4Zeberka3 = sum4Zeberka3 + sum1PieczonyIndyk4;
  dodajWegielDrzewny.innerHTML = 
  '<table><tr><td class="ilosc" id="zeberka3_add-sum4">'+sum4Zeberka3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/78/WegielDrzewny.png/33px-WegielDrzewny.png" title="Węgiel drzewny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegielDrzewny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegielDrzewny);
  if (sum4Zeberka3===0) {
    parent_object.removeChild(dodajWegielDrzewny);
  }
  
  /**MIOD*/
  var dodajPrasaDoMiodu = document.createElement("table");
  dodajPrasaDoMiodu.innerHTML = 
  '<table><tr><td class="ilosc" id="miod1_add-sum1">'+sum1Miod1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/41/PrasaDoMioduRzemioslo.png/33px-PrasaDoMioduRzemioslo.png" title="Prasa do miodu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPrasaDoMiodu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPrasaDoMiodu);
  if (sum1Miod1===0) {
    parent_object.removeChild(dodajPrasaDoMiodu);
  }
  var dodajRoza = document.createElement("table");
  dodajRoza.innerHTML = 
  '<table><tr><td class="ilosc" id="miod2_add-sum1">'+sum1Miod2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ab/Roza.png/33px-Roza.png" title="Róża"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRoza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRoza);
  if (sum1Miod2===0) {
    parent_object.removeChild(dodajRoza);
  }
  
  /**FASOLA W PUSZCE*/
  var dodajKamienie = document.createElement("table");
  sum12FasPuszka1 = sum12FasPuszka1 + sum1Maka1;
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="fasola-puszka1_add-sum12">'+sum12FasPuszka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum12FasPuszka1===0) {
    parent_object.removeChild(dodajKamienie);
  }
  var dodajWegiel = document.createElement("table");
  sum12FasPuszka2 = sum12FasPuszka2 + sum1Gulasz3;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="fasola-puszka2_add-sum12">'+sum12FasPuszka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum12FasPuszka2===0) {
    parent_object.removeChild(dodajWegiel);
  }
  var dodajFasola = document.createElement("table");
  sum7FasPuszka3 = sum1FasolaBekon4 + sum7FasPuszka3;
  dodajFasola.innerHTML = 
  '<table><tr><td class="ilosc" id="fasola-puszka3_add-sum7">'+sum7FasPuszka3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/c9/Fasola.png/33px-Fasola.png" title="Fasola"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajFasola");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajFasola);
  if (sum7FasPuszka3===0) {
    parent_object.removeChild(dodajFasola);
  }
  var dodajMlotek = document.createElement("table");
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc" id="fasola-puszka4_add-sum5">'+sum5FasPuszka4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Mlotek.png/33px-Mlotek.png" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum5FasPuszka4===0) {
    parent_object.removeChild(dodajMlotek);
  }
  var dodajStal = document.createElement("table");
  dodajStal.innerHTML = 
  '<table><tr><td class="ilosc" id="fasola-puszka5_add-sum3">'+sum3FasPuszka5+'</td><td class="td-img"><div><img alt="" src="https://wiki.the-west.pl/images/thumb/9/92/StalRzemioslo.png/33px-StalRzemioslo.png" title="Stal"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStal");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStal);
  if (sum3FasPuszka5===0) {
    parent_object.removeChild(dodajStal);
  }
  
  /**NAJOSTRZEJSZE CHILI NA ZACHODZIE*/
  var dodajSiekaneMieso = document.createElement("table");
  dodajSiekaneMieso.innerHTML = 
  '<table><tr><td class="ilosc" id="chili1_add-sum7">'+sum7Chili1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/b6/SiekaneMiesoRzemioslo.png/33px-SiekaneMiesoRzemioslo.png" title="Siekane mięso"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiekaneMieso");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiekaneMieso);
  if (sum7Chili1===0) {
    parent_object.removeChild(dodajSiekaneMieso);
  }
  var dodajWegiel = document.createElement("table");
  sum5Chili2 = sum12FasPuszka2 + sum5Chili2;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="chili2_add-sum5">'+sum5Chili2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum5Chili2===0) {
    parent_object.removeChild(dodajWegiel);
  }
  var dodajFasolaWPuszce = document.createElement("table");
  dodajFasolaWPuszce.innerHTML = 
  '<table><tr><td class="ilosc" id="chili3_add-sum4">'+sum4Chili3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/FasolaWPuszceRzemioslo.png/33px-FasolaWPuszceRzemioslo.png" title="Fasola w puszce"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajFasolaWPuszce");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajFasolaWPuszce);
  if (sum4Chili3===0) {
    parent_object.removeChild(dodajFasolaWPuszce);
  }
  var dodajPapryczkiHabanero = document.createElement("table");
  dodajPapryczkiHabanero.innerHTML = 
  '<table><tr><td class="ilosc" id="chili4_add-sum1">'+sum1Chili4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/c8/PapryczkiHabanero.png/33px-PapryczkiHabanero.png" title="Papryczki Habanero"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPapryczkiHabanero");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPapryczkiHabanero);
  if (sum1Chili4===0) {
    parent_object.removeChild(dodajPapryczkiHabanero);
  }
  /**MIOD PITNY*/
  var dodajMiod = document.createElement("table");
  dodajMiod.innerHTML = 
  '<table><tr><td class="ilosc" id="miod-pitny1_add-sum2">'+sum2MiodPitny1+'</td><td class="td-img"><div><img alt="" src="https://wiki.the-west.pl/images/thumb/5/52/MiodRzemioslo.png/33px-MiodRzemioslo.png" title="Miód"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMiod");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMiod);
  if (sum2MiodPitny1===0) {
    parent_object.removeChild(dodajMiod);
  }
  var dodajButelkaMleka = document.createElement("table");
  sum2MiodPitny2 = sum2MiodPitny2 + sum2Ciasteczka2;
  dodajButelkaMleka.innerHTML = 
  '<table><tr><td class="ilosc" id="miod-pitny2_add-sum2">'+sum2MiodPitny2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3f/ButelkaMleka.png/33px-ButelkaMleka.png" title="Butelka Mleka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajButelkaMleka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajButelkaMleka);
  if (sum2MiodPitny2===0) {
    parent_object.removeChild(dodajButelkaMleka);
  }
  var dodajDzbanWody = document.createElement("table");
  sum1MiodPitny3 = sum1MiodPitny3 + sum1SokKaktus4;
  dodajDzbanWody.innerHTML = 
  '<table><tr><td class="ilosc" id="miod-pitny3_add-sum1">'+sum1MiodPitny3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/52/DzbanWody.png/33px-DzbanWody.png" title="Dzban wody" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDzbanWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDzbanWody);
  if (sum1MiodPitny3===0) {
    parent_object.removeChild(dodajDzbanWody);
  }
  var dodajMakaKukurydziana = document.createElement("table");
  sum1MiodPitny4 = sum1MiodPitny4 + sum2Ciasteczka1;
  dodajMakaKukurydziana.innerHTML = 
  '<table><tr><td class="ilosc" id="miod-pitny4_add-sum1">'+sum1MiodPitny4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d0/MakaKukurydziana.png/33px-MakaKukurydziana.png" title="Mąka kukurydziana"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMakaKukurydziana");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMakaKukurydziana);
  if (sum1MiodPitny4===0) {
    parent_object.removeChild(dodajMakaKukurydziana);
  } 
  
  /**ZNACHOR polecenia ułozone są alfabetycznie--------------------*/
  /**AMULET*/
  var amulet = Number(calcAmulet.value) || 0;
  var sum1Amulet1 = Number(amulet*1);
  addSum1Amulet1.innerHTML = sum1Amulet1+"x";
  var sum1Amulet2 = Number(amulet*1);
  addSum1Amulet2.innerHTML = sum1Amulet2+"x";
  /**ATRAMENT*/
  var atrament = Number(calcAtrament.value) || 0;
  var sum1Atrament1 = Number(atrament*1);
  addSum1Atrament1.innerHTML = sum1Atrament1+"x";
  var sum1Atrament2 = Number(atrament*1);
  addSum1Atrament2.innerHTML = sum1Atrament2+"x";
  /**ATRAMENT SYMPATYCZNY*/
  var atramentS = Number(calcAtramentS.value) || 0;
  var sum1AtramentS1 = Number(atramentS*1);
  addSum1AtramentS1.innerHTML = sum1AtramentS1+"x";
  var sum1AtramentS2 = Number(atramentS*1);
  addSum1AtramentS2.innerHTML = sum1AtramentS2+"x";
  var sum1AtramentS3 = Number(atramentS*1);
  addSum1AtramentS3.innerHTML = sum1AtramentS3+"x";
  /**BATERIA*/
  var bateria = Number(calcBateria.value) || 0;
  var sum1Bateria1 = Number(bateria*1);
  addSum1Bateria1.innerHTML = sum1Bateria1+"x";
  var sum1Bateria2 = Number(bateria*1);
  addSum1Bateria2.innerHTML = sum1Bateria2+"x";
  /**BIMBER*/
  var bimber = Number(calcBimber.value) || 0;
  var sum4Bimber1 = Number(bimber*4);
  addSum4Bimber1.innerHTML = sum4Bimber1+"x";
  var sum3Bimber2 = Number(bimber*3);
  addSum3Bimber2.innerHTML = sum3Bimber2+"x";
  var sum2Bimber3 = Number(bimber*2);
  addSum2Bimber3.innerHTML = sum2Bimber3+"x";
  var sum1Bimber4 = Number(bimber*1);
  addSum1Bimber4.innerHTML = sum1Bimber4+"x";
  /**BŁYSZCZĄCA MIKSTURA*/
  var mikstura = Number(calcMikstura.value) || 0;
  var sum3Mikstura1 = Number(mikstura*3);
  addSum3Mikstura1.innerHTML = sum3Mikstura1+"x";
  var sum3Mikstura2 = Number(mikstura*3);
  addSum3Mikstura2.innerHTML = sum3Mikstura2+"x";
  var sum2Mikstura3 = Number(mikstura*2);
  addSum2Mikstura3.innerHTML = sum2Mikstura3+"x";
  var sum1Mikstura4 = Number(mikstura*1);
  addSum1Mikstura4.innerHTML = sum1Mikstura4+"x";
  /**BOZEK*/
  var bozek = Number(calcBozek.value) || 0;
  var sum2Bozek1 = Number(bozek*2);
  addSum2Bozek1.innerHTML = sum2Bozek1+"x";
  var sum2Bozek2 = Number(bozek*2);
  addSum2Bozek2.innerHTML = sum2Bozek2+"x";
  var sum1Bozek3 = Number(bozek*1);
  addSum1Bozek3.innerHTML = sum1Bozek3+"x";
  /**CYRKIEL*/
  var cyrkiel = Number(calcCyrkiel.value) || 0;
  var sum3Cyrkiel1 = Number(cyrkiel*3);
  addSum3Cyrkiel1.innerHTML = sum3Cyrkiel1+"x";
  var sum2Cyrkiel2 = Number(cyrkiel*2);
  addSum2Cyrkiel2.innerHTML = sum2Cyrkiel2+"x";
  /**DESTYLAT*/
  var destylat = Number(calcDestylat.value) || 0;
  var sum3Destylat1 = Number(destylat*3);
  addSum3Destylat1.innerHTML = sum3Destylat1+"x";
  var sum1Destylat2 = Number(destylat*1);
  addSum1Destylat2.innerHTML = sum1Destylat2+"x";
  var sum1Destylat3 = Number(destylat*1);
  addSum1Destylat3.innerHTML = sum1Destylat3+"x";
  /**DUCHOWA MUZYKA*/
  var duchMuz = Number(calcDuchMuz.value) || 0;
  var sum4DuchMuz1 = Number(duchMuz*4);
  addSum4DuchMuz1.innerHTML = sum4DuchMuz1+"x";
  var sum2DuchMuz2 = Number(duchMuz*2);
  addSum2DuchMuz2.innerHTML = sum2DuchMuz2+"x";
  var sum1DuchMuz3 = Number(duchMuz*1);
  addSum1DuchMuz3.innerHTML = sum1DuchMuz3+"x";
  var sum1DuchMuz4 = Number(duchMuz*1);
  addSum1DuchMuz4.innerHTML = sum1DuchMuz4+"x";
  var sum1DuchMuz5 = Number(duchMuz*1);
  addSum1DuchMuz5.innerHTML = sum1DuchMuz5+"x";
  /**DYSK Z PIRYTU*/
  var dysk = Number(calcDysk.value) || 0;
  var sum1Dysk1 = Number(dysk*1);
  addSum1Dysk1.innerHTML = sum1Dysk1+"x";
  /**HERBATA*/
  var herbata = Number(calcHerbata.value) || 0;
  var sum3Herbata1 = Number(herbata*3);
  addSum3Herbata1.innerHTML = sum3Herbata1+"x";
  var sum1Herbata2 = Number(herbata*1);
  addSum1Herbata2.innerHTML = sum1Herbata2+"x";
  /**KRZESIWO*/
  var krzesiwo = Number(calcKrzesiwo.value) || 0;
  var sum1Krzesiwo1 = Number(krzesiwo*1);
  addSum1Krzesiwo1.innerHTML = sum1Krzesiwo1+"x";
  var sum1Krzesiwo2 = Number(krzesiwo*1);
  addSum1Krzesiwo2.innerHTML = sum1Krzesiwo2+"x";
  var sum1Krzesiwo3 = Number(krzesiwo*1);
  addSum1Krzesiwo3.innerHTML = sum1Krzesiwo3+"x";
  /**KWAS SIARKOWY*/
  var kwasSiarkowy = Number(calcKwasSiarkowy.value) || 0;
  var sum1KwasSiarkowy1 = Number(kwasSiarkowy*1);
  addSum1KwasSiarkowy1.innerHTML = sum1KwasSiarkowy1+"x";
  var sum1KwasSiarkowy2 = Number(kwasSiarkowy*1);
  addSum1KwasSiarkowy2.innerHTML = sum1KwasSiarkowy2+"x";
  /**LEGENDARNE ANTIDOTUM*/
  var antidotum = Number(calcAntidotum.value) || 0;
  var sum5Antidotum1 = Number(antidotum*5);
  addSum5Antidotum1.innerHTML = sum5Antidotum1+"x";
  var sum4Antidotum2 = Number(antidotum*4);
  addSum4Antidotum2.innerHTML = sum4Antidotum2+"x";
  var sum4Antidotum3 = Number(antidotum*4);
  addSum4Antidotum3.innerHTML = sum4Antidotum3+"x";
  var sum1Antidotum4 = Number(antidotum*1);
  addSum1Antidotum4.innerHTML = sum1Antidotum4+"x";
  /**LEK NA ZOLADEK*/
  var lek = Number(calcLek.value) || 0;
  var sum2Lek1 = Number(lek*2);
  addSum2Lek1.innerHTML = sum2Lek1+"x";
  var sum1Lek2 = Number(lek*1);
  addSum1Lek2.innerHTML = sum1Lek2+"x";
  /**LIKIER ZIOLOWY*/
  var likierZiol = Number(calcLikier.value) || 0;
  var sum1Likier1 = Number(likierZiol*1);
  addSum1Likier1.innerHTML = sum1Likier1+"x";
  var sum1Likier2 = Number(likierZiol*1);
  addSum1Likier2.innerHTML = sum1Likier2+"x";
  /**LUG*/
  var lug = Number(calcLug.value) || 0;
  var sum3Lug1 = Number(lug*3);
  addSum3Lug1.innerHTML = sum3Lug1+"x";
  var sum1Lug2 = Number(lug*1);
  addSum1Lug2.innerHTML = sum1Lug2+"x";
  var sum1Lug3 = Number(lug*1);
  addSum1Lug3.innerHTML = sum1Lug3+"x";
  var sum1Lug4 = Number(lug*1);
  addSum1Lug4.innerHTML = sum1Lug4+"x";
  /**NAFTA*/
  var nafta = Number(calcNafta.value) || 0;
  var sum1Nafta1 = Number(nafta*1);
  addSum1Nafta1.innerHTML = sum1Nafta1+"x";
  var sum1Nafta2 = Number(nafta*1);
  addSum1Nafta2.innerHTML = sum1Nafta2+"x";
  var sum1Nafta3 = Number(nafta*1);
  addSum1Nafta3.innerHTML = sum1Nafta3+"x";
  /**NALEWKA*/
  var nalewka = Number(calcNalewka.value) || 0;
  var sum5Nalewka1 = Number(nalewka*5);
  addSum5Nalewka1.innerHTML = sum5Nalewka1+"x";
  var sum1Nalewka2 = Number(nalewka*1);
  addSum1Nalewka2.innerHTML = sum1Nalewka2+"x";
  var sum1Nalewka3 = Number(nalewka*1);
  addSum1Nalewka3.innerHTML = sum1Nalewka3+"x";
  /**NIEOSZLIFOWANY PIRYT*/
  var nieoszPiryt = Number(calcNieoszPiryt.value) || 0;
  var sum1NieoszPiryt1 = Number(nieoszPiryt*1);
  addSum1NieoszPiryt1.innerHTML = sum1NieoszPiryt1+"x";
  /**ODZYWKA DO WLOSOW*/
  var odzywka = Number(calcOdzywka.value) || 0;
  var sum1Odzywka1 = Number(odzywka*1);
  addSum1Odzywka1.innerHTML = sum1Odzywka1+"x";
  var sum1Odzywka2 = Number(odzywka*1);
  addSum1Odzywka2.innerHTML = sum1Odzywka2+"x";
  var sum1Odzywka3 = Number(odzywka*1);
  addSum1Odzywka3.innerHTML = sum1Odzywka3+"x";
  /**PANACEUM*/
  var panaceum = Number(calcPanaceum.value) || 0;
  var sum1Panaceum1 = Number(panaceum*1);
  addSum1Panaceum1.innerHTML = sum1Panaceum1+"x";
  var sum1Panaceum2 = Number(panaceum*1);
  addSum1Panaceum2.innerHTML = sum1Panaceum2+"x";
  var sum1Panaceum3 = Number(panaceum*1);
  addSum1Panaceum3.innerHTML = sum1Panaceum3+"x";
  /**PAPIER*/
  var papier = Number(calcPapier.value) || 0;
  var sum5Papier1 = Number(papier*5);
  addSum5Papier1.innerHTML = sum5Papier1+"x";
  var sum1Papier2 = Number(papier*1);
  addSum1Papier2.innerHTML = sum1Papier2+"x";
  /**PAPIEROS Z FILTREM*/
  var papieros = Number(calcPapieros.value) || 0;
  var sum1Papieros1 = Number(papieros*1);
  addSum1Papieros1.innerHTML = sum1Papieros1+"x";
  var sum1Papieros2 = Number(papieros*1);
  addSum1Papieros2.innerHTML = sum1Papieros2+"x";
  var sum1Papieros3 = Number(papieros*1);
  addSum1Papieros3.innerHTML = sum1Papieros3+"x";
  /**PROCH STRZELNICZY*/
  var proch = Number(calcProch.value) || 0;
  var sum3Proch1 = Number(proch*3);
  addSum3Proch1.innerHTML = sum3Proch1+"x";
  var sum3Proch2 = Number(proch*3);
  addSum3Proch2.innerHTML = sum3Proch2+"x";
  var sum3Proch3 = Number(proch*3);
  addSum3Proch3.innerHTML = sum3Proch3+"x";
  var sum2Proch4 = Number(proch*2);
  addSum2Proch4.innerHTML = sum2Proch4+"x";
  /**PRYMKA*/
  var prymka = Number(calcPrymka.value) || 0;
  var sum2Prymka1 = Number(prymka*2);
  addSum2Prymka1.innerHTML = sum2Prymka1+"x";
  var sum1Prymka2 = Number(prymka*1);
  addSum1Prymka2.innerHTML = sum1Prymka2+"x";
  var sum1Prymka3 = Number(prymka*1);
  addSum1Prymka3.innerHTML = sum1Prymka3+"x";
  /**REMEDIUM SILY*/
  var remedium = Number(calcRemedium.value) || 0;
  var sum2Remedium1 = Number(remedium*2);
  addSum2Remedium1.innerHTML = sum2Remedium1+"x";
  var sum1Remedium2 = Number(remedium*1);
  addSum1Remedium2.innerHTML = sum1Remedium2+"x";
  var sum1Remedium3 = Number(remedium*1);
  addSum1Remedium3.innerHTML = sum1Remedium3+"x";
  var sum1Remedium4 = Number(remedium*1);
  addSum1Remedium4.innerHTML = sum1Remedium4+"x";
  /**SIARKA*/
  var siarka = Number(calcSiarka.value) || 0;
  var sum1Siarka1 = Number(siarka*1);
  addSum1Siarka1.innerHTML = sum1Siarka1+"x";
  /**UZDRAWIAJACA MARIONETKA*/
  var marionetka = Number(calcMarionetka.value) || 0;
  var sum2Marionetka1 = Number(marionetka*2);
  addSum2Marionetka1.innerHTML = sum2Marionetka1+"x";
  var sum1Marionetka2 = Number(marionetka*1);
  addSum1Marionetka2.innerHTML = sum1Marionetka2+"x";
  var sum1Marionetka3 = Number(marionetka*1);
  addSum1Marionetka3.innerHTML = sum1Marionetka3+"x";
  var sum1Marionetka4 = Number(marionetka*1);
  addSum1Marionetka4.innerHTML = sum1Marionetka4+"x";
  /**WLOKNO LNU*/
  var wlokno = Number(calcWlokno.value) || 0;
  var sum3Wlokno1 = Number(wlokno*3);
  addSum3Wlokno1.innerHTML = sum3Wlokno1+"x";
  var sum2Wlokno2 = Number(wlokno*2);
  addSum2Wlokno2.innerHTML = sum2Wlokno2+"x";
  var sum2Wlokno3 = Number(wlokno*2);
  addSum2Wlokno3.innerHTML = sum2Wlokno3+"x";
  var sum1Wlokno4 = Number(wlokno*1);
  addSum1Wlokno4.innerHTML = sum1Wlokno4+"x";
  /**WODA ROZANA*/
  var wodaRozana = Number(calcWodaRozana.value) || 0;
  var sum2WodaRozana1 = Number(wodaRozana*2);
  addSum2WodaRozana1.innerHTML = sum2WodaRozana1+"x";
  var sum2WodaRozana2 = Number(wodaRozana*2);
  addSum2WodaRozana2.innerHTML = sum2WodaRozana2+"x";
  /**WYCIOR*/
  var wycior = Number(calcWycior.value) || 0;
  var sum1Wycior1 = Number(wycior*1);
  addSum1Wycior1.innerHTML = sum1Wycior1+"x";
  var sum1Wycior2 = Number(wycior*1);
  addSum1Wycior2.innerHTML = sum1Wycior2+"x";
  var sum1Wycior3 = Number(wycior*1);
  addSum1Wycior3.innerHTML = sum1Wycior3+"x";
  /**ZNAKOMITYTRUNEK*/
  var ztrunek = Number(calcZTrunek.value) || 0;
  var sum1ZTrunek1 = Number(ztrunek*1);
  addSum1ZTrunek1.innerHTML = sum1ZTrunek1+"x";
  var sum1ZTrunek2 = Number(ztrunek*1);
  addSum1ZTrunek2.innerHTML = sum1ZTrunek2+"x";
  var sum1ZTrunek3 = Number(ztrunek*1);
  addSum1ZTrunek3.innerHTML = sum1ZTrunek3+"x";
  /**ZYWICA*/
  var zywica = Number(calcZywica.value) || 0;
  var sum1Zywica1 = Number(zywica*1);
  addSum1Zywica1.innerHTML = sum1Zywica1+"x";
  var sum1Zywica2 = Number(zywica*1);
  addSum1Zywica2.innerHTML = sum1Zywica2+"x";
  
  /**NIEOSZLIFOWANY PIRYT*/
  var dodajPiryt = document.createElement("table");
  dodajPiryt.innerHTML = 
  '<table><tr><td class="ilosc" id="nieosz-piryt1_add-sum1">'+sum1NieoszPiryt1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/1d/Piryt.png/33px-Piryt.png" title="Piryt"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPiryt");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPiryt);
  if (sum1NieoszPiryt1===0) {
    parent_object.removeChild(dodajPiryt);
  }
  /**DYSK Z PIRYTU*/
  var dodajNieoszlifowanyPiryt = document.createElement("table");
  dodajNieoszlifowanyPiryt.innerHTML = 
  '<table><tr><td class="ilosc" id="dysk1_add-sum1">'+sum1Dysk1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/46/NieoszlifowanyPirytRzemioslo.png/33px-NieoszlifowanyPirytRzemioslo.png" title="Nieoszlifowany Piryt"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNieoszlifowanyPiryt");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNieoszlifowanyPiryt);
  if (sum1Dysk1===0) {
    parent_object.removeChild(dodajNieoszlifowanyPiryt);
  }
  
  /**AMULET*/
  var dodajDyskZPirytu = document.createElement("table");
  dodajDyskZPirytu.innerHTML = 
  '<table><tr><td class="ilosc" id="amulet1_add-sum1">'+sum1Amulet1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/a2/DyskZPirytuRzemioslo.png/33px-DyskZPirytuRzemioslo.png" title="Dysk z pirytu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDyskZPirytu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDyskZPirytu);
  if (sum1Amulet1===0) {
    parent_object.removeChild(dodajDyskZPirytu);
  }
  var dodajPioroKruka = document.createElement("table");
  dodajPioroKruka.innerHTML = 
  '<table><tr><td class="ilosc" id="amulet2_add-sum1">'+sum1Amulet2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/99/PioroKruka.png/33px-PioroKruka.png" title="Pióro kruka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPioroKruka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPioroKruka);
  if (sum1Amulet2===0) {
    parent_object.removeChild(dodajPioroKruka);
  }
  
  /**KRZESIWO*/
  var dodajPiryt = document.createElement("table");
  sum1Krzesiwo1 = sum1Krzesiwo1 + sum1NieoszPiryt1;
  dodajPiryt.innerHTML = 
  '<table><tr><td class="ilosc" id="krzesiwo1_add-sum1">'+sum1Krzesiwo1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/1d/Piryt.png/33px-Piryt.png" title="Piryt"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPiryt");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPiryt);
  if (sum1Krzesiwo1===0) {
    parent_object.removeChild(dodajPiryt);
  }
  var dodajKamienie = document.createElement("table");
  sum1Krzesiwo2 = sum1Krzesiwo2 + sum12FasPuszka1;
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="krzesiwo2_add-sum1">'+sum1Krzesiwo2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum1Krzesiwo2===0) {
    parent_object.removeChild(dodajKamienie);
  }
  var dodajBawelna = document.createElement("table");
  dodajBawelna.innerHTML = 
  '<table><tr><td class="ilosc" id="krzesiwo3_add-sum1">'+sum1Krzesiwo3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fb/Bawelna.png/33px-Bawelna.png" title="Bawełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBawelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBawelna);
  if (sum1Krzesiwo3===0) {
    parent_object.removeChild(dodajBawelna);
  }
  
  /**SIARKA*/
  var dodajRudaSiarki = document.createElement("table");
  dodajRudaSiarki.innerHTML = 
  '<table><tr><td class="ilosc" id="siarka1_add-sum1">'+sum1Siarka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/ec/RudaSiarki.png/33px-RudaSiarki.png" title="Ruda Siarki"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRudaSiarki");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRudaSiarki);
  if (sum1Siarka1===0) {
    parent_object.removeChild(dodajRudaSiarki);
  }
  
  /**ZYWICA*/
  var dodajPila = document.createElement("table");
  dodajPila.innerHTML = 
  '<table><tr><td class="ilosc" id="zywica1_add-sum1">'+sum1Zywica1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Pila.png/33px-Pila.png" title="Piła"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPila");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPila);
  if (sum1Zywica1===0) {
    parent_object.removeChild(dodajPila);
  }
  var dodajDzban = document.createElement("table");
  sum1Zywica2 = sum1Zywica2 + sum1Dzban1;
  dodajDzban.innerHTML = 
  '<table><tr><td class="ilosc" id="zywica2_add-sum1">'+sum1Zywica2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d9/Dzban.png/33px-Dzban.png" title="Dzban"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDzban");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDzban);
  if (sum1Zywica2===0) {
    parent_object.removeChild(dodajDzban);
  }
  
  /**PAPIEROS Z FILTREM*/
  var dodajLiscieTytoniu = document.createElement("table");
  sum1Papieros1 = sum1Papieros1 + sum4Kadzidlo1;
  dodajLiscieTytoniu.innerHTML = 
  '<table><tr><td class="ilosc" id="papieros1_add-sum1">'+sum1Papieros1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d5/LiscieTytoniu.png/33px-LiscieTytoniu.png" title="Liście tytoniu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLiscieTytoniu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLiscieTytoniu);
  if (sum1Papieros1===0) {
    parent_object.removeChild(dodajLiscieTytoniu);
  }
  var dodajWegiel = document.createElement("table");
  sum1Papieros2 = sum1Papieros2 + sum5Chili2;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="papieros2_add-sum1">'+sum1Papieros2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum1Papieros2===0) {
    parent_object.removeChild(dodajWegiel);
  }
  var dodajPlakat = document.createElement("table");
  dodajPlakat.innerHTML = 
  '<table><tr><td class="ilosc" id="papieros3_add-sum1">'+sum1Papieros3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/bd/Plakat.png/33px-Plakat.png" title="Plakat"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPlakat");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPlakat);
  if (sum1Papieros3===0) {
    parent_object.removeChild(dodajPlakat);
  }
  
  /**WYCIOR*/
  var dodajRopa = document.createElement("table");
  dodajRopa.innerHTML = 
  '<table><tr><td class="ilosc" id="wycior1_add-sum1">'+sum1Wycior1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/Ropa.png/33px-Ropa.png" title="Ropa"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRopa");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRopa);
  if (sum1Wycior1===0) {
    parent_object.removeChild(dodajRopa);
  }
  var dodajPioroKruka = document.createElement("table");
  sum1Wycior2 = sum1Wycior2 + sum1Amulet2;
  dodajPioroKruka.innerHTML = 
  '<table><tr><td class="ilosc" id="wycior2_add-sum1">'+sum1Wycior2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/99/PioroKruka.png/33px-PioroKruka.png" title="Pióro kruka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPioroKruka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPioroKruka);
  if (sum1Wycior2===0) {
    parent_object.removeChild(dodajPioroKruka);
  }
  var dodajSukno = document.createElement("table");
  dodajSukno.innerHTML = 
  '<table><tr><td class="ilosc" id="wycior3_add-sum1">'+sum1Wycior3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Sukno.png/33px-Sukno.png" title="Sukno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSukno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSukno);
  if (sum1Wycior3===0) {
    parent_object.removeChild(dodajSukno);
  }
  /**LEK NA ZOLADEK*/
  var dodajKrzesiwo = document.createElement("table");
  dodajKrzesiwo.innerHTML = 
  '<table><tr><td class="ilosc" id="lek1_add-sum2">'+sum2Lek1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8d/KrzesiwoRzemioslo.png/33px-KrzesiwoRzemioslo.png" title="Krzesiwo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKrzesiwo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKrzesiwo);
  if (sum2Lek1===0) {
    parent_object.removeChild(dodajKrzesiwo);
  }
  var dodajKreda = document.createElement("table");
  dodajKreda.innerHTML = 
  '<table><tr><td class="ilosc" id="lek2_add-sum1">'+sum1Lek2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/84/Kreda.png/33px-Kreda.png" title="Kreda"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKreda");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKreda);
  if (sum1Lek2===0) {
    parent_object.removeChild(dodajKreda);
  }
  /**KWAS SIARKOWY*/
  var dodajSiano = document.createElement("table");
  dodajSiano.innerHTML = 
  '<table><tr><td class="ilosc" id="kwas-siarkowy1_add-sum1">'+sum1KwasSiarkowy1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/06/Siano.png/33px-Siano.png" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum1KwasSiarkowy1===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajSiarka = document.createElement("table");
  dodajSiarka.innerHTML = 
  '<table><tr><td class="ilosc" id="kwas-siarkowy2_add-sum1">'+sum1KwasSiarkowy2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d4/SiarkaRzemioslo.png/33px-SiarkaRzemioslo.png" title="Siarka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiarka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiarka);
  if (sum1KwasSiarkowy2===0) {
    parent_object.removeChild(dodajSiarka);
  }
  
  /**ATRAMENT*/
  var dodajIndygo = document.createElement("table");
  dodajIndygo.innerHTML = 
  '<table><tr><td class="ilosc" id="atrament1_add-sum1">'+sum1Atrament1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/96/Indygo.png/33px-Indygo.png" title="Indygo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajIndygo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajIndygo);
  if (sum1Atrament1===0) {
    parent_object.removeChild(dodajIndygo);
  }
  var dodajWhiskey = document.createElement("table");
  sum1Atrament2 = sum1Atrament2 + sum6SuszMieso1;
  dodajWhiskey.innerHTML = 
  '<table><tr><td class="ilosc" id="atrament1_add-sum2">'+sum1Atrament2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Whiskey.png/33px-Whiskey.png" title="Whiskey"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajWhiskey");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWhiskey);
  if (sum1Atrament2===0) {
    parent_object.removeChild(dodajWhiskey);
  }
  
  /**NAFTA*/
  var dodajRopa = document.createElement("table");
  sum1Nafta1 = sum1Nafta1 + sum1Wycior1;
  dodajRopa.innerHTML = 
  '<table><tr><td class="ilosc" id="nafta1_add-sum1">'+sum1Nafta1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/Ropa.png/33px-Ropa.png" title="Ropa"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRopa");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRopa);
  if (sum1Nafta1===0) {
    parent_object.removeChild(dodajRopa);
  }
  var dodajSiano = document.createElement("table");
  sum1Nafta2 = sum1Nafta2 + sum1KwasSiarkowy1;
  dodajSiano.innerHTML = 
  '<table><tr><td class="ilosc" id="nafta2_add-sum1">'+sum1Nafta2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/06/Siano.png/33px-Siano.png" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum1Nafta2===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajNieoszlifowanyPiryt = document.createElement("table");
  sum1Nafta3 = sum1Nafta3 + sum1Dysk1;
  dodajNieoszlifowanyPiryt.innerHTML = 
  '<table><tr><td class="ilosc" id="nafta3_add-sum1">'+sum1Nafta3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/46/NieoszlifowanyPirytRzemioslo.png/33px-NieoszlifowanyPirytRzemioslo.png" title="Nieoszlifowany Piryt"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNieoszlifowanyPiryt");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNieoszlifowanyPiryt);
  if (sum1Nafta3===0) {
    parent_object.removeChild(dodajNieoszlifowanyPiryt);
  }
  
  /**BOZEK*/
  var dodajZabKojota = document.createElement("table");
  dodajZabKojota.innerHTML = 
  '<table><tr><td class="ilosc" id="bozek1_add-sum2">'+sum2Bozek1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/2c/ZabKojota.png/33px-ZabKojota.png" title="Ząb kojota"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZabKojota");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZabKojota);
  if (sum2Bozek1===0) {
    parent_object.removeChild(dodajZabKojota);
  }
  var dodajNieoszlifowanyPiryt = document.createElement("table");
  sum2Bozek2 = sum1Nafta3 + sum2Bozek2;
  dodajNieoszlifowanyPiryt.innerHTML = 
  '<table><tr><td class="ilosc" id="bozek2_add-sum2">'+sum2Bozek2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/46/NieoszlifowanyPirytRzemioslo.png/33px-NieoszlifowanyPirytRzemioslo.png" title="Nieoszlifowany Piryt"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNieoszlifowanyPiryt");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNieoszlifowanyPiryt);
  if (sum2Bozek2===0) {
    parent_object.removeChild(dodajNieoszlifowanyPiryt);
  }
  var dodajKrzesiwo = document.createElement("table");
  sum1Bozek3 = sum1Bozek3 + sum2Lek1;
  dodajKrzesiwo.innerHTML = 
  '<table><tr><td class="ilosc" id="bozek3_add-sum1">'+sum1Bozek3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8d/KrzesiwoRzemioslo.png/33px-KrzesiwoRzemioslo.png" title="Krzesiwo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKrzesiwo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKrzesiwo);
  if (sum1Bozek3===0) {
    parent_object.removeChild(dodajKrzesiwo);
  }
  
  /**DESTYLAT*/
  var dodajDrewno = document.createElement("table");
  sum3Destylat1 = sum3Destylat1 + sum1Wegiel2;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="destylat1_add-sum3">'+sum3Destylat1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum3Destylat1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajManierka = document.createElement("table");
  sum1Destylat2 = sum1Destylat2 + sum1Trunek3;
  dodajManierka.innerHTML = 
  '<table><tr><td class="ilosc" id="destylat2_add-sum1">'+sum1Destylat2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/69/ManierkaRzemioslo.png/33px-ManierkaRzemioslo.png" title="Manierka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajManierka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajManierka);
  if (sum1Destylat2===0) {
    parent_object.removeChild(dodajManierka);
  }
  var dodajRopa = document.createElement("table");
  sum1Destylat3 = sum1Nafta1 + sum1Destylat3;
  dodajRopa.innerHTML = 
  '<table><tr><td class="ilosc" id="destylat3_add-sum1">'+sum1Destylat3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/Ropa.png/33px-Ropa.png" title="Ropa"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRopa");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRopa);
  if (sum1Destylat3===0) {
    parent_object.removeChild(dodajRopa);
  }
  
  /**BIMBER*/
  var dodajZboze = document.createElement("table");
  sum4Bimber1 = sum4Bimber1 + sum1Zacier1;
  dodajZboze.innerHTML = 
  '<table><tr><td class="ilosc" id="zacier1_add-sum1">'+sum4Bimber1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/0c/Zboze.png/33px-Zboze.png" title="Zboże" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZboze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZboze);
  if (sum4Bimber1===0) {
    parent_object.removeChild(dodajZboze);
  }
  var dodajZiemniak = document.createElement("table");
  sum3Bimber2 = sum3Bimber2 + sum1Pierog2;
  dodajZiemniak.innerHTML = 
  '<table><tr><td class="ilosc" id="pierog2_add-sum1">'+sum3Bimber2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9e/Ziemniak.png/33px-Ziemniak.png" title="Ziemniak"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZiemniak");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZiemniak);
  if (sum3Bimber2===0) {
    parent_object.removeChild(dodajZiemniak);
  }
  var dodajCukier = document.createElement("table");
  sum2Bimber3 = sum2Bimber3 + sum2SokKaktus1;
  dodajCukier.innerHTML = 
  '<table><tr><td class="ilosc" id="kaw-tortu2_add-sum1">'+sum2Bimber3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/eb/Cukier.png/33px-Cukier.png" title="Cukier"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCukier");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCukier);
  if (sum2Bimber3===0) {
    parent_object.removeChild(dodajCukier);
  }
  var dodajKrzesiwo = document.createElement("table");
  sum1Bimber4 = sum1Bozek3 + sum1Bimber4;
  dodajKrzesiwo.innerHTML = 
  '<table><tr><td class="ilosc" id="bozek3_add-sum1">'+sum1Bimber4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8d/KrzesiwoRzemioslo.png/33px-KrzesiwoRzemioslo.png" title="Krzesiwo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKrzesiwo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKrzesiwo);
  if (sum1Bimber4===0) {
    parent_object.removeChild(dodajKrzesiwo);
  }
  
  /**HERBATA*/
  var dodajJagody = document.createElement("table");
  sum3Herbata1 = sum3Herbata1 + sum2Kadzidlo2;
  dodajJagody.innerHTML = 
  '<table><tr><td class="ilosc" id="herbata1_add-sum3">'+sum3Herbata1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl//images/thumb/1/18/Jagody.png/33px-Jagody.png" title="Jagody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajJagody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajJagody);
  if (sum3Herbata1===0) {
    parent_object.removeChild(dodajJagody);
  }
  var dodajDzbanWody = document.createElement("table");
  sum1Herbata2 = sum1Herbata2 + sum1MiodPitny3;
  dodajDzbanWody.innerHTML = 
  '<table><tr><td class="ilosc" id="herbata2_add-sum1">'+sum1Herbata2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/52/DzbanWody.png/33px-DzbanWody.png" title="Dzban wody" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDzbanWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDzbanWody);
  if (sum1Herbata2===0) {
    parent_object.removeChild(dodajDzbanWody);
  }
  
  /**PRYMKA*/
  var dodajDrewno = document.createElement("table");
  sum2Prymka1 = sum2Prymka1 + sum3Destylat1;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="prymka1_add-sum2">'+sum2Prymka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum2Prymka1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajLiscieTytoniu = document.createElement("table");
  sum1Prymka2 = sum1Prymka2 + sum1Papieros1;
  dodajLiscieTytoniu.innerHTML = 
  '<table><tr><td class="ilosc" id="prymka2_add-sum1">'+sum1Prymka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d5/LiscieTytoniu.png/33px-LiscieTytoniu.png" title="Liście tytoniu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLiscieTytoniu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLiscieTytoniu);
  if (sum1Prymka2===0) {
    parent_object.removeChild(dodajLiscieTytoniu);
  }
  var dodajZywica = document.createElement("table");
  dodajZywica.innerHTML = 
  '<table><tr><td class="ilosc" id="prymka3_add-sum1">'+sum1Prymka3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/ZywicaRzemioslo.png/33px-ZywicaRzemioslo.png" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum1Prymka3===0) {
    parent_object.removeChild(dodajZywica);
  }
  
  /**NALEWKA*/
  var dodajPomarancza = document.createElement("table");
  sum5Nalewka1 = sum5Nalewka1 + sum2SokKaktus2;
  dodajPomarancza.innerHTML = 
  '<table><tr><td class="ilosc" id="nalewka1_add-sum5">'+sum5Nalewka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7f/Pomarancza.png/33px-Pomarancza.png" title="Pomarańcza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPomarancza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPomarancza);
  if (sum5Nalewka1===0) {
    parent_object.removeChild(dodajPomarancza);
  }
  var dodajTequila = document.createElement("table");
  sum1Nalewka2 = sum1Nalewka2 + sum2Trunek1;
  dodajTequila.innerHTML = 
  '<table><tr><td class="ilosc" id="nalewka2_add-sum1">'+sum1Nalewka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9f/Tequila.png/33px-Tequila.png" title="Tequila"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajTequila");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajTequila);
  if (sum1Nalewka2===0) {
    parent_object.removeChild(dodajTequila);
  }
  var dodajDeskaDoKrojenia = document.createElement("table");
  sum1Nalewka3 = sum1SiekaneM3 + sum1Nalewka3;
  dodajDeskaDoKrojenia.innerHTML = 
  '<table><tr><td class="ilosc" id="nalewka3_add-sum1">'+sum1Nalewka3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/57/DeskaDoKrojeniaRzemioslo.png/33px-DeskaDoKrojeniaRzemioslo.png" title="Deska do krojenia"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDeskaDoKrojenia");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDeskaDoKrojenia);
  if (sum1Nalewka3===0) {
    parent_object.removeChild(dodajDeskaDoKrojenia);
  }
  
  /**BATERIA*/
  var dodajPomarancza = document.createElement("table");
  sum1Bateria1 = sum1Bateria1 + sum5Nalewka1;
  dodajPomarancza.innerHTML = 
  '<table><tr><td class="ilosc" id="bateria1_add-sum1">'+sum1Bateria1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7f/Pomarancza.png/33px-Pomarancza.png" title="Pomarańcza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPomarancza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPomarancza);
  if (sum1Bateria1===0) {
    parent_object.removeChild(dodajPomarancza);
  }
  var dodajSzpulkaDrutu = document.createElement("table");
  dodajSzpulkaDrutu.innerHTML = 
  '<table><tr><td class="ilosc" id="bateria2_add-sum1">'+sum1Bateria2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/SzpulkaDrutu.png/33px-SzpulkaDrutu.png" title="Szpulka drutu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzpulkaDrutu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzpulkaDrutu);
  if (sum1Bateria2===0) {
    parent_object.removeChild(dodajSzpulkaDrutu);
  }
  
  /**LUG*/
  var dodajDrewno = document.createElement("table");
  sum3Lug1 = sum2Prymka1 + sum3Lug1;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="lug1_add-sum3">'+sum3Lug1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum3Lug1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajWegielDrzewny = document.createElement("table");
  sum1Lug2 = sum1Lug2 + sum4Zeberka3;
  dodajWegielDrzewny.innerHTML = 
  '<table><tr><td class="ilosc" id="lug2_add-sum1">'+sum1Lug2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/78/WegielDrzewny.png/33px-WegielDrzewny.png" title="Węgiel drzewny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegielDrzewny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegielDrzewny);
  if (sum1Lug2===0) {
    parent_object.removeChild(dodajWegielDrzewny);
  }
  var dodajNieoszlifowanyPiryt = document.createElement("table");
  sum1Lug3 = sum1Lug3 + sum2Bozek2;
  dodajNieoszlifowanyPiryt.innerHTML = 
  '<table><tr><td class="ilosc" id="lug3_add-sum1">'+sum1Lug3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/46/NieoszlifowanyPirytRzemioslo.png/33px-NieoszlifowanyPirytRzemioslo.png" title="Nieoszlifowany Piryt"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNieoszlifowanyPiryt");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNieoszlifowanyPiryt);
  if (sum1Lug3===0) {
    parent_object.removeChild(dodajNieoszlifowanyPiryt);
  }
  var dodajSzklankaWody = document.createElement("table");
  sum1Lug4 = sum1Lug4 + sum1Dzban2;
  dodajSzklankaWody.innerHTML = 
  '<table><tr><td class="ilosc" id="lug4_add-sum1">'+sum1Lug4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/cd/SzklankaWody.png/33px-SzklankaWody.png" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum1Lug4===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  
  /**LIKIER ZIOLOWY*/
  var dodajKwiatLotosu = document.createElement("table");
  dodajKwiatLotosu.innerHTML = 
  '<table><tr><td class="ilosc" id="likier-ziol1_add-sum1">'+sum1Likier1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/f8/KwiatLotosu.png/33px-KwiatLotosu.png" title="Kwiat lotosu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKwiatLotosu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKwiatLotosu);
  if (sum1Likier1===0) {
    parent_object.removeChild(dodajKwiatLotosu);
  }
  var dodajSzklankaWody = document.createElement("table");
  sum1Likier2 = sum1Likier2 + sum1Lug4;
  dodajSzklankaWody.innerHTML = 
  '<table><tr><td class="ilosc" id="likier-ziol2_add-sum1">'+sum1Likier2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/cd/SzklankaWody.png/33px-SzklankaWody.png" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum1Likier2===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  
  /**PAPIER*/
  var dodajGazeta = document.createElement("table");
  sum5Papier1 = sum5Papier1 + sum1Obiad3;
  dodajGazeta.innerHTML = 
  '<table><tr><td class="ilosc" id="papier1_add-sum5">'+sum5Papier1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7f/Gazeta.png/33px-Gazeta.png" title="Gazeta"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajGazeta");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGazeta);
  if (sum5Papier1===0) {
    parent_object.removeChild(dodajGazeta);
  }
  var dodajDzbanWody = document.createElement("table");
  sum1Papier2 = sum1Papier2 + sum1Herbata2;
  dodajDzbanWody.innerHTML = 
  '<table><tr><td class="ilosc" id="papier2_add-sum1">'+sum1Papier2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/52/DzbanWody.png/33px-DzbanWody.png" title="Dzban wody" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDzbanWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDzbanWody);
  if (sum1Papier2===0) {
    parent_object.removeChild(dodajDzbanWody);
  }
  
  /**ATRAMENT SYMPATYCZNY*/
  var dodajLaskaCeremonialna = document.createElement("table");
  dodajLaskaCeremonialna.innerHTML = 
  '<table><tr><td class="ilosc" id="atrament-symp1_add-sum1">'+sum1AtramentS1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/af/LaskaCeremonialna.png/33px-LaskaCeremonialna.png" title="Laska ceremonialna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLaskaCeremonialna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLaskaCeremonialna);
  if (sum1AtramentS1===0) {
    parent_object.removeChild(dodajLaskaCeremonialna);
  }
  var dodajAtrament = document.createElement("table");
  dodajAtrament.innerHTML = 
  '<table><tr><td class="ilosc" id="atrament-symp2_add-sum1">'+sum1AtramentS2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/26/AtramentRzemioslo.png/33px-AtramentRzemioslo.png" title="Atrament"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajAtrament");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajAtrament);
  if (sum1AtramentS2===0) {
    parent_object.removeChild(dodajAtrament);
  }
  var dodajPapier = document.createElement("table");
  dodajPapier.innerHTML = 
  '<table><tr><td class="ilosc" id="atrament-symp3_add-sum1">'+sum1AtramentS3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ad/PapierRzemioslo.png/33px-PapierRzemioslo.png" title="Papier"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPapier");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPapier);
  if (sum1AtramentS3===0) {
    parent_object.removeChild(dodajPapier);
  }
  
  /**CYRKIEL*/
  var dodajPalDrewniany = document.createElement("table");
  sum3Cyrkiel1 = sum3Cyrkiel1 + sum1Dorsz2;
  dodajPalDrewniany.innerHTML = 
  '<table><tr><td class="ilosc" id="cyrkiel1_add-sum3">'+sum3Cyrkiel1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/2a/PalDrewniany.png/33px-PalDrewniany.png" title="Pal drewniany"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPalDrewniany");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPalDrewniany);
  if (sum3Cyrkiel1===0) {
    parent_object.removeChild(dodajPalDrewniany);
  }
  var dodajLasso = document.createElement("table");
  dodajLasso.innerHTML = 
  '<table><tr><td class="ilosc" id="cyrkiel2_add-sum2">'+sum2Cyrkiel2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/ea/Lasso.png/33px-Lasso.png" title="Lasso"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLasso");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLasso);
  if (sum2Cyrkiel2===0) {
    parent_object.removeChild(dodajLasso);
  }
  
  /**PROCH STRZELNICZY*/
  var dodajLuska = document.createElement("table");
  dodajLuska.innerHTML = 
  '<table><tr><td class="ilosc" id="cyrkiel2_add-sum2">'+sum3Proch1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/6b/Luska.png/33px-Luska.png" title="Łuska"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLuska");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLuska);
  if (sum3Proch1===0) {
    parent_object.removeChild(dodajLuska);
  }
  var dodajSaletra = document.createElement("table");
  sum3Proch2 = sum3Proch2 + sum4SuszMieso3;
  dodajSaletra.innerHTML = 
  '<table><tr><td class="ilosc" id="susz-mieso3_add-sum4">'+sum3Proch2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/24/Saletra.png/33px-Saletra.png" title="Saletra" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSaletra");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSaletra);
  if (sum3Proch2===0) {
    parent_object.removeChild(dodajSaletra);
  }
  var dodajKwasSiarkowy = document.createElement("table");
  dodajKwasSiarkowy.innerHTML = 
  '<table><tr><td class="ilosc" id="cyrkiel2_add-sum2">'+sum3Proch3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e6/KwasSiarkowyRzemioslo.png/33px-KwasSiarkowyRzemioslo.png" title="Kwas siarkowy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKwasSiarkowy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKwasSiarkowy);
  if (sum3Proch3===0) {
    parent_object.removeChild(dodajKwasSiarkowy);
  }
  var dodajNafta = document.createElement("table");
  dodajNafta.innerHTML = 
  '<table><tr><td class="ilosc" id="cyrkiel2_add-sum2">'+sum2Proch4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/45/NaftaRzemioslo.png/33px-NaftaRzemioslo.png" title="Nafta"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNafta");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNafta);
  if (sum2Proch4===0) {
    parent_object.removeChild(dodajNafta);
  }
  
  /**WLOKNO LNU*/
  var dodajGwozdzie = document.createElement("table");
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc" id="wlokno-lnu1_add-sum3">'+sum3Wlokno1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e1/Gwozdzie.png/33px-Gwozdzie.png" title="Gwoździe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajGwozdzie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGwozdzie);
  if (sum3Wlokno1===0) {
    parent_object.removeChild(dodajGwozdzie);
  }
  var dodajSzklankaWody = document.createElement("table");
  sum2Wlokno2 = sum1Likier2 + sum2Wlokno2;
  dodajSzklankaWody.innerHTML = 
  '<table><tr><td class="ilosc" id="wlokno-lnu2_add-sum2">'+sum2Wlokno2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/cd/SzklankaWody.png/33px-SzklankaWody.png" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum2Wlokno2===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  var dodajSiano = document.createElement("table");
  sum2Wlokno3 = sum1Nafta2 + sum2Wlokno3;
  dodajSiano.innerHTML = 
  '<table><tr><td class="ilosc" id="wlokno-lnu3_add-sum2">'+sum2Wlokno3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/06/Siano.png/33px-Siano.png" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum2Wlokno3===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajWycior = document.createElement("table");
  dodajWycior.innerHTML = 
  '<table><tr><td class="ilosc" id="wlokno-lnu4_add-sum1">'+sum1Wlokno4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/1f/WyciorRzemioslo.png/33px-WyciorRzemioslo.png" title="Wycior"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWycior");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWycior);
  if (sum1Wlokno4===0) {
    parent_object.removeChild(dodajWycior);
  }
  
  /**WODA ROZANA*/
  var dodajRoza = document.createElement("table");
  sum2WodaRozana1 = sum2WodaRozana1 + sum1Miod2;
  dodajRoza.innerHTML = 
  '<table><tr><td class="ilosc" id="woda-rozana1_add-sum2">'+sum2WodaRozana1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ab/Roza.png/33px-Roza.png" title="Róża"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRoza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRoza);
  if (sum2WodaRozana1===0) {
    parent_object.removeChild(dodajRoza);
  }
  var dodajWhiskey = document.createElement("table");
  sum2WodaRozana2 = sum2WodaRozana2 + sum1Atrament2;
  dodajWhiskey.innerHTML = 
  '<table><tr><td class="ilosc" id="woda-rozana2_add-sum2">'+sum2WodaRozana2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Whiskey.png/33px-Whiskey.png" title="Whiskey"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajWhiskey");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWhiskey);
  if (sum2WodaRozana2===0) {
    parent_object.removeChild(dodajWhiskey);
  }
  
  /**PANACEUM*/
  var dodajRudaSiarki = document.createElement("table");
  sum1Panaceum1 = sum1Panaceum1 + sum1Siarka1;
  dodajRudaSiarki.innerHTML = 
  '<table><tr><td class="ilosc" id="panaceum1_add-sum1">'+sum1Panaceum1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/ec/RudaSiarki.png/33px-RudaSiarki.png" title="Ruda Siarki"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRudaSiarki");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRudaSiarki);
  if (sum1Panaceum1===0) {
    parent_object.removeChild(dodajRudaSiarki);
  }
  var dodajSkoraWeza = document.createElement("table");
  dodajSkoraWeza.innerHTML = 
  '<table><tr><td class="ilosc" id="panaceum2_add-sum1">'+sum1Panaceum2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ac/SkoraWeza.png/33px-SkoraWeza.png" title="Skóra węża"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraWeza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraWeza);
  if (sum1Panaceum2===0) {
    parent_object.removeChild(dodajSkoraWeza);
  }
  var dodajLug = document.createElement("table");
  dodajLug.innerHTML = 
  '<table><tr><td class="ilosc" id="panaceum3_add-sum1">'+sum1Panaceum3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9f/LugRzemioslo.png/33px-LugRzemioslo.png" title="Ług"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLug");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLug);
  if (sum1Panaceum3===0) {
    parent_object.removeChild(dodajLug);
  }
  
  /**REMEDIUM SILY*/
  var dodajSkoraAligatora = document.createElement("table");
  dodajSkoraAligatora.innerHTML = 
  '<table><tr><td class="ilosc" id="remedium1_add-sum2">'+sum2Remedium1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7d/SkoraAligatora.png/33px-SkoraAligatora.png" title="Skóra aligatora"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraAligatora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraAligatora);
  if (sum2Remedium1===0) {
    parent_object.removeChild(dodajSkoraAligatora);
  }
  var dodajNasiona = document.createElement("table");
  dodajNasiona.innerHTML = 
  '<table><tr><td class="ilosc" id="remedium2_add-sum1">'+sum1Remedium2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/ea/Nasiona.png/33px-Nasiona.png" title="Nasiona"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNasiona");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNasiona);
  if (sum1Remedium2===0) {
    parent_object.removeChild(dodajNasiona);
  }
  var dodajBimber = document.createElement("table");
  dodajBimber.innerHTML = 
  '<table><tr><td class="ilosc" id="remedium3_add-sum1">'+sum1Remedium3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/37/BimberRzemioslo.png/33px-BimberRzemioslo.png" title="Bimber"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBimber");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBimber);
  if (sum1Remedium3===0) {
    parent_object.removeChild(dodajBimber);
  }
  var dodajGumaDoZucia = document.createElement("table");
  dodajGumaDoZucia.innerHTML = 
  '<table><tr><td class="ilosc" id="remedium4_add-sum1">'+sum1Remedium4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/0c/GumaDoZuciaRzemioslo.png/33px-GumaDoZuciaRzemioslo.png" title="Guma do żucia"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajGumaDoZucia");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGumaDoZucia);
  if (sum1Remedium4===0) {
    parent_object.removeChild(dodajGumaDoZucia);
  }
  
  /**ODZYWKA DO WLOSOW*/
  var dodajSkoraPumy = document.createElement("table");
  dodajSkoraPumy.innerHTML = 
  '<table><tr><td class="ilosc" id="odzywka1_add-sum1">'+sum1Odzywka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/ff/SkoraPumy.png/33px-SkoraPumy.png" title="Skóra pumy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraPumy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraPumy);
  if (sum1Odzywka1===0) {
    parent_object.removeChild(dodajSkoraPumy);
  }
  var dodajBateria = document.createElement("table");
  dodajBateria.innerHTML = 
  '<table><tr><td class="ilosc" id="odzywka2_add-sum1">'+sum1Odzywka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/ef/BateriaRzemioslo.png/33px-BateriaRzemioslo.png" title="Bateria"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBateria");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBateria);
  if (sum1Odzywka2===0) {
    parent_object.removeChild(dodajBateria);
  }
  var dodajNafta = document.createElement("table");
  sum1Odzywka3 = sum1Odzywka3 + sum2Proch4;
  dodajNafta.innerHTML = 
  '<table><tr><td class="ilosc" id="odzywka3_add-sum1">'+sum1Odzywka3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/45/NaftaRzemioslo.png/33px-NaftaRzemioslo.png" title="Nafta"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNafta");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNafta);
  if (sum1Odzywka3===0) {
    parent_object.removeChild(dodajNafta);
  }
  
  /**ZNAKOMITY TRUNEK*/
  var dodajDzban = document.createElement("table");
  sum1ZTrunek1 = sum1ZTrunek1 + sum1Zywica2;
  dodajDzban.innerHTML = 
  '<table><tr><td class="ilosc" id="znakomity-trunek1_add-sum1">'+sum1ZTrunek1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d9/Dzban.png/33px-Dzban.png" title="Dzban"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDzban");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDzban);
  if (sum1ZTrunek1===0) {
    parent_object.removeChild(dodajDzban);
  }
  var dodajLikierZiolowy = document.createElement("table");
  dodajLikierZiolowy.innerHTML = 
  '<table><tr><td class="ilosc" id="znakomity-trunek2_add-sum1">'+sum1ZTrunek2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/19/LikierZiolowyRzemioslo.png/33px-LikierZiolowyRzemioslo.png" title="Likier ziołowy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLikierZiolowy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLikierZiolowy);
  if (sum1ZTrunek2===0) {
    parent_object.removeChild(dodajLikierZiolowy);
  }
  var dodajBimber = document.createElement("table");
  sum1ZTrunek3 = sum1ZTrunek3 + sum1Remedium3;
  dodajBimber.innerHTML = 
  '<table><tr><td class="ilosc" id="znakomity-trunek3_add-sum1">'+sum1ZTrunek3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/37/BimberRzemioslo.png/33px-BimberRzemioslo.png" title="Bimber"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBimber");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBimber);
  if (sum1ZTrunek3===0) {
    parent_object.removeChild(dodajBimber);
  }
  
  /**UZDRAWIAJACA MARIONETKA*/
  var dodajRzemien = document.createElement("table");
  dodajRzemien.innerHTML = 
  '<table><tr><td class="ilosc" id="marionetka1_add-sum2">'+sum2Marionetka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/f9/RzemienRzemioslo.png/33px-RzemienRzemioslo.png" title="Rzemień"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRzemien");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRzemien);
  if (sum2Marionetka1===0) {
    parent_object.removeChild(dodajRzemien);
  }
  var dodajWloknoLnu = document.createElement("table");
  dodajWloknoLnu.innerHTML = 
  '<table><tr><td class="ilosc" id="marionetka2_add-sum1">'+sum1Marionetka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/95/WloknoLnuRzemioslo.png/33px-WloknoLnuRzemioslo.png" title="Włókno lnu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWloknoLnu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWloknoLnu);
  if (sum1Marionetka2===0) {
    parent_object.removeChild(dodajWloknoLnu);
  }
  var dodajZywica = document.createElement("table");
  sum1Marionetka3 = sum1Prymka3 + sum1Marionetka3;
  dodajZywica.innerHTML = 
  '<table><tr><td class="ilosc" id="marionetka3_add-sum1">'+sum1Marionetka3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/ZywicaRzemioslo.png/33px-ZywicaRzemioslo.png" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum1Marionetka3===0) {
    parent_object.removeChild(dodajZywica);
  }
  var dodajCyrkiel = document.createElement("table");
  dodajCyrkiel.innerHTML = 
  '<table><tr><td class="ilosc" id="marionetka4_add-sum1">'+sum1Marionetka4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/97/CyrkielRzemioslo.png/33px-CyrkielRzemioslo.png" title="Cyrkiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCyrkiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCyrkiel);
  if (sum1Marionetka4===0) {
    parent_object.removeChild(dodajCyrkiel);
  }
  
  /**BLYSZCZACA MIKSTURA*/
  var dodajKadzidlo = document.createElement("table");
  dodajKadzidlo.innerHTML = 
  '<table><tr><td class="ilosc" id="mikstura1_add-sum3">'+sum3Mikstura1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/68/KadzidloRzemioslo.png/33px-KadzidloRzemioslo.png" title="Kadzidło"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKadzidlo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKadzidlo);
  if (sum3Mikstura1===0) {
    parent_object.removeChild(dodajKadzidlo);
  }
  var dodajRopa = document.createElement("table");
  sum3Mikstura2 = sum3Mikstura2 + sum1Destylat3;
  dodajRopa.innerHTML = 
  '<table><tr><td class="ilosc" id="mikstura2_add-sum3">'+sum3Mikstura2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/Ropa.png/33px-Ropa.png" title="Ropa"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRopa");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRopa);
  if (sum3Mikstura2===0) {
    parent_object.removeChild(dodajRopa);
  }
  var dodajKwiatLotosu = document.createElement("table");
  sum2Mikstura3 = sum2Mikstura3 + sum1Likier1;
  dodajKwiatLotosu.innerHTML = 
  '<table><tr><td class="ilosc" id="mikstura3_add-sum2">'+sum2Mikstura3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/f8/KwiatLotosu.png/33px-KwiatLotosu.png" title="Kwiat lotosu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKwiatLotosu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKwiatLotosu);
  if (sum2Mikstura3===0) {
    parent_object.removeChild(dodajKwiatLotosu);
  }
  var dodajPanaceum = document.createElement("table");
  dodajPanaceum.innerHTML = 
  '<table><tr><td class="ilosc" id="mikstura4_add-sum1">'+sum1Mikstura4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/6b/PanaceumRzemioslo.png/33px-PanaceumRzemioslo.png" title="Panaceum"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPanaceum");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPanaceum);
  if (sum1Mikstura4===0) {
    parent_object.removeChild(dodajPanaceum);
  }
  
  /**LEGENDARNE ANTIDOTUM*/
  var dodajLikierZiolowy = document.createElement("table");
  sum5Antidotum1 = sum5Antidotum1 + sum1ZTrunek2;
  dodajLikierZiolowy.innerHTML = 
  '<table><tr><td class="ilosc" id="antidotum1_add-sum5">'+sum5Antidotum1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/19/LikierZiolowyRzemioslo.png/33px-LikierZiolowyRzemioslo.png" title="Likier ziołowy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLikierZiolowy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLikierZiolowy);
  if (sum5Antidotum1===0) {
    parent_object.removeChild(dodajLikierZiolowy);
  }
  var dodajBlyszczacaMikstura = document.createElement("table");
  dodajBlyszczacaMikstura.innerHTML = 
  '<table><tr><td class="ilosc" id="antidotum2_add-sum4">'+sum4Antidotum2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/23/BlyszczacaMiksturaRzemioslo.png/33px-BlyszczacaMiksturaRzemioslo.png" title="Błyszcząca mikstura"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBlyszczacaMikstura");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBlyszczacaMikstura);
  if (sum4Antidotum2===0) {
    parent_object.removeChild(dodajBlyszczacaMikstura);
  }
  var dodajWegiel = document.createElement("table");
  sum4Antidotum3 = sum4Antidotum3 + sum1Papieros2;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="antidotum3_add-sum4">'+sum4Antidotum3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum4Antidotum3===0) {
    parent_object.removeChild(dodajWegiel);
  }
  var dodajZabKobry = document.createElement("table");
  dodajZabKobry.innerHTML = 
  '<table><tr><td class="ilosc" id="antidotum4_add-sum1">'+sum1Antidotum4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/f2/ZabKobry.png/33px-ZabKobry.png" title="Ząb kobry"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZabKobry");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZabKobry);
  if (sum1Antidotum4===0) {
    parent_object.removeChild(dodajZabKobry);
  }
  
  /**DUCHOWA MUZYKA*/
  var dodajNuty = document.createElement("table");
  dodajNuty.innerHTML = 
  '<table><tr><td class="ilosc" id="duchowa-muzyka1_add-sum4">'+sum4DuchMuz1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/31/Nuty.png/33px-Nuty.png" title="Nuty"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNuty");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNuty);
  if (sum4DuchMuz1===0) {
    parent_object.removeChild(dodajNuty);
  }
  var dodajAtramentSympatyczny = document.createElement("table");
  dodajAtramentSympatyczny.innerHTML = 
  '<table><tr><td class="ilosc" id="duchowa-muzyka2_add-sum2">'+sum2DuchMuz2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/f9/AtramentSympatycznyRzemioslo.png/33px-AtramentSympatycznyRzemioslo.png" title="Atrament sympatyczny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajAtramentSympatyczny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajAtramentSympatyczny);
  if (sum2DuchMuz2===0) {
    parent_object.removeChild(dodajAtramentSympatyczny);
  }
  var dodajWyrokSmierci = document.createElement("table");
  dodajWyrokSmierci.innerHTML = 
  '<table><tr><td class="ilosc" id="duchowa-muzyka3_add-sum1">'+sum1DuchMuz3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/20/Wyroksmierci.png/33px-Wyroksmierci.png" title="Wyrok śmierci"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWyrokSmierci");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWyrokSmierci);
  if (sum1DuchMuz3===0) {
    parent_object.removeChild(dodajWyrokSmierci);
  }
  var dodajDestylat = document.createElement("table");
  dodajDestylat.innerHTML = 
  '<table><tr><td class="ilosc" id="duchowa-muzyka4_add-sum1">'+sum1DuchMuz4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7b/DestylatRzemioslo.png/33px-DestylatRzemioslo.png" title="Destylat"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDestylat");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDestylat);
  if (sum1DuchMuz4===0) {
    parent_object.removeChild(dodajDestylat);
  }
  var dodajWloknoLnu = document.createElement("table");
  sum1DuchMuz5 = sum1DuchMuz5 + sum1Marionetka2;
  dodajWloknoLnu.innerHTML = 
  '<table><tr><td class="ilosc" id="duchowa-muzyka5_add-sum1">'+sum1DuchMuz5+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/95/WloknoLnuRzemioslo.png/33px-WloknoLnuRzemioslo.png" title="Włókno lnu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWloknoLnu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWloknoLnu);
  if (sum1DuchMuz5===0) {
    parent_object.removeChild(dodajWloknoLnu);
  }
  
  /**RYMARZ polecenia ułozone są alfabetycznie---------------------*/
  /**ARRAS*/
  var arras = Number(calcArras.value) || 0;
  var sum2Arras1 = Number(arras*2);
  addSum2Arras1.innerHTML = sum2Arras1+"x";
  var sum1Arras2 = Number(arras*1);
  addSum1Arras2.innerHTML = sum1Arras2+"x";
  var sum1Arras3 = Number(arras*1);
  addSum1Arras3.innerHTML = sum1Arras3+"x";
  var sum1Arras4 = Number(arras*1);
  addSum1Arras4.innerHTML = sum1Arras4+"x";
  /**CZESC POWOZU*/
  var czescPowozu = Number(calcCzescPowozu.value) || 0;
  var sum3CzescPowozu1 = Number(czescPowozu*3);
  addSum3CzescPowozu1.innerHTML = sum3CzescPowozu1+"x";
  var sum2CzescPowozu2 = Number(czescPowozu*2);
  addSum2CzescPowozu2.innerHTML = sum2CzescPowozu2+"x";
  var sum1CzescPowozu3 = Number(czescPowozu*1);
  addSum1CzescPowozu3.innerHTML = sum1CzescPowozu3+"x";
  /**DERA*/
  var dera = Number(calcDera.value) || 0;
  var sum1Dera1 = Number(dera*1);
  addSum1Dera1.innerHTML = sum1Dera1+"x";
  var sum1Dera2 = Number(dera*1);
  addSum1Dera2.innerHTML = sum1Dera2+"x";
  var sum1Dera3 = Number(dera*1);
  addSum1Dera3.innerHTML = sum1Dera3+"x";
  /**DESKA DO KROJENIA*/
  var deska = Number(calcDeska.value) || 0;
  var sum1Deska1 = Number(deska*1);
  addSum1Deska1.innerHTML = sum1Deska1+"x";
  /**ELIKSIR CELNOSCI*/
  var eliksir = Number(calcEliksir.value) || 0;
  var sum2Eliksir1 = Number(eliksir*2);
  addSum2Eliksir1.innerHTML = sum2Eliksir1+"x";
  var sum1Eliksir2 = Number(eliksir*1);
  addSum1Eliksir2.innerHTML = sum1Eliksir2+"x";
  var sum1Eliksir3 = Number(eliksir*1);
  addSum1Eliksir3.innerHTML = sum1Eliksir3+"x";
  /**KOLO POWOZU*/
  var koloPowozu = Number(calcKoloPowozu.value) || 0;
  var sum3KoloPowozu1 = Number(koloPowozu*3);
  addSum3KoloPowozu1.innerHTML = sum3KoloPowozu1+"x";
  var sum2KoloPowozu2 = Number(koloPowozu*2);
  addSum2KoloPowozu2.innerHTML = sum2KoloPowozu2+"x";
  var sum1KoloPowozu3 = Number(koloPowozu*1);
  addSum1KoloPowozu3.innerHTML = sum1KoloPowozu3+"x";
  /**LECIUTKA SKÓRA*/
  var leciutkaSkora = Number(calcLeciutkaSkora.value) || 0;
  var sum5LeciutkaSkora1 = Number(leciutkaSkora*5);
  addSum5LeciutkaSkora1.innerHTML = sum5LeciutkaSkora1+"x";
  var sum3LeciutkaSkora2 = Number(leciutkaSkora*3);
  addSum3LeciutkaSkora2.innerHTML = sum3LeciutkaSkora2+"x";
  var sum3LeciutkaSkora3 = Number(leciutkaSkora*3);
  addSum3LeciutkaSkora3.innerHTML = sum3LeciutkaSkora3+"x";
  var sum1LeciutkaSkora4 = Number(leciutkaSkora*1);
  addSum1LeciutkaSkora4.innerHTML = sum1LeciutkaSkora4+"x"; 
  /**LEK SIODLA*/
  var lekSiodla = Number(calcLekSiodla.value) || 0;
  var sum1LekSiodla1 = Number(lekSiodla*1);
  addSum1LekSiodla1.innerHTML = sum1LekSiodla1+"x";
  var sum2LekSiodla2 = Number(lekSiodla*2);
  addSum2LekSiodla2.innerHTML = sum2LekSiodla2+"x";
  /**MANIERKA*/
  var manierka = Number(calcManierka.value) || 0;
  var sum1Manierka1 = Number(manierka*1);
  addSum1Manierka1.innerHTML = sum1Manierka1+"x";
  var sum1Manierka2 = Number(manierka*1);
  addSum1Manierka2.innerHTML = sum1Manierka2+"x";
  /**NAPRAWIONE SIODLO*/
  var naprSiodlo = Number(calcNaprSiodlo.value) || 0;
  var sum3NaprSiodlo1 = Number(naprSiodlo*3);
  addSum3NaprSiodlo1.innerHTML = sum3NaprSiodlo1+"x";
  var sum1NaprSiodlo2 = Number(naprSiodlo*1);
  addSum1NaprSiodlo2.innerHTML = sum1NaprSiodlo2+"x";
  var sum1NaprSiodlo3 = Number(naprSiodlo*1);
  addSum1NaprSiodlo3.innerHTML = sum1NaprSiodlo3+"x";
  var sum1NaprSiodlo4 = Number(naprSiodlo*1);
  addSum1NaprSiodlo4.innerHTML = sum1NaprSiodlo4+"x";
  /**NIEWYREGULOWANY KOMPAS*/
  var kompas = Number(calcKompas.value) || 0;
  var sum1Kompas1 = Number(kompas*1);
  addSum1Kompas1.innerHTML = sum1Kompas1+"x";
  var sum1Kompas2 = Number(kompas*1);
  addSum1Kompas2.innerHTML = sum1Kompas2+"x";
  /**NOTATNIK*/
  var notatnik = Number(calcNotatnik.value) || 0;
  var sum1Notatnik1 = Number(notatnik*1);
  addSum1Notatnik1.innerHTML = sum1Notatnik1+"x";
  var sum1Notatnik2 = Number(notatnik*1);
  addSum1Notatnik2.innerHTML = sum1Notatnik2+"x";
  /**OBDARTE SIODLO*/
  var obdarteSiodlo = Number(calcObdarteSiodlo.value) || 0;
  var sum1ObdarteSiodlo1 = Number(obdarteSiodlo*1);
  addSum1ObdarteSiodlo1.innerHTML = sum1ObdarteSiodlo1+"x";
  var sum1ObdarteSiodlo2 = Number(obdarteSiodlo*1);
  addSum1ObdarteSiodlo2.innerHTML = sum1ObdarteSiodlo2+"x";
  /**OSTROGI*/
  var ostrogi = Number(calcOstrogi.value) || 0;
  var sum3Ostrogi1 = Number(ostrogi*3);
  addSum3Ostrogi1.innerHTML = sum3Ostrogi1+"x";
  var sum1Ostrogi2 = Number(ostrogi*1);
  addSum1Ostrogi2.innerHTML = sum1Ostrogi2+"x";
  var sum1Ostrogi3 = Number(ostrogi*1);
  addSum1Ostrogi3.innerHTML = sum1Ostrogi3+"x";
  /**PASZA TRESCIWA*/
  var pasza = Number(calcPasza.value) || 0;
  var sum3Pasza1 = Number(pasza*3);
  addSum3Pasza1.innerHTML = sum3Pasza1+"x";
  var sum3Pasza2 = Number(pasza*3);
  addSum3Pasza2.innerHTML = sum3Pasza2+"x";
  var sum3Pasza3 = Number(pasza*3);
  addSum3Pasza3.innerHTML = sum3Pasza3+"x";
  var sum2Pasza4 = Number(pasza*2);
  addSum2Pasza4.innerHTML = sum2Pasza4+"x";
  /**PODKUCIE KOPYT*/
  var podkucie = Number(calcPodkucie.value) || 0;
  var sum2Podkucie1 = Number(podkucie*2);
  addSum2Podkucie1.innerHTML = sum2Podkucie1+"x";
  var sum1Podkucie2 = Number(podkucie*1);
  addSum1Podkucie2.innerHTML = sum1Podkucie2+"x";
  var sum1Podkucie3 = Number(podkucie*1);
  addSum1Podkucie3.innerHTML = sum1Podkucie3+"x";
  /**OZDOBA RYMARZ*/
  var ozdobaRym = Number(calcOzdobaRym.value) || 0;
  var sum1OzdobaRym1 = Number(ozdobaRym*1);
  addSum1OzdobaRym1.innerHTML = sum1OzdobaRym1+"x";
  var sum1OzdobaRym2 = Number(ozdobaRym*1);
  addSum1OzdobaRym2.innerHTML = sum1OzdobaRym2+"x";
  var sum1OzdobaRym3 = Number(ozdobaRym*1);
  addSum1OzdobaRym3.innerHTML = sum1OzdobaRym3+"x";
  /**POWOZ WYSCIGOWY*/
  var powoz = Number(calcPowoz.value) || 0;
  var sum1Powoz1 = Number(powoz*1);
  addSum1Powoz1.innerHTML = sum1Powoz1+"x";
  var sum1Powoz2 = Number(powoz*1);
  addSum1Powoz2.innerHTML = sum1Powoz2+"x";
  var sum1Powoz3 = Number(powoz*1);
  addSum1Powoz3.innerHTML = sum1Powoz3+"x";
  /**RZEMIEN*/
  var rzemien = Number(calcRzemien.value) || 0;
  var sum1Rzemien1 = Number(rzemien*1);
  addSum1Rzemien1.innerHTML = sum1Rzemien1+"x";
  var sum1Rzemien2 = Number(rzemien*1);
  addSum1Rzemien2.innerHTML = sum1Rzemien2+"x";
  /**SCHOWEK*/
  var schowek = Number(calcSchowek.value) || 0;
  var sum2Schowek1 = Number(schowek*2);
  addSum2Schowek1.innerHTML = sum2Schowek1+"x";
  var sum1Schowek2 = Number(schowek*1);
  addSum1Schowek2.innerHTML = sum1Schowek2+"x";
  var sum1Schowek3 = Number(schowek*1);
  addSum1Schowek3.innerHTML = sum1Schowek3+"x";
  var sum1Schowek4 = Number(schowek*1);
  addSum1Schowek4.innerHTML = sum1Schowek4+"x";
  /**SIODŁO PONY EXPRESS*/
  var siodloPony = Number(calcSiodloPony.value) || 0;
  var sum6SiodloPony1 = Number(siodloPony*6);
  addSum6SiodloPony1.innerHTML = sum6SiodloPony1+"x";
  var sum5SiodloPony2 = Number(siodloPony*5);
  addSum5SiodloPony2.innerHTML = sum5SiodloPony2+"x";
  var sum4SiodloPony3 = Number(siodloPony*4);
  addSum4SiodloPony3.innerHTML = sum4SiodloPony3+"x";
  var sum1SiodloPony4 = Number(siodloPony*1);
  addSum1SiodloPony4.innerHTML = sum1SiodloPony4+"x";
  /**SKORZANA TORBA*/
  var skorzTorba = Number(calcSkorzTorba.value) || 0;
  var sum1SkorzTorba1 = Number(skorzTorba*1);
  addSum1SkorzTorba1.innerHTML = sum1SkorzTorba1+"x";
  /**SKORZANE POKRYCIE*/
  var skorzPokrycie = Number(calcSkorzPokrycie.value) || 0;
  var sum1SkorzPokrycie1 = Number(skorzPokrycie*1);
  addSum1SkorzPokrycie1.innerHTML = sum1SkorzPokrycie1+"x";
  var sum1SkorzPokrycie2 = Number(skorzPokrycie*1);
  addSum1SkorzPokrycie2.innerHTML = sum1SkorzPokrycie2+"x";
  /**SPIWOR*/
  var spiwor = Number(calcSpiwor.value) || 0;
  var sum3Spiwor1 = Number(spiwor*3);
  addSum3Spiwor1.innerHTML = sum3Spiwor1+"x";
  var sum2Spiwor2 = Number(spiwor*2);
  addSum2Spiwor2.innerHTML = sum2Spiwor2+"x";
  var sum1Spiwor3 = Number(spiwor*1);
  addSum1Spiwor3.innerHTML = sum1Spiwor3+"x";
  /**STRZEMIE*/
  var strzemie = Number(calcStrzemie.value) || 0;
  var sum1Strzemie1 = Number(strzemie*1);
  addSum1Strzemie1.innerHTML = sum1Strzemie1+"x";
  var sum1Strzemie2 = Number(strzemie*1);
  addSum1Strzemie2.innerHTML = sum1Strzemie2+"x";
  var sum1Strzemie3 = Number(strzemie*1);
  addSum1Strzemie3.innerHTML = sum1Strzemie3+"x";
  /**TORBA PODROZNA*/
  var torbaPodr = Number(calcTorbaPodr.value) || 0;
  var sum2TorbaPodr1 = Number(torbaPodr*2);
  addSum2TorbaPodr1.innerHTML = sum2TorbaPodr1+"x";
  var sum1TorbaPodr2 = Number(torbaPodr*1);
  addSum1TorbaPodr2.innerHTML = sum1TorbaPodr2+"x";
  /**TORBA Z PASZA*/
  var torbaPasza = Number(calcTorbaPasza.value) || 0;
  var sum1TorbaPasza1 = Number(torbaPasza*1);
  addSum1TorbaPasza1.innerHTML = sum1TorbaPasza1+"x";
  var sum1TorbaPasza2 = Number(torbaPasza*1);
  addSum1TorbaPasza2.innerHTML = sum1TorbaPasza2+"x";
  /**UZDA*/
  var uzda = Number(calcUzda.value) || 0;
  var sum2Uzda1 = Number(uzda*2);
  addSum2Uzda1.innerHTML = sum2Uzda1+"x";
  var sum1Uzda2 = Number(uzda*1);
  addSum1Uzda2.innerHTML = sum1Uzda2+"x";
  var sum1Uzda3 = Number(uzda*1);
  addSum1Uzda3.innerHTML = sum1Uzda3+"x";
  /**WEDROWNY POWOZ*/
  var wpowoz = Number(calcWPowoz.value) || 0;
  var sum2WPowoz1 = Number(wpowoz*2);
  addSum2WPowoz1.innerHTML = sum2WPowoz1+"x";
  var sum1WPowoz2 = Number(wpowoz*1);
  addSum1WPowoz2.innerHTML = sum1WPowoz2+"x";
  var sum1WPowoz3 = Number(wpowoz*1);
  addSum1WPowoz3.innerHTML = sum1WPowoz3+"x";
  /**WYGARBOWANA SKORA*/
  var wygarSkora = Number(calcWygarSkora.value) || 0;
  var sum1WygarSkora1 = Number(wygarSkora*1);
  addSum1WygarSkora1.innerHTML = sum1WygarSkora1+"x";
  /**WYKWINTNY IMPREGNAT*/
  var impregnat = Number(calcImpregnat.value) || 0;
  var sum1Impregnat1 = Number(impregnat*1);
  addSum1Impregnat1.innerHTML = sum1Impregnat1+"x";
  var sum1Impregnat2 = Number(impregnat*1);
  addSum1Impregnat2.innerHTML = sum1Impregnat2+"x";
  var sum1Impregnat3 = Number(impregnat*1);
  addSum1Impregnat3.innerHTML = sum1Impregnat3+"x";
  /**WYPELNIACZ*/
  var wypelniacz = Number(calcWypelniacz.value) || 0;
  var sum4Wypelniacz1 = Number(wypelniacz*4);
  addSum4Wypelniacz1.innerHTML = sum4Wypelniacz1+"x";
  var sum4Wypelniacz2 = Number(wypelniacz*4);
  addSum4Wypelniacz2.innerHTML = sum4Wypelniacz2+"x";
  var sum2Wypelniacz3 = Number(wypelniacz*2);
  addSum2Wypelniacz3.innerHTML = sum2Wypelniacz3+"x";
  /**WYTRZYMALA KABURA*/
  var kabura = Number(calcKabura.value) || 0;
  var sum1Kabura1 = Number(kabura*1);
  addSum1Kabura1.innerHTML = sum1Kabura1+"x";
  var sum1Kabura2 = Number(kabura*1);
  addSum1Kabura2.innerHTML = sum1Kabura2+"x";
  var sum1Kabura3 = Number(kabura*1);
  addSum1Kabura3.innerHTML = sum1Kabura3+"x";
  /**WYTRZYMALe LEJCE*/
  var lejce = Number(calcLejce.value) || 0;
  var sum1Lejce1 = Number(lejce*1);
  addSum1Lejce1.innerHTML = sum1Lejce1+"x";
  var sum1Lejce2 = Number(lejce*1);
  addSum1Lejce2.innerHTML = sum1Lejce2+"x";
  /**ZNAKOWNIK*/
  var znakownik = Number(calcZnakownik.value) || 0;
  var sum2Znakownik1 = Number(znakownik*2);
  addSum2Znakownik1.innerHTML = sum2Znakownik1+"x";
  var sum2Znakownik2 = Number(znakownik*2);
  addSum2Znakownik2.innerHTML = sum2Znakownik2+"x";
  var sum1Znakownik3 = Number(znakownik*1);
  addSum1Znakownik3.innerHTML = sum1Znakownik3+"x";
  var sum1Znakownik4 = Number(znakownik*1);
  addSum1Znakownik4.innerHTML = sum1Znakownik4+"x";
  
  /**WYGARBOWANA SKORA*/
  var dodajSkora = document.createElement("table");
  sum1WygarSkora1 = sum1WygarSkora1 + sum4Ryba2;
  dodajSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="wygarb-skora1_add-sum1">'+sum1WygarSkora1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ab/Skora.png/33px-Skora.png" title="Skóra"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkora);
  if (sum1WygarSkora1===0) {
    parent_object.removeChild(dodajSkora);
  }
  
  /**SKORZANA TORBA*/
  var dodajWygarbowanaSkora = document.createElement("table");
  dodajWygarbowanaSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="skorz-torba1_add-sum1">'+sum1SkorzTorba1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/80/WygarbowanaSkoraRzemioslo.png/33px-WygarbowanaSkoraRzemioslo.png" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum1SkorzTorba1===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  
  /**TORBA Z PASZA*/
  var dodajSkorzanaTorba = document.createElement("table");
  dodajSkorzanaTorba.innerHTML = 
  '<table><tr><td class="ilosc" id="torba-pasza1_add-sum1">'+sum1TorbaPasza1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/bc/SkorzanaTorbaRzemioslo.png/33px-SkorzanaTorbaRzemioslo.png" title="Skórzana torba"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanaTorba");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanaTorba);
  if (sum1TorbaPasza1===0) {
    parent_object.removeChild(dodajSkorzanaTorba);
  }
  var dodajZboze = document.createElement("table");
  sum1TorbaPasza2 = sum1TorbaPasza2 + sum4Bimber1;
  dodajZboze.innerHTML = 
  '<table><tr><td class="ilosc" id="torba-pasza2_add-sum1">'+sum1TorbaPasza2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/0c/Zboze.png/33px-Zboze.png" title="Zboże" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZboze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZboze);
  if (sum1TorbaPasza2===0) {
    parent_object.removeChild(dodajZboze);
  }
  
  /**MANIERKA*/
  var dodajSkoraZBobra = document.createElement("table");
  dodajSkoraZBobra.innerHTML = 
  '<table><tr><td class="ilosc" id="manierka1_add-sum1">'+sum1Manierka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4b/SkoraZBobra.png/33px-SkoraZBobra.png" title="Skóra z bobra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBobra");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBobra);
  if (sum1Manierka1===0) {
    parent_object.removeChild(dodajSkoraZBobra);
  }
  var dodajKrowiRog = document.createElement("table");
  dodajKrowiRog.innerHTML = 
  '<table><tr><td class="ilosc" id="manierka2_add-sum1">'+sum1Manierka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/KrowiRog.png/33px-KrowiRog.png" title="Krowi róg"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKrowiRog");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKrowiRog);
  if (sum1Manierka2===0) {
    parent_object.removeChild(dodajKrowiRog);
  }
  
  /**RZEMIEN*/
  var dodajSierp = document.createElement("table");
  dodajSierp.innerHTML = 
  '<table><tr><td class="ilosc" id="rzemien1_add-sum1">'+sum1Rzemien1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/04/Sierp.png/33px-Sierp.png" title="Sierp"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSierp");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSierp);
  if (sum1Rzemien1===0) {
    parent_object.removeChild(dodajSierp);
  }
  var dodajWygarbowanaSkora = document.createElement("table");
  sum1Rzemien2 = sum1Rzemien2 + sum1SkorzTorba1;
  dodajWygarbowanaSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="rzemien2_add-sum1">'+sum1Rzemien2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/80/WygarbowanaSkoraRzemioslo.png/33px-WygarbowanaSkoraRzemioslo.png" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum1Rzemien2===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  
  /**DESKA DO KROJENIA*/
  var dodajDrewno = document.createElement("table");
  sum1Deska1 = sum1Deska1 + sum3Lug1;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="deska1_add-sum1">'+sum1Deska1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum1Deska1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  
  /**TORBA PODROZNA*/
  var dodajWelna = document.createElement("table");
  dodajWelna.innerHTML = 
  '<table><tr><td class="ilosc" id="torba-podr1_add-sum2">'+sum2TorbaPodr1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/ba/Welna.png/33px-Welna.png" title="Wełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWelna);
  if (sum2TorbaPodr1===0) {
    parent_object.removeChild(dodajWelna);
  }
  var dodajBawelna = document.createElement("table");
  sum1TorbaPodr2 = sum1TorbaPodr2 + sum1Krzesiwo3;
  dodajBawelna.innerHTML = 
  '<table><tr><td class="ilosc" id="torba-podr2_add-sum1">'+sum1TorbaPodr2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fb/Bawelna.png/33px-Bawelna.png" title="Bawełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBawelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBawelna);
  if (sum1TorbaPodr2===0) {
    parent_object.removeChild(dodajBawelna);
  }
  
  
  /**PODKUCIE KOPYT*/
  var dodajGwozdzie = document.createElement("table");
  sum2Podkucie1 = sum2Podkucie1 + sum3Wlokno1;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc" id="podkucie1_add-sum2">'+sum2Podkucie1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e1/Gwozdzie.png/33px-Gwozdzie.png" title="Gwoździe"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajGwozdzie");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajGwozdzie);
  if (sum2Podkucie1===0) {
    parent_object1.removeChild(dodajGwozdzie);
  }
  var dodajMlotek = document.createElement("table");
  sum1Podkucie2 = sum1Podkucie2 + sum5FasPuszka4;
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc" id="podkucie2_add-sum1">'+sum1Podkucie2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Mlotek.png/33px-Mlotek.png" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum1Podkucie2===0) {
    parent_object.removeChild(dodajMlotek);
  }
  var dodajPodkowa = document.createElement("table");
  dodajPodkowa.innerHTML = 
  '<table><tr><td class="ilosc" id="podkucie3_add-sum1">'+sum1Podkucie3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/11/Podkowa.png/33px-Podkowa.png" title="Podkowa"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajPodkowa");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajPodkowa);
  if (sum1Podkucie3===0) {
    parent_object1.removeChild(dodajPodkowa);
  }
  
  /**PASZA TRESCIWA*/
  var dodajZboze = document.createElement("table");
  sum3Pasza1 = sum3Pasza1+ sum1TorbaPasza2;
  dodajZboze.innerHTML = 
  '<table><tr><td class="ilosc" id="pasza1_add-sum3">'+sum3Pasza1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/0c/Zboze.png/33px-Zboze.png" title="Zboże" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZboze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZboze);
  if (sum3Pasza1===0) {
    parent_object.removeChild(dodajZboze);
  }
  var dodajSiano = document.createElement("table");
  sum3Pasza2 = sum3Pasza2 + sum2Wlokno3;
  dodajSiano.innerHTML = 
  '<table><tr><td class="ilosc" id="pasza2_add-sum3">'+sum3Pasza2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/06/Siano.png/33px-Siano.png" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum3Pasza2===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajSzklankaWody = document.createElement("table");
  sum3Pasza3 = sum3Pasza3 + sum2Wlokno2;
  dodajSzklankaWody.innerHTML = 
  '<table><tr><td class="ilosc" id="pasza3_add-sum3">'+sum3Pasza3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/cd/SzklankaWody.png/33px-SzklankaWody.png" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum3Pasza3===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  var dodajJagody = document.createElement("table");
  sum2Pasza4 = sum2Pasza4 + sum3Herbata1;
  dodajJagody.innerHTML = 
  '<table><tr><td class="ilosc" id="pasza1_add-sum3">'+sum2Pasza4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl//images/thumb/1/18/Jagody.png/33px-Jagody.png" title="Jagody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajJagody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajJagody);
  if (sum2Pasza4===0) {
    parent_object.removeChild(dodajJagody);
  }
  
  /**OBDARTE SIODLO*/
  var dodajSiodlo = document.createElement("table");
  dodajSiodlo.innerHTML = 
  '<table><tr><td class="ilosc" id="obdarte-siodlo1_add-sum1">'+sum1ObdarteSiodlo1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/25/Siodlo.png/33px-Siodlo.png" title="Siodło"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajSiodlo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiodlo);
  if (sum1ObdarteSiodlo1===0) {
    parent_object.removeChild(dodajSiodlo);
  }
  var dodajNoz = document.createElement("table");
  sum1ObdarteSiodlo2 = sum1ObdarteSiodlo2 + sum1SokKaktus3;
  dodajNoz.innerHTML = 
  '<table><tr><td class="ilosc" id="obdarte-siodlo2_add-sum1">'+sum1ObdarteSiodlo2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/NozRzemioslo.png/33px-NozRzemioslo.png" title="Nóż"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNoz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNoz);
  if (sum1ObdarteSiodlo2===0) {
    parent_object.removeChild(dodajNoz);
  }
  
  /**WYPELNIACZ*/
  var dodajBawelna = document.createElement("table");
  sum4Wypelniacz1 = sum4Wypelniacz1 + sum1TorbaPodr2;
  dodajBawelna.innerHTML = 
  '<table><tr><td class="ilosc" id="wypelniacz1_add-sum4">'+sum4Wypelniacz1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fb/Bawelna.png/33px-Bawelna.png" title="Bawełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBawelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBawelna);
  if (sum4Wypelniacz1===0) {
    parent_object.removeChild(dodajBawelna);
  }
  var dodajZboze = document.createElement("table");
  sum4Wypelniacz2 = sum3Pasza1 + sum4Wypelniacz2;
  dodajZboze.innerHTML = 
  '<table><tr><td class="ilosc" id="wypelniacz2_add-sum4">'+sum4Wypelniacz2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/0c/Zboze.png/33px-Zboze.png" title="Zboże" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZboze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZboze);
  if (sum4Wypelniacz2===0) {
    parent_object.removeChild(dodajZboze);
  }
  var dodajWelna = document.createElement("table");
  sum2Wypelniacz3 = sum2Wypelniacz3 + sum2TorbaPodr1;
  dodajWelna.innerHTML = 
  '<table><tr><td class="ilosc" id="wypelniacz3_add-sum2">'+sum2Wypelniacz3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/ba/Welna.png/33px-Welna.png" title="Wełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWelna);
  if (sum2Wypelniacz3===0) {
    parent_object.removeChild(dodajWelna);
  }
  
  /**SKORZANE POKRYCIE*/
  var dodajZywica = document.createElement("table");
  sum1SkorzPokrycie1 = sum1SkorzPokrycie1 + sum1Marionetka3;
  dodajZywica.innerHTML = 
  '<table><tr><td class="ilosc" id="skorz-pokrycie1_add-sum1">'+sum1SkorzPokrycie1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/ZywicaRzemioslo.png/33px-ZywicaRzemioslo.png" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum1SkorzPokrycie1===0) {
    parent_object.removeChild(dodajZywica);
  }
  var dodajSkoraWeza = document.createElement("table");
  sum1SkorzPokrycie2 = sum1SkorzPokrycie2 + sum1Panaceum2;
  dodajSkoraWeza.innerHTML = 
  '<table><tr><td class="ilosc" id="skorz-pokrycie2_add-sum1">'+sum1SkorzPokrycie2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ac/SkoraWeza.png/33px-SkoraWeza.png" title="Skóra węża"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraWeza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraWeza);
  if (sum1SkorzPokrycie2===0) {
    parent_object.removeChild(dodajSkoraWeza);
  }
  
  /**ZNAKOWNIK*/
  var dodajSiano = document.createElement("table");
  sum2Znakownik1 = sum2Znakownik1 + sum3Pasza2;
  dodajSiano.innerHTML = 
  '<table><tr><td class="ilosc" id="znakownik1_add-sum2">'+sum2Znakownik1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/06/Siano.png/33px-Siano.png" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum2Znakownik1===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajWegiel = document.createElement("table");
  sum2Znakownik2 = sum2Znakownik2 + sum4Antidotum3;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="znakownik2_add-sum2">'+sum2Znakownik2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum2Znakownik2===0) {
    parent_object.removeChild(dodajWegiel);
  }
  var dodajPretyMetalowe = document.createElement("table");
  dodajPretyMetalowe.innerHTML = 
  '<table><tr><td class="ilosc" id="znakownik3_add-sum1">'+sum1Znakownik3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/09/PretyMetalowe.png/33px-PretyMetalowe.png" title="Pręty metalowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPretyMetalowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPretyMetalowe);
  if (sum1Znakownik3===0) {
    parent_object.removeChild(dodajPretyMetalowe);
  }
  var dodajKrzesiwo = document.createElement("table");
  sum1Znakownik4 = sum1Znakownik4 + sum1Bimber4;
  dodajKrzesiwo.innerHTML = 
  '<table><tr><td class="ilosc" id="znakownik4_add-sum1">'+sum1Znakownik4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8d/KrzesiwoRzemioslo.png/33px-KrzesiwoRzemioslo.png" title="Krzesiwo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKrzesiwo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKrzesiwo);
  if (sum1Znakownik4===0) {
    parent_object.removeChild(dodajKrzesiwo);
  }
  
  /**NIEWYREGULOWANY KOMPAS*/
  var dodajSzklankaWody = document.createElement("table");
  sum1Kompas1 = sum1Kompas1 + sum3Pasza3;
  dodajSzklankaWody.innerHTML = 
  '<table><tr><td class="ilosc" id="kompas1_add-sum1">'+sum1Kompas1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/cd/SzklankaWody.png/33px-SzklankaWody.png" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum1Kompas1===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  var dodajGwozdzie = document.createElement("table");
  sum1Kompas2 = sum1Kompas2 + sum2Podkucie1;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc" id="kompas2_add-sum1">'+sum1Kompas2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e1/Gwozdzie.png/33px-Gwozdzie.png" title="Gwoździe"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajGwozdzie");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajGwozdzie);
  if (sum1Kompas2===0) {
    parent_object1.removeChild(dodajGwozdzie);
  }
  
  /**STRZEMIE*/
  var dodajPretyMetalowe = document.createElement("table");
  sum1Strzemie1 = sum1Strzemie1 + sum1Znakownik3;
  dodajPretyMetalowe.innerHTML = 
  '<table><tr><td class="ilosc" id="strzemie1_add-sum1">'+sum1Strzemie1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/09/PretyMetalowe.png/33px-PretyMetalowe.png" title="Pręty metalowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPretyMetalowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPretyMetalowe);
  if (sum1Strzemie1===0) {
    parent_object.removeChild(dodajPretyMetalowe);
  }
  var dodajMlotKowalski = document.createElement("table");
  dodajMlotKowalski.innerHTML = 
  '<table><tr><td class="ilosc" id="strzemie2_add-sum1">'+sum1Strzemie2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/35/MlotKowalski.png/33px-MlotKowalski.png" title="Młot kowalski"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotKowalski");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotKowalski);
  if (sum1Strzemie2===0) {
    parent_object.removeChild(dodajMlotKowalski);
  }
  var dodajRzemien = document.createElement("table");
  sum1Strzemie3 = sum1Strzemie3 + sum2Marionetka1;
  dodajRzemien.innerHTML = 
  '<table><tr><td class="ilosc" id="strzemie3_add-sum1">'+sum1Strzemie3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/f9/RzemienRzemioslo.png/33px-RzemienRzemioslo.png" title="Rzemień"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRzemien");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRzemien);
  if (sum1Strzemie3===0) {
    parent_object.removeChild(dodajRzemien);
  }
  
  /**OSTROGI*/
  var dodajDrutKolczasty = document.createElement("table");
  dodajDrutKolczasty.innerHTML = 
  '<table><tr><td class="ilosc" id="ostrogi1_add-sum3">'+sum3Ostrogi1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/40/DrutKolczasty.png/33px-DrutKolczasty.png" title="Drut kolczasty"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrutKolczasty");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrutKolczasty);
  if (sum3Ostrogi1===0) {
    parent_object.removeChild(dodajDrutKolczasty);
  }
  var dodajCwiercdolarowka = document.createElement("table");
  dodajCwiercdolarowka.innerHTML = 
  '<table><tr><td class="ilosc" id="ostrogi2_add-sum1">'+sum1Ostrogi2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/6a/Cwiercdolarowka.png/33px-Cwiercdolarowka.png" title="Ćwierćdolarówka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCwiercdolarowka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCwiercdolarowka);
  if (sum1Ostrogi2===0) {
    parent_object.removeChild(dodajCwiercdolarowka);
  }
  var dodajPila = document.createElement("table");
  sum1Ostrogi3 = sum1Ostrogi3 + sum1Zywica1;
  dodajPila.innerHTML = 
  '<table><tr><td class="ilosc" id="ostrogi3_add-sum1">'+sum1Ostrogi3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Pila.png/33px-Pila.png" title="Piła"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPila");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPila);
  if (sum1Ostrogi3===0) {
    parent_object.removeChild(dodajPila);
  }
  
  /**UZDA*/
  var dodajLasso = document.createElement("table");
  sum2Uzda1 = sum2Uzda1 + sum2Cyrkiel2;
  dodajLasso.innerHTML = 
  '<table><tr><td class="ilosc" id="uzda1_add-sum2">'+sum2Uzda1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/ea/Lasso.png/33px-Lasso.png" title="Lasso"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLasso");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLasso);
  if (sum2Uzda1===0) {
    parent_object.removeChild(dodajLasso);
  }
  var dodajSzpulkaDrutu = document.createElement("table");
  sum1Uzda2 = sum1Uzda2 + sum1Bateria2;
  dodajSzpulkaDrutu.innerHTML = 
  '<table><tr><td class="ilosc" id="uzda2_add-sum1">'+sum1Uzda2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/SzpulkaDrutu.png/33px-SzpulkaDrutu.png" title="Szpulka drutu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzpulkaDrutu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzpulkaDrutu);
  if (sum1Uzda2===0) {
    parent_object.removeChild(dodajSzpulkaDrutu);
  }
  var dodajDeskaDoKrojenia = document.createElement("table");
  sum1Uzda3 = sum1Uzda3 + sum1Nalewka3;
  dodajDeskaDoKrojenia.innerHTML = 
  '<table><tr><td class="ilosc" id="uzda3_add-sum1">'+sum1Uzda3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/57/DeskaDoKrojeniaRzemioslo.png/33px-DeskaDoKrojeniaRzemioslo.png" title="Deska do krojenia"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDeskaDoKrojenia");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDeskaDoKrojenia);
  if (sum1Uzda3===0) {
    parent_object.removeChild(dodajDeskaDoKrojenia);
  }
  
  /**SPIWOR*/
  var dodajSiano = document.createElement("table");
  sum3Spiwor1 = sum2Znakownik1 + sum3Spiwor1;
  dodajSiano.innerHTML = 
  '<table><tr><td class="ilosc" id="spiwor1_add-sum3">'+sum3Spiwor1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/06/Siano.png/33px-Siano.png" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum3Spiwor1===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajSkoraPumy = document.createElement("table");
  sum2Spiwor2 = sum2Spiwor2 + sum1Odzywka1;
  dodajSkoraPumy.innerHTML = 
  '<table><tr><td class="ilosc" id="spiwor2_add-sum2">'+sum2Spiwor2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/ff/SkoraPumy.png/33px-SkoraPumy.png" title="Skóra pumy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraPumy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraPumy);
  if (sum2Spiwor2===0) {
    parent_object.removeChild(dodajSkoraPumy);
  }
  var dodajSukno = document.createElement("table");
  sum1Spiwor3 = sum1Spiwor3 + sum1Wycior3;
  dodajSukno.innerHTML = 
  '<table><tr><td class="ilosc" id="spiwor3_add-sum1">'+sum1Spiwor3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Sukno.png/33px-Sukno.png" title="Sukno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSukno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSukno);
  if (sum1Spiwor3===0) {
    parent_object.removeChild(dodajSukno);
  }
  
  /**DERA*/
  var dodajSkoraZBizona = document.createElement("table");
  dodajSkoraZBizona.innerHTML = 
  '<table><tr><td class="ilosc" id="dera1_add-sum1">'+sum1Dera1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8e/SkoraZBizona.png/33px-SkoraZBizona.png" title="Skóra z bizona"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBizona");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBizona);
  if (sum1Dera1===0) {
    parent_object.removeChild(dodajSkoraZBizona);
  }
  var dodajSkoraZBobra = document.createElement("table");
  sum1Dera2 = sum1Dera2 + sum1Manierka1;
  dodajSkoraZBobra.innerHTML = 
  '<table><tr><td class="ilosc" id="dera2_add-sum1">'+sum1Dera2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4b/SkoraZBobra.png/33px-SkoraZBobra.png" title="Skóra z bobra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBobra");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBobra);
  if (sum1Dera2===0) {
    parent_object.removeChild(dodajSkoraZBobra);
  }
  var dodajNoz = document.createElement("table");
  sum1Dera3 = sum1Dera3 + sum1ObdarteSiodlo2;
  dodajNoz.innerHTML = 
  '<table><tr><td class="ilosc" id="dera3_add-sum1">'+sum1Dera3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/NozRzemioslo.png/33px-NozRzemioslo.png" title="Nóż"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNoz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNoz);
  if (sum1Dera3===0) {
    parent_object.removeChild(dodajNoz);
  }
  
  /**OZDOBA RYMARZ*/
  var dodajKamieniePolszlachetne = document.createElement("table");
  dodajKamieniePolszlachetne.innerHTML = 
  '<table><tr><td class="ilosc" id="ozdoba-rym1_add-sum1">'+sum1OzdobaRym1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/31/KamieniePolszlachetne.png/33px-KamieniePolszlachetne.png" title="Kamienie półszlachetne"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamieniePolszlachetne");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamieniePolszlachetne);
  if (sum1OzdobaRym1===0) {
    parent_object.removeChild(dodajKamieniePolszlachetne);
  }
  var dodajOlow = document.createElement("table");
  dodajOlow.innerHTML = 
  '<table><tr><td class="ilosc" id="ozdoba-rym2_add-sum1">'+sum1OzdobaRym2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/Olow.png/33px-Olow.png" title="Ołów"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOlow");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOlow);
  if (sum1OzdobaRym2===0) {
    parent_object.removeChild(dodajOlow);
  }
  var dodajSrebro = document.createElement("table");
  dodajSrebro.innerHTML = 
  '<table><tr><td class="ilosc" id="ozdoba-rym3_add-sum1">'+sum1OzdobaRym3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/b8/Srebro.png/33px-Srebro.png" title="Srebro"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSrebro");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSrebro);
  if (sum1OzdobaRym3===0) {
    parent_object.removeChild(dodajSrebro);
  }
  
  /**CZESC POWOZU*/
  var dodajDrewno = document.createElement("table");
  sum3CzescPowozu1 = sum3CzescPowozu1 + sum1Deska1;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="czesc-powozu1_add-sum3">'+sum3CzescPowozu1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum3CzescPowozu1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajGwozdzie = document.createElement("table");
  sum2CzescPowozu2 = sum1Kompas2 + sum2CzescPowozu2;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc" id="czesc-powozu2_add-sum2">'+sum2CzescPowozu2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e1/Gwozdzie.png/33px-Gwozdzie.png" title="Gwoździe"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajGwozdzie");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajGwozdzie);
  if (sum2CzescPowozu2===0) {
    parent_object1.removeChild(dodajGwozdzie);
  }
  var dodajMlotek = document.createElement("table");
  sum1CzescPowozu3 = sum1CzescPowozu3 + sum1Podkucie2;
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc" id="czesc-powozu3_add-sum1">'+sum1CzescPowozu3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Mlotek.png/33px-Mlotek.png" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum1CzescPowozu3===0) {
    parent_object.removeChild(dodajMlotek);
  }
  
  /**KOLO POWOZU*/
  var dodajDrewno = document.createElement("table");
  sum3KoloPowozu1 = sum3CzescPowozu1 + sum3KoloPowozu1;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="kolo-powozu1_add-sum3">'+sum3KoloPowozu1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum3KoloPowozu1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajPretyMetalowe = document.createElement("table");
  sum2KoloPowozu2 = sum1Strzemie1 + sum2KoloPowozu2;
  dodajPretyMetalowe.innerHTML = 
  '<table><tr><td class="ilosc" id="kolo-powozu2_add-sum2">'+sum2KoloPowozu2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/09/PretyMetalowe.png/33px-PretyMetalowe.png" title="Pręty metalowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPretyMetalowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPretyMetalowe);
  if (sum2KoloPowozu2===0) {
    parent_object.removeChild(dodajPretyMetalowe);
  }
  var dodajGwozdzie = document.createElement("table");
  sum1KoloPowozu3 = sum1KoloPowozu3 + sum2CzescPowozu2;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc" id="kolo-powozu3_add-sum1">'+sum1KoloPowozu3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e1/Gwozdzie.png/33px-Gwozdzie.png" title="Gwoździe"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajGwozdzie");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajGwozdzie);
  if (sum1KoloPowozu3===0) {
    parent_object1.removeChild(dodajGwozdzie);
  }
  
  /**POWOZ WYSCIGOWY*/
  var dodajLejce = document.createElement("table");
  dodajLejce.innerHTML = 
  '<table><tr><td class="ilosc" id="powoz1_add-sum1">'+sum1Powoz1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7f/LejceProdukt.png/33px-LejceProdukt.png" title="Lejce"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLejce");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLejce);
  if (sum1Powoz1===0) {
    parent_object.removeChild(dodajLejce);
  }
  var dodajCzescPowozu = document.createElement("table");
  dodajCzescPowozu.innerHTML = 
  '<table><tr><td class="ilosc" id="powoz2_add-sum1">'+sum1Powoz2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9d/CzescPowozuRzemioslo.png/33px-CzescPowozuRzemioslo.png" title="Część powozu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCzescPowozu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCzescPowozu);
  if (sum1Powoz2===0) {
    parent_object.removeChild(dodajCzescPowozu);
  }
  var dodajKoloPowozu = document.createElement("table");
  dodajKoloPowozu.innerHTML = 
  '<table><tr><td class="ilosc" id="powoz3_add-sum1">'+sum1Powoz3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/82/KoloPowozuRzemioslo.png/33px-KoloPowozuRzemioslo.png" title="Koło powozu"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajKoloPowozu");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajKoloPowozu);
  if (sum1Powoz3===0) {
    parent_object1.removeChild(dodajKoloPowozu);
  }
  
  /**ELIKSIR CELNOSCI*/
  var dodajWhiskey = document.createElement("table");
  sum2Eliksir1 = sum2Eliksir1 + sum2WodaRozana2;
  dodajWhiskey.innerHTML = 
  '<table><tr><td class="ilosc" id="eliksir1_add-sum2">'+sum2Eliksir1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Whiskey.png/33px-Whiskey.png" title="Whiskey"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajWhiskey");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWhiskey);
  if (sum2Eliksir1===0) {
    parent_object.removeChild(dodajWhiskey);
  }
  var dodajEliksir = document.createElement("table");
  dodajEliksir.innerHTML = 
  '<table><tr><td class="ilosc" id="eliksir2_add-sum1">'+sum1Eliksir2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9d/Eliksir.png/33px-Eliksir.png" title="Eliksir"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajEliksir");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajEliksir);
  if (sum1Eliksir2===0) {
    parent_object.removeChild(dodajEliksir);
  }
  var dodajManierka = document.createElement("table");
  sum1Eliksir3 = sum1Eliksir3 + sum1Destylat2;
  dodajManierka.innerHTML = 
  '<table><tr><td class="ilosc" id="eliksir3_add-sum1">'+sum1Eliksir3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/69/ManierkaRzemioslo.png/33px-ManierkaRzemioslo.png" title="Manierka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajManierka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajManierka);
  if (sum1Eliksir3===0) {
    parent_object.removeChild(dodajManierka);
  }
  
  /**NAPRAWIONE SIODLO*/
  var dodajSzczypce = document.createElement("table");
  dodajSzczypce.innerHTML = 
  '<table><tr><td class="ilosc" id="napr-siodlo1_add-sum3">'+sum3NaprSiodlo1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9f/SzczypceProdukt.png/33px-SzczypceProdukt.png" title="Szczypce"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzczypce");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzczypce);
  if (sum3NaprSiodlo1===0) {
    parent_object.removeChild(dodajSzczypce);
  }
  var dodajRopa = document.createElement("table");
  sum1NaprSiodlo2 = sum1NaprSiodlo2 + sum3Mikstura2;
  dodajRopa.innerHTML = 
  '<table><tr><td class="ilosc" id="napr-siodlo2_add-sum1">'+sum1NaprSiodlo2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/Ropa.png/33px-Ropa.png" title="Ropa"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRopa");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRopa);
  if (sum1NaprSiodlo2===0) {
    parent_object.removeChild(dodajRopa);
  }
  var dodajSkorzanePokrycie = document.createElement("table");
  dodajSkorzanePokrycie.innerHTML = 
  '<table><tr><td class="ilosc" id="napr-siodlo3_add-sum1">'+sum1NaprSiodlo3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3b/SkorzanePokrycieRzemioslo.png/33px-SkorzanePokrycieRzemioslo.png" title="Skórzane pokrycie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanePokrycie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanePokrycie);
  if (sum1NaprSiodlo3===0) {
    parent_object.removeChild(dodajSkorzanePokrycie);
  }
  var dodajObdarteSiodlo = document.createElement("table");
  dodajObdarteSiodlo.innerHTML = 
  '<table><tr><td class="ilosc" id="napr-siodlo4_add-sum1">'+sum1NaprSiodlo4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/ObdarteSiodloRzemioslo.png/33px-ObdarteSiodloRzemioslo.png" title="Obdarte siodło"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajObdarteSiodlo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajObdarteSiodlo);
  if (sum1NaprSiodlo4===0) {
    parent_object.removeChild(dodajObdarteSiodlo);
  }
  
  /**NOTATNIK*/
  var dodajSkorzanePokrycie = document.createElement("table");
  sum1Notatnik1 = sum1Notatnik1 + sum1NaprSiodlo3;
  dodajSkorzanePokrycie.innerHTML = 
  '<table><tr><td class="ilosc" id="notatnik1_add-sum1">'+sum1Notatnik1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3b/SkorzanePokrycieRzemioslo.png/33px-SkorzanePokrycieRzemioslo.png" title="Skórzane pokrycie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanePokrycie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanePokrycie);
  if (sum1Notatnik1===0) {
    parent_object.removeChild(dodajSkorzanePokrycie);
  }
  var dodajPapier = document.createElement("table");
  sum1Notatnik2 = sum1Notatnik2 + sum1AtramentS3;
  dodajPapier.innerHTML = 
  '<table><tr><td class="ilosc" id="notatnik2_add-sum1">'+sum1Notatnik2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ad/PapierRzemioslo.png/33px-PapierRzemioslo.png" title="Papier"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPapier");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPapier);
  if (sum1Notatnik2===0) {
    parent_object.removeChild(dodajPapier);
  }
  
  /**LEK SIODLA*/
  var dodajZywica = document.createElement("table");
  sum1LekSiodla1 = sum1LekSiodla1 + sum1SkorzPokrycie1;
  dodajZywica.innerHTML = 
  '<table><tr><td class="ilosc" id="lek-siodla1_add-sum1">'+sum1LekSiodla1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/ZywicaRzemioslo.png/33px-ZywicaRzemioslo.png" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum1LekSiodla1===0) {
    parent_object.removeChild(dodajZywica);
  }
  var dodajKamieniePolszlachetne = document.createElement("table");
  sum2LekSiodla2 = sum2LekSiodla2 + sum1OzdobaRym1;
  dodajKamieniePolszlachetne.innerHTML = 
  '<table><tr><td class="ilosc" id="lek-siodla2_add-sum2">'+sum2LekSiodla2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/31/KamieniePolszlachetne.png/33px-KamieniePolszlachetne.png" title="Kamienie półszlachetne"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamieniePolszlachetne");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamieniePolszlachetne);
  if (sum2LekSiodla2===0) {
    parent_object.removeChild(dodajKamieniePolszlachetne);
  }
  
  /**WYKWINTNY IMPREGNAT*/
  var dodajRopa = document.createElement("table");
  sum1Impregnat1 = sum1Impregnat1 + sum1NaprSiodlo2;
  dodajRopa.innerHTML = 
  '<table><tr><td class="ilosc" id="impregnat1_add-sum1">'+sum1Impregnat1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/Ropa.png/33px-Ropa.png" title="Ropa"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRopa");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRopa);
  if (sum1Impregnat1===0) {
    parent_object.removeChild(dodajRopa);
  }
  var dodajKwiatLotosu = document.createElement("table");
  sum1Impregnat2 = sum1Impregnat2 + sum2Mikstura3;
  dodajKwiatLotosu.innerHTML = 
  '<table><tr><td class="ilosc" id="impregnat2_add-sum1">'+sum1Impregnat2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/f8/KwiatLotosu.png/33px-KwiatLotosu.png" title="Kwiat lotosu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKwiatLotosu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKwiatLotosu);
  if (sum1Impregnat2===0) {
    parent_object.removeChild(dodajKwiatLotosu);
  }
  var dodajPomarancza = document.createElement("table");
  sum1Impregnat3 = sum1Impregnat3 + sum1Bateria1;
  dodajPomarancza.innerHTML = 
  '<table><tr><td class="ilosc" id="impregnat3_add-sum1">'+sum1Impregnat3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7f/Pomarancza.png/33px-Pomarancza.png" title="Pomarańcza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPomarancza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPomarancza);
  if (sum1Impregnat3===0) {
    parent_object.removeChild(dodajPomarancza);
  }
  
  /**ARRAS*/
  var dodajBandaze = document.createElement("table");
  dodajBandaze.innerHTML = 
  '<table><tr><td class="ilosc" id="arras1_add-sum2">'+sum2Arras1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3d/Bandaze.png/33px-Bandaze.png" title="Bandaże"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBandaze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBandaze);
  if (sum2Arras1===0) {
    parent_object.removeChild(dodajBandaze);
  }
  var dodajIndygo = document.createElement("table");
  sum1Arras2 = sum1Arras2 + sum1Atrament1;
  dodajIndygo.innerHTML = 
  '<table><tr><td class="ilosc" id="arras2_add-sum1">'+sum1Arras2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/96/Indygo.png/33px-Indygo.png" title="Indygo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajIndygo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajIndygo);
  if (sum1Arras2===0) {
    parent_object.removeChild(dodajIndygo);
  }
  var dodajSzwajcarskiScyzoryk = document.createElement("table");
  dodajSzwajcarskiScyzoryk.innerHTML = 
  '<table><tr><td class="ilosc" id="arras3_add-sum1">'+sum1Arras3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/SzwajcarskiScyzorykRzemioslo.png/33px-SzwajcarskiScyzorykRzemioslo.png" title="Szwajcarski scyzoryk"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzwajcarskiScyzoryk");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzwajcarskiScyzoryk);
  if (sum1Arras3===0) {
    parent_object.removeChild(dodajSzwajcarskiScyzoryk);
  }
  var dodajDera = document.createElement("table");
  dodajDera.innerHTML = 
  '<table><tr><td class="ilosc" id="arras4_add-sum1">'+sum1Arras4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/04/DeraRzemioslo.png/33px-DeraRzemioslo.png" title="Dera"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDera");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDera);
  if (sum1Arras4===0) {
    parent_object.removeChild(dodajDera);
  }
  
  /**WYTRZYMALE LEJCE*/
  var dodajOzdobaRymarz = document.createElement("table");
  dodajOzdobaRymarz.innerHTML = 
  '<table><tr><td class="ilosc" id="lejce1_add-sum1">'+sum1Lejce1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e4/OzdobaRzemioslo.png/33px-OzdobaRzemioslo.png" title="Ozdoba od rymarza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOzdobaRymarz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOzdobaRymarz);
  if (sum1Lejce1===0) {
    parent_object.removeChild(dodajOzdobaRymarz);
  }
  var dodajRzemien = document.createElement("table");
  sum1Lejce2 = sum1Lejce2 + sum1Strzemie3;
  dodajRzemien.innerHTML = 
  '<table><tr><td class="ilosc" id="lejce2_add-sum1">'+sum1Lejce2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/f9/RzemienRzemioslo.png/33px-RzemienRzemioslo.png" title="Rzemień"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRzemien");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRzemien);
  if (sum1Lejce2===0) {
    parent_object.removeChild(dodajRzemien);
  }
  
  /**WYTRZYMALA KABURA*/
  var dodajWygarbowanaSkora = document.createElement("table");
  sum1Kabura1 = sum1Rzemien2 + sum1Kabura1;
  dodajWygarbowanaSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="kabura1_add-sum1">'+sum1Kabura1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/80/WygarbowanaSkoraRzemioslo.png/33px-WygarbowanaSkoraRzemioslo.png" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum1Kabura1===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  var dodajWypelniacz = document.createElement("table");
  dodajWypelniacz.innerHTML = 
  '<table><tr><td class="ilosc" id="kabura2_add-sum1">'+sum1Kabura2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/WypelniaczRzemioslo.png/33px-WypelniaczRzemioslo.png" title="Wypełniacz"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWypelniacz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWypelniacz);
  if (sum1Kabura2===0) {
    parent_object.removeChild(dodajWypelniacz);
  }
  var dodajSkorzanePokrycie = document.createElement("table");
  sum1Kabura3 = sum1Kabura3 + sum1Notatnik1;
  dodajSkorzanePokrycie.innerHTML = 
  '<table><tr><td class="ilosc" id="kabura3_add-sum1">'+sum1Kabura3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3b/SkorzanePokrycieRzemioslo.png/33px-SkorzanePokrycieRzemioslo.png" title="Skórzane pokrycie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanePokrycie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanePokrycie);
  if (sum1Kabura3===0) {
    parent_object.removeChild(dodajSkorzanePokrycie);
  }
  
  /**WEDROWNY POWOZ*/
  var dodajKoloPowozu = document.createElement("table");
  sum2WPowoz1 = sum2WPowoz1 + sum1Powoz3;
  dodajKoloPowozu.innerHTML = 
  '<table><tr><td class="ilosc" id="wedrowny-powoz1_add-sum2">'+sum2WPowoz1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/82/KoloPowozuRzemioslo.png/33px-KoloPowozuRzemioslo.png" title="Koło powozu"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajKoloPowozu");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajKoloPowozu);
  if (sum2WPowoz1===0) {
    parent_object1.removeChild(dodajKoloPowozu);
  }
  var dodajCzescPowozu = document.createElement("table");
  sum1WPowoz2 = sum1WPowoz2 + sum1Powoz2;
  dodajCzescPowozu.innerHTML = 
  '<table><tr><td class="ilosc" id="wedrowny-powoz2_add-sum1">'+sum1WPowoz2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9d/CzescPowozuRzemioslo.png/33px-CzescPowozuRzemioslo.png" title="Część powozu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCzescPowozu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCzescPowozu);
  if (sum1WPowoz2===0) {
    parent_object.removeChild(dodajCzescPowozu);
  }
  var dodajWloknoLnu = document.createElement("table");
  sum1WPowoz3 = sum1WPowoz3 + sum1DuchMuz5;
  dodajWloknoLnu.innerHTML = 
  '<table><tr><td class="ilosc" id="wedrowny-powoz3_add-sum1">'+sum1WPowoz3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/95/WloknoLnuRzemioslo.png/33px-WloknoLnuRzemioslo.png" title="Włókno lnu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWloknoLnu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWloknoLnu);
  if (sum1WPowoz3===0) {
    parent_object.removeChild(dodajWloknoLnu);
  }
  
  /**LECIUTKA SKORA*/
  var dodajWygarbowanaSkora = document.createElement("table");
  sum5LeciutkaSkora1 = sum5LeciutkaSkora1 + sum1Kabura1;
  dodajWygarbowanaSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="leciutka-skora1_add-sum5">'+sum5LeciutkaSkora1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/80/WygarbowanaSkoraRzemioslo.png/33px-WygarbowanaSkoraRzemioslo.png" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum5LeciutkaSkora1===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  var dodajSkorzanePokrycie = document.createElement("table");
  sum3LeciutkaSkora2 = sum1Kabura3 + sum3LeciutkaSkora2;
  dodajSkorzanePokrycie.innerHTML = 
  '<table><tr><td class="ilosc" id="leciutka-skora2_add-sum3">'+sum3LeciutkaSkora2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3b/SkorzanePokrycieRzemioslo.png/33px-SkorzanePokrycieRzemioslo.png" title="Skórzane pokrycie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanePokrycie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanePokrycie);
  if (sum3LeciutkaSkora2===0) {
    parent_object.removeChild(dodajSkorzanePokrycie);
  }
  var dodajLug = document.createElement("table");
  sum3LeciutkaSkora3 = sum3LeciutkaSkora3 + sum1Panaceum3;
  dodajLug.innerHTML = 
  '<table><tr><td class="ilosc" id="leciutka-skora3_add-sum3">'+sum3LeciutkaSkora3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9f/LugRzemioslo.png/33px-LugRzemioslo.png" title="Ług"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLug");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLug);
  if (sum3LeciutkaSkora3===0) {
    parent_object.removeChild(dodajLug);
  }
  var dodajWykwintnyImpregnat = document.createElement("table");
  dodajWykwintnyImpregnat.innerHTML = 
  '<table><tr><td class="ilosc" id="leciutka-skora4_add-sum1">'+sum1LeciutkaSkora4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fb/WykwintnyImpregnatRzemioslo.png/33px-WykwintnyImpregnatRzemioslo.png" title="Wykwintny impregnat"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWykwintnyImpregnat");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWykwintnyImpregnat);
  if (sum1LeciutkaSkora4===0) {
    parent_object.removeChild(dodajWykwintnyImpregnat);
  }
  
  /**SIODLO PONY-EXPRESS*/
  var dodajSkoraZBizona = document.createElement("table");
  sum6SiodloPony1 = sum1Dera1 + sum6SiodloPony1;
  dodajSkoraZBizona.innerHTML = 
  '<table><tr><td class="ilosc" id="siodlo-pony1_add-sum6">'+sum6SiodloPony1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8e/SkoraZBizona.png/33px-SkoraZBizona.png" title="Skóra z bizona"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBizona");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBizona);
  if (sum6SiodloPony1===0) {
    parent_object.removeChild(dodajSkoraZBizona);
  }
  var dodajOzdobaRymarz = document.createElement("table");
  sum5SiodloPony2 = sum5SiodloPony2 + sum1Lejce1;
  dodajOzdobaRymarz.innerHTML = 
  '<table><tr><td class="ilosc" id="siodlo-pony2_add-sum5">'+sum5SiodloPony2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e4/OzdobaRzemioslo.png/33px-OzdobaRzemioslo.png" title="Ozdoba od rymarza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOzdobaRymarz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOzdobaRymarz);
  if (sum5SiodloPony2===0) {
    parent_object.removeChild(dodajOzdobaRymarz);
  }
  var dodajLeciutkaSkora = document.createElement("table");
  dodajLeciutkaSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="siodlo-pony3_add-sum4">'+sum4SiodloPony3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/c0/LeciutkaSkoraRzemioslo.png/33px-LeciutkaSkoraRzemioslo.png" title="Leciutka skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLeciutkaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLeciutkaSkora);
  if (sum4SiodloPony3===0) {
    parent_object.removeChild(dodajLeciutkaSkora);
  }
  var dodajKozackiCzaprak = document.createElement("table");
  dodajKozackiCzaprak.innerHTML = 
  '<table><tr><td class="ilosc" id="siodlo-pony4_add-sum1">'+sum1SiodloPony4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/eb/KozackiCzaprak.png/33px-KozackiCzaprak.png" title="Kozacki czaprak"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKozakiCzaprak");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKozackiCzaprak);
  if (sum1SiodloPony4===0) {
    parent_object.removeChild(dodajKozackiCzaprak);
  }
  
  /**SCHOWEK NA AMUNICJE*/
  var dodajWygarbowanaSkora = document.createElement("table");
  sum2Schowek1 = sum5LeciutkaSkora1 + sum2Schowek1;
  dodajWygarbowanaSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="schowek1_add-sum2">'+sum2Schowek1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/80/WygarbowanaSkoraRzemioslo.png/33px-WygarbowanaSkoraRzemioslo.png" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum2Schowek1===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  var dodajSzczypce = document.createElement("table");
  sum1Schowek2 = sum1Schowek2 + sum3NaprSiodlo1;
  dodajSzczypce.innerHTML = 
  '<table><tr><td class="ilosc" id="schowek2_add-sum1">'+sum1Schowek2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/9f/SzczypceProdukt.png/33px-SzczypceProdukt.png" title="Szczypce"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzczypce");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzczypce);
  if (sum1Schowek2===0) {
    parent_object.removeChild(dodajSzczypce);
  }
  var dodajLuska = document.createElement("table");
  sum1Schowek3 = sum1Schowek3 + sum3Proch1;
  dodajLuska.innerHTML = 
  '<table><tr><td class="ilosc" id="schowek3_add-sum1">'+sum1Schowek3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/6b/Luska.png/33px-Luska.png" title="Łuska"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLuska");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLuska);
  if (sum1Schowek3===0) {
    parent_object.removeChild(dodajLuska);
  }
  var dodajWykwintnyImpregnat = document.createElement("table");
  sum1Schowek4 = sum1Schowek4 + sum1LeciutkaSkora4;
  dodajWykwintnyImpregnat.innerHTML = 
  '<table><tr><td class="ilosc" id="schowek4_add-sum1">'+sum1Schowek4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fb/WykwintnyImpregnatRzemioslo.png/33px-WykwintnyImpregnatRzemioslo.png" title="Wykwintny impregnat"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWykwintnyImpregnat");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWykwintnyImpregnat);
  if (sum1Schowek4===0) {
    parent_object.removeChild(dodajWykwintnyImpregnat);
  }
  
  /**KOWAL polecenia ułozone są alfabetycznie---------------------*/
  /**BAGNET*/
  var bagnet = Number(calcBagnet.value) || 0;
  var sum3Bagnet1 = Number(bagnet*3);
  addSum3Bagnet1.innerHTML = sum3Bagnet1+"x";
  var sum1Bagnet2 = Number(bagnet*1);
  addSum1Bagnet2.innerHTML = sum1Bagnet2+"x";
  var sum1Bagnet3 = Number(bagnet*1);
  addSum1Bagnet3.innerHTML = sum1Bagnet3+"x";
  /**CHUSTA DO CHLODZENIA*/
  var chusta = Number(calcChusta.value) || 0;
  var sum2Chusta1 = Number(chusta*2);
  addSum2Chusta1.innerHTML = sum2Chusta1+"x";
  var sum2Chusta2 = Number(chusta*2);
  addSum2Chusta2.innerHTML = sum2Chusta2+"x";
  var sum1Chusta3 = Number(chusta*1);
  addSum1Chusta3.innerHTML = sum1Chusta3+"x";
  /**GRAFIT*/
  var grafit = Number(calcGrafit.value) || 0;
  var sum1Grafit1 = Number(grafit*1);
  addSum1Grafit1.innerHTML = sum1Grafit1+"x";
  /**KABLAK*/
  var kablak = Number(calcKablak.value) || 0;
  var sum2Kablak1 = Number(kablak*2);
  addSum2Kablak1.innerHTML = sum2Kablak1+"x";
  var sum2Kablak2 = Number(kablak*2);
  addSum2Kablak2.innerHTML = sum2Kablak2+"x";
  /**KAMIEN POLERSKI*/
  var kamPolerski = Number(calcKamPolerski.value) || 0;
  var sum2KamPolerski1 = Number(kamPolerski*2);
  addSum2KamPolerski1.innerHTML = sum2KamPolerski1+"x";
  var sum1KamPolerski2 = Number(kamPolerski*1);
  addSum1KamPolerski2.innerHTML = sum1KamPolerski2+"x";
  var sum1KamPolerski3 = Number(kamPolerski*1);
  addSum1KamPolerski3.innerHTML = sum1KamPolerski3+"x";
  /**KOWADLO*/
  var kowadlo = Number(calcKowadlo.value) || 0;
  var sum1Kowadlo1 = Number(kowadlo*1);
  addSum1Kowadlo1.innerHTML = sum1Kowadlo1+"x";
  var sum1Kowadlo2 = Number(kowadlo*1);
  addSum1Kowadlo2.innerHTML = sum1Kowadlo2+"x";
  var sum1Kowadlo3 = Number(kowadlo*1);
  addSum1Kowadlo3.innerHTML = sum1Kowadlo3+"x";
  /**KSZTALTOWNIK REWOLWERU*/
  var ksztaltownik = Number(calcKsztaltownik.value) || 0;
  var sum2Ksztaltownik1 = Number(ksztaltownik*2);
  addSum2Ksztaltownik1.innerHTML = sum2Ksztaltownik1+"x";
  var sum2Ksztaltownik2 = Number(ksztaltownik*2);
  addSum2Ksztaltownik2.innerHTML = sum2Ksztaltownik2+"x";
  var sum1Ksztaltownik3 = Number(ksztaltownik*1);
  addSum1Ksztaltownik3.innerHTML = sum1Ksztaltownik3+"x";
  var sum1Ksztaltownik4 = Number(ksztaltownik*1);
  addSum1Ksztaltownik4.innerHTML = sum1Ksztaltownik4+"x";
  /**LATARNIA*/
  var latarnia = Number(calcLatarnia.value) || 0;
  var sum3Latarnia1 = Number(latarnia*3);
  addSum3Latarnia1.innerHTML = sum3Latarnia1+"x";
  var sum2Latarnia2 = Number(latarnia*2);
  addSum2Latarnia2.innerHTML = sum2Latarnia2+"x";
  var sum2Latarnia3 = Number(latarnia*2);
  addSum2Latarnia3.innerHTML = sum2Latarnia3+"x";
  var sum1Latarnia4 = Number(latarnia*1);
  addSum1Latarnia4.innerHTML = sum1Latarnia4+"x";
  /**LANCUCH DO BRONI*/
  var lancuch = Number(calcLancuch.value) || 0;
  var sum2Lancuch1 = Number(lancuch*2);
  addSum2Lancuch1.innerHTML = sum2Lancuch1+"x";
  var sum1Lancuch2 = Number(lancuch*1);
  addSum1Lancuch2.innerHTML = sum1Lancuch2+"x";
  /**NARZĘDZIA ZEGARMISTRZOWSKIE*/
  var narzZegarm = Number(calcNarzZegarm.value) || 0;
  var sum3NarzZegarm1 = Number(narzZegarm*3);
  addSum3NarzZegarm1.innerHTML = sum3NarzZegarm1+"x";
  var sum2NarzZegarm2 = Number(narzZegarm*2);
  addSum2NarzZegarm2.innerHTML = sum2NarzZegarm2+"x";
  var sum2NarzZegarm3 = Number(narzZegarm*2);
  addSum2NarzZegarm3.innerHTML = sum2NarzZegarm3+"x";
  var sum2NarzZegarm4 = Number(narzZegarm*2);
  addSum2NarzZegarm4.innerHTML = sum2NarzZegarm4+"x";
  var sum1NarzZegarm5 = Number(narzZegarm*1);
  addSum1NarzZegarm5.innerHTML = sum1NarzZegarm5+"x";
  /**NIERDZEWNE SRUBY*/
  var sruby = Number(calcSruby.value) || 0;
  var sum1Sruby1 = Number(sruby*1);
  addSum1Sruby1.innerHTML = sum1Sruby1+"x";
  var sum1Sruby2 = Number(sruby*1);
  addSum1Sruby2.innerHTML = sum1Sruby2+"x";
  var sum1Sruby3 = Number(sruby*1);
  addSum1Sruby3.innerHTML = sum1Sruby3+"x";
  /**NIEROZLUPANA GEODA*/
  var geoda = Number(calcGeoda.value) || 0;
  var sum1Geoda1 = Number(geoda*1);
  addSum1Geoda1.innerHTML = sum1Geoda1+"x";
  var sum1Geoda2 = Number(geoda*1);
  addSum1Geoda2.innerHTML = sum1Geoda2+"x";
  var sum1Geoda3 = Number(geoda*1);
  addSum1Geoda3.innerHTML = sum1Geoda3+"x";
  /**NIEZASTYGNIETA KULKA*/
  var kulka = Number(calcKulka.value) || 0;
  var sum1Kulka1 = Number(kulka*1);
  addSum1Kulka1.innerHTML = sum1Kulka1+"x";
  var sum1Kulka2 = Number(kulka*1);
  addSum1Kulka2.innerHTML = sum1Kulka2+"x";
  /**NITY*/
  var nity = Number(calcNity.value) || 0;
  var sum3Nity1 = Number(nity*3);
  addSum3Nity1.innerHTML = sum3Nity1+"x";
  var sum1Nity2 = Number(nity*1);
  addSum1Nity2.innerHTML = sum1Nity2+"x";
  /**NOWOCZESNA ZBROJA*/
  var nowZbroja = Number(calcNowZbroja.value) || 0;
  var sum2NowZbroja1 = Number(nowZbroja*2);
  addSum2NowZbroja1.innerHTML = sum2NowZbroja1+"x";
  var sum1NowZbroja2 = Number(nowZbroja*1);
  addSum1NowZbroja2.innerHTML = sum1NowZbroja2+"x";
  var sum1NowZbroja3 = Number(nowZbroja*1);
  addSum1NowZbroja3.innerHTML = sum1NowZbroja3+"x";
  /**NOZ*/
  var noz = Number(calcNoz.value) || 0;
  var sum1Noz1 = Number(noz*1);
  addSum1Noz1.innerHTML = sum1Noz1+"x";
  var sum1Noz2 = Number(noz*1);
  addSum1Noz2.innerHTML = sum1Noz2+"x";
  var sum1Noz3 = Number(noz*1);
  addSum1Noz3.innerHTML = sum1Noz3+"x";
  /**ODWAZNIK*/
  var odwaznik = Number(calcOdwaznik.value) || 0;
  var sum2Odwaznik1 = Number(odwaznik*2);
  addSum2Odwaznik1.innerHTML = sum2Odwaznik1+"x";
  var sum1Odwaznik2 = Number(odwaznik*1);
  addSum1Odwaznik2.innerHTML = sum1Odwaznik2+"x";
  /**OLOWIANA FIGURKA*/
  var figurka = Number(calcFigurka.value) || 0;
  var sum3Figurka1 = Number(figurka*3);
  addSum3Figurka1.innerHTML = sum3Figurka1+"x";
  var sum1Figurka2 = Number(figurka*1);
  addSum1Figurka2.innerHTML = sum1Figurka2+"x";
  var sum1Figurka3 = Number(figurka*1);
  addSum1Figurka3.innerHTML = sum1Figurka3+"x";
  /**OZDOBA*/
  var ozdobaKow = Number(calcOzdobaKow.value) || 0;
  var sum1OzdobaKow1 = Number(ozdobaKow*1);
  addSum1OzdobaKow1.innerHTML = sum1OzdobaKow1+"x";
  /**PATELNIA*/
  var patelnia = Number(calcPatelnia.value) || 0;
  var sum1Patelnia1 = Number(patelnia*1);
  addSum1Patelnia1.innerHTML = sum1Patelnia1+"x";
  var sum1Patelnia2 = Number(patelnia*1);
  addSum1Patelnia2.innerHTML = sum1Patelnia2+"x";
  /**PIERSIOWKA*/
  var piersiowka = Number(calcPiersiowka.value) || 0;
  var sum1Piersiowka1 = Number(piersiowka*1);
  addSum1Piersiowka1.innerHTML = sum1Piersiowka1+"x";
  var sum1Piersiowka2 = Number(piersiowka*1);
  addSum1Piersiowka2.innerHTML = sum1Piersiowka2+"x";
  /**POZYTYWKA*/
  var pozytywka = Number(calcPozytywka.value) || 0;
  var sum5Pozytywka1 = Number(pozytywka*5);
  addSum5Pozytywka1.innerHTML = sum5Pozytywka1+"x";
  var sum4Pozytywka2 = Number(pozytywka*4);
  addSum4Pozytywka2.innerHTML = sum4Pozytywka2+"x";
  var sum4Pozytywka3 = Number(pozytywka*4);
  addSum4Pozytywka3.innerHTML = sum4Pozytywka3+"x";
  var sum1Pozytywka4 = Number(pozytywka*1);
  addSum1Pozytywka4.innerHTML = sum1Pozytywka4+"x";
  /**PRASA DO MIODU*/
  var prasa = Number(calcPrasa.value) || 0;
  var sum3Prasa1 = Number(prasa*3);
  addSum3Prasa1.innerHTML = sum3Prasa1+"x";
  var sum2Prasa2 = Number(prasa*2);
  addSum2Prasa2.innerHTML = sum2Prasa2+"x";
  var sum1Prasa3 = Number(prasa*1);
  addSum1Prasa3.innerHTML = sum1Prasa3+"x";
  var sum1Prasa4 = Number(prasa*1);
  addSum1Prasa4.innerHTML = sum1Prasa4+"x";
  /**REKOJESC*/
  var rekojesc = Number(calcRekojesc.value) || 0;
  var sum1Rekojesc1 = Number(rekojesc*1);
  addSum1Rekojesc1.innerHTML = sum1Rekojesc1+"x";
  var sum1Rekojesc2 = Number(rekojesc*1);
  addSum1Rekojesc2.innerHTML = sum1Rekojesc2+"x";
  var sum1Rekojesc3 = Number(rekojesc*1);
  addSum1Rekojesc3.innerHTML = sum1Rekojesc3+"x";
  var sum1Rekojesc4 = Number(rekojesc*1);
  addSum1Rekojesc4.innerHTML = sum1Rekojesc4+"x";
  /**SCYZORYK*/
  var scyzoryk = Number(calcScyzoryk.value) || 0;
  var sum1Scyzoryk1 = Number(scyzoryk*1);
  addSum1Scyzoryk1.innerHTML = sum1Scyzoryk1+"x";
  var sum1Scyzoryk2 = Number(scyzoryk*1);
  addSum1Scyzoryk2.innerHTML = sum1Scyzoryk2+"x";
  /**SIODLO WELLS FARGO*/
  var wells = Number(calcWells.value) || 0;
  var sum1Wells1 = Number(wells*1);
  addSum1Wells1.innerHTML = sum1Wells1+"x";
  var sum1Wells2 = Number(wells*1);
  addSum1Wells2.innerHTML = sum1Wells2+"x";
  var sum1Wells3 = Number(wells*1);
  addSum1Wells3.innerHTML = sum1Wells3+"x";
  /**SMAR GRAFITOWY*/
  var smar = Number(calcSmar.value) || 0;
  var sum1Smar1 = Number(smar*1);
  addSum1Smar1.innerHTML = sum1Smar1+"x";
  var sum1Smar2 = Number(smar*1);
  addSum1Smar2.innerHTML = sum1Smar2+"x";
  /**SPROSZKOWANY GRAFIT*/
  var sproszGrafit = Number(calcSproszGrafit.value) || 0;
  var sum1SproszGrafit1 = Number(sproszGrafit*1);
  addSum1SproszGrafit1.innerHTML = sum1SproszGrafit1+"x";
  /**STAL*/
  var stal = Number(calcStal.value) || 0;
  var sum1Stal1 = Number(stal*1);
  addSum1Stal1.innerHTML = sum1Stal1+"x";
  var sum1Stal2 = Number(stal*1);
  addSum1Stal2.innerHTML = sum1Stal2+"x";
  /**STALOWE OSTRZE*/
  var stalOstrze = Number(calcStalOstrze.value) || 0;
  var sum2StalOstrze1 = Number(stalOstrze*2);
  addSum2StalOstrze1.innerHTML = sum2StalOstrze1+"x";
  var sum1StalOstrze2 = Number(stalOstrze*1);
  addSum1StalOstrze2.innerHTML = sum1StalOstrze2+"x";
  var sum1StalOstrze3 = Number(stalOstrze*1);
  addSum1StalOstrze3.innerHTML = sum1StalOstrze3+"x";
  /**STOPIONE ZELAZO*/
  var stopZelazo = Number(calcStopZelazo.value) || 0;
  var sum1StopZelazo1 = Number(stopZelazo*1);
  addSum1StopZelazo1.innerHTML = sum1StopZelazo1+"x";
  var sum1StopZelazo2 = Number(stopZelazo*1);
  addSum1StopZelazo2.innerHTML = sum1StopZelazo2+"x";
  /**STOPIONY OLOW*/
  var stopOlow = Number(calcStopOlow.value) || 0;
  var sum1StopOlow1 = Number(stopOlow*1);
  addSum1StopOlow1.innerHTML = sum1StopOlow1+"x";
  var sum1StopOlow2 = Number(stopOlow*1);
  addSum1StopOlow2.innerHTML = sum1StopOlow2+"x";
  /**SZKLO*/
  var szklo = Number(calcSzklo.value) || 0;
  var sum1Szklo1 = Number(szklo*1);
  addSum1Szklo1.innerHTML = sum1Szklo1+"x";
  var sum1Szklo2 = Number(szklo*1);
  addSum1Szklo2.innerHTML = sum1Szklo2+"x";
  var sum1Szklo3 = Number(szklo*1);
  addSum1Szklo3.innerHTML = sum1Szklo3+"x";
  var sum1Szklo4 = Number(szklo*1);
  addSum1Szklo4.innerHTML = sum1Szklo4+"x";
  /**WESTERNER*/
  var westerner = Number(calcWesterner.value) || 0;
  var sum1Westerner1 = Number(westerner*1);
  addSum1Westerner1.innerHTML = sum1Westerner1+"x";
  var sum1Westerner2 = Number(westerner*1);
  addSum1Westerner2.innerHTML = sum1Westerner2+"x";
  /**ZAOSTRZENIEBRONI*/
  var zaostrzenie = Number(calcZaostrzenie.value) || 0;
  var sum2Zaostrzenie1 = Number(zaostrzenie*2);
  addSum2Zaostrzenie1.innerHTML = sum2Zaostrzenie1+"x";
  var sum1Zaostrzenie2 = Number(zaostrzenie*1);
  addSum1Zaostrzenie2.innerHTML = sum1Zaostrzenie2+"x";
  
  /**GRAFIT*/
  var dodajWegiel = document.createElement("table");
  sum1Grafit1 = sum1Grafit1 + sum2Znakownik2;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="grafit1_add-sum1">'+sum1Grafit1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum1Grafit1===0) {
    parent_object.removeChild(dodajWegiel);
  }
  
  /**SPROSZKOWANY GRAFIT*/
  var dodajGrafit = document.createElement("table");
  dodajGrafit.innerHTML = 
  '<table><tr><td class="ilosc" id="sprosz-grafit1_add-sum1">'+sum1SproszGrafit1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3f/GrafitRzemioslo.png/33px-GrafitRzemioslo.png" title="Grafit"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajGrafit");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGrafit);
  if (sum1SproszGrafit1===0) {
    parent_object.removeChild(dodajGrafit);
  }
  
  /**SMAR GRAFITOWY*/
  var dodajSproszkowanyGrafit = document.createElement("table");
  dodajSproszkowanyGrafit.innerHTML = 
  '<table><tr><td class="ilosc" id="smar1_add-sum1">'+sum1Smar1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/50/SproszkowanyGrafitRzemioslo.png/33px-SproszkowanyGrafitRzemioslo.png" title="Sproszkowany grafit"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSproszkowanyGrafit");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSproszkowanyGrafit);
  if (sum1Smar1===0) {
    parent_object.removeChild(dodajSproszkowanyGrafit);
  }
  var dodajWelna = document.createElement("table");
  sum1Smar2 = sum1Smar2 + sum2Wypelniacz3;
  dodajWelna.innerHTML = 
  '<table><tr><td class="ilosc" id="smar2_add-sum1">'+sum1Smar2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/ba/Welna.png/33px-Welna.png" title="Wełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWelna);
  if (sum1Smar2===0) {
    parent_object.removeChild(dodajWelna);
  }
  
  /**PATELNIA*/
  var dodajMlotek = document.createElement("table");
  sum1Patelnia1 = sum1Patelnia1 + sum1CzescPowozu3;
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc" id="patelnia1_add-sum1">'+sum1Patelnia1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Mlotek.png/33px-Mlotek.png" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum1Patelnia1===0) {
    parent_object.removeChild(dodajMlotek);
  }
  var dodajPretyMetalowe = document.createElement("table");
  sum1Patelnia2 = sum2KoloPowozu2 + sum1Patelnia2;
  dodajPretyMetalowe.innerHTML = 
  '<table><tr><td class="ilosc" id="patelnia2_add-sum1">'+sum1Patelnia2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ab/Skora.png/33px-Skora.png" title="Skóra"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajPretyMetalowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPretyMetalowe);
  if (sum1Patelnia2===0) {
    parent_object.removeChild(dodajPretyMetalowe);
  }
  
  /**STOPIONE ZELAZO*/
  var dodajDrewno = document.createElement("table");
  sum1StopZelazo1 = sum1StopZelazo1 + sum3KoloPowozu1;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="stop-zelazo1_add-sum1">'+sum1StopZelazo1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum1StopZelazo1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajPretyMetalowe = document.createElement("table");
  sum1StopZelazo2 = sum1Patelnia2 + sum1StopZelazo2;
  dodajPretyMetalowe.innerHTML = 
  '<table><tr><td class="ilosc" id="stop-zelazo2_add-sum1">'+sum1StopZelazo2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/09/PretyMetalowe.png/33px-PretyMetalowe.png" title="Pręty metalowe"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajPretyMetalowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPretyMetalowe);
  if (sum1StopZelazo2===0) {
    parent_object.removeChild(dodajPretyMetalowe);
  }
  
  /**NOZ*/
  var dodajMlotek = document.createElement("table");
  sum1Noz1 = sum1Patelnia1 + sum1Noz1;
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc" id="noz1_add-sum1">'+sum1Noz1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Mlotek.png/33px-Mlotek.png" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum1Noz1===0) {
    parent_object.removeChild(dodajMlotek);
  }
  var dodajKamienie = document.createElement("table");
  sum1Noz2 = sum1Noz2 + sum1Krzesiwo2;
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="noz2_add-sum1">'+sum1Noz2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum1Noz2===0) {
    parent_object.removeChild(dodajKamienie);
  }
  var dodajStopioneZelazo = document.createElement("table");
  dodajStopioneZelazo.innerHTML = 
  '<table><tr><td class="ilosc" id="noz3_add-sum1">'+sum1Noz3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4d/StopioneZelazoRzemioslo.png/33px-StopioneZelazoRzemioslo.png" title="Stopione żelazo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStopioneZelazo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStopioneZelazo);
  if (sum1Noz3===0) {
    parent_object.removeChild(dodajStopioneZelazo);
  }
  
  /**ZAOSTRZENIE BRONI*/
  var dodajBawelna = document.createElement("table");
  sum2Zaostrzenie1 = sum2Zaostrzenie1 + sum4Wypelniacz1;
  dodajBawelna.innerHTML = 
  '<table><tr><td class="ilosc" id="zaostrzenie1_add-sum2">'+sum2Zaostrzenie1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fb/Bawelna.png/33px-Bawelna.png" title="Bawełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBawelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBawelna);
  if (sum2Zaostrzenie1===0) {
    parent_object.removeChild(dodajBawelna);
  }
  var dodajKamienie = document.createElement("table");
  sum1Zaostrzenie2 = sum1Zaostrzenie2 + sum1Noz2;
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="zaostrzenie2_add-sum1">'+sum1Zaostrzenie2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum1Zaostrzenie2===0) {
    parent_object.removeChild(dodajKamienie);
  }
  
  /**BAGNET*/
  var dodajBawelna = document.createElement("table");
  sum3Bagnet1 = sum3Bagnet1 + sum2Zaostrzenie1;
  dodajBawelna.innerHTML = 
  '<table><tr><td class="ilosc" id="bagnet1_add-sum3">'+sum3Bagnet1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fb/Bawelna.png/33px-Bawelna.png" title="Bawełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBawelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBawelna);
  if (sum3Bagnet1===0) {
    parent_object.removeChild(dodajBawelna);
  }
  var dodajSkora = document.createElement("table");
  sum1Bagnet2 = sum1Bagnet2 + sum1WygarSkora1;
  dodajSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="bagnet2_add-sum1">'+sum1Bagnet2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ab/Skora.png/33px-Skora.png" title="Skóra"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkora);
  if (sum1Bagnet2===0) {
    parent_object.removeChild(dodajSkora);
  }
  var dodajNoz = document.createElement("table");
  sum1Bagnet3 = sum1Bagnet3 + sum1Dera3;
  dodajNoz.innerHTML = 
  '<table><tr><td class="ilosc" id="bagnet3_add-sum1">'+sum1Bagnet3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/NozRzemioslo.png/33px-NozRzemioslo.png" title="Nóż"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNoz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNoz);
  if (sum1Bagnet3===0) {
    parent_object.removeChild(dodajNoz);
  }
  
  /**ODWAZNIK*/
  var dodajKamienie = document.createElement("table");
  sum2Odwaznik1 = sum2Odwaznik1 + sum1Zaostrzenie2;
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="odwaznik1_add-sum2">'+sum2Odwaznik1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum2Odwaznik1===0) {
    parent_object.removeChild(dodajKamienie);
  }
  var dodajStopioneZelazo = document.createElement("table");
  sum1Odwaznik2 = sum1Odwaznik2 + sum1Noz3;
  dodajStopioneZelazo.innerHTML = 
  '<table><tr><td class="ilosc" id="odwaznik2_add-sum1">'+sum1Odwaznik2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4d/StopioneZelazoRzemioslo.png/33px-StopioneZelazoRzemioslo.png" title="Stopione żelazo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStopioneZelazo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStopioneZelazo);
  if (sum1Odwaznik2===0) {
    parent_object.removeChild(dodajStopioneZelazo);
  }
  
  /**STAL*/
  var dodajWegiel = document.createElement("table");
  sum1Stal1 = sum1Stal1 + sum1Grafit1;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="stal1_add-sum1">'+sum1Stal1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum1Stal1===0) {
    parent_object.removeChild(dodajWegiel);
  }
  
  var dodajStopioneZelazo = document.createElement("table");
  sum1Stal2 = sum1Stal2 + sum1Odwaznik2;
  dodajStopioneZelazo.innerHTML = 
  '<table><tr><td class="ilosc" id="stal2_add-sum1">'+sum1Stal2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4d/StopioneZelazoRzemioslo.png/33px-StopioneZelazoRzemioslo.png" title="Stopione żelazo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStopioneZelazo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStopioneZelazo);
  if (sum1Stal2===0) {
    parent_object.removeChild(dodajStopioneZelazo);
  }
  
  /**STOPIONY OLOW*/
  var dodajOlow = document.createElement("table");
  sum1StopOlow1 = sum1StopOlow1 + sum1OzdobaRym2;
  dodajOlow.innerHTML = 
  '<table><tr><td class="ilosc" id="stop-olow1_add-sum1">'+sum1StopOlow1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/Olow.png/33px-Olow.png" title="Ołów"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOlow");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOlow);
  if (sum1StopOlow1===0) {
    parent_object.removeChild(dodajOlow);
  }
  var dodajWegielDrzewny = document.createElement("table");
  sum1StopOlow2 = sum1StopOlow2 + sum1Lug2;
  dodajWegielDrzewny.innerHTML = 
  '<table><tr><td class="ilosc" id="stop-olow2_add-sum1">'+sum1StopOlow2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/78/WegielDrzewny.png/33px-WegielDrzewny.png" title="Węgiel drzewny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegielDrzewny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegielDrzewny);
  if (sum1StopOlow2===0) {
    parent_object.removeChild(dodajWegielDrzewny);
  }
  
  /**KOWADLO*/
  var dodajGrafit = document.createElement("table");
  sum1Kowadlo1 = sum1Kowadlo1 + sum1SproszGrafit1;
  dodajGrafit.innerHTML = 
  '<table><tr><td class="ilosc" id="kowadlo1_add-sum1">'+sum1Kowadlo1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3f/GrafitRzemioslo.png/33px-GrafitRzemioslo.png" title="Grafit"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajGrafit");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGrafit);
  if (sum1Kowadlo1===0) {
    parent_object.removeChild(dodajGrafit);
  }
  var dodajStal = document.createElement("table");
  sum1Kowadlo2 = sum1Kowadlo2 + sum3FasPuszka5;
  dodajStal.innerHTML = 
  '<table><tr><td class="ilosc" id="kowadlo2_add-sum1">'+sum1Kowadlo2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/92/StalRzemioslo.png/33px-StalRzemioslo.png" title="Stal"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStal");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStal);
  if (sum1Kowadlo2===0) {
    parent_object.removeChild(dodajStal);
  }
  var dodajKrzesiwo = document.createElement("table");
  sum1Kowadlo3 = sum1Kowadlo3 + sum1Znakownik4;
  dodajKrzesiwo.innerHTML = 
  '<table><tr><td class="ilosc" id="kowadlo3_add-sum1">'+sum1Kowadlo3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8d/KrzesiwoRzemioslo.png/33px-KrzesiwoRzemioslo.png" title="Krzesiwo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKrzesiwo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKrzesiwo);
  if (sum1Kowadlo3===0) {
    parent_object.removeChild(dodajKrzesiwo);
  }
  
  /**OLOWIANA FIGURKA*/
  var dodajDrewno = document.createElement("table");
  sum3Figurka1 = sum3Figurka1 + sum1StopZelazo1;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="figurka1_add-sum3">'+sum3Figurka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum3Figurka1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajOlow = document.createElement("table");
  sum1Figurka2 = sum1Figurka2 + sum1StopOlow1;
  dodajOlow.innerHTML = 
  '<table><tr><td class="ilosc" id="figurka2_add-sum1">'+sum1Figurka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/Olow.png/33px-Olow.png" title="Ołów"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOlow");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOlow);
  if (sum1Figurka2===0) {
    parent_object.removeChild(dodajOlow);
  }
  var dodajWegielDrzewny = document.createElement("table");
  sum1Figurka3 = sum1Figurka3 + sum1StopOlow2;
  dodajWegielDrzewny.innerHTML = 
  '<table><tr><td class="ilosc" id="figurka3_add-sum1">'+sum1Figurka3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/78/WegielDrzewny.png/33px-WegielDrzewny.png" title="Węgiel drzewny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegielDrzewny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegielDrzewny);
  if (sum1Figurka3===0) {
    parent_object.removeChild(dodajWegielDrzewny);
  }
  
  /**NIEZASTYGNIETAKULKA*/
  var dodajKamieniePolszlachetne = document.createElement("table");
  sum1Kulka1 = sum1Kulka1 + sum2LekSiodla2;
  dodajKamieniePolszlachetne.innerHTML = 
  '<table><tr><td class="ilosc" id="kulka1_add-sum1">'+sum1Kulka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/31/KamieniePolszlachetne.png/33px-KamieniePolszlachetne.png" title="Kamienie półszlachetne"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamieniePolszlachetne");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamieniePolszlachetne);
  if (sum1Kulka1===0) {
    parent_object.removeChild(dodajKamieniePolszlachetne);
  }
  var dodajZywica = document.createElement("table");
  sum1Kulka2 = sum1Kulka2 + sum1LekSiodla1;
  dodajZywica.innerHTML = 
  '<table><tr><td class="ilosc" id="kulka2_add-sum1">'+sum1Kulka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/ZywicaRzemioslo.png/33px-ZywicaRzemioslo.png" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum1Kulka2===0) {
    parent_object.removeChild(dodajZywica);
  }
  
  /**NITY*/
  var dodajGwozdzie = document.createElement("table");
  sum3Nity1 = sum3Nity1 + sum1KoloPowozu3;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc" id="nity1_add-sum3">'+sum3Nity1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e1/Gwozdzie.png/33px-Gwozdzie.png" title="Gwoździe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajGwozdzie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGwozdzie);
  if (sum3Nity1===0) {
    parent_object.removeChild(dodajGwozdzie);
  }
  var dodajMlotek = document.createElement("table");
  sum1Nity2 = sum1Nity2 + sum1Noz1;
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc" id="nity2_add-sum1">'+sum1Nity2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Mlotek.png/33px-Mlotek.png" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum1Nity2===0) {
    parent_object.removeChild(dodajMlotek);
  }
  
  /**KABLAK*/
  var dodajDrutKolczasty = document.createElement("table");
  sum2Kablak1 = sum2Kablak1 + sum3Ostrogi1;
  dodajDrutKolczasty.innerHTML = 
  '<table><tr><td class="ilosc" id="kablak1_add-sum2">'+sum2Kablak1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/40/DrutKolczasty.png/33px-DrutKolczasty.png" title="Drut kolczasty"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrutKolczasty");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrutKolczasty);
  if (sum2Kablak1===0) {
    parent_object.removeChild(dodajDrutKolczasty);
  }
  var dodajSkoraZBobra = document.createElement("table");
  sum2Kablak2 = sum2Kablak2 + sum1Dera2;
  dodajSkoraZBobra.innerHTML = 
  '<table><tr><td class="ilosc" id="kablak2_add-sum2">'+sum2Kablak2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4b/SkoraZBobra.png/33px-SkoraZBobra.png" title="Skóra z bobra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBobra");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBobra);
  if (sum2Kablak2===0) {
    parent_object.removeChild(dodajSkoraZBobra);
  }
  
  /**CHUSTA DO CHLODZENIA*/
  var dodajWelna = document.createElement("table");
  sum2Chusta1 = sum2Chusta1 + sum1Smar2;
  dodajWelna.innerHTML = 
  '<table><tr><td class="ilosc" id="chusta1_add-sum2">'+sum2Chusta1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/ba/Welna.png/33px-Welna.png" title="Wełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWelna);
  if (sum2Chusta1===0) {
    parent_object.removeChild(dodajWelna);
  }
  var dodajSzpulkaDrutu = document.createElement("table");
  sum2Chusta2 = sum2Chusta2 + sum1Uzda2;
  dodajSzpulkaDrutu.innerHTML = 
  '<table><tr><td class="ilosc" id="chusta2_add-sum2">'+sum2Chusta2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/SzpulkaDrutu.png/33px-SzpulkaDrutu.png" title="Szpulka drutu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzpulkaDrutu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzpulkaDrutu);
  if (sum2Chusta2===0) {
    parent_object.removeChild(dodajSzpulkaDrutu);
  }
  var dodajSzklankaWody = document.createElement("table");
  sum1Chusta3 = sum1Kompas1 + sum1Chusta3;
  dodajSzklankaWody.innerHTML = 
  '<table><tr><td class="ilosc" id="chusta3_add-sum1">'+sum1Chusta3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/cd/SzklankaWody.png/33px-SzklankaWody.png" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum1Chusta3===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  
  /**LANCUCH DO BRONI*/
  var dodajSzpulkaDrutu = document.createElement("table");
  sum2Lancuch1 = sum2Lancuch1 + sum2Chusta2;
  dodajSzpulkaDrutu.innerHTML = 
  '<table><tr><td class="ilosc" id="lancuch1_add-sum2">'+sum2Lancuch1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/SzpulkaDrutu.png/33px-SzpulkaDrutu.png" title="Szpulka drutu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzpulkaDrutu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzpulkaDrutu);
  if (sum2Lancuch1===0) {
    parent_object.removeChild(dodajSzpulkaDrutu);
  }
  var dodajBransoletaZZebem = document.createElement("table");
  dodajBransoletaZZebem.innerHTML = 
  '<table><tr><td class="ilosc" id="lancuch2_add-sum1">'+sum1Lancuch2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/94/BransoletaZZebem.png/33px-BransoletaZZebem.png" title="Bransoleta z zębem"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBransoletaZZebem");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBransoletaZZebem);
  if (sum1Lancuch2===0) {
    parent_object.removeChild(dodajBransoletaZZebem);
  }
  
  /**REKOJESC*/
  var dodajZywica = document.createElement("table");
  sum1Rekojesc1 = sum1Rekojesc1 + sum1Kulka2;
  dodajZywica.innerHTML = 
  '<table><tr><td class="ilosc" id="rekojesc1_add-sum1">'+sum1Rekojesc1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/ZywicaRzemioslo.png/33px-ZywicaRzemioslo.png" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum1Rekojesc1===0) {
    parent_object.removeChild(dodajZywica);
  }
  var dodajPila = document.createElement("table");
  sum1Rekojesc2 = sum1Rekojesc2 + sum1Ostrogi3;
  dodajPila.innerHTML = 
  '<table><tr><td class="ilosc" id="rekojesc2_add-sum1">'+sum1Rekojesc2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Pila.png/33px-Pila.png" title="Piła"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPila");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPila);
  if (sum1Rekojesc2===0) {
    parent_object.removeChild(dodajPila);
  }
  var dodajDrewno = document.createElement("table");
  sum1Rekojesc3 = sum1Rekojesc3 + sum3Figurka1;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="rekojesc3_add-sum1">'+sum1Rekojesc3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum1Rekojesc3===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajGwozdzie = document.createElement("table");
  sum1Rekojesc4 = sum1Rekojesc4 + sum3Nity1;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc" id="rekojesc3_add-sum1">'+sum1Rekojesc4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e1/Gwozdzie.png/33px-Gwozdzie.png" title="Gwoździe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajGwozdzie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGwozdzie);
  if (sum1Rekojesc4===0) {
    parent_object.removeChild(dodajGwozdzie);
  }
  
  /**KSZTALTOWNIK REWOLWERU*/
  var dodajGrafit = document.createElement("table");
  sum2Ksztaltownik1 = sum2Ksztaltownik1 + sum1Kowadlo1;
  dodajGrafit.innerHTML = 
  '<table><tr><td class="ilosc" id="ksztaltownik1_add-sum2">'+sum2Ksztaltownik1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3f/GrafitRzemioslo.png/33px-GrafitRzemioslo.png" title="Grafit"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajGrafit");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajGrafit);
  if (sum2Ksztaltownik1===0) {
    parent_object.removeChild(dodajGrafit);
  }
  var dodajWegiel = document.createElement("table");
  sum2Ksztaltownik2 = sum2Ksztaltownik2 + sum1Stal1;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="ksztaltownik2_add-sum2">'+sum2Ksztaltownik2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum2Ksztaltownik2===0) {
    parent_object.removeChild(dodajWegiel);
  }
  var dodajMlotek = document.createElement("table");
  sum1Ksztaltownik3 = sum1Ksztaltownik3 + sum1Nity2;
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc" id="ksztaltownik3_add-sum1">'+sum1Ksztaltownik3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Mlotek.png/33px-Mlotek.png" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum1Ksztaltownik3===0) {
    parent_object.removeChild(dodajMlotek);
  }
  var dodajStopioneZelazo = document.createElement("table");
  sum1Ksztaltownik4 = sum1Stal2 + sum1Ksztaltownik4;
  dodajStopioneZelazo.innerHTML = 
  '<table><tr><td class="ilosc" id="ksztaltownik4_add-sum1">'+sum1Ksztaltownik4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4d/StopioneZelazoRzemioslo.png/33px-StopioneZelazoRzemioslo.png" title="Stopione żelazo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStopioneZelazo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStopioneZelazo);
  if (sum1Ksztaltownik4===0) {
    parent_object.removeChild(dodajStopioneZelazo);
  }
  
  /**STALOWE OSTRZE*/
  var dodajWegiel = document.createElement("table");
  sum2StalOstrze1 = sum2Ksztaltownik2 + sum2StalOstrze1;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="stal-ostrze1_add-sum2">'+sum2StalOstrze1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum2StalOstrze1===0) {
    parent_object.removeChild(dodajWegiel);
  }
  var dodajMlotKowalski = document.createElement("table");
  sum1StalOstrze2 = sum1StalOstrze2 + sum1Strzemie2;
  dodajMlotKowalski.innerHTML = 
  '<table><tr><td class="ilosc" id="stal-ostrze2_add-sum1">'+sum1StalOstrze2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/35/MlotKowalski.png/33px-MlotKowalski.png" title="Młot kowalski"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotKowalski");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotKowalski);
  if (sum1StalOstrze2===0) {
    parent_object.removeChild(dodajMlotKowalski);
  }
  var dodajStal = document.createElement("table");
  sum1StalOstrze3 = sum1StalOstrze3 + sum1Kowadlo2;
  dodajStal.innerHTML = 
  '<table><tr><td class="ilosc" id="stal-ostrze3_add-sum1">'+sum1StalOstrze3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/92/StalRzemioslo.png/33px-StalRzemioslo.png" title="Stal"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStal");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStal);
  if (sum1StalOstrze3===0) {
    parent_object.removeChild(dodajStal);
  }
  
  /**OZDBA KOWAL*/
  var dodajZlotyPyl = document.createElement("table");
  dodajZlotyPyl.innerHTML = 
  '<table><tr><td class="ilosc" id="ozdoba-kow1_add-sum1">'+sum1OzdobaKow1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/b7/ZlotyPyl.png/33px-ZlotyPyl.png" title="Złoty pył"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZlotyPyl");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZlotyPyl);
  if (sum1OzdobaKow1===0) {
    parent_object.removeChild(dodajZlotyPyl);
  }
  
  /**WESTERNER*/
  var dodajKsztaltownikRewolweru = document.createElement("table");
  dodajKsztaltownikRewolweru.innerHTML = 
  '<table><tr><td class="ilosc" id="westerner1_add-sum1">'+sum1Westerner1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/3f/KsztaltownikRewolweruRzemioslo.png/33px-KsztaltownikRewolweruRzemioslo.png" title="Kształtownik rewolweru"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKsztaltownikRewolweru");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKsztaltownikRewolweru);
  if (sum1Westerner1===0) {
    parent_object.removeChild(dodajKsztaltownikRewolweru);
  }
  var dodajKuleDuzegoKalibru = document.createElement("table");
  dodajKuleDuzegoKalibru.innerHTML = 
  '<table><tr><td class="ilosc" id="westerner2_add-sum1">'+sum1Westerner2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d4/KuleDuzegoKalibru.png/33px-KuleDuzegoKalibru.png" title="Kule dużego kalibru"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKuleDuzegoKalibru");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKuleDuzegoKalibru);
  if (sum1Westerner2===0) {
    parent_object.removeChild(dodajKuleDuzegoKalibru);
  }
  
  /**NIEROZLUPANA GEODA*/
  var dodajKamienie = document.createElement("table");
  sum1Geoda1 = sum2Odwaznik1 + sum1Geoda1;
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="geoda1_add-sum1">'+sum1Geoda1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum1Geoda1===0) {
    parent_object.removeChild(dodajKamienie);
  }
  var dodajPila = document.createElement("table");
  sum1Geoda2 = sum1Geoda2 + sum1Rekojesc2;
  dodajPila.innerHTML = 
  '<table><tr><td class="ilosc" id="geoda2_add-sum1">'+sum1Geoda2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Pila.png/33px-Pila.png" title="Piła"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPila");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPila);
  if (sum1Geoda2===0) {
    parent_object.removeChild(dodajPila);
  }
  var dodajMlotKowalski = document.createElement("table");
  sum1Geoda3 = sum1Geoda3 + sum1StalOstrze2;
  dodajMlotKowalski.innerHTML = 
  '<table><tr><td class="ilosc" id="geoda3_add-sum1">'+sum1Geoda3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/35/MlotKowalski.png/33px-MlotKowalski.png" title="Młot kowalski"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotKowalski");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotKowalski);
  if (sum1Geoda3===0) {
    parent_object.removeChild(dodajMlotKowalski);
  }
  
  /**SZWAJCARSKI SCYZORYK*/
  var dodajOzdobaKowal = document.createElement("table");
  dodajOzdobaKowal.innerHTML = 
  '<table><tr><td class="ilosc" id="scyzoryk1_add-sum1">'+sum1Scyzoryk1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e4/OzdobaRzemioslo.png/33px-OzdobaRzemioslo.png" title="Ozdoba od kowala"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOzdobaKowal");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOzdobaKowal);
  if (sum1Scyzoryk1===0) {
    parent_object.removeChild(dodajOzdobaKowal);
  }
  var dodajScyzoryk = document.createElement("table");
  dodajScyzoryk.innerHTML = 
  '<table><tr><td class="ilosc" id="scyzoryk2_add-sum1">'+sum1Scyzoryk2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/db/Scyzoryk.png/33px-Scyzoryk.png" title="Scyzoryk"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajScyzoryk");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajScyzoryk);
  if (sum1Scyzoryk2===0) {
    parent_object.removeChild(dodajScyzoryk);
  }
  
  /**SZKLO*/
  var dodajStopionyOlow = document.createElement("table");
  dodajStopionyOlow.innerHTML = 
  '<table><tr><td class="ilosc" id="szklo1_add-sum1">'+sum1Szklo1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/StopionyOlowRzemioslo.png/33px-StopionyOlowRzemioslo.png" title="Stopiony ołów"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStopionyOlow");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStopionyOlow);
  if (sum1Szklo1===0) {
    parent_object.removeChild(dodajStopionyOlow);
  }
  var dodajNiezastygnietaKulka = document.createElement("table");
  dodajNiezastygnietaKulka.innerHTML = 
  '<table><tr><td class="ilosc" id="szklo2_add-sum1">'+sum1Szklo2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/72/NiezastygnietaKulkaRzemioslo.png/33px-NiezastygnietaKulkaRzemioslo.png" title="Niezastygnięta kulka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNiezastygnietaKulka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNiezastygnietaKulka);
  if (sum1Szklo2===0) {
    parent_object.removeChild(dodajNiezastygnietaKulka);
  }
  var dodajKamieniePolszlachetne = document.createElement("table");
  sum1Szklo3 = sum1Szklo3 + sum1Kulka1;
  dodajKamieniePolszlachetne.innerHTML = 
  '<table><tr><td class="ilosc" id="szklo3_add-sum1">'+sum1Szklo3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/31/KamieniePolszlachetne.png/33px-KamieniePolszlachetne.png" title="Kamienie półszlachetne"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamieniePolszlachetne");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamieniePolszlachetne);
  if (sum1Szklo3===0) {
    parent_object.removeChild(dodajKamieniePolszlachetne);
  }
  var dodajWegielDrzewny = document.createElement("table");
  sum1Szklo4 = sum1Figurka3 + sum1Szklo4;
  dodajWegielDrzewny.innerHTML = 
  '<table><tr><td class="ilosc" id="szklo4_add-sum1">'+sum1Szklo4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/78/WegielDrzewny.png/33px-WegielDrzewny.png" title="Węgiel drzewny"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegielDrzewny");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegielDrzewny);
  if (sum1Szklo4===0) {
    parent_object.removeChild(dodajWegielDrzewny);
  }
  
  /**KAMIEN POLERSKI*/
  var dodajRopa = document.createElement("table");
  sum2KamPolerski1 = sum2KamPolerski1 + sum1Impregnat1;
  dodajRopa.innerHTML = 
  '<table><tr><td class="ilosc" id="kam-polerski1_add-sum2">'+sum2KamPolerski1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/Ropa.png/33px-Ropa.png" title="Ropa"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRopa");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRopa);
  if (sum2KamPolerski1===0) {
    parent_object.removeChild(dodajRopa);
  }
  var dodajKamienie = document.createElement("table");
  sum1KamPolerski2 = sum1KamPolerski2 + sum1Geoda1;
  dodajKamienie.innerHTML = 
  '<table><tr><td class="ilosc" id="kam-polerski2_add-sum1">'+sum1KamPolerski2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/00/Kamienie.png/33px-Kamienie.png" title="Kamienie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamienie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamienie);
  if (sum1KamPolerski2===0) {
    parent_object.removeChild(dodajKamienie);
  }
  var dodajSkoraZBizona = document.createElement("table");
  sum1KamPolerski3 = sum1KamPolerski3 + sum6SiodloPony1;
  dodajSkoraZBizona.innerHTML = 
  '<table><tr><td class="ilosc" id="kam-polerski3_add-sum1">'+sum1KamPolerski3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8e/SkoraZBizona.png/33px-SkoraZBizona.png" title="Skóra z bizona"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBizona");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBizona);
  if (sum1KamPolerski3===0) {
    parent_object.removeChild(dodajSkoraZBizona);
  }
  
  /**NIERDZEWNE SRUBY*/
  var dodajStopionyOlow = document.createElement("table");
  sum1Sruby1 = sum1Sruby1 + sum1Szklo1;
  dodajStopionyOlow.innerHTML = 
  '<table><tr><td class="ilosc" id="nierdzewne-sruby1_add-sum1">'+sum1Sruby1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d8/StopionyOlowRzemioslo.png/33px-StopionyOlowRzemioslo.png" title="Stopiony ołów"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStopionyOlow");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStopionyOlow);
  if (sum1Sruby1===0) {
    parent_object.removeChild(dodajStopionyOlow);
  }
  var dodajStopioneZelazo = document.createElement("table");
  sum1Sruby2 = sum1Sruby2 + sum1Ksztaltownik4;
  dodajStopioneZelazo.innerHTML = 
  '<table><tr><td class="ilosc" id="nierdzewne-sruby2_add-sum1">'+sum1Sruby2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4d/StopioneZelazoRzemioslo.png/33px-StopioneZelazoRzemioslo.png" title="Stopione żelazo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStopioneZelazo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStopioneZelazo);
  if (sum1Sruby2===0) {
    parent_object.removeChild(dodajStopioneZelazo);
  }
  var dodajStal = document.createElement("table");
  sum1Sruby3 = sum1StalOstrze3 + sum1Sruby3;
  dodajStal.innerHTML = 
  '<table><tr><td class="ilosc" id="nierdzewne-sruby3_add-sum1">'+sum1Sruby3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/92/StalRzemioslo.png/33px-StalRzemioslo.png" title="Stal"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStal");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStal);
  if (sum1Sruby3===0) {
    parent_object.removeChild(dodajStal);
  }
  
  /**SIODLO WELLS FARGO*/
  var dodajRekojesc = document.createElement("table");
  dodajRekojesc.innerHTML = 
  '<table><tr><td class="ilosc" id="siodlo-wells1_add-sum1">'+sum1Wells1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d7/RekojescRzemioslo.png/33px-RekojescRzemioslo.png" title="Rękojeść"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRekojesc");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRekojesc);
  if (sum1Wells1===0) {
    parent_object.removeChild(dodajRekojesc);
  }
  var dodajNaprawioneSiodlo = document.createElement("table");
  dodajNaprawioneSiodlo.innerHTML = 
  '<table><tr><td class="ilosc" id="siodlo-wells2_add-sum1">'+sum1Wells2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/a8/NaprawioneSiodloRzemioslo.png/33px-NaprawioneSiodloRzemioslo.png" title="Naprawione siodło"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNaprawioneSiodlo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNaprawioneSiodlo);
  if (sum1Wells2===0) {
    parent_object.removeChild(dodajNaprawioneSiodlo);
  }
  var dodajTrabkaDoMusztry = document.createElement("table");
  dodajTrabkaDoMusztry.innerHTML = 
  '<table><tr><td class="ilosc" id="siodlo-wells3_add-sum1">'+sum1Wells3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/47/TrabkaDoMusztry.png/33px-TrabkaDoMusztry.png" title="Trąbka do musztry"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajTrabkaDoMusztry");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajTrabkaDoMusztry);
  if (sum1Wells3===0) {
    parent_object.removeChild(dodajTrabkaDoMusztry);
  }
  
  /**PIERSIOWKA*/
  var dodajKowadlo = document.createElement("table");
  dodajKowadlo.innerHTML = 
  '<table><tr><td class="ilosc" id="piersiowka1_add-sum1">'+sum1Piersiowka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/26/KowadloRzemioslo.png/33px-KowadloRzemioslo.png" title="Kowadło"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKowadlo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKowadlo);
  if (sum1Piersiowka1===0) {
    parent_object.removeChild(dodajKowadlo);
  }
  var dodajSrebro = document.createElement("table");
  sum1Piersiowka2 = sum1Piersiowka2 + sum1OzdobaRym3;
  dodajSrebro.innerHTML = 
  '<table><tr><td class="ilosc" id="piersiowka2_add-sum1">'+sum1Piersiowka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/b8/Srebro.png/33px-Srebro.png" title="Srebro"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSrebro");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSrebro);
  if (sum1Piersiowka2===0) {
    parent_object.removeChild(dodajSrebro);
  }
  
  /**NOWOCZESNA ZBROJA*/
  var dodajKowadlo = document.createElement("table");
  sum2NowZbroja1 = sum2NowZbroja1 + sum1Piersiowka1;
  dodajKowadlo.innerHTML = 
  '<table><tr><td class="ilosc" id="now-zbroja1_add-sum2">'+sum2NowZbroja1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/26/KowadloRzemioslo.png/33px-KowadloRzemioslo.png" title="Kowadło"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKowadlo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKowadlo);
  if (sum2NowZbroja1===0) {
    parent_object.removeChild(dodajKowadlo);
  }
  var dodajNity = document.createElement("table");
  dodajNity.innerHTML = 
  '<table><tr><td class="ilosc" id="now-zbroja2_add-sum1">'+sum1NowZbroja2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/b7/NityRzemioslo.png/33px-NityRzemioslo.png" title="Nity"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNity");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNity);
  if (sum1NowZbroja2===0) {
    parent_object.removeChild(dodajNity);
  }
  var dodajStopioneZelazo = document.createElement("table");
  sum1NowZbroja3 = sum1Sruby2 + sum1NowZbroja3;
  dodajStopioneZelazo.innerHTML = 
  '<table><tr><td class="ilosc" id="now-zbroja3_add-sum1">'+sum1NowZbroja3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4d/StopioneZelazoRzemioslo.png/33px-StopioneZelazoRzemioslo.png" title="Stopione żelazo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStopioneZelazo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStopioneZelazo);
  if (sum1NowZbroja3===0) {
    parent_object.removeChild(dodajStopioneZelazo);
  }
  
  /**PRASA DO MIODU*/
  var dodajDrewno = document.createElement("table");
  sum3Prasa1 = sum1Rekojesc3 + sum3Prasa1;
  dodajDrewno.innerHTML = 
  '<table><tr><td class="ilosc" id="prasa1_add-sum3">'+sum3Prasa1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/88/Drewno.png/33px-Drewno.png" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum3Prasa1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajRekojesc = document.createElement("table");
  sum2Prasa2 = sum2Prasa2 + sum1Wells1;
  dodajRekojesc.innerHTML = 
  '<table><tr><td class="ilosc" id="prasa2_add-sum2">'+sum2Prasa2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/d/d7/RekojescRzemioslo.png/33px-RekojescRzemioslo.png" title="Rękojeść"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRekojesc");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRekojesc);
  if (sum2Prasa2===0) {
    parent_object.removeChild(dodajRekojesc);
  }
  var dodajPretyMetalowe = document.createElement("table");
  sum1Prasa3 = sum1Prasa3 + sum1StopZelazo2;
  dodajPretyMetalowe.innerHTML = 
  '<table><tr><td class="ilosc" id="prasa3_add-sum1">'+sum1Prasa3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/09/PretyMetalowe.png/33px-PretyMetalowe.png" title="Pręty metalowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPretyMetalowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPretyMetalowe);
  if (sum1Prasa3===0) {
    parent_object.removeChild(dodajPretyMetalowe);
  }
  var dodajMlotek = document.createElement("table");
  sum1Prasa4 = sum1Prasa4 + sum1Ksztaltownik3;
  dodajMlotek.innerHTML = '<table><tr><td class="ilosc" id="prasa4_add-sum1">'+sum1Prasa4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Mlotek.png/33px-Mlotek.png" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum1Prasa4===0) {
    parent_object.removeChild(dodajMlotek);
  }
  
  /**NARZĘDZIA ZEGARMISTRZOWSKIE*/
  var dodajDrutKolczasty = document.createElement("table");
  sum3NarzZegarm1 = sum3NarzZegarm1 + sum2Kablak1;
  dodajDrutKolczasty.innerHTML = 
  '<table><tr><td class="ilosc" id="narz-zegarm1_add-sum3">'+sum3NarzZegarm1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/40/DrutKolczasty.png/33px-DrutKolczasty.png" title="Drut kolczasty"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrutKolczasty");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrutKolczasty);
  if (sum3NarzZegarm1===0) {
    parent_object.removeChild(dodajDrutKolczasty);
  }
  var dodajSierp = document.createElement("table");
  sum2NarzZegarm2 = sum1Rzemien1 + sum2NarzZegarm2;
  dodajSierp.innerHTML = 
  '<table><tr><td class="ilosc" id="narz-zegarm2_add-sum2">'+sum2NarzZegarm2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/04/Sierp.png/33px-Sierp.png" title="Sierp"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSierp");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSierp);
  if (sum2NarzZegarm2===0) {
    parent_object.removeChild(dodajSierp);
  }
  var dodajStrzemie = document.createElement("table");
  dodajStrzemie.innerHTML = 
  '<table><tr><td class="ilosc" id="narz-zegarm3_add-sum2">'+sum2NarzZegarm3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/18/StrzemieRzemioslo.png/33px-StrzemieRzemioslo.png" title="Strzemię"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStrzemie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStrzemie);
  if (sum2NarzZegarm3===0) {
    parent_object.removeChild(dodajStrzemie);
  }
  var dodajStaloweOstrze = document.createElement("table");
  dodajStaloweOstrze.innerHTML = 
  '<table><tr><td class="ilosc" id="narz-zegarm4_add-sum2">'+sum2NarzZegarm4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7b/StaloweOstrzeRzemioslo.png/33px-StaloweOstrzeRzemioslo.png" title="Stalowe ostrze"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStaloweOstrze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStaloweOstrze);
  if (sum2NarzZegarm4===0) {
    parent_object.removeChild(dodajStaloweOstrze);
  }
  var dodajNierdzewneSruby = document.createElement("table");
  dodajNierdzewneSruby.innerHTML = 
  '<table><tr><td class="ilosc" id="narz-zegarm5_add-sum1">'+sum1NarzZegarm5+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/a0/NierdzewneSrubyRzemioslo.png/33px-NierdzewneSrubyRzemioslo.png" title="Nierdzewne śruby"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNierdzewneSruby");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNierdzewneSruby);
  if (sum1NarzZegarm5===0) {
    parent_object.removeChild(dodajNierdzewneSruby);
  }
  
  /**POZYTYWKA*/
  var dodajSzpulkaDrutu = document.createElement("table");
  sum5Pozytywka1 = sum5Pozytywka1 + sum2Lancuch1;
  dodajSzpulkaDrutu.innerHTML = 
  '<table><tr><td class="ilosc" id="pozytywka1_add-sum5">'+sum5Pozytywka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/SzpulkaDrutu.png/33px-SzpulkaDrutu.png" title="Szpulka drutu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzpulkaDrutu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzpulkaDrutu);
  if (sum5Pozytywka1===0) {
    parent_object.removeChild(dodajSzpulkaDrutu);
  } 
  var dodajZegarekKieszonkowy = document.createElement("table");
  dodajZegarekKieszonkowy.innerHTML = 
  '<table><tr><td class="ilosc" id="pozytywka2_add-sum4">'+sum4Pozytywka2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/72/ZegarekKieszonkowy.png/33px-ZegarekKieszonkowy.png" title="Zegarek kieszonkowy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZegarekKieszonkowy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZegarekKieszonkowy);
  if (sum4Pozytywka2===0) {
    parent_object.removeChild(dodajZegarekKieszonkowy);
  }
  var dodajNarzedziaZegarmistrzowskie = document.createElement("table");
  dodajNarzedziaZegarmistrzowskie.innerHTML = 
  '<table><tr><td class="ilosc" id="latarnia3_add-sum2">'+sum4Pozytywka3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/7/7c/NarzedziaZegarmistrzowskieRzemioslo.png/33px-NarzedziaZegarmistrzowskieRzemioslo.png" title="Stopiony ołów"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNarzedziaZegarmistrzowskie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNarzedziaZegarmistrzowskie);
  if (sum4Pozytywka3===0) {
    parent_object.removeChild(dodajNarzedziaZegarmistrzowskie);
  }
  var dodajPozlacaneTryby = document.createElement("table");
  dodajPozlacaneTryby.innerHTML = 
  '<table><tr><td class="ilosc" id="pozytywka4_add-sum1">'+sum1Pozytywka4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e6/PozlacaneTryby.png/33px-PozlacaneTryby.png" title="Pozłacane tryby"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPozlacaneTryby");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPozlacaneTryby);
  if (sum1Pozytywka4===0) {
    parent_object.removeChild(dodajPozlacaneTryby);
  }
  
  /**LATARNIA*/
  var dodajSzklo = document.createElement("table");
  dodajSzklo.innerHTML = 
  '<table><tr><td class="ilosc" id="latarnia1_add-sum3">'+sum3Latarnia1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/6/63/SzkloRzemioslo.png/33px-SzkloRzemioslo.png" title="Szkło"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklo);
  if (sum3Latarnia1===0) {
    parent_object.removeChild(dodajSzklo);
  }
  var dodajOzdobaKowal = document.createElement("table");
  sum2Latarnia2 = sum2Latarnia2 + sum1Scyzoryk1;
  dodajOzdobaKowal.innerHTML = 
  '<table><tr><td class="ilosc" id="latarnia2_add-sum2">'+sum2Latarnia2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e4/OzdobaRzemioslo.png/33px-OzdobaRzemioslo.png" title="Ozdoba od kowala"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOzdobaKowal");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOzdobaKowal);
  if (sum2Latarnia2===0) {
    parent_object.removeChild(dodajOzdobaKowal);
  }
  var dodajStopioneZelazo = document.createElement("table");
  sum2Latarnia3 = sum1NowZbroja3 + sum2Latarnia3;
  dodajStopioneZelazo.innerHTML = 
  '<table><tr><td class="ilosc" id="latarnia3_add-sum2">'+sum2Latarnia3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/4d/StopioneZelazoRzemioslo.png/33px-StopioneZelazoRzemioslo.png" title="Stopione żelazo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStopioneZelazo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStopioneZelazo);
  if (sum2Latarnia3===0) {
    parent_object.removeChild(dodajStopioneZelazo);
  }
  var dodajGwozdzie = document.createElement("table");
  sum1Latarnia4 = sum1Latarnia4 + sum1Rekojesc4;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc" id="latarnia4_add-sum1">'+sum1Latarnia4+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e1/Gwozdzie.png/33px-Gwozdzie.png" title="Gwoździe"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajGwozdzie");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajGwozdzie);
  if (sum1Latarnia4===0) {
    parent_object1.removeChild(dodajGwozdzie);
  }
  const kucharz = [
    '[item=793000], ','[item=1942000], ',
    '[item=748000], ','[item=1859000], ','[item=745000], ','[item=1811000], ','[item=1815000], ',
    '[item=709000], ','[item=1870000], ','[item=1866000], ','[item=705000], ','[item=1822000], ',
    '[item=1810000], ','[item=2450000], ','[item=717000], ','[item=719000], ','[item=700000], ',
    '[item=1980000], ','[item=1875000], ','[item=2447000], ','[item=2456000], ','[item=1865000], ',
    '[item=1826000], ','[item=2526000], ','[item=1941000], ','[item=1867000], ','[item=778000], ',
    '[item=710000], ','[item=1877000], ','[item=2735000], ','[item=746000], ','[item=1874000], ',
    '[item=1999000], ','[item=2000000], ','[item=2737000], ','[item=2432000], ','[item=1862000], '];
  const znachor = [
    '[item=1945000], ','[item=708000], ','[item=743000], ','[item=757000], ',
    '[item=1816000], ','[item=1881000], ','[item=718000], ','[item=1808000], ','[item=703000], ',
    '[item=702000], ','[item=792000], ','[item=1944000], ','[item=744000], ','[item=1856000], ',
    '[item=2444000], ','[item=1885000], ','[item=795000], ','[item=1821000], ','[item=1884000], ',
    '[item=1882000], ','[item=1835000], ','[item=1818000], ','[item=2455000], ','[item=1812000], ',
    '[item=2517000], ','[item=1893000], ','[item=1886000], ','[item=741000], ','[item=1889000], ',
    '[item=1897000], ','[item=1876000], ','[item=1983000], ','[item=1895000], ','[item=2002000], ',
    '[item=2003000], ','[item=2436000], ','[item=2525000], ','[item=1833000], ','[item=1888000], '];
  const rymarz = [
    '[item=1951000], ','[item=740000], ','[item=754000], ','[item=706000], ',
    '[item=787000], ','[item=701000], ','[item=1820000], ','[item=789000], ','[item=749000], ',
    '[item=1860000], ','[item=1809000], ','[item=1824000], ','[item=715000], ','[item=2457000], ',
    '[item=1708000], ','[item=794000], ','[item=1857000], ','[item=1920000], ','[item=1896000], ',
    '[item=1814000], ','[item=791000], ','[item=2435000], ','[item=1825000], ','[item=2523000], ',
    '[item=1929000], ','[item=1917000], ','[item=1921000], ','[item=1932000], ','[item=1931000], ',
    '[item=2730000], ','[item=1922000], ','[item=1894000], ','[item=1930000], ','[item=2005000], ',
    '[item=2006000], ','[item=1950000], ','[item=2433000], ','[item=2446000], ','[item=1986000], '];
  const kowal = [
    '[item=1948000], ','[item=704000], ','[item=712000], ','[item=1858000], ','[item=1861000], ',
    '[item=1827000], ','[item=714000], ','[item=707000], ','[item=766000], ','[item=763000], ',
    '[item=1880000], ','[item=1947000], ','[item=721000], ','[item=1791000], ','[item=1912000], ',
    '[item=2430000], ','[item=742000], ','[item=761000], ','[item=2445000], ','[item=1906000], ',
    '[item=720000], ','[item=1855000], ','[item=752000], ','[item=716000], ','[item=724000], ',
    '[item=1903000], ','[item=1902000], ','[item=2520000], ','[item=2439000], ','[item=725000], ',
    '[item=1904000], ','[item=1907000], ','[item=711000], ','[item=1911000], ','[item=790000], ',
    '[item=747000], ','[item=739000], ','[item=765000], ','[item=1925000], ','[item=1913000], ',
    '[item=1989000], ','[item=767000], ','[item=728000], ','[item=2008000], ','[item=2009000], ',
    '[item=2733000], ','[item=1914000], ','[item=1899000], ','[item=784000], '];
  if (
      sum1Puree2>0 || sum1Zapieczone2>0 || sum1Maka2>0 || sum1FasolaBekon2>0 || sum1Ciasto2>0 || sum1Trunek2>0 || sum1Bulion3>0 || sum1PieczonyIndyk2>0 ||
      sum1Zupa2>0 || sum1Pierog3>0 || sum1Dorsz1>0 || sum1Kadzidlo3>0 ||
      sum1Sos2>0 || sum2Ciasteczka3>0 || sum4Ryba1>0 || sum2Obiad2>0 || sum6SuszMieso2>0 || sum1Guma1>0 || sum1Guma2>0 || sum1Guma3>0 ||
      sum2Grog1>0 || sum2Grog2>0 || sum1Grog3>0 || sum1Grog4>0 || sum1Gulasz1>0 || sum1Gulasz2>0 || sum1Gulasz4>0 || sum4Zeberka1>0 || sum4Zeberka2>0 ||
      sum1Miod1>0 || sum7FasPuszka3>0 || sum7Chili1>0 || sum4Chili3>0 || sum1Chili4>0 || sum2MiodPitny1>0 || sum2MiodPitny2>0 || sum1MiodPitny4>0 ||
      sum1Amulet1>0 || sum1Krzesiwo1>0 ||  sum1Papieros3>0 || sum1Wycior2>0 || sum1Lek2>0 || sum1KwasSiarkowy2>0 ||
      sum2Bozek1>0 || sum3Bimber2>0 || sum2Bimber3>0 || sum1Prymka2>0 || sum1Nalewka2>0 || sum1Lug3>0 || sum5Papier1>0 || sum1Papier2>0 ||
      sum1AtramentS1>0 || sum1AtramentS2>0 || sum3Cyrkiel1>0 || sum3Proch2>0 || sum3Proch3>0 || sum1Wlokno4>0 ||
      sum2WodaRozana1>0 || sum1Panaceum1>0 || sum2Remedium1>0 || sum1Remedium2>0 || sum1Remedium4>0 || sum1Odzywka2>0 || sum1Odzywka3>0 || 
      sum1ZTrunek1>0 || sum1ZTrunek3>0 || sum1Marionetka4>0 || sum3Mikstura1>0 || sum1Mikstura4>0 || sum5Antidotum1>0 || sum4Antidotum2>0 || sum1Antidotum4>0 ||
      sum4DuchMuz1>0 || sum2DuchMuz2>0 || sum1DuchMuz3>0 || sum1DuchMuz4>0 || sum1TorbaPasza1>0 || sum1Manierka2>0 || sum1Podkucie3>0 || sum2Pasza4>0 ||
      sum1ObdarteSiodlo1>0 || sum4Wypelniacz2>0 || sum1SkorzPokrycie2>0 || sum1Znakownik4>0 || sum1Kompas1>0 || sum1Ostrogi2>0 || sum2Uzda1>0 ||
      sum1Spiwor3>0 || sum2Spiwor2>0 || sum3Spiwor1>0 || sum1Uzda3>0 || sum1Powoz1>0 || sum2Eliksir1>0 || sum1Eliksir2>0 || sum1Eliksir3>0 ||
      sum2Arras1>0 || sum1Arras2>0 || sum1Arras3>0 || sum1Arras4>0 || sum1Lejce2>0 || sum1Kabura2>0 || sum2WPowoz1>0 ||
      sum1WPowoz2>0 || sum1WPowoz3>0 || sum3LeciutkaSkora2>0 || sum3LeciutkaSkora3>0 || sum5SiodloPony2>0 || sum4SiodloPony3>0 ||
      sum1SiodloPony4>0 || sum2Schowek1>0 || sum1Schowek2>0 || sum1Schowek3>0 || sum1Schowek4>0 || sum1Smar1>0 || sum3Bagnet1>0 || 
      sum1Bagnet2>0 || sum1Bagnet3>0 || sum1Kowadlo3>0 || sum1Figurka2>0 ||sum2Kablak2>0 || sum2Chusta1>0 || sum1Chusta3>0 || sum1Lancuch2>0 ||
      sum1Rekojesc1>0 || sum2Ksztaltownik1>0 || sum2StalOstrze1>0 || sum1OzdobaKow1>0 || sum1Westerner1>0 || sum1Westerner2>0 ||
      sum1Geoda2>0 || sum1Geoda3>0 || sum1Scyzoryk2>0 ||sum1Szklo2>0 || sum1Szklo3>0 || sum1Szklo4>0 || sum2KamPolerski1>0 ||
      sum1KamPolerski2>0 || sum1KamPolerski3>0 || sum1Sruby1>0 || sum1Sruby3>0 || sum1Wells2>0 || sum1Wells3>0 || sum1Piersiowka2>0 ||
      sum2NowZbroja1>0 || sum1NowZbroja2>0 || sum3Prasa1>0 || sum2Prasa2>0 || sum1Prasa3>0 || sum1Prasa4>0 || sum3NarzZegarm1>0 ||
      sum2NarzZegarm2>0 || sum2NarzZegarm3>0 || sum2NarzZegarm4>0 || sum1NarzZegarm5>0 || sum5Pozytywka1>0 || sum4Pozytywka2>0 ||
      sum4Pozytywka3>0 || sum1Pozytywka4>0 || sum3Latarnia1>0 || sum2Latarnia2>0 || sum2Latarnia3>0 || sum1Latarnia4>0){
    var parent = document.getElementById("item");
    parent.style.display = "block";
    parent.textContent = '';
    if (
        sum1Puree2 || sum1Zapieczone2 || sum1Maka2 || sum1FasolaBekon2 || sum1Ciasto2 || sum1Trunek2 || sum1Bulion3 || sum1PieczonyIndyk2 ||
        sum1Zupa2 || sum1Pierog3 ||
        sum1Dorsz1 || sum1Kadzidlo3 || sum1Sos2 || sum2Ciasteczka3 || sum4Ryba1 || sum2Obiad2 || sum6SuszMieso2 || sum1Guma1 || sum1Guma2 ||
        sum1Guma3 || sum2Grog1 || sum2Grog2 || sum1Grog3 || sum1Grog4 || sum1Gulasz1 || sum1Gulasz2 || sum1Gulasz4 || sum4Zeberka1 || sum4Zeberka2 ||
        sum1Miod1 || sum7FasPuszka3 || sum7Chili1 || sum4Chili3 || sum1Chili4 || sum2MiodPitny1 || sum2MiodPitny2 || sum1MiodPitny4) {
      if (sum1Puree2>0){parent.textContent = parent.textContent + sum1Puree2 + kucharz[0];}
      if (sum1Zapieczone2>0){parent.textContent = parent.textContent + sum1Zapieczone2 + kucharz[1];}
      if (sum1Maka2>0){parent.textContent = parent.textContent + sum1Maka2 + kucharz[2];}
      if (sum1FasolaBekon2>0){parent.textContent = parent.textContent + sum1FasolaBekon2 + kucharz[3];}
      if (sum1Ciasto2>0){parent.textContent = parent.textContent + sum1Ciasto2 + kucharz[4];}
      if (sum1Trunek2>0){parent.textContent = parent.textContent + sum1Trunek2 + kucharz[5];}
      if (sum1Bulion3>0){parent.textContent = parent.textContent + sum1Bulion3 + kucharz[6];}
      if (sum1PieczonyIndyk2>0){parent.textContent = parent.textContent + sum1PieczonyIndyk2 + kucharz[7];}
      if (sum1Zupa2>0){parent.textContent = parent.textContent + sum1Zupa2 + kucharz[8];}
      if (sum1Pierog3>0){parent.textContent = parent.textContent + sum1Pierog3 + kucharz[9];}
      if (sum1Dorsz1>0){parent.textContent = parent.textContent + sum1Dorsz1 + kucharz[10];}
      if (sum1Kadzidlo3>0){parent.textContent = parent.textContent + sum1Kadzidlo3 + kucharz[11];}
      if (sum1Sos2>0){parent.textContent = parent.textContent + sum1Sos2 + kucharz[12];}
      if (sum2Ciasteczka3>0){parent.textContent = parent.textContent + sum2Ciasteczka3 + kucharz[13];}
      if (sum4Ryba1>0){parent.textContent = parent.textContent + sum4Ryba1 + kucharz[14];}
      if (sum2Obiad2>0){parent.textContent = parent.textContent + sum2Obiad2 + kucharz[15];}
      if (sum6SuszMieso2>0){parent.textContent = parent.textContent + sum6SuszMieso2 + kucharz[16];}
      if (sum1Guma1>0){parent.textContent = parent.textContent + sum1Guma1 + kucharz[17];}
      if (sum1Guma2>0){parent.textContent = parent.textContent + sum1Guma2 + kucharz[18];}
      if (sum1Guma3>0){parent.textContent = parent.textContent + sum1Guma3 + kucharz[19];}
      if (sum2Grog1>0){parent.textContent = parent.textContent + sum2Grog1 + kucharz[20];}
      if (sum2Grog2>0){parent.textContent = parent.textContent + sum2Grog2 + kucharz[21];}
      if (sum1Grog3>0){parent.textContent = parent.textContent + sum1Grog3 + kucharz[22];}
      if (sum1Grog4>0){parent.textContent = parent.textContent + sum1Grog4 + kucharz[23];}
      if (sum1Gulasz1>0){parent.textContent = parent.textContent + sum1Gulasz1 + kucharz[24];}
      if (sum1Gulasz2>0){parent.textContent = parent.textContent + sum1Gulasz2 + kucharz[25];}
      if (sum1Gulasz4>0){parent.textContent = parent.textContent + sum1Gulasz4 + kucharz[26];}
      if (sum4Zeberka1>0){parent.textContent = parent.textContent + sum4Zeberka1 + kucharz[27];}
      if (sum4Zeberka2>0){parent.textContent = parent.textContent + sum4Zeberka2 + kucharz[28];}
      if (sum1Miod1>0){parent.textContent = parent.textContent + sum1Miod1 + kucharz[29];}
      if (sum7FasPuszka3>0){parent.textContent = parent.textContent + sum7FasPuszka3 + kucharz[30];}
      if (sum7Chili1>0){parent.textContent = parent.textContent + sum7Chili1 + kucharz[31];}
      if (sum4Chili3>0){parent.textContent = parent.textContent + sum4Chili3 + kucharz[32];}
      if (sum1Chili4>0){parent.textContent = parent.textContent + sum1Chili4 + kucharz[33];}
      if (sum2MiodPitny1>0){parent.textContent = parent.textContent + sum2MiodPitny1 + kucharz[34];}
      if (sum2MiodPitny2>0){parent.textContent = parent.textContent + sum2MiodPitny2 + kucharz[35];}
      if (sum1MiodPitny4>0){parent.textContent = parent.textContent + sum1MiodPitny4 + kucharz[36];}
    }
    if (
        sum1Amulet1 || sum1Krzesiwo1 || sum1Papieros3 || sum1Wycior2 || sum1Lek2 || sum1KwasSiarkowy2 ||
        sum2Bozek1 || sum3Bimber2 || sum2Bimber3 || sum1Prymka2 || sum1Nalewka2 || sum1Lug3 || sum5Papier1 || sum1Papier2 ||
        sum1AtramentS1 || sum1AtramentS2 || sum3Cyrkiel1 ||
        sum3Proch2 || sum3Proch3 || sum1Wlokno4 || sum2WodaRozana1 || sum1Panaceum1 || sum2Remedium1 || sum1Remedium2 || sum1Remedium4 ||
        sum1Odzywka2 || sum1Odzywka3 || sum1ZTrunek1 || sum1ZTrunek3 || sum1Marionetka4 || sum3Mikstura1 || sum1Mikstura4 ||
        sum5Antidotum1 || sum4Antidotum2 || sum1Antidotum4 || sum4DuchMuz1 || sum2DuchMuz2 || sum1DuchMuz3 || sum1DuchMuz4) {
      if (sum1Amulet1>0){parent.textContent = parent.textContent + sum1Amulet1 + znachor[0];}
      if (sum1Krzesiwo1>0){parent.textContent = parent.textContent + sum1Krzesiwo1 + znachor[1];}
      if (sum1Papieros3>0){parent.textContent = parent.textContent + sum1Papieros3 + znachor[2];}
      if (sum1Wycior2>0){parent.textContent = parent.textContent + sum1Wycior2 + znachor[3];}
      if (sum1Lek2>0){parent.textContent = parent.textContent + sum1Lek2 + znachor[4];}
      if (sum1KwasSiarkowy2>0){parent.textContent = parent.textContent + sum1KwasSiarkowy2 + znachor[5];}
      if (sum2Bozek1>0){parent.textContent = parent.textContent + sum2Bozek1 + znachor[6];}
      if (sum3Bimber2>0){parent.textContent = parent.textContent + sum3Bimber2 + znachor[7];}
      if (sum2Bimber3>0){parent.textContent = parent.textContent + sum2Bimber3 + znachor[8];}
      if (sum1Prymka2>0){parent.textContent = parent.textContent + sum1Prymka2 + znachor[9];}
      if (sum1Nalewka2>0){parent.textContent = parent.textContent + sum1Nalewka2 + znachor[10];}
      if (sum1Lug3>0){parent.textContent = parent.textContent + sum1Lug3 + znachor[11];}
      if (sum5Papier1>0){parent.textContent = parent.textContent + sum5Papier1 + znachor[12];}
      if (sum1Papier2>0){parent.textContent = parent.textContent + sum1Papier2 + znachor[13];}
      if (sum1AtramentS1>0){parent.textContent = parent.textContent + sum1AtramentS1 + znachor[14];}
      if (sum1AtramentS2>0){parent.textContent = parent.textContent + sum1AtramentS2 + znachor[15];}
      if (sum3Cyrkiel1>0){parent.textContent = parent.textContent + sum3Cyrkiel1 + znachor[16];}
      if (sum3Proch2>0){parent.textContent = parent.textContent + sum3Proch2 + znachor[17];}
      if (sum3Proch3>0){parent.textContent = parent.textContent + sum3Proch3 + znachor[18];}
      if (sum1Wlokno4>0){parent.textContent = parent.textContent + sum1Wlokno4 + znachor[19];}
      if (sum2WodaRozana1>0){parent.textContent = parent.textContent + sum2WodaRozana1 + znachor[20];}
      if (sum1Panaceum1>0){parent.textContent = parent.textContent + sum1Panaceum1 + znachor[21];}
      if (sum2Remedium1>0){parent.textContent = parent.textContent + sum2Remedium1 + znachor[22];}
      if (sum1Remedium2>0){parent.textContent = parent.textContent + sum1Remedium2 + znachor[23];}
      if (sum1Remedium4>0){parent.textContent = parent.textContent + sum1Remedium4 + znachor[24];}
      if (sum1Odzywka2>0){parent.textContent = parent.textContent + sum1Odzywka2 + znachor[25];}
      if (sum1Odzywka3>0){parent.textContent = parent.textContent + sum1Odzywka3 + znachor[26];}
      if (sum1ZTrunek1>0){parent.textContent = parent.textContent + sum1ZTrunek1 + znachor[27];}
      if (sum1ZTrunek3>0){parent.textContent = parent.textContent + sum1ZTrunek3 + znachor[28];}
      if (sum1Marionetka4>0){parent.textContent = parent.textContent + sum1Marionetka4 + znachor[29];}
      if (sum3Mikstura1>0){parent.textContent = parent.textContent + sum3Mikstura1 + znachor[30];}
      if (sum1Mikstura4>0){parent.textContent = parent.textContent + sum1Mikstura4 + znachor[31];}
      if (sum5Antidotum1>0){parent.textContent = parent.textContent + sum5Antidotum1 + znachor[32];}
      if (sum4Antidotum2>0){parent.textContent = parent.textContent + sum4Antidotum2 + znachor[33];}
      if (sum1Antidotum4>0){parent.textContent = parent.textContent + sum1Antidotum4 + znachor[34];}
      if (sum4DuchMuz1>0){parent.textContent = parent.textContent + sum4DuchMuz1 + znachor[35];}
      if (sum2DuchMuz2>0){parent.textContent = parent.textContent + sum2DuchMuz2 + znachor[36];}
      if (sum1DuchMuz3>0){parent.textContent = parent.textContent + sum1DuchMuz3 + znachor[37];}
      if (sum1DuchMuz4>0){parent.textContent = parent.textContent + sum1DuchMuz4 + znachor[38];}
    }
    if (
        sum1TorbaPasza1 || sum1Manierka2 || sum2Pasza4 || sum1Podkucie3 || sum1ObdarteSiodlo1 || sum4Wypelniacz2 || sum1SkorzPokrycie2 || 
        sum1Ostrogi2 || sum3Spiwor1 || sum2Spiwor2 || sum1Spiwor3 || sum2Uzda1 || sum1Uzda3 || sum1Powoz1 || sum2Eliksir1 || sum1Eliksir2 ||
        sum1Eliksir3 || sum1NaprSiodlo4 || sum1Notatnik2 || sum1Impregnat2 || sum1Impregnat3 || sum2Arras1 || sum1Arras2 || sum1Arras3 ||
        sum1Arras4 || sum1Lejce2 || sum1Kabura2 || sum2WPowoz1 || sum1WPowoz2 || sum1WPowoz3 || sum3LeciutkaSkora2 || sum3LeciutkaSkora3 ||
        sum5SiodloPony2 || sum4SiodloPony3 || sum1SiodloPony4 || sum2Schowek1 || sum1Schowek2 || sum1Schowek3 || sum1Schowek4) {
      if (sum1TorbaPasza1>0){parent.textContent = parent.textContent + sum1TorbaPasza1 + rymarz[0];}
      if (sum1Manierka2>0){parent.textContent = parent.textContent + sum1Manierka2 + rymarz[1];}
      if (sum1Podkucie3>0){parent.textContent = parent.textContent + sum1Podkucie3 + rymarz[2];}
      if (sum2Pasza4>0){parent.textContent = parent.textContent + sum2Pasza4 + rymarz[3];}
      if (sum1ObdarteSiodlo1>0){parent.textContent = parent.textContent + sum1ObdarteSiodlo1 + rymarz[4];}
      if (sum4Wypelniacz2>0){parent.textContent = parent.textContent + sum4Wypelniacz2 + rymarz[5];}
      if (sum1SkorzPokrycie2>0){parent.textContent = parent.textContent + sum1SkorzPokrycie2 + rymarz[6];}
      if (sum1Ostrogi2>0){parent.textContent = parent.textContent + sum1Ostrogi2 + rymarz[7];}
      if (sum2Uzda1>0){parent.textContent = parent.textContent + sum2Uzda1 + rymarz[8];}
      if (sum1Uzda3>0){parent.textContent = parent.textContent + sum1Uzda3 + rymarz[9];}
      if (sum3Spiwor1>0){parent.textContent = parent.textContent + sum3Spiwor1 + rymarz[10];}
      if (sum2Spiwor2>0){parent.textContent = parent.textContent + sum2Spiwor2 + rymarz[11];}
      if (sum1Spiwor3>0){parent.textContent = parent.textContent + sum1Spiwor3 + rymarz[12];}
      if (sum1Powoz1>0){parent.textContent = parent.textContent + sum1Powoz1 + rymarz[13];}
      if (sum2Eliksir1>0){parent.textContent = parent.textContent + sum2Eliksir1 + rymarz[14];}
      if (sum1Eliksir2>0){parent.textContent = parent.textContent + sum1Eliksir2 + rymarz[15];}
      if (sum1Eliksir3>0){parent.textContent = parent.textContent + sum1Eliksir3 + rymarz[16];}
      if (sum1NaprSiodlo4>0){parent.textContent = parent.textContent + sum1NaprSiodlo4 + rymarz[17];}
      if (sum1Notatnik2>0){parent.textContent = parent.textContent + sum1Notatnik2 + rymarz[18];}
      if (sum1Impregnat2>0){parent.textContent = parent.textContent + sum1Impregnat2 + rymarz[19];}
      if (sum1Impregnat3>0){parent.textContent = parent.textContent + sum1Impregnat3 + rymarz[20];}
      if (sum2Arras1>0){parent.textContent = parent.textContent + sum2Arras1 + rymarz[21];}
      if (sum1Arras2>0){parent.textContent = parent.textContent + sum1Arras2 + rymarz[22];}
      if (sum1Arras3>0){parent.textContent = parent.textContent + sum1Arras3 + rymarz[23];}
      if (sum1Arras4>0){parent.textContent = parent.textContent + sum1Arras4 + rymarz[24];}
      if (sum1Lejce2>0){parent.textContent = parent.textContent + sum1Lejce2 + rymarz[25];}
      if (sum1Kabura2>0){parent.textContent = parent.textContent + sum1Kabura2 + rymarz[26];}
      if (sum2WPowoz1>0){parent.textContent = parent.textContent + sum2WPowoz1 + rymarz[27];}
      if (sum1WPowoz2>0){parent.textContent = parent.textContent + sum1WPowoz2 + rymarz[28];}
      if (sum1WPowoz3>0){parent.textContent = parent.textContent + sum1WPowoz3 + rymarz[29];}
      if (sum3LeciutkaSkora2>0){parent.textContent = parent.textContent + sum3LeciutkaSkora2 + rymarz[30];}
      if (sum3LeciutkaSkora3>0){parent.textContent = parent.textContent + sum3LeciutkaSkora3 + rymarz[31];}
      if (sum5SiodloPony2>0){parent.textContent = parent.textContent + sum5SiodloPony2 + rymarz[32];}
      if (sum4SiodloPony3>0){parent.textContent = parent.textContent + sum4SiodloPony3 + rymarz[33];}
      if (sum1SiodloPony4>0){parent.textContent = parent.textContent + sum1SiodloPony4 + rymarz[34];}
      if (sum2Schowek1>0){parent.textContent = parent.textContent + sum2Schowek1 + rymarz[35];}
      if (sum1Schowek2>0){parent.textContent = parent.textContent + sum1Schowek2 + rymarz[36];}
      if (sum1Schowek3>0){parent.textContent = parent.textContent + sum1Schowek3 + rymarz[37];}
      if (sum1Schowek4>0){parent.textContent = parent.textContent + sum1Schowek4 + rymarz[38];}
    }
    if (sum1Smar1 || sum3Bagnet1 ||
        sum1Bagnet2 || sum1Bagnet3 || sum1Kowadlo3 || sum1Figurka2 || sum2Kablak2 || sum2Chusta1 || sum1Chusta3 || sum1Lancuch2 || sum1Rekojesc1 ||
        sum2Ksztaltownik1 || sum2StalOstrze1 || sum1OzdobaKow1 || sum1Westerner1 || sum1Westerner2 || sum1Geoda2 || sum1Geoda3 ||
        sum1Scyzoryk2 || sum1Szklo2 || sum1Szklo3 || sum1Szklo4 || sum2KamPolerski1 || sum1KamPolerski2 || sum1KamPolerski3 ||
        sum1Sruby1 || sum1Sruby3 || sum1Wells2 || sum1Wells3 || sum1Piersiowka2 || sum2NowZbroja1 || sum1NowZbroja2 || sum3Prasa1 || 
        sum2Prasa2 || sum1Prasa3 || sum1Prasa4 || sum3NarzZegarm1 || sum2NarzZegarm2 || sum2NarzZegarm3 || sum2NarzZegarm4 || sum1NarzZegarm5 ||
        sum5Pozytywka1 || sum4Pozytywka2 ||sum4Pozytywka3|| sum1Pozytywka4 || sum3Latarnia1 || sum2Latarnia2 || sum2Latarnia3 || sum1Latarnia4) {
      if (sum1Smar1>0){parent.textContent = parent.textContent + sum1Smar1 + kowal[0];}
      if (sum3Bagnet1>0){parent.textContent = parent.textContent + sum3Bagnet1 + kowal[1];}
      if (sum1Bagnet2>0){parent.textContent = parent.textContent + sum1Bagnet2 + kowal[2];}
      if (sum1Bagnet3>0){parent.textContent = parent.textContent + sum1Bagnet3 + kowal[3];}
      if (sum1Kowadlo3>0){parent.textContent = parent.textContent + sum1Kowadlo3 + kowal[4];}
      if (sum1Figurka2>0){parent.textContent = parent.textContent + sum1Figurka2 + kowal[5];}
      if (sum2Kablak2>0){parent.textContent = parent.textContent + sum2Kablak2 + kowal[6];}
      if (sum2Chusta1>0){parent.textContent = parent.textContent + sum2Chusta1 + kowal[7];}
      if (sum1Chusta3>0){parent.textContent = parent.textContent + sum1Chusta3 + kowal[8];}
      if (sum1Lancuch2>0){parent.textContent = parent.textContent + sum1Lancuch2 + kowal[9];}
      if (sum1Rekojesc1>0){parent.textContent = parent.textContent + sum1Rekojesc1 + kowal[10];}
      if (sum2Ksztaltownik1>0){parent.textContent = parent.textContent + sum2Ksztaltownik1 + kowal[11];}
      if (sum2StalOstrze1>0){parent.textContent = parent.textContent + sum2StalOstrze1 + kowal[12];}
      if (sum1OzdobaKow1>0){parent.textContent = parent.textContent + sum1OzdobaKow1 + kowal[13];}
      if (sum1Westerner1>0){parent.textContent = parent.textContent + sum1Westerner1 + kowal[14];}
      if (sum1Westerner2>0){parent.textContent = parent.textContent + sum1Westerner2 + kowal[15];}
      if (sum1Geoda2>0){parent.textContent = parent.textContent + sum1Geoda2 + kowal[16];}
      if (sum1Geoda3>0){parent.textContent = parent.textContent + sum1Geoda3 + kowal[17];}
      if (sum1Scyzoryk2>0){parent.textContent = parent.textContent + sum1Scyzoryk2 + kowal[18];}
      if (sum1Szklo2>0){parent.textContent = parent.textContent + sum1Szklo2 + kowal[19];}
      if (sum1Szklo3>0){parent.textContent = parent.textContent + sum1Szklo3 + kowal[20];}
      if (sum1Szklo4>0){parent.textContent = parent.textContent + sum1Szklo4 + kowal[21];}
      if (sum2KamPolerski1>0){parent.textContent = parent.textContent + sum2KamPolerski1 + kowal[22];}
      if (sum1KamPolerski2>0){parent.textContent = parent.textContent + sum1KamPolerski2 + kowal[23];}
      if (sum1KamPolerski3>0){parent.textContent = parent.textContent + sum1KamPolerski3 + kowal[24];}
      if (sum1Sruby1>0){parent.textContent = parent.textContent + sum1Sruby1 + kowal[25];}
      if (sum1Sruby3>0){parent.textContent = parent.textContent + sum1Sruby3 + kowal[26];}
      if (sum1Wells2>0){parent.textContent = parent.textContent + sum1Wells2 + kowal[27];}
      if (sum1Wells3>0){parent.textContent = parent.textContent + sum1Wells3 + kowal[28];}
      if (sum1Piersiowka2>0){parent.textContent = parent.textContent + sum1Piersiowka2 + kowal[29];}
      if (sum2NowZbroja1>0){parent.textContent = parent.textContent + sum2NowZbroja1 + kowal[30];}
      if (sum1NowZbroja2>0){parent.textContent = parent.textContent + sum1NowZbroja2 + kowal[31];}
      if (sum3Prasa1>0){parent.textContent = parent.textContent + sum3Prasa1 + kowal[32];}
      if (sum2Prasa2>0){parent.textContent = parent.textContent + sum2Prasa2 + kowal[33];}
      if (sum1Prasa3>0){parent.textContent = parent.textContent + sum1Prasa3 + kowal[34];}
      if (sum1Prasa4>0){parent.textContent = parent.textContent + sum1Prasa4 + kowal[35];}
      if (sum3NarzZegarm1>0){parent.textContent = parent.textContent + sum3NarzZegarm1 + kowal[36];}
      if (sum2NarzZegarm2>0){parent.textContent = parent.textContent + sum2NarzZegarm2 + kowal[37];}
      if (sum2NarzZegarm3>0){parent.textContent = parent.textContent + sum2NarzZegarm3 + kowal[38];}
      if (sum2NarzZegarm4>0){parent.textContent = parent.textContent + sum2NarzZegarm4 + kowal[39];}
      if (sum1NarzZegarm5>0){parent.textContent = parent.textContent + sum1NarzZegarm5 + kowal[40];}
      if (sum5Pozytywka1>0){parent.textContent = parent.textContent + sum5Pozytywka1 + kowal[41];}
      if (sum4Pozytywka2>0){parent.textContent = parent.textContent + sum4Pozytywka2 + kowal[42];}
      if (sum4Pozytywka3>0){parent.textContent = parent.textContent + sum4Pozytywka3 + kowal[43];}
      if (sum1Pozytywka4>0){parent.textContent = parent.textContent + sum1Pozytywka4 + kowal[44];}
      if (sum3Latarnia1>0){parent.textContent = parent.textContent + sum3Latarnia1 + kowal[45];}
      if (sum2Latarnia2>0){parent.textContent = parent.textContent + sum2Latarnia2 + kowal[46];}
      if (sum2Latarnia3>0){parent.textContent = parent.textContent + sum2Latarnia3 + kowal[47];}
      if (sum1Latarnia4>0){parent.textContent = parent.textContent + sum1Latarnia4 + kowal[48];} 
    }
  } 
  else {
  var parent = document.getElementById("item");
  parent.style.display = "none";
  parent.textContent = '';
  }
}