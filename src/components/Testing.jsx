import React, { useState } from 'react';

const FirstMenu = ({ items, onItemClick }) => {
    return (
        <div>
            <h2>First Menu</h2>
            {items.map(item => (
                <button 
                    key={item.id} 
                    onClick={() => onItemClick(item.id)}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
}

const SecondMenu = ({ selectedItem, secondMenuItems, onSecondMenuItemClick }) => {
    return (
        <div>
            <h2>Second Menu</h2>
            <p>Selected item: {selectedItem ? selectedItem.title : 'None'}</p>
            {secondMenuItems && (
                <div>
                    <h3>Second Menu Items</h3>
                    {secondMenuItems.map(item => (
                        <button 
                            key={item.id} 
                            onClick={() => onSecondMenuItemClick(item.id)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

const TwoWayMenu = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [secondMenuItems, setSecondMenuItems] = useState([]);

    const firstMenuItems = [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' }
    ];

    const secondMenuOptions = {
        1: [
            { id: 11, title: 'Option 1.1' },
            { id: 12, title: 'Option 1.2' },
            { id: 13, title: 'Option 1.3' }
        ],
        2: [
            { id: 21, title: 'Option 2.1' },
            { id: 22, title: 'Option 2.2' },
            { id: 23, title: 'Option 2.3' }
        ],
        3: [
            { id: 31, title: 'Option 3.1' },
            { id: 32, title: 'Option 3.2' },
            { id: 33, title: 'Option 3.3' }
        ]
    };

    const handleFirstMenuItemClick = (itemId) => {
        const selectedItem = firstMenuItems.find(item => item.id === itemId);
        setSelectedItem(selectedItem);
        setSecondMenuItems(secondMenuOptions[itemId]);
    };

    const handleSecondMenuItemClick = (itemId) => {
        // Handle click on second menu item
    };

    return (
        <div>
            <FirstMenu items={firstMenuItems} onItemClick={handleFirstMenuItemClick} />
            <SecondMenu 
                selectedItem={selectedItem} 
                secondMenuItems={secondMenuItems} 
                onSecondMenuItemClick={handleSecondMenuItemClick} 
            />
        </div>
    );
}

export default TwoWayMenu;
