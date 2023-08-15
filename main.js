$(document).ready(function() {
    init();
});

function init() {
    loadContent("#fp-content", "./frontpage/fp.html");
    // navigation buttons
    $('#fp-home-btn').on('click', ()=>{ // home
        loadContent("#fp-content", "./frontpage/fp.html");
    });
    
    $('#fp-login-btn').on('click', ()=>{ // books
        loadContent("#fp-content", "./private/protected.html");
    });
}

function loadContent(id, src) {
    $(id).load(src);
};