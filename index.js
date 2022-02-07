
// toggle button display between block and none
// and toggle folding symbol
function toggle(parent) {

    // Get list element
    const sibling = parent.nextElementSibling;
    // Get →/↓ symbol element
    const child = parent.children;

    // If folding element is closed ( →)
    // display list element and change folding symbol to open
    if (child[0].innerHTML == " →") {
        sibling.style.display = "block";
        child[0].innerHTML = " ↓";
    }
    // If folding symbol is not closed
    // close symbol and hide list
    else {
        sibling.style.display = "none";
        child[0].innerHTML = " →";
    }
}