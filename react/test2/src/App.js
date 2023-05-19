import "./App.css";
import test1 from "./photos/test1.png";
import test2 from "./photos/test2.png";
import test3 from "./photos/test3.png";
import test4 from "./photos/test4.png";
import test6 from "./photos/test6.png";
import test7 from "./photos/test7.png";
import test8 from "./photos/test8.png";
function App() {
  return (
    <div className="App">
      <h1>
        Najlepsza wtyczka do Twojej przeglądarki abyś oszczędził pieniądze
        robiąc zakupy!
      </h1>
      <h1 style={{ fontSize: "20px", color: "red" }}>
        UWAGA MUSISZ KORZYSTAĆ TYLKO I WYŁĄCZNIE Z PRZEGLĄDARKI CHROME NA
        KOMPUTERZE INACZEJ RABATY NIE DZIAŁAJĄ!
      </h1>
      <h1 style={{ fontSize: "20px", color: "black" }}>
        Przygotowałem dla Ciebie instrukcję krok po kroku, która w prosty sposób
        pokazuję cały proces od pobrania wtyczki do otrzymania rabatu zobacz
        jakie to proste!
      </h1>
      <p>
        Klikasz w link, który otworzy się w nowej przeglądarce i przekieruje Cie
        do pobrania wtyczki alerabat
      </p>

      <a href="https://d-track0.pl/p/C4kJ/K4i8/3fvE" target="_blank">
        kliknij
      </a>
      <p>1. Dodajesz rozszerzenie do przeglądarki CHROME</p>
      <img src={test1} style={{ width: "550px" }} />
      <img src={test2} style={{ width: "550px" }} />
      <p>
        2.Standardowo wyrażasz zgodę na przetwarzanie danych (przeczytaj
        politykę zanim wyrazisz zgodę)
      </p>
      <img src={test3} style={{ width: "550px" }} />
      <p>
        3.Zakładasz konto na alerabat i aktywujesz je poprzez potwierdzenie kodu
        otrzymanego na Twój email
      </p>
      <img src={test4} style={{ width: "550px" }} />
      <p>
        4.GOTOWE! Szybko i łatwo! Wybierasz swój ulubiony sklep i cieszysz się z
        setek kodów rabatowych!
      </p>
      <img src={test6} style={{ width: "550px" }} />
      <img src={test7} style={{ width: "550px" }} />
      <img src={test8} style={{ width: "550px" }} />
    </div>
  );
}

export default App;
