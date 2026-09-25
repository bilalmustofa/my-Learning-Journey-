
function ListGroup() {

    const cites = ['Addis Ababa', 'Wollo', 'Adama', 'Wolkite', 'Baher Dar'];
    const fruits =['Banana', 'Apple', 'Avocado', 'Orange'];
    
  return (
    <>
    <h1>List of items</h1>
      <div>
        <ul>
            <h3>Cites List</h3>
          {cites.map((city, i) => (
            <li key={i}>{city}</li>
          ))}
        </ul>

        <ol>
          <h3>Fruits List</h3>
          {fruits.map((fruit, i) => (
            <li key={i}>{fruit}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ListGroup;
