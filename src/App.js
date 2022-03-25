import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <Button success>Success</Button>
      <Button danger>Danger</Button>
      <Button secondary>Secondary</Button>
      <Button primary>Primary</Button>
      <Button warning>Warning</Button>
      <Button info>Info</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>
      <Button link>Link</Button>

      <Alert success>A simple success alert!</Alert>
      <Alert danger>A simple danger alert!</Alert>
      <Alert secondary>A simple secondary alert!</Alert>
      <Alert primary>A simple primary alert!</Alert>
      <Alert warning>A simple warning alert!</Alert>
      <Alert info>A simple info alert!</Alert>
      <Alert light>A simple light alert!</Alert>
      <Alert dark>A simple dark alert!</Alert>
      <Tooltip info="Tooltip on top" top>
        Tooltip on top
      </Tooltip>
      <Tooltip info="Tooltip on right" right>
        Tooltip on right
      </Tooltip>
      <Tooltip info="Tooltip on bottom" bottom>
        Tooltip on bottom
      </Tooltip>
      <Tooltip info="Tooltip on left" left>
        Tooltip on left
      </Tooltip>
    </div>
  );
}

export default App;
