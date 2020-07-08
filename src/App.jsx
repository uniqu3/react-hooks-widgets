import React from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';

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

const App = () => {
  return (
    <div>
      <Accordion items={items} />
      <Search />
    </div>
  );
};

export default App;
