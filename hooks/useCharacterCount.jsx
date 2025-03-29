// src/hooks/useCharacterCount.jsx
import { useState, useCallback, useMemo } from 'react';

export const useCharacterCount = (limit) => {
  const [text, setText] = useState('');

  const handleTextChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const remainingCharacters = useMemo(() => limit - text.length, [text, limit]);

  return {
    text,
    handleTextChange,
    remainingCharacters,
    isLimitReached: remainingCharacters <= 0,
  };
};
