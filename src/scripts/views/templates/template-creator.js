import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
    <div class='restaurant__title'>
        <h2>${restaurant.name}</h2>
    </div>
    <div class='restaurant__image'>
        <img class='list_item_img' src='${
          CONFIG.BASE_IMAGE_URL.small + restaurant.pictureId
        }' alt='Restaurant ${restaurant.name}'>
    </div>
        <div class='restaurant__info'>
            <h3>Information</h3>
            <h4>Alamat</h4>
            <p>${restaurant.address} ${restaurant.city}</p>
            <h4>Categories</h4>
            <p>${restaurant.categories
              .map((key) => `<li>${key.name}</li>`)
              .join("")}</p>
            <h4>Menu</h4>
            <h4>Makanan : </h4>
            <p>${restaurant.menus.foods
              .map((key) => `<li>${key.name}</li>`)
              .join("")}</p>
            <h4>Minuman : </h4>
            <p> ${restaurant.menus.drinks
              .map((key) => `<li>${key.name}</li>`)
              .join("")}</p>
            <h4>Rating</h4>
            <p>${restaurant.rating}</p>
        </div>

        <div class='tab_container'>
            <input checked='' id='tab1' name='tabs' type='radio'/>
            <label for='tab1'>Description</label>
            <input id='tab2' name='tabs' type='radio'/>
            <label for='tab2'>Customer Reviews</label>

            <div class='tab-content' id=''content1>
                <p>${restaurant.description}</p>
            </div>

            <div tab='tab-content' id='content2'>
            ${restaurant.customerReviews
              .map(
                (key) =>
                  `<div class="card">
              <h3>Nama : ${key.name}</h3>
              <h4>"${key.review}"</h4>
              <p>Tanggal : ${key.date}</p>
              </div>  
              `
              )
              .join("")}
            </div>
        </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class='list_item'>
        <img class='list_item_img' src='${
          CONFIG.BASE_IMAGE_URL.small + restaurant.pictureId
        }' alt='Restaurant ${restaurant.name}'>
        <div class='city'>${restaurant.city}</div>
        <div class='list_item_content'>
            <p class='list_item_rating'>
                 <a href='#' class='list_rating_value'>⭐️ ${
                   restaurant.rating
                 }</a>
            </p> 
        <h2 class='list_item_title'><a href='${`/#/detail/${restaurant.id}`}'>${
  restaurant.name
}</a></h2>
        <div class='list_item_description'>${restaurant.description}</div>
        </div>
    </div>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
