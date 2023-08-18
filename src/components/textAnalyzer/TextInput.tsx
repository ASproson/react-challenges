import { useState } from 'react';
import { Button } from '../todos/Button';

export const TextInput = () => {
  const [textInput, setTextInput] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [textWordsCount, setTextWordsCount] = useState(0);
  const [textCharactersCount, setTextCharactersCount] = useState(0);

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    setTextInput(newText);
    setTextLength(newText.length);

    if (newText.trim() === '') {
      setTextWordsCount(0);
      setTextCharactersCount(0);
    } else {
      setTextWordsCount(newText.trim().split(/\s+/).length);
      setTextCharactersCount(newText.replace(/\s+/g, '').length);
    }
  };

  const handleTextAreaReset = () => {
    setTextInput('');
    setTextLength(0);
    setTextWordsCount(0);
    setTextCharactersCount(0);
  };

  return (
    <div className="App">
      <p>Text length: {textLength}</p>
      <p>Word count: {textWordsCount}</p>
      <p>Character count: {textCharactersCount}</p>

      <div className="pt-4 pb-4">
        <textarea
          id="textArea"
          onChange={(e) => handleTextInput(e)}
          value={textInput}
          className="border-[1.5px] rounded-lg p-2 border-black w-72 h-40"
        />
      </div>

      <Button onClick={handleTextAreaReset} defaultStyling>
        Clear Text Area
      </Button>
    </div>
  );
};
