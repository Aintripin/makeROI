// IIFE

(function(){
    "use strict";

    function disableScroll() {
        // Get the current page scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            // if any scroll is attempted, set this to the previous one
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }

    function enableScroll() {
        window.onscroll = () => {};
    }


    const form = document.getElementById("reachOut");
    form.addEventListener("click", (e) => {
        e.preventDefault();
        disableScroll();
    });

    const cancel = document.getElementById("cancel");
    const send = document.getElementById("send");
    const close = document.getElementById("pop_up_close");

    cancel.addEventListener("click", (e) => {
        e.preventDefault();
        enableScroll();
        });
    // send.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     enableScroll();
    // });
    close.addEventListener("click", (e) => {
        e.preventDefault();
        enableScroll();
    });

    function toggle_submit(){
        var blur = document.getElementById("blur");
        blur.classList.toggle("active");
        var popup = document.getElementById("popup");
        popup.classList.toggle("active");
    }


    // ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    const spinner = document.getElementById("spinner_id");
    // console.log(spinner.classList)
    send.addEventListener("click", (e) => {
        // e.preventDefault();
        // toggle_submit();
        // enableScroll();

        let switchStatesSpinner = () => {
            spinner.classList.remove("spinner_hidden");
            spinner.classList.add("spinner_visible");
            // console.log(spinner.classList);
        } 
        spinner.classList.add("spinner_visible");
        spinner.classList.remove("spinner_hidden");
        setTimeout(switchStatesSpinner, 10000);

    });


    // function validateForm() {
    //     let x = document.forms["userName"]["fname"].value;
    //     if (x == "") {
    //         alert("Name must be filled out");
    //         return false;
    //     }
    // }


    const name = document.getElementById("userName");
    const userNumber = document.getElementById("userNumber");
    const formPopUp = document.getElementById("form_pop_up");
    const errorElement = document.getElementById("error");

    // formPopUp.addEventListener
    send.addEventListener("click", (e) => {
    let messages = [];

    if (name.value === "" || name.value == null) {
        messages.push("Введите имя");
    }
    else if (name.value.length < 3) {
        messages.push("Имя должно быть не менее трёх символов")
    }

    if (userNumber.value === "" || userNumber.value == null) {
        messages.push("Введите Ваш номер телефона");
    }
    else if ((userNumber.value === "" || userNumber.value == null) && (userNumber.value === "" || userNumber.value == null)) {
        messages.push("Введите Ваше имя и номер телефона");
    }

    if (messages.length > 0) {
        let switchStates = () => {
            errorElement.classList.remove("err_visible");
            errorElement.classList.add("err_hidden");
        }
        
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
        errorElement.classList.add("err_visible");
        errorElement.classList.remove("err_hidden");
        setTimeout(switchStates, 3000);
    }
    
});

    // name.value
    // userNumber.value

    // class FifthTitle {
    //     #URL = "https://jsonplaceholder.typicode.com/todos";
    //     #ID = 5;

    //     #get() {
    //         fetch(FifthTitle.#URL)
    //             .then(res => {
    //                 if (res.ok) {
    //                     return res.json();
    //                 }
    //             })
    //             .then(resData => FifthTitle.#getTitleFromJson(resData))
    //             .then(title => console.log(title))
    //             .catch(({ message }) => console.log(message))
    //     }

    //     #getTitleFromJson(resData) {
    //         const itemWithTitle = resData.find(item => item.id === FifthTitle.#ID)
    //         const title = itemWithTitle.title

    //         return title
    //     }

    //     run(){
    //         FifthTitle.#get()
    //     }
    // }

    // const fifthTitle = new FifthTitle();
    // fifthTitle.run();   






    // let URL = "https://jsonplaceholder.typicode.com/todos";

    // function httpGet(URL){
    //     var xmlHttp = new XMLHttpRequest();
    //     xmlHttp.open( "GET", URL, false ); // false for synchronous request
    //     xmlHttp.send( null );
    //     console.log(xmlHttp.responseText);
    //     return xmlHttp.responseText;
    // }
    




    // function sendRequest(method, url, body = null) {
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();

    //         xhr.open(method, url);

    //         xhr.responseType = "json";

    //         xhr.onload = () => {
    //             if (xhr.status >= 400) {
    //                 reject(xhr.response)
    //             }
    //             else {
    //                 resolve(xhr.response)
    //             }
    //         }

    //         xhr.onerror = () => {
    //             reject(xhr.response)
    //         }

    //         xhr.send(JSON.stringify(body));
    //     })   
    // }

    // const body = {
    //     name: "user",
    //     age: 21
    // }

    // sendRequest("POST", URL, body)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

})();