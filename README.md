# Basic Coming Soon Page


A very basic coming soon page. Backend code will be uploaded soon. 

##Tutorials

###Changing Date:

Using the coming soon page is very easy. Open the `timer.js` file.

Find the code that says
```javascript
var comingDate = new Date("September 1, 2016, 23:59:00");
```
Change the date to whatever you need to.

###Change Modal

Find the the paragraph tag that reads `<p class="mBody">`.
Change the body text as needed.

###Change background Image

Simply change the image marked bg.jpg in the img directory. 

###Change Words Getting 'typed'

Once again in `timer.js` find the following:
```javascript
var meow = ["Skept","Speach", "Knowledge", "Ethics", "Philosophy"];
```
Change as needed. 

Remember to also change this line: 
```javascript
setTimeout(still("Skept"),500);
```
Change the string to the same as the first word in the above array.
