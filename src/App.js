import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import Tooltip from "./components/Tooltip/Tooltip";


function App() {
  return (
    <div className="App">
      <Alert primary>This is sample alert</Alert>
      <Alert secondary>This is sample alert</Alert>
      <Alert succes>This is sample alert</Alert>
      <Alert danger>This is sample alert</Alert>
      <Alert warning>This is sample alert</Alert>
      <Alert info>This is sample alert</Alert>
      <Alert light>This is sample alert</Alert>
      <Alert dark>This is sample alert</Alert>

      <Button primary>primary</Button>
      <Button secondary>secondary</Button>
      <Button succes>succes</Button>
      <Button danger>danger</Button>
      <Button warning>warning</Button>
      <Button info>info</Button>
      <Button light>light</Button>
      <Button dark>dark</Button>


      {/* <Tooltip description="Tooltip on top" top>Tooltip on top</Tooltip>
      <Tooltip description="Tooltip on right" right>Tooltip on right</Tooltip>
      <Tooltip description="Tooltip on bottom" bottom>Tooltip on bottom</Tooltip>
      <Tooltip description="Tooltip on left" left>Tooltip on left</Tooltip> */}
    </div>
  );
}

export default App;
