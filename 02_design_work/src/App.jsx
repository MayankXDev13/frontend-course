import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">
        Learn to integrate tailwind
      </h1>

      <Card title="Buy Python Course" buttonText="join now" />
      <Card title="Buy Nodejs Course" />
      <Card title="Buy Bun Course" />
    </>
  );
}

export default App;
