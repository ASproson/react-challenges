import { useState } from 'react';
import { Button } from '../todos/Button';

export const TextInput = () => {
  const [textInput, setTextInput] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [textWordsCount, setTextWordsCount] = useState(0);
  const [textCharactersCount, setTextCharactersCount] = useState(0);

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
    setTextLength(textInput.length + 1);
    setTextWordsCount(textInput.split(' ').length);
    setTextCharactersCount(textInput.split(' ').join('').length + 1);
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

// textWordsCount accepts empty spaces as words
// Probably a better way to track all of the state more effectively
