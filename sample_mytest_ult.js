context('Assertions', () => {
  beforeEach( () => {
	
	//The menu of the website changes depending on the resolution so we use this configuration
	cy.viewport(1300, 620)
	
	//Recommended browser for the test: the default browser from Cypress Electron85 as it works quickly.
	//PageTimeOut set to 80secs since Chrome takes 63secs to load the page completely.

	cy.visit('https://www.woolworths.com.au', {timeout:80000})
	
	/*//.then((response) => {
		//expect(response.status).to.eq(200)
	//})
  */
  
  
  })



 describe('My First Test-Marcos', () => {
		
  it('Login to Wollies web Find Watermelon and Add it to cart', () => {

//To avoid stopping the test if there's any unhandled exception	  
 Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


	cy.get('[class=coreHeader-loginText]').contains('Log in / Signup').click({waitForAnimations: true})
	
	cy.url().should('include', '/securelogin')
	cy.wait(6000)
	
	cy.get('input[id=loginForm-Email]').type('yomarcos2@yahoo.com').should('have.value', 'yomarcos2@yahoo.com')
	
	cy.get('input[id=loginForm-Password]').type('Passw0rd').should('have.value', 'Passw0rd')
	
	cy.get('[id=loginForm]').submit()

	
	cy.wait(6000)
		
	//The menu contains animations so we have to wait for the animation to load before clicking
	cy.contains('Fruit & Veg').click({waitForAnimations: true})
	
	//Some browsers like Chrome were slower than Electron in the test so we have to wait a bit for the menu to load before clicking 
	cy.wait(3000)

	cy.get('[class=categoriesNavigation-linkText]').contains('Fruit').click({waitForAnimations: true})
	
	cy.wait(3000)
		
	cy.contains('Melons & Mangoes').click({waitForAnimations: true})
	
	cy.wait(3000)
		
	cy.contains('Watermelon').click({waitForAnimations: true})
	
	cy.wait(3000)

	cy.contains('Add to cart').click({waitForAnimations: true})
	cy.wait(3000)
	
	//after clicking the watermelon we checked it was added into the cart
	//cy.get('[class=cart-item-name]').should('have.value', 'Watermelon')
		
	//check the item was added to the the cart (cart value is not equals $0) 
	cy.get('[class=cart-checkout-total__currency]').should('not.have.value', '$0')
		

  })
  
  		
})


})
