Getting into promises
Lets use the github api to see what repositories different users have. You can use this url to get repositories for a specific github username, in this case the username benna100: https://api.github.com/search/repositories?q=user:benna100. Select 3 classmates github username that you want to show repositories for.

Fetch all the 3 classmates repositories at the same time using Promise.all. Remember the all at once exercise here?

When you have the data for the different repositories, render the fullname of the repo, url of the repo, and the owner of the repo. See github-repos as an example of how the renderered repos should look. You are more than welcome to style it a bit nicer!