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
it('Login with correct data', function() {
    cy.get("[type=\"email\"]")
      .type('test+testcompany@bayzat.com')
	  cy.get("[type=\"password\"]")
      .type('123456789')
	  cy.contains('Log In').click() 
	 
})})
describe('Employee Process', function() {
	it('View Team', function() {
    cy.contains('View Team').click() 
	cy.contains('Add Employees').click() 
	cy.contains('Add Employee').click()
    cy.url().should('include', 'https://www.bayzat.com/enterprise/dashboard/employees/create')

})
it('Check Mandatory Fields 1', function() {   //all fields are empty

	cy.contains('Create').click()
	cy.contains("Please fill in employee's name as stated in their passport")
	
})
 it('Check Mandatory Fields 2', function() { // only First Name field 
  cy.get('input[name="firstName"]') //because the field id's in cypress screen and frontend screen are different using inputname.
      .type('First Name')
	cy.contains('Create').click()
	cy.contains("Please fill in employee's name as stated in their passport")
	

})
it('Check Mandatory Fields 3', function() { //First name and last name 
    cy.get('input[name="lastName"]')  
      .type('Last Name')
	cy.contains('Create').click()
	cy.contains("Please provide a work email")
	
})
it('Check Mandatory Fields 4', function() { // only worke-mail with wrong format
    cy.get('input[name="workEmail"]')
      .type('test')
	cy.contains('Create').click()
	cy.contains("Please provide a valid email")
	
})

it('Filling all mandatory fields', function() { 
    cy.get('input[name="workEmail"]').clear()   
	  cy.get('input[name="workEmail"]')  
      .type('elifnazyurekli@gmail.com')
	cy.contains('Create and add another').click()
	cy.contains("Employee successfully added.")
	cy.wait(2000)
	
})
it('Login with correct data', function() {  //because of session down adds new login function 
    
	  cy.get("[type=\"password\"]")
      .type('123456789')
	  cy.contains('Log In').click() 
	  
cy.log('Login successful')
cy.wait(2000)
    	  
	  })})
describe('Adding new employee', function() {
  it('Filling fields', function() {
    
   cy.get('input[name="preferredName"]')
      .type('PreferredName')
	cy.get('input[name="firstName"]')
      .type('FirstName')
	cy.get('input[name="lastName"]')
      .type('LastName')
	cy.get('[class = "form-group js-property-nationality ember-view"]').click()
	cy.get('[data-option-index="230"]').click()
	cy.get('input[name="dateOfBirthFormatted"]')
      .type('01/01/1994')
	cy.contains('Create').click()
    
	
	 


	})})
