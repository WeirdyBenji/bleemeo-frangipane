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
        last: false,
        winner: null,
        randomInt: null
    };
  }

  componentWillMount = async () =>
  {};

handleInputChange = (value) => {
    this.setState({participant: value})
}

addParticipant = () => {
    if (this.state.participant)
        this.setState({participantsList: [...this.state.participantsList, this.state.participant]})
}

randomPick = () => {
    let randomInt = 0 + Math.random() * (this.state.participantsList.length - 1);
    let index = Math.round(randomInt);
    let winner = this.state.participantsList[index];
    let dirtyArray = [...this.state.participantsList];
    const filteredItems = dirtyArray.slice(0, index).concat(dirtyArray.slice(index + 1, dirtyArray.length));
    if (filteredItems.length > 1)
        this.setState({last: true});
    else if (filteredItems.length == 0)
        this.setState({last: false});
    this.setState({participantsList: filteredItems, winner: winner});
}

render() {
    console.log("length:", this.state.participantsList.length)
    return (
    <div>
        <div style={{marginTop: "60px", marginLeft: "600px", width: "10%", height: "300px", borderRadius: "25px",border: "2px solid", textAlign: "center", overflow: "scroll"}}>
        {this.state.participantsList.map(txt => <p style={{fontSize: "20px"}}>{txt}</p>)}
        </div>
        <div style={{paddingLeft: "900px", marginTop: "-170px"}}>
        <input
            style={{marginLeft: "1000px", margin: "20px", width: "120px", fontSize: "20px"}}
            type="text"
            id="participantadder"
            value={this.state.participant}
            onChange={e =>
                this.handleInputChange(e.target.value)
            }
        />
        <AwesomeButton style={{height: "30px", marginBottom: "5px"}} onPress={this.addParticipant}>Ajouter</AwesomeButton>
        </div>
        <AwesomeButton type="primary" style={{marginTop: "10%", marginLeft: "37%", height: "60px", fontSize: "30px"}} onPress={this.randomPick}>{this.state.participantsList.length == 1 && this.state.last == true ? "La dernière part revient à..." : "La prochaine part est pour..."}</AwesomeButton>
        <div>
        <p style={{textAlign: "center", marginTop: "20px", fontSize: "20px"}}>{this.state.winner} {this.state.winner ? "!" : ""}</p>
        </div>
    </div>
    );
  }
}

export default TextInput;