document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value || "Anonymous";
    let email = document.getElementById("email").value || "Not Provided";
    let sentiment = document.getElementById("sentiment").value;
    let category = document.getElementById("category").value;
    let message = document.getElementById("message").value;
    let rating = document.getElementById("rating").value;

    let feedback = { name, email, sentiment, category, message, rating };
    let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
    feedbackList.push(feedback);
    localStorage.setItem("feedback", JSON.stringify(feedbackList));

    alert("Thank you for your feedback!");
    document.getElementById("feedbackForm").reset();
});

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
    
    if (pageId === "dashboard") {
        loadFeedback();
    }
}

function loadFeedback() {
    let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
    let list = document.getElementById("feedbackList");
    list.innerHTML = "";
    feedbackList.forEach((feedback, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${feedback.name} (${feedback.email})</strong> - ${feedback.sentiment} | Category: ${feedback.category} | Rating: ${feedback.rating}/5<br>${feedback.message}`;
        list.appendChild(li);
    });
}

// Show home page initially
showPage("home");
