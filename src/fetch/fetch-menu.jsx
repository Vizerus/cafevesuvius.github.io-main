import React, { useState, useEffect } from 'react';
import '../style.scss';


function FetchMenu() {
        const [menuItems, setMenuItems] = useState([]);
        const [menuGroup, setMenuGroup] = useState([]);

        const test = () => {
            for(let i = 0; i < menuItems.length; i++){
                menuItems[i].forEach((item) => {
                    console.log(item);
                });
            }
        }

        useEffect(() => {
            const fetchMenuItems = async () => {
                try {
                    const name = "SummerMenu";

                    const menuResponse = await fetch(`http://localhost:8080/api/v1/menus/${name}`);
                    const menuData = await menuResponse.json();

                    const menuGroupResponse = await fetch(`http://localhost:8080/api/v1/menus/menu-groups/menus/${menuData[0].id}`);
                    const menuGroupData = await menuGroupResponse.json();

                    const menuItemsData = [];
                    for(let i = 0; i < menuGroupData.length; i++){
                        const response = await fetch(`http://localhost:8080/api/v1/menus/menu-items/${menuGroupData[i].id}`);
                        const data = await response.json();
                        for(let j = 0; j < data.length; j++){
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
            test();
        }, []);

        return (
            <div className=''>
                {menuGroup.length > 0 && menuItems.length > 0 && menuGroup.map((group) => (
                <div className='menu-group' key={group.id}>
                    <p className='menu-title' value={group.id}>{group.name}</p>

                    <hr className="menu-line" />
                    <div>
                    {menuItems.filter((item) => item.menu_group_id == group.id).map((item) => (
                        <div className='menu-item' key={item.id}>
                        <p className='menu-item-name'>{item.name}</p>

                        <p className='menu-item-price'>{item.description} {item.price} ;-</p>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
              );
        }

export default FetchMenu;