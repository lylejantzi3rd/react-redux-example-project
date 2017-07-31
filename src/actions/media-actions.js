import * as types from './action-types';
import axios from 'axios';

export const fetchMediaItemsSuccess = (media) => {
  return {
    type: types.FETCH_MEDIA_ITEMS_SUCCESS,
    media
  }
}

export const fetchMediaItems = () => {
  return (dispatch) => {
    return axios({
        method: 'get',
        url: 'mediaData.json'
      }).then(response => {
        dispatch(fetchMediaItemsSuccess(response.data));
      }).catch(error => {
        throw error;
      });
  }
}
