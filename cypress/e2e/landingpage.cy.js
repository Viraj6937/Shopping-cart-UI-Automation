

 import LandingPageObject from '../support/PageObject/LandingPageObject';
 import user from '../fixtures/user.json';
// const { defineConfig } = require("cypress");

 const lp = new LandingPageObject();
 let cart = 0;

beforeEach(()=>{
  cy.visit(user.url.site_url);
})

describe('E-commerce app E2E Test', () => {
  it('verify site url', () => {
    cy.url().should('eq',user.url.site_url)
  })

  it('verify page response is not 404',()=>{
     cy.request(user.url.site_url).then((response)=>{
        expect(response).not.eq(404);
     })
  })

  it('verify site response is 200',()=>{
    cy.request(user.url.site_url).then((response)=>{
      expect(response.status).eq(200);
    })
  })

  it('verify top ad is displayed',()=>{
     cy.get("div.ciyhZL").should('be.visible');
  })

  it('verify git label is displayed',()=>{
     cy.get("div.foenKb > a > svg").should('be.visible');
  })

  it('verify cart count is 0 when no product is added',()=>{
      lp.cart_button().click({force:true});
      lp.empty_cart_label().should('contain.text', user.cart_data.label_empty_product);
      lp.cart_close().click({force:true});
      lp.cart_count_label().then((Val)=>{
        expect(parseInt(Val.text().toString().replace("\n").replace("\t").trim())).eq(cart)
      })
  })

  it('verify heading "Sizes:" is displayed',()=>{
     cy.get("div.hqhzVN > div > h4").then($headingVal=>{
        let val = $headingVal.text().toString().replace("\n").replace("\t").trim();
        expect(val).eq("Sizes:")  
     })    
  })

  it('verify total number of size options count, should be 7',()=>{
     cy.get("div.DCKcC > div").then($size=>{
        let count = $size.length;
        expect(count).eq(7);
     })  
  })

  it('verify when no size is select, product count 16 matches with heading count as 16',()=>{
    let _headingcount=0;
    let _productcount=0;
    cy.wait(3000);
    lp.products_heading().then($headingVal =>{
     _headingcount = _headingcount + parseInt($headingVal.text().toString().replace("Product(s) found").replace("\n").replace("\t").trim());
    })
    lp.product_list().then($Val=>{
        _productcount = _productcount + $Val.length;
         expect(_headingcount).eq(_productcount);
      })
  })

  it('verify when only xs size is selected, product count 1 matches with heading count as 1',()=>{
    let _headingcount=0;
    let _productcount=0;
    
    cy.get("div.DCKcC > div:nth-Child(2) > label > span").click({force:true});
    cy.wait(3000);
    lp.products_heading().then($headingVal =>{
     _headingcount = _headingcount + parseInt($headingVal.text().toString().replace("Product(s) found").replace("\n").replace("\t").trim());
    })
    lp.product_list().then($Val=>{
        _productcount = _productcount + $Val.length;
        expect(_headingcount).eq(_productcount)
      })  
  })

  it('verify when only small size is selected, product count 2 matches with heading count as 2',()=>{
    let _headingcount=0;
    let _productcount=0;
    cy.reload();
    cy.get("div.DCKcC > div:nth-Child(3) > label > span").click({force:true});
    cy.wait(3000);
    lp.products_heading().then($headingVal =>{
     _headingcount = _headingcount + parseInt($headingVal.text().toString().replace("Product(s) found").replace("\n").replace("\t").trim());
    })
    lp.product_list().then($Val=>{
        _productcount = _productcount + $Val.length;
        expect(_headingcount).eq(_productcount);
      })
  })

  it('verify when only medium size is selected, product count 1 matches with heading count as 1',()=>{
    let _headingcount=0;
    let _productcount=0;
    cy.reload();
    cy.get("div.DCKcC > div:nth-Child(4) > label > span").click({force:true});
    cy.wait(3000);
    lp.products_heading().then($headingVal =>{
     _headingcount = _headingcount + parseInt($headingVal.text().toString().replace("Product(s) found").replace("\n").replace("\t").trim());
    })
    lp.product_list().then($Val=>{
        _productcount = _productcount + $Val.length;
        expect(_headingcount).eq(_productcount);
      })
  })

  it('verify when only ML size is selected, product count 2 matches with heading count as 2',()=>{
    let _headingcount=0;
    let _productcount=0;
    cy.reload();
    cy.get("div.DCKcC > div:nth-Child(5) > label > span").click({force:true});
    cy.wait(3000);
    lp.products_heading().then($headingVal =>{
     _headingcount = _headingcount + parseInt($headingVal.text().toString().replace("Product(s) found").replace("\n").replace("\t").trim());
    })
    lp.product_list().then($Val=>{
        _productcount = _productcount + $Val.length;
        expect(_headingcount).eq(_productcount);
      })
  })

  it('verify when only L size is selected, product count 10 matches with heading count as 10',()=>{
    let _headingcount=0;
    let _productcount=0;
    cy.reload();
    cy.get("div.DCKcC > div:nth-Child(6) > label > span").click({force:true});
    cy.wait(3000);
    lp.products_heading().then($headingVal =>{
     _headingcount = _headingcount + parseInt($headingVal.text().toString().replace("Product(s) found").replace("\n").replace("\t").trim());
    })
    lp.product_list().then($Val=>{
        _productcount = _productcount + $Val.length;
        expect(_headingcount).eq(_productcount);
      })
  })

  it('verify when only XL size is selected, product count 10 matches with heading count as 10',()=>{
    let _headingcount=0;
    let _productcount=0;
    cy.reload();
    cy.get("div.DCKcC > div:nth-Child(7) > label > span").click({force:true});
    cy.wait(3000);
    lp.products_heading().then($headingVal =>{
     _headingcount = _headingcount + parseInt($headingVal.text().toString().replace("Product(s) found").replace("\n").replace("\t").trim());
    })
    lp.product_list().then($Val=>{
        _productcount = _productcount + $Val.length;
        expect(_headingcount).eq(_productcount);
      })
  })

  it('verify when only XXL size is selected, product count 4 matches with heading count as 4',()=>{
    let _headingcount=0;
    let _productcount=0;
    cy.reload();
    cy.get("div.DCKcC > div:nth-Child(8) > label > span").click({force:true});
    cy.wait(3000);
    lp.products_heading().then($headingVal =>{
     _headingcount = _headingcount + parseInt($headingVal.text().toString().replace("Product(s) found").replace("\n").replace("\t").trim());
    })
    lp.product_list().then($Val=>{
        _productcount = _productcount + $Val.length;
        expect(_headingcount).eq(_productcount);
      })
  })

  it('verify product count is 13 which has free shipping label',()=>{
     lp.product_free_shipping().then(($count)=>{
       if($count.text().toString().includes("Free shipping")){
        expect($count.length).eq(13)
       }
     })
  })

  it('verify all 16 products images are not broken',()=>{    
      lp.product_image_list().should('be.visible');
      lp.product_image_list().invoke('width').should('be.greaterThan',0);
  })

  it('verify after adding 1 product into cart, cart count increase to 1',()=>{
      cy.get("div.iZZGui > div").each($list=>{
        let _itemtitle = $list.text().replace("\n").replace("\t").toString().trim();
         let rowIndex = $list.length;
         if(_itemtitle.includes("Cropped Stay Groovy off white")){
            cy.get("div.iZZGui > div:nth-Child("+rowIndex+") > button").click();
            lp.cart_close().click();
            lp.cart_count_label().then(($cartval)=>{
              cart = parseInt($cartval.text().toString().trim());
               expect(cart).eq(1);
            })
         }
      })  
  })

  it('verify after adding multiple products into cart, cart count increases to multiple',()=>{
    let _cartcount=0;
    cy.get("div.iZZGui > div").each($list=>{
      let _itemtitle = $list.text().replace("\n").replace("\t").toString().trim();
       let rowIndex = $list.length;
       if(_itemtitle.includes("Cropped Stay Groovy off white")){
          cy.get("div.iZZGui > div:nth-Child("+rowIndex+") > button").click();
          lp.cart_close().click();
       }
    })  
    cy.get("div.iZZGui > div").each($list2=>{
      let _itemtitle = $list2.text().replace("\n").replace("\t").toString().trim();
       let rowIndex2 = $list2.length - (-1);
       if(_itemtitle.includes("Basic Cactus White T-shirt")){
          cy.get('div.iZZGui > div:nth-Child('+rowIndex2+') > button').click();
          lp.cart_close().click();
       }
    })  
     lp.cart_count_label().then(($countVal)=>{
        _cartcount = parseInt($countVal.text().toString().trim());
        expect(_cartcount).eq(2);
     })
  })

})