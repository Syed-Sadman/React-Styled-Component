import StyleButton, { FancyButton } from "./components/Button/Button";


function App() {
  return (
    <div className="App">
      <StyleButton>Button</StyleButton>
      <div>
        <br/>
      </div>
      <StyleButton variant='outline'>Button</StyleButton>
      <div>
        <br/>
      </div>
      <FancyButton>Fancy Button</FancyButton>
    </div>

  );
}

export default App;
