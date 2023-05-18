import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import {
  createLikeRestaurantButtonTemplate,
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div class='content'>
    <h2 class='content__heading'>Restaurant Detail</h2>
      <div id='restaurant' class='restaurant'>
      
      </div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parserActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant,
    });
  },
};

export default Detail;
