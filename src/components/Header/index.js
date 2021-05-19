import React, { PureComponent } from 'react';
import './index.scss';
import logo from '../../images/logo.png';
import Search from '../Search/index';

class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="app-header">
                <img src={logo} alt="logo" className="app-logo" />
                <div className="search-box">
                    <Search/>
                </div>
            </div>
        )
    }
}

export default Index