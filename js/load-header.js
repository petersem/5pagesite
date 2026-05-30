document.getElementById("site-header").innerHTML = `
<nav id="main-nav">
    <div id="nav-left">
        <button id="nav-toggle" aria-label="Open menu">☰</button>
        <span id="site-title">ML Strength</span>
    </div>

    <div id="nav-links">
        <a href="/index.html"><i class="fa-duotone fa-solid fa-house"></i> Home</a>
        <a href="/html/about.html"><i class="fa-duotone fa-solid fa-circle-info"></i> About</a>
        <a href="/html/classes.html"><i class="fa-duotone fa-solid fa-person-running"></i> Classes</a>
        <a href="/html/locations.html"><i class="fa-duotone fa-solid fa-circle-info"></i> Locations</a>
        <a href="/html/contact.html"><i class="fa-duotone fa-solid fa-address-card"></i> Contact</a>
    </div>
</nav>

`;

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");

    toggle.addEventListener("click", () => {
        links.classList.toggle("open");
    });
});