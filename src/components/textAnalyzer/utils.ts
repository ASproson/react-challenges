const trimInput = (text: string): number => {
  return text.trim().split(/\s+/).length;
};

const stripSpaces = (text: string): number => {
  return text.replace(/\s+/g, '').length;
};

export const analyzeData = (text: string) => {
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
