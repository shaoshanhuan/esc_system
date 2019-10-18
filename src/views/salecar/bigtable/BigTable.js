import React, {Component} from 'react';
import {connect} from 'dva';
import {Table, Button, Modal} from 'antd';

import columnsMap from './columnsMap.js';
import './bigtable.less';
import ModalInner from './ModalInner.js';

@connect(
    ({bigtable}) => ({
        ...bigtable
    })
)
export default class BigTable extends Component {
    constructor () {
        super();
        this.state = {
            showChangeColumnModal: true
        };
    }
    // 组件即将上树
    componentWillMount () {
        this.props.dispatch({'type': 'bigtable/GETCOLUMNSFROMLOCALSTORAGE'});
    }
    render () {
        return (
            <div>
                <Modal
                    title="请调整表格列的显示"
                    visible={this.state.showChangeColumnModal}
                >
                    <ModalInner />
                </Modal>

                <div className="button_box">
                    <Button
                        className="btn"
                        type="primary"
                        shape="circle"
                        icon="setting"
                        onClick={()=>{
                            this.setState({
                                showChangeColumnModal: true
                            });
                        }}
                    />
                </div>
                <Table
                    columns={
                        this.props.columnArr.map(str => ({
                            'key': str,
                            'dataIndex': str,
                            ...columnsMap[str]
                        }))
                    }
                />
            </div>
        );
    }
}
