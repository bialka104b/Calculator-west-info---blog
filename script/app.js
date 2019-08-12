const img = ["image/craft/Amulet.png", "image/craft/Arras.png"];
class App extends React.Component {
  state = {
    text: "",
    text1: "nagłówek",
    number: 0
  };

  handleClick = () => {
    const letter = "opis";
    this.setState({
      text: this.state.text + letter,
      number: this.state.number + 1
    });
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
        <div>
          <img src={img[this.state.number]} />
          <h5>{this.state.tekst1}</h5>
          <p>{this.state.tekst}</p>
        </div>
        {/* {img.map(link => (
          <div>
            <img src={link} />
          </div>
        ))} */}
      </React.Fragment>
    );
  }
}

const myPopup = document.querySelectorAll(".my-popup");

ReactDOM.render(<App />, myPopup[1]);
ReactDOM.render(<App />, myPopup[0]);
ReactDOM.render(<App />, document.getElementById("root"));
