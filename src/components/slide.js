import React from "react"

let src;

class SlideComponent extends React.PureComponent{

    constructor(props){
        super(props);

        src = this.props.src || 'https://slides.com/zericardo/teste/embed';

        
        this.state = {
            width: 0,
            height: 0 + 39
        };
    }

    componentDidMount() {
        window.addEventListener("resize", (this.resize.bind(this)));
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


export default SlideComponent
