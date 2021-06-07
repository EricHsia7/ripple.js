# ripple.js
## install
JQuery
```
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```
ripple.js
```
<script src="https://erichsia7.github.io/ripple.js/ripple.min.js"></script>
```
## use
1.script
```
ripple(<selector :string>,<ripple color :string>,<opacity :string>,<time :number>,<click_remove_style_width&height :'true' or 'false'>);
``` 
ripple color can any css color code.
## example
```
<meta charset="UTF-8">
<title>Demo</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap" rel="stylesheet">
<style>
body {
background:url(https://source.unsplash.com/random);
}
</style>
<body>
<a href="javascript:test('slide')">slide</a>
  <a href="javascript:test('fade')">fade</a>
  <a href="javascript:test('show')">show</a>
  <script src="https://erichsia7.github.io/prompt.js/prompt.min.js"></script>
<script>
function test(an) {
$('body').prompt({'message':'message(' + an + ')','time':1800,'animate':an});
}
</script>
</body>
```
[Demo](https://erichsia7.github.io/ripple.js/)
## download
[prompt.js](https://github.com/EricHsia7/ripple.js/raw/main/ripple.min.js)
