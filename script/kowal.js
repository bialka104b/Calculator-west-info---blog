/* 
 * numer przy addSum2, add-sum2, sum2 oznacza liczbe przez którą mnożymy czyli 2
 * numer przy np Latarnia2 oznacza kolejność chronologiczna elementu <td> w html
 */

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
/**NOTATNIK*/
var calcNotatnik = document.getElementById("calc-notatnik");
var addSum1Notatnik1 = document.getElementById("notatnik1_add-sum1");
var addSum1Notatnik2 = document.getElementById("notatnik2_add-sum1");
calcNotatnik.addEventListener("input", add);
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
var addSum2Rekojesc1 = document.getElementById("rekojesc1_add-sum2");
var addSum2Rekojesc2 = document.getElementById("rekojesc2_add-sum2");
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
  /**NOTATNIK*/
  var notatnik = Number(calcNotatnik.value) || 0;
  var sum1Notatnik1 = Number(notatnik*1);
  addSum1Notatnik1.innerHTML = sum1Notatnik1+"x";
  var sum1Notatnik2 = Number(notatnik*1);
  addSum1Notatnik2.innerHTML = sum1Notatnik2+"x";
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
  var sum2Rekojesc1 = Number(rekojesc*2);
  addSum2Rekojesc1.innerHTML = sum2Rekojesc1+"x";
  var sum2Rekojesc2 = Number(rekojesc*2);
  addSum2Rekojesc2.innerHTML = sum2Rekojesc2+"x";
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
  
  /**PATELNIA*/
  var dodajMlotek = document.createElement("table");
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc" id="patelnia1_add-sum1">'+sum1Patelnia1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/1/15/Mlotek.png/33px-Mlotek.png" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum1Patelnia1===0) {
    parent_object.removeChild(dodajMlotek);
  }
  var dodajPretyMetalowe = document.createElement("table");
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
  
  /**GRAFIT*/
  var dodajWegiel = document.createElement("table");
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
  dodajWelna.innerHTML = 
  '<table><tr><td class="ilosc" id="smar2_add-sum1">'+sum1Smar2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/b/ba/Welna.png/33px-Welna.png" title="Wełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWelna);
  if (sum1Smar2===0) {
    parent_object.removeChild(dodajWelna);
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
  dodajSkora.innerHTML = 
  '<table><tr><td class="ilosc" id="bagnet2_add-sum1">'+sum1Bagnet2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/a/ab/Skora.png/33px-Skora.png" title="Skóra"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkora);
  if (sum1Bagnet2===0) {
    parent_object.removeChild(dodajSkora);
  }
  var dodajNoz = document.createElement("table");
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
  dodajOlow.innerHTML = 
  '<table><tr><td class="ilosc" id="stop-olow1_add-sum1">'+sum1StopOlow1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/Olow.png/33px-Olow.png" title="Ołów"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOlow");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOlow);
  if (sum1StopOlow1===0) {
    parent_object.removeChild(dodajOlow);
  }
  var dodajWegielDrzewny = document.createElement("table");
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
  dodajStal.innerHTML = 
  '<table><tr><td class="ilosc" id="kowadlo2_add-sum1">'+sum1Kowadlo2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/9/92/StalRzemioslo.png/33px-StalRzemioslo.png" title="Stal"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajStal");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajStal);
  if (sum1Kowadlo2===0) {
    parent_object.removeChild(dodajStal);
  }
  var dodajKrzesiwo = document.createElement("table");
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
  dodajKamieniePolszlachetne.innerHTML = 
  '<table><tr><td class="ilosc" id="kulka1_add-sum1">'+sum1Kulka1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/3/31/KamieniePolszlachetne.png/33px-KamieniePolszlachetne.png" title="Kamienie półszlachetne"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamieniePolszlachetne");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamieniePolszlachetne);
  if (sum1Kulka1===0) {
    parent_object.removeChild(dodajKamieniePolszlachetne);
  }
  var dodajZywica = document.createElement("table");
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
  dodajDrutKolczasty.innerHTML = 
  '<table><tr><td class="ilosc" id="kablak1_add-sum2">'+sum2Kablak1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/40/DrutKolczasty.png/33px-DrutKolczasty.png" title="Drut kolczasty"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrutKolczasty");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrutKolczasty);
  if (sum2Kablak1===0) {
    parent_object.removeChild(dodajDrutKolczasty);
  }
  var dodajSkoraZBobra = document.createElement("table");
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
  dodajSzpulkaDrutu.innerHTML = 
  '<table><tr><td class="ilosc" id="chusta2_add-sum2">'+sum2Chusta2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/SzpulkaDrutu.png/33px-SzpulkaDrutu.png" title="Szpulka drutu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzpulkaDrutu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzpulkaDrutu);
  if (sum2Chusta2===0) {
    parent_object.removeChild(dodajSzpulkaDrutu);
  }
  var dodajSzklankaWody = document.createElement("table");
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
  sum1Lancuch2 = sum1Lancuch2 + sum2Chusta2;
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
  sum2Rekojesc1 = sum2Rekojesc1 + sum1Kulka2;
  dodajZywica.innerHTML = 
  '<table><tr><td class="ilosc" id="rekojesc1_add-sum2">'+sum2Rekojesc1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/ZywicaRzemioslo.png/33px-ZywicaRzemioslo.png" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum2Rekojesc1===0) {
    parent_object.removeChild(dodajZywica);
  }
  var dodajPila = document.createElement("table");
  dodajPila.innerHTML = 
  '<table><tr><td class="ilosc" id="rekojesc2_add-sum2">'+sum2Rekojesc2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/4/48/Pila.png/33px-Pila.png" title="Piła"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPila");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPila);
  if (sum2Rekojesc2===0) {
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
  sum1Geoda2 = sum1Geoda2 + sum2Rekojesc2;
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
  var dodajWegiel = document.createElement("table");
  sum3Prasa1 = sum2StalOstrze1 + sum3Prasa1;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc" id="prasa1_add-sum3">'+sum3Prasa1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/89/Wegiel.png/33px-Wegiel.png" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum3Prasa1===0) {
    parent_object.removeChild(dodajWegiel);
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
}