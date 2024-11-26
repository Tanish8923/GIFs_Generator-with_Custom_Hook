import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="App  h-screen w-screen bg-blue-800 flex flex-col items-center  ">
      <h1 className="w-10/12 text-center bg-white text-2xl font-bold mt-8 rounded-md">RANDOM GIF</h1>
      <div className="flex w-full justify-center gap-5 mt-10 ">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
