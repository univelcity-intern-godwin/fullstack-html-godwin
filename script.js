

// active navigation links color
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".nav-links a");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            
            // Remove active class from all links
            links.forEach(function(link) {
                link.classList.remove("active");
            });
            
            // Add active class to the clicked link
            this.classList.add("active");
        });
    });
});
