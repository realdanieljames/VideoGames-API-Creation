let videoGames = require('../models/Games')

//==================================================================================================================//
//==================================================================================================================//

module.exports = {

    // GET allGames
    getAllGames: (req, res) => {

        res
            .status(200)
            .json({ confirmations: 'success', videoGames })

    },
    //==================================================================================================================//
    //==================================================================================================================//
    //GET single game

    getSingleGame: (req, res) => {
        let foundGame = videoGames.filter((game) => {

            if (game.id === req.params.id) {
                return res.status(200).json({ confirmation: 'success', game });
            }
        });
        if (!foundGame.length) {

            return res
                .status(400)
                .json({ confirmation: 'fail', message: 'game was not found' })
        }
    },
    //==================================================================================================================//
    //==================================================================================================================//
    //POST A GAME

    createNewGame: (req, res) => {


        let existingGameName = videoGames.filter((foundGame) => foundGame.name === req.body.name);
        let existingGameDescription = videoGames.filter((foundGame) => foundGame.description === req.body.description);
        if (existingGameName.length && existingGameDescription.length) {
            return res.status(400).send('Sorry! Game Not Created; Game Name and Description Already Exists')
        }

        const newGame = {};

        newGame.name = req.body.name;
        newGame.description = req.body.description;
        newGame.yearReleased = req.body.yearReleased;
        newGame.playtime = req.body.playtime
        newGame.id = String(videoGames.length + 1);

        videoGames.push(newGame);
        return res.status(200).json({ confirmation: 'Success! Game created!', newGame })

    },

    //==================================================================================================================//
    //==================================================================================================================//
    //UPDATE A GAME

    updateGame: (req, res) => {
        //holds anything that we decide to change
        //grab user inputtrd 
        let updatedGame = req.body
        videoGames.filter((foundGame) => {
            if (foundGame.id === req.params.id) {
                //change values for user inputted
                foundGame.name = updatedGame.name
                    ? updatedGame.name
                    : foundGame.name;
    
                foundGame.description = updatedGame.description
                    ? updatedGame.description
                    : foundGame.description;
    
                foundGame.yearReleased = updatedGame.yearReleased
                    ? updatedGame.yearReleased
                    : foundGame.yearReleased;
    
                foundGame.playtime = updatedGame.playtime
                    ? updatedGame.playtime
                    : foundGame.playtime;
    
            }
            return res.status(200).json({ message: 'Success! Game Updated', videoGames })
        }
    )
    
    // if game id to update is not in games json, redirect user to error and explanation
    // videoGames.filter((foundGame) => {
    
    //     if (foundGame.id !== req.params.id) {
    // return res.status(400).send(`Game not updated. Game chosen to update, does not exist.`)
    // }
    
    // })
    
    },

    //==================================================================================================================//
    //==================================================================================================================//
    
    // DELETE GAME
    deleteGame : (req, res)=>{
        
        let removeGame =videoGames.filter((foundGame)=>{
            //params = '/delete-user/:id'
            return foundGame.id !== req.params.id
            
        });
        
        videoGames =  removeGame;
        return res.status(200).json({confirmation: `Success! Game Deleted`, videoGames})
        
        
        
        
        
        
    }
    
}
    
    //==================================================================================================================//
    //==================================================================================================================//