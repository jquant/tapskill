import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

class slidePage extends React.PureComponent{

    constructor(props){

        let src = this.props.src || 'https://slides.com/zericardo/teste/embed';

        super(props);
        this.state = {
            width: window.screen.width,
            height: window.screen.height + 39
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        
        this.setState({
            width: window.screen.width,
            height: window.screen.height + 39
        });
        
    }

    render(){
        return (
            <div>

            <iframe 
            src={src} 
            width={this.state.width} height={this.state.height} 
            scrolling="no" 
            allowFullScreen></iframe>

            </div>
        )
    }
}


export default slidePage
