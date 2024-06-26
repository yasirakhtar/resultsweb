(function() {
    var redirectUrl = 'https://example.com'; // Redirect URL

    function detectDevTools() {
        const threshold = 160;
        const devtools = new Image();
        let open = false;

        Object.defineProperty(devtools, 'id', {
            get: function() {
                open = true;
                window.location.href = redirectUrl;
            }
        });

        setInterval(function() {
            open = false;
            console.log(devtools);
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;

            if ((widthThreshold || heightThreshold) && !open) {
                window.location.href = redirectUrl;
            }
        }, 1000);
    }

    window.onload = detectDevTools;
})();