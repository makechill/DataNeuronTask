import Split from "react-split";
import Window1 from "./components/Window1";
import Window2 from "./components/Window2";
import Window3 from "./components/Window3";

function App() {
  return (
    <>
      <div className="navbar">Data Neuron</div>
      <Split
        direction="vertical"
        style={{ height: "120vh" }}
        className="window_container"
        sizes={[50, 70]}
        minSize={[340, 380]}
      >
        <Split
          direction="horizontal"
          style={{ display: "flex" }}
          sizes={[30, 70]}
          minSize={[250, 300]}
        >
          <Window1 />
          <Window2 />
        </Split>
        <Window3 />
      </Split>
    </>
  );
}

export default App;
