# HOTH XI - Intro to Git

**Date**: TBD

**Teacher**: [Lillian Gonick](https://github.com/lilliangonick)

Hello everyone! Welcome to the Intro to Git workshop README! In this workshop we will be covering the version control system: Git. 
Together, we will walk through installing git, creating our first repository, and merging two branches! 

## Resources
- [Google Slides](https://docs.google.com/presentation/d/1fU0VoWGm95IsHadN5STolL6PO74Et_sfQFq7WQ5_d24/edit?usp=sharing)
- [Workshop Recording](TBD)

  ## Table of Contents
  - [What is Git?](#what-is-git)
  - [Installing Git](#installing-git)
  - [Configuring Git](#configuring-git)
  - [Terminologies to Know](#terminologies-to-know)
  - [Repository](#repository)
  - [Branch](#branch)
  - [Merge](#merge)
  - [Additional Terms](#additional-terms)
  - [Git vs. GitHub](#git-vs-github)
  - [Git Workflow](#git-workflow)
  - [Setting up a Repo](#setting-up-a-repo)
  - [Walkthrough](#walkthrough)
  - [Additional Git Commands](#additional-git-commands)
  - [Extra Resources](#extra-resources)

## What is Git?
Git is a _**version control system**_. But, what does that really mean?

To break it down, Git essentially allows users to keep track of code history. Git takes "snapshots" of code, keeping a log of **what** changed, **who** changed it, and **when** it was changed. 
As a result, you are allowed to "go back in time" by reverting to old copies of code. Woah, going back to old code is very useful!!

An easy way to think about git is comparing it to a Google Doc. How do Google Docs work? Well ... different people 
are granted access to the same document with a common goal in mind. From there, individuals can change/add/delete portions of the document. Google Docs then keeps a complete log of the documents previous history. 
At any point, the document can be reverted to a previous version. Git works in similar but more structured way!

Git not only tracks the history of source code changes but also **faciliates collaboration on code**! Gits many features enables developers to work on multiple versions of the same 
source code individually. As a result, different people working on the same project can edit the project. After the desired changes have effectively been made, these different versions can be seamlessly merged together to 
create a final product that reflects the collective efforts of many developers. 

## Installing Git
Now that you understand from a high level what Git is, it is time to install it!

Follow the installation steps of your current device:

_please note that all commands that begin '$' are meant to be typed into your terminal. Please do NOT include the '$' in your command!_

**Linux**

Copy the following command into your terminal:
``` git
$ sudo apt-get install git-all
```

**Windows**

Please click [this link](https://gitforwindows.org/) to download Git. 

**MacOS**

Install [Homebrew](https://brew.sh/), a package manager that simplifies the process of installing software on mac devices. Homebrew automates the download, installation and configuration of packages for you! Super Cool!

After downloading Homebrew, copy the following command into your terminal: 
``` git
$ brew install git
```

## Configuring Git

Now Git is installed onto your computer, awesome! The next step is to configure Git. Git allows you to customize it's different aspects from your name to a default text editor. It is important to set your name and email
so Git can keep an accurate record of who is making changes on a collaborative project.

First, set up your name by copying the following code in your terminal:
``` git
$ git config --global user.name "Hack Fan"
```

Next, set up your email: 
``` git
$ git config --global user.email hackfan@example.com
```

To double check that you typed your information correctly, use the command:
``` git
$ git config --list
```
## Terminologies to Know
Branch? Repo? Merge Conflicts? With Git, there are multiple common terms that are often thrown around. Here are some of the most key terms to understand:

## Repository
A Repository (repo) is a location where all the files of a project are stored. This includes all the previous versions of files which provides the perfect place to track changes made in a project. 

There are two different types of repositories, **local** and **remote** repositories. The word repository is going to be stated a lot, so I will be referring to them as a "repo". 

First up are local repos. This is the repo stored on your local machine (personal computer). This directory holds all the files, folders, and version historys of a project that you set Git to track. Local repositories are created when you initialize the repo in the current folder (we will go over how to do this very soon!). You can make make commits and branches on your local repo!

Now that you understand local repos. it is time to move onto remote repos. Remote repos are versions of your project stored on a server like GitHub (one of the most common)! Compared to a local repo, remote repo facilitates collaborting with others and synchronizing work across multiple computers. But, how do you actually utilize a remote repo? To do so you can clone (copy) a repo from a remote server. In doing so, Git will create a local copy of the entire project, including all the files, commits, and branches. Now not only you can edit a current project on your own computer but multiple developers can work on the
same project simultaneously. 

## Branch
Branches are what actually allow developers to work on different parts of a project on their own without affecting the main project. Think of a group project where a teacher assigns a worksheet that needs to be completed. Each student gets their own copy and the group divides up the work by section. From there, each students works on their assignment. This is similiar to making a branch. A student is able to contribute to a bigger goal without conflicting with others since everyone has their own copy. After each person finishes, they copy each response onto a single worksheet that will be turned into the teacher. This is exactly like the "main" branch! The main branch is the default branch created when a new repo is initialized. "Main" serves as the baseline for all the other branches. Just like the main worksheet that will be turned into the teacher, this copy is constantly added on to. 

## Merge
Merging is the process of combining two or more branches into a single branch. As mention in the previous paragraph, Git allows for multiple people to work separately. But, these versions must be combined at some point to see the work other people complete! This process is referred to as "merging". 

One important thing to keep in mind is _merge conflicts_. Ooh, that does not sound good, and they are not! Merge conflicts arise when you attempt to merge two branches that have conflicting changes. This can be when two different developers change the same piece of code. Then, both developers try to merge their changes into the main branch. Git does not know what changes should take precedence, so the merge is unable to be completed. Luckily, GitHub has tools to _resolve_ merge conflicts. When you attempt to merge your branch, Git will tell you that there is a conflict. Then, GitHub locates the location of the issue and allows you to edit the code right there! Once the issue has been changed, you can continue on merging your code! 

## Additional terms
A **commit** is a snapshot of your code, including all of the files and any changes made up to that point. Typically, after you create a new branch and make your respective changes, you commit those changes! Git commit will save the changes on the local by **not** the remote repository. 

The term **push** refers to uploading content from a local repo to a remote repo. Once you have finishing committing your changes, you will need to push your changes. This is what allows others to see updated versions of code in the remote repo!!

Once you have pushed changes, a **pull request** needs to be made. As of right now, the committed changes are still separate from the main branch. In order to merge changes to the main branch, a pull request needs to be made. A pull request is a proposal to merge changes from one branch into another. Once you push, follow the link provided in the terminal. This link will lead you to a GitHub page that manages pull requests. 

## Git vs. GitHub
A common misconception for beginners is that Git and GitHub are the same thing. But, they are not!!!

As previously mentioned, Git is a version control system designed to track changes in code and manage collaboration on projects. Git runs on your personal computer and works offline.

To compare, GitHub (what you are on right now!) is a platform built **around** Git to provide Git repositories. Hosted on the web, GitHub provides additional features ontop of 
Git in order to ease collaboration on projects. 

In other words, even though Git and GitHub are two different things, they are used together! You start on your personal computer, install Git, and allow Git to manage the source code locally. You can 
then connect the local repository to the remote repository hosted on GitHub. From there, you basically "back up" changes onto GitHub by "pushing". By connecting to GitHub, it allows you to "pull" changes others
made and see them on your computer! In addition, GitHub enhances different aspects of Git with features that make merging and branching easier! 

To make your GitHub account follow the directions on this [link](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).
 Now you have your own GitHub account. Yay!!

## Git Workflow
Next up we are going to be going over the Git workflow. More specficially, the three main states. 

First up is the **working directory**! The working directory is all of the files on your personal device. Think of it as the project folder on your computer that you use when working on a project. But how does this relate to Git? Well, you need to tell Git to track the changes on the files on your working directory! And that leads up to the second state!

Next up is the **Staging Area**! The staging area will hold all of the changes that git will include in the next snapshot/commit. Imagine you have been working on your code and made changes to a file. Next you want to save these new changes to your remote repo. The staging area is the intermediate area between where you make changes to files, or the working directory, and the actually Git repo, where changes are permanently recorded. 

The third state is the **Repository**, I told you we would be referencing repos a lot! As mentioned earlier, the repo is where all of the changes will be permanently stored. Now you can access and reference these snapshots at any time. Yay!

## Setting up a Repo 
Now that we understand the different moving parts of Git it is time to make our own Repo!! First, go to GitHub by following this [link](https://github.com/new).

After clicking the link, create a descriptive name for your new repository and determine if you want it to be private or public. A private repo means people can only see your repo if you grant them permission. On the other hand, anyone can view your public repo. A link will populate in a blue box after you click "Create Repository". Keep track of this link! Now you have a remote repo on GitHub, Nice!

Your screen should look like the following once your GitHub Repo is made: 
<img width="150" alt="Screenshot 2024-02-23 at 7 44 48 PM" src="https://github.com/lilliangonick/demo/assets/148294316/5991ef66-6bbe-43c9-b60e-c1edb81e6e5a">


Now it is time to set up your local repo. Start by creating folder on your computer. Next open up that folder on your text editor of choice. Then, open the terminal and check that you are on the correct file path. 

Let's initialize your repo!
Type the following commands into your terminal: 
1. Initialize your repo on your device
     `$ git init`
2. Now make an initial commit to the repo by copying both commands(_make sure to add the '.' after add!!!_): 
   
     `$ git add .`
   
     `$ git commit -m “[message]”`
4. Next up is making your main branch. Type the following **_3_** commands to do so:
   
     First link your repo to your GitHub by pasting the link that populated when you first made your remote repo:
   
     `$ git remote add origin [GitHub repository link]`
   
    Next rename the current branch to "main":
   
     `$ git branch -M main`
   
     Lastly, push the local "main" branch to the remove repository
   
     `$ git push -u origin main`

Awesome, now you have both a local and remote repository that are linked! View your remote repo by logging onto the GitHub. 

## Walkthrough

Once you initially make your repo, make your first commit, and make your main branch (everything we just finished :P), it is time to start making changes to your code! 

A common work process looks like the following:
1. Start on the main branch 
2. Pull from the main branch
3. Create a branch
4. Do some work
5. Add the changes
6. Commit the changes
7. Push to the branch
8. Create a pull request
9. Fix merge conflicts
10. Merge

But, how do we complete these steps? 
_copy the following comands into your terminal!_

1. Make sure you are on the main branch:
   
  `$ git checkout main`
  
3. Pull from the main branch (ensures you have the most up-to-date version of the code):
   
  `$ git pull`
  
5. Create your own branch and switch to it:

  `$ git checkout -b “[branch name]”`
  
6. Make changes to your code!
   
8. Add these changes to the staging area:
   
  `$git add .`

10. Commit those changes (within the brackets leave a short descriptive message of the changes made:
    
  `$ git commit -m "[message]"`
  
12. Push the committed changes to the current branch:
    
  `$ git push -u origin [branch name]`
  
14. Create a pull request by following the link that the terminal provides after step 7. The link will look like the following: github.com/[username]/[repository-name]/pull/new/[branch-name]. By clicking the link you will be able to make the PR in the correct repository by clicking the big green button.
    
16. GitHub alerts you on the pull request page if there are any merge conflicts. To fix conflicts (if there are any), GitHub highlights where the conflict is occuring. Click "Resolve Conflicts" and edit the files directly on GitHub.
    
18. Once there are no merge conflicts detected complete the pull request and merge the changes.

Now you have sucessfully created changes in your code and added it to your repo!!! 

## Additional Git Commands
Finally, here are some additional useful Git commands to know: 

Show changes made since the last commit:

`$ git status`

Create and switch to a new branch:

`$ git checkout -b “[name]”`

Switch to an existing branch:

`$ git checkout “[name]”`

Add current changes to the next commit:

`$ git add .`

Commit changes:

`$ git commit -m “[message]”`

Push changes to the remote repo:

`$ git push -u origin [branch name]`

Intergrate changes from the remote repo to the local branch:

`$ git pull`

## Extra Resources
For more commands, click this git [reference sheet](https://git-scm.com/docs/git#_git_commands) for a complete list of git commands. 

And with that, you now know what Git is and how to utilize its different functionalities. Congratulations!
