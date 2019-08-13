import {img} from "./app.js";
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
const string = ["Scenki Alkoholowe"];
export default class AppAchivement extends React.Component {
  render() {
    return (
      <>
        <div className="popup">
          <div><img src={this.props.url} /></div>
          <div className="opis">
            <h5>{this.props.name}</h5>
            <p>{this.props.text}</p>
            <p><img src={img[140]}/>{this.props.achivement}</p>
            <p>
              <span><img src="image/Zakup.png" title="cena maksymalna"/>{this.props.buy}$</span>
              <span><img src="image/Sprzedaz.png" title="cena minimalna"/>{this.props.sell}$</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
const myPopup = document.querySelectorAll(".my-popup");
ReactDOM.render(<AppAchivement url={img[39]} buy={dollar[131]} sell={dollar[88]} text={"Efekt: karta kolekcjonera"} achivement={string[0]} name={"Trunek"} />, myPopup[39]);