describe('Login Process', function() {
  it('Visits Bayzat', function() {
    cy.visit('www.bayzat.com')
	Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


	cy.contains('Login').click()
	
})
it('Login with incorret mail', function() {
    cy.get("[type=\"email\"]")
      .type('incorretmail@mail.com')
	  cy.get("[type=\"password\"]")
      .type('123456789')
	  cy.contains('Log In').click()
	  cy.url().should('include', 'https://www.bayzat.com/profile/login')   //stay in login page
cy.log('Login not successful')
    
})
it('Clear data', function() {
    cy.get("[type=\"email\"]")
      .clear()   //cleans the data
	  cy.get("[type=\"password\"]")
      .clear()
    
})
it('Login with incorret password', function() {
   cy.get("[type=\"email\"]")
      .type('test+testcompany@bayzat.com')
	  cy.get("[type=\"password\"]")
      .type('1234567891')
	  cy.contains('Log In').click()
	   cy.url().should('include', 'https://www.bayzat.com/profile/login') //stay in login page
cy.log('Login not successful')
    
    
})

it('Clear data2', function() {
    cy.get("[type=\"email\"]")
      .clear()
	  cy.get("[type=\"password\"]")
      .clear()
	  })
it('Login with correct data', function() {
    cy.get("[type=\"email\"]")
      .type('test+testcompany@bayzat.com')
	  cy.get("[type=\"password\"]")
      .type('123456789')
	  cy.contains('Log In').click() 
	  
cy.url().should('include', 'https://www.bayzat.com/enterprise/dashboard')  // enters dashboard
cy.log('Login successful')
cy.wait(5000)
    	  
	  })

it('Logout', function() {
	  cy.contains('Logout').click()  
 	  
	  })  }) 



