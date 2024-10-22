const loadFooter = () => {
    // Get the existing footer element
    const footer = document.querySelector('footer');

    // Insert HTML for the footer content
    footer.innerHTML = `
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
    `;
};

// Add the event listener to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadFooter);
