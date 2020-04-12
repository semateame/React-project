import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sendmoney from '../components/sendmoney'
import Addcountry from '../components/addCountry'
import * as actionType from '../store/action/countryAction'


class Country extends Component {

    componentDidMount() {
        this.props.onFetchPostsAsyn()

    }
    componentDidUpdate() {
        this.props.onAddCountry()
    }

    render() {
        return (
            <div>
                <Sendmoney posts={this.props.posts} />

            </div>
        );
    }
}

const mapStateToProps = state => {
    //this object will be merged to props
    return {
         posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    //this object will be merged to props
    return {

        onFetchPostsAsyn: () => dispatch(actionType.fetchPostAsync()),
        onAddCountry: (item) =>  dispatch(actionType.postCountryAsync(item))

    }
}

//connect takes function which returns another function that takes a function (counter)
export default connect(mapStateToProps, mapDispatchToProps)(Country)
