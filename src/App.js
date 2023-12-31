import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button"

const buttonValues = [
  ["C", "+/-", "%", "÷"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="]
];

export default function App() {
  return (
    <div>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {buttonValues.flat().map((btn, i) => {
            return (
              <Button 
                value={btn}
                key={i}
              />
            )
          })}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}