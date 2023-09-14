# dayof project
# **must read before contributes**
## steps for getting things done =>

> ### 1- Create a new branch for the task :
```
    git branch task#n
    git checkout task#n
    git pull origin main
```

> ### 2- finish work on task & add changes to Production branch ***P IS captel*** :
```
    git add . 
    git commit -m "reasonable commit ونبي"
    git push 
    git checkout Production
    git pull origin task#n

```

> ### 3- check if the changes work probably :

#### go to :
> deyof repo > settings > pages > build and deployment > branch 

#### and change the branch to Production & wait until finish deployment in actions.

> => If everything works probably create a pull request manually in the pull requests page

### Final step : delete the task branch you created :

####  for delete at locally :
```
    git branch -d task#n
```
####  for delete at remotely :
```
    git push origin --delete task#n
```

