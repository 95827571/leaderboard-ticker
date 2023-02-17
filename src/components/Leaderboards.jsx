import { useState, useEffect } from "react";

export default function Leaderboards() {

    const compareData = (a, b) => {
        if (a.score > b.score) {
            return -1;
        }
        if (a.score < b.score) {
            return 1;
        }

        return 0;
    }


    const [leaderboardData, setLeaderboardData] = useState(
        [
            {
                name: "Philip",
                score: 0,
            },
            {
                name: "Philip 2",
                score: 0,
            },
            {
                name: "Philip 3",
                score: 0,
            },
            {
                name: "Philip 4",
                score: 0,
            },
            {
                name: "Philip 5",
                score: 0,
            },
            {
                name: "Philip 6",
                score: 0,
            },
        ]
    );


    useEffect(() => {
        setInterval(() => {
            const newArr = leaderboardData.map((value, index) => {
                const newScore = Math.floor(Math.random()*1000)+1
                return { ...leaderboardData[index], score: newScore  }
            })
            newArr.sort(compareData)
            setLeaderboardData(newArr)
        }, 5000) 
    }, [])

    return (
        <div>
            {leaderboardData.map((value, index) => {
                console.log(`${value.name} ${value.score}`);
                return <p key={index}> {value.name}: {value.score} </p>
            })}
        </div>
        );
}
