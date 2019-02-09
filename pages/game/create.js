import React, { Component } from "react";
import Link from "next/link";
import fetch from 'isomorphic-unfetch'
import Layout from "../../src/components/layout/master";
import Ampa from "../../ampajs/ampa";
import { Button, Dropdown, Grid, GridColumn, Header, HeaderContent, Segment, Form, Input, Divider } from "semantic-ui-react";

function GameList(){
}
const duration = [ { key: 1, value: 'Weekly', text: 'Weekly' }  ];

  class List extends Component {
      static async getInitialProps () {
       return "default"
      }
      static async postForm (state) {
        return "default"
       }

      constructor(props) {
        super(props);
        this.state = {
            name: '',nameError:true,duration:'',maxplayer:'',playercount:'0',eventid:'1',gametax:'0',entryfee:'0',
            formvalidate:{}

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.AmpaValidate = this.AmpaValidate.bind(this);
      }

      handleChange(event,value) {
      //  console.log(value);
        this.setState({
          [value.name]: value.value
        });
       // this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();
      }

      AmpaValidate(obj) {
        this.setState({formvalidate:obj})
       console.log(obj);
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
                    Create New Game
                </HeaderContent>
                <Header.Subheader>
                  Add A Game to Fantasy Cup
                </Header.Subheader>
              </Header>
              </GridColumn>
            </Grid>
            <Grid>
             <GridColumn width="two"/>
             <GridColumn  width="twelve">
                <Segment textAlign="center" className="la-content-main">
                 <Ampa ampamodel={this.handleChange}>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Field inline >
                        <label>Game Name</label>
                       <Input name="name" ampa={"required|email"} value={this.state.name}  placeholder='game name' />
                    </Form.Field>
                    
                        <Form.Select name="duration" inline label='Duration' options={duration} placeholder='Duration'  value={this.state.duration}/>
                    
                    <Form.Field inline>
                        <label>Max Players</label>
                       <Input name="maxplayer" placeholder='maximun players' value={this.state.maxplayer} />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Game Tax</label>
                       <Input name="gametax" value={this.state.gametax} placeholder='tax' />
                    </Form.Field>
                    <Form.Field inline>
                        <label>Entry Fee</label>
                       <Input name="entryfee" value={this.state.entryfee} placeholder='entry fee' />
                    </Form.Field>
                    <Divider/>
                     <Button primary type='submit'>Submit</Button>
                     <Button type='cancel'>Cancel</Button>
                     </Form>
                  </Ampa>
                </Segment>
             </GridColumn>
            </Grid>
  
        </div>)
    }
  }

  const ListGameWithLayout = Layout(List,{title:"All Games - FantasyCup"});
  export default ListGameWithLayout;
  