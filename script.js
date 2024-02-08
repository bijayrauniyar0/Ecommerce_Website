const toggled = document.querySelector('.toggle')
const toggleBtn = document.querySelector('.toggle i')
const dropMenu = document.querySelector('.drop-responsive')

toggled.onclick = function()
{
    dropMenu.classList.toggle('open')
    const isOpen = dropMenu.classList.contains('open')

    toggleBtn.classList = isOpen
    ?'fa-solid fa-x'
    :'fa-solid fa-bars'
}


function openProducts(evt, productName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(productName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
function openSubProducts(evt, subProductName) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("sub-tab-content");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].classList.remove("active");
    }
    subtablinks = document.getElementsByClassName("subTab");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].classList.remove("active");
    }
    document.getElementById(subProductName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
