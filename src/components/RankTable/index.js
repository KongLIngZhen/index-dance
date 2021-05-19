import React, { PureComponent } from 'react';
import { Route as NavLink } from "react-router-dom";
import { http3 } from '../../http/index';
import { Table } from 'antd';

class Index extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
        }
    }
    
    componentDidMount() {
        this.getTableList();
    }

    async getTableList() {
        try {
           const res = await http3.post('api/getRankTable');
           let { data } = res;
           console.log('data======>', data.data);
           let list = [];
           list = data.data.datas.map((item, i) => {
               let arr = item.split(',');
               let obj = {};
               obj.key = i;
               obj.code = arr[0];
               obj.name = arr[1];
               obj.date = arr[3];
               obj.dwjz = arr[4];
               obj.ljjz = arr[5];
               obj.dayrate = arr[6];
               obj.oneweek = arr[7];
               obj.onemonth = arr[8];
               obj.threemonth = arr[9];
               obj.sixmonth = arr[10];
               return obj;
           })
           console.log(list);

           if(data.status === 200) {
               this.setState({
                   list: list
               })
           }

        } catch(err) {
            console.log(err);
        }
    }

    render() {
        const columns = [
            {
                title: '基金代码',
                dataIndex: 'code',
            },
            {
                title: '基金名称',
                dataIndex: 'name',
                width: '100px',
                render: (text, record) => {
                    return (
                        <NavLink to={`/fund/details/${record.code}`}>{text}</NavLink>
                    )
                }
            },
            {
                title: '日期',
                dataIndex: 'date',
                sorter: (a, b) => {
                    return new Date(a.date) - new Date(b.date)
                }
            },
            {
                title: '单位净值',
                dataIndex: 'dwjz',
                align: 'right',
                sorter: (a, b) => a.dwjz - b.dwjz
            },
            {
                title: '累计净值',
                dataIndex: 'ljjz',
                align: 'right',
                sorter: (a, b) => a.ljjz - b.ljjz
            },
            {
                title: '日增长率',
                dataIndex: 'dayrate',
                align: 'right',
                sorter: (a, b) => a.dayrate - b.dayrate
            },
            {
                title: '近1周',
                dataIndex: 'oneweek',
                align: 'right',
                sorter: (a, b) => a.oneweek - b.oneweek
            },
            {
                title: '近1月',
                dataIndex: 'onemonth',
                align: 'right',
                sorter: (a, b) => a.onemonth - b.onemonth
            },
            {
                title: '近3月',
                dataIndex: 'threemonth',
                align: 'right',
                sorter: (a, b) => a.threemonth - b.threemonth
            },
            {
                title: '近6月',
                dataIndex: 'sixmonth',
                align: 'right',
                sorter: (a, b) => a.sixmonth - b.sixmonth
            },
        ];
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={this.state.list}
                    size="small"
                    bordered
                    title={() => 'Header'}
                    footer={() => 'Footer'}
                />
            </div>
        )
    }
}

export default Index