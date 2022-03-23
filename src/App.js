import Paragraph from "./components/Paragraph/Paragraph";
import Image from "./components/Image/Image";
import koalaImage from "./assets/koala.png";


function App() {
  return (
    <div className="App">
      <h1>hello world</h1>

      <Paragraph size="14px" color="red">
        this is simple paragraph
      </Paragraph>
      <Paragraph size="5px" color="green">
        this is simple paragraph
      </Paragraph>
      <Image  url={koalaImage} width="150px" height="100px"></Image>
      <Image url={koalaImage} width="150px" height="100px"></Image>
    </div>
  );
}

export default App;
