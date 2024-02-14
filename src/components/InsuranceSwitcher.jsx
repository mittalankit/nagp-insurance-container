import React, { Component, useState } from 'react';

import InsuranceDetails from "insurance_detail_app/InsuranceDetails";
import PolicyRenewal from "insurance_detail_app/PolicyRenewal";
  
class InsuranceSwitcher extends Component {

    state = {
        renderView: 1
    };

    clickBtn = e => {
        this.setState({
            renderView: e.target.value
        });
    };

    render() {
        return (
            <div className="switcher">
                <nav className="navigation">
                    <button value={1} onClick={this.clickBtn} disabled={this.state.renderView == 1 ? 'true'.length > 0 : false} 
                    className={this.state.renderView == 1 ? 'btn-parent active' : 'btn-parent disabled'}>Insurance Detail</button>
                    <button value={2} onClick={this.clickBtn} disabled={this.state.renderView == 2 ? 'true'.length > 0 : false}
                    className={this.state.renderView == 2 ? 'btn-parent active' : 'btn-parent disabled'}>Policy Renew</button>
                </nav>
                <div className="gameboard">
                    {this.state.renderView == 2 ? (<InsuranceDetails />) : (<PolicyRenewal />)}
                </div>
                
            </div>
        )
    };
}

export default InsuranceSwitcher;