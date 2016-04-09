import axios from 'axios';

const url     = 'https://api.github.com';
const id      = 'CLIENT_ID';
const sec     = 'CLIENT_SECRET';
const params  = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo (username) {
    return axios.get(`${url}/users/${username + params}`);
};

function getRepos (username) {
    return axios.get(`${url}/users/${username}/repos${params}&per_page=100`);
};

function getTotalStars(repos) {
    return repos.data.reduce( (prev, curr) => prev + curr.stargazers_count , 0);
};

async function getPlayersData (player) {

    try {
        const repos = await getRepos(player.login);
        const totalStars = await getTotalStars(repos);
        return {
            followers: player.followers,
            totalStars
        };
    } catch(error) {
        console.log(error);
    }

};

function calculateScores (players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ];
};


export async function getPlayersInfo (players) {

    try {
        const info = await Promise.all(players.map((username) =>  getUserInfo(username) ));
        return info.map( (user) => user.data);
    } catch(error) {
        console.warn('Error in getPlayersInfo: ',  error);
    }
};

export async function battle (players) {
    const playerOneData = getPlayersData(players[0]);
    const playerTwoData = getPlayersData(players[1]);

    try {
        const players = await Promise.all([playerOneData, playerTwoData]);
        return calculateScores(players);
    } catch(error) {
        console.warn(error);
    }
};


