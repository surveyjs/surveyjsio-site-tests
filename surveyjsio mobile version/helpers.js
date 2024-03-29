import { Selector, fixture, test } from 'testcafe';

export function getSideBarGroupItem(text) {
    return Selector(".sidebar__item").withText(text);
}
export function getSideBarItem(text){
    return Selector(".sidebar__subitem-content div").withText(text);
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