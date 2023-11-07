import React, { useState, useEffect } from 'react';
import '../style.scss';

function MenuItem({ item, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState(item);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(editedItem);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedItem(item);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedItem({ ...editedItem, [name]: value });
    };

    return (
        <div className="menu-item" key={item.id}>
            {isEditing ? (
                <>
                    <input type="text" name="name" value={editedItem.name} onChange={handleInputChange} />
                    <input type="text" name="description" value={editedItem.description} onChange={handleInputChange} />
                    <input type="number" name="price" value={editedItem.price} onChange={handleInputChange} />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <>
                    <p className="menu-item-name">{item.name}</p>
                    <p className="menu-item-description">{item.description}</p>
                    <p className="menu-item-price">{item.price} ;- </p>
                    <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    );
}

function EditMenuItem({ item, onSave, onCancel }) {
    const [editedItem, setEditedItem] = useState(item);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedItem({ ...editedItem, [name]: value });
    };

    return (
        <div className="menu-item" key={item.id}>
            <input type="text" name="name" value={editedItem.name} onChange={handleInputChange} />
            <input type="text" name="description" value={editedItem.description} onChange={handleInputChange} />
            <input type="number" name="price" value={editedItem.price} onChange={handleInputChange} />
            <button onClick={() => onSave(editedItem)}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

function MenuGroup({ group, items, onEdit }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleEditItem = async (editedItem) => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/menus/menu-items/${editedItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedItem),
            });
            const data = await response.json();
            console.log(`Edited item with id ${data.id}`);
            onEdit(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="menu-group" key={group.id}>
            <button className="editable-menu-title" onClick={handleExpand}>
                {group.name}
            </button>

            {isExpanded && (
                <>
                    <hr className="menu-line" />
                    <div>
                        {items
                            .filter((item) => item.menu_group_id == group.id)
                            .map((item) => (
                                <MenuItem item={item} key={item.id} onEdit={handleEditItem} />
                            ))}
                    </div>
                </>
            )}
        </div>
    );
}

function FetchMenu({ onEdit }) {
    const [menuItems, setMenuItems] = useState([]);
    const [menuGroup, setMenuGroup] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const name = 'SummerMenu';

                const menuResponse = await fetch(`http://localhost:8080/api/v1/menus/${name}`);
                const menuData = await menuResponse.json();

                const menuGroupResponse = await fetch(`http://localhost:8080/api/v1/menus/menu-groups/menus/${menuData[0].id}`);
                const menuGroupData = await menuGroupResponse.json();

                const menuItemsData = [];
                for (let i = 0; i < menuGroupData.length; i++) {
                    const response = await fetch(`http://localhost:8080/api/v1/menus/menu-items/${menuGroupData[i].id}`);
                    const data = await response.json();
                    for (let j = 0; j < data.length; j++) {
                        menuItemsData.push(data[j]);
                    }
                }

                setMenuItems(menuItemsData);

                setMenuGroup(menuGroupData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMenuItems();
    }, []);

    return (
        <div className="">
            {menuGroup.length > 0 &&
                menuItems.length > 0 &&
                menuGroup.map((group) => (
                    <MenuGroup group={group} items={menuItems} key={group.id} onEdit={onEdit} />
                ))}
        </div>
    );
}

export default FetchMenu;