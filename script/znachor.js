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

function add(){
  /**KUCHARZ polecenia ułozone są alfabetycznie--------------------*/
  /**BULION RYBNY*/
  var bulion = Number(calcBulion.value) || 0;
  var sum1Bulion1 = Number(bulion*1);
  addSum1Bulion1.innerHTML = sum1Bulion1+"x";
  var sum1Bulion2 = Number(bulion*1);
  addSum1Bulion2.innerHTML = sum1Bulion2+"x";
  var sum1Bulion3 = Number(bulion*1);
  addSum1Bulion3.innerHTML = sum1Bulion3+"x";
  /**CIASTECZKA KUKURYDZIANE*/
  var ciasteczka = Number(calcCiasteczka.value) || 0;
  var sum2Ciasteczka1 = Number(ciasteczka*2);
  addSum2Ciasteczka1.innerHTML = sum2Ciasteczka1+"x";
  var sum2Ciasteczka2 = Number(ciasteczka*2);
  addSum2Ciasteczka2.innerHTML = sum2Ciasteczka2+"x";
  var sum2Ciasteczka3 = Number(ciasteczka*2);
  addSum2Ciasteczka3.innerHTML = sum2Ciasteczka3+"x";
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
  sum2SokKaktus1 = sum2Dzem2 + sum2SokKaktus1;
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
  sum1Atrament2 = sum1Atrament2 + sum3Obiad1;
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
  sum5Papier1 = sum5Papier1 + sum2Ryba3;
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
}