import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    <div>
      {/* props mantığı, istediğin isim ile gönderebilirsin aldığın yere de aynı ismi yazman şartıyla */}
      {/* birden fzala props gönderebiliriz */}
      <Header number="1" type="shoes"></Header>
      {/* number 1 kategorisinde kıyafetler olsun */}
      <Header number="2" type="business"></Header>
      {/* number 2 kategroisinde şirket reklamlar */}
      <Home name="firstText"></Home>
      <Home name="descriptionText"></Home>


    </div>
  );
}

export default App;
