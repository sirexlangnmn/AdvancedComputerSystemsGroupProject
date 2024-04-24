document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const fileInput = document.getElementById('input-file');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file.');
        return;
    }

    const formData = new FormData();
    formData.append('input-file', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to upload file.');
        }
        return response.text(); // or response.json() if expecting JSON response
    })
    .then(data => {
        console.log(data); // Log success message or handle response data
    })
    .catch(error => {
        console.error(error);
        alert('An error occurred while uploading the file.');
    });
});