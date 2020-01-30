import React,{Component} from "react";

class CoolButton extends Component {
    render() {
        const classes="button"
        if('isDanger'in this.props){
            classes+= "is-danger"
        }
        if('isSmall'in this.props){
            classes+= " is-small" 
        }
        return(   
            <div>   
            <button className={classes}>{this.props.children}</button>
            </div>  
        )
    }
}
export default CoolButton; 