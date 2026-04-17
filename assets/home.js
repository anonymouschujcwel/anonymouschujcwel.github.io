var params = new URLSearchParams(window.location.search);

function sendTo(page) {
    location.href = '/szybkiinwalida/' + page + '.html?' + params;
}