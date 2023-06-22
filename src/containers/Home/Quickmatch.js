import React, { useState } from 'react';
import { Box, Stack, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';

const Quickmatch = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const [selectedGame, setSelectedGame] = useState('');

    const [selectedGameMode, setSelectedGameMode] = useState('');
    const [partyCapacity, setPartyCapacity] = useState('');
    const [recommendedLevel, setRecommendedLevel] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('');
    const [voiceCommunication, setVoiceCommunication] = useState('no');
    const [selectedOption, setSelectedOption] = useState('no');

    const handleCreateLFG = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };


    const handleGameChange = (event) => {
        setSelectedGame(event.target.value);
    };

    const handlePartyCapacityChange = (event) => {
        setPartyCapacity(event.target.value);
    };


    const handleGameModeChange = (event) => {
        setSelectedGameMode(event.target.value);
    };

    const handleRecommendedLevelChange = (event) => {
        setRecommendedLevel(event.target.value);
    };
    

    const handlePreferredLanguageChange = (event) => {
        setPreferredLanguage(event.target.value);
    };

    const handleVoiceCommunicationChange = (event) => {
        setVoiceCommunication(event.target.value);
        setSelectedOption(event.target.value);
    };

    const handleSubmitForm = () => {
        // Add your logic to handle form submission
        
        console.log('Selected Game:', selectedGame);
        console.log('Party Capacity:', partyCapacity);
        console.log('Recommended Level:', recommendedLevel);
        console.log('Preferred Language:', preferredLanguage);
        console.log('Voice Communication:', voiceCommunication);
        // Clear form fields
        
        setSelectedGame('');
        setPartyCapacity('');
        setRecommendedLevel('');
        setPreferredLanguage('');
        setVoiceCommunication('no');
        setSelectedOption('no');
        // Close the form
        setIsFormOpen(false);
    };

    return (
        <Box sx={{
            borderBox: 'box-sizing',
            padding: '30px',
            width: 1,
            height: 1,
            backgroundColor: 'primary.dark',
            border: 1,
            borderColor: '#242424',
            borderRadius: 5
        }}>
            <Stack>
                <h1>Quickmatch</h1>
                <Button
                    variant="contained"
                    sx={{
                        marginBottom: 1,
                        marginTop: 3,
                        background: '#6441a5'
                    }}
                    onClick={handleCreateLFG}
                >
                    Create LFG
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        marginBottom: 1,
                        marginTop: 3,
                        background: '#9641a5'
                    }}
                >
                    Manual LFG
                </Button>
            </Stack>

            <Dialog open={isFormOpen}
                onClose={handleCloseForm}
                PaperProps={{
                    sx: {
                        backgroundImage: 'linear-gradient(to bottom right, #6441a5, #9641a5)',
                    },
            }}>
                <DialogTitle>Create Lobby</DialogTitle>
                <DialogContent>
                    
                    <Select
                        value={selectedGame}
                        onChange={handleGameChange}
                        displayEmpty
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        <MenuItem value="" disabled>
                            Select Game
                        </MenuItem>
                        <MenuItem value="Game 1">Game 1</MenuItem>
                        <MenuItem value="Game 2">Game 2</MenuItem>
                        <MenuItem value="Game 3">Game 3</MenuItem>
                    </Select>
                    <Select
                        value={selectedGameMode}
                        onChange={handleGameModeChange}
                        displayEmpty
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        <MenuItem value="" disabled>
                            Select Game Mode
                        </MenuItem>
                        <MenuItem value="Mode 1">Mode 1</MenuItem>
                        <MenuItem value="Mode 2">Mode 2</MenuItem>
                        <MenuItem value="Mode 3">Mode 3</MenuItem>
                    </Select>
                    <TextField
                        label="Party Capacity"
                        value={partyCapacity}
                        onChange={handlePartyCapacityChange}
                        type="number"
                        fullWidth
                        sx={{ marginTop: 2 }}
                    />
                    <TextField
                        label="Recommended Level"
                        value={recommendedLevel}
                        onChange={handleRecommendedLevelChange}
                        type="number"
                        fullWidth
                        sx={{ marginTop: 2 }}
                    />
                    
                    <Select
                        value={preferredLanguage}
                        onChange={handlePreferredLanguageChange}
                        displayEmpty
                        fullWidth
                        sx={{ marginTop: 2 }}
                    >
                        <MenuItem value="" disabled>
                            Select Preferred Language
                        </MenuItem>
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Chinese">Chinese</MenuItem>
                    </Select>
                    <FormControl>
                        <FormLabel sx={{ marginTop: 2, marginLeft:1 }}id="demo-radio-buttons-group-label">Voice Comms</FormLabel>
                    <RadioGroup
                        value={selectedOption}
                        onChange={handleVoiceCommunicationChange}
                        row
                        sx={{  marginLeft:1 }}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseForm}>Cancel</Button>
                    <Button onClick={handleSubmitForm} variant="contained">Create</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Quickmatch;
