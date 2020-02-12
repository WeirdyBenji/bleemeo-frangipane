import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state =
    {
        participant: null,
        participantsList: [],
        filteredArray: [],
        winner: "",
        randomInt: null
    };
  }

  componentWillMount = async () =>
  {};

handleInputChange = (value) => {
    this.setState({participant: value})
}

addParticipant = () => {
    this.setState({participantsList: [...this.state.participantsList, this.state.participant]})
}

randomPick = () => {
    let randomInt = 0 + Math.random() * (this.state.participantsList.length - 1);
    let index = Math.round(randomInt);
    let winner = this.state.participantsList[index];
    let dirtyArray = [...this.state.participantsList];
    const filteredItems = dirtyArray.slice(0, index).concat(dirtyArray.slice(index + 1, dirtyArray.length));
    this.setState({participantsList: filteredItems, winner: winner});
}

render() {
    return (
    <div>
        <div style={{marginTop: "60px", marginLeft: "600px", width: "10%", height: "300px", borderRadius: "25px",border: "2px solid", textAlign: "center", overflow: "scroll"}}>
        {this.state.participantsList.map(txt => <p style={{fontSize: "20px"}}>{txt}</p>)}
        </div>
        <AwesomeButton type="primary" style={{marginTop: "6%", marginLeft: "40%", height: "60px", fontSize: "30px"}} onPress={this.randomPick}>{this.state.participantsList.length == 1 && this.state.last == true ? "La dernière part revient à..." : "La prochaine part est pour..."}</AwesomeButton>
        <div>
        <input
            type="text"
            id="participantadder"
            value={this.state.participant}
            onChange={e =>
                this.handleInputChange(e.target.value)
            }
        />
        <button onClick={this.addParticipant}>Ajouter</button>
        <p>{this.state.winner}</p>
        </div>
    </div>
    );
  }
}

export default TextInput;
