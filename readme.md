# dayof project

## steps for get thongs done =>

> ### 1- Create new branch for the task :
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

> ### 3- check if changes work probably :

#### go to :
> deyof repo > settings > pages > build and deployment > beanch 

#### and change the branch to Production & wait until finish deployment in actions.

> => if every thing work probably create a pull request manually in pull requests page

### final step : delete the task branch you'ev created :

####  for delete at localy :
```
    git branch -d task#n
```
####  for delete at remotly :
```
    git push origin --delete task#n
```

