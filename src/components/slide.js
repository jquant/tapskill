import React from "react"

let src;

class SlideComponent extends React.PureComponent{

    constructor(props){
        super(props);

        src = this.props.src || 'https://tapskill.slides.com/jozza/novo-deck/embed/';

        
        this.state = {
            width: 0,
            height: 0
        };
    }

    componentDidMount() {
        window.addEventListener("resize", (this.resize.bind(this)));
        this.resize();
    }
    
    resize() {
        
        this.setState({
            width: window.screen.width,
            height: window.screen.height
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


export default SlideComponent
