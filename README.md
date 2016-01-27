# innie
Css class to style in-liner. Sometimes you just need to inline your styles. This makes it a bit easier to maintain.

---
<br />
Html
--------
##### This:
```html
    <div class="class-name class-name-01 #replace-me"></div>
```
#####Plus This:
```css
    .replace-me {
        color: red;
        background-color: green;
    }
```
#####Equals This:
```html
    <div class="class-name class-name-01" style="color: red; background-color: green;"></div>
```
<br />
React
--------
#####This:
```Javascript
    React.createElement(
        'div',
        { 
            className: 'class-name class-name-01 #replace-me' 
        },
        'Seconds Elapsed: ',
        this.state.secondsElapsed
    );
```
#####Plus This:
```css
    .replace-me {
        color: red;
        background-color: green;
    }
```
#####Equals This:
```Javascript
    React.createElement(
        'div',
        { 
            className: 'class-name class-name-01', 
            style: { 'color': 'red', 'background-color': 'green' } 
        },
        'Seconds Elapsed: ',
        this.state.secondsElapsed
    );
```
<br />
##Installation
Not ready yet for distribution, but will be available via npm when it is.
<br />
```javascript
    var innie      = require('@illuns/innie');
    innie.compileHtml({
        file: 'test/index.html',
        style: 'test/style.css'
    }).then(function(){
        console.log('done');
    });
```
