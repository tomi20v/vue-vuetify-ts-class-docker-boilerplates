# dependencies/*

## placeholder 
folder to manually include dependencies in .tgz format

## content
of this folder will be copied during docker build automatically

## can clean up
if there are no such dependencies in the project, clean up this folder and remove 
```COPY ["./dependencies/*" , "./dependencies/"]``` from Dockerfile

## what does it solve?
Private libs are typically not published, not even in some public repository. Thus, using them needs some kind
of authorization/access management which might not be straightforward.

By building a library manually into a .tgz and including it with dependent projects, building this authorization 
can be spared.

## how to pack a lib
```git checkout vue-vuetify-lib```
