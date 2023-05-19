/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (detail) => `
<img class="lazyload resto-detail__poster" tabindex="0" data-src="${
  CONFIG.BASE_IMAGE_URL.small
}${detail.pictureId}" />
<h2 tabindex="0" class="resto-detail__title">${detail.name}</h2>
<h3  tabindex="0" class="resto-detail__location">${detail.city}, ${
  detail.address
}</h3>
<div class="resto-detail__info">    
</div>
<div tabindex="0" class="resto-detail__overview">
  <h4 tabindex="0" class="resto-detail__description">Description</h4>
  <p tabindex="0">${detail.description}</p>
  <h4 tabindex="0" class="resto-detail__categories">Categories</h4>
  <li tabindex="0">${detail.categories.map(
    (category) => `
          <span>${category.name}</span>
        `
  )}
    </li>
  <h4 tabindex="0" class="resto-detail__makanan">Menu Makanan</h4>
  <li tabindex="0">${detail.menus.foods.map(
    (food) => `
          <span>${food.name}</span>
        `
  )}
    </li>
  <h4 tabindex="0" class="resto-detail__minuman">Menu Minuman</h4>
  <li tabindex="0">${detail.menus.drinks.map(
    (drink) => `
          <span>${drink.name}</span>
        `
  )}
    </li>
  <h3 tabindex="0" class="resto-detail__review">Review</h3>
   ${detail.customerReviews.map(
     (review) => `
        <div tabindex="0" class="detail-review-item">
            <p class="review-name"><i class="fa fa-user-circle"></i>  ${review.name}</p>
            <p class="review-date">${review.date}</p>
          <div tabindex="0" class="review-body">
            ${review.review}
          </div>
        </div>
      `
   )}
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class='list_item'>
        <img class='lazyload list_item_img' data-src='${
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

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
