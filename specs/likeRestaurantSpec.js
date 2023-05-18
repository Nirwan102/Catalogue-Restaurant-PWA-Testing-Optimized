/* eslint-disable no-unused-expressions */
/* eslint-disable comma-dangle */
import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it('should not show the unlike button when the Restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
  });

  it('should be able to like the Restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a Restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Tambahkan restoran dengan ID 1 ke daftar restoran yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka restoran
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada restoran yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a Restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
