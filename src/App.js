import React from 'react';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    alert('click on the button!');
  };

  return (
    <div className="App">
      <h1>Exemplo de Botão com Inline Styles</h1>
      {/* button with personalized color */}
      <Button label="red button" color="red" onClick={handleClick} />
      <Button label="green button" color="green" onClick={handleClick} />
    </div>
  );
}

export default App;
