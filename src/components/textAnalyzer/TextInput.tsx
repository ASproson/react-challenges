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

  const charCount = textInput.replace(/\s+/g, '').length;
  const words = textInput.length ? textInput.trim().split(/\s+/) : '';

  const analyzerObject = [
    {
      title: 'Text Length',
      data: textInput.length,
    },
    {
      title: 'Word Count',
      data: words.length,
    },
    {
      title: 'Character Count',
      data: charCount,
    },
  ];

  return (
    <div className="App">
      <>
        {analyzerObject.map((obj) => {
          return (
            <div key={obj.title}>
              <span>{obj.title}: </span>
              <span>{obj.data}</span>
            </div>
          );
        })}
      </>

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
