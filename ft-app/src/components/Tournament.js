// Tournament.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Tournament() {
  const [tournament, setTournament] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [participating, setParticipating] = useState(false);

  useEffect(() => {
    // Fetch tournament details from your server
    // Update the 'tournament' state with the data
  }, []);

  const handleParticipate = () => {
    // Handle user participation logic here
    setParticipating(true);
  };

  const handleStartTournament = () => {
    // Handle starting the tournament logic here
  };

  return (
    <div>
      {tournament ? (
        <div>
          <h2>Tournament: {tournament.name}</h2>
          <p>Status: {tournament.status}</p>
          <h3>List of Teams</h3>
          <ul>
            {tournament.teams.map((team) => (
              <li key={team.id}>{team.name}</li>
            ))}
          </ul>
          {tournament.status === 'OPENED' && !participating && (
            <div>
              <h3>Participate in the Tournament</h3>
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                <option value="">Select a Team</option>
                {tournament.teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
              <button onClick={handleParticipate}>Participate</button>
            </div>
          )}
          {tournament.status === 'OPENED' && participating && (
            <button onClick={handleStartTournament}>Start Tournament</button>
          )}
          {tournament.status === 'ACTIVE' && (
            <Link to={`/tournament/${tournament.id}/table`}>
              Go to Tournament Table
            </Link>
          )}
        </div>
      ) : (
        <p>Loading tournament information...</p>
      )}
      <Link to="/personal">Back to Personal Account</Link>
    </div>
  );
}

export default Tournament;