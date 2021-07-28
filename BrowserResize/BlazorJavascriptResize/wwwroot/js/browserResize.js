var browserResize = browserResize || {}

browserResize.getInnerWidth = function () {
    const surveyCom = document.querySelector('.mt-4');
    return surveyCom.offsetWidth;
}


browserResize.getInnerHeight = function () {
    const surveyCom = document.querySelector('.mt-4');
    return surveyCom.offsetHeight;
}

browserResize.getSurveySize = function () {
    const surveyCom = document.querySelector('.mt-4');
    return {
        width: surveyCom.offsetWidth,
        height: surveyCom.offsetHeight
    };
}

browserResize.registerResizeCallback = function () {
    window.addEventListener("resize", browserResize.resized);
}

browserResize.resized = function () {
    //DotNet.invokeMethod("BrowserResize", 'OnBrowserResize');
    DotNet.invokeMethodAsync("BlazorJavascriptResize", 'OnBrowserResize').then(data => data);
}

browserResize.ApiObserver = function () {
    const myObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
            console.log('width', entry.contentRect.width);
            console.log('height', entry.contentRect.height);
        });
    });

    const someEl = document.querySelector('.mt-4');
    myObserver.observe(someEl);
}
