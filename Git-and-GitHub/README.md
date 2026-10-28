# Git and GitHub Introduction

# What is Git?
- Git is a popular version control system.
- **It is used for:**
* **Version Control:** Tracking code changes over time.
* **Accountability:** Tracking who made specific changes.
* **Collaboration:** Facilitating seamless coding teamwork.

## Core Git Concepts

* **Repository:** A folder where Git tracks your project and its entire history.
* **Clone:** Creates a local copy of a remote repository on your computer.
* **Stage:** Prepares and selects specific changes you want to save next.
* **Commit:** Saves a permanent snapshot of your staged changes to the history.
* **Branch:** Allows you to work on different versions or features in isolation.
* **Merge:** Combines changes from different branches together.
* **Pull:** Fetches and integrates the latest changes from a remote repository.
* **Push:** Uploads your local commits and sends your changes to a remote repository.

# What is GitHub?

## Git vs. GitHub

- It is important to note that **Git is not the same as GitHub**:

* **Git** is the underlying open-source version control system used to track code history locally.
* **GitHub** is a cloud-based platform built on top of Git that hosts your source code online.
* **Global Scale:** GitHub is currently the largest host of source code in the world, providing collaboration tools that leverage Git.

## What is an Untracked File?
An untracked file is any file in your project folder that Git is not yet tracking.

## What is a Tracked File?
A tracked file is a file that Git is watching for changes.

## Git Staging Environment
- The staging environment (or staging area) is like a waiting room for your changes.
- You use it to tell Git exactly which files you want to include in your next commit.
## Git Staging Commands

Use these essential commands to manage your files in the Git staging area before committing:

* **Stage a specific file:**
  ```bash
  git add <file>
  ```
* **Stage all changes** (new, modified, and deleted files):
  ```bash
  git add --all
  # OR
  git add -A
  # OR
  git add .
  ```
* **Check current status** (see what is staged vs unstaged):
  ```bash
  git status
  ```
* **Unstage a file** (remove a file from the staging area without losing changes):
  ```bash
  git restore --staged <file>
  ```
## What is a Commit?
- A commit is like a save point in your project.
- It records a snapshot of your files at a certain time, with a message describing what changed.
- To save your staged changes, use
```bash
git commit -m "message"
```
- To view the history of commits for a repository, you can use the git log command:
``bash 
git log
```

## What is Git Branches?

In Git, branch is like a separate workspace where you can make change and try new ideas without affecting the main project.

## Why use branches?
branches let you work on different parts of a project, like new features or bug fixes, without interfering with the main branch

## Creating a New Branch
- Let's say you want to add a new feature. You can create a new branch for it.
- We are working in our local repository, and we do not want to disturb or possibly wreck the main project.

So we create a new branch:
```bash
git branch test
```
- Now we created a new branch called "test"

## Listing All Branches
- Let's confirm that we have created a new branch. To see all branches in your repository, use:
```bash
git branch
test
* master
```
- We can see the new branch with the name "test", but the * beside master specifies that we are currently on that branch.

## Switching Between Branches
- checkout is the command used to check out or switch a branch.
- Moving us from the current branch, to the one specified at the end of the command:
```bash
git checkout hello-world-images
```

## Deleting a Branch
```bash
git branch -d test
```
- This deletes the branch named "test"

## Best Practices for Working with Branches
- Use clear, descriptive branch names (like feature/login-page or bugfix/header-crash).
- Keep each branch focused on a single purpose or feature.
- Regularly merge changes from the main branch to keep your branch up-to-date.
- Delete branches that are no longer needed to keep your repository clean.

* Some Git Command
- Rename a branch: ```bash git branch -m old-name new-name ```
- List all branches: ```bash git branch ```
- Switch branches: ```bash git checkout branch-name ``` or ```bash git switch branch-name ```
- Delete a branch (not merged): ```bash git branch -D branch-name ```
- See which branch you're on: ```bash git status ```

## Git Branch Merge
## What is Merging in Git?
- Merging in Git means combining the changes from one branch into another.
- This is how you bring your work together after working separately on different features or bug fixes.

## Common git merge Options
* git merge - Merge a branch into your current branch

## Merging Branches (git merge)
- Best Practices for Merging Branches
- Always commit or stash your changes before starting a merge.
- Regularly merge from the main branch into your feature branch to minimize conflicts.
- Read and resolve conflicts carefully-don't just accept all changes blindly.
- Write clear and descriptive merge commit messages.

## What is a Merge Conflict?
- A merge conflict happens when changes in two branches touch the same part of a file and Git doesn't know which version to keep.
- Think of it like two people editing the same sentence in a document in different ways-Git needs your help to decide which version to use.

## How to Resolve a Merge Conflict
- Git will mark the conflict in your file.
- You need to open the file, look for lines like <<<<<<< HEAD and =======, and decide what the final version should be.

## Troubleshooting & Tips
- If you want to cancel a merge, use``` git merge --abort```
- Always commit or stash your changes before starting a merge.
- Read the conflict markers carefully and remove them after you've resolved the issue.
- Use git status to see what files need your attention.

## Summary of Git Best Practices
- Commit Often
- Write Clear Commit Messages
- Use Branches
- Pull Before You Push
- Review Changes Before Committing
