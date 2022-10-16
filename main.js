var rollroyce = [
    {
        id: 1,
        image: "https://scontent.fhan7-1.fna.fbcdn.net/v/t1.15752-9/301353638_3269821536634027_8389466193365445412_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=cg5pMN5pKE8AX9z751C&_nc_ht=scontent.fhan7-1.fna&oh=03_AVK48agxTv4MyGzHjpkOxxb74tvyRSwePMglIMgJzW1aDw&oe=63567C0E",
        name: "Roll Royce Wraith",
        price: "350.000$",
        address: "Hà Nội",
        year: 2016,
    },
    {
        id: 2,
        image: "https://i.pinimg.com/564x/00/7a/d0/007ad05380db15f492e1a61d46965a1d.jpg",
        name: "Roll Royce Phantom",
        price: "450.000$",
        address: "Hồ Chí Minh",
        year: 2022,
    },
    {
        id: 3,
        image: "https://i.pinimg.com/564x/8b/4b/0f/8b4b0fe5d6fa95eb440910d264bcb480.jpg",
        name: "Roll Royce Dawn",
        price: "550.000$",
        address: "Điện Biên",
        year: 2014,
    },
    {
        id: 4,
        image: "https://i.pinimg.com/564x/2d/00/14/2d00146576f8c38cfc5118f394a79ff6.jpg",
        name: "Roll Royce Cullian",
        price: "730.000$",
        address: "Hải Phòng",
        year: 2018,
    },
    {
        id: 5,
        image: "https://i.pinimg.com/564x/9d/6e/23/9d6e232d2841a1a5557dce01d3c40cce.jpg",
        name: "Roll royce boat tail",
        price: "1.000.000$",
        address: "Sơn La",
        year: 2020,
    },
];

var bentley = [
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
        image: "https://i.pinimg.com/564x/6a/d2/2b/6ad22b120b873d4b471185a4595085c0.jpg",
        name: "Bentley continental GT",
        price: "1.200.000$",
        address: "Đà Nẵng",
        year: 2021,
    },
    {
        name: "Bentley Mulliner Bacalar",
        price: "900.000$",
        address: "Sài Gòn ",
        year: "2022",
        image: "https://i.pinimg.com/564x/f5/29/b0/f529b0c234c817c15d08de1e9ec05663.jpg",
        id: 3,
    },
];

var porsche = [
    {
        id: 1,
        image: "https://i.pinimg.com/564x/2c/70/b0/2c70b0f97400c7db2f66b9c05325b0c5.jpg",
        name: "Porsche 911 Turbo s",
        price: "1.200.000$",
        address: "Đà Nẵng",
        year: 2021,
    },
    {
        name: "Porsche Panamera",
        price: "1.500.000$",
        address: "Sài Gòn ",
        year: "2021",
        image: "https://i.pinimg.com/564x/db/24/42/db2442256a7c6bf755117ed5f74c6871.jpg",
        id: 2,
    },
    {
        name: "Porsche Taycan",
        price: "450.000$",
        address: "Cần Thơ ",
        year: "2022",
        image: "https://i.pinimg.com/564x/89/4b/91/894b910ed5247b8ee8ac74d9686eac0e.jpg",
        id: 3,
    },
    {
        name: "Porsche Cayenne Turbo GT",
        price: "580.000$",
        address: "Cần Thơ ",
        year: "2021",
        image: "https://i.pinimg.com/564x/44/fa/05/44fa05d5e794691c6b76598e81d57aa2.jpg",
        id: 4,
    },
];

var maybach = [
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
    var carsBlock = document.querySelector(className);
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

getCars(rollroyce, ".rollroyce");
getCars(bentley, ".bentley");
getCars(porsche, ".porsche");
getCars(maybach, ".maybach");

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loader__overlay").style.display = "none";
    }, 1000);
});
