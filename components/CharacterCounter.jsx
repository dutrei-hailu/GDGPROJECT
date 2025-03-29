import React, { useReducer } from 'react';
import { useCharacterCount } from '../hooks/useCharacterCount';

// Reducer for managing text state
const characterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.text };
    default:
      return state;
  }
};

const CharacterCounter = () => {
  const limit = 200; // Character limit
  const { text, handleTextChange, remainingCharacters, isLimitReached } = useCharacterCount(limit);
  const [state, dispatch] = useReducer(characterReducer, { text: '' });

  // Handle input changes and enforce limit
  const handleInputChange = (e) => {
    const updatedText = e.target.value;
    if (updatedText.length <= limit) {
      dispatch({ type: 'SET_TEXT', text: updatedText });
    }
  };

  // Copy text to clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(state.text);
  };

  return (
    <div className="counter-container">
      <textarea
        value={state.text}
        onChange={handleInputChange}
        placeholder="Type here..."
        rows="6"
        cols="50"
      />
      <div className="info">
        <p>{remainingCharacters} characters remaining</p>
        {isLimitReached && <p className="limit-reached">Character limit reached!</p>}
        {remainingCharacters <= limit * 0.1 && (
          <p className="warning">Warning: Nearing the limit!</p>
        )}
      </div>
      <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
      <progress value={limit - remainingCharacters} max={limit}></progress>
    </div>
  );
};

export default CharacterCounter;
