import cleanGoBackStorage from "./cleanGoBackStorage";

export default function(currantPageParams) {
    const currantPageURL = Object.values(currantPageParams)[0];
    if (localStorage.selectedPageURL) {
        const selectedPageURL = JSON.parse(localStorage.selectedPageURL)
        if (currantPageURL !== selectedPageURL) {
            cleanGoBackStorage();
        }
    }
}

