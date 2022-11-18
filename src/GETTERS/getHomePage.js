import { useNavigate } from "react-router-dom";

export default function() {
    if (localStorage.homeBeerType) {
    return `${JSON.parse(localStorage.homeBeerType).path}/page=1`
    }
    return ('/')
}