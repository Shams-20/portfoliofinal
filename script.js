function showPopUp() {
    const popup = document.getElementById("popup-container");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");

    popupTitle.innerText = "Welcome to My Portfolio!";
    popupDescription.innerText = "Thank you for visiting my portfolio. Here, you will find information about my work, projects, and skills. Feel free to explore and reach out if you want to connect!";
    
    popup.style.display = "flex";
}

function closePopUp() {
    document.getElementById("popup-container").style.display = "none";
}

function showProjectPopUp(projectName) {
    const popup = document.getElementById("popup-container");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");

    if (projectName === "Interactive Web Application") {
        popupTitle.innerText = "Interactive Web Application";
        popupDescription.innerText = "This project demonstrates my ability to build a complex, responsive web application that allows users to interact with live data. Technologies used include React.js, API integration, and more.";
    } else if (projectName === "E-commerce Platform") {
        popupTitle.innerText = "E-commerce Platform";
        popupDescription.innerText = "A full-scale e-commerce solution with a dynamic product catalog, secure authentication, and seamless payment integration. Built using HTML, CSS, JavaScript, Bootstrap, Node.js, and Express.";
    } else if (projectName === "Personal Blog") {
        popupTitle.innerText = "Personal Blog";
        popupDescription.innerText = "A custom-built blogging platform focusing on user engagement and SEO best practices. Features include a custom CMS, comment sections, and social media integration.";
    }

    popup.style.display = "flex";
}
