const axios = require('axios');
const Dev = require('../model/Dev');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [ //* $and is used to apply more than one condition on the db
                { _id: { $ne: user } }, // !Search all users that _id is not equal to user
                { _id: { $nin: loggedDev.likes } }, // !Search all users that _id inside a list (likes)
                { _id: { $nin: loggedDev.dislikes } } // !Search all users that _id inside a list (dislikes)
            ],
        })

        return res.json(users)
    },

    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
};