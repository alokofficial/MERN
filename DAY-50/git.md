## Raising the pull request (PR) on GitHub


---
Steps to raise the PR
~~~
## To raise a pull request (PR) on GitHub, you can do the following:
1. Go to the repository's main page on GitHub
2. Select the branch with your commits from the Branch menu
3. Click Compare & pull request in the yellow banner above the list of files
4. Choose the branch to merge your changes into from the Base branch dropdown menu
5. Select the topic branch where you made your changes from the Compare branch dropdown menu
6. Enter a title and description for your PR
7. Click Create Pull Request to create a PR that's ready for review, or select Create Draft Pull Request to create a draft PR 
~~~
~~~
1. clone the repo - git clone <URL> (I cloned my own repo, it was empty)
2. create a new branch - git checkout -b b1 (I don't know this is a good thing or not because the repo is still empty and i am creating a new branch for the PR)
3.making changes - create a README file.
4. stage the change git add .
5. commit the change git commit -m "first commit"
6. push the change - git push -u origin b1
7. create a PR - git pull -u origin b1
~~~
