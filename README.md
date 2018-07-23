## Table of Contents
* [What it is](#what-is)
* [How to run the app](#how-to)
* [TO-DO](#to-do)
* [Contributing](#contributing)

## What it is

### Test driven development with Jasmine.

For this project we are given a web-based application that reads RSS feeds. Our goal is to test the app functionality using the [Jasmine](http://jasmine.github.io/) framework.

The whole testing is organized in suites of small tests, one suite per each part of the app and every test runs independently from the others . Plus, we also ensure that asynchronous code is properly taken care of by using Jasmine *beforeEach()* and *done()* functions to simulate async behaviour.


## How to run the app

Click [here](https://mechaphysis.github.io/frontend-feedreader/) to run the online version of the web-app.

If you prefer to run it locally, download the [zip](https://github.com/mechaphysis/frontend-feedreader/archive/master.zip) file, uncompress it and open the index.html file in your web browser.


## TO-DO

* Add the possibility to choose which RSS feeds to follow.
* Add a new test suite for *'Customize RSS'*.  

## Contributing

This is my personal repository for the Udacity  Front-End Nanodegree project: _Feed Reader Test_. I will not likely accept pull requests for the moment, but feedback is always welcome! :relaxed:
