import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [searched, setSearched] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
    setSearched(true);
  }

  function search() {
    const apiKey = `7a1b7bb3a54afd03ao8ta3f7b40acb43`;
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="What do you want to look up?"
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">
            Suggested words: alien, blackbird, cephalopod, dragon, elixir...
          </div>
        </section>
        <Results results={results} searched={searched} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
