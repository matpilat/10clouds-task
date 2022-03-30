describe('Task', () => {

  it('Validate open roles tittles', () => {

    //navigation 
    cy.visit('/')
    cy.get('.Link__NavLink-sc-1ryxvh0-1')
      .contains('Careers')
      .click()
    cy.get(':nth-child(1) > .select--desktop').click()
    cy.get('.gtOWxA > ul > li')
      .contains('QA')
      .click()

    // collect list of all offers in section
    const jobOffers = []
    cy.get('.job-offers__wrapper')
      .find('.job-offer__title').each(($jobTittle) => {
        jobOffers.push($jobTittle.text())
      })

    // collect list of offers with specified phrase in name
    const qaJobOffers = []
    cy.get('.job-offers__wrapper')
      .find('.job-offer__title').each(($jobTittle) => {
        if ($jobTittle.text().includes('QA Automation') || $jobTittle.text().includes('QA Engineer')) {
          qaJobOffers.push($jobTittle.text()) 
        }
    })

    // check if lists are equal
    cy.log('If arrays are equal, then each result contains "QA Automation" or “QA Engineer” in the title')
    .then(() => {
      expect(qaJobOffers).to.include.members(jobOffers)
    })
  })
})