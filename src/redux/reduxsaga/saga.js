
import { takeEvery} from 'redux-saga/effects';
import { getCities , getCityData } from './getFoodDetails';

export  function* RootSaga(){
    yield takeEvery("GET_CITIES",getCities)
    yield takeEvery("GET-CITY_DATA",getCityData)
}