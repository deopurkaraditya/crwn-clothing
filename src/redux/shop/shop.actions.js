import ShopActionTypes from './shop.types'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())

        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-a681d/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections))

        collectionRef.get().then(snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
            // updateCollections(collectionsMap);
            this.setState({loading:false})
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}