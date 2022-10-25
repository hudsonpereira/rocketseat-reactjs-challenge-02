import { Header } from "./components/Header";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* HEADER */}
      <Header />

      <Router />
    </div>
  );
}

export default App;
