import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

function getStyleName(btn) {
  const className = {
    "=": "equals",
    "+":"opt",
    "-":"opt",
    "x":"opt",
    "÷":"opt",
    "C":"clear",
  }
  return className[btn]
}

export default function Button({ value }) {
  const { calc, setCalc } = useContext(CalcContext);

  function handleButtonClick() {
    const buttons = {
      ".": decimalClick,
      "C": clearClick,
      "+": signClick,
      "-": signClick,
      "x": signClick,
      "÷": signClick,
    }
    if (buttons[value]) {
      return buttons[value]()
    } else {
      return handleNumberClick()
    }
  }


  // When user clicks on any number 0-9 button
  function handleNumberClick() {
    // First, change the value to string
    const numberToString = value.toString()

    let numberValue;
    if (numberToString === '0' && calc.number === 0) {
      numberValue = "0"
    } else {
      numberValue = Number(calc.number + numberToString)
    }

    setCalc({...calc, number: numberValue})
  }


  // When user clicks on decimal point "." button
  function decimalClick() {
    setCalc({...calc, number: !calc.number.toString().includes('.') ? calc.number + value : calc.number})
  }


  // When user clicks on clear "C" button
  function clearClick() {
    setCalc({sign: "", number: 0, response: 0})
  }


  // When user clicks on any operational sign "+ - x ÷" button
  function signClick() {
    setCalc({
      sign: value, 
      number: 0, 
      response: !calc.response && calc.number ? calc.number : calc.response
    })
  }


  return (
    <button onClick={handleButtonClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  )
}