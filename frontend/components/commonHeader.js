// commonHeader.js (ES6+ Version)

const loadHeader = () => {
    // Create the header element
    const header = document.createElement('header');

    // Insert HTML for the navigation
    header.innerHTML = `
        <div class="container-fluid">
            <nav class="common-header">
                <ul class="common-header-list">
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;

    // Insert the header before the first element in the body
    document.body.prepend(header);
};

// Add the event listener to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadHeader);
