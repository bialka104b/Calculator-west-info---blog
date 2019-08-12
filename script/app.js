//import styles from "../css.westcss";
const img = [
  "image/craft/Pureepomidorowe.png", "image/craft/SosPomidorowy.png",
  "image/craft/ZapieczoneFasolki.png", "image/craft/WegielDrzewny.png",
  "image/craft/MakaKukurydziana.png", "image/craft/DzbanWody.png",
  "image/craft/KawalekTortu.png", "image/craft/FasolaZBekonem.png",
  "image/craft/Dzem.png", "image/craft/NieoszlifowanyPiryt.png",
  "image/craft/DyskZPirytu.png", "image/craft/Amulet.png",
  "image/craft/Krzesiwo.png", "image/craft/Siarka.png",
  "image/craft/Zywica.png", "image/craft/PapierosZFiltrem.png",
  "image/craft/Wycior.png", "image/craft/LekNaZoladek.png",
  "image/craft/WygarbowanaSkora.png", "image/craft/SkorzanaTorba.png",
  "image/craft/TorbaZPasza.png", "image/craft/Manierka.png",
  "image/craft/Rzemien.png", "image/craft/DeskaDoKrojenia.png",
  "image/craft/TorbaPodrozna.png", "image/craft/PodkucieKopyt.png",
  "image/craft/PaszaTresciwa.png", "image/craft/Grafit.png",
  "image/craft/SproszkowanyGrafit.png", "image/craft/SmarGrafitowy.png",
  "image/craft/Patelnia.png", "image/craft/StopioneZelazo.png",
  "image/craft/Noz.png", "image/craft/ZaostrzanieBroni.png",
  "image/craft/Bagnet.png", "image/craft/Odwaznik.png",
  "image/craft/Zacier.png", "image/craft/Ciasto.png",
  "image/craft/MarynowanyStek.png", "image/craft/Trunek.png",
  "image/craft/Tort.png", "image/craft/Bulion.png",
  "image/craft/KwasSiarkowy.png", "image/craft/Atrament.png",
  "image/craft/Nafta.png", "image/craft/Bozek.png",
  "image/craft/Destylat.png", "image/craft/Bimber.png",
  "image/craft/ObdarteSiodlo.png", "image/craft/Wypelniacz.png",
  "image/craft/SkorzanePokrycie.png", "image/craft/Znakownik.png",
  "image/craft/NiewyregulowanyKompas.png", "image/craft/Strzemie.png",
  "image/craft/Stal.png", "image/craft/StopionyOlow.png",
  "image/craft/Kowadlo.png", "image/craft/OlowianaFigurka.png",
  "image/craft/NiezastygnietaKulka.png", "image/craft/Nity.png",
  "image/craft/PieczonyIndyk.png", "image/craft/ZupaRybna.png",
  "image/craft/Pierog.png", "image/craft/SiekaneMieso.png",
  "image/craft/Herbata.png", "image/craft/Prymka.png",
  "image/craft/Nalewka.png", "image/craft/Bateria.png",
  "image/craft/Ostrogi.png", "image/craft/Uzda.png",
  "image/craft/Spiwor.png", "image/craft/Dera.png",
  "image/craft/Kablak.png", "image/craft/ChustaDoChlodzenia.png",
  "image/craft/LancuchDoBroni.png", "image/craft/Rekojesc.png",
  "image/craft/Dorsz.png", "image/craft/Kadzidlo.png",
  "image/craft/Sos.png", "image/craft/CiasteczkoKukurydziane.png",
  "image/craft/RybaZawinietaWGazete.png", "image/craft/SokZKaktusa.png",
  "image/craft/ObiadDzentelmena.png", "image/craft/Lug.png",
  "image/craft/LikierZiolowy.png", "image/craft/Papier.png",
  "image/craft/AtramentSympatyczny.png", "image/craft/Cyrkiel.png",
  "image/craft/ProchStrzelniczy.png", "image/craft/WloknoLnu.png",
  "image/craft/WodaRozana.png", "image/craft/Ozdoba.png",
  "image/craft/CzescPowozu.png", "image/craft/KoloPowozu.png",
  "image/craft/PowozWyscigowy.png", "image/craft/EliksirCelnosci.png",
  "image/craft/NaprawioneSiodlo.png", "image/craft/Notatnik.png",
  "image/craft/LekSiodla.png", "image/craft/Ksztaltownikrewolweru.png",
  "image/craft/StaloweOstrze.png", "image/craft/Ozdoba.png",
  "image/craft/Westerner.png", "image/craft/NierozlupanaGeoda.png",
  "image/craft/SzwajcarskiScyzoryk.png", "image/craft/Szklo.png",
  "image/craft/KamienPolerski.png", "image/craft/SuszoneMieso.png",
  "image/craft/GumaDoZucia.png", "image/craft/Grog.png",
  "image/craft/Gulasz.png", "image/craft/Zeberka.png",
  "image/craft/Miod.png", "image/craft/Panaceum.png",
  "image/craft/RemediumSily.png", "image/craft/OdzywkaDoWlosow.png",
  "image/craft/ZnakomityTrunek.png", "image/craft/UzdrawiajacaMarionetka.png",
  "image/craft/WykwintnyImpregnat.png", "image/craft/Arras.png",
  "image/craft/WytrzymaleLejce.png", "image/craft/WytrzymalaKabura.png",
  "image/craft/WedrownyPowoz.png", "image/craft/NierdzewneSruby.png",
  "image/craft/SiodloWellsFargo.png", "image/craft/Piersiowka.png",
  "image/craft/NowoczesnaZbroja.png", "image/craft/PrasaDoMiodu.png",
  "image/craft/FasolaWPuszce.png", "image/craft/NajostrzejszeChili.png",
  "image/craft/MiodPitny.png", "image/craft/BlyszczacaMikstura.png",
  "image/craft/LegendarneAntidotum.png", "image/craft/DuchowaMuzyka.png",
  "image/craft/LeciutkaSkora.png", "image/craft/SiodloPonyExpress.png",
  "image/craft/SchowekNaAmunicje.png", "image/craft/NarzedziaZegarmistrzowskie.png",
  "image/craft/ZlotaPozytywka.png", "image/craft/Latarnia.png"
];
const buyAndSell = [ 
  3,   6,   7,   8,   10,  11,  12,  14,  15,  16,
  17,  20,  21,  22,  23,  24,  25,  26,  27,  28,
  29,  31,  32,  34,  36,  37,  39,  41,  42,  45,
  46,  47,  48,  50,  52,  53,  54,  55,  56,  57,
  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,
  71,  72,  74,  75,  77,  78,  79,  82,  83,  84,
  85,  87,  89,  90,  91,  94,  95,  97,  103, 107,
  100, 108, 109, 110, 112, 115, 117, 120, 122, 123,
  124, 126, 128, 130, 131, 132, 133, 134, 135, 139,
  142, 144, 150, 152, 153, 154, 164, 174, 179, 180,
  188, 190, 194, 206, 215, 219, 220, 234, 235, 240,
  244, 246, 252, 256, 260, 264, 275, 288, 300, 304,
  306, 373, 470, 551, 600
]
class App extends React.Component {
  // state = {
  //   text: "",
  //   name: "nagłówek",
  //   number: 0
  // };ten sposób wygenerował by nam elementy po kliknięciu w button

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

ReactDOM.render(<App url={img[0]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Puree Pomidorowe"} />, myPopup[0]);
ReactDOM.render(<App url={img[1]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Sos Pomidorowy"} />, myPopup[1]);
ReactDOM.render(<App url={img[2]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Zapieczone Fasolki"} />, myPopup[2]);
ReactDOM.render(<App url={img[3]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Węgiel Drzewny"} />, myPopup[3]);
ReactDOM.render(<App url={img[4]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Mąka Kukurydziana"} />, myPopup[4]);
ReactDOM.render(<App url={img[5]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Dzban Wody"} />, myPopup[5]);
ReactDOM.render(<App url={img[6]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Kawałek Tortu"} />, myPopup[6]);
ReactDOM.render(<App url={img[7]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Fasola Z Bekonem"} />, myPopup[7]);
ReactDOM.render(<App url={img[8]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Dżem"} />, myPopup[8]);
ReactDOM.render(<App url={img[9]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nieoszlifowany Piryt"} />, myPopup[9]);

ReactDOM.render(<App url={img[10]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Dysk Z Pirytu"} />, myPopup[10]);
ReactDOM.render(<App url={img[11]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Amulet"} />, myPopup[11]);
ReactDOM.render(<App url={img[12]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Krzesiwo"} />, myPopup[12]);
ReactDOM.render(<App url={img[13]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Siarka"} />, myPopup[13]);
ReactDOM.render(<App url={img[14]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Żywica"} />, myPopup[14]);
ReactDOM.render(<App url={img[15]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Papieros Z Filtrem"} />, myPopup[15]);
ReactDOM.render(<App url={img[16]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Wycior"} />, myPopup[16]);
ReactDOM.render(<App url={img[17]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Lek Na Żołądek"} />, myPopup[17]);
ReactDOM.render(<App url={img[18]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Wygarbowana Skóra"} />, myPopup[18]);
ReactDOM.render(<App url={img[19]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Skórzana Torba"} />, myPopup[19]);

ReactDOM.render(<App url={img[20]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Torba Z Paszą"} />, myPopup[20]);
ReactDOM.render(<App url={img[21]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Manierka"} />, myPopup[21]);
ReactDOM.render(<App url={img[22]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Rzemień"} />, myPopup[22]);
ReactDOM.render(<App url={img[23]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Deska Do Krojenia"} />, myPopup[23]);
ReactDOM.render(<App url={img[24]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Torba Podróżna"} />, myPopup[24]);
ReactDOM.render(<App url={img[25]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Podkucie Kopyt"} />, myPopup[25]);
ReactDOM.render(<App url={img[26]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Pasza Treściwa"} />, myPopup[26]);
ReactDOM.render(<App url={img[27]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Grafit"} />, myPopup[27]);
ReactDOM.render(<App url={img[28]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Sproszkowany Grafit"} />, myPopup[28]);
ReactDOM.render(<App url={img[29]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Smar Grafitowy"} />, myPopup[29]);

ReactDOM.render(<App url={img[30]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Patelnia"} />, myPopup[30]);
ReactDOM.render(<App url={img[31]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Stopione Żelazo"} />, myPopup[31]);
ReactDOM.render(<App url={img[32]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nóż"} />, myPopup[32]);
ReactDOM.render(<App url={img[33]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Zaostrzenie Broni"} />, myPopup[33]);
ReactDOM.render(<App url={img[34]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Bagnet"} />, myPopup[34]);
ReactDOM.render(<App url={img[35]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Odważnik"} />, myPopup[35]);
ReactDOM.render(<App url={img[36]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Zacier"} />, myPopup[36]);
ReactDOM.render(<App url={img[37]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Ciasto"} />, myPopup[37]);
ReactDOM.render(<App url={img[38]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Marynowany Stek"} />, myPopup[38]);
ReactDOM.render(<App url={img[39]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Trunek"} />, myPopup[39]);

ReactDOM.render(<App url={img[40]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Tort"} />, myPopup[40]);
ReactDOM.render(<App url={img[41]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Bulion Rybny"} />, myPopup[41]);
ReactDOM.render(<App url={img[42]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Kwas Siarkowy"} />, myPopup[42]);
ReactDOM.render(<App url={img[43]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Atrament"} />, myPopup[43]);
ReactDOM.render(<App url={img[44]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nafta"} />, myPopup[44]);
ReactDOM.render(<App url={img[45]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Bożek"} />, myPopup[45]);
ReactDOM.render(<App url={img[46]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Destylat"} />, myPopup[46]);
ReactDOM.render(<App url={img[47]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Bimber"} />, myPopup[47]);
ReactDOM.render(<App url={img[48]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Obdarte Siodło"} />, myPopup[48]);
ReactDOM.render(<App url={img[49]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Wypełniacz"} />, myPopup[49]);

ReactDOM.render(<App url={img[50]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Skórzane Pokrycie"} />, myPopup[50]);
ReactDOM.render(<App url={img[51]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Znakownik"} />, myPopup[51]);
ReactDOM.render(<App url={img[52]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Niewyregulowany Kompas"} />, myPopup[52]);
ReactDOM.render(<App url={img[53]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Strzemię"} />, myPopup[53]);
ReactDOM.render(<App url={img[54]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Stal"} />, myPopup[54]);
ReactDOM.render(<App url={img[55]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Stopiony Ołów"} />, myPopup[55]);
ReactDOM.render(<App url={img[56]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Kowadło"} />, myPopup[56]);
ReactDOM.render(<App url={img[57]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Ołowiana Figurka"} />, myPopup[57]);
ReactDOM.render(<App url={img[58]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Niezastygnieta Kulka"} />, myPopup[58]);
ReactDOM.render(<App url={img[59]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nity"} />, myPopup[59]);

ReactDOM.render(<App url={img[60]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Pieczony Indyk"} />, myPopup[60]);
ReactDOM.render(<App url={img[61]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Zupa Rybna"} />, myPopup[61]);
ReactDOM.render(<App url={img[62]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Pieróg Z Warzywami"} />, myPopup[62]);
ReactDOM.render(<App url={img[63]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Siekane Mieso"} />, myPopup[63]);
ReactDOM.render(<App url={img[64]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Herbata"} />, myPopup[64]);
ReactDOM.render(<App url={img[65]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Prymka"} />, myPopup[65]);
ReactDOM.render(<App url={img[66]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Naleweka"} />, myPopup[66]);
ReactDOM.render(<App url={img[67]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Bateria"} />, myPopup[67]);
ReactDOM.render(<App url={img[68]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Ostrogi"} />, myPopup[68]);
ReactDOM.render(<App url={img[69]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Uzda"} />, myPopup[69]);

ReactDOM.render(<App url={img[70]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Śpiwór"} />, myPopup[70]);
ReactDOM.render(<App url={img[71]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Dera"} />, myPopup[71]);
ReactDOM.render(<App url={img[72]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Kabłąk"} />, myPopup[72]);
ReactDOM.render(<App url={img[73]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Chusta Do Chłodzenia"} />, myPopup[73]);
ReactDOM.render(<App url={img[74]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Łańcuch Do Broni"} />, myPopup[74]);
ReactDOM.render(<App url={img[75]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Rękojeść"} />, myPopup[75]);
ReactDOM.render(<App url={img[76]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Dorsz"} />, myPopup[76]);
ReactDOM.render(<App url={img[77]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Kadzidło"} />, myPopup[77]);
ReactDOM.render(<App url={img[78]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Sos"} />, myPopup[78]);
ReactDOM.render(<App url={img[79]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Ciasteczka Kukurydziane"} />, myPopup[79]);

ReactDOM.render(<App url={img[80]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Ryba Zawinięta W Gazetę"} />, myPopup[80]);
ReactDOM.render(<App url={img[81]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Sok Z Kaktusa"} />, myPopup[81]);
ReactDOM.render(<App url={img[82]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Obiad Dżentelmena"} />, myPopup[82]);
ReactDOM.render(<App url={img[83]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Ług"} />, myPopup[83]);
ReactDOM.render(<App url={img[84]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Likier Ziołowy"} />, myPopup[84]);
ReactDOM.render(<App url={img[85]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Papier"} />, myPopup[85]);
ReactDOM.render(<App url={img[86]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Atrament Sympatyczny"} />, myPopup[86]);
ReactDOM.render(<App url={img[87]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Cyrkiel"} />, myPopup[87]);
ReactDOM.render(<App url={img[88]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Proch Strzelniczy"} />, myPopup[88]);
ReactDOM.render(<App url={img[89]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Włókno Lnu"} />, myPopup[89]);

ReactDOM.render(<App url={img[90]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Woda Różana"} />, myPopup[90]);
ReactDOM.render(<App url={img[91]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Ozdoba"} />, myPopup[91]);
ReactDOM.render(<App url={img[92]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Część Powozu"} />, myPopup[92]);
ReactDOM.render(<App url={img[93]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Koło Powozu"} />, myPopup[93]);
ReactDOM.render(<App url={img[94]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Powóz Wyścigowy"} />, myPopup[94]);
ReactDOM.render(<App url={img[95]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Eliksir Celności"} />, myPopup[95]);
ReactDOM.render(<App url={img[96]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Naprawione Siodło"} />, myPopup[96]);
ReactDOM.render(<App url={img[97]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Notatnik"} />, myPopup[97]);
ReactDOM.render(<App url={img[98]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Łęk Siodła"} />, myPopup[98]);
ReactDOM.render(<App url={img[99]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Kształtownik Rewolweru"} />, myPopup[99]);

ReactDOM.render(<App url={img[100]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Stalowe Ostrze"} />, myPopup[100]);
ReactDOM.render(<App url={img[101]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Ozdoba"} />, myPopup[101]);
ReactDOM.render(<App url={img[102]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Westerner"} />, myPopup[102]);
ReactDOM.render(<App url={img[103]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nierozłupana Geoda"} />, myPopup[103]);
ReactDOM.render(<App url={img[104]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Szwajcarski Scyzoryk"} />, myPopup[104]);
ReactDOM.render(<App url={img[105]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Szkło"} />, myPopup[105]);
ReactDOM.render(<App url={img[106]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Kamień Polerski"} />, myPopup[106]);
ReactDOM.render(<App url={img[107]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Suszone Mięso"} />, myPopup[107]);
ReactDOM.render(<App url={img[108]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Guma Do Żucia"} />, myPopup[108]);
ReactDOM.render(<App url={img[109]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Grog"} />, myPopup[109]);

ReactDOM.render(<App url={img[110]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Gulasz"} />, myPopup[110]);
ReactDOM.render(<App url={img[111]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Żeberka"} />, myPopup[111]);
ReactDOM.render(<App url={img[112]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Miód"} />, myPopup[112]);
ReactDOM.render(<App url={img[113]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Panaceum"} />, myPopup[113]);
ReactDOM.render(<App url={img[114]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Remedium Siły"} />, myPopup[114]);
ReactDOM.render(<App url={img[115]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Odżywka Do Włosów"} />, myPopup[115]);
ReactDOM.render(<App url={img[116]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Znakomity Trunek"} />, myPopup[116]);
ReactDOM.render(<App url={img[117]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Uzdrawiąjaca Marionetka"} />, myPopup[117]);
ReactDOM.render(<App url={img[118]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Wykwintny Impregnat"} />, myPopup[118]);
ReactDOM.render(<App url={img[119]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Arras"} />, myPopup[119]);

ReactDOM.render(<App url={img[120]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[120]);
ReactDOM.render(<App url={img[121]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[121]);
ReactDOM.render(<App url={img[122]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[122]);
ReactDOM.render(<App url={img[123]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[123]);
ReactDOM.render(<App url={img[124]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[124]);
ReactDOM.render(<App url={img[125]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[125]);
ReactDOM.render(<App url={img[126]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[126]);
ReactDOM.render(<App url={img[127]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[127]);
ReactDOM.render(<App url={img[128]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[128]);
ReactDOM.render(<App url={img[129]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[129]);

ReactDOM.render(<App url={img[130]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[130]);
ReactDOM.render(<App url={img[131]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[131]);
ReactDOM.render(<App url={img[132]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[132]);
ReactDOM.render(<App url={img[133]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[133]);
ReactDOM.render(<App url={img[134]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[134]);
ReactDOM.render(<App url={img[135]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[135]);
ReactDOM.render(<App url={img[136]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[136]);
ReactDOM.render(<App url={img[137]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[137]);
ReactDOM.render(<App url={img[138]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[138]);
ReactDOM.render(<App url={img[139]} buy={buyAndSell[1]} sell={buyAndSell[0]} text={"Efekt: półprodukt"} name={"Nagłówek"} />, myPopup[139]);