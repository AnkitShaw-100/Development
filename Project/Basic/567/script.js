document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('resumeUpload');
    const progressBar = document.getElementById('progress');
    const feedbackSection = document.getElementById('feedbackSection');
    const feedbackText = document.getElementById('feedbackText');
    const submitButton = document.querySelector('button');

    // Function to simulate file upload
    const simulateUpload = () => {
        const total = 100;
        let uploadProgress = 0;

        const interval = setInterval(() => {
            if (uploadProgress < total) {
                uploadProgress += 10; // Increment progress
                progressBar.value = uploadProgress;
            } else {
                clearInterval(interval);
                submitForm(); // Call function to submit form data
            }
        }, 300); // Simulates progress every 300ms
    };

    // Submit the form to the server
    const submitForm = async () => {
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('resume', fileInput.files[0]);

        try {
            // Replace this URL with your actual backend endpoint
            await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData
            });
            displayFeedback("Your resume has been successfully uploaded!", "success");
        } catch (error) {
            displayFeedback("Error uploading your resume. Please try again.", "error");
        }
    };

    // Display feedback after file upload
    const displayFeedback = (message, type) => {
        feedbackSection.classList.remove('hidden');
        feedbackText.textContent = message;

        // Change feedback color based on type
        if (type === "success") {
            feedbackText.style.color = "#28a745"; // Green for success
        } else {
            feedbackText.style.color = "#dc3545"; // Red for error
        }
    };

    // Validate form input
    const validateForm = () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const file = fileInput.files[0];

        if (name === "" || email === "" || !file) {
            displayFeedback("Please fill in all the details and upload your resume.", "error");
            return false;
        }
        return true;
    };

    // Handle form submission
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Reset progress and feedback
        progressBar.value = 0;
        feedbackSection.classList.add('hidden');

        if (validateForm()) {
            simulateUpload(); // Start the upload simulation
        }
    });
});
