document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header-container");


    fetch("/pages/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            headerContainer.innerHTML = data;
            highlightActiveLink();
            const header = headerContainer.querySelector("header");
            if (header) {
                window.addEventListener("scroll", function(){
                    if(window.scrollY > 50){
                        header.classList.add("small-header")
                    }
                    else{
                        header.classList.remove("small-header")
                    }
                })
            }            
        })
        .catch(error => console.error("Error loading the header:", error));
});

function highlightActiveLink(){
    const currentPath = window.location.pathname.replace(/^\//, ""); // Get full path (e.g., "/projects/flashcards")
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href").replace(/^\//, "");
    
        // Check if the link href matches the full path
        if (currentPath.startsWith(linkPath)) {
            link.classList.add("active");
        }
    });
}
