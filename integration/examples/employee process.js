describe('Login Process', function() {
  it('Visits Bayzat', function() {
    cy.visit('https://www.bayzat.com/profile/login')
	
})
it('Login with correct data', function() {
    cy.get("[type=\"email\"]")
      .type('test+testcompany@bayzat.com')
	  cy.get("[type=\"password\"]")
      .type('123456789')
	  cy.contains('Log In').click() 
	 //cy.url().should('include', 'https://www.bayzat.com/enterprise/dashboard')  // enters dashboard

})

it('Filter', function() {
	
    cy.contains('View Team').click()
	cy.url().should('include', 'https://www.bayzat.com/enterprise/dashboard/employees/list?page=1&status=active')
	
	cy.get("[type=\"search\"]")
      .type('Username')
	cy.wait(1000)
	cy.contains('Username') 
	cy.get('[class="table hovered-rows loader  js-employee-list"]').should('not.have.text', 'Username');

	cy.get("[data-ember-action-302='302']").click()  // using id because checkbox type is not checkbox it's button.
	cy.get('[class="btn btn-danger ember-view mar-rgt--xs btn-icon "]').should('be.visible')
	cy.get('[class="btn btn-default ember-view mar-rgt--xs   "]').should('be.visible')
	cy.get('[class="btn btn-danger ember-view mar-rgt--xs btn-icon "]').click()
   
    cy.contains('Cancel').click() // Cancel
   cy.contains("Username")
   cy.contains('Confirm').click() //Submit
   cy.get("[type=\"search\"]")
      .type(' userlastname')
	  cy.wait(1000)
	  cy.contains("No employees yet.")
   

})
it('Logout', function() {
    it('Logout', function() {
	  cy.contains('Logout').click()  
 	  cy.wait(2000)
	  cy.url().should('include', 'https://www.bayzat.com/profile/login') //return login page
	  })  

})
})

