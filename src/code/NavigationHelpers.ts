import type { NavigationMenuModel } from "../models/NavigationMenuModel";

export class NavigationHelpers{
    static sideNavMenuItem:NavigationMenuModel[] = [
        {
            link:"/",
            name:"Home"
        },
        {
            link: "/currency-input",
            name:"Currency Input"
        },
    ];
}
