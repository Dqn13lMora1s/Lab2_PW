document.getElementById("saveProfileBtn").addEventListener("click", function() {
    // Get the updated values
    var newName = document.getElementById("nome").value;
    var newEmail = document.getElementById("email").value;

    // Save the updated values to local storage
    localStorage.setItem('profileName', newName);
    localStorage.setItem('profileEmail', newEmail);

    // Redirect back to the main page with updated parameters
    window.location.href = "index.html?name=" + encodeURIComponent(newName) + "&email=" + encodeURIComponent(newEmail);

    // Send message to parent window (main page) with updated profile name
    window.parent.postMessage({ type: 'updateProfile', name: newName }, '*');
});
