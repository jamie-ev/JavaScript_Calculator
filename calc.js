class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lastKeyPressed: '0', // used for determining actions related to number inputs
        currentKeyPress: '0', // used for determining actions related to number inputs
        canDec: true, // used to prevent double decimals
        currentString: '0', // used to capture the current calculation string
        justEqualed: false // track if the calculator needs to be cleared after hitting equals button
      }
      // bindings for internal methods
      this.handleNumClick = this.handleNumClick.bind(this);
      this.handleNumCalc = this.handleNumCalc.bind(this);
      this.handlePeriod = this.handlePeriod.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleOperator = this.handleOperator.bind(this);
      this.handleEquals = this.handleEquals.bind(this);
    }
    // when the equals button is pressed
    handleEquals() {
      this.setState({
        currentString: eval(this.state.currentString),
        justEqualed: true
      });
    }
    // when + - * / are pressed
    handleOperator(event) {
      this.setState({
        justEqualed: false
      });
      // prevent side-by-by operators; only keep the most recent operator pressed
      if (this.state.currentString[this.state.currentString.length - 1] == '+' || this.state.currentString[this.state.currentString.length - 1] == '-' || this.state.currentString[this.state.currentString.length - 1] == '*' || this.state.currentString[this.state.currentString.length - 1] == '/') {
        this.setState({
          currentString: this.state.currentString.slice(0, this.state.currentString.length - 1) + event.target.innerText,
          canDec: true
        });
      } else {
        this.setState({
          currentString: this.state.currentString + event.target.innerText,
          canDec: true
        });
      }
    }
    // clear the calculator and reset to initial state when AC button is pressed
    handleClear() {
      this.setState({
        lastKeyPressed: '0',
        currentKeyPress: '0',
        canDec: true,
        currentString: '0',
        justEqualed: false
      });
    }
    // handle the decimal button
    handlePeriod() {
      if (this.state.canDec) {
        this.setState({
          currentString: this.state.currentString + '.',
          canDec: false
        });
      }
    }
    handleNumClick(event) {
      // reset the calculator if you hit equals button and then immediately hit a new number (rather than an operator) button
      if (this.state.justEqualed) {
        this.handleClear();
      }
      // handle inputs from number buttons; handleNumCalc is callback function into setState()
      switch(event.target.id) {
        case "zero":
          this.setState({
            currentKeyPressed: "0"
          }, this.handleNumCalc);
          break;
        case "one":
          this.setState({
            currentKeyPressed: "1"
          }, this.handleNumCalc);
          break;
        case "two":
          this.setState({
            currentKeyPressed: "2"
          }, this.handleNumCalc);
          break;
        case "three":
          this.setState({
            currentKeyPressed: "3"
          }, this.handleNumCalc);
          break;
        case "four":
          this.setState({
            currentKeyPressed: "4"
          }, this.handleNumCalc);
          break;
        case "five":
          this.setState({
            currentKeyPressed: "5"
          }, this.handleNumCalc);
          break;
        case "six":
          this.setState({
            currentKeyPressed: "6"
          }, this.handleNumCalc);
          break;
        case "seven":
          this.setState({
            currentKeyPressed: "7"
          }, this.handleNumCalc);
          break;
        case "eight":
          this.setState({
            currentKeyPressed: "8"
          }, this.handleNumCalc);
          break;
        case "nine":
          this.setState({
            currentKeyPressed: "9"
          }, this.handleNumCalc);
          break;
      }
    }
    handleNumCalc() {
      if (this.state.lastKeyPressed == 0) {
        // prevent multiple zeroes at the start of a number
        if (this.state.currentString.includes('.') || this.state.currentString[0] != 0) {
          this.setState({
            currentString: this.state.currentString + this.state.currentKeyPressed
          });
        } else {
          this.setState({
            currentString: this.state.currentKeyPressed
          });
        }
      } else {
        this.setState({
          currentString: this.state.currentString + this.state.currentKeyPressed
        });
      }
      
    }
    render() {
      return (
      <div id="calculator-box">
        <h1>JavaScript Calculator</h1>
        <div className="num-pad" id="display">{this.state.currentString}</div>
        <div className="num-pad" id="clear" onClick={this.handleClear}>AC</div>
        <div className="num-pad op-pad" id="divide" onClick={this.handleOperator}>/</div>
        <div className="num-pad op-pad" id="multiply" onClick={this.handleOperator}>*</div>
        <div className="num-pad" id="seven" onClick={this.handleNumClick}>7</div>
        <div className="num-pad" id="eight" onClick={this.handleNumClick}>8</div>
        <div className="num-pad" id="nine" onClick={this.handleNumClick}>9</div>
        <div className="num-pad op-pad" id="subtract" onClick={this.handleOperator}>-</div>
        <div className="num-pad" id="four" onClick={this.handleNumClick}>4</div>
        <div className="num-pad" id="five" onClick={this.handleNumClick}>5</div>
        <div className="num-pad" id="six" onClick={this.handleNumClick}>6</div>
        <div className="num-pad op-pad" id="add" onClick={this.handleOperator}>+</div>
        <div className="num-pad" id="one" onClick={this.handleNumClick}>1</div>
        <div className="num-pad" id="two" onClick={this.handleNumClick}>2</div>
        <div className="num-pad" id="three" onClick={this.handleNumClick}>3</div>
        <div className="num-pad" id="zero" onClick={this.handleNumClick}>0</div>
        <div className="num-pad" id="decimal" onClick={this.handlePeriod}>.</div>
        <div className="num-pad" id="equals" onClick={this.handleEquals}>=</div>
        <p id="footer">Designed & Coded 2019 by Jamie Ev.</p>
      </div>
      );
    }
  }
  
  ReactDOM.render(<Calculator />, document.getElementById('presentational'));  