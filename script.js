// Mock credentials and door status
const savedUserID = "admin";
const savedPassword = "12345";
let doorLocked = true;
const visitorLog = [
    { image: "entry/enter_1.jpg", timestamp: "2024-10-22 14:35:10" },
    { image: "entry/enter_2.jpg", timestamp: "2024-10-22 15:00:15" },
];

// Handle login
function handleLogin() {
    const userID = document.getElementById("userid").value;
    const password = document.getElementById("password").value;

    if (userID === savedUserID && password === savedPassword) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("home-page").style.display = "block";
        loadVisitorLog();
    } else {
        document.getElementById("login-error").innerText =
            "Invalid User ID or Password!";
    }
    return false; // Prevent form submission
}

// Toggle door status
function toggleDoorStatus() {
    doorLocked = !doorLocked;
    const statusText = doorLocked
        ? "Door Status: Locked"
        : "Door Status: Unlocked";
    document.getElementById("door-status").innerText = statusText;
    const buttonText = doorLocked ? "Unlock Door" : "Lock Door";
    document.querySelector(".status-section button").innerText = buttonText;
}

// Load visitor log
function loadVisitorLog() {
    const visitorLogContainer = document.getElementById("visitor-log");
    visitorLogContainer.innerHTML = ""; // Clear previous entries

    visitorLog.forEach((visitor) => {
        const visitorEntry = document.createElement("div");
        visitorEntry.className = "visitor-entry";

        visitorEntry.innerHTML = `
            <p>File: ${visitor.image}</p>
            <p>Time: ${visitor.timestamp}</p>
            <img src="${visitor.image}" alt="Visitor Image" class="owner-image">
        `;
        visitorLogContainer.appendChild(visitorEntry);
    });
}
