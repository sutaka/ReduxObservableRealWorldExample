import * as React from "react";
import {connect} from "react-redux";
import {ping} from "../module/sample";

const mapStateToProps= (state) => {
    return {
        isPinging: state.sample.isPinging
    }
};

const mapDispatchToProps= (dispatch) => {
    return {
        onPing: () => {
            console.log('hey1');
            dispatch(ping());
            console.log('hey2');
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Sample extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                hey
                {this.props.isPinging.toString()}
                <button onClick={this.props.onPing}>
                    hey
                </button>
            </div>

        )
    }
}