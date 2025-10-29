import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

export default function XSpellCheck() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);

    if (!inputValue.trim()) {
      setSuggestion(""); // reset if empty
      return;
    }

    // Split words, check case-insensitively
    const words = inputValue.split(/\s+/);

    let found = "";
    for (let word of words) {
      const lowerWord = word.toLowerCase();
      if (customDictionary[lowerWord]) {
        found = `Did you mean: ${customDictionary[lowerWord]}?`;
        break; // only first wrong spelling
      }
    }

    setSuggestion(found);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}>
      <h2>XSpellCheck</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        style={{ padding: "8px", width: "100%" }}
      />
      {suggestion && (
        <p style={{ color: "red", marginTop: "10px" }}>{suggestion}</p>
      )}
    </div>
  );
}