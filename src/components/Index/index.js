import React, { PureComponent } from 'react';
import { http } from '../../http/index';
import { Divider } from 'antd';
import './index.scss';

class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            indexList: [],
        }
    }

    componentDidMount() {
        this.getIndexData();
    }

    async getIndexData() {
        try {
            let secids = '1.000001,0.399001,0.399005,0.399006,100.hsi';
            let ut = 'bd1d9ddb04089700cf9c27f6f7426281';
            let fid = 'f3';
            let fields = 'f1,f2,f3,f12,f13,f14,f152';
            let invt = '2';
            let cb = 'jQuery1124018985166152392718_1617702562239';
            let _ = '1617702562254';

            const res =  await http.get(`api/qt/ulist.np/get?secids=${secids}&ut=${ut}&fid=${fid}&fields=${fields}&invt=${invt}&cb=${cb}&_=${_}`);
            let jsonStr = res.data.match(/\{([^)]*)\}/);
            let { data } = JSON.parse(jsonStr[0]);
            this.setState({
                indexList: data.diff
            })

        } catch(err) {

        }
    }

    render() {
        return (
            <div className="index-block">
                {
                    this.state.indexList.map((item, key) => {
                        if(item.f12 === "000001" || item.f12 === "399001" || item.f12 === "399006") {
                            return (
                                <div className="index-item" key={key} style={{color: item.f3 > 0 ? 'red' : 'green'}}>
                                    <div className="index-data">
                                        <span>{item.f14}</span>
                                        <span>{item.f2 / 100}</span>
                                        <span>{item.f3 / 100}%</span>
                                    </div>
                                    <Divider style={{height: '40px'}} type="vertical"/>
                                </div>
                            )
                        }
                        return null;
                    })
                }
            </div>
        )
    }
}

export default Index