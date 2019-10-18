import React, {Component} from 'react';
import {sortable} from 'react-sortable';

@sortable
export default class OneSmallElement extends Component {
    render () {
        return (
            <div className="onesmallelement" {...this.props}>
                小元素{this.props.children}
            </div>
        );
    }
}
