// Task 2: Input Field with State
    function InputField() {
      const [inputValue, setInputValue] = useState('');

      const handleChange = (event) => {
        setInputValue(event.target.value);
      };

      return (
        <div className="container">
          <h2>Task 2: Input Field with State</h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type something..."
          />
          <div className="display-text">
            <p>You typed: <strong>{inputValue}</strong></p>
          </div>
        </div>
      );
    }
