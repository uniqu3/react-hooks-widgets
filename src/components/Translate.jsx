import React, { useState } from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [translateText, setTranslateText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter text</label>
          <input
            value={translateText}
            onChange={(event) => setTranslateText(event.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label='Select a language'
        options={options}
        selected={selectedLanguage}
        onSelectedChange={setSelectedLanguage}
      />
      <div className='ui divider' />
      <h3 className='ui header'>Translation</h3>
      <Convert text={translateText} language={selectedLanguage} />
    </div>
  );
};

export default Translate;
