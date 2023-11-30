const Person = ({ name, age, image }) => {
  return (
    <article className="person">
      <img src={image} alt={name} />
      <div className="person-info">
        <h3>{name}</h3>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
