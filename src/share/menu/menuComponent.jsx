import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
export const MenuComponent = (props: Props) => {
    const handleItemClick = (e, { name }) => console.log(name)
    return (
        <Menu>
            <Menu.Item
                name='editorials'
                active={false}
                content='Editorials'
                onClick={handleItemClick}
            />
            <Menu.Item
                name='reviews'
                active={false}
                content='Reviews'
                onClick={handleItemClick}
            />
        </Menu>
    )
}