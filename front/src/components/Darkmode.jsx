import React from 'react'
import { BiSun, BiMoon } from "react-icons/bi"
import { useTheme } from "../ContextAPI/Components/apexchartDarkLightMode"


function DarkMode() {
    const { setApexTheme } = useTheme()


    const setDark = () => {
        // 2
        localStorage.setItem("theme", "dark");

        // 3
        document.documentElement.setAttribute("data-theme", "dark");
        setApexTheme("dark")
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        setApexTheme("light")
    };

    const storedTheme = localStorage.getItem("theme");
    const prefersDark = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const defaultDark = (storedTheme === "dark" || (storedTheme === null && prefersDark));

    if (defaultDark) setDark();
    const toggleTheme = (e) => {
        if (e.target.checked) setDark();
        else setLight();
    };



    return (
        <>
            <div className='d-flex ai-center me-3'>
                <div>
                    <BiSun className='theme_icons' />
                </div>
                <div class="form-check form-switch mx-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                        onChange={toggleTheme}
                        defaultChecked={defaultDark}
                    />
                </div>
                <div>
                    <BiMoon className='theme_icons' />
                </div>
            </div>
        </>
    )

}

export default DarkMode
