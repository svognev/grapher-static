
        window.App = {};
        window.Global = { rootUrl: 'https://ourworldindata.org/grapher' };

        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'https://ourworldindata.org/grapher/assets/commons.css?v=commons.bundle.a53e7ff5152eb27fe8df.css';
        document.head.appendChild(link);

        var hasPolyfill = false;
        var hasGrapher = false;

        var loadedScripts = 0;
        function checkReady() {
            loadedScripts += 1;
            if (loadedScripts == 3) {
                window.Grapher.embedAll();
            }
        }

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = checkReady;
        script.src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,fetch"
        document.head.appendChild(script);

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = checkReady;
        script.src = 'https://ourworldindata.org/grapher/assets/commons.js?v=commons.bundle.a53e7ff5152eb27fe8df.js';
        document.head.appendChild(script);

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = checkReady;
        script.src = 'https://ourworldindata.org/grapher/assets/charts.js?v=charts.bundle.dcf65b68eddaba4c6a58.js';
        document.head.appendChild(script);
    