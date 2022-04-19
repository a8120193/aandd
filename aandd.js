function show(array) {
    var html = '';
    html = html + '<table border="1">';
    html = html + '<tr>';
    for (var i = 0; i < array.length; i++) {
        html = html + '<td>' + array[i] + '</td>';
    }
    html = html + '</tr>';
    html = html + '</table>';
    //document.getElementById('res').innerHTML = html;
    document.getElementById('res').insertAdjacentHTML('beforeend', html);
}

function createSequentialNumbers(array, n) {
    for (var i = 1; i <= n; i++) {
        array.push(i);
    }
    show(array);
}

function createRandomNumbers(array, n) {
    for (var k = 1; k <= n; k++) {
        var a = Math.random() * 100;
        a = Math.floor(a);
        array.push(a);
    }
    show(array);
}