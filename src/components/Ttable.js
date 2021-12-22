export default function Ttable()
{
    const data = [
        { name: 'Man City', played: '18', winning: '14', points: '44' },
        { name: 'Liverpool', played: '18', winning: '12', points: '41' },
        { name: 'Chelsea', played: '18', winning: '11', points: '38' },
        { name: 'Arsenal', played: '18', winning: '10', points: '32' },
        { name: 'West Ham', played: '17', winning: '8', points: '28' },
        { name: 'Man Untd', played: '16', winning: '8', points: '27' },
        { name: 'Tottenham', played: '15', winning: '8', points: '26' },
        { name: 'Wolves', played: '18', winning: '7', points: '25' },
        { name: 'Leicester', played: '16', winning: '6', points: '22' },
        { name: 'Aston Villa', played: '17', winning: '7', points: '22' },
        { name: 'Crystal Palace', played: '17', winning: '4', points: '20' },
        { name: 'Brentford', played: '16', winning: '5', points: '20' },
        { name: 'Brighton', played: '16', winning: '4', points: '20' },
        { name: 'Everton', played: '17', winning: '5', points: '19' },
        { name: 'Southampton', played: '17', winning: '3', points: '17' },
        { name: 'Leeds United', played: '18', winning: '3', points: '16' },
        { name: 'watford', played: '16', winning: '4', points: '13' },
        { name: 'Burnley', played: '15', winning: '1', points: '11' },
        { name: 'Newcastle', played: '18', winning: '1', points: '10' },
        { name: 'Norwich city', played: '17', winning: '2', points: '10' },
      ]
    return(
     <div>
        <table>
         <tread>
           <tr>
             <th>place</th>
             <th>Team Name</th>
             <th>Played</th>
             <th>Winning</th>
             <th>Points</th>
           </tr>
           <tbody>
              
              {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{key+1}</td>
              <td>{val.name}</td>
              <td>{val.played}</td>
              <td>{val.winning}</td>
              <td>{val.points}</td>
            </tr>
            )
           })}
           </tbody>
         </tread>
        </table>
     </div>
    );
}