document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    // Toggle search input visibility
    searchButton.addEventListener('click', function() {
        if (searchInput.style.display === 'none' || !searchInput.style.display) {
            searchInput.style.display = 'block';
        } else {
            searchInput.style.display = 'none';
        }
    });

    // JSON data for search and hero page redirection
    const redirects = {
        "hero 1": "pages/hero1/index.html",
        "hero 2": "pages/hero2/index.html",
        "hero 3": "pages/hero3/index.html",
        "hero 4": "pages/hero4/index.html",
        "hero 5": "pages/hero5/index.html",
        "card gallery": "pages/card-gallery/index.html"
    };

    // Event listener for search input
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const value = this.value.toLowerCase().trim();
            const redirectURL = redirects[value];
            if (redirectURL) {
                window.location.href = redirectURL;
            } else {
                // Check for hero-specific redirects
                const heroRedirect = redirects[value + '/index'];
                if (heroRedirect) {
                    window.location.href = heroRedirect;
                } else {
                    console.log("No matching redirect found.");
                }
            }
        }
    });
});
