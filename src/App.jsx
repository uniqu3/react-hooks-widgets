import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

import './App.css';

const items = [
  {
    title: 'Title one',
    content: 'This is first content',
  },
  {
    title: 'Title two',
    content: 'This is second content',
  },
  {
    title: 'Title three',
    content: 'This is third content',
  },
];

const options = [
  {
    label: 'Color red',
    value: 'red',
  },
  {
    label: 'Color blue',
    value: 'blue',
  },
  {
    label: 'Color green',
    value: 'green',
  },
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div className='ui container'>
      <Accordion items={items} />
      <Search />
      <Dropdown
        label='Select a color'
        selected={selectedOption}
        onSelectedChange={setSelectedOption}
        options={options}
      />
      <Translate />
    </div>
  );
};

export default App;
