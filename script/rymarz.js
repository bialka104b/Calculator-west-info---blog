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
var addSum1LeciutkaSkora1 = document.getElementById("leciutka-skora1_add-sum1");
var addSum1LeciutkaSkora2 = document.getElementById("leciutka-skora2_add-sum1");
var addSum1LeciutkaSkora3 = document.getElementById("leciutka-skora3_add-sum1");
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
var addSum1SiodloPony1 = document.getElementById("siodlo-pony1_add-sum1");
var addSum1SiodloPony2 = document.getElementById("siodlo-pony2_add-sum1");
var addSum1SiodloPony3 = document.getElementById("siodlo-pony3_add-sum1");
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
  var sum1LeciutkaSkora1 = Number(leciutkaSkora*1);
  addSum1LeciutkaSkora1.innerHTML = sum1LeciutkaSkora1+"x";
  var sum1LeciutkaSkora2 = Number(leciutkaSkora*1);
  addSum1LeciutkaSkora2.innerHTML = sum1LeciutkaSkora2+"x";
  var sum1LeciutkaSkora3 = Number(leciutkaSkora*1);
  addSum1LeciutkaSkora3.innerHTML = sum1LeciutkaSkora3+"x";
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
  /**POWOZ WYSCIGOWY*/
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
  var sum1SiodloPony1 = Number(siodloPony*1);
  addSum1SiodloPony1.innerHTML = sum1SiodloPony1+"x";
  var sum1SiodloPony2 = Number(siodloPony*1);
  addSum1SiodloPony2.innerHTML = sum1SiodloPony2+"x";
  var sum1SiodloPony3 = Number(siodloPony*1);
  addSum1SiodloPony3.innerHTML = sum1SiodloPony3+"x";
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
  dodajBawelna.innerHTML = 
  '<table><tr><td class="ilosc" id="torba-podr2_add-sum1">'+sum1TorbaPodr2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/fb/Bawelna.png/33px-Bawelna.png" title="Bawełna"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajBawelna");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajBawelna);
  if (sum1TorbaPodr2===0) {
    parent_object.removeChild(dodajBawelna);
  }
  
  /**WYGARBOWANA SKORA*/
  var dodajSkora = document.createElement("table");
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
  sum1SkorzTorba1 = sum1SkorzTorba1 + sum1Rzemien2;
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
  dodajZboze.innerHTML = 
  '<table><tr><td class="ilosc" id="torba-pasza2_add-sum1">'+sum1TorbaPasza2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/0c/Zboze.png/33px-Zboze.png" title="Zboże" alt="#"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZboze");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZboze);
  if (sum1TorbaPasza2===0) {
    parent_object.removeChild(dodajZboze);
  }
  
  /**PODKUCIE KOPYT*/
  var dodajGwozdzie = document.createElement("table");
  dodajGwozdzie.innerHTML = 
  '<table><tr><td class="ilosc" id="podkucie1_add-sum2">'+sum2Podkucie1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/e1/Gwozdzie.png/33px-Gwozdzie.png" title="Gwoździe"></div></td></tr></table>';
  var parent_object1 = document.getElementById("dodajGwozdzie");
  parent_object1.innerHTML = '';
  parent_object1.appendChild(dodajGwozdzie);
  if (sum2Podkucie1===0) {
    parent_object1.removeChild(dodajGwozdzie);
  }
  var dodajMlotek = document.createElement("table");
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
  dodajSiano.innerHTML = 
  '<table><tr><td class="ilosc" id="pasza2_add-sum3">'+sum3Pasza2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/0/06/Siano.png/33px-Siano.png" title="Siano"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSiano");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSiano);
  if (sum3Pasza2===0) {
    parent_object.removeChild(dodajSiano);
  }
  var dodajSzklankaWody = document.createElement("table");
  dodajSzklankaWody.innerHTML = 
  '<table><tr><td class="ilosc" id="pasza3_add-sum3">'+sum3Pasza3+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/c/cd/SzklankaWody.png/33px-SzklankaWody.png" title="Szklanka wody"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzklankaWody");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzklankaWody);
  if (sum3Pasza3===0) {
    parent_object.removeChild(dodajSzklankaWody);
  }
  var dodajJagody = document.createElement("table");
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
//  sum1Marionetka3;
  dodajZywica.innerHTML = 
  '<table><tr><td class="ilosc" id="skorz-pokrycie1_add-sum1">'+sum1SkorzPokrycie1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/5/5b/ZywicaRzemioslo.png/33px-ZywicaRzemioslo.png" title="Żywica"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajZywica");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajZywica);
  if (sum1SkorzPokrycie1===0) {
    parent_object.removeChild(dodajZywica);
  }
  var dodajSkoraWeza = document.createElement("table");
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
  dodajLasso.innerHTML = 
  '<table><tr><td class="ilosc" id="uzda1_add-sum2">'+sum2Uzda1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/e/ea/Lasso.png/33px-Lasso.png" title="Lasso"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajLasso");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajLasso);
  if (sum2Uzda1===0) {
    parent_object.removeChild(dodajLasso);
  }
  var dodajSzpulkaDrutu = document.createElement("table");
  dodajSzpulkaDrutu.innerHTML = 
  '<table><tr><td class="ilosc" id="uzda2_add-sum1">'+sum1Uzda2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/2/29/SzpulkaDrutu.png/33px-SzpulkaDrutu.png" title="Szpulka drutu"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSzpulkaDrutu");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSzpulkaDrutu);
  if (sum1Uzda2===0) {
    parent_object.removeChild(dodajSzpulkaDrutu);
  }
  var dodajDeskaDoKrojenia = document.createElement("table");
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
  dodajSkoraPumy.innerHTML = 
  '<table><tr><td class="ilosc" id="spiwor2_add-sum2">'+sum2Spiwor2+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/f/ff/SkoraPumy.png/33px-SkoraPumy.png" title="Skóra pumy"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraPumy");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraPumy);
  if (sum2Spiwor2===0) {
    parent_object.removeChild(dodajSkoraPumy);
  }
  var dodajSukno = document.createElement("table");
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
  sum1Dera1 = sum1Dera1 + sum1Manierka1;
  dodajSkoraZBizona.innerHTML = 
  '<table><tr><td class="ilosc" id="dera1_add-sum1">'+sum1Dera1+'</td><td class="td-img"><div><img src="https://wiki.the-west.pl/images/thumb/8/8e/SkoraZBizona.png/33px-SkoraZBizona.png" title="Skóra z bizona"></div></td></tr></table>';
  var parent_object = document.getElementById("dodajSkoraZBizona");
  parent_object.innerHTML = '';
  parent_object.appendChild(dodajSkoraZBizona);
  if (sum1Dera1===0) {
    parent_object.removeChild(dodajSkoraZBizona);
  }
  var dodajSkoraZBobra = document.createElement("table");
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

}