;(function() {
    let items = document.querySelectorAll('.parent-color .color');

    if (items) {
        items.forEach(item => {
            item.addEventListener('click', (event) => {
                let color = item.getAttribute('data-color');

                let loaders = document.querySelectorAll('[data-loader]');

                loaders.forEach(load => {
                    load.setAttribute('title-color', color);
                    load.setAttribute('loader-color', color);
                });
            });
        });
    }
})();