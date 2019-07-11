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
}