import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

// import('../DATA.json').then(({ default: dataJson }) => {
//     console.log(dataJson);
//     let datas = dataJson['restaurants'];
//     let dataList = '';
//     datas.forEach(function (data) {
//         dataList += `
//         <div class='list_item'>
//             <img class='list_item_img' src='${data['pictureId']}' alt='${data['name']}' title='${data['name']}'>
//             <div class='city'>${data['city']}</div>
//             <div class='list_item_content'>
//                 <p class='list_item_rating'>
//                     Rating : <a href='#' class='list_rating_value'>${data['rating']}</a>
//                 </p>
//                 <h2 class='list_item_title'><a href='#'>${data['name']}</a></h2>
//                 <div class='list_item_description'>${data['description'].slice(0, 150)}...</div>
//             </div>
//         </div>
//         `;
//     });
//     document.querySelector('#data_list').innerHTML = dataList;
// });
