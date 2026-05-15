function saveData(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let age = document.getElementById("age").value;

    // Save data in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("date", date);
    localStorage.setItem("age", age);

    // Redirect to success page
    window.location.href = "success.html";
}