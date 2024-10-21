// commonFooter.js (ES6+ Version)

const loadFooter = () => {
    // Create the footer element
    const footer = document.createElement('footer');

    // Insert HTML for the footer content
    footer.innerHTML = `
    <footer>
        <ul class="footer-social-links">
                <a href="#">
                    <li><span></span></li>
                </a><a href="#">
                    <li><span></span></li>
                </a><a href="#">
                    <li><span></span></li>
                </a><a href="#">
                    <li><span></span></li>
                </a>
            </ul>
            <span class="footer-rights">Copyright ©2020 All rights reserved </span>
            </footer>
    `;

    // Append the footer to the body element
    document.body.append(footer);
};

// Add the event listener to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadFooter);
