import React, { useState } from 'react';
import '../styles/Menu.css'

function Menu() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <button onClick={() => handleClick('Organisation')}>Organisation</button>
      <button onClick={() => handleClick('School')}>School</button>
      <button onClick={() => handleClick('Learn')}>Learn</button>

      {selectedOption === 'Organisation' && (
        <div>
          <button onClick={() => window.location.href='https://zela.org/'}>ZELA</button>
          <button onClick={() => window.location.href='https://enactus.org/'}>Enactus</button>
        </div>
      )}

      {selectedOption === 'School' && (
        <div>
          <button onClick={() => window.location.href='https://en.wikipedia.org/wiki/O-level'}>O'level</button>
          <button onClick={() => window.location.href='https://en.wikipedia.org/wiki/A-level'}>A'level</button>
          <button onClick={() => window.location.href='https://en.wikipedia.org/wiki/Primary_school'}>Primary</button>
        </div>
      )}
    </div>
  );
}

export default Menu;