import { Globe, Telescope, PencilLine } from 'lucide-react'
import Sidebar from './Sidebar';

export const HiddenMenu = ({ props }) => {
    
    const IconKeys = [<Globe absoluteStrokeWidth />, <Telescope absoluteStrokeWidth />, <PencilLine absoluteStrokeWidth />];

    return (
        <div className='w-screen bg-slate-100 h-48 flex md:hidden flex-col items-center justify-center font-bold text-lg'>
            {
                props.items.map( (i) => {

                    return (
                        <div className='py-2 flex w-3/5 justify-end items-center gap-2' key={i.id}>
                            {IconKeys[i.id]}
                            <button title={i.title} onClick={ () => Sidebar(i.title) } > {i.title} </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const MainMenu = ({ props }) => {

    return (
        <>
            {
                props.items.map( (i) => {
                    return (
                        <button title={i.title} key={i.id} className='w-26 gap-2 mx-4 font-bold' onClick={ () => Sidebar(i.title) }>{i.title}</button>
                    )
                })
            }
        </>
    )
}