import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" style={{ background: "#453259" }}>
                    <Tabs centered onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2" className='cursor2'>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                        O nosso blog espacial é um espaço dedicado a entusiastas do espaço compartilharem suas opiniões e ideias sobre o universo. Nele, os leitores podem discutir descobertas científicas, avanços tecnológicos, teorias cósmicas e exploração espacial, além de contribuir
                        com suas próprias observações astronômicas. Com um ambiente de diálogo aberto e inclusivo, nosso objetivo é reunir uma comunidade vibrante e inspiradora, onde todos possam aprender, se inspirar e expandir seu conhecimento sobre o cosmos, desvendando os mistérios do universo e explorando suas maravilhas desconhecidas.
                        Junte-se a nós nessa jornada emocionante de descoberta espacial, onde as opiniões e perspectivas de todos são valorizadas. Compartilhe suas ideias, participe das discussões e contribua com suas próprias experiências e conhecimentos. O espaço nos aguarda, então vamos explorá-lo juntos e desvendar os segredos fascinantes do universo!
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;