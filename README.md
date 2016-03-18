<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Meme Generator</title>
<link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
<link href="css/style.css" rel="stylesheet">  
</head>
<body>
    
<!--
<nav class="navbar navbar-fixed-top navbar-light bg-faded">
  <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
    &#9776;
  </button>
    <a class="navbar-brand" href="index.html">
        <img alt="Brand" src="images/logo-sm.png">
      </a>

  <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
    <ul class="nav navbar-nav">
   <li class="nav-item active">
        <a class="nav-link" href="index.html">Meme Generator <span class="sr-only">(current)</span></a>
      </li>
   
    </ul>
  </div>
</nav>
-->
    
    
<div class="container schedule">
 
    <h2>The Dank Meme-erator</h2>
    <p>Select a picture, add a caption, and enjoy your personalized meme!</p>
    <div class="row">
   
    <div class="col-sm-12 col-md-4 input-text">
        <form class="html5-form-test" action="">
      <fieldset class="form-group">
          <textarea required="" type="text" id="name-input" class="form-control" placeholder="Enter Caption Here"></textarea>
      </fieldset>
        </form>
        <a class="btn numba3" role="button">Create</a>

    </div>
    <div class="col-sm-12 col-md-8 image-display">
       <img id="bigImg" src="images/got.png" alt="">
    </div> 
    </div>
    <div class="imageSelect row">
         <div class="col-xs-6 col-md-2 images">
             <img src="images/glass.png" alt="">
         </div>
         <div class="col-xs-6 col-md-2 images">
             <img src="images/got.png" alt="">
         </div>
         <div class="col-xs-6 col-md-2 images">
             <img src="images/got2.png" alt="">
         </div>
         <div class="col-xs-6 col-md-2 images">
             <img src="images/world.png" alt="">
         </div>
         <div class="col-xs-6 col-md-2 images">
             <img src="images/hist.png" alt="">
         </div>
         <div class="col-xs-6 col-md-2 images">
             <img src="images/drink.png" alt="">
         </div>
     </div>
     <div class="commentFrom">
       <h1></h1>
        <br>
         <form action="">
             <input type="text" name="name" class="col-xs-12" placeholder="Enter Name">
             <textarea name="comment" id="comment" cols="30" rows="10" class="col-xs-12" placeholder="Enter Comment"></textarea>
             <input type="submit" name="submit" class="btn numba3">
         </form>
     </div>
    
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
<script src="script.js"></script>
</body>


</html>
