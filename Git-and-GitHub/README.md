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