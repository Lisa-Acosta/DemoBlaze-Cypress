export class CartElements{
    static get buttons(){
        return{
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]');
            },

        }
    }
    static get links(){
        return{
            delete(productName){
                ////td[text()='Nexus 6']/ancestor::tr//a
                return cy.contains('td',productName).closest('tr').find('a');

            }
        }
        
    }
}