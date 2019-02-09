import React, { Component } from "react";
import Link from "next/link";
import { Menu, MenuItem,Input, Header,Dropdown } from 'semantic-ui-react'

  class Sidebar extends Component {
    constructor(props) {
        super(props);
      }
      componentDidMount() {
      }
    
      componentWillUnmount() {
      }
    render() {
      return (
        <div>
           <div className="la-logo-area">
           </div>
           <Menu pointing secondary={true} fluid={true} vertical>
            <MenuItem>
             <Input placeholder='Search...' />
            </MenuItem>
            <MenuItem>
             <Header className='la-nav__header'>Navigation</Header>
            </MenuItem>
            <MenuItem>
            <Dropdown icon='gamepad' className="la-nav__item item la-nav__item__a"  item text='Game'>
                <Dropdown.Menu>
                <Link href={`/game/create`} passHref>
                    <Dropdown.Item icon='plus' text='Add New Game' />
                </Link>
                    <Dropdown.Item icon='globe' text='Manage Games' />
                </Dropdown.Menu>
            </Dropdown>
            </MenuItem>
            {/* <div className="la-nav__item">
                <a className="item la-nav__item__a">
                    <i className="keyboard layout icon"></i> Events
                </a>
                <a className="item la-nav__item__a">
                    <i className="user layout icon"></i> Players
                </a>
                <a className="item la-nav__item__a">
                    <i className="euro sign layout icon"></i> Transactions
                </a>
            </div> */}
           </Menu>
        </div>)
    }
  }
  export default Sidebar;