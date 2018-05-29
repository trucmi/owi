@extends('template')
@section('titre')
  Contactez moi !
@endsection
@section('links')
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
<link type="text/css" rel="stylesheet" href="css/style.css">
@endsection
@section('contenu')
<form method="POST" action="{!! url('send-contact') !!}">
  <input type="text" placeholder="Saisissez votre adresse mail..." name="email" id="email">
  <input type="text" placeholder="Prénom" name="email" id="prenom">
  <input type="text" placeholder="Nom" name="nom" id="nom">
  <input type="text" placeholder="Votre Message" name="message" id="message">

  {!! csrf_field() !!}
  <input type="submit">
</form>
@endsection
