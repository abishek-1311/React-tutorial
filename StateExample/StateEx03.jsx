    // Task 3: List of Items
    function ItemList() {
      const [items, setItems] = useState([]);
      const [newItem, setNewItem] = useState('');

      const handleAddItem = () => {
        if (newItem.trim() !== '') {
          setItems([...items, newItem.trim()]);
          setNewItem('');
        }
      };

      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleAddItem();
        }
      };

      return (
        <div className="container">
          <h2>Task 3: List of Items</h2>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter an item"
          />
          <button onClick={handleAddItem}>Add Item</button>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
