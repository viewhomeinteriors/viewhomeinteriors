let imgsDiv = document.querySelector("#portfolio-imgs")

let servicesCarousal = document.querySelector(".services-c")

let aboutCarousal = document.querySelector(".about-c")

let homeCarousal = document.querySelector(".home-page")


let images = ["images/living-room-3.jpg", "images/living-room-1.jpg", "images/living-room-2.jpg", "images/living-room-4.jpg", "images/living-room-5.jpg", "images/living-room-6.jpg", "images/living-room-7.jpg", "images/kitchen-1.jpg", "images/kitchen-2.jpg", "images/kitchen-3.jpg", "images/kitchen-4.jpg", "images/kitchen-5.jpg", "images/kitchen-6.jpg", "images/kitchen-7.jpg", "images/bedroom-1.jpg",
    "images/bedroom-2.jpg", "images/bedroom-3.jpg",
]



let year = new Date().getFullYear()


images.map((img, index) => {
    var div = document.createElement("div");
    div.className = "col px-0";

    var image = document.createElement("img");
    image.className = "p-images";
    image.src = img;
    div.appendChild(image);
    imgsDiv.appendChild(div);



    var servicesCDiv = document.createElement('div');
    servicesCDiv.classList.add('carousel-item');
    if (index == 0) {
        servicesCDiv.classList.add('active');
    }

    let image1 = document.createElement('img');
    image1.src = img;
    image1.classList.add('d-block', 'services-img');
    image1.setAttribute('alt', '...');

    servicesCDiv.appendChild(image1)
    servicesCarousal.appendChild(servicesCDiv);


    var aboutCDiv = document.createElement('div');
    aboutCDiv.classList.add('carousel-item');
    if (index == 0) {
        aboutCDiv.classList.add('active');
    }

    let image2 = document.createElement('img');
    image2.src = img;
    image2.classList.add('d-block', 'about-img');
    image2.setAttribute('alt', '...');

    aboutCDiv.appendChild(image2)
    aboutCarousal.appendChild(aboutCDiv)


    var homeCDiv = document.createElement('div');
    homeCDiv.classList.add('carousel-item');
    if (index == 0) {
        homeCDiv.classList.add('active');
    }

    let image3 = document.createElement('img');
    image3.src = img;
    image3.classList.add('d-block', 'w-100', 'c-height', 'opacity-7');
    image3.setAttribute('alt', '...');

    let tempdiv = document.createElement('div')
    tempdiv.className = "carousel-caption"
    let h1 = document.createElement("h1")
    h1.innerText = "View Home"
    h1.className = "title"

    let span = document.createElement("span")
    span.textContent = " Interiors"

    h1.appendChild(span)
    tempdiv.appendChild(h1)
    homeCDiv.appendChild(image3)
    homeCDiv.appendChild(tempdiv)
    homeCarousal.appendChild(homeCDiv)
})

document.querySelector(".copyright").innerHTML = `© ${year} View Home Interiors. All Rights Reserved`


function openForm() {
    document.getElementById("message-div").style.display = "block";
}

function closeForm() {
    document.getElementById("message-div").style.display = "none";
}


function addEffect(x){
    x.classList.add("fa-bounce")
}

function removeEffect(x){
    x.classList.remove("fa-bounce")
}

function sendEmail(event){
    let form = document.getElementById("message-form")

    let name = form["name"]
    let email = form["email"]
    let message = form["message"]



    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bhanup.ln143@gmail.com",
        Password : "3A8D9905F2A4ACD0244A96A4989B68CFA77D",
        To : 'bhanu.vangati@gmail.com',
        From : "bhanup.ln143@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => {
        console.log(message)
      }
    );

    
    // Email.send({
    //     SecureToken : "f572bc99-cdf0-496c-96d8-82972ce59de2",
    //     To : 'bhanu.vangati@gmail.com',
    //     // To : 'navyam4.797@gmail.com',
    //     From : "bhanup.ln143@gmail.com",
    //     Subject : "This is the subject",
    //     Body : `Hi`
    // }).then(
    //   message => {
    //     console.log(message)
    //   }
    // );

    event.preventDefault()
}