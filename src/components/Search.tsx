"use client"

import React, { useState } from 'react'; 
import ctl from "@netlify/classnames-template-literals";
import MagnifyingGlass from "./icons/MagnifyingGlass";
import CloseIcon from './icons/CloseIcon';

const Search = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleOnFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => { 
        setIsFocused(false);
    }; 

    const clearInput = () => {
        setSearchInput("");
    }

    return (
        <div className={inputWrraper}>
            <span className={searchIcon}>
                <MagnifyingGlass fill={`${isFocused? "#007FFF" : "#C6CFDC"}`} />
            </span>
            <input 
                type="search" 
                placeholder="Search..." 
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                className={searchBox}
                onFocus={handleOnFocus}
                onBlur={handleBlur} 
            />
            {searchInput.length > 0 && 
                <span className={closeIcon} onClick={clearInput}>
                    <CloseIcon />
                </span>
            }
        </div>
    )
}

const inputWrraper = ctl(`
    relative
`);

const searchBox = ctl(`
    bg-[#F5F7F9] 
    rounded-[10px]
    text-[16px]
    font-[500]
    py-[10px]
    indent-[40px]
    w-[100%]
    border-2 
    border-[#F5F7F9]
    focus:border-[#007FFF]
`);

const searchIcon = ctl(`
    absolute
    top-[15px]
    left-[12px]
`);

const closeIcon = ctl(`
    absolute
    top-[15px]
    right-[12px]
    cursor-pointer
`);

export default Search;