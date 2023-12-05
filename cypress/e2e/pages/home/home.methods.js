import { HomeElements } from "./home.elements";

export class HomeMethods{
    static clickOnPhoneOption(){
        HomeElements.categoriesMenu.phones.click()
    }
    static clickOnLaptopOption(){
        HomeElements.categoriesMenu.laptops.click()
    }
    static clickOnMonitorsOption(){
        HomeElements.categoriesMenu.monitors.click()
    }
    static clickOnProductLink(produtName){
        HomeElements.product(produtName).click();
        }

}