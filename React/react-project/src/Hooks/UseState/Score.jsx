
import { useState } from "react";

function Score() {

    const [runs, setRuns] = useState(0);
    const [wickets, setWickets] = useState(0);

    return (
        <div>
            <h2>Display Score</h2>

            <h2>Runs : {runs}</h2>
            <button onClick={() => setRuns(runs + 1)}>Add 1 Run</button>
            <button onClick={() => setRuns(runs + 4)}>Add 4 Runs</button>
            <button onClick={() => setRuns(runs + 6)}>Add 6 Runs</button>
            

            <h2>Wickets : {wickets}</h2>
            <button onClick={() => setWickets(wickets + 1)}>Add Wicket</button>
            

            <button onClick={() => {
                setRuns(0);
                setWickets(0);
            }}>
                Reset Score
            </button>
            <hr/>
        </div>
    );
}

export default Score;
