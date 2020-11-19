context('Assertions', () => {
  beforeEach( () => {
    cy.visit('https://www.woolworths.com.au/shop/securelogin')
  })



 describe('My First Test-Marcos', () => {
	
	
	
  it('Visits Wollies web', () => {
    //cy.visit('https://www.woolworths.com.au/')
	
	//cy.contains('Log in / Signup').click() 
	
	
	//cy.visit('https://www.woolworths.com.au/shop/securelogin', {continueAfter: 5000})
	
	cy.get('input[id=loginForm-Email]').type('yomarcos2@yahoo.com')
	
	//cy.get('input[id=loginForm-Password]').type(`Passw0rd{enter}`)
	cy.get('input[id=loginForm-Password]').type('Passw0rd')
	
	cy.get('[id=loginForm]').submit()
	
	//cy.contains('Browse Groceries').click({waitForAnimations: true})
	//cy.contains('Browse Groceries').click({force: true}) 
	
	
	//cy.wait(6000)
		
		//cy.get('[class=categoryHeader-navigationLink]').should('contain', 'Fruit & Veg').click({waitForAnimations: true})
		
		//cy.get('[class=categoryHeader-navigationLink]').contains('Fruit & Veg').click({waitForAnimations: true})
		
		cy.contains('Fruit & Veg').click({waitForAnimations: true})
		//cy.get('[class=categoryHeader-navigationLink]').find('Fruit & Veg').click({waitForAnimations: true})
		//cy.contains('Fruit & Veg').click({waitForAnimations: true})
		
		//cy.wait(6000)
		
		cy.get('[class=categoriesNavigation-linkText]').contains('Fruit').click({waitForAnimations: true})
		//cy.contains('Fruit').click({waitForAnimations: true})
		
		cy.contains('Melons & Mangoes').click({waitForAnimations: true})
		
		cy.contains('Watermelon').click({waitForAnimations: false})

		cy.contains('Add to cart').click({waitForAnimations: true})
		
		//check price >0, check CHeckout cart appears, 
		
		//cy.contains('Checkout').click({waitForAnimations: true})
	
	
	 //cy.get('[data-ervalue sharedeventrecorder href=/shop/browse/fruit-veg]').click({waitForAnimations: true})
        //.find('li[data-value=10]')
        //.trigger('mouseover') // ← this line was added
        //.click();
	
	
	//cy.contains('Fruit').click({force: true}) 
	

	
	
	
	/*
	cy.request({
  url: 'https://www.woolworths.com.au/',
  followRedirect: true // turn off following redirects
})
  .then((resp) => {
    // redirect status code is 302
    expect(resp.status).to.eq(200)
    expect(resp.redirectedToUrl).to.eq('https://www.woolworths.com.au/')
  })
	*/

  })
  
  		
})


})