> ### *Able was I ere I saw Elba* - Napolean

Elba makes JavaScript appear to be written backwards. For example,

```
(function hi(){
    console.log('elba');
})();
```

Will become

```
var _rav = '‮'; _rav = (function hi(){ console.log('elba');})();
```

When either version is executed it will still log the string `elba`.

For a more complicated example, here is [underscore.js](https://gist.githubusercontent.com/dmvaldman/ac13735113e661ef25c48e20d789d361/raw/58e8b6e85bc614a9f878b59de9468022116f24a3/backwards.js)

<img src="http://i.imgur.com/ErIlMKR.jpg">

## Installation:

```
npm install -g elba
```

## Usage

```
elba myFile.js > eliFym.js
```

## How it works:

`\u202E` is the unicode right-to-left override character.
It will make any text after it appear right-to-left until the presense of
a `\u202D` (left-to-right override character) or a new line character.

To make your source code backwards, we turn it into a single string (with no line breaks) and add a `\u202E` character
near the beginning. The gotchya is that this string must also be interpretable as a valid JavaScript file.
If both these are true, then this valid JavaScript will be displayed backwards by any text-editor that supported
bi-directional text. The JavaScript will still work exactly as intended, it will only _appear_ backwards.

Let's call the user specified source code `S`. It's important that `S` is a wrapped function, but this is common
for any UMD module. We first remove all line-breaks from `S`. We then prepend the source code with
`var a = \u202E; a = ` (though actually we use `a = _rav` to make the leaked variable more obscure and less likely to create conflicts).

Since `S` is a function, `var a = \u202E; a = S` is both a one-line string, AND valid JavaScript (when interpreted).

.D.E.Q
