function hChange(props){
    if(props.children.props.value != 20){
       console.log("error");
    }
}

function PropCheck(props){
    console.log(props.children)
    // this.props.children.
   // hChange(props);
    return <div>{props.children}</div>;
}
export default PropCheck;