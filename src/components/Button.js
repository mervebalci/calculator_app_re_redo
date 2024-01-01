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
    const results = {
      ".": decimalClick,
      "C": clearClick,
    }
    if (results[value]) {
      return results[value]()
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
    setCalc({sign: "", number: 0, result: 0})
  }

  return (
    <button onClick={handleButtonClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  )
}