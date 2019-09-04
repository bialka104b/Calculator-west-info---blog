/* 
 * numer przy addSum2, add-sum2, sum2 oznacza liczbe przez którą mnożymy czyli 2
 * numer przy np Latarnia2 oznacza kolejność chronologiczna elementu <td> w html
 */
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
  sum1KwasSiarkowy1 = sum1KwasSiarkowy1 + sum5Nawoz2;
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
  sum1Remedium4 = sum1Remedium4 + sum1PaczkaGum5;
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
  sum1DuchMuz4 = sum1DuchMuz4 + sum1Drink6;
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