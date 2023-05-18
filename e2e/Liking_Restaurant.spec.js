/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', async ({ I }) => {
  I.see('Tambahkan Daftar Restoran yang Anda Sukai', '.list');
  I.amOnPage('/');
  pause();
  I.seeElement('.list_item');
  const firstRestaurant = locate('.list_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');

  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.list_item');
  const likedRestaurantTitle = await I.grabTextFrom('.list_item_title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
