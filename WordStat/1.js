var text = "      \t     1         \n\n\n\r\r\r       2345    ";

text = text.replace(/[\n\r]+/g, '\n');
var list = text.split('\n');

    for (var i = 0; i < list.length; i++) {
        list[i] = list[i].replace(/^[\s]+|[\s]+$/g, '');
    }

console.log(JSON.stringify(list));