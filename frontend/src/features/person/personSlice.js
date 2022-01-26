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

// Thunk function
export const getCharacterDetails = (id) => async (dispatch) => {
    dispatch(personLoading())
    const response = await client.get(process.env.REACT_APP_API_ROOT + 'people/' + id)
    dispatch(personLoaded(response))
}