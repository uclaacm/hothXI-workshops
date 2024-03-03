import React, { useState, useEffect } from 'react';

const App = () => {
  // Initializing form state with an object for plant data
  const [plantData, setPlantData] = useState({
    name: '',
    type: '',
    age: ''
  });

  const [plants, setPlants] = useState([]); // State to store fetched plants

  // Function to update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlantData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to post plant data to the server
  const addPlant = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/plants", {
        method: 'POST',
        body: JSON.stringify({
          ...plantData,
          age: parseFloat(plantData.age) // Ensuring age is sent as a number
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add plant. Please try again.');
      }
      const result = await response.json();
      console.log('Plant added successfully:', result);
      // Optionally reset form or provide user feedback
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

    // Function to fetch plants from the server
    const fetchPlants = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/plants");
        if (!response.ok) {
          throw new Error('Failed to fetch plants. Please try again.');
        }
        const plants = await response.json();
        console.log('Fetched plants:', plants);
        setPlants(plants);
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    // Fetch plants on component mount
    useEffect(() => {
      fetchPlants();
    }, []);



  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing the default form submit behavior
    addPlant();
    // Optionally reset the form here if needed
    setPlantData({ name: '', type: '', age: '' });
  };

  return (
    <div>
      <h1>Add a New Plant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={plantData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <input
            id="type"
            type="text"
            name="type"
            value={plantData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            name="age"
            value={plantData.age}
            onChange={handleChange}
            step="0.1"
            required
          />
        </div>
        <button type="submit">Add Plant</button>
      </form>

      <h2>Current Plants</h2>
      <ul>
        {plants.map((plant, index) => (
          <li key={index}>
            Name: {plant.name}, Type: {plant.type}, Age: {plant.age}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default App;
