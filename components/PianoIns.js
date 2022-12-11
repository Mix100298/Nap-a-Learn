import { Center, Box } from "@chakra-ui/react"
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import Soundfont from 'soundfont-player';
import React, { useState, useEffect } from 'react';

function PianoIns() {

    const [count, setCount] = useState(0)
    const firstNote = MidiNumbers.fromNote('c3')
    const lastNote = MidiNumbers.fromNote('f5')
    const keyboardShortcuts = KeyboardShortcuts.create({
        firstNote: firstNote,
        lastNote: lastNote,
        keyboardConfig: KeyboardShortcuts.HOME_ROW,
    })
    const [instrument, setInstrument] = useState(null)
    useEffect(() => {
        Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano').then((instrument) => {
            setInstrument(instrument)
        })
    }, [])

    return (
        <Center>
            <Box marginTop={6}>
                <Piano
                    noteRange={{ first: firstNote, last: lastNote }}
                    playNote={(midiNumber) => {
                        instrument.play(midiNumber)
                    }}
                    stopNote={(midiNumber) => {
                        instrument.stop(midiNumber)
                    }}
                    width={1000}
                    keyboardShortcuts={keyboardShortcuts}
                />
            </Box>
        </Center>
    )
}
export default PianoIns;