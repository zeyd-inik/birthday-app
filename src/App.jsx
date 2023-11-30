/* eslint-disable no-unused-vars */
import { useState } from 'react';
import data from './data';
import List from './List.jsx';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <h2>{people.length} Birthdays Today</h2>
      <List people={people} />
    </main>
  );
};
export default App;
