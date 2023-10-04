import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Header></Header>
      <Home name="firstText"></Home>
      {/* props mantığı, istediğin isim ile gönderebilirsin aldığın yere de aynı ismi yazman şartıyla */}
      <Home name="descriptionText"></Home>


    </div>
  );
}

export default App;
