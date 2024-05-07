import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [searched, setSearched] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
    setSearched(true);
  }

  function search(event) {
    event.preventDefault();
    const apiKey = `7a1b7bb3a54afd03ao8ta3f7b40acb43`;
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Type a word..."
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          Suggested words: alien, blackbird, city, dog, evermore...
        </div>
      </section>
      <Results results={results} searched={searched} />
    </div>
  );
}
