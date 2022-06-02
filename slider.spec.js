describe('test case',function(){

    it('visit the url',function(){
        cy.visit('https://codenboxautomationlab.com/');
    });

    it('scroll up and down',function(){
        cy.wait(3000);
        cy.get('b > a').scrollIntoView();
        cy.wait(3000); 
        cy.get('.block-editor-rich-text__editable > span').scrollIntoView();
      });
});