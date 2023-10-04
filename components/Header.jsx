import React, {useState, useEffect} from "react";
import Wrapper from "./Wrapper";

//import Link from "next/link";
//import Menu from "./Menu";
//import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
//import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    //const [categories, setCategories] = useState(null);
    
    return (
        <header className={'w-full h-[50px] md;h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}'}>
            Header
        </header>
    );
};

export default Header;
