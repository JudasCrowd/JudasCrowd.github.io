import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, Typography } from '@mui/material';
import { MyTheme } from './resources/themer';

function App() {
    return (
        <ThemeProvider theme={MyTheme}>
            <div className="App">
                <header style={{margin: 24}}>
                    <Typography sx={{fontSize: 24, fontWeight: 700}}>
                        Fuck that guy, he's a bitch!
                    </Typography>
                </header>
                <div style={{display: 'flex', flexGrow: 1, justifyContent: 'center', flexDirection: 'column'}}>
                    <Typography sx={{marginBottom: '24px'}}>Hi Yall!</Typography>
                    <div className='pulsate'>
                        <Typography sx={{fontSize: '40px', fontWeight: 700}} className={"rainbow-spectrum"}>
                            More Coming Soon!
                        </Typography>
                    </div>
                </div>
                <footer>
                    <Typography sx={{fontSize: '12px'}}>
                        Sigmund Frued was bored
                    </Typography>
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
