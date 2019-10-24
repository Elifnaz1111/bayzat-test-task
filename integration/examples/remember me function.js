describe('Login Process', function() {
  it('Visits Bayzat Login Page', function() {
    cy.visit('https://www.bayzat.com/profile/login')
	
})
	  
it('Login with correct data and remember me', function() {
   cy.get("[type=\"email\"]").type('test+testcompany@bayzat.com')
	
	cy.get("[type=\"password\"]").type('123456789')
	
	
	cy.get('form').find('[name="extendedExpiration"]').click({force:true})
	
	
	
	 cy.contains('Log In').click()  
      cy.wait(5000)
	 
	 
	 })	
it('Logout', function() {
	  cy.contains('Logout').click()
cy.wait(2000)	  
	  })  
it('With Remember me', function() {
   
	  cy.contains('Log In').click() 
cy.url().should('eq', 'https://www.bayzat.com/enterprise/dashboard') 	// with remember me users should enter dashboard without email and password  
	  })	 
	  
}) 




