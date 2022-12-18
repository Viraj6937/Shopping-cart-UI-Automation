# Shopping-cart-UI-Automation
Shopping-cart-UI-Automation using Cypress


Steps to run E2E Testscript
1. clone project into working directory
2. download and install nodejs
3. set nodejs system environment variables
4. download and install IDE (i.e, visual studio code)
5. open cloned project into IDE
6. open terminal from IDE
7. install dependencies from package.json by giving following command in terminal
   - npm i
8. In terminal give following command
   - npm run test - [it will start to execute script in headless mode]

# Test Case
Test case:   

  √ verify site url 

  √ verify page response is not 404

  √ verify site response is 200

  √ verify top ad is displayed

  √ verify git label is displayed

  √ verify cart count is 0 when no product is added

  √ verify heading "Sizes:" is displayed

  √ verify total number of size options count, should be 7

  √ verify when no size is select, product count 16 matches with heading count as 16

  √ verify when only xs size is selected, product count 1 matches with heading count as 1

  √ verify when only small size is selected, product count 2 matches with heading count as 2

  √ verify when only medium size is selected, product count 1 matches with heading count as 1

  √ verify when only ML size is selected, product count 2 matches with heading count as 2 

  √ verify when only L size is selected, product count 10 matches with heading count as 10 

  √ verify when only XL size is selected, product count 10 matches with heading count as 10

  √ verify when only XXL size is selected, product count 4 matches with heading count as 4

  √ verify product count is 13 which has free shipping label

  √ verify all 16 products images are not broken

  √ verify after adding 1 product into cart, cart count increase to 1

  √ verify after adding multiple products into cart, cart count increases to multiple
