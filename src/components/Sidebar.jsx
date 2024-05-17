import React from 'react'
import { useState } from 'react'
import { List, ListEnd } from 'lucide-react';

const Sidebar = ({props}) => {

    const [currentPanel, panelState] = useState(false);

  return (
    <div className='flex justify-start'>
        <button onClick={ () => panelState(!currentPanel)}>
            {
                currentPanel ? <List /> : <ListEnd />
            }
        </button>
    </div>
  )
}

export default Sidebar