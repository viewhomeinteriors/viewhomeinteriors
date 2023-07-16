let imgsDiv = document.querySelector("#portfolio-imgs")

let servicesCarousal = document.querySelector(".services-c")

let aboutCarousal = document.querySelector(".about-c")

let homeCarousal = document.querySelector(".home-page")


let images = ["images/living-room-3.jpg", "images/living-room-1.jpg", "images/living-room-2.jpg", "images/living-room-4.jpg", "images/living-room-5.jpg", "images/living-room-6.jpg", "images/living-room-7.jpg", "images/kitchen-1.jpg", "images/kitchen-2.jpg", "images/kitchen-3.jpg", "images/kitchen-4.jpg", "images/kitchen-5.jpg", "images/kitchen-6.jpg", "images/kitchen-7.jpg", "images/bedroom-1.jpg",
    "images/bedroom-2.jpg", "images/bedroom-3.jpg",
]

let arrayOfImages = [{
        name: "images/living-room-3.jpg",
        type: "living"
    },
    {
        name: "images/living-room-1.jpg",
        type: "living"
    },
    {
        name: "images/living-room-2.jpg",
        type: "living"
    },
    {
        name: "images/living-room-4.jpg",
        type: "living"
    },
    {
        name: "images/living-room-5.jpg",
        type: "living"
    },
    {
        name: "images/living-room-6.jpg",
        type: "living"
    },
    {
        name: "images/living-room-7.jpg",
        type: "living"
    },
    {
        name: "images/kitchen-1.jpg",
        type: "kitchen"
    },
    {
        name: "images/kitchen-2.jpg",
        type: "kitchen"
    },
    {
        name: "images/kitchen-3.jpg",
        type: "kitchen"
    },
    {
        name: "images/kitchen-4.jpg",
        type: "kitchen"
    },
    {
        name: "images/kitchen-5.jpg",
        type: "kitchen"
    },
    {
        name: "images/kitchen-6.jpg",
        type: "kitchen"
    },
    {
        name: "images/kitchen-7.jpg",
        type: "kitchen"
    },
    {
        name: "images/bedroom-1.jpg",
        type: "bedroom"
    },
    {
        name: "images/bedroom-2.jpg",
        type: "bedroom"
    },
    {
        name: "images/bedroom-3.jpg",
        type: "bedroom"
    }
]



let year = new Date().getFullYear()


arrayOfImages.map(img => {
    var div = document.createElement("div");
    div.className = "col px-0";

    var image = document.createElement("img");
    image.className = "p-images";
    image.src = img.name;
    div.appendChild(image);
    imgsDiv.appendChild(div);
})


images.map((img, index) => {
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
    h1.innerText = "ViewHome"
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


function addEffect(x) {
    x.classList.add("fa-bounce")
}

function removeEffect(x) {
    x.classList.remove("fa-bounce")
}

async function sendEmail(event) {
    event.preventDefault()
    const toastLiveExample = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    let form = document.getElementById("message-form")

    if (form.checkValidity()) {
        let name = form["name"].value || ""
        let email = form["email"].value || ""
        let message = form["message"].value || ""

        let temp = {
            name,
            email,
            message
        }

        const response = await fetch("https://b31c-49-204-14-185.ngrok-free.app/send", {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(temp)
        });

        toastBootstrap.show()

        let msg = await response.json()

        if (msg.message.toLowerCase() == "email sent") {
            closeForm();
            toastBootstrap.show()
        }
    }

}

function filterImages(type) {

    let types = ["all", "living", "kitchen", "bedroom"]


    document.getElementById(type.toLowerCase()).classList.add("active-filter")
    document.getElementById(type.toLowerCase()).classList.remove("inactive")

    types
        .filter(ty => type != ty)
        .map(ty => {
            document.getElementById(ty).classList.remove("active-filter")
            document.getElementById(ty).classList.add("inactive")
        })

    while (imgsDiv.firstChild) {
        imgsDiv.removeChild(imgsDiv.firstChild);
    }
    if (type.toLowerCase() === "all") {
        arrayOfImages.map(img => {
            var div = document.createElement("div");
            div.className = "col px-0";

            var image = document.createElement("img");
            image.className = "p-images";
            image.src = img.name;
            div.appendChild(image);
            imgsDiv.appendChild(div);
        })
    } else {
        arrayOfImages
            .filter(img => img.type === type)
            .map(img => {
                var div = document.createElement("div");
                div.className = "col px-0";

                var image = document.createElement("img");
                image.className = "p-images";
                image.src = img.name;
                div.appendChild(image);
                imgsDiv.appendChild(div);
            })
    }

}