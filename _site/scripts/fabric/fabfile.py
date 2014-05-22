from __future__ import with_statement
from fabric.api import *
from fabric.contrib.console import confirm
from fabric.colors import yellow

def production():
    env.hosts = ['deploy@184.106.83.177:9791']

# Deploy method:
def deploy():
    git_directory = '/var/www/nooku.org/git'
    with cd(git_directory):
        print(yellow("-- Git: Remove staged and working directory changes"))
        run("git reset --hard")
        print(yellow("-- Git: Remove untracked files"))
        run("git clean -f -d")        
        print(yellow("-- Git: pull from origin"))
        run("git pull origin")
