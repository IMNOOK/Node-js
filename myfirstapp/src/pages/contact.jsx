import React from 'react';

class BusinessName extends React.Component{
    constructor(props){
        super(props);
        this.state = {brand:"개발자의 품격", region:'제주'};
    }

    ChangeBrand = () =>{
        this.setState({brand: "lee min wook"});
    }

    render(){
        return(
            //div로 감싸주어야 오류가 안뜸 ㅋㅋ
            <div>
                <h1>{this.props.brand}</h1>
                <h1>{this.state.brand}</h1>
                <button type="button" className="btn btn-primary" onClick={this.ChangeBrand}>
                    Change brand
                </button>
            </div>
        );
    }
}

class Contact extends React.Component{
    render(){
        return (
        <div>
            <BusinessName brand="개발자의품격"/>
            <ul className="list-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
        )
    }
}

export default Contact;