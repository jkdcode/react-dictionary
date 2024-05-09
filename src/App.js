import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>ENGLISH DICTIONARY</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://julie-makes-stuff.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Julie Didriksen
          </a>
          . It is open-sourced on{" "}
          <a
            href="https://github.com/jkdcode/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://julies-dictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
