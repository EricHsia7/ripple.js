# ripple.js
## install
ripple.js
```
<script src="https://erichsia7.github.io/ripple.js/v2/ripple.js"></script>
```
## use
1.script
```
ripple(<selector :Selector>,<ripple color :string>,<opacity :string>,<time :number>);
``` 
* ripple color : any css color code
 
* opacity : css opacity(0 - 1)
 
## example
```
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charset="UTF-8" />
<title>ripple.js</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400,500,700&display=swap');

  .btn {
    width: 100px;
    height: 55px;
    border-radius: 99em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    font-weight: 500;
    font-family: 'Noto Sans TC', sans-serif;
    margin-top: 30px;
  }

  #b1 {
    background: #fafafa;
    color: #1082af;
  }

  #b2 {
    background: #1082af;
    color: #fff;
  }

  h1 {
    font-weight: 700;
    font-family: 'Noto Sans TC', sans-serif;
    text-align: center;
    margin-top: 80px;
  }

  p {
    font-weight: 500;
    font-family: 'Noto Sans TC', sans-serif;
    text-align: center;
  }

  #github {
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 55px;
    height: 55px;
    border-radius: 99em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    background: url(github.png);
    background-size: 55px 55px;
    background-position: center;
  }

  #d1 {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-family: 'Noto Sans TC', sans-serif;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
<h1>ripple.js</h1>
<p>Add ripple effects to elements.</p>

<div id="d1">
  Click here.
</div>

<div class="btn" style="position:relative;left:50%;transform:translateX(-50%)" id="b1">button1</div>

<div class="btn" style="position:relative;left:50%;transform:translateX(-50%)" id="b2"
  ripple-onclick="alert('button2')">button2</div>


<div id="github" ripple-onclick="window.open('https://github.com/EricHsia7/ripple.js')"></div>
<script src="v2/ripple.js?1"></script>
<script>
  ripple('#b1', '#1082af', '0.4', 1200);
  ripple('#b2,#github', '#fff', '0.4', 1200);
  ripple('#d1', '#000', '0.3', 1200);
</script>
```
[Demo](https://erichsia7.github.io/ripple.js/)
## download
[ripple.min.js](https://raw.githubusercontent.com/EricHsia7/ripple.js/main/v2/ripple.js)
