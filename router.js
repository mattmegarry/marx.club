const route = (event, pathInstruction) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", pathInstruction);
    handleLocation();
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const main = document.getElementsByTagName('main')[0];
    const html = await getHtml("format" + ".html");
    console.log(html);
    /*
    if (path === "/") {
        window.renderModel();
        document.getElementById("model").style.display = "block";
        document.getElementById("non-webgl-page").style.display = "none";
    } else {
        //dddd
        return load404Page();
    }
    */
};

const getHtml = async (htmlPath) => {
    try {
        const res = await fetch(htmlPath);
        return res.text();
    } catch (e) {
        console.log(e);
    }
};