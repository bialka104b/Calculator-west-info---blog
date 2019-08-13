//import styles from "../css.westcss";
import React from 'react';

img = [
  "image/craft/PureePomidorowe.png", "image/craft/SosPomidorowy.png", "image/craft/ZapieczoneFasolki.png", "image/craft/WegielDrzewny.png",
  "image/craft/MakaKukurydziana.png", "image/craft/DzbanWody.png", "image/craft/KawalekTortu.png", "image/craft/FasolaZBekonem.png",
  "image/craft/Dzem.png", "image/craft/NieoszlifowanyPiryt.png", "image/craft/DyskZPirytu.png", "image/craft/Amulet.png",
  "image/craft/Krzesiwo.png", "image/craft/Siarka.png", "image/craft/Zywica.png", "image/craft/PapierosZFiltrem.png",
  "image/craft/Wycior.png", "image/craft/LekNaZoladek.png", "image/craft/WygarbowanaSkora.png", "image/craft/SkorzanaTorba.png",
  "image/craft/TorbaZPasza.png", "image/craft/Manierka.png", "image/craft/Rzemien.png", "image/craft/DeskaDoKrojenia.png",
  "image/craft/TorbaPodrozna.png", "image/craft/PodkucieKopyt.png", "image/craft/PaszaTresciwa.png", "image/craft/Grafit.png",
  "image/craft/SproszkowanyGrafit.png", "image/craft/SmarGrafitowy.png", "image/craft/Patelnia.png", "image/craft/StopioneZelazo.png",
  "image/craft/Noz.png", "image/craft/ZaostrzanieBroni.png", "image/craft/Bagnet.png", "image/craft/Odwaznik.png",
  "image/craft/Zacier.png", "image/craft/Ciasto.png", "image/craft/MarynowanyStek.png", "image/craft/Trunek.png",
  "image/craft/Tort.png", "image/craft/Bulion.png", "image/craft/KwasSiarkowy.png", "image/craft/Atrament.png",
  "image/craft/Nafta.png", "image/craft/Bozek.png", "image/craft/Destylat.png", "image/craft/Bimber.png",
  "image/craft/ObdarteSiodlo.png", "image/craft/Wypelniacz.png", "image/craft/SkorzanePokrycie.png", "image/craft/Znakownik.png",
  "image/craft/NiewyregulowanyKompas.png", "image/craft/Strzemie.png", "image/craft/Stal.png", "image/craft/StopionyOlow.png",
  "image/craft/Kowadlo.png", "image/craft/OlowianaFigurka.png", "image/craft/NiezastygnietaKulka.png", "image/craft/Nity.png",
  "image/craft/PieczonyIndyk.png", "image/craft/ZupaRybna.png", "image/craft/Pierog.png", "image/craft/SiekaneMieso.png",
  "image/craft/Herbata.png", "image/craft/Prymka.png", "image/craft/Nalewka.png", "image/craft/Bateria.png",
  "image/craft/Ostrogi.png", "image/craft/Uzda.png", "image/craft/Spiwor.png", "image/craft/Dera.png",
  "image/craft/Kablak.png", "image/craft/ChustaDoChlodzenia.png", "image/craft/LancuchDoBroni.png", "image/craft/Rekojesc.png",
  "image/craft/Dorsz.png", "image/craft/Kadzidlo.png", "image/craft/Sos.png", "image/craft/CiasteczkoKukurydziane.png",
  "image/craft/RybaZawinietaWGazete.png", "image/craft/SokZKaktusa.png", "image/craft/ObiadDzentelmena.png", "image/craft/Lug.png",
  "image/craft/LikierZiolowy.png", "image/craft/Papier.png", "image/craft/AtramentSympatyczny.png", "image/craft/Cyrkiel.png",
  "image/craft/ProchStrzelniczy.png", "image/craft/WloknoLnu.png", "image/craft/WodaRozana.png", "image/craft/Ozdoba.png",
  "image/craft/CzescPowozu.png", "image/craft/KoloPowozu.png", "image/craft/PowozWyscigowy.png", "image/craft/EliksirCelnosci.png",
  "image/craft/NaprawioneSiodlo.png", "image/craft/Notatnik.png", "image/craft/LekSiodla.png", "image/craft/Ksztaltownikrewolweru.png",
  "image/craft/StaloweOstrze.png", "image/craft/Ozdoba.png", "image/craft/Westerner.png", "image/craft/NierozlupanaGeoda.png",
  "image/craft/SzwajcarskiScyzoryk.png", "image/craft/Szklo.png", "image/craft/KamienPolerski.png", "image/craft/SuszoneMieso.png",
  "image/craft/GumaDoZucia.png", "image/craft/Grog.png", "image/craft/Gulasz.png", "image/craft/Zeberka.png",
  "image/craft/Miod.png", "image/craft/Panaceum.png", "image/craft/RemediumSily.png", "image/craft/OdzywkaDoWlosow.png",
  "image/craft/ZnakomityTrunek.png", "image/craft/UzdrawiajacaMarionetka.png", "image/craft/WykwintnyImpregnat.png", "image/craft/Arras.png",
  "image/craft/WytrzymaleLejce.png", "image/craft/WytrzymalaKabura.png", "image/craft/WedrownyPowoz.png", "image/craft/NierdzewneSruby.png",
  "image/craft/SiodloWellsFargo.png", "image/craft/Piersiowka.png", "image/craft/NowoczesnaZbroja.png", "image/craft/PrasaDoMiodu.png",
  "image/craft/FasolaWPuszce.png", "image/craft/NajostrzejszeChili.png", "image/craft/MiodPitny.png", "image/craft/BlyszczacaMikstura.png",
  "image/craft/LegendarneAntidotum.png", "image/craft/DuchowaMuzyka.png", "image/craft/LeciutkaSkora.png", "image/craft/SiodloPonyExpress.png",
  "image/craft/SchowekNaAmunicje.png", "image/craft/NarzedziaZegarmistrzowskie.png", "image/craft/ZlotaPozytywka.png", "image/craft/Latarnia.png",
  "image/menuicons.png"
];
export default img;
const dollar = [ 
      3,   6,   7,   8,   10,  11,  12,  14,  15,  16,
      17,  20,  21,  22,  23,  24,  25,  26,  27,  28,
      29,  30,  31,  32,  34,  36,  37,  39,  41,  42,
      45,  46,  47,  48,  50,  52,  53,  54,  55,  56,
      57,  60,  61,  62,  63,  64,  65,  66,  67,  68,
      69,  71,  72,  74,  75,  77,  78,  79,  82,  83,
      84,  85,  87,  89,  90,  91,  92,  94,  95,  97,
      100, 103, 105, 107, 108, 109, 110, 112, 115, 117,
      120, 122, 123, 124, 126, 128, 130, 131, 132, 133,
      134, 135, 139, 140, 141, 142, 144, 150, 152, 153,
      154, 156, 164, 174, 179, 180, 185, 188, 190, 191,
      194, 200, 206, 207, 208, 210, 215, 218, 219, 220,
      234, 235, 240, 244, 246, 250, 252, 256, 260, 262,
      263, 264, 265, 275, 278, 281, 282, 288, 295, 300,
      304, 306, 309, 312, 315, 335, 360, 373, 400, 416,
      436, 470, 500, 525, 527, 530, 551, 590, 600, 618,
      630, 671, 800
];
class App extends React.Component {
// state = {
  //   text: "Efekt: półprodukt"
  //   name: "nagłówek",
  //   number: 0
  //};ten sposób wygenerował by nam elementy po kliknięciu w button
  // handleClick = () => {
  //   const letter = "opis";
  //   this.setState({
  //     text: this.state.text + letter,
  //     number: this.state.number + 1
  //   });
  // };ten sposób wygenerował by nam elementy po kliknięciu w button
  render() {
    return (
      <React.Fragment>
        <div className="popup">
          <div><img src={this.props.url} /></div>
          <div className="opis">
            <h5>{this.props.name}</h5>
            <p>{this.props.text}</p>
            <p>
              <span><img src="image/Zakup.png" title="cena maksymalna"/>{this.props.buy}$</span>
              <span><img src="image/Sprzedaz.png" title="cena minimalna"/>{this.props.sell}$</span>
            </p>
          </div>
        </div>
        {/* <button onClick={this.handleClick}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
        <div>
          <img src={img[this.state.number]} />
          <h5>{this.state.name}</h5>
          <p>{this.state.tekst}</p>
        </div> ten sposób wygenerował by nam elementy po kliknięciu w button
        {img.map(link => (
          <div>
            <img src={link} />
          </div> 
        ))} ten kod wygenerował by wszystkie obrazy owiniete div w jednym elemencie np root */}
      </React.Fragment>
    );
  }
}

const myPopup = document.querySelectorAll(".my-popup");

ReactDOM.render(<App url={img[0]} buy={dollar[1]}  sell={dollar[0]}  text={"Efekt: półprodukt"} name={"Puree Pomidorowe"} />, myPopup[0]);
ReactDOM.render(<App url={img[1]} buy={dollar[8]}  sell={dollar[2]}  text={"Efekt: półprodukt"} name={"Sos Pomidorowy"} />, myPopup[1]);
ReactDOM.render(<App url={img[2]} buy={dollar[34]} sell={dollar[16]} text={"Efekt: +10% energii"} name={"Zapieczone Fasolki"} />, myPopup[2]);
ReactDOM.render(<App url={img[3]} buy={dollar[22]} sell={dollar[8]}  text={"Efekt: półprodukt"} name={"Węgiel Drzewny"} />, myPopup[3]);
ReactDOM.render(<App url={img[4]} buy={dollar[11]} sell={dollar[4]}  text={"Efekt: półprodukt"} name={"Mąka Kukurydziana"} />, myPopup[4]);
ReactDOM.render(<App url={img[5]} buy={dollar[21]} sell={dollar[8]}  text={"Efekt: półprodukt"} name={"Dzban Wody"} />, myPopup[5]);
ReactDOM.render(<App url={img[6]} buy={dollar[10]} sell={dollar[3]}  text={"Efekt: +15 pkt pracy"} name={"Kawałek Tortu"} />, myPopup[6]);
ReactDOM.render(<App url={img[7]} buy={dollar[89]} sell={dollar[47]} text={"Efekt: +15 siła uderzenia, +15 unik"} name={"Fasola Z Bekonem"} />, myPopup[7]);
ReactDOM.render(<App url={img[8]} buy={dollar[86]} sell={dollar[46]} text={"Efekt: +15 strzelanie, +15 celowanie"} name={"Dżem"} />, myPopup[8]);
ReactDOM.render(<App url={img[9]} buy={dollar[9]}  sell={dollar[3]}  text={"Efekt: półprodukt"} name={"Nieoszlifowany Piryt"} />, myPopup[9]);

ReactDOM.render(<App url={img[10]} buy={dollar[11]}  sell={dollar[4]}  text={"Efekt: półprodukt"} name={"Dysk Z Pirytu"} />, myPopup[10]);
ReactDOM.render(<App url={img[11]} buy={dollar[34]}  sell={dollar[16]} text={"Efekt: +10 Punkty życia,+10 Unik"} name={"Amulet"} />, myPopup[11]);
ReactDOM.render(<App url={img[12]} buy={dollar[23]}  sell={dollar[9]}  text={"Efekt: półprodukt"} name={"Krzesiwo"} />, myPopup[12]);
ReactDOM.render(<App url={img[13]} buy={dollar[32]}  sell={dollar[14]} text={"Efekt: półprodukt"} name={"Siarka"} />, myPopup[13]);
ReactDOM.render(<App url={img[14]} buy={dollar[45]}  sell={dollar[23]} text={"Efekt: półprodukt"} name={"Żywica"} />, myPopup[14]);
ReactDOM.render(<App url={img[15]} buy={dollar[20]}  sell={dollar[7]}  text={"Efekt: Motywacja do pracy i pojedynków +7%"} name={"Papieros Z Filtrem"} />, myPopup[15]);
ReactDOM.render(<App url={img[16]} buy={dollar[108]} sell={dollar[68]} text={"Efekt: Motywacja do pojedynków +10%"} name={"Wycior"} />, myPopup[16]);
ReactDOM.render(<App url={img[17]} buy={dollar[33]}  sell={dollar[15]} text={"Efekt: +10% Punktów życia"} name={"Lek Na Żołądek"} />, myPopup[17]);
ReactDOM.render(<App url={img[18]} buy={dollar[9]}   sell={dollar[3]}  text={"Efekt: półprodukt"} name={"Wygarbowana Skóra"} />, myPopup[18]);
ReactDOM.render(<App url={img[19]} buy={dollar[16]}  sell={dollar[6]}  text={"Efekt: półprodukt"} name={"Skórzana Torba"} />, myPopup[19]);

ReactDOM.render(<App url={img[20]} buy={dollar[34]} sell={dollar[16]} text={"Efekt: Prędkość +15%, Motywacja do pojedynków +10%"} name={"Torba Z Paszą"} />, myPopup[20]);
ReactDOM.render(<App url={img[21]} buy={dollar[86]} sell={dollar[46]} text={"Efekt: półprodukt"} name={"Manierka"} />, myPopup[21]);
ReactDOM.render(<App url={img[22]} buy={dollar[41]} sell={dollar[21]} text={"Efekt: półprodukt"} name={"Rzemień"} />, myPopup[22]);
ReactDOM.render(<App url={img[23]} buy={dollar[39]} sell={dollar[19]} text={"Efekt: półprodukt"} name={"Deska Do Krojenia"} />, myPopup[23]);
ReactDOM.render(<App url={img[24]} buy={dollar[13]} sell={dollar[5]}  text={"Efekt: Skraca czas aktualnej podróży o 10%, Bonus energii 5%"} name={"Torba Podróżna"} />, myPopup[24]);
ReactDOM.render(<App url={img[25]} buy={dollar[49]} sell={dollar[24]} text={"Efekt: Skrócenie czasu podróży o 15%"} name={"Podkucie Kopyt"} />, myPopup[25]);
ReactDOM.render(<App url={img[26]} buy={dollar[23]} sell={dollar[9]}  text={"Efekt: Prędkość +25%"} name={"Pasza Treściwa"} />, myPopup[26]);
ReactDOM.render(<App url={img[27]} buy={dollar[11]} sell={dollar[4]}  text={"Efekt: półprodukt"} name={"Grafit"} />, myPopup[27]);
ReactDOM.render(<App url={img[28]} buy={dollar[16]} sell={dollar[6]}  text={"Efekt: półprodukt"} name={"Sproszkowany Grafit"} />, myPopup[28]);
ReactDOM.render(<App url={img[29]} buy={dollar[34]} sell={dollar[16]} text={"Efekt: +20-40 Obrażenia w bitwach o fort"} name={"Smar Grafitowy"} />, myPopup[29]);

ReactDOM.render(<App url={img[30]} buy={dollar[53]}  sell={dollar[26]} text={"Efekt: półprodukt"} name={"Patelnia"} />, myPopup[30]);
ReactDOM.render(<App url={img[31]} buy={dollar[52]}  sell={dollar[25]} text={"Efekt: półprodukt"} name={"Stopione Żelazo"} />, myPopup[31]);
ReactDOM.render(<App url={img[32]} buy={dollar[80]}  sell={dollar[41]} text={"Efekt: półprodukt"} name={"Nóż"} />, myPopup[32]);
ReactDOM.render(<App url={img[33]} buy={dollar[9]}   sell={dollar[3]}  text={"Efekt: +10-20 Obrażenia w pojedynkach"} name={"Zaostrzenie Broni"} />, myPopup[33]);
ReactDOM.render(<App url={img[34]} buy={dollar[100]} sell={dollar[55]} text={"Efekt: +25-75 Obrażenia w bitwach o fort"} name={"Bagnet"} />, myPopup[34]);
ReactDOM.render(<App url={img[35]} buy={dollar[74]}  sell={dollar[37]} text={"Efekt: +15-25 Obrażenia w pojedynkach"} name={"Odważnik"} />, myPopup[35]);
ReactDOM.render(<App url={img[36]} buy={dollar[64]}  sell={dollar[30]} text={"Efekt: półprodukt"} name={"Zacier"} />, myPopup[36]);
ReactDOM.render(<App url={img[37]} buy={dollar[28]}  sell={dollar[11]} text={"Efekt: półprodukt"} name={"Ciasto"} />, myPopup[37]);
ReactDOM.render(<App url={img[38]} buy={dollar[78]}  sell={dollar[40]} text={"Efekt: półprodukt"} name={"Marynowany Stek"} />, myPopup[38]);
// ReactDOM.render(<AppAchivement url={img[39]} buy={dollar[131]} sell={dollar[88]} text={"Efekt: karta kolekcjonera"} achivement={string[0]} name={"Trunek"} />, myPopup[39]);

// ReactDOM.render(<App url={img[40]} buy={dollar[59]}  sell={dollar[28]}  text={"Efekt: półprodukt"} name={"Tort"} />, myPopup[40]);
ReactDOM.render(<App url={img[41]} buy={dollar[29]}  sell={dollar[12]}  text={"Efekt: półprodukt"} name={"Bulion Rybny"} />, myPopup[41]);
ReactDOM.render(<App url={img[42]} buy={dollar[57]}  sell={dollar[27]}  text={"Efekt: półprodukt"} name={"Kwas Siarkowy"} />, myPopup[42]);
ReactDOM.render(<App url={img[43]} buy={dollar[102]} sell={dollar[58]}  text={"Efekt: półprodukt"} name={"Atrament"} />, myPopup[43]);
ReactDOM.render(<App url={img[44]} buy={dollar[116]} sell={dollar[73]}  text={"Efekt: półprodukt"} name={"Nafta"} />, myPopup[44]);
// ReactDOM.render(<App url={img[45]} buy={dollar[137]} sell={dollar[96]}  text={"Efekt: półprodukt"} name={"Bożek"} />, myPopup[45]);
// ReactDOM.render(<App url={img[46]} buy={dollar[151]} sell={dollar[121]} text={"Efekt: półprodukt"} name={"Destylat"} />, myPopup[46]);
ReactDOM.render(<App url={img[47]} buy={dollar[91]}  sell={dollar[48]}  text={"Efekt: półprodukt"} name={"Bimber"} />, myPopup[47]);
ReactDOM.render(<App url={img[48]} buy={dollar[127]} sell={dollar[85]}  text={"Efekt: półprodukt"} name={"Obdarte Siodło"} />, myPopup[48]);
ReactDOM.render(<App url={img[49]} buy={dollar[35]}  sell={dollar[17]}  text={"Efekt: półprodukt"} name={"Wypełniacz"} />, myPopup[49]);

ReactDOM.render(<App url={img[50]} buy={dollar[73]}  sell={dollar[36]} text={"Efekt: półprodukt"} name={"Skórzane Pokrycie"} />, myPopup[50]);
// ReactDOM.render(<App url={img[51]} buy={dollar[119]} sell={dollar[76]} text={"Efekt: półprodukt"} name={"Znakownik"} />, myPopup[51]);
// ReactDOM.render(<App url={img[52]} buy={dollar[140]} sell={dollar[98]} text={"Efekt: półprodukt"} name={"Niewyregulowany Kompas"} />, myPopup[52]);
ReactDOM.render(<App url={img[53]} buy={dollar[119]} sell={dollar[76]} text={"Efekt: półprodukt"} name={"Strzemię"} />, myPopup[53]);
ReactDOM.render(<App url={img[54]} buy={dollar[95]}  sell={dollar[51]} text={"Efekt: półprodukt"} name={"Stal"} />, myPopup[54]);
ReactDOM.render(<App url={img[55]} buy={dollar[90]}  sell={dollar[48]} text={"Efekt: półprodukt"} name={"Stopiony Ołów"} />, myPopup[55]);
ReactDOM.render(<App url={img[56]} buy={dollar[124]} sell={dollar[82]} text={"Efekt: półprodukt"} name={"Kowadło"} />, myPopup[56]);
// ReactDOM.render(<App url={img[57]} buy={dollar[118]} sell={dollar[75]} text={"Efekt: półprodukt"} name={"Ołowiana Figurka"} />, myPopup[57]);
// ReactDOM.render(<App url={img[58]} buy={dollar[102]} sell={dollar[58]} text={"Efekt: półprodukt"} name={"Niezastygnieta Kulka"} />, myPopup[58]);
ReactDOM.render(<App url={img[59]} buy={dollar[31]}  sell={dollar[14]} text={"Efekt: półprodukt"} name={"Nity"} />, myPopup[59]);

ReactDOM.render(<App url={img[60]} buy={dollar[65]}  sell={dollar[30]} text={"Efekt: +2 Siła, +15 Zaskoczenie"} name={"Pieczony Indyk"} />, myPopup[60]);
ReactDOM.render(<App url={img[61]} buy={dollar[86]}  sell={dollar[46]} text={"Efekt: +2 Sprawność, +15 Taktyka"} name={"Zupa Rybna"} />, myPopup[61]);
ReactDOM.render(<App url={img[62]} buy={dollar[127]} sell={dollar[85]} text={"Efekt: +2 Zręczność, +15 Dowodzenie"} name={"Pieróg Z Warzywami"} />, myPopup[62]);
ReactDOM.render(<App url={img[63]} buy={dollar[123]} sell={dollar[81]} text={"Efekt: półprodukt"} name={"Siekane Mieso"} />, myPopup[63]);
ReactDOM.render(<App url={img[64]} buy={dollar[52]}  sell={dollar[25]} text={"Efekt: +20% energii"} name={"Herbata"} />, myPopup[64]);
ReactDOM.render(<App url={img[65]} buy={dollar[104]} sell={dollar[63]} text={"Efekt: Motywacja do pracy +25%"} name={"Prymka"} />, myPopup[65]);
ReactDOM.render(<App url={img[66]} buy={dollar[83]}  sell={dollar[43]} text={"Efekt: 15% Punktów życia, +10% energii"} name={"Naleweka"} />, myPopup[66]);
ReactDOM.render(<App url={img[67]} buy={dollar[105]} sell={dollar[64]} text={"Efekt: półprodukt"} name={"Bateria"} />, myPopup[67]);
ReactDOM.render(<App url={img[68]} buy={dollar[56]}  sell={dollar[27]} text={"Efekt: Skrócenie czasu o podróży 20%"} name={"Ostrogi"} />, myPopup[68]);
ReactDOM.render(<App url={img[69]} buy={dollar[100]} sell={dollar[55]} text={"Efekt: Prędkość +50%"} name={"Uzda"} />, myPopup[69]);

ReactDOM.render(<App url={img[70]} buy={dollar[69]}  sell={dollar[33]} text={"Efekt: Motywacja do pracy +15%, +15% energii"} name={"Śpiwór"} />, myPopup[70]);
ReactDOM.render(<App url={img[71]} buy={dollar[141]} sell={dollar[99]} text={"Efekt: półprodukt"} name={"Dera"} />, myPopup[71]);
ReactDOM.render(<App url={img[72]} buy={dollar[96]}  sell={dollar[52]} text={"Efekt: +20-30 Obrażeń w pojedynku"} name={"Kabłąk"} />, myPopup[72]);
ReactDOM.render(<App url={img[73]} buy={dollar[43]}  sell={dollar[22]} text={"Efekt: +3 Multiplayer atak"} name={"Chusta Do Chłodzenia"} />, myPopup[73]);
ReactDOM.render(<App url={img[74]} buy={dollar[56]}  sell={dollar[27]} text={"Efekt: +3 do obrony Multiplayer"} name={"Łańcuch Do Broni"} />, myPopup[74]);
ReactDOM.render(<App url={img[75]} buy={dollar[112]} sell={dollar[71]} text={"Efekt: półprodukt"} name={"Rękojeść"} />, myPopup[75]);
ReactDOM.render(<App url={img[76]} buy={dollar[53]}  sell={dollar[26]} text={"Efekt: półprodukt"} name={"Dorsz"} />, myPopup[76]);
ReactDOM.render(<App url={img[77]} buy={dollar[37]}  sell={dollar[18]} text={"Efekt: półprodukt"} name={"Kadzidło"} />, myPopup[77]);
ReactDOM.render(<App url={img[78]} buy={dollar[87]}  sell={dollar[46]} text={"Efekt: półprodukt"} name={"Sos"} />, myPopup[78]);
ReactDOM.render(<App url={img[79]} buy={dollar[76]}  sell={dollar[38]} text={"Efekt: +2 Sprawność, +15 Wytrzymałość, +15 Dowodzenie, +25 Pkt-pracy,"} name={"Ciasteczka Kukurydziane"} />, myPopup[79]);

// ReactDOM.render(<App url={img[80]} buy={dollar[60]}  sell={dollar[29]} text={"Efekt: półprodukt"} name={"Ryba Zawinięta W Gazetę"} />, myPopup[80]);
ReactDOM.render(<App url={img[81]} buy={dollar[61]}  sell={dollar[29]} text={"Efekt: półprodukt"} name={"Sok Z Kaktusa"} />, myPopup[81]);
ReactDOM.render(<App url={img[82]} buy={dollar[107]} sell={dollar[67]} text={"Efekt: +2 Siła, +2 Zręczność, +2 Sprawność, +2 Charyzma,"} name={"Obiad Dżentelmena"} />, myPopup[82]);
ReactDOM.render(<App url={img[83]} buy={dollar[92]}  sell={dollar[50]} text={"Efekt: półprodukt"} name={"Ług"} />, myPopup[83]);
ReactDOM.render(<App url={img[84]} buy={dollar[81]}  sell={dollar[42]} text={"Efekt: półprodukt"} name={"Likier Ziołowy"} />, myPopup[84]);
ReactDOM.render(<App url={img[85]} buy={dollar[84]}  sell={dollar[44]} text={"Efekt: półprodukt"} name={"Papier"} />, myPopup[85]);
ReactDOM.render(<App url={img[86]} buy={dollar[76]}  sell={dollar[38]} text={"Efekt: +2 Siła, +15 Zakładanie pułapek, +15 Chowanie się, +15% energii, +15% Punktów życia"} name={"Atrament Sympatyczny"} />, myPopup[86]);
// ReactDOM.render(<App url={img[87]} buy={dollar[59]}  sell={dollar[28]} text={"Efekt: półprodukt"} name={"Cyrkiel"} />, myPopup[87]);
ReactDOM.render(<App url={img[88]} buy={dollar[97]}  sell={dollar[54]} text={"Efekt: półprodukt"} name={"Proch Strzelniczy"} />, myPopup[88]);
ReactDOM.render(<App url={img[89]} buy={dollar[128]} sell={dollar[86]} text={"Efekt: półprodukt"} name={"Włókno Lnu"} />, myPopup[89]);

ReactDOM.render(<App url={img[90]} buy={dollar[59]}  sell={dollar[28]}  text={"Efekt: +15% energii +25% Punktów życia"} name={"Woda Różana"} />, myPopup[90]);
ReactDOM.render(<App url={img[91]} buy={dollar[156]} sell={dollar[133]} text={"Efekt: półprodukt"} name={"Ozdoba"} />, myPopup[91]);
ReactDOM.render(<App url={img[92]} buy={dollar[90]}  sell={dollar[48]}  text={"Efekt: półprodukt"} name={"Część Powozu"} />, myPopup[92]);
ReactDOM.render(<App url={img[93]} buy={dollar[119]} sell={dollar[76]}  text={"Efekt: półprodukt"} name={"Koło Powozu"} />, myPopup[93]);
ReactDOM.render(<App url={img[94]} buy={dollar[76]}  sell={dollar[38]}  text={"Efekt: półprodukt"} name={"Powóz Wyścigowy"} />, myPopup[94]);
ReactDOM.render(<App url={img[95]} buy={dollar[158]} sell={dollar[139]} text={"Efekt: półprodukt"} name={"Eliksir Celności"} />, myPopup[95]);
ReactDOM.render(<App url={img[96]} buy={dollar[97]}  sell={dollar[54]}  text={"Efekt: półprodukt"} name={"Naprawione Siodło"} />, myPopup[96]);
ReactDOM.render(<App url={img[97]} buy={dollar[97]}  sell={dollar[54]}  text={"Efekt: półprodukt"} name={"Notatnik"} />, myPopup[97]);
ReactDOM.render(<App url={img[98]} buy={dollar[110]} sell={dollar[69]}  text={"Efekt: półprodukt"} name={"Łęk Siodła"} />, myPopup[98]);
ReactDOM.render(<App url={img[99]} buy={dollar[103]} sell={dollar[62]}  text={"Efekt: półprodukt"} name={"Kształtownik Rewolweru"} />, myPopup[99]);

ReactDOM.render(<App url={img[100]} buy={dollar[120]} sell={dollar[79]} text={"Efekt: półprodukt"} name={"Stalowe Ostrze"} />, myPopup[100]);
ReactDOM.render(<App url={img[101]} buy={dollar[70]}  sell={dollar[34]} text={"Efekt: półprodukt"} name={"Ozdoba"} />, myPopup[101]);
ReactDOM.render(<App url={img[102]} buy={dollar[76]}  sell={dollar[38]} text={"Efekt: półprodukt"} name={"Westerner"} />, myPopup[102]);
ReactDOM.render(<App url={img[103]} buy={dollar[77]}  sell={dollar[39]} text={"Efekt: półprodukt"} name={"Nierozłupana Geoda"} />, myPopup[103]);
ReactDOM.render(<App url={img[104]} buy={dollar[97]}  sell={dollar[54]} text={"Efekt: półprodukt"} name={"Szwajcarski Scyzoryk"} />, myPopup[104]);
ReactDOM.render(<App url={img[105]} buy={dollar[122]} sell={dollar[80]} text={"Efekt: półprodukt"} name={"Szkło"} />, myPopup[105]);
ReactDOM.render(<App url={img[106]} buy={dollar[126]} sell={dollar[84]} text={"Efekt: półprodukt"} name={"Kamień Polerski"} />, myPopup[106]);
ReactDOM.render(<App url={img[107]} buy={dollar[59]}  sell={dollar[28]} text={"Efekt: półprodukt"} name={"Suszone Mięso"} />, myPopup[107]);
ReactDOM.render(<App url={img[108]} buy={dollar[97]}  sell={dollar[54]} text={"Efekt: półprodukt"} name={"Guma Do Żucia"} />, myPopup[108]);
ReactDOM.render(<App url={img[109]} buy={dollar[70]}  sell={dollar[34]} text={"Efekt: półprodukt"} name={"Grog"} />, myPopup[109]);

ReactDOM.render(<App url={img[110]} buy={dollar[134]} sell={dollar[92]}  text={"Efekt: półprodukt"} name={"Gulasz"} />, myPopup[110]);
ReactDOM.render(<App url={img[111]} buy={dollar[149]} sell={dollar[114]} text={"Efekt: półprodukt"} name={"Żeberka"} />, myPopup[111]);
ReactDOM.render(<App url={img[112]} buy={dollar[91]}  sell={dollar[48]}  text={"Efekt: półprodukt"} name={"Miód"} />, myPopup[112]);
ReactDOM.render(<App url={img[113]} buy={dollar[109]} sell={dollar[68]}  text={"Efekt: półprodukt"} name={"Panaceum"} />, myPopup[113]);
ReactDOM.render(<App url={img[114]} buy={dollar[111]} sell={dollar[70]}  text={"Efekt: półprodukt"} name={"Remedium Siły"} />, myPopup[114]);
ReactDOM.render(<App url={img[115]} buy={dollar[160]} sell={dollar[141]} text={"Efekt: półprodukt"} name={"Odżywka Do Włosów"} />, myPopup[115]);
ReactDOM.render(<App url={img[116]} buy={dollar[135]} sell={dollar[93]}  text={"Efekt: półprodukt"} name={"Znakomity Trunek"} />, myPopup[116]);
ReactDOM.render(<App url={img[117]} buy={dollar[115]} sell={dollar[72]}  text={"Efekt: półprodukt"} name={"Uzdrawiąjaca Marionetka"} />, myPopup[117]);
ReactDOM.render(<App url={img[118]} buy={dollar[106]} sell={dollar[66]}  text={"Efekt: półprodukt"} name={"Wykwintny Impregnat"} />, myPopup[118]);
ReactDOM.render(<App url={img[119]} buy={dollar[111]} sell={dollar[70]}  text={"Efekt: półprodukt"} name={"Arras"} />, myPopup[119]);

ReactDOM.render(<App url={img[120]} buy={dollar[161]} sell={dollar[145]} text={"Efekt: półprodukt"} name={"Wytrzymałe Lejce"} />, myPopup[120]);
ReactDOM.render(<App url={img[121]} buy={dollar[113]} sell={dollar[71]}  text={"Efekt: półprodukt"} name={"Wytrzymała Kabura"} />, myPopup[121]);
ReactDOM.render(<App url={img[122]} buy={dollar[143]} sell={dollar[101]} text={"Efekt: półprodukt"} name={"Wędrowny Powóz"} />, myPopup[122]);
ReactDOM.render(<App url={img[123]} buy={dollar[136]} sell={dollar[94]}  text={"Efekt: półprodukt"} name={"Nierdzewne Śruby"} />, myPopup[123]);
ReactDOM.render(<App url={img[124]} buy={dollar[111]} sell={dollar[70]}  text={"Efekt: półprodukt"} name={"Siodło Wells Fargo"} />, myPopup[124]);
ReactDOM.render(<App url={img[125]} buy={dollar[159]} sell={dollar[142]} text={"Efekt: półprodukt"} name={"Piersiówka"} />, myPopup[125]);
ReactDOM.render(<App url={img[126]} buy={dollar[150]} sell={dollar[117]} text={"Efekt: półprodukt"} name={"Nowoczesna Zbroja"} />, myPopup[126]);
ReactDOM.render(<App url={img[127]} buy={dollar[146]} sell={dollar[105]} text={"Efekt: półprodukt"} name={"Prasa Do Miodu"} />, myPopup[127]);
ReactDOM.render(<App url={img[128]} buy={dollar[152]} sell={dollar[125]} text={"Efekt: półprodukt"} name={"Fasola W Puszcce"} />, myPopup[128]);
ReactDOM.render(<App url={img[129]} buy={dollar[162]} sell={dollar[148]} text={"Efekt: półprodukt"} name={"Najostrzejsze Chili na Zachodzie"} />, myPopup[129]);

ReactDOM.render(<App url={img[130]} buy={dollar[153]} sell={dollar[129]} text={"Efekt: półprodukt"} name={"Miód Pitny"} />, myPopup[130]);
ReactDOM.render(<App url={img[131]} buy={dollar[152]} sell={dollar[125]} text={"Efekt: półprodukt"} name={"Błyszcząca Mikstura"} />, myPopup[131]);
ReactDOM.render(<App url={img[132]} buy={dollar[162]} sell={dollar[148]} text={"Efekt: półprodukt"} name={"Legendarne Antidotum"} />, myPopup[132]);
ReactDOM.render(<App url={img[133]} buy={dollar[155]} sell={dollar[132]} text={"Efekt: półprodukt"} name={"Duchowa Muzyka"} />, myPopup[133]);
ReactDOM.render(<App url={img[134]} buy={dollar[152]} sell={dollar[125]} text={"Efekt: półprodukt"} name={"Leciutka Skóra"} />, myPopup[134]);
ReactDOM.render(<App url={img[135]} buy={dollar[162]} sell={dollar[148]} text={"Efekt: półprodukt"} name={"Siodło Pony-Express"} />, myPopup[135]);
ReactDOM.render(<App url={img[136]} buy={dollar[157]} sell={dollar[138]} text={"Efekt: półprodukt"} name={"Schowek Na Amunicję"} />, myPopup[136]);
ReactDOM.render(<App url={img[137]} buy={dollar[152]} sell={dollar[125]} text={"Efekt: półprodukt"} name={"Narzędzia Zegarmistrzowskie"} />, myPopup[137]);
ReactDOM.render(<App url={img[138]} buy={dollar[162]} sell={dollar[148]} text={"Efekt: półprodukt"} name={"Złota Pozytywka"} />, myPopup[138]);
ReactDOM.render(<App url={img[139]} buy={dollar[154]} sell={dollar[130]} text={"Efekt: półprodukt"} name={"Latarnia"} />, myPopup[139]);