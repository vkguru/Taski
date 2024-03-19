"use client"

import { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import DeleteIcon from "./icons/DeleteIcon";

type TaskProps = {
    task: string,
    id?: string,
    details?: string,
    checked: boolean
}

const CompletedTask = ({task, id, details, checked}: TaskProps) => {
    // const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="bg-[#F5F7F9] rounded-[20px] p-[20px] flex items-baseline mb-[20px]">
            <input 
                type="checkbox" 
                id={id} 
                checked={checked} 
                className="mr-[10px] w-[20px] h-[16px] border-4"
            />
            <div className="w-[100%]">
                <div className="flex justify-between">
                    <h3 className={`${title}`}>
                        {task}
                    </h3>

                    <span className={pointer}>
                        <DeleteIcon />
                    </span>
                </div>
            </div>
        </div>
    )
}

const title = ctl(`
    text-[#3F3D56] 
    font-semibold 
    text-[18px]
`)

const pointer = ctl(`
    cursor-pointer
`)
export default CompletedTask;