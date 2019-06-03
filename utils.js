import moment from 'moment'
export const formatGames = games => {
    return games.map(game => {
        return {
            timeDate: moment(game.gameDate).format('ddd MMM D • h:mm a'),
            venue: game.venue.name,
            gameday: 'https://www.mlb.com/gameday/566205',
            tickets:
                'https://mpv.tickets.com/?orgid=7&agency=MLB_MPV&pid=8623163',
            homeTeam: {
                name: game.teams.home.team.teamName,
                logo: `https://www.mlbstatic.com/team-logos/${
                    game.teams.home.team.id
                }.svg`,
                record: `(${game.teams.home.leagueRecord.wins}-${
                    game.teams.home.leagueRecord.losses
                })`,
                pitcher: {
                    name: 'Jhoulys Chacin',
                    image:
                        'https://securea.mlb.com/images/players/action_shots/468504_low_resolution.jpg',
                    position: 'RHP',
                    stats: '3-6, 4.88 ERA, 42 SO',
                    blurb:
                        'Chacin has lost his last three starts, surrendering eight earned runs in 16 innings over that span. He allowed four runs in five innings in a loss against Philadelphia last time out.',
                },
            },
            awayTeam: {
                name: game.teams.away.team.teamName,
                logo: `https://www.mlbstatic.com/team-logos/${
                    game.teams.away.team.id
                }.svg`,
                record: `(${game.teams.away.leagueRecord.wins}-${
                    game.teams.away.leagueRecord.losses
                })`,
                pitcher: {
                    name: 'Chris Archer',
                    image:
                        'https://securea.mlb.com/images/players/action_shots/502042_low_resolution.jpg',
                    position: 'RHP',
                    stats: '1-5, 5.75 ERA, 40 SO',
                    blurb:
                        "Chris Archer looks to get back on track after three poor outings in May, having allowed 13 earned runs over 13 2/3 innings for an 8.56 ERA. Archer has pitched past the fifth inning just twice this year and hasn't done so since April 13 at the Nationals.",
                },
            },
        }
    })
}

export const generateHTML = game => {
    return `
            <div class="game">
                <div class="game__header">
                    <span class="game__header-team">${game.awayTeam.name}</span>
                    <span>@</span>
                    <span class="game__header-team">${game.homeTeam.name}</span>
                </div>
                <div class="game__info">
                    <div class="game__info-team">
                        <img class="game__info-logo" src=${
                            game.awayTeam.logo
                        } />
                        <p class="game__info-record">${game.awayTeam.record}</p>
                    </div>
                    <div class="game__info-details">
                        <p class="game__info-details-date">${game.timeDate}</p>
                        <p class="game__info-details-venue">At ${game.venue}</p>
                    </div>
                    <div class="game__info-team">
                        <img class="game__info-logo" src=${
                            game.homeTeam.logo
                        } />
                        <p class="game__info-record">${game.homeTeam.record}</p>
                    </div>
                </div>
                <div class="game__matchup">
                    <div class="game__matchup-pitcher">
                        <img class="game__matchup-pitcher-image" src=${
                            game.awayTeam.pitcher.image
                        } />
                        <div class="game__matchup-pitcher-name">${
                            game.awayTeam.pitcher.name
                        }</div>
                        <div class="game__matchup-pitcher-position">${
                            game.awayTeam.pitcher.position
                        }</div>
                        <div class="game__matchup-pitcher-stats">${
                            game.awayTeam.pitcher.stats
                        }</div>
                        <p class="game__matchup-pitcher-blurb">${
                            game.awayTeam.pitcher.blurb
                        }</p>
                    </div>
                    <div class="game__matchup-pitcher">
                        <img class="game__matchup-pitcher-image" src=${
                            game.homeTeam.pitcher.image
                        } />
                        <div class="game__matchup-pitcher-name">${
                            game.homeTeam.pitcher.name
                        }</div>
                        <div class="game__matchup-pitcher-position">${
                            game.homeTeam.pitcher.position
                        }</div>
                        <div class="game__matchup-pitcher-stats">${
                            game.homeTeam.pitcher.stats
                        }</div>
                        <p class="game__matchup-pitcher-blurb">${
                            game.homeTeam.pitcher.blurb
                        }</p>
                    </div>
                </div>
                <div class="game__buttons">
                    <button class="link-button game__buttons-gameday" value=${
                        game.gameday
                    }>Gameday</button>
                    <button class="link-button game__buttons-tickets" value=${
                        game.tickets
                    }>Tickets</button>
                </div>
            </div>
        `
}
