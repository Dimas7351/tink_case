// TournamentList.js
import React, { useState, useEffect } from 'react';
import Navbar1 from './navbar1';

function TournamentList() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    // Fetch a list of tournaments from your server
    // Update the 'tournaments' state with the data
  }, []);

  return (
    <div>
      <div><Navbar1 />

      <h2>Tournament List</h2>
      {tournaments.map((tournament) => (
        <div key={tournament.id}>
          <h3>{tournament.name}</h3>
          <p>Status: {tournament.status}</p>
          <a href={`/tournament/${tournament.id}`}>View Details</a>
        </div>
      ))}
      <a href="/personal">Go to Personal Account</a>
    </div>
    </div>
  );
}

export default TournamentList;