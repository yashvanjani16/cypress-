describe('instagram',function(){

    it('visit the url',function(){
       cy.visit('https://www.instagram.com');
    });

    it('sign up',function(){
      cy.get('[data-testid="sign-up-link"] > ._7UhW9').click();
    });

    it('enter details',function(){
      cy.get(':nth-child(4) > ._9GP1n > .f0n8F > ._2hvTZ').type('john@gmail.com');
      cy.get(':nth-child(5) > ._9GP1n > .f0n8F > ._2hvTZ').type('john leo');
      cy.get(':nth-child(6) > ._9GP1n > .f0n8F > ._2hvTZ').type('john11');
      cy.get(':nth-child(7) > ._9GP1n > .f0n8F > ._2hvTZ').type('johnjohn11');
    });
    });
  


