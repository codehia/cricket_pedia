import React from 'react';
import { getPlayerDetails } from '../redux/selector';


export default function PlayerDetails({ match }) {
    console.log(match)
    let currentPlayers = getPlayerDetails().addDataReducer.currentPlayers;
    // console.log(currentPlayers, match.params.id)
    let temp = currentPlayers.filter(player => player.id == match.params.id)
    var selectedPlayer = temp[0];
    console.log(selectedPlayer['name'])
    return (
        <div>
            <h1>{selectedPlayer['name']}</h1>
        </div>
    )
}
