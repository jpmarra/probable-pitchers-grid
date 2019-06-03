import { formatGames, generateHTML } from './utils.js'

const container = document.querySelector('.container')

fetch(
    'https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=2019-06-02&hydrate=team,linescore,flags,liveLookin,review&useLatestGames=false&language=en'
)
    .then(response => response.json())
    .then(data => formatGames(data.dates[0].games))
    .then(games => {
        const html = games.map(game => generateHTML(game)).join('')
        container.innerHTML = html
        const gamedayButton = document.querySelector('.game__buttons-gameday')
        const ticketButton = document.querySelector('.game__buttons-tickets')

        gamedayButton.addEventListener('click', e => {
            e.preventDefault()
            window.open(e.target.value, '_blank')
        })

        ticketButton.addEventListener('click', e => {
            e.preventDefault()
            window.open(e.target.value, '_blank')
        })
    })
