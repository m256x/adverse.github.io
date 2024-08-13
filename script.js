document.addEventListener('DOMContentLoaded', function() {

    const updatePurchaseDetails = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const product = urlParams.get('product');
        const plan = urlParams.get('plan');

        const productNameElement = document.getElementById('product-name');
        const planTypeElement = document.getElementById('plan-type');

        if (productNameElement) {
            productNameElement.textContent = product || 'No product selected';
        }

        if (planTypeElement) {
            planTypeElement.textContent = plan || 'No plan selected';
        }
    };


    const handleScroll = () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);


    updatePurchaseDetails();
});
document.addEventListener('DOMContentLoaded', function () {
    const fallDownElements = document.querySelectorAll('.fall-down');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fallDownElements.forEach(el => {
        observer.observe(el);
    });
});
