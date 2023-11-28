import { LoginElements } from "./login.elements";

export class LoginMethods {
    static insertUserName(username) {
        LoginElements.textboxes.username.invoke('val',username)
    }
    static insertPassword(password) {
        LoginElements.textboxes.password.invoke('val',password)

    }
    static clickLoginButton() {
        LoginElements.buttons.loginButton.click()
    }
    static clickLoginClose() {
        LoginElements.buttons.loginClose.click();
    }
    static login(username, password){
        this.insertUserName(username);
        this.insertPassword(password);
        this.clickLoginButton();
    }

}