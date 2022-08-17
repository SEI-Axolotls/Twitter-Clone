# Spitter

###### Cant-Hack-it

----------------

# Summary of Project
We created a Twitter clone with CRUD functionality. Users are able to register and then login, post comments, and have a comment thread to post more comments on post. If you failed to do so at any point don't worry bout it you will get it later.

----------------
## Starting Line-Up

### Team Leaders

```
1) Chris - HackSaw Chriss Duggan
2) Raul - Stay Cool Raul
3) Mustafa - Mr. Great like if Mufasa survived in Lion King
```

### Back-End
```
1)Mario - Not Luigi brother but still as awesome

2)Mitch - Big Money Mitch

3)Paul - Power Ball Paul

4)James - Bond...
```
### Front-End
```
1)Adam - Adventures of Adam Atom (the first freakin nucleus)

2)Christine - Sleep when im dead Chrissy

3)Eric - MVP Easy E
```
### Docs
```
1) Tim - Tools of Titans Tim

2) Mack - Something like the sandwich
```
### Floater
```
1) Denny - Life Troller
```
 We are basically the power rangers and transformers mixed but with superpowers. Outstanding. Fantastic.



# Team Expectations
### Back End Gameplan
 - hourly rotations of pair programming, everyone following along in classroom on Zoom screen; two people at a time actively coding.

### For Example:
```
First Pair:
Typing: Mitch
Direction: Paul

Second pair:
Typing: Mario
Direction: James

Third pair:
Typing: Paul
Direction: Mitch

Fourth pair:
Typing: Mitch
Direction: Mack
```


GROUP PLANNING:

Team Goals & Values:
   
Functional Code  
-Interactive,  
-Attractive UI  
-Thorough Communication Between Teammates

Team Communication Preferences:  
-Slack at any time;   
-DND is on during sleep hours  
-Respond within X hours.



## Project Schedule
| Date| Objective| Progress|
|-----|----------|---------|
|20220811|Team Documents`/Readme/Get approval|Finished|
|20220812|Backend model setup / React setup  |Finished|
|20220813|  Component completion      |Finished|
|20220814| Screens and servoces completion       |Finished|
|20220815| Backend completion       |Finished|
|20220816|Connection of Frontend and backend|Finished|
|20220817| Presentation       |Pending|


## Schema
```
class User_profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=4)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    bio = models.CharField(max_length=150)
    profile_pic_url = models.TextField()

    def __str__(self):
        return self.name

class Post(models.Model):
    user = models.ForeignKey(User_profile, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=500)


    def __str__(self):
        return self.author

class Comment(models.Model):
    user = models.ForeignKey(User_profile, on_delete=models.CASCADE)
    body = models.CharField(max_length=255)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        return self.author
```

## WireFrame
![alt text](https://github.com/SEI-Axolotls/Twitter-Clone/blob/development/whimsical.png)

## Component Hiearchy
![alt text](https://github.com/SEI-Axolotls/Twitter-Clone/blob/development/Getting%20Started%20Boards%402x(2).png)

## Technology Utilized 
```
Netlify
Python
CSS
HTML
Javascipt
React Component Names & Folders
Trello
Whimiscal
Django
SQL
PSQL
Heroku - https://spitter-api.herokuapp.com/
```
