const downloadCode = (code) => {
  const codeElement = document.createElement('a');
  const file = new Blob([code], { type: 'text/plain' });
  codeElement.href = URL.createObjectURL(file);
  codeElement.download = 'code.txt';
  codeElement.click();
};

export default downloadCode;
