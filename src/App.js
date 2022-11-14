import './App.css';
import { useState } from 'react';

function App() {
  document.body.classList.add('bg-warning')
  const [playerTxt, setPlayerTxt] = useState("")
  const [compTxt, setcompTxt] = useState("")
  const [resultTxt, setresultTxt] = useState("");
  const [compPoint, setcompPoint] = useState(0);
  const [playerPoint, setplayerPoint] = useState(0)
  let getComputerChoice = (x) => {
    if (x === 0) {
      return "Stone"
    }
    else if (x === 1) {
      return "Paper"
    }
    else {
      return "Scissor"
    }
  }
  let playerWins = (pc, cc) => {
    if (pc === cc) {
      return null
    }
    else if (pc === "Stone") {
      if (cc === "Scissor") {
        return true
      }
      else {
        return false
      }
    }
    else if (pc === "Scissor") {
      if (cc === "Stone") {
        return false
      }
      else {
        return true
      }
    }
    else if (pc === "Paper") {
      if (cc === "Stone") {
        return true
      }
      else {
        return false
      }
    }
  }
  let getPlayerChoice = (e) => {
    console.log(e.target.innerHTML)
    let playerChoice = e.target.innerHTML
    setPlayerTxt(`You chose : ${playerChoice}`)
    let computerChoice = getComputerChoice(Math.floor(Math.random() * 3))
    setcompTxt(`Computer chose : ${computerChoice}`)
    console.log(playerWins(playerChoice, computerChoice))
    if (playerWins(playerChoice, computerChoice) == null) {
      document.getElementById('result').style.cssText="display:block; background-color:grey; color:white"
      setresultTxt("It's a draw")
    }
    else if (playerWins(playerChoice, computerChoice)) {
      document.getElementById('result').style.cssText="display:block; background-color:green; color:white"
      setresultTxt("You win")
      setplayerPoint(playerPoint+1)
    }
    else if(!playerWins(playerChoice, computerChoice)) {
      document.getElementById('result').style.cssText="display:block; background-color:red; color:white"
      setresultTxt("Computer wins")
      setcompPoint(compPoint+1)
    }
  }

  return (
    <div className="App">
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-11 col-md-6 main p-4">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-auto">
              <h2 className="display-6 fw-bold text-center">Stone Paper Scissor</h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-auto ms-auto">
              <p className='fw-bold'>Computer: {compPoint} | Player: {playerPoint}</p>
            </div>
          </div>
          <p className="lead fw-bold">Choose any one:</p>
          <button className="btn btn-warning col-3 col-md-2" onClick={(e) => getPlayerChoice(e)}>Stone</button>
          <button className="btn btn-warning col-3 col-md-2 mx-2" onClick={(e) => getPlayerChoice(e)}>Paper</button>
          <button className="btn btn-warning col-3 col-md-2" onClick={(e) => getPlayerChoice(e)}>Scissor</button>
          <div className="choices mt-3">
            <p className="m-0 p-0 fw-bold">{playerTxt}</p>
            <p className="m-0 p-0 fw-bold">{compTxt}</p>
          </div>
          <div className="row d-flex mt-4 align-items-center justify-content-center">
            <div className="col-6 col-md-3 p-3" id="result">{resultTxt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
