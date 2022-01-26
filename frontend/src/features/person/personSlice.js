import { createSlice } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
    status: 'idle',
    data: {}
}

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    personLoading(state, action) {
        state.status = 'loading'
        state.data = {};
    },
    personLoaded(state, action) {
        state.status = 'idle';
        state.data = action.payload;
        console.log(state);
    }
  }
})

export const { 
    personLoading, 
    personLoaded 
} = personSlice.actions

export default personSlice

const API_ROOT = 'http://localhost:8080';

// Thunk function
export const getCharacterDetails = (id) => async (dispatch) => {
    dispatch(personLoading())
    const response = await client.get(API_ROOT + '/people/' + id)
    dispatch(personLoaded(response))
}