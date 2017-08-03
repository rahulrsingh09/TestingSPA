#Deployment

Angular 2 Deployment in Github Pages

Testing Deployment of Angular2 Webpack in ghpages

First get all relevant the files from the Dist Folder of your application

for me it was the css files in the assets folder main.bundle.js polyfills.bundle.js vendor.bundle.js

Then push this files in the repo which you have created.

1 -- If you want the application to run on the root directory - create a special repo with the name [yourgithubusername].github.io and opush these files in the master branch

2 -- Where as if you want to create these page in the sub directory of in a different brach other than than the root , create a branch gh-pages and push these files in that branch.

In both the cases the way we access these deployed pages will be different .

For the First Case it will be https://[yourgithubusername].github.io and for the second case it will be [yourgithubusername].github.io/[Repo name].

If Suppose you want to deploy it using the sefcond case make sure to change the base url pf the index.html file in the dist as all the route mappings depend on the path you give and it should be set to [/branchname].

Link to this page

https://rahulrsingh09.github.io/TestingSPA
