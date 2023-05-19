const assert = require('assert');

Feature('UnLiking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', async ({ I }) => {
  I.see('Tambahkan Daftar Restoran yang Anda Sukai', '.list');
  I.amOnPage('/');
  I.wait(1);
  I.seeElement('.list_item_title');

  const firstRestaurant = locate('.list_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);
  I.wait(1);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.list_item_title');

  const likedRestaurantTitle = await I.grabTextFrom('.list_item_title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click(firstRestaurant);
  I.wait(1);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('Tambahkan Daftar Restoran yang Anda Sukai', '.list');
});
