alert("hello");

var work = prompt("what do you want to see? thobe or bookmark?");

while (work !== 'thobe' && work !== 'bookmark') {
    work = prompt('please choose Thobe/bookmark');
}
var numOfItems = prompt('How many items do you want?');

var stitsh = '';
var theResult = '';

if (work == 'thobe') {
    stitsh = ('<img src="photo/work 3.jpg" width="200px"/>');

} else if (work == 'bookmark') {
    stitsh = ('<img src="photo/work 2.jpg"  width="200px"/>');

}

for (var i = 0; i < numOfItems; i++) {
    theResult += stitsh
}
console.log(theResult);
document.write(theResult);