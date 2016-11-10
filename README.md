> ### *Able was I ere I saw Elba* – Napoleon

Elba makes JavaScript appear to be written backwards. For example,

```
(function hi(){
    console.log('elba');
})();
```

Will become

```
_elba='‮';(function hi(){ console.log('hi')})()
```

When either version is executed it will log the string `elba`. Try it in your JavaScript console.

For a more complicated example, here is [underscore.js](https://gist.githubusercontent.com/dmvaldman/8238a65a460ffea046888c1872db66f5/raw/cd70b743086164b8db0fa2c3cc9ef0b13f3b3fc7/erocsrednu.js)

<img src="http://i.imgur.com/yZxfEx3.png">

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
It will make any text after it appear right-to-left until the presence of
a `\u202D` (left-to-right override character) or a newline character.

For example: `"\u202E" + "hello"` is interpreted as `"olleh"`.

To make your source code backwards, we turn it into a single string (with no line breaks) and add a `\u202E` character
near the beginning. The gotchya is that this string must also be interpretable as a valid JavaScript file.
If both these are true, then it will be displayed backwards by any text-editor that supports
bi-directional text and will still work exactly as intended. The code only _appears_ backwards in the editor.

Let's call the user specified source code `S`. We first remove all comments and line-breaks from `S`. We then prepend the source code with
`_elba = \u202E;`.

Then, `_elba = \u202E; S` is both a one-line string, AND valid JavaScript (when interpreted).

∎ .D.E.Q
