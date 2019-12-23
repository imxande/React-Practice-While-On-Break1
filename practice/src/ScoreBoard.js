import React, {useState} from 'react'
export const ScoreBoard = () => {

    const [homeCount, setHomeCount] = useState(0);
    const [awayCount, setAwayCount] = useState(0);

    const addToHome = () =>{
        setHomeCount(homeCount + 1);
    }

    const resetHome = () => {
        setHomeCount(homeCount - homeCount)
    }

    const addToAway = () =>{
        setAwayCount(awayCount + 1);
    }

    const resetAway = () => {
        setAwayCount(awayCount - awayCount)
    }


    return (
        <div className = 'scoreboard'>
            <h1>ScoreBoard</h1>
            <div className = 'home'>
                <p>Home Team</p>
                <span> <strong> {homeCount} </strong></span> <br/>
                <button onClick = {addToHome} >Add Score</button>
                <button onClick = {resetHome} >Reset Score</button>
                
            </div>
            <div className = 'away'>
                <p>Away Team</p>
                <span> <strong> {awayCount} </strong></span> <br/>
                <button onClick = {addToAway} >Add Score</button>
                <button onClick = {resetAway} >Reset Score</button>
                
            </div>
            
            
        </div>
    )
}