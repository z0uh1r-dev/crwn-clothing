import { takeLatest, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchCollectionsSuccess, fetchCollectionsFail } from './shop.actions'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshop = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshop);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([ call(fetchCollectionsStart) ]);
}