function ListGroup() {
    const items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
        'San Antonio',
        'San Diego',
    ];
    return (
        <>
        <h1>ListGroup</h1>
        <ul className="list-group">
        {items.map(item => <li className="list-group-item">{item}</li>)}
        </ul>
      </>
    );
 
}

export default ListGroup;
