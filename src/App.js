import { Provider } from "react-redux";
import "./index.css";
import Main from "./components/Main";
import store from "./utilities/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main></Main>
      </div>
    </Provider>
  );
}

export default App;
