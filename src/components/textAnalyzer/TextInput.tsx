import { useState } from 'react';
import { Button } from '../todos/Button';
import { AnalyzedObjects } from './AnalyzedObjects';

const trimInput = (text: string) => {
  return text.trim().split(/\s+/).length;
};

const stripSpaces = (text: string) => {
  return text.replace(/\s+/g, '').length;
};

const analyzeObjects = (text: string) => {
  return [
    {
      title: 'Text Length',
      length: text.length,
    },
    {
      title: 'Word Count',
      length: text.length ? trimInput(text) : 0,
    },
    {
      title: 'Character Count',
      length: stripSpaces(text),
    },
  ];
};

export const TextInput = () => {
  const [textInput, setTextInput] = useState('');

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTextInput = e.target.value;
    setTextInput(newTextInput);
  };

  const handleTextAreaReset = () => {
    setTextInput('');
  };

  const analyzerObject = analyzeObjects(textInput);

  return (
    <div className="App">
      <AnalyzedObjects analyzedData={analyzerObject} />

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
