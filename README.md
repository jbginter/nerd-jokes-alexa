# Nerd Jokes Alexa Skill

Super simple Alexa skill using Jovo to have Alexa tell you a random joke. Using an API from [geek-jokes](https://github.com/sameerkumar18/geek-joke-api) which tends to tell Chuck Norris jokes. Stripping string data sent back of `andquot;` and `&quot;` values sent back in string data.

Skill immediately quits after when opened as it's only telling a joke. There is no use for intents or session data in the current state

### TODO

Randomize API URL's OR import json data and just pull from that, using user session data to track "jokes" told