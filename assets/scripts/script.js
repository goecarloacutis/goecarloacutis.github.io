// Animação de scroll
// ALL
const scrollObserverN = new IntersectionObserver((entries) =>  {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;

            target.classList.add('move-in');

            setTimeout(() => {
                target.classList.add('fade-in');
            }, 300);

            scrollObserverN.unobserve(target);
        } 
    });
}, {
    threshold: 0.1
});

const elementsToAnimate = document.querySelectorAll('.hidden');
const fAnimate = document.querySelectorAll('.hidden-f');

elementsToAnimate.forEach((el) => scrollObserverN.observe(el));
fAnimate.forEach((el) => scrollObserverN.observe(el));

// Main
const scrollObserver = new IntersectionObserver((entries) =>  {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;

            target.classList.add('move-in');

            setTimeout(() => {
                target.classList.add('fade-in');
            }, 50);

            scrollObserver.unobserve(target);
        } 
    });
}, {
    threshold: 0.1
});

const mAnimate = document.querySelectorAll('.hidden-m');

mAnimate.forEach((el) => scrollObserver.observe(el));

// hN

// const scrollObserver2 = new IntersectionObserver((entries) =>  {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             const target = entry.target;

//             target.classList.add('move-in');

//             setTimeout(() => {
//                 target.classList.add('fade-in');
//             }, 100);

//             scrollObserver2.unobserve(target);
//         } 
//     });
// }, {
//     threshold: 0.1
// });

// const hAnimate = document.querySelectorAll('.hidden-h');

// hAnimate.forEach((el) => scrollObserver2.observe(el));
