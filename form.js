document.addEventListener("DOMContentLoaded", function() {
    // Get all job elements
    const jobElements = document.querySelectorAll(".job");

    // Add click event listener to each job element
    jobElements.forEach(jobElement => {
        jobElement.addEventListener("click", function() {
            // Redirect to a different page with text boxes based on job ID
            const jobId = jobElement.id;
            window.location.href = `form.html?job=${jobId}`;
        });
    });
});
