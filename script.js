window.addEventListener("load", () => {
    const faq = document.querySelector(".faq-section");
    faq.addEventListener("mouseover", () => {
        const faqh1 = document.querySelector(".faq-header h1");
        faqh1.classList.add("h1TransitionBlack");
    })

    const argument = document.querySelector(".argument");
    argument.addEventListener("mouseover", () => {
        const argumenth1 = document.querySelector(".argument-header h1");
        argumenth1.classList.add("h1TransitionBlack");
    })

    const testimonial = document.querySelector(".testimonial-section");
    testimonial.addEventListener("mouseover", () => {
        const testimonialh1 = document.querySelector(".testimonial-header h1");
        testimonialh1.classList.add("h1TransitionBlack");
    })

    const footerInput = document.querySelector(".newsletter-container form input[type=email]");

    footerInput.addEventListener("focus", () => {
    footerInput.classList.add("formInputBorder");
    });

    footerInput.addEventListener("blur", () => {
  footerInput.classList.remove("formInputBorder");
    });

})

