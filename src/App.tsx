import "./App.css";
import Image from "./assets/posto.png";
import { useState, FormEvent } from "react";

interface ResultProps {
  title: string;
  gasolina: string | number;
  Alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolinaInput] = useState(0);
  const [result, setResult] = useState<ResultProps>();
  function Calculo(event: FormEvent) {
    event.preventDefault();
    const calculando = alcoolInput / gasolinaInput;
    if (calculando <= 0.7) {
      setResult({
        title: "Compensa usar Alcool",
        Alcool: formateResult(alcoolInput),
        gasolina: formateResult(gasolinaInput),
      });
    } else {
      setResult({
        title: "Compensa usar Gasolina",
        Alcool: formateResult(alcoolInput),
        gasolina: formateResult(gasolinaInput),
      });
    }
  }

  function formateResult(valor: number) {
    const valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return valorFormatado;
  }

  return (
    <main className="container">
      <img src={Image} alt="logoCalculadora" />
      <h1> Qual a melhor opção? </h1>
      <form className="InputLabel">
        <label className="labelGasolina"> Gasolina ( Preço por litro )</label>{" "}
        <br />
        <input
          className="InputGasolina"
          type="number"
          placeholder="4,90"
          onChange={(e) => setGasolinaInput(Number(e.target.value))}
        ></input>
        <label className="LabelEtanol"> Alcool (Preço por litro) </label>
        <br />
        <input
          className="InputEtanol"
          type="number"
          placeholder="4,90"
          onChange={(e) => setAlcoolinaInput(Number(e.target.value))}
        ></input>
        <button type="submit" className="button" onClick={Calculo}>
          {" "}
          Calcular
        </button>
      </form>
      <br />
      {result && Object.keys(result).length > 0 && (
        <section className="Variavel">
          <h2> {result.title}!</h2>
          <span> Gasolina:{result.gasolina} </span>;
          <span> Alcool:{result.Alcool} </span>
        </section>
      )}
    </main>
  );
}

export default App;
