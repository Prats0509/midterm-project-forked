import './list-products.scss';

// images
import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");

    const products = [
        { title: "Product 1", image: "assets/images/image1.jpg", price: "$99.99" },
        { title: "Product 2", image: "assets/images/image2.jpg", price: "$89.99" },
        { title: "Product 3", image: "assets/images/image3.jpg", price: "$79.99" },
        { title: "Product 4", image: "assets/images/image4.jpg", price: "$69.99" },
        { title: "Product 5", image: "assets/images/image5.jpg", price: "$59.99" },
        { title: "Product 6", image: "assets/images/image6.jpg", price: "$49.99" },
        { title: "Product 7", image: "assets/images/image7.jpg", price: "$39.99" },
        { title: "Product 8", image: "assets/images/image8.jpg", price: "$29.99" },
        { title: "Product 9", image: "assets/images/image9.jpg", price: "$19.99" },
        { title: "Product 10", image: "assets/images/image10.jpg", price: "$9.99" },
        { title: "Product 11", image: "assets/images/image11.jpg", price: "$5.99" },
        { title: "Product 12", image: "assets/images/image12.jpg", price: "$2.99" }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("col-md-4", "mb-4");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = product.image;
        img.alt = product.title;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = product.title;

        const description = document.createElement("p");
        description.classList.add("card-text");
        description.textContent = "Short product description goes here.";

        const price = document.createElement("h6");
        price.textContent = product.price;

        const addToCart = document.createElement("button");
        addToCart.classList.add("btn", "btn-primary");
        addToCart.textContent = "Add to Cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(addToCart);

        card.appendChild(img);
        card.appendChild(cardBody);
        cardDiv.appendChild(card);

        productsContainer.appendChild(cardDiv);
    });
});
