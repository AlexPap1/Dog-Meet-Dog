async function PetFormHandler(event) {
    event.preventDefault();
  
    const petname = document.querySelector('#petname-add').value.trim();
    const pet_info = document.querySelector('#petinfo-add').value.trim();
  
    if (petname && pet_info) {
      const response = await fetch('/api/pets', {
        method: 'post',
        body: JSON.stringify({
          petname,
          pet_info,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);

      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.new-pet-form').addEventListener('submit', PetFormHandler);
