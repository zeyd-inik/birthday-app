/* eslint-disable no-unused-vars */
import { useState } from 'react';
import data from './data';
import List from './List.jsx';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main className="app">
      <div className="container">
        <h2>{people.length} Birthdays Today</h2>
        <List people={people} />
        <button
          onClick={() => setPeople([])}
          type="button"
          className="btn-block"
        >
          clear all
        </button>
      </div>
    </main>
  );
};
export default App;
