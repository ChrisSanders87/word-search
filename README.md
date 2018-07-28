# word-search

original code provided by:
  Robert Calin-Jageman
  Professor, Psychology
  Neuroscience Program Director
  Dominican University
  Parmer 210
  7900 West Division
  River Forest, IL 60305
  rcalinjageman@dom.edu
  708.524.6581
  http://calin-jageman.net

description of code: https://calin-jageman.net/lab/word_search/

custom word-searches created using Discovery Education's Puzzlemaker: http://puzzlemaker.discoveryeducation.com/WordSearchSetupForm.asp

Demo1: original example, trimmed
Demo2: original example, executing js from git
Demo3: AM/PM example

# Instructions based on correspondence with Bob Calin-Jageman

To customize word-search:
  *Always:* In "Look and Feel", change the HTML header to one which references the correct paths for externally-housed js files
    - One option is to store on github and use https://rawgit.com/ to extract a production URL
  1. In "Survey Flow", change the randomizer to select between a different number of conditions and add the conditions by copying and modifying the appropriate questions
  2. Modify the js of any individual question to change the word-search ('condition' : 4) and keywords ( 'words': []) to use for a given experimental condition
  3. Modify the wordsearch.js file to employ a custom word-search
