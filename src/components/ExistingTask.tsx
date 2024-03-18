"use client"

import { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import ArrowIcon from "./icons/ArrowIcon";
import CloseIconRed from "./icons/CloseIconRed";
import EditIcon from "./icons/EditIcon";
import DownArrow from "./icons/DownArrow";

type TaskProps = {
    task: string,
    id?: string,
    details: string,
    editItem?: React.MouseEventHandler<HTMLSpanElement>
}

const ExistingTask = ({task, id, details, editItem}: TaskProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [revealDetails, setReavelDetails] = useState(false);

    const showDetails = () => {
        setReavelDetails(true);
    }

    const hideDetails = () => {
        setReavelDetails(false);
    }

    return (
        <div className="bg-[#F5F7F9] rounded-[20px] p-[20px] flex items-baseline">
            <input 
                type="checkbox" 
                id={id} 
                checked={isChecked} 
                className="mr-[10px] w-[20px] h-[16px] border-4"
                onChange={() => setIsChecked((prev) => !prev)}
            />
            <div className="w-[100%]">
                <div className="flex justify-between">
                    <h3 className={`${title} ${isChecked? "line-through": "" }`}>
                        {task}
                    </h3>

                    {!revealDetails &&
                        <span className={pointer} onClick={showDetails}>
                            <DownArrow />
                        </span>
                    }
                    {revealDetails &&
                        <div className="flex gap-[18px]">
                            <span className={pointer} onClick={hideDetails}>
                                <ArrowIcon />
                            </span>
                            <span className={pointer} onClick={editItem}>
                                <EditIcon />
                            </span>
                            <span className={pointer}>
                                <CloseIconRed />
                            </span>
                        </div>
                    }
                </div>
                {revealDetails &&
                    <p className="text-[#8D9CB8] pt-2">
                        {details}
                    </p>
                }
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
export default ExistingTask;