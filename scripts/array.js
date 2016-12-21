// write a function that print all tags with a name and src attribute.
// first find all tags with a name
// check all tags that are returned by previous statement if it has src attribute.
// If src attribute is present then print the src attribute on console.

function printTags(tagName) {
    var tags = document.getElementsByTagName(tagName)
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if (tag.src) {
            console.log(tag.src)
        }
    }
}