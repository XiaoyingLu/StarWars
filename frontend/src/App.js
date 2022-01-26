import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchAppBar from './features/appbar/SearchAppBar';
import CharacterTable from './features/characters/CharacterTable';
import CharacterDetails from './features/person/CharacterDetails';

function App() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <SearchAppBar />

            <Container maxWidth="mx" xs={{ m: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <CharacterTable />
                    </Grid>
                    <Grid item xs={8}>
                        <CharacterDetails />
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
}

export default App;
