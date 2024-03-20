document.addEventListener('DOMContentLoaded', function() {
    // Retrieve saved profile name and email from local storage
    var savedName = localStorage.getItem('profileName');
    var savedEmail = localStorage.getItem('profileEmail');

    // Update the name on the main page if it exists
    if (savedName) {
        document.getElementById('username').innerText = savedName;
    }

    if (savedEmail) {
        document.getElementById('userEmail').innerText = savedEmail;
    }

    // Add event listener to profile button
    document.getElementById('profileBtn').addEventListener('click', function() {
        window.location.href = 'profile_page.html';
    });

    // Add event listener to logout button
    document.getElementById('logoutBtn').addEventListener('click', function() {
        // Add functionality for logging out
        alert('Logout clicked!');
    });

    // Add event listener to new task button
    document.getElementById('newTaskBtn').addEventListener('click', function() {
        document.getElementById('newTaskPopup').style.display = 'block';
    });

    // Add event listener to cancel task button
    document.getElementById('cancelTaskBtn').addEventListener('click', function() {
        document.getElementById('newTaskPopup').style.display = 'none';
    });

    // Add event listener to save task button
    document.getElementById('saveTaskBtn').addEventListener('click', function() {
        // Add functionality to save new task
        alert('New task saved!');
        document.getElementById('newTaskPopup').style.display = 'none';
    });

    // Add event listener to edit task buttons
    const editTaskButtons = document.querySelectorAll('.tasks-table tbody tr');
    editTaskButtons.forEach(row => {
        row.addEventListener('click', function() {
            // Get task details from the clicked row
            const taskId = row.getAttribute('data-id');
            const taskName = row.cells[0].innerText;

            // The date format in HTML is "DD-MM-YYYY", so we need to adjust it to "YYYY-MM-DD"
            const taskDateParts = row.cells[1].innerText.split('-');
            const taskDate = `${taskDateParts[2]}-${taskDateParts[1]}-${taskDateParts[0]}`;

            // Populate the fields in the edit popup with task details
            document.getElementById('editDescription').value = taskName;
            document.getElementById('editDate').value = taskDate;

            // Show the edit popup
            document.getElementById('editTaskPopup').style.display = 'block';
        });
    });

    // Add event listener to save edit button
    document.getElementById('saveEditBtn').addEventListener('click', function() {
        // Add functionality to save edited task
        alert('Task edited!');
        document.getElementById('editTaskPopup').style.display = 'none';
    });

    // Add event listener to delete task button
    document.getElementById('deleteTaskBtn').addEventListener('click', function() {
        // Add functionality to delete task
        alert('Task deleted!');
        document.getElementById('editTaskPopup').style.display = 'none';
    });

    // Add event listener to receive profile update messages
    window.addEventListener('message', function(event) {
        console.log("Message received:", event.data);
        if (event.data && event.data.type === 'updateProfile') {
            console.log("Updating profile...");
            // Update name field
            document.getElementById('username').innerText = event.data.name;
            // Save updated name to local storage
            localStorage.setItem('profileName', event.data.name);
        }
    });

    // Function to close popups
    function closePopup() {
        document.getElementById('newTaskPopup').style.display = 'none';
        document.getElementById('editTaskPopup').style.display = 'none';
    }
});
