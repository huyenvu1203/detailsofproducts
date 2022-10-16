var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    thumbs: {
        swiper: swiper,
    },
    autoplay: {
        delay: 2000,
    },
    speed: 1000,
});

maybach = [
    {
        id: 1,
        image: "https://i.pinimg.com/564x/29/21/ea/2921ea22a7034b02c0aecd61e0254cd8.jpg",
        name: "Bentley Flying Spur Hybrid Odyssean",
        price: "200.000$",
        address: "Khánh Hòa",
        year: 2022,
    },
    {
        id: 2,
        image: "https://i.pinimg.com/564x/98/f3/be/98f3be29f1cfd499304e631545f57d13.jpg",
        name: "Mercedes Maybach 6 Cabriolet",
        price: "1.200.000$",
        address: "Đà Nẵng",
        year: 2021,
    },
    {
        name: "Mercedes Maybach S680 2022",
        price: "900.000$",
        address: "Sài Gòn ",
        year: "2022",
        image: "https://i.pinimg.com/564x/93/ec/99/93ec99a62a25c9b27ad3a0cee0c87edf.jpg",
        id: 3,
    },
    {
        id: 4,
        image: "https://i.pinimg.com/564x/9e/9c/79/9e9c79eaf2ef31e18282dd154a38100c.jpg",
        name: "2021 Mercedes Maybach S600",
        price: "1.200.000$",
        address: "Đà Nẵng",
        year: 2021,
    },
];

function getCars(cars, className) {
    const carsBlock = document.querySelector(className);
    var quantity = cars.length;
    if (quantity == 0) {
        var para = document.createElement("p");
        para.className = "nocar";
        para.innerText = "Chưa có sản phẩm";
        carsBlock.appendChild(para);
    } else {
        var html = "";
        cars.forEach((car) => {
            html += `
        <li class="product__item">
            <a href="./purchase/purchase.html" class="product__item--link">
              <div class="product__item--img">
                <img
                  loading="lazy"
                  src="${car.image}"
                  alt=""
                />
              </div>
              <div class="product__content">
                <h3 class="product__item--name">${car.name}</h3>
                <p class="product__item--price">Price: ${car.price}</p>
                <div class="product__item--details">
                  <span class="product__item--details-year"
                    ><box-icon name="calendar"></box-icon>${car.year}</span
                  >
                  <span class="product__item--details-address"
                    ><box-icon name="current-location"></box-icon>${car.address}</span
                  >
                </div>
                <div class="product__item--contact">
                  <span
                    style="--btn-bg: rgb(47, 255, 61)"
                    class="hotline-btn product__item--contact-btn"
                    ><i class="fa-solid fa-phone"></i>Liên
                    hệ</span
                  >
                  <span
                    style="--btn-bg: #0096FF"
                    class="negociation-btn product__item--contact-btn"
                    ><i class="fa-solid fa-location-dot"></i>Trả giá</span
                  >
                </div>
              </div>
            </a>
          </li>
          `;
        });
        carsBlock.innerHTML = html;
    }
}

getCars(maybach, ".related__products");
