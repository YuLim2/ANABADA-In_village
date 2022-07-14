import imgA from './icons/menu.png';
import imgB from './icons/search.png';
import './Header.scss';

import {useContext, useState} from "react";

export default function Header(){

    const [searchText, setSearchText] = useState("");
    const [searchTextOnFocus, setSearchTextOnFocus] = useState(false);

    const toggleSearchTextOnFocus = e => {
        setSearchTextOnFocus(!searchTextOnFocus)
    }

    const writeSearchText = e => {
        setSearchText(e.target.value)
    }

    const resetSearchText = e => {
        setSearchText("");
    }

    return (
        <header>
            <div className="header-top">
                <div className="header-inner">
                    <img src={imgA} className="menu" />
                    <img src={imgB} className="search" />
                </div>
            </div>
        </header>
    )
}