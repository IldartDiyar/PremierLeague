import classes from "./Ttable.module.css"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
export default function Ttable() {
  const [data, setData] = useState([])
  useEffect(() => {
    loadData()
  }, [])
  const loadData = async () => {
    const ENDPOINT_STAND =
      'https://api.football-data.org/v2/competitions/PL/standings'
    const apiKey = '2f5bd7bca6b442f1ad2679f94ec0f937'
    const options = {
      method: 'GET',
      headers: {
        'X-Auth-Token': apiKey
      }
    }
    const response = await fetch(ENDPOINT_STAND, options)
    const jsonData = await response.json()
    const info = jsonData.standings[0].table
    setData(info)
  }
  return (
    <div className={Container}> 
      
      <table className={classes.main}>
      <strong>Table of Premier legue</strong>
        <tread >
          <tr className={classes.header}>
            <th>Place</th>
            <th>Team Name</th>
            <th>Played</th>
            <th>Winning</th>
            <th>Points</th>
          </tr>
          <tbody>
            {data.map((stand, key) => {
              return (
                <tr key={key}>
                  <td>{stand.position}</td>
                  <td>{stand.team.name}</td>
                  <td>{stand.playedGames}</td>
                  <td>{stand.won}</td>
                  <td>{stand.points}</td>
                </tr>
              );
            })}
          </tbody>
        </tread>
      </table>
    </div>
  );
}