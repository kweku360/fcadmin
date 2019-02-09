import React, { Component } from "react";
import $ from "jquery";
import dataTable from "datatables.net";
function emptyTable(){
    return(
          <thead>
            <tr>
                <th>#</th>
                <th>data</th>
            </tr>
          </thead>
    )
}

class Table extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = {};
      }
      componentDidMount() {
        $('#datatable-responsive').dataTable();
        $(".dataTables_paginate").addClass("ui pagination menu");
        $(".dataTables_paginate a").addClass("item");
      }
  
      componentWillUnmount() {}
  
      render() {
        return(
            <div>
               <table id="datatable-responsive" className="ui celled table" cellSpacing="0" width="100%">
                {this.props.children || emptyTable()}
              </table>
            </div>
        ) 
      };
  }
  export default Table;

//   <thead>
// 										<tr>
// 										    <th>#</th>
// 										    <th>Serial Number</th>
// 										    <th>Model</th>
//                                             <th>Brand</th>
//                                             <th>Status</th>
// 										    <th>Actions</th>
// 										</tr>
// 									</thead>

// 									<tfoot>
// 										<tr>
//                                             <th>#</th>
//                                             <th>Serial Number</th>
//                                             <th>Model</th>
//                                             <th>Brand</th>
//                                             <th>Status</th>
//                                             <th>Actions</th>
// 										</tr>
// 									</tfoot>

// 									<tbody>
//                                         <tr>
//                                             <td>1</td>
//                                             <td>1001</td>
//                                             <td>telepower</td>
//                                             <td>tp300</td>
//                                             <td>true</td>
//                                             <td>none</td>
//                                         </tr>
//                                         <tr>
//                                             <td>2</td>
//                                             <td>1001</td>
//                                             <td>Olish</td>
//                                             <td>mosty</td>
//                                             <td>true</td>
//                                             <td>none</td>
//                                         </tr>
// 									</tbody>