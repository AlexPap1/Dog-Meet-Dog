async function newPetHandler(event) {
    event.preventDefault();
  
    const pet_name = document.querySelector('input[name="pet-name"]').value;
    const pet_info = document.querySelector('input[name="pet-info"]').value;
    //image value
  
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({
        pet_name,
        pet_info,
        //image
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-pet-form').addEventListener('submit', newPetHandler);