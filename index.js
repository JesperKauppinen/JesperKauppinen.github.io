
// toggle button display between block and none
function toggle(parent) {

    // Get sibling of parent element
    const sibling = parent.nextElementSibling;
    const child = parent.children;

    console.log(sibling.style.display);00

    if (child[0].innerHTML == " →") {
        sibling.style.display = "block";
        child[0].innerHTML = " ↓";
    }
    else {
        sibling.style.display = "none";
        child[0].innerHTML = " →";
    }
}