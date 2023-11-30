/* eslint-disable react/prop-types */
import Person from './Person';

/* eslint-disable no-unused-vars */
const List = ({ people }) => {
  return (
    <>
      <section className="list">
        {people.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
      </section>
    </>
  );
};
export default List;
