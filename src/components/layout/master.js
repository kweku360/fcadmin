import React, { Component } from "react";
import {withRouter} from 'next/router'
import { Container, Grid, GridColumn } from 'semantic-ui-react'
import Sidebar from "../layout/sidebar";
import Topbar from "../layout/topbar";
import Apphead from "../layout/apphead";


function Layout(WrappedComponent,props = {}) {
    return withRouter (class extends React.Component {
        static getInitialProps(ctx) {
            if(WrappedComponent.getInitialProps)
                return WrappedComponent.getInitialProps(ctx);
        }
      constructor(props) {
        super(props);
        this.state = {};
      }
      componentDidMount() {}
  
      componentWillUnmount() {}
  
      render() {
        return(
            <div>
                {props.title}
                <Apphead title={props.title} />
                <Container fluid={true}>
                    <Grid>
                        <GridColumn className="la-side-area" width="three">
                             <Sidebar />
                        </GridColumn>
                        <GridColumn width="thirteen">
                             <Topbar />
                             <WrappedComponent {...this.props} />
                        </GridColumn>
                    </Grid>
                </Container>
            </div>
        ) 
      }
    });
  }

  const withLayout = Layout;
  export default withLayout;