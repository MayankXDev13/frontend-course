import "./App.css";
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import CounterValue from "./components/CounterValue";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <h1>Zustand</h1>
      <Counter />
      <Posts />
      <CounterButton />
      <CounterValue />
    </>
  );
}

export default App;
