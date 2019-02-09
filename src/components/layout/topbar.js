import React, { Component } from "react";
import { Grid, GridColumn, Button, Label, Dropdown, Image, Menu, MenuItem, Divider } from "semantic-ui-react";

const options = [
  { key: 'edit', icon: 'edit', text: 'Edit Post', value: 'edit' },
  { key: 'delete', icon: 'delete', text: 'Remove Post', value: 'delete' },
  { key: 'hide', icon: 'hide', text: 'Hide Post', value: 'hide' },
]
  class Topbar extends Component {
    constructor(props) {
        super(props);
      }
      componentDidMount() {
      }
    
      componentWillUnmount() {
      }
    render() {
      return (
           <div className="la-contenttop-area">
            <Grid>
              <GridColumn width="five" floated="right">
                <Button className="la-contenttop-area__messages" icon basic>
                  <i className="icon bell outline"></i>
                  <Label size="tiny" color="red" floating>22</Label>
                </Button>
                <Button className="la-contenttop-area__messages" icon basic>
                  <i className="icon mail"></i>
                  <Label size="tiny" color="red" floating>22</Label>
                </Button>
                <Dropdown inline floating>
                <div className="text">
                  <Image avatar src="../static/images/jenny.jpg" />
                  Kweku Kankam
                  <i className="dropdown icon"></i>
                  <Menu>
                    <MenuItem>
                     <i className="user icon gold"></i> Profile
                    </MenuItem>
                    <MenuItem>
                     <i className="file code icon orange"></i> Settings
                    </MenuItem>
                    <MenuItem>
                     <i className="sign out alternate icon blue"></i> Log Out
                    </MenuItem>
                  </Menu>
                </div>
              </Dropdown>
              </GridColumn>
            </Grid>
           <Divider />
           </div>)
    }
  }
  export default Topbar;