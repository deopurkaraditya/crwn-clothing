import React from 'react';
import {Route} from 'react-router-dom'
import{connect} from 'react-redux'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../collection/collection.container'

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions'


// import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'


class ShopPage extends React.Component {

    // state = {
    //     loading: true
    // }

    // unSubscribeFromSnapshot = null;

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync()
    }

    render(){
        const {match} = this.props;
        // const {loading} = this.state;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component ={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
            </div>
        )
    }
}

// const mapStateToProps = createStructuredSelector({
//     isCollectionsLoaded: selectCollectionsLoaded
// })

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null,mapDispatchToProps) (ShopPage);