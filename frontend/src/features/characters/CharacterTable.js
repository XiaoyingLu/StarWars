import React, { useCallback, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { getCharacterList, personSelected } from './charactersSlice'
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Character name', width: 130 },
];

const useStyles = makeStyles((theme) => ({
    table: {
      fontSize: 16,
    },
  }));

function CharacterTable() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters);

    const fetchCharacters = useCallback(() => {
        dispatch(getCharacterList());
    }, [])
    
    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return (
        <div style={{ height: 650, width: '100%' }}>
            {characters.status === "loading" ? 
            <Box direction="row" justifyContent="center" alignItems="center" sx={{ mx: "auto", textAlign: 'center', height: 200 }}>
                <CircularProgress sx={{ m: 8 }} spacing={10}/>
            </Box>
            :
            <DataGrid
                dense
                className={classes.table}
                rows={characters.data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                onSelectionModelChange={ids => {
                    if (ids && ids.length > 0) {
                        dispatch(personSelected(ids[0]))
                    }
                }}
            />
            }
        </div>
    );
}


export default CharacterTable;
