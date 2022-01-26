import { configureStore } from '@reduxjs/toolkit';

import charactersSlice from './features/characters/charactersSlice';
import personSlice from './features/person/personSlice';

const store = configureStore({
    reducer: {
      characters: charactersSlice.reducer,
      person: personSlice.reducer,
    }
  })
  
  export default store