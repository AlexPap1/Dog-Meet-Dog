async function newFormHandler(event) {
    event.preventDefault();
  
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

// Image Upload testing
// Image Upload Logic
//window.addEventListener("load", function () {
  const form = document.getElementById("upload");

  function uploadImage(e) {
    e.preventDefault();
    const formData = new FormData(upload);
    for (let [name, value] of formData.entries()) {
      // console.log(name, value);
    }
    fetch("/api/dashboard/create/", {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        console.log("Complete!");
      }
    });
  }
  form.addEventListener("submit", uploadImage);
//});
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);