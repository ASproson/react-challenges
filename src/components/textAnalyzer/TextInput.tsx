import { useState } from 'react';
import { Button } from '../todos/Button';

export const TextInput = () => {
  const [textInput, setTextInput] = useState('');

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setTextInput(newText);
  };

  const handleTextAreaReset = () => {
    setTextInput('');
  };

  const words = textInput.length ? textInput.trim().split(/\s+/) : '';
  const wordCount = words.length;
  const charCount = textInput.replace(/\s+/g, '').length;

  return (
    <div className="App">
      <p>Text length: {textInput.length}</p>
      <p>Word count: {wordCount}</p>
      <p>Character count: {charCount}</p>

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
