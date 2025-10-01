import { Component } from "react";
import Card from "../Layout/classCompo/Card";
import data from "../Layout/data";

class CardLayout extends Component{
    render(){
        return(
            <>
                <h1 className="text-center mt-5 text-capitalize mb-4">Card Design Using Class component</h1>
                <div className="container">
                    <div className="row">
                        {
                            data.map((ele) => {
                                return (
                                    <div className="col-lg-4 g-4 mb-3">
                                        <Card title={ele.title} desc={ele.desc} profile={ele.profile}  />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default CardLayout