'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: false,
};

const app = new App(config);

const request = require('request-promise');


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.toIntent('TellJokeIntent');
    },

    'TellJokeIntent': jokeFunc,
    'jokeIntent': jokeFunc,
    'Unhandled': jokeFunc
});

module.exports.app = app;

// Simple function to query geek-jokes url for random joke
function jokeFunc() {
    const options = {
        url: 'https://geek-jokes.sameerkumar.website/api',
        method: 'GET'
    }

    request(options).then(body => {
        this.tell(body.replace(/andquot;|&quot;/g, ''));
    })
    .catch(err => {
        console.log('error:',err);
        this.tell('hmmm, i\'m having trouble thinking of something funny to say. try asking again later')
    })
}
