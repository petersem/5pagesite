document.querySelectorAll("#contact-form input, #contact-form textarea, #contact-form select")
    .forEach(field => {
        field.addEventListener("blur", () => {
            field.classList.add("touched");
        });
    });

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    // Mark all fields as touched
    document.querySelectorAll("#contact-form input, #contact-form textarea, #contact-form select")
        .forEach(field => field.classList.add("touched"));

    // Radio group
    const radios = document.querySelectorAll("input[name='contactMethod']");
    const radioGroup = document.querySelector(".radio-group");
    const radioChecked = [...radios].some(r => r.checked);

    if (!radioChecked) {
        radioGroup.classList.add("touched");
    }

    // If invalid, block submit AND show browser validation
    if (!form.checkValidity() || !radioChecked) {
        e.preventDefault();
        form.reportValidity();   // ← THIS is the missing piece
        return;
    }
});


