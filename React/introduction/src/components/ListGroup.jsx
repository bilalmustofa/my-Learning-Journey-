
function ListGroup() {

    const cites = ['Addis Ababa', 'Wollo', 'Adama', 'Wolkite', 'Baher Dar'];
    // let cites = []
    const fruits =['Banana', 'Apple', 'Avocado', 'Orange'];
    // let fruits = [];

   // Event handler
    const handleClick = () => {
        console.log('Clicked')
    }
    
  return (
    <>
    <h1>List of items</h1>
      <div>
        <ul>
            <h3>Cites List</h3>
            {cites.length === 0 ? <p>Cites Not Found</p> : null}
          {cites.map((city, i) => (
            <li key={i} onClick={() => console.log(city, 'Index: ', i )}>{city}</li>
          ))}
        </ul>

        <ol>
          <h3>Fruits List</h3>
          {fruits.length === 0 && <p>fruits Not Found</p>}
          {fruits.map((fruit, i) => (
            <li key={i} onClick={handleClick}>{fruit}</li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ListGroup;
