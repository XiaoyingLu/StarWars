import { createSlice } from '@reduxjs/toolkit';
import { client } from '../../client';

const initialState = {
    status: 'idle',
    data: [],
    selectedId: -1,
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    peopleLoading(state, action) {
        state.status = 'loading'
    },
    peopleLoaded(state, action) {
        state.status = 'idle';
        state.data = action.payload;
        console.log(state);
    },
    personSelected(state, action) {
        const personId = action.payload;
        console.log(personId);
        state.selectedId = personId;
    },
  }
})

export const { 
    peopleLoading, 
    peopleLoaded, 
    personSelected 
} = charactersSlice.actions

export default charactersSlice

// Thunk function
export const getCharacterList = () => async (dispatch) => {
    dispatch(peopleLoading())
    const response = await client.get(process.env.REACT_APP_API_ROOT + 'people')
    dispatch(peopleLoaded(response))
}