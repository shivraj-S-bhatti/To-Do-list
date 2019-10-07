function Exec() {
    content = document.getElementById('todoitem').value
    if (content.length == 0) {
        window.alert('Nothing to add')
    } else {
        Myappend(content)

        document.getElementById('todoitem').value = ''
    }
}

function Myappend(text) {
    var node = document.createElement("LI")
    var textnode = document.createTextNode(text);
    node.appendChild(textnode)
    document.getElementById("penL").appendChild(node)



}

function crBTN() {
    var x = document.createElement("BUTTON");
    x.addEventListener("click", Dlt)
    var t = document.createTextNode("REMOVE");
    x.appendChild(t);
    document.getElementById('penL').appendChild(x);
}

function Dlt() {
    console.log('its working')
    var list = document.getElementById("penL");
    list.removeChild(list.childNodes[1]);
}

function rmELE() {
    var indx = document.getElementById('Rpen').value
    var list = document.getElementById("penL");
    list.removeChild(list.childNodes[3]);
    console.log(indx)

}