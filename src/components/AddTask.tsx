"use client"

import { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import AddIcon from "./icons/AddIcon";
import PenIcon from "./icons/PenIcon";

type AddTaskProps = {
    taskTitle?: string,
    taskDetail?: string
}

const AddTask = ({taskTitle, taskDetail}: AddTaskProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [task, setTask] = useState("");
    const [detail, setDetail] = useState("");

    const handleOnFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => { 
        setIsFocused(false);
    }; 

    const addTitle = () => {
        setTask("")
    }

    return (
        <form className="pb-[20px]">
            <div className={inputWrapper}>
                <span>
                    <AddIcon color={!isFocused? "#C6CFDC" : "#007FFF"} />
                </span>
                <input 
                    type="text" 
                    placeholder="Add a new task..." 
                    onFocus={handleOnFocus}
                    onBlur={handleBlur} 
                    onChange={e => setTask(e.target.value)}
                    className="text-[18px] font-semibold placeholder-[#8D9CB8] w-full"
                />
            </div>

            {task.length > 0 &&
                <div className={`${inputWrapper} ${addnote}`}>
                    <span>
                        <PenIcon color="#C6CFDC" />
                    </span>
                    <input 
                        type="text" 
                        placeholder="Add a note..." 
                        onChange={e => setDetail(e.target.value)}
                        className="text-[18px] font-semibold placeholder-[#C6CFDC] w-full"
                    />
                </div>
            }
        </form>
    );
}

const inputWrapper = ctl(`
    flex 
    gap-[20px] 
    pl-[20px]
`);

const addnote = ctl(`
    pt-[20px]
`);
export default AddTask;