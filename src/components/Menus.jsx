import { Globe, Telescope, PencilLine } from 'lucide-react'
import { useState } from 'react';
import Sidebar from './Sidebar';



export const HiddenMenu = ({ props }) => {

    const [item, setItem] = useState(null);
    
    const IconKeys = [<Globe absoluteStrokeWidth />, <Telescope absoluteStrokeWidth />, <PencilLine absoluteStrokeWidth />];

    return (
        <div className='w-screen bg-slate-100 h-48 flex md:hidden flex-col items-center justify-center font-bold text-lg'>
            {
                props.items.map( (i) => {

                    return (
                        <div className='py-2 flex w-3/5 justify-end items-center gap-2' key={i.id}>
                            {IconKeys[i.id]}
                            <button title={i.title} onClick={ () => setItem(i.title) } > {i.title} </button>
                            { console.log(item) }
                        </div>
                    )
                })
            }
        </div>
    )
}

export const MainMenu = ({ props }) => {

    const [item, setItem] = useState(null);

    return (
        <>
            {
                props.items.map( (i) => {
                    return (
                        <button title={i.title} key={i.id} className='w-26 gap-2 mx-4 font-bold' onClick={ () => setItem(i.title) }>
                            {i.title}
                            { console.log(item) }
                        </button>
                    )
                })
            }
        </>
    )
}

