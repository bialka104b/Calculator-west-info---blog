/* 
 * numer przy addSum2, add-sum2, sum2 oznacza liczbe przez którą mnożymy czyli 2
 * numer przy np Latarnia2 oznacza kolejność chronologiczna elementu <td> w html
 */
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
/**DYLIZANS MARII ROALSTAD*/
var calcDylizans = document.getElementById("calc-dylizans");
var addSum10Dylizans1 = document.getElementById("dylizans1_add-sum10");
var addSum1Dylizans2 = document.getElementById("dylizans2_add-sum1");
var addSum1Dylizans3 = document.getElementById("dylizans3_add-sum1");
var addSum1Dylizans4 = document.getElementById("dylizans4_add-sum1");
var addSum1Dylizans5 = document.getElementById("dylizans5_add-sum1");
var addSum1Dylizans6 = document.getElementById("dylizans6_add-sum1");
calcDylizans.addEventListener("input", add);
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
/**PAS Z RZEMIENI*/
var calcPasZRzemieni = document.getElementById("calc-pas-z-rzemieni");
var addSum3PasZRzemieni1 = document.getElementById("pas-z-rzemieni1_add-sum3");
var addSum1PasZRzemieni2 = document.getElementById("pas-z-rzemieni2_add-sum1");
var addSum1PasZRzemieni3 = document.getElementById("pas-z-rzemieni3_add-sum1");
var addSum1PasZRzemieni4 = document.getElementById("pas-z-rzemieni4_add-sum1");
calcPasZRzemieni.addEventListener("input", add);
/**PASZA TRESCIWA*/
var calcPasza = document.getElementById("calc-pasza");
var addSum3Pasza1 = document.getElementById("pasza1_add-sum3");
var addSum3Pasza2 = document.querySelector("#pasza2_add-sum3");
var addSum3Pasza3 = document.querySelector("#pasza3_add-sum3");
var addSum2Pasza4 = document.getElementById("pasza4_add-sum2");
calcPasza.addEventListener("input", add);
/**PIESN DZIKIEGO ZACHODU*/
var calcPiesnTW = document.getElementById("calc-piesn-TW");
var addSum5PiesnTW1 = document.getElementById("piesn-TW1_add-sum5");
var addSum3PiesnTW2 = document.getElementById("piesn-TW2_add-sum3");
var addSum3PiesnTW3 = document.getElementById("piesn-TW3_add-sum3");
var addSum2PiesnTW4 = document.getElementById("piesn-TW4_add-sum2");
calcPiesnTW.addEventListener("input", add);
/**PLOCIENNA SKRZYNKA*/
var calcPlociennaSkrzynka = document.getElementById("calc-plocienna-skrzynka");
var addSum10PlociennaSkrzynka1 = document.getElementById("plocienna-skrzynka1_add-sum10");
var addSum8PlociennaSkrzynka2 = document.getElementById("plocienna-skrzynka2_add-sum8");
var addSum3PlociennaSkrzynka3 = document.getElementById("plocienna-skrzynka3_add-sum3");
var addSum3PlociennaSkrzynka4 = document.getElementById("plocienna-skrzynka4_add-sum3");
var addSum3PlociennaSkrzynka5 = document.getElementById("plocienna-skrzynka5_add-sum3");
calcPlociennaSkrzynka.addEventListener("input", add);
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
/**SKORZANY PLASZCZ*/
var calcSkorzanyPlaszcz = document.getElementById("calc-skorzany-plaszcz");
var addSum4SkorzanyPlaszcz1 = document.getElementById("skorzany-plaszcz1_add-sum4");
var addSum3SkorzanyPlaszcz2 = document.getElementById("skorzany-plaszcz2_add-sum3");
var addSum2SkorzanyPlaszcz3 = document.getElementById("skorzany-plaszcz3_add-sum2");
var addSum2SkorzanyPlaszcz4 = document.getElementById("skorzany-plaszcz4_add-sum2");
calcSkorzanyPlaszcz.addEventListener("input", add);
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
/**ZBROJA DLA WIERZCHOWCA*/
var calcZbrojaDlaWierzchowca = document.getElementById("calc-zbroja-dla-wierzchowca");
var addSum3ZbrojaDlaWierzchowca1 = document.getElementById("zbroja-dla-wierzchowca1_add-sum3");
var addSum1ZbrojaDlaWierzchowca2 = document.getElementById("zbroja-dla-wierzchowca2_add-sum1");
calcZbrojaDlaWierzchowca.addEventListener("input", add);
/**ZNAKOWNIK*/
var calcZnakownik = document.getElementById("calc-znakownik");
var addSum2Znakownik1 = document.getElementById("znakownik1_add-sum2");
var addSum2Znakownik2 = document.getElementById("znakownik2_add-sum2");
var addSum1Znakownik3 = document.getElementById("znakownik3_add-sum1");
var addSum1Znakownik4 = document.getElementById("znakownik4_add-sum1");
calcZnakownik.addEventListener("input", add);

function add(){
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
  
  /**SKORZANY PLASZCZ*/
  var skorzanyPlaszcz = Number(calcSkorzanyPlaszcz.value) || 0;
  var sum4SkorzanyPlaszcz1 = Number(skorzanyPlaszcz*4);
  addSum4SkorzanyPlaszcz1.innerHTML = sum4SkorzanyPlaszcz1+"x";
  var sum3SkorzanyPlaszcz2 = Number(skorzanyPlaszcz*3);
  addSum3SkorzanyPlaszcz2.innerHTML = sum3SkorzanyPlaszcz2+"x";
  var sum2SkorzanyPlaszcz3 = Number(skorzanyPlaszcz*2);
  addSum2SkorzanyPlaszcz3.innerHTML = sum2SkorzanyPlaszcz3+"x";
  var sum2SkorzanyPlaszcz4 = Number(skorzanyPlaszcz*2);
  addSum2SkorzanyPlaszcz4.innerHTML = sum2SkorzanyPlaszcz4+"x";
  /**DYLIZANS MARII ROALSTAD*/
  var dylizans = Number(calcDylizans.value) || 0;
  var sum10Dylizans1 = Number(dylizans*10);
  addSum10Dylizans1.innerHTML = sum10Dylizans1+"x";
  var sum1Dylizans2 = Number(dylizans*1);
  addSum1Dylizans2.innerHTML = sum1Dylizans2+"x";
  var sum1Dylizans3 = Number(dylizans*1);
  addSum1Dylizans3.innerHTML = sum1Dylizans3+"x";
  var sum1Dylizans4 = Number(dylizans*1);
  addSum1Dylizans4.innerHTML = sum1Dylizans4+"x";
  var sum1Dylizans5 = Number(dylizans*1);
  addSum1Dylizans5.innerHTML = sum1Dylizans5+"x";
  var sum1Dylizans6 = Number(dylizans*1);
  addSum1Dylizans6.innerHTML = sum1Dylizans6+"x";
  /**ZBROJA DLA WIERZCHOWCA*/
  var zbrojaDlaWierzchowca = Number(calcZbrojaDlaWierzchowca.value) || 0;
  var sum3ZbrojaDlaWierzchowca1 = Number(zbrojaDlaWierzchowca*3);
  addSum3ZbrojaDlaWierzchowca1.innerHTML = sum3ZbrojaDlaWierzchowca1+"x";
  var sum1ZbrojaDlaWierzchowca2 = Number(zbrojaDlaWierzchowca*1);
  addSum1ZbrojaDlaWierzchowca2.innerHTML = sum1ZbrojaDlaWierzchowca2+"x";
  /**PAS Z RZEMIENI*/
  var pasZRzemieni = Number(calcPasZRzemieni.value) || 0;
  var sum3PasZRzemieni1 = Number(pasZRzemieni*3);
  addSum3PasZRzemieni1.innerHTML = sum3PasZRzemieni1+"x";
  var sum1PasZRzemieni2 = Number(pasZRzemieni*1);
  addSum1PasZRzemieni2.innerHTML = sum1PasZRzemieni2+"x";
  var sum1PasZRzemieni3 = Number(pasZRzemieni*1);
  addSum1PasZRzemieni3.innerHTML = sum1PasZRzemieni3+"x";
  var sum1PasZRzemieni4 = Number(pasZRzemieni*1);
  addSum1PasZRzemieni4.innerHTML = sum1PasZRzemieni4+"x";
  /**PLOCIENNA SKRZYNKA*/
  var plociennaSkrzynka = Number(calcPlociennaSkrzynka.value) || 0;
  var sum10PlociennaSkrzynka1 = Number(plociennaSkrzynka*10);
  addSum10PlociennaSkrzynka1.innerHTML = sum10PlociennaSkrzynka1+"x";
  var sum8PlociennaSkrzynka2 = Number(plociennaSkrzynka*8);
  addSum8PlociennaSkrzynka2.innerHTML = sum8PlociennaSkrzynka2+"x";
  var sum3PlociennaSkrzynka3 = Number(plociennaSkrzynka*3);
  addSum3PlociennaSkrzynka3.innerHTML = sum3PlociennaSkrzynka3+"x";
  var sum3PlociennaSkrzynka4 = Number(plociennaSkrzynka*3);
  addSum3PlociennaSkrzynka4.innerHTML = sum3PlociennaSkrzynka4+"x";
  var sum3PlociennaSkrzynka5 = Number(plociennaSkrzynka*3);
  addSum3PlociennaSkrzynka5.innerHTML = sum3PlociennaSkrzynka5+"x";
  /***PIESN DZIKIEGO ZACHODU*/
  var piesnTW = Number(calcPiesnTW.value) || 0;
  var sum5PiesnTW1 = Number(piesnTW*5);
  addSum5PiesnTW1.innerHTML = sum5PiesnTW1+"x";
  var sum3PiesnTW2 = Number(piesnTW*3);
  addSum3PiesnTW2.innerHTML = sum3PiesnTW2+"x";
  var sum3PiesnTW3 = Number(piesnTW*3);
  addSum3PiesnTW3.innerHTML = sum3PiesnTW3+"x";
  var sum2PiesnTW4 = Number(piesnTW*2);
  addSum2PiesnTW4.innerHTML = sum2PiesnTW4+"x";

  /**WYGARBOWANA SKORA*/
  var dodajSkora = document.createElement("table");
  sum1WygarSkora1 = sum1WygarSkora1 + sum1LapaczSnow3;
  dodajSkora.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1WygarSkora1+'</td><td class="td-img"><div><img src="image/craft/Skora.png" alt="Skóra" title="Skóra"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkora);
  if (sum1WygarSkora1===0) {
    parent_object.removeChild(dodajSkora);
  }
  
  /**SKORZANA TORBA*/
  var dodajWygarbowanaSkora = document.createElement("table");
  dodajWygarbowanaSkora.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1SkorzTorba1+'</td><td class="td-img"><div><img src="image/craft/WygarbowanaSkora.png" alt="Wygarbowana skóra" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum1SkorzTorba1===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  
  /**TORBA Z PASZA*/
  var dodajSkorzanaTorba = document.createElement("table");
  dodajSkorzanaTorba.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1TorbaPasza1+'</td><td class="td-img"><div><img src="image/craft/SkorzanaTorba.png" alt="Skórzana torba" title="Skórzana torba"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanaTorba");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanaTorba);
  if (sum1TorbaPasza1===0) {
    parent_object.removeChild(dodajSkorzanaTorba);
  }
  var dodajZboze = document.createElement("table");
  sum1TorbaPasza2 = sum1TorbaPasza2 + sum4Bimber1;
  dodajZboze.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1TorbaPasza2+'</td><td class="td-img"><div><img src="image/craft/Zboze.png" alt="Zboże" title="Zboże"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZboze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZboze);
  if (sum1TorbaPasza2===0) {
    parent_object.removeChild(dodajZboze);
  }
  
  /**MANIERKA*/
  var dodajSkoraZBobra = document.createElement("table");
  dodajSkoraZBobra.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Manierka1+'</td><td class="td-img"><div><img src="image/craft/SkoraZBobra.png" alt="Skóra z bobra" title="Skóra z bobra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBobra");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBobra);
  if (sum1Manierka1===0) {
    parent_object.removeChild(dodajSkoraZBobra);
  }
  var dodajKrowiRog = document.createElement("table");
  dodajKrowiRog.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Manierka2+'</td><td class="td-img"><div><img src="image/craft/KrowiRog.png" alt="Krowi róg" title="Krowi róg"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKrowiRog");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKrowiRog);
  if (sum1Manierka2===0) {
    parent_object.removeChild(dodajKrowiRog);
  }
  
  /**RZEMIEN*/
  var dodajSierp = document.createElement("table");
  dodajSierp.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Rzemien1+'</td><td class="td-img"><div><img src="image/craft/Sierp.png" alt="Sierp" title="Sierp"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSierp");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSierp);
  if (sum1Rzemien1===0) {
    parent_object.removeChild(dodajSierp);
  }
  var dodajWygarbowanaSkora = document.createElement("table");
  sum1Rzemien2 = sum1Rzemien2 + sum1SkorzTorba1;
  dodajWygarbowanaSkora.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Rzemien2+'</td><td class="td-img"><div><img src="image/craft/WygarbowanaSkora.png" alt="Wygarbowana skóra" title="Wygarbowana skóra"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum1Deska1+'</td><td class="td-img"><div><img src="image/craft/Drewno.png" alt="Drewno" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum1Deska1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  
  /**TORBA PODROZNA*/
  var dodajWelna = document.createElement("table");
  dodajWelna.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2TorbaPodr1+'</td><td class="td-img"><div><img src="image/craft/Welna.png" alt="Wełna" title="Wełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWelna);
  if (sum2TorbaPodr1===0) {
    parent_object.removeChild(dodajWelna);
  }
  var dodajBawelna = document.createElement("table");
  sum1TorbaPodr2 = sum1TorbaPodr2 + sum1Krzesiwo3;
  dodajBawelna.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1TorbaPodr2+'</td><td class="td-img"><div><img src="image/craft/Bawelna.png" alt="Bawełna" title="Bawełna"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum2Podkucie1+'</td><td class="td-img"><div><img src="image/craft/Gwozdzie.png" alt="Gwoździe" title="Gwoździe"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajGwozdzie");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajGwozdzie);
  if (sum2Podkucie1===0) {
    parent_object1.removeChild(dodajGwozdzie);
  }
  var dodajMlotek = document.createElement("table");
  sum1Podkucie2 = sum1Podkucie2 + sum5FasPuszka4;
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Podkucie2+'</td><td class="td-img"><div><img src="image/craft/Mlotek.png" alt="Młotek" title="Młotek"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotek");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotek);
  if (sum1Podkucie2===0) {
    parent_object.removeChild(dodajMlotek);
  }
  var dodajPodkowa = document.createElement("table");
  dodajPodkowa.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Podkucie3+'</td><td class="td-img"><div><img src="image/craft/Podkowa.png" alt="Podkowa" title="Podkowa"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum3Pasza1+'</td><td class="td-img"><div><img src="image/craft/Zboze.png" alt="Zboże" title="Zboże"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZboze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZboze);
  if (sum3Pasza1===0) {
    parent_object.removeChild(dodajZboze);
  }
  var dodajSiano = document.createElement("table");
  sum3Pasza2 = sum3Pasza2 + sum2Wlokno3;
  dodajSiano.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3Pasza2+'</td><td class="td-img"><div><img src="image/craft/Siano.png" alt="Siano" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum3Pasza2===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajSzklankaWody = document.createElement("table");
  sum3Pasza3 = sum3Pasza3 + sum10SilnyKwas4;
  dodajSzklankaWody.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3Pasza3+'</td><td class="td-img"><div><img src="image/craft/SzklankaWody.png" alt="Szklanka wody" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum3Pasza3===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  var dodajJagody = document.createElement("table");
  sum2Pasza4 = sum2Pasza4 + sum3Herbata1;
  dodajJagody.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2Pasza4+'</td><td class="td-img"><div><img src="image/craft/Jagody.png" alt="Jagody" title="Jagody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajJagody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajJagody);
  if (sum2Pasza4===0) {
    parent_object.removeChild(dodajJagody);
  }
  
  /**OBDARTE SIODLO*/
  var dodajSiodlo = document.createElement("table");
  dodajSiodlo.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1ObdarteSiodlo1+'</td><td class="td-img"><div><img src="image/craft/Siodlo.png" alt="Siodło" title="Siodło"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajSiodlo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiodlo);
  if (sum1ObdarteSiodlo1===0) {
    parent_object.removeChild(dodajSiodlo);
  }
  var dodajNoz = document.createElement("table");
  sum1ObdarteSiodlo2 = sum1ObdarteSiodlo2 + sum1SokKaktus3;
  dodajNoz.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1ObdarteSiodlo2+'</td><td class="td-img"><div><img src="image/craft/Noz.png" alt="Nóż" title="Nóż"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum4Wypelniacz1+'</td><td class="td-img"><div><img src="image/craft/Bawelna.png" alt="Bawełna" title="Bawełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBawelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBawelna);
  if (sum4Wypelniacz1===0) {
    parent_object.removeChild(dodajBawelna);
  }
  var dodajZboze = document.createElement("table");
  sum4Wypelniacz2 = sum3Pasza1 + sum4Wypelniacz2;
  dodajZboze.innerHTML = 
  '<table><tr><td class="ilosc">'+sum4Wypelniacz2+'</td><td class="td-img"><div><img src="image/craft/Zboze.png" alt="Zboże" title="Zboże"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZboze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZboze);
  if (sum4Wypelniacz2===0) {
    parent_object.removeChild(dodajZboze);
  }
  var dodajWelna = document.createElement("table");
  sum2Wypelniacz3 = sum2Wypelniacz3 + sum2TorbaPodr1;
  dodajWelna.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2Wypelniacz3+'</td><td class="td-img"><div><img src="image/craft/Welna.png" alt="Wełna" title="Wełna"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum1SkorzPokrycie1+'</td><td class="td-img"><div><img src="image/craft/Zywica.png" alt="Żywica" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum1SkorzPokrycie1===0) {
    parent_object.removeChild(dodajZywica);
  }
  var dodajSkoraWeza = document.createElement("table");
  sum1SkorzPokrycie2 = sum1SkorzPokrycie2 + sum1Panaceum2;
  dodajSkoraWeza.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1SkorzPokrycie2+'</td><td class="td-img"><div><img src="image/craft/SkoraWeza.png" alt="Skóra węża" title="Skóra węża"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum2Znakownik1+'</td><td class="td-img"><div><img src="image/craft/Siano.png" alt="Siano" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum2Znakownik1===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajWegiel = document.createElement("table");
  sum2Znakownik2 = sum2Znakownik2 + sum4Antidotum3;
  dodajWegiel.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2Znakownik2+'</td><td class="td-img"><div><img src="image/craft/Wegiel.png" alt="Węgiel" title="Węgiel"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWegiel");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWegiel);
  if (sum2Znakownik2===0) {
    parent_object.removeChild(dodajWegiel);
  }
  var dodajPretyMetalowe = document.createElement("table");
  dodajPretyMetalowe.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Znakownik3+'</td><td class="td-img"><div><img src="image/craft/PretyMetalowe.png" alt="Pręty metalowe" title="Pręty metalowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPretyMetalowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPretyMetalowe);
  if (sum1Znakownik3===0) {
    parent_object.removeChild(dodajPretyMetalowe);
  }
  var dodajKrzesiwo = document.createElement("table");
  sum1Znakownik4 = sum1Znakownik4 + sum1Bimber4;
  dodajKrzesiwo.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Znakownik4+'</td><td class="td-img"><div><img src="image/craft/Krzesiwo.png" alt="Krzesiwo" title="Krzesiwo"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum1Kompas1+'</td><td class="td-img"><div><img src="image/craft/SzklankaWody.png" alt="Szklanka wody" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum1Kompas1===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  var dodajGwozdzie = document.createElement("table");
  sum1Kompas2 = sum1Kompas2 + sum2Podkucie1;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Kompas2+'</td><td class="td-img"><div><img src="image/craft/Gwozdzie.png" alt="Gwoździe" title="Gwoździe"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum1Strzemie1+'</td><td class="td-img"><div><img src="image/craft/PretyMetalowe.png" alt="Pręty metalowe" title="Pręty metalowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPretyMetalowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPretyMetalowe);
  if (sum1Strzemie1===0) {
    parent_object.removeChild(dodajPretyMetalowe);
  }
  var dodajMlotKowalski = document.createElement("table");
  dodajMlotKowalski.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Strzemie2+'</td><td class="td-img"><div><img src="image/craft/MlotKowalski.png" alt="Młot kowalski" title="Młot kowalski"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotKowalski");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotKowalski);
  if (sum1Strzemie2===0) {
    parent_object.removeChild(dodajMlotKowalski);
  }
  var dodajRzemien = document.createElement("table");
  sum1Strzemie3 = sum1Strzemie3 + sum1LapaczSnow4;
  dodajRzemien.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Strzemie3+'</td><td class="td-img"><div><img src="image/craft/Rzemien.png" alt="Rzemień" title="Rzemień"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRzemien");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRzemien);
  if (sum1Strzemie3===0) {
    parent_object.removeChild(dodajRzemien);
  }
  
  /**OSTROGI*/
  var dodajDrutKolczasty = document.createElement("table");
  dodajDrutKolczasty.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3Ostrogi1+'</td><td class="td-img"><div><img src="image/craft/DrutKolczasty.png" alt="Drut kolczasty" title="Drut kolczasty"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrutKolczasty");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrutKolczasty);
  if (sum3Ostrogi1===0) {
    parent_object.removeChild(dodajDrutKolczasty);
  }
  var dodajCwiercdolarowka = document.createElement("table");
  sum1Ostrogi2 = sum1Ostrogi2 + sum4MetalowaCzaszka3;
  dodajCwiercdolarowka.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Ostrogi2+'</td><td class="td-img"><div><img src="image/craft/Cwiercdolarowka.png" alt="Ćwierćdolarówka" title="Ćwierćdolarówka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCwiercdolarowka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCwiercdolarowka);
  if (sum1Ostrogi2===0) {
    parent_object.removeChild(dodajCwiercdolarowka);
  }
  var dodajPila = document.createElement("table");
  sum1Ostrogi3 = sum1Ostrogi3 + sum1Zywica1;
  dodajPila.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Ostrogi3+'</td><td class="td-img"><div><img src="image/craft/Pila.png" alt="Piła" title="Piła"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum2Uzda1+'</td><td class="td-img"><div><img src="image/craft/Lasso.png" alt="Lasso" title="Lasso"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLasso");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLasso);
  if (sum2Uzda1===0) {
    parent_object.removeChild(dodajLasso);
  }
  var dodajSzpulkaDrutu = document.createElement("table");
  sum1Uzda2 = sum1Uzda2 + sum1LapaczSnow5;
  dodajSzpulkaDrutu.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Uzda2+'</td><td class="td-img"><div><img src="image/craft/SzpulkaDrutu.png" alt="Szpulka drutu" title="Szpulka drutu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzpulkaDrutu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzpulkaDrutu);
  if (sum1Uzda2===0) {
    parent_object.removeChild(dodajSzpulkaDrutu);
  }
  var dodajDeskaDoKrojenia = document.createElement("table");
  sum1Uzda3 = sum1Uzda3 + sum1Nalewka3;
  dodajDeskaDoKrojenia.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Uzda3+'</td><td class="td-img"><div><img src="image/craft/DeskaDoKrojenia.png" alt="Deska do krojenia" title="Deska do krojenia"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum3Spiwor1+'</td><td class="td-img"><div><img src="image/craft/Siano.png" alt="Siano" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum3Spiwor1===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajSkoraPumy = document.createElement("table");
  sum2Spiwor2 = sum2Spiwor2 + sum1Odzywka1;
  dodajSkoraPumy.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2Spiwor2+'</td><td class="td-img"><div><img src="image/craft/SkoraPumy.png" alt="Skóra pumy" title="Skóra pumy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraPumy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraPumy);
  if (sum2Spiwor2===0) {
    parent_object.removeChild(dodajSkoraPumy);
  }
  var dodajSukno = document.createElement("table");
  sum1Spiwor3 = sum1Spiwor3 + sum1Wycior3;
  dodajSukno.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Spiwor3+'</td><td class="td-img"><div><img src="image/craft/Sukno.png" alt="Sukno" title="Sukno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSukno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSukno);
  if (sum1Spiwor3===0) {
    parent_object.removeChild(dodajSukno);
  }
  
  /**DERA*/
  var dodajSkoraZBizona = document.createElement("table");
  dodajSkoraZBizona.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Dera1+'</td><td class="td-img"><div><img src="image/craft/SkoraZBizona.png" alt="Skóra z bizona" title="Skóra z bizona"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBizona");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBizona);
  if (sum1Dera1===0) {
    parent_object.removeChild(dodajSkoraZBizona);
  }
  var dodajSkoraZBobra = document.createElement("table");
  sum1Dera2 = sum1Dera2 + sum1Manierka1;
  dodajSkoraZBobra.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Dera2+'</td><td class="td-img"><div><img src="image/craft/SkoraZBobra.png" alt="Skóra z bobra" title="Skóra z bobra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBobra");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBobra);
  if (sum1Dera2===0) {
    parent_object.removeChild(dodajSkoraZBobra);
  }
  var dodajNoz = document.createElement("table");
  sum1Dera3 = sum1Dera3 + sum1ObdarteSiodlo2;
  dodajNoz.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Dera3+'</td><td class="td-img"><div><img src="image/craft/Noz.png" alt="Nóż" title="Nóż"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNoz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNoz);
  if (sum1Dera3===0) {
    parent_object.removeChild(dodajNoz);
  }
  
  /**OZDOBA RYMARZ*/
  var dodajKamieniePolszlachetne = document.createElement("table");
  dodajKamieniePolszlachetne.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1OzdobaRym1+'</td><td class="td-img"><div><img src="image/craft/KamieniePolszlachetne.png" alt="Kamienie półszlachetne" title="Kamienie półszlachetne"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKamieniePolszlachetne");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKamieniePolszlachetne);
  if (sum1OzdobaRym1===0) {
    parent_object.removeChild(dodajKamieniePolszlachetne);
  }
  var dodajOlow = document.createElement("table");
  sum1OzdobaRym2 = sum1OzdobaRym2 + sum3MetalowaCzaszka5;
  dodajOlow.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1OzdobaRym2+'</td><td class="td-img"><div><img src="image/craft/Olow.png" alt="Ołów" title="Ołów"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOlow");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOlow);
  if (sum1OzdobaRym2===0) {
    parent_object.removeChild(dodajOlow);
  }
  var dodajSrebro = document.createElement("table");
  sum1OzdobaRym3 = sum1OzdobaRym3 + sum5MetalowaCzaszka1;
  dodajSrebro.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1OzdobaRym3+'</td><td class="td-img"><div><img src="image/craft/Srebro.png" alt="Srebro" title="Srebro"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum3CzescPowozu1+'</td><td class="td-img"><div><img src="image/craft/Drewno.png" alt="Drewno" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum3CzescPowozu1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajGwozdzie = document.createElement("table");
  sum2CzescPowozu2 = sum1Kompas2 + sum2CzescPowozu2;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2CzescPowozu2+'</td><td class="td-img"><div><img src="image/craft/Gwozdzie.png" alt="Gwoździe" title="Gwoździe"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajGwozdzie");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajGwozdzie);
  if (sum2CzescPowozu2===0) {
    parent_object1.removeChild(dodajGwozdzie);
  }
  var dodajMlotek = document.createElement("table");
  sum1CzescPowozu3 = sum1CzescPowozu3 + sum1Podkucie2;
  dodajMlotek.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1CzescPowozu3+'</td><td class="td-img"><div><img src="image/craft/Mlotek.png" alt="Młotek" title="Młotek"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum3KoloPowozu1+'</td><td class="td-img"><div><img src="image/craft/Drewno.png" alt="Drewno" title="Drewno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDrewno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDrewno);
  if (sum3KoloPowozu1===0) {
    parent_object.removeChild(dodajDrewno);
  }
  var dodajPretyMetalowe = document.createElement("table");
  sum2KoloPowozu2 = sum1Strzemie1 + sum2KoloPowozu2;
  dodajPretyMetalowe.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2KoloPowozu2+'</td><td class="td-img"><div><img src="image/craft/PretyMetalowe.png" alt="Pręty metalowe" title="Pręty metalowe"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPretyMetalowe");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPretyMetalowe);
  if (sum2KoloPowozu2===0) {
    parent_object.removeChild(dodajPretyMetalowe);
  }
  var dodajGwozdzie = document.createElement("table");
  sum1KoloPowozu3 = sum1KoloPowozu3 + sum2CzescPowozu2;
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1KoloPowozu3+'</td><td class="td-img"><div><img src="image/craft/Gwozdzie.png" alt="Gwoździe" title="Gwoździe"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajGwozdzie");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajGwozdzie);
  if (sum1KoloPowozu3===0) {
    parent_object1.removeChild(dodajGwozdzie);
  }
  
  /**POWOZ WYSCIGOWY*/
  var dodajLejce = document.createElement("table");
  dodajLejce.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Powoz1+'</td><td class="td-img"><div><img src="image/craft/Lejce.png" alt="Lejce" title="Lejce"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLejce");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLejce);
  if (sum1Powoz1===0) {
    parent_object.removeChild(dodajLejce);
  }
  var dodajCzescPowozu = document.createElement("table");
  dodajCzescPowozu.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Powoz2+'</td><td class="td-img"><div><img src="image/craft/CzescPowozu.png" alt="Część powozu" title="Część powozu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCzescPowozu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCzescPowozu);
  if (sum1Powoz2===0) {
    parent_object.removeChild(dodajCzescPowozu);
  }
  var dodajKoloPowozu = document.createElement("table");
  dodajKoloPowozu.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Powoz3+'</td><td class="td-img"><div><img src="image/craft/KoloPowozu.png" alt="Koło powozu" title="Koło powozu"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum2Eliksir1+'</td><td class="td-img"><div><img src="image/craft/Whiskey.png" alt="Whiskey" title="Whiskey"></div></td> </tr></table>';
  var parent_object = document.getElementById("dodajWhiskey");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWhiskey);
  if (sum2Eliksir1===0) {
    parent_object.removeChild(dodajWhiskey);
  }
  var dodajEliksir = document.createElement("table");
  sum1Eliksir2 = sum1Eliksir2 + sum4SilnyKwas5;
  dodajEliksir.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Eliksir2+'</td><td class="td-img"><div><img src="image/craft/Eliksir.png" alt="Eliksir" title="Eliksir"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajEliksir");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajEliksir);
  if (sum1Eliksir2===0) {
    parent_object.removeChild(dodajEliksir);
  }
  var dodajManierka = document.createElement("table");
  sum1Eliksir3 = sum1Eliksir3 + sum1Destylat2;
  dodajManierka.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Eliksir3+'</td><td class="td-img"><div><img src="image/craft/Manierka.png" alt="Manierka" title="Manierka"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajManierka");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajManierka);
  if (sum1Eliksir3===0) {
    parent_object.removeChild(dodajManierka);
  }
  
  /**NAPRAWIONE SIODLO*/
  var dodajSzczypce = document.createElement("table");
  dodajSzczypce.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3NaprSiodlo1+'</td><td class="td-img"><div><img src="image/craft/Szczypce.png" alt="Szczypce" title="Szczypce"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzczypce");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzczypce);
  if (sum3NaprSiodlo1===0) {
    parent_object.removeChild(dodajSzczypce);
  }
  var dodajRopa = document.createElement("table");
  sum1NaprSiodlo2 = sum1NaprSiodlo2 + sum3Mikstura2;
  dodajRopa.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1NaprSiodlo2+'</td><td class="td-img"><div><img src="image/craft/Ropa.png" alt="Ropa" title="Ropa"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRopa");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRopa);
  if (sum1NaprSiodlo2===0) {
    parent_object.removeChild(dodajRopa);
  }
  var dodajSkorzanePokrycie = document.createElement("table");
  dodajSkorzanePokrycie.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1NaprSiodlo3+'</td><td class="td-img"><div><img src="image/craft/SkorzanePokrycie.png" alt="Skórzane pokrycie" title="Skórzane pokrycie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanePokrycie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanePokrycie);
  if (sum1NaprSiodlo3===0) {
    parent_object.removeChild(dodajSkorzanePokrycie);
  }
  var dodajObdarteSiodlo = document.createElement("table");
  dodajObdarteSiodlo.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1NaprSiodlo4+'</td><td class="td-img"><div><img src="image/craft/ObdarteSiodlo.png" alt="Obdarte siodło" title="Obdarte siodło"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum1Notatnik1+'</td><td class="td-img"><div><img src="image/craft/SkorzanePokrycie.png" alt="Skórzane pokrycie" title="Skórzane pokrycie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanePokrycie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanePokrycie);
  if (sum1Notatnik1===0) {
    parent_object.removeChild(dodajSkorzanePokrycie);
  }
  var dodajPapier = document.createElement("table");
  sum1Notatnik2 = sum1Notatnik2 + sum1CertyfikatPodatku4;
  dodajPapier.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Notatnik2+'</td><td class="td-img"><div><img src="image/craft/Papier.png" alt="Papier" title="Papier"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum1LekSiodla1+'</td><td class="td-img"><div><img src="image/craft/Zywica.png" alt="Żywica" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum1LekSiodla1===0) {
    parent_object.removeChild(dodajZywica);
  }
  var dodajKamieniePolszlachetne = document.createElement("table");
  sum2LekSiodla2 = sum2LekSiodla2 + sum1OzdobaRym1;
  dodajKamieniePolszlachetne.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2LekSiodla2+'</td><td class="td-img"><div><img src="image/craft/KamieniePolszlachetne.png" alt="Kamienie półszlachetne" title="Kamienie półszlachetne"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum1Impregnat1+'</td><td class="td-img"><div><img src="image/craft/Ropa.png" alt="Ropa" title="Ropa"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRopa");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRopa);
  if (sum1Impregnat1===0) {
    parent_object.removeChild(dodajRopa);
  }
  var dodajKwiatLotosu = document.createElement("table");
  sum1Impregnat2 = sum1Impregnat2 + sum2Mikstura3;
  dodajKwiatLotosu.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Impregnat2+'</td><td class="td-img"><div><img src="image/craft/KwiatLotosu.png" alt="Kwiat lotosu" title="Kwiat lotosu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajKwiatLotosu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajKwiatLotosu);
  if (sum1Impregnat2===0) {
    parent_object.removeChild(dodajKwiatLotosu);
  }
  var dodajPomarancza = document.createElement("table");
  sum1Impregnat3 = sum1Impregnat3 + sum1Bateria1;
  dodajPomarancza.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Impregnat3+'</td><td class="td-img"><div><img src="image/craft/Pomarancza.png" alt="Pomarańcza" title="Pomarańcza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajPomarancza");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajPomarancza);
  if (sum1Impregnat3===0) {
    parent_object.removeChild(dodajPomarancza);
  }
  
  /**ARRAS*/
  var dodajBandaze = document.createElement("table");
  dodajBandaze.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2Arras1+'</td><td class="td-img"><div><img src="image/craft/Bandaze.png" alt="Bandaże" title="Bandaże"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBandaze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBandaze);
  if (sum2Arras1===0) {
    parent_object.removeChild(dodajBandaze);
  }
  var dodajIndygo = document.createElement("table");
  sum1Arras2 = sum1Arras2 + sum1Atrament1;
  dodajIndygo.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Arras2+'</td><td class="td-img"><div><img src="image/craft/Indygo.png" alt="Indygo" title="Indygo"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajIndygo");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajIndygo);
  if (sum1Arras2===0) {
    parent_object.removeChild(dodajIndygo);
  }
  var dodajSzwajcarskiScyzoryk = document.createElement("table");
  dodajSzwajcarskiScyzoryk.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Arras3+'</td><td class="td-img"><div><img src="image/craft/SzwajcarskiScyzoryk.png" alt="Szwajcarski scyzoryk" title="Szwajcarski scyzoryk"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzwajcarskiScyzoryk");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzwajcarskiScyzoryk);
  if (sum1Arras3===0) {
    parent_object.removeChild(dodajSzwajcarskiScyzoryk);
  }
  var dodajDera = document.createElement("table");
  dodajDera.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Arras4+'</td><td class="td-img"><div><img src="image/craft/Dera.png" alt="Dera" title="Dera"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDera");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDera);
  if (sum1Arras4===0) {
    parent_object.removeChild(dodajDera);
  }
  
  /**WYTRZYMALE LEJCE*/
  var dodajOzdobaRymarz = document.createElement("table");
  dodajOzdobaRymarz.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Lejce1+'</td><td class="td-img"><div><img src="image/craft/Ozdoba.png" alt="Ozdoba od rymarza" title="Ozdoba od rymarza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOzdobaRymarz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOzdobaRymarz);
  if (sum1Lejce1===0) {
    parent_object.removeChild(dodajOzdobaRymarz);
  }
  var dodajRzemien = document.createElement("table");
  sum1Lejce2 = sum1Lejce2 + sum1Strzemie3;
  dodajRzemien.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Lejce2+'</td><td class="td-img"><div><img src="image/craft/Rzemien.png" alt="Rzemień" title="Rzemień"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum1Kabura1+'</td><td class="td-img"><div><img src="image/craft/WygarbowanaSkora.png" alt="Wygarbowana skóra" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum1Kabura1===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  var dodajWypelniacz = document.createElement("table");
  dodajWypelniacz.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Kabura2+'</td><td class="td-img"><div><img src="image/craft/Wypelniacz.png" alt="Wypełniacz" title="Wypełniacz"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWypelniacz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWypelniacz);
  if (sum1Kabura2===0) {
    parent_object.removeChild(dodajWypelniacz);
  }
  var dodajSkorzanePokrycie = document.createElement("table");
  sum1Kabura3 = sum1Kabura3 + sum1Notatnik1;
  dodajSkorzanePokrycie.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Kabura3+'</td><td class="td-img"><div><img src="image/craft/SkorzanePokrycie.png" alt="Skórzane pokrycie" title="Skórzane pokrycie"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum2WPowoz1+'</td><td class="td-img"><div><img src="image/craft/KoloPowozu.png" alt="Koło powozu" title="Koło powozu"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajKoloPowozu");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajKoloPowozu);
  if (sum2WPowoz1===0) {
    parent_object1.removeChild(dodajKoloPowozu);
  }
  var dodajCzescPowozu = document.createElement("table");
  sum1WPowoz2 = sum1WPowoz2 + sum1Powoz2;
  dodajCzescPowozu.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1WPowoz2+'</td><td class="td-img"><div><img src="image/craft/CzescPowozu.png" alt="Część powozu" title="Część powozu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajCzescPowozu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajCzescPowozu);
  if (sum1WPowoz2===0) {
    parent_object.removeChild(dodajCzescPowozu);
  }
  var dodajWloknoLnu = document.createElement("table");
  sum1WPowoz3 = sum1WPowoz3 + sum1RemediumPrzeciwCierpieniu3;
  dodajWloknoLnu.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1WPowoz3+'</td><td class="td-img"><div><img src="image/craft/WloknoLnu.png" alt="Włókno lnu" title="Włókno lnu"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum5LeciutkaSkora1+'</td><td class="td-img"><div><img src="image/craft/WygarbowanaSkora.png" alt="Wygarbowana skóra" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum5LeciutkaSkora1===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  var dodajSkorzanePokrycie = document.createElement("table");
  sum3LeciutkaSkora2 = sum1Kabura3 + sum3LeciutkaSkora2;
  dodajSkorzanePokrycie.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3LeciutkaSkora2+'</td><td class="td-img"><div><img src="image/craft/SkorzanePokrycie.png" alt="Skórzane pokrycie" title="Skórzane pokrycie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanePokrycie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanePokrycie);
  if (sum3LeciutkaSkora2===0) {
    parent_object.removeChild(dodajSkorzanePokrycie);
  }
  var dodajLug = document.createElement("table");
  sum3LeciutkaSkora3 = sum3LeciutkaSkora3 + sum10SilnyKwas2;
  dodajLug.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3LeciutkaSkora3+'</td><td class="td-img"><div><img src="image/craft/Lug.png" alt="Ług" title="Ług"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLug");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLug);
  if (sum3LeciutkaSkora3===0) {
    parent_object.removeChild(dodajLug);
  }
  var dodajWykwintnyImpregnat = document.createElement("table");
  dodajWykwintnyImpregnat.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1LeciutkaSkora4+'</td><td class="td-img"><div><img src="image/craft/WykwintnyImpregnat.png" alt="Wykwintny impregnat" title="Wykwintny impregnat"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum6SiodloPony1+'</td><td class="td-img"><div><img src="image/craft/SkoraZBizona.png" alt="Skóra z bizona" title="Skóra z bizona"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBizona");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBizona);
  if (sum6SiodloPony1===0) {
    parent_object.removeChild(dodajSkoraZBizona);
  }
  var dodajOzdobaRymarz = document.createElement("table");
  sum5SiodloPony2 = sum5SiodloPony2 + sum1Lejce1;
  dodajOzdobaRymarz.innerHTML = 
  '<table><tr><td class="ilosc">'+sum5SiodloPony2+'</td><td class="td-img"><div><img src="image/craft/Ozdoba.png" alt="Ozdoba od rymarza" title="Ozdoba od rymarza"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOzdobaRymarz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOzdobaRymarz);
  if (sum5SiodloPony2===0) {
    parent_object.removeChild(dodajOzdobaRymarz);
  }
  var dodajLeciutkaSkora = document.createElement("table");
  dodajLeciutkaSkora.innerHTML = 
  '<table><tr><td class="ilosc">'+sum4SiodloPony3+'</td><td class="td-img"><div><img src="image/craft/LeciutkaSkora.png" alt="Leciutka skóra" title="Leciutka skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLeciutkaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLeciutkaSkora);
  if (sum4SiodloPony3===0) {
    parent_object.removeChild(dodajLeciutkaSkora);
  }
  var dodajKozackiCzaprak = document.createElement("table");
  dodajKozackiCzaprak.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1SiodloPony4+'</td><td class="td-img"><div><img src="image/craft/KozackiCzaprak.png" alt="Kozacki czaprak" title="Kozacki czaprak"></div></td></tr></table>';
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
  '<table><tr><td class="ilosc">'+sum2Schowek1+'</td><td class="td-img"><div><img src="image/craft/WygarbowanaSkora.png" alt="Wygarbowana skóra" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum2Schowek1===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  var dodajSzczypce = document.createElement("table");
  sum1Schowek2 = sum1Schowek2 + sum3NaprSiodlo1;
  dodajSzczypce.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Schowek2+'</td><td class="td-img"><div><img src="image/craft/Szczypce.png" alt="Szczypce" title="Szczypce"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzczypce");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzczypce);
  if (sum1Schowek2===0) {
    parent_object.removeChild(dodajSzczypce);
  }
  var dodajLuska = document.createElement("table");
  sum1Schowek3 = sum1Schowek3 + sum3Proch1;
  dodajLuska.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Schowek3+'</td><td class="td-img"><div><img src="image/craft/Luska.png" alt="Łuska" title="Łuska"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLuska");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLuska);
  if (sum1Schowek3===0) {
    parent_object.removeChild(dodajLuska);
  }
  var dodajWykwintnyImpregnat = document.createElement("table");
  sum1Schowek4 = sum1Schowek4 + sum1LeciutkaSkora4;
  dodajWykwintnyImpregnat.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Schowek4+'</td><td class="td-img"><div><img src="image/craft/WykwintnyImpregnat.png" alt="Wykwintny impregnat" title="Wykwintny impregnat"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWykwintnyImpregnat");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWykwintnyImpregnat);
  if (sum1Schowek4===0) {
    parent_object.removeChild(dodajWykwintnyImpregnat);
  }

  /**SKORZANY PLASZCZ*/
  var dodajSkorzanePokrycie = document.createElement("table");
  sum4SkorzanyPlaszcz1 = sum4SkorzanyPlaszcz1 + sum3LeciutkaSkora2;
  dodajSkorzanePokrycie.innerHTML = 
  '<table><tr><td class="ilosc">'+sum4SkorzanyPlaszcz1+'</td><td class="td-img"><div><img src="image/craft/SkorzanePokrycie.png" alt="Skórzane pokrycie" title="Skórzane pokrycie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanePokrycie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanePokrycie);
  if (sum4SkorzanyPlaszcz1===0) {
    parent_object.removeChild(dodajSkorzanePokrycie);
  }
  var dodajSkoraPumy = document.createElement("table");
  sum3SkorzanyPlaszcz2 = sum3SkorzanyPlaszcz2 + sum2Spiwor2;
  dodajSkoraPumy.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3SkorzanyPlaszcz2+'</td><td class="td-img"><div><img src="image/craft/SkoraPumy.png" alt="Skóra pumy" title="Skóra pumy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraPumy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraPumy);
  if (sum3SkorzanyPlaszcz2===0) {
    parent_object.removeChild(dodajSkoraPumy);
  }
  var dodajSkoraZBizona = document.createElement("table");
  sum2SkorzanyPlaszcz3 = sum2SkorzanyPlaszcz3 + sum6SiodloPony1;
  dodajSkoraZBizona.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2SkorzanyPlaszcz3+'</td><td class="td-img"><div><img src="image/craft/SkoraZBizona.png" alt="Skóra z bizona" title="Skóra z bizona"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBizona");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBizona);
  if (sum2SkorzanyPlaszcz3===0) {
    parent_object.removeChild(dodajSkoraZBizona);
  }
  var dodajSukno = document.createElement("table");
  sum2SkorzanyPlaszcz4 = sum2SkorzanyPlaszcz4 + sum1Spiwor3;
  dodajSukno.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2SkorzanyPlaszcz4+'</td><td class="td-img"><div><img src="image/craft/Sukno.png" alt="Sukno" title="Sukno"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSukno");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSukno);
  if (sum2SkorzanyPlaszcz4===0) {
    parent_object.removeChild(dodajSukno);
  }
  /**DYLIZANS MARII ROALSTAD*/
  var dodajJagniecaWelna = document.createElement("table");
  dodajJagniecaWelna.innerHTML = 
  '<table><tr><td class="ilosc">'+sum10Dylizans1+'</td><td class="td-img"><div><img src="image/craft/JagniecaWelna.png" alt="Jagnięca wełna" title="Jagnięca wełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajJagniecaWelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajJagniecaWelna);
  if (sum10Dylizans1===0) {
    parent_object.removeChild(dodajJagniecaWelna);
  }
  var dodajTrabkaPocztyliona = document.createElement("table");
  dodajTrabkaPocztyliona.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Dylizans2+'</td><td class="td-img"><div><img src="image/craft/TrabkaPocztyliona.png" alt="Trąbka pocztyliona" title="Trąbka pocztyliona"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajTrabkaPocztyliona");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajTrabkaPocztyliona);
  if (sum1Dylizans2===0) {
    parent_object.removeChild(dodajTrabkaPocztyliona);
  }
  var dodajWedrownyPowoz = document.createElement("table");
  dodajWedrownyPowoz.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Dylizans3+'</td><td class="td-img"><div><img src="image/craft/WedrownyPowoz.png" alt="Wędrowny powóz" title="Wędrowny powóz"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWedrownyPowoz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWedrownyPowoz);
  if (sum1Dylizans3===0) {
    parent_object.removeChild(dodajWedrownyPowoz);
  }
  var dodajWypelniacz = document.createElement("table");
  sum1Dylizans4 = sum1Dylizans4 + sum1Kabura2;
  dodajWypelniacz.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Dylizans4+'</td><td class="td-img"><div><img src="image/craft/Wypelniacz.png" alt="Wypełniacz" title="Wypełniacz"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWypelniacz");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWypelniacz);
  if (sum1Dylizans4===0) {
    parent_object.removeChild(dodajWypelniacz);
  }
  var dodajWykwintnyImpregnat = document.createElement("table");
  sum1Dylizans5 = sum1Dylizans5 + sum1Schowek4;
  dodajWykwintnyImpregnat.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Dylizans5+'</td><td class="td-img"><div><img src="image/craft/WykwintnyImpregnat.png" alt="Wykwintny impregnat" title="Wykwintny impregnat"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWykwintnyImpregnat");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWykwintnyImpregnat);
  if (sum1Dylizans5===0) {
    parent_object.removeChild(dodajWykwintnyImpregnat);
  }
  var dodajNity = document.createElement("table");
  dodajNity.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1Dylizans6+'</td><td class="td-img"><div><img src="image/craft/Nity.png" alt="Nity" title="Nity"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNity");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNity);
  if (sum1Dylizans6===0) {
    parent_object.removeChild(dodajNity);
  }
  /**ZBROJA DLA WIERZCHOWCA*/
  var dodajDera = document.createElement("table");
  sum3ZbrojaDlaWierzchowca1 = sum3ZbrojaDlaWierzchowca1 + sum1Arras4;
  dodajDera.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3ZbrojaDlaWierzchowca1+'</td><td class="td-img"><div><img src="image/craft/Dera.png" alt="Dera" title="Dera"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDera");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDera);
  if (sum3ZbrojaDlaWierzchowca1===0) {
    parent_object.removeChild(dodajDera);
  }
  var dodajNowoczesnaZbroja = document.createElement("table");
  dodajNowoczesnaZbroja.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1ZbrojaDlaWierzchowca2+'</td><td class="td-img"><div><img src="image/craft/NowoczesnaZbroja.png" alt="Nowoczesna zbroja" title="Nowoczesna zbroja"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNowoczesnaZbroja");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNowoczesnaZbroja);
  if (sum1ZbrojaDlaWierzchowca2===0) {
    parent_object.removeChild(dodajNowoczesnaZbroja);
  }
  /**PAS Z RZEMIENI*/
  var dodajRzemien = document.createElement("table");
  sum3PasZRzemieni1 = sum3PasZRzemieni1 + sum1Lejce2;
  dodajRzemien.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3PasZRzemieni1+'</td><td class="td-img"><div><img src="image/craft/Rzemien.png" alt="Rzemien" title="Rzemien"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajRzemien");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajRzemien);
  if (sum3PasZRzemieni1===0) {
    parent_object.removeChild(dodajRzemien);
  }
  var dodajNity = document.createElement("table");
  sum1PasZRzemieni2 = sum1PasZRzemieni2 + sum1Dylizans6;
  dodajNity.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1PasZRzemieni2+'</td><td class="td-img"><div><img src="image/craft/Nity.png" alt="Nity" title="Nity"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNity");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNity);
  if (sum1PasZRzemieni2===0) {
    parent_object.removeChild(dodajNity);
  }
  var dodajLeciutkaSkora = document.createElement("table");
  sum1PasZRzemieni3 = sum1PasZRzemieni3 + sum4SiodloPony3;
  dodajLeciutkaSkora.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1PasZRzemieni3+'</td><td class="td-img"><div><img src="image/craft/LeciutkaSkora.png" alt="Leciutka skóra" title="Leciutka skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLeciutkaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLeciutkaSkora);
  if (sum1PasZRzemieni3===0) {
    parent_object.removeChild(dodajLeciutkaSkora);
  }
  var dodajMlotKowalski = document.createElement("table");
  sum1PasZRzemieni4 = sum1PasZRzemieni4 + sum1Strzemie2;
  dodajMlotKowalski.innerHTML = 
  '<table><tr><td class="ilosc">'+sum1PasZRzemieni4+'</td><td class="td-img"><div><img src="image/craft/MlotKowalski.png" alt="Młot kowalski" title="Młot kowalski"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajMlotKowalski");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajMlotKowalski);
  if (sum1PasZRzemieni4===0) {
    parent_object.removeChild(dodajMlotKowalski);
  }
  /**PLOCIENNA SKRZYNKA*/
  var dodajSkoraAligatora = document.createElement("table");
  sum10PlociennaSkrzynka1 = sum10PlociennaSkrzynka1 + sum2Remedium1;
  dodajSkoraAligatora.innerHTML = 
  '<table><tr><td class="ilosc">'+sum10PlociennaSkrzynka1+'</td><td class="td-img"><div><img src="image/craft/SkoraAligatora.png" alt="Skóra aligatora" title="Skóra aligatora"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraAligatora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraAligatora);
  if (sum10PlociennaSkrzynka1===0) {
    parent_object.removeChild(dodajSkoraAligatora);
  }
  var dodajSkoraPumy = document.createElement("table");
  sum8PlociennaSkrzynka2 = sum8PlociennaSkrzynka2 + sum3SkorzanyPlaszcz2;
  dodajSkoraPumy.innerHTML = 
  '<table><tr><td class="ilosc">'+sum8PlociennaSkrzynka2+'</td><td class="td-img"><div><img src="image/craft/SkoraPumy.png" alt="Skóra pumy" title="Skóra pumy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraPumy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraPumy);
  if (sum8PlociennaSkrzynka2===0) {
    parent_object.removeChild(dodajSkoraPumy);
  }
  var dodajDera = document.createElement("table");
  sum3PlociennaSkrzynka3 = sum3PlociennaSkrzynka3 + sum3ZbrojaDlaWierzchowca1;
  dodajDera.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3PlociennaSkrzynka3+'</td><td class="td-img"><div><img src="image/craft/Dera.png" alt="Dera" title="Dera"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajDera");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajDera);
  if (sum3PlociennaSkrzynka3===0) {
    parent_object.removeChild(dodajDera);
  }
  var dodajSkorzanePokrycie = document.createElement("table");
  sum3PlociennaSkrzynka4 = sum3PlociennaSkrzynka4 + sum4SkorzanyPlaszcz1;
  dodajSkorzanePokrycie.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3PlociennaSkrzynka4+'</td><td class="td-img"><div><img src="image/craft/SkorzanePokrycie.png" alt="Skórzane pokrycie" title="Skórzane pokrycie"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkorzanePokrycie");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkorzanePokrycie);
  if (sum3PlociennaSkrzynka4===0) {
    parent_object.removeChild(dodajSkorzanePokrycie);
  }
  var dodajWygarbowanaSkora = document.createElement("table");
  sum3PlociennaSkrzynka5 = sum3PlociennaSkrzynka5 + sum2Schowek1;
  dodajWygarbowanaSkora.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3PlociennaSkrzynka5+'</td><td class="td-img"><div><img src="image/craft/WygarbowanaSkora.png" alt="Wygarbowana skóra" title="Wygarbowana skóra"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajWygarbowanaSkora");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajWygarbowanaSkora);
  if (sum3PlociennaSkrzynka5===0) {
    parent_object.removeChild(dodajWygarbowanaSkora);
  }
  /***PIESN DZIKIEGO ZACHODU*/
  var dodajNuty = document.createElement("table");
  sum5PiesnTW1 = sum5PiesnTW1 + sum4DuchMuz1;
  dodajNuty.innerHTML = 
  '<table><tr><td class="ilosc">'+sum5PiesnTW1+'</td><td class="td-img"><div><img src="image/craft/Nuty.png" alt="Nuty" title="Nuty"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNuty");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNuty);
  if (sum5PiesnTW1===0) {
    parent_object.removeChild(dodajNuty);
  }
  var dodajAtrament = document.createElement("table");
  sum3PiesnTW2 = sum3PiesnTW2 + sum1AtramentS2;
  dodajAtrament.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3PiesnTW2+'</td><td class="td-img"><div><img src="image/craft/Atrament.png" alt="Atrament" title="Atrament"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajAtrament");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajAtrament);
  if (sum3PiesnTW2===0) {
    parent_object.removeChild(dodajAtrament);
  }
  var dodajOrlePioro = document.createElement("table");
  sum3PiesnTW3 = sum3PiesnTW3 + sum3LapaczSnow2;
  dodajOrlePioro.innerHTML = 
  '<table><tr><td class="ilosc">'+sum3PiesnTW3+'</td><td class="td-img"><div><img src="image/craft/OrlePioro.png" alt="Orle pióro" title="Orle pióro"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajOrlePioro");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajOrlePioro);
  if (sum3PiesnTW3===0) {
    parent_object.removeChild(dodajOrlePioro);
  }
  var dodajNotatnik = document.createElement("table");
  dodajNotatnik.innerHTML = 
  '<table><tr><td class="ilosc">'+sum2PiesnTW4+'</td><td class="td-img"><div><img src="image/craft/Notatnik.png" alt="Notatnik" title="Notatnik"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajNotatnik");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajNotatnik);
  if (sum2PiesnTW4===0) {
    parent_object.removeChild(dodajNotatnik);
  }
}