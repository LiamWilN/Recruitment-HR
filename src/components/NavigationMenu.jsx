import { Globe, Telescope, PencilLine } from 'lucide-react';
import DetailContents from '../assets/contents.details.json';

export const HiddenMenu = ({ onItemClicked }) => {
    const icons = {
        0: <Globe absoluteStrokeWidth />,
        1: <Telescope absoluteStrokeWidth />,
        2: <PencilLine absoluteStrokeWidth />
    };

    return (
        <div className='w-screen bg-slate-100/50 h-48 flex md:hidden flex-col items-center justify-center font-semibold text-md gap-2'>
            {DetailContents.NavigationLinks.map((item) => (
                <div className='py-2 flex w-4/5 justify-end items-center gap-2 rounded-lg pr-4 bg-white shadow-lg' key={item.id}>
                    {icons[item.id]}
                    <button title={item.title} onClick={() => {
                        onItemClicked(item.title)
                        }
                    }>{item.title}</button>    
                </div>
            ))}
        </div>
    );
}

export const MainMenu = ({ onItemClicked }) => {
    return (
        <>
            {DetailContents.NavigationLinks.map((item) => (
                <button title={item.title} key={item.id} className={` w-26 gap-2 mx-4 font-bold`} onClick={() => {
                    onItemClicked(item.title)
                    }
                }>{item.title}</button>
            ))}
        </>
    );
}
