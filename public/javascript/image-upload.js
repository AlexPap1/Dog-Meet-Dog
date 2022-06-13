// Image Upload Logic
window.addEventListener("load", function () {
    const form = document.getElementById("upload");
  
    function uploadImage(e) {
      e.preventDefault();
      const formData = new FormData(upload);
      for (let [name, value] of formData.entries()) {
        console.log(name, value);
      }
      fetch("/api/image", {
        method: "POST",
        body: formData,
      }).then((res) => {
        if (res.ok) {
          console.log("Complete!");
        }
      });
    }
  
    form.addEventListener("submit", uploadImage);
});