import SabpaisaPaymentGateway from "../../SabpaisaPaymentGateway";
import React, { useEffect, } from "react";

export default class SubWrapper extends React.Component {

    render() {
        const params = window.location.href;
        console.log(params.split('?'));
        if(params.split('?').length === 1) {
            return(
                <>
    
                <div id='renderSabPaisa'></div>
                <SabpaisaPaymentGateway name={this.props.location.state.to_name}
                    address={this.props.location.state.address}
                    phone={this.props.location.state.phone} amount={this.props.location.state.amount} isOpen={true}
                    email={this.props.location.state.to_email}
                />
            </>
            )
        } else {
            return(
                <>
                Module to be implemented upon Production / Client Activation from SabPaisa</>
            )
        }
        
    }
}
    // useEffect(() => {
    //     const btn = document.getElementById('renderSabPaisa');
    //     btn.click();
    // }, [])

