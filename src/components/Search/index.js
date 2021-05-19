import React, { PureComponent } from 'react';
import { Input } from 'antd';

class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Input placeholder="搜索" className="app-search" style={{backgroundColor: '#24292e', border: '1px solid #444d56'}} />
        )
    }
}

export default Index