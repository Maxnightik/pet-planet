import { fetchProductsByCategory } from "./js/api";
import { addToCart } from "./js/cart";
import { renderProducts } from "./js/dom";

const init = () => {
  const buttons = document.querySelectorAll(".store__category-button");
  const productList = document.querySelector(".store__list");

  const changeCategory = async ({ target }) => {
    const category = target.textContent;

    buttons.forEach((button) => {
      button.classList.remove("store__category-button_active");
    });

    target.classList.add("store__category-button_active");

    const products = await fetchProductsByCategory(category);
    renderProducts(products, productList);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", changeCategory);

    if (button.classList.contains("store__category-button_active")) {
      changeCategory({ target: button });
    }
  });

  productList.addEventListener("click", ({ target }) => {
    if (target.closest(".product_btn-add-cart")) {
      const productId = target.dataset.id;
      addToCart(productId);
    }
  });
};

init();

// const input = document.querySelector(".subscribe__input");
// const buttonSub = document.querySelector(".subscribe__button");


// input.addEventListener("focus", () => {
//   input.dataset.placeholder = input.placeholder;
//   input.placeholder = "";
// });

// input.addEventListener("blur", () => {
//   input.placeholder = input.dataset.placeholder;
// });

// input.addEventListener("input", ({ target }) => {
//   buttonSub.disabled = !target.value.trim();
// });

// buttonSub.addEventListener("click", (e) => {
//   e.preventDefault.Default();
// });
