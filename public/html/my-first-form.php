<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<html>
<head>
	<title>My First Form</title>
</head>
<body>

<form method="POST" action="/my-first-form.php">
  <h2>User Login</h2>
    <p>
        <label for="username">Username</label>
        <input id="username" name="username" type="text">
    </p>
    <p>
        <label for="password">Password</label>
        <input id="password" name="password" type="password">
    </p>


    <p>
        <input type="submit">
    </p>
</form>

<form method="POST" action="/my-first-form.php">
	<h2>Compose An Email:</h2>
<p>
	<label for="to"></label>
	<input id="to" name="to" type="text" placeholder="To">
</p>
<p>
	<label for="from"></label>
	<input id="from" name="from" type="text" placeholder="From">
</p>
<p>
	<label for="subject"></label>
	<input id="subject" name="subject" type="text" placeholder="Subject">
</p>

<textarea id="body" name="body" rows="20" cols="60"></textarea>
<p>
  <label for="mailing_list">
    <input type="checkbox" name="mailing_list" id="mailing_list" value="yes" checked>
    <label for="mailing_list"><em>Do you want to save a copy of the sent folder?</em></label>
  </label>
</p>

<p>What operating systems have you used?</p>
  <label><input type="checkbox" id="os1" name="os[]">Linux</label>
    <label><input type="checkbox" id="os2" name="os[]">OS</label>
      <label><input type="checkbox" id="os3" name="os[]">Windows</label>

<p>
  <input type="submit">
</p>


</form>

<h2>Multiple Choice Test</h2>
<form>
    <!-- This is the first question "radio" -->
  <P><strong>What is your favorite book?</strong></P>
    <label>
      <input type="radio" name="mult-book-quest" id="mult-book[]">
      Twilight
    </label>
    
    <label>
      <input type="radio" name="mult-book-quest" id="mult-book[]">
      50 Shades of Grey
    </label>
    
    <label>
      <input type="radio" name="mult-book-quest" id="mult-book[]">
      The Hunger Games
    </label>

    <!-- This is the second question "radio" -->
  <P><strong>What is your favorite movie?</strong></P>
    <label>
      <input type="radio" name="mult-mov-quest" id="mult-mov[]">
      The Breakfast Club
    </label>

    <label>
      <input type="radio" name="mult-mov-quest" id="mult-mov[]">
      Fear
    </label>
    
    <label>
      <input type="radio" name="mult-mov-quest" id="mult-mov[]">
      The Interview
    </label>

    <!-- This is the third question "checkbox" -->
  <p><strong>Do you like these food's?</strong></p>
    <label><input type="checkbox"id="food1" name="food[]" value="Pizza">Pizza</label>
      <label><input type="checkbox"id="food2" name="food[]" value="Spaghetti">Spaghetti</label>
        <label><input type="checkbox"id="food3" name="food[]" value="Garlic_Bread">Garlic Bread</label>
    
    <!-- This is the fourth question "multiple select" -->
  <p>
    <label for="tv-show"><strong>What is your favorite TV show?</strong></label>
      <select id="fav-show" name="fav-show[]" multiple>
        <option disabled selected>Select your favorite one</option>
        <option value="big-bang-theory">The Big Bang Theory</option>
        <option value="Knick">The Knick</option>
        <option value="Game-of-Thrones">Game of Thrones</option>
      </select>
  </p>
    
    <p>
      <input type="submit">
    </p>

</form>

<h2>Select Tasting</h2>
  <form>
    
    <label for="question">Do you Like Snacks?</label>
      <select name="question" id="question">
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>

  </form> 


</body>
</html>