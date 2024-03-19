import React, {useState , UseEffect} from 'react';

//
import { languageOptions } from '../constants/languageOptions';
import { defineTheme } from "../lib/defineTheme";
//components imports 
import LanguageDropdown from './LanguageDropDown';
import ThemeDropdown from './ThemeDropdown';

const Landing = () => { 
    const [language , setLanguage] = useState(languageOptions[0]);
    const [theme, setTheme] = useState("cobalt");

    const onSelectChange = (sl) => {
        setLanguage(sl);
    };
    function handleThemeChange(th) {
        const theme = th;
        console.log("theme .. ", theme);
        if(["light" , "vs-dark"].include(theme.value)){
            setTheme(theme);
        }
        else{
            defineTheme(theme.value).then((_) => setTheme(theme));
        }
    }
    return (
        <>
            <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
            <div className='flex flex-row'>
                <div className="px-4 py-2">
                    <LanguageDropdown onSelectChange={onSelectChange}/>
                </div>
                <div className="px-4 py-2">
            	    <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
                </div>
            </div>
        </>
    )
}

export default Landing;