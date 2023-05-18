import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="content">
    <div class="main_content">
      <div><h1>Favorite Restaurant</h1></div>
      <div class="list" id="list"></div>
    </div>
  </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#list');

    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = `
      Tambahkan Daftar Restoran yang Anda Sukai
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
