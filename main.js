const form = document.querySelector("form");
const select = document.querySelector("select")
const ul = document.querySelector("ul");
const textarea = document.querySelector("textarea");

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const reviwSave = (e) => {
    e.preventDefault();

    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    h1.className = "display-1";
    h2.className = "display-6 text-secondary";
    h1.innerText = "Rating:" + select.value;
    h2.innerText = "Review:" + textarea.value;
    let li = document.createElement("li");
    li.className = "list-group-item rounded-0 shadow-sm"
    


    let Delbtn = document.createElement("button");
    Delbtn.className = "btn btn-danger rounded-0 float-end btn-sm";
    Delbtn.innerHTML = "Delete";

    li.appendChild(h1);
    
    li.appendChild(h2);
    li.appendChild(Delbtn);
    ul.appendChild(li);
    appendAlert("Review Saved", "success");
    form.reset();
}

const delfunction = (e) => {

    if (e.target.className.includes("btn-danger")) {
        let li = e.target.parentElement;
        if (window.confirm("You are sure ?")) {
            ul.removeChild(li);
            appendAlert("Review Delete", "danger");
        }
    }

}

ul.addEventListener("click", delfunction)
form.addEventListener("submit", reviwSave);