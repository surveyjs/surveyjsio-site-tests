import { Selector } from 'testcafe';

export function getSideBarGroupItem(text) {
    return Selector(".v2-class---drop-down-menu-item__link--level-1").withText(text);
}
export function getSideBarItem(text){
    return Selector(".v2-class---drop-down-menu-item__link--level-2").withText(text);
}
export function getExampleTabSelector(text) {
    return Selector(".v2-class---footer-toolbar-item").filterVisible().withText(text);
}
export const explicitErrorHandler = () => { window.addEventListener("error", e => {
    if (e.message === "ResizeObserver loop completed with undelivered notifications." ||
        e.message === "ResizeObserver loop limit exceeded") {
        e.stopImmediatePropagation();
    } }); 
}

export function getIUnderstandButton() {
    return Selector('span').withText('Accept All');
}

export async function acceptCookie(t) {
    const cookiePopupAccept = Selector(".v2-class---popup__button-container a");
    if(await cookiePopupAccept.exists) {
        await t.click(cookiePopupAccept); // close cookie msg
    } 
}