//const { defineConfig } = require("cypress");
import user from '../../fixtures/user.json';

export default class LandingPageObject{

  cart_button(){
    return cy.get(user.cart.cart_button,{timeout:10000});
  }

  empty_cart_label(){
    return cy.get(user.cart.empty_cart_title,{timeout:10000});
  }

  cart_close(){
    return cy.get(user.cart.cart_close,{timeout:10000});
  }

  cart_count_label(){
    return cy.get(user.cart.cart_count_number,{timeout:10000});
  }

  product_list(){
    return cy.get(user.cart.product_list,{timeout:10000});
  }

  product_free_shipping(){
    return cy.get(user.cart.product_free_shipping,{timeout:10000});
  }

  products_heading(){
    return cy.get(user.cart.product_list_heading,{timeout:10000});
  }

  product_image_list(){
    return cy.get(user.cart.product_image_list,{timeout:10000});
  }

}