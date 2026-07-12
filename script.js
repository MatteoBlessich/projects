document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll("section, .card, .result-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });


    const counters = document.querySelectorAll(".result-card h3");

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.innerText.replace(/\D/g, "");
            const prefix = counter.innerText.replace(/[0-9]/g, "");

            let count = 0;
            const step = target / 80;

            const interval = setInterval(() => {
                count += step;

                if (count >= target) {
                    counter.innerText = prefix + target;
                    clearInterval(interval);
                } else {
                    counter.innerText = prefix + Math.floor(count);
                }
            }, 20);
        };

        updateCount();
    });


    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.add("clicked");

            setTimeout(() => {
                card.classList.remove("clicked");
            }, 200);
        });
    });

});