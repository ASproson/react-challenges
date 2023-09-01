import { useState } from 'react';
import { analyzeData } from './utils';
import { Button } from '../todos/Button';
import { AnalyzedInput } from './AnalyzedInput';

export const TextInput = () => {
  const [textInput, setTextInput] = useState('');

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTextInput = e.target.value;
    setTextInput(newTextInput);
  };

  const handleTextAreaReset = () => {
    setTextInput('');
  };

  const analyzedData = analyzeData(textInput);

  return (
    <div className="App">
      <AnalyzedInput analyzedData={analyzedData} />

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
