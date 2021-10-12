import { Selector } from 'testcafe';

export function getSideBarGroupItem(text) {
    return Selector(".sidebar__item").withText(text);
}
export function getSideBarItem(text){
    return Selector(".sidebar__subitem-content div").withText(text);
}