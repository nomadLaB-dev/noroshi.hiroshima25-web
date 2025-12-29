"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }); // Run on every render to catch new elements if any, or use [] if static. Strict mode might double trigger.

    return null;
}
