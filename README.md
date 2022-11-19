# NGXS Template

## 1.0 Introduction
This is a simple project to carry out state management and facade pattern in angular project.
This project shows how to use action, select, state in a shared module and then import it in your components.

## 2.0 Architecture
### 2.1 Core module
* Auth folder : is used to implement authentication services
* guard folder : is used to add your guards routes

### 2.2 Protected module
Here you can add your private home.
For example, if you want to create a back admin panel that must be protected.

### 2.3 Public module
Here you can add all of public component that can be accessed by anyone.

### 2.4 Shared module
Create a folder for each foncitonnality and add :
* models folder : to store models class/interface
* services folder : to store services linked by your fonctionnality
* state folder : where you can have your facade patter, action class, select class and state class.

## 3.0 State Management Process
![alt text](https://490253082-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-L9CoGJCq3UCfKJ7RCUg-347405460%2Fuploads%2Fgit-blob-7371002ded66c4455ca986a4c8e7c1f6849ffef9%2Fdiagram.png?alt=media)
