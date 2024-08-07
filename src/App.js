import { inputData } from "./utils/data";
import TreeView from "./TreeView";

function App() {
  return (
    <div className="App">
      <TreeView inputData={inputData} />
    </div>
  );
}

export default App;
