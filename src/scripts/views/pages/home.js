import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
        <section class="content">
        <div class="main_content">
          <div><h1>Explore Restaurant</h1></div>
          <div class="list" id="data_list"></div>
        </div>
      </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurants();
    console.log(restaurants);

    const restaurantsContainer = document.querySelector(".list");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
