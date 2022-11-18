import { defaultFilter } from "../OBJECTS/defaultFilter";

export default function() {
    if (localStorage.selectedPageFilter) {
       return JSON.parse(localStorage.selectedPageFilter)
    }
    return defaultFilter
}