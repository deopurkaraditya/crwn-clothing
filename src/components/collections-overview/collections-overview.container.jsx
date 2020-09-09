import{connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux'

import {selectCollectionFetching} from '../../redux/shop/shop.selector'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'

import React from 'react'


const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
})

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionsOverviewContainer