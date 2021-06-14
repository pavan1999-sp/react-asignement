  
import { combineReducers } from 'redux';
import {GetCities , GetCityDetails } from './reducers/reducer'


export const appstate= combineReducers({
    getCities : GetCities,
    getCityStores : GetCityDetails,
})