const form = document.getElementById("upload");

async function newFormHandler() {
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;
    
    
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content,
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
};

// Image Upload Logic
function uploadImage() {
    const formData = new FormData(upload);
    for (let [name, value] of formData.entries()) {
    }
    fetch("/api/dashboard/create/", {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        console.log("Complete!");
      }
    });
};

function formUploader(event) {
  event.preventDefault();
  uploadImage();
  newFormHandler();
}
  
form.addEventListener('submit', formUploader);