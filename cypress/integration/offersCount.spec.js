describe('Task', () => {
  
  it('Validate open roles count', () => {
    cy.visit('/')
    cy.get('.Link__NavLink-sc-1ryxvh0-1')
      .contains('Careers')
      .click()
    
    // collect list of job offers with specified name
    const jobOffers = []
    cy.get('.job-offers__wrapper')
      .find('.job-offer__title').each(($jobTittle) => {
        if ($jobTittle.text() == "QA Automation Engineer") {
          jobOffers.push($jobTittle) 
        }
    })   
    
    // check list length
    cy.log('If array length = 1, there is exactly 1 "QA Automation Engineer" role open')
    cy.wrap(jobOffers)
      .should('have.length', '1')
  })

})