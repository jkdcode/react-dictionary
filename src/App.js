import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>A dictionary will show up here. Eventually.</p>
      </header>
      <footer>
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
  );
}
