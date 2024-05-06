/** @format */

import React from 'react';
import { IoSearch } from "react-icons/io5";
import { cn } from '@/utils/cn';

type Props = {
    className?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

export default function SearchBox(props: Props) {
    return (
        <form onSubmit={props.onSubmit} 
        className={cn(
            "flex relative items-center justify-center h-10",
            props.className
        )}>
            <input 
            type="text"
            onChange={props.onChange}
            value={props.value}
            placeholder="Search location..." 
            className="px-4 py-2 w-[230px] border 
            border-gray-300 rounded-l-md focus:outline-none  
            focus:border-blue-500 h-full"
            />
            <button>
                <IoSearch />
            </button>
        </form>
    );
}