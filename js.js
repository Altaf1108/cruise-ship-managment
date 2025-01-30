const apiBaseUrl = 'https://api.cruise-management.com/v1'; // Replace with the actual base URL of your API

// Get all cruise ships
async function getAllCruiseShips() {
  try {
    const response = await fetch(`${apiBaseUrl}/cruise-ships`);
    const data = await response.json();
    console.log(data); // Logs the response data (list of cruise ships)
  } catch (error) {
    console.error('Error fetching cruise ships:', error);
  }
}

// Get a single cruise ship by ID
async function getCruiseShipById(id) {
  try {
    const response = await fetch(`${apiBaseUrl}/cruise-ships/${id}`);
    const data = await response.json();
    console.log(data); // Logs the response data (single cruise ship details)
  } catch (error) {
    console.error('Error fetching cruise ship:', error);
  }
}

// Add a new cruise ship
async function addCruiseShip(cruiseShipData) {
  try {
    const response = await fetch(`${apiBaseUrl}/cruise-ships`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cruiseShipData), // Convert object to JSON
    });
    const data = await response.json();
    console.log('Cruise ship added:', data);
  } catch (error) {
    console.error('Error adding cruise ship:', error);
  }
}

// Update an existing cruise ship
async function updateCruiseShip(id, cruiseShipData) {
  try {
    const response = await fetch(`${apiBaseUrl}/cruise-ships/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cruiseShipData), // Convert object to JSON
    });
    const data = await response.json();
    console.log('Cruise ship updated:', data);
  } catch (error) {
    console.error('Error updating cruise ship:', error);
  }
}

// Delete a cruise ship
async function deleteCruiseShip(id) {
  try {
    const response = await fetch(`${apiBaseUrl}/cruise-ships/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log('Cruise ship deleted');
    } else {
      console.error('Failed to delete cruise ship');
    }
  } catch (error) {
    console.error('Error deleting cruise ship:', error);
  }
}

// Example usage
getAllCruiseShips();
getCruiseShipById(1); // Replace with actual ID
addCruiseShip({
  name: 'New Luxury Cruise',
  capacity: 3000,
  destination: 'Caribbean',
});
updateCruiseShip(1, {
  name: 'Updated Cruise Ship Name',
  capacity: 3200,
  destination: 'Alaska',
});
deleteCruiseShip(1); 