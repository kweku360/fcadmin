import React, { Component } from "react";
import Link from "next/link";
import fetch from 'isomorphic-unfetch'
import Layout from "../src/components/layout/master";
import Table from "../src/components/datatable";
import { Grid, GridColumn, Header, HeaderContent } from "semantic-ui-react";


function GameList(props){
  const {games} = props;
  let gamelist = "";
  if(Array.isArray(games)){
     gamelist = games.map((game)=>{
      return (
      <tr key={game.id}>
      <td>{game.id}</td>
      <td>{game.name}</td>
      <td>{game.duration}</td>
      <td>{game.playercount}</td>
      <td>{game.maxplayers}</td>
      <td>{game.entryfee}</td>
      </tr>)
    })
  }
  // console.log(gamelist)
  return (gamelist);
}
  class Index extends Component {
      static async getInitialProps () {
        // eslint-disable-next-line no-undef
       const res = await fetch('http://localhost:8080/v1/game')
       const json = await res.json()
        // console.log(json)
        return { games: json }
        // return { stars: json.stargazers_count }
      }

      constructor(props) {
        super(props);
        this.state = {
          data : "kankam"
        }
      }
    
      componentDidMount() {
      }
    
      componentWillUnmount() {
      }
    render() {
      return (
        <div>
           <Grid>
             <GridColumn width="twelve">
              <Header>
                <HeaderContent>
                Manage Games
                </HeaderContent>
                <Header.Subheader>
                  Statistics and More
                </Header.Subheader>
              </Header>
              <GridColumn>
                <Table>
                  <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Current Player #</th>
                    <th>Max Players</th>
                    <th>Entry Fee</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Current Player #</th>
                    <th>Max Players</th>
                    <th>Entry Fee</th>
                    </tr>
                  </tfoot>
                  <tbody>
                      <GameList {...this.props} />
                  </tbody>
                </Table>
              </GridColumn>
             </GridColumn>
             <GridColumn width="two" floated='right'>

             </GridColumn>
           </Grid>
        </div>)
    }
  }

  const IndexWithLayout = Layout(Index,{title:"kankam"});
  export default IndexWithLayout;
  
