//import Message from "./Message";
import Alert from "./Components/Alert";
import Alertbox from "./Components/Alertbox";
import Buttons from "./Components/Buttons";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["India", "France", "Itali", "Germany", "USA"];

  const handleSelectItem = (item: string) => {
    console.log("Clicked " + item);
  };

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {/* adding color property is optional */}
      <Buttons color="warning" onClick={() => console.log("Button Clicked")}>
        Button
      </Buttons>

      <Alertbox></Alertbox>
    </>
  );
}

export default App;
