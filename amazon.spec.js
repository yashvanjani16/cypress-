describe('amazon',function(){

    it('visit the url',function(){
       cy.visit('https://www.amazon.in');
    });
    
    
    it('click on sign in',function(){
    cy.get('#nav-signin-tooltip').click();
    });
    
    it('sign in',function(){
    cy.get('#ap_email').type('abc@gmail.com');   

    });

    it('verify',function(){
        cy.get('#continue').click;
});
});
