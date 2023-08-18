import { useState } from 'react';
import { Title } from '../Title';

export const TextAnalyzer = () => {
  return (
    <>
      <Title titleText="Text Analyzer" />
      <TextInput />
    </>
  );
};

const TextInput = () => {
  const [textInput, setTextInput] = useState('');
  const [textLength, setTextLength] = useState(0);
  const [textWordsCount, setTextWordsCount] = useState(0);
  const [textCharactersCount, setTextCharactersCount] = useState(0);

  const handleTextInput = (e: any) => {
    setTextInput(e.target.value);
    setTextLength(textInput.length);
    setTextWordsCount(textInput.split(' ').length);
    setTextCharactersCount(textInput.split('').length);
  };

  return (
    <div className="App">
      <p>{textLength}</p>
      <p>{textWordsCount}</p>
      <p>{textCharactersCount}</p>

      <textarea
        onChange={(e) => handleTextInput(e)}
        className="border-2 border-black"
      ></textarea>
    </div>
  );
};
