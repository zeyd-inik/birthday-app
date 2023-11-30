import Person from './Person';

/* eslint-disable no-unused-vars */
const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} />;
      })}
    </section>
  );
};
export default List;
