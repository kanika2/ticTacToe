import React, { Component } from "react";

class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      user: "X"
    };
  }

  analyse = () => {
    var finalArr = this.state.arr;
    if (
      finalArr[0] === finalArr[1] &&
      finalArr[1] === finalArr[2] &&
      finalArr[1] !== "?"
    ) {
      alert(this.state.user, " won");
    } else if (
      finalArr[3] === finalArr[4] &&
      finalArr[4] === finalArr[5] &&
      finalArr[3] !== "?"
    ) {
      alert(this.state.user, " won");
    } else if (
      finalArr[6] === finalArr[7] &&
      finalArr[7] === finalArr[8] &&
      finalArr[6] !== "?"
    ) {
      alert(this.state.user, " won");
    } else if (
      finalArr[0] === finalArr[3] &&
      finalArr[3] === finalArr[6] &&
      finalArr[0] !== "?"
    ) {
      alert(this.state.user, " won");
    } else if (
      finalArr[1] === finalArr[4] &&
      finalArr[4] === finalArr[7] &&
      finalArr[1] !== "?"
    ) {
      alert(this.state.user, " won");
    } else if (
      finalArr[2] === finalArr[5] &&
      finalArr[5] === finalArr[8] &&
      finalArr[2] !== "?"
    ) {
      alert(this.state.user, " won");
    } else if (
      finalArr[1] === finalArr[4] &&
      finalArr[4] === finalArr[8] &&
      finalArr[1] !== "?"
    ) {
      alert(this.state.user, " won");
    } else if (
      finalArr[2] === finalArr[4] &&
      finalArr[4] === finalArr[6] &&
      finalArr[2] !== "?"
    ) {
      alert(this.state.user, " won");
    }
  };

  buttonHandle = index => {
    console.log(index);
    var cp = this.state.user;
    var b = this.state.arr;
    if (b[index] === "?") {
      b[index] = cp;
      if (cp === "X") {
        this.setState({ arr: b, user: "O" });
      } else {
        this.setState({ arr: b, user: "X" });
      }
    }
    this.analyse();
  };

  render() {
    return (
      <div>
        {this.state.arr.map((value, index) => {
          if (index % 3 === 0) {
            return (
              <span key={index}>
                <br />
                <button
                  id="index"
                  onClick={() => {
                    this.buttonHandle(index);
                  }}
                >
                  {value}
                </button>
              </span>
            );
          } else {
            return (
              <button
                key={index}
                id="index"
                onClick={() => {
                  this.buttonHandle(index);
                }}
              >
                {value}
              </button>
            );
          }
        })}
      </div>
    );
  }
}

export default TicTacToe;
