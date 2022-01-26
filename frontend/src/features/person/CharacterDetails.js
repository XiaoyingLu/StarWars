import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import { getCharacterDetails } from './personSlice'

function FlexTextFields(props) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {Object.keys(props).map((key, i) => (
                <TextField
                    key={i}
                    label={key}
                    value={props[key]}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '26ch' }}
                    size="medium"
                    InputProps={{
                        readOnly: true,
                    }}
                />)
            )}
        </Box>
    )
}

function CharacterDetails() {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters);
    const person = useSelector(state => state.person.data);
    const status = useSelector(state => state.person.status);
    console.log(status);

    const fetchPerson = useCallback(() => {
        dispatch(getCharacterDetails(characters.selectedId));
    }, [characters.selectedId])

    useEffect(() => {
        if (characters.selectedId >= 0) {
            fetchPerson();
        }
    }, [fetchPerson, characters.selectedId]);

    Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

    return (
        <Card sx={{ maxWidth: "mx", p: 2, m: 2 }} spacing={2} >
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mx: "auto", textAlign: 'center' }}>
                
                <Avatar src="/broken-image.jpg" sx={{ bgcolor: (theme) => theme.palette.secondary.main }} aria-label="character avatar" />
                <Typography variant="h5" component="div" align="center" sx={{ m: 2}}>
                    {person.name}
                </Typography>
                
            </Stack>
            {status === "loading" ? 
            <CardContent direction="row" justifyContent="center" alignItems="center" sx={{ mx: "auto", textAlign: 'center', height: 200 }}>
                <CircularProgress sx={{ m: 8 }} spacing={10}/>
            </CardContent>
            :
            Object.keys(person).length <= 0 ? 
            <CardContent>
                <Typography variant="body1" sx={{ m: 1.5 }}> Select a character from the left list or search a character by id to see the details information </Typography>
            </CardContent>
            :
            <CardContent>
                <FlexTextFields {...Object.filter(person, value => typeof(value) === "string")} />
                <div>
                    <Typography variant="h6" sx={{ m: 1.5 }}>
                        Home planet
                    </Typography>
                    <FlexTextFields {...person.homePlanet} />
                </div>
                <div>
                    <Typography variant="h6" sx={{ m: 1.5 }}>
                        Species
                    </Typography>
                    {person && person.species && person.species.length > 0 ? person.species.map((specie, index) => {
                        return <FlexTextFields {...specie} key={index} />
                    }) : <Typography variant="p" sx={{ m: 1.5 }}> Not available </Typography>}
                </div>
                <div>
                    <Typography variant="h6" sx={{ m: 1.5 }}>
                        Films
                    </Typography>
                    {person && person.films && person.films.length > 0 ? person.films.map((film, index) => {
                        return <FlexTextFields {...film} key={index} />
                    }) : <Typography variant="body1" sx={{ m: 1.5 }}> Not available </Typography>}
                </div>
            </CardContent>           
            }
        </Card>
    );
}

export default CharacterDetails;
