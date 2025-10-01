import { Component } from "react";

class CardUi extends Component{
    render(){
        return(

            <>
                <div className="card h-100 shadow border-0">
                    <img src={this.props.profile} alt="No Image" height={250} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title || "NA"} </h5>
                        <p className="card-title">{this.props.desc || "NA"} </p>
                    </div>
                </div>
            </>
        )
    }
}

export default CardUi