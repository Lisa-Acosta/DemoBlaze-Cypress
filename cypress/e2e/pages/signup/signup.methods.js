import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUserName(username) {
        SignupElements.textboxes.username.invoke('val',username)
    }
    static insertPassword(password) {
        SignupElements.textboxes.password.invoke('val',password)

    }
    static clickOnCloseButton() {
        SignupElements.buttons.close().click
    }
    static clickOnSignupButton() {
        SignupElements.buttons.signup.click();
    }
    static signup(username, password){
        this.insertUserName(username);
        this.insertPassword(password);
        this.clickOnSignupButton();
    }

}