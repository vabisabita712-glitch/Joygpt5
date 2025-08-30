document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
        const menuIcon = mobileMenuButton.querySelector('i');

        mobileMenuButton.addEventListener('click', function() {
            const isMenuOpen = mobileMenu.classList.toggle('active');

            if (isMenuOpen) {
                menuIcon.classList.remove('ri-menu-line');
                menuIcon.classList.add('ri-close-line');
                document.body.style.overflow = 'hidden';
            } else {
                menuIcon.classList.remove('ri-close-line');
                menuIcon.classList.add('ri-menu-line');
                document.body.style.overflow = '';
            }
        });
    }

    // Purchase Toast Notification
    const toast = document.getElementById("purchaseToast");
    if (toast) {
        const notifications = [
            { name: "Rahul Sharma", location: "Dhaka, Bangladesh", timeAgo: "2 minutes ago", package: "3 Month Package" },
            { name: "Priya Chatterjee", location: "Chittagong, Bangladesh", timeAgo: "5 minutes ago", package: "6 Month Package" },
            { name: "John Doe", location: "New York, USA", timeAgo: "8 minutes ago", package: "1 Month Package" },
        ];
        const buyerName = document.getElementById("buyerName");
        const buyerLoc = document.getElementById("buyerLocation");
        const buyerPkg = document.getElementById("buyerPackage");
        const buyerTime = document.getElementById("buyerTime");
        let current = 0;

        const showNotification = () => {
            const n = notifications[current];
            buyerName.textContent = n.name;
            buyerLoc.textContent = n.location;
            buyerPkg.textContent = n.package;
            buyerTime.textContent = n.timeAgo;

            toast.classList.remove("translate-y-full", "opacity-0");

            setTimeout(() => {
                toast.classList.add("translate-y-full", "opacity-0");
                setTimeout(() => {
                    current = (current + 1) % notifications.length;
                }, 500);
            }, 4000);
        };

        // Start notifications after a delay
        setTimeout(() => {
            showNotification();
            setInterval(showNotification, 6000);
        }, 2000);
    }
});
