@extends('template')
@section('links')
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/tooltipster.bundle.css" />
@endsection
@section('title')
  OWI, partenaire de l'énergie du plaisir
@endsection
@section('contenu')
<div class="site-content">
      <header id="header">
        <nav class="menu">
          <div class="header__logo">
            <a href="#header">
              <img alt="logo owi, partenaire de l'énergie du plaisir" src="img/logo_rose.png">
            </a>
          </div>
            <a href="#header" class="header__logo2">
              <img alt="logo owi, partenaire de l'énergie du plaisir" src="img/logo_blanc.png">
            </a>
          <div class="conteneur-burger" id="header__icon">
            <span class="menu-global menu-top"></span>
            <span class="menu-global menu-middle"></span>
            <span class="menu-global menu-bottom"></span>
          </div>
          <ul class="liste-menu">
            <li><a href="#content">Le matelas Owi</a></li>
            <li><a href="#equipe">L'équipe</a></li>
            <li><a href="#mail">Restez connecté</a></li>
            <li class="telecharger-res"><a href="php/membre.php">L'application</a></li>
          </ul>
          <a href="php/membre.php"><button class="se-connecter">L'application</button></a>
          <div class="se-connecter-picto">
          <a href="php/membre.php">
            <img alt="connectez-vous à votre espace membre" src="img/membre.png">
          </a>
        </div>
        </nav>
        <article class="accueil">
          <div class="triangle-header"></div>
          <h1 data-aos="fade-up">OWI</h1>
          <h3 data-aos="fade-up">Partenaire de <span class="noir">l’énergie</span> du plaisir !</h3>
          <h4 data-aos="fade-up">
          OWI est le seul matelas 100%
          écologique qui vous permet de
          produire de l’énergie électrique
          grâce à vos plaisirs charnels. Prenez
          du bon temps en toute simplicité
          pour illuminer votre foyer !</h4>
        </article>
        </header>
        <section class="main">
          <a class="arrow-wrap" href="#content">
            <span class="arrow"></span>
          </a>
        </section>
        <div class="content produit" id="content">
          <h2 class="h2"><span>Notre</span> <span>produit</span> <span>OWI</span></h2>
          <div class="triangle"></div>
          <div class="triangle-produit"></div>
          <div class="matelas" data-aos="fade-up">
            <div class="element" id="mat1">
              <div class="bouton-info-matelas tooltip" data-tooltip-content="#tooltip_content"></div>
              <div class="element-matelas" id="element-matelas1"><img  alt="matelas owi schema" src="img/matelas-element1.png"></div>
            </div>
            <div class="tooltip_templates">
              <span id="tooltip_content">
                <h5>Housse du haut</h5>
                <p class="cdt-matelas">Owi possède une housse synthétique qui permet de profiter d’une qualité de matelas optimale. La housse s’enlève facilement et est lavable en machine.</p>
              </span>
            </div>
            <div class="element" id="mat2">
              <div class="bouton-info-matelas tooltip" data-tooltip-content="#tooltip_content2"></div>
              <div class="element-matelas" id="element-matelas2"><img  alt="matelas owi schema" src="img/matelas-element2.png"></div>
            </div>
            <div class="tooltip_templates">
              <span id="tooltip_content2">
                <h5>Mousse mémoire de forme</h5>
                <p class="cdt-matelas">La mousse mémoire de forme de 8cm épouse parfaitement votre corps pour une nuit sereine. Elle est adaptée aux mouvements que vous produisez pour plus de confort. Anti-acarien, et résistante à la chaleur, l’humidité est évacuée et votre matelas reste frais pour d’autres aventures.</p>
              </span>
            </div>
            <div class="element" id="mat3">
            <div class="bouton-info-matelas tooltip" data-tooltip-content="#tooltip_content3"></div>
              <div class="element-matelas" id="element-matelas3"><img  alt="matelas owi schema" src="img/matelas-element3.png"></div>
            </div>
            <div class="tooltip_templates">
              <span id="tooltip_content3">
                <h5>Mousse mémoire confort</h5>
                <p class="cdt-matelas">La mousse mémoire confort de 3cm est composée de matières écologiques qui soulagent des allergies et contribuent au bien de l’environnement.</p>
              </span>
            </div>
            <div class="element" id="mat4">
            <div class="bouton-info-matelas tooltip" data-tooltip-content="#tooltip_content4"></div>
              <div class="element-matelas" id="element-matelas4"><img  alt="matelas owi schema" src="img/matelas-element4.png"></div>
            </div>

            <div class="tooltip_templates">
              <span id="tooltip_content4">
                <h5>Capteurs</h5>
                <p class="cdt-matelas">Owi est composé d’une des dernières technologies, des capteurs piézoélectriques qui détectent les mouvements et qui les transforme en énergie. Les capteurs sont imperceptibles pour votre plus grand bien.</p>
              </span>
            </div>
            <div class="element" id="mat5">
              <div class="bouton-info-matelas tooltip" data-tooltip-content="#tooltip_content5"></div>
              <div class="element-matelas" id="element-matelas5"><img  alt="matelas owi schema" src="img/matelas-element5.png"></div>
            </div>
            <div class="tooltip_templates">
              <span id="tooltip_content5">
                <h5>Mousse froide jaune</h5>
                <p class="cdt-matelas">La mousse froide contribue à garder une qualité et une densité (36kg/m3) sur la durée afin de profiter des bienfaits d’Owi le plus longtemps possible.</p>
              </span>
            </div>
            <div class="element" id="mat6">
            <div class="bouton-info-matelas tooltip" data-tooltip-content="#tooltip_content6"></div>
              <div class="element-matelas" id="element-matelas6"><img  alt="matelas owi schema" src="img/matelas-element6.png"></div>
            </div>
            <div class="tooltip_templates">
              <span id="tooltip_content6">
                <h5>Housse du bas</h5>
                <p class="cdt-matelas">La housse est équipée d’une base antidérapante pour vous donner une liberté de mouvements et des nuits synonymes de plaisir.</p>
              </span>
            </div>
          </div>
        </div>
      <div class="content equipe" id="equipe" >
<div class="equipe-partie1">
        <h2 class="h2bis"><span>Qui se cache</span> <span>sous</span> <span>le matelas ?</span></h2>
        <div data-aos="fade-up" class="texte-equipe"><p class="titre-equipe"><span>owi</span>, c'est ?</p>
          <p class="cdt-equipe">Owi, c’est 2 ans de recherches en équipe pour vous proposer un produit performant et de qualité ! Notre valeur ajoutée ? Combiner le savoir-faire de différents experts (ingénieurs, designers et experts en literie) pour améliorer votre quotidien. A travers ce matelas, nous souhaitons vous impliquer dans la protection de l’environnement en vous proposant une façon innovante de créer de l’énergie propre.</p></div>
</div>
<div class="img-equipe">
  <img alt="l'équipe du matelas OWI" src="img/montage-team.png">
</div>
        </div>
        <div class="content" >
          <h2 class="h2"><span>Quelques</span> <span>chiffres</span> <span>clés</span></h2>
          <div class="triangle"></div>
          <div class="infographie">
            <div class="info" data-aos="zoom-in">
              <div class="cercle">
                <p class="chiffre">8.7</p>
              </div>
              <p class="cdt-explication">Moyenne des rapports sexuels par mois chez les Français.</p>
            </div>
            <div class="info" data-aos="zoom-in">
              <div class="cercle">
                <p class="chiffre">25</p>
              </div>
              <p class="cdt-explication">Moyenne du nombre d’années qu’un français passe à dormir dans une vie.</p>
            </div>
            <div class="info" data-aos="zoom-in">
              <div class="cercle">
                <p class="chiffre">380</p>
              </div>
              <p class="cdt-explication">Le nombre d’heures qu’une femme et un homme peuvent produire d’électricité par an.</p>
            </div>
          </div>
        </div>
        <div class="content mail" id="mail" >
          <h2 class="h2"><span>OWI</span> <span class="noir">is coming !<span></h2>
            <div class="triangle-mail-blanc"></div>
            <div class="contenu-mail">
              <div class="precommander">
                <p class="precommander-p1">Vous voulez précommander Owi ?</p>
                <p class="precommander-p2">Ça tombe bien, il arrive sur le marché ! Recevez une alerte dès son arrivée.</p>
                <form method="POST" action="{!! url('subscribe-waiting-list') !!}">
                  <input type="text" class="champs_email" placeholder="Saisissez votre adresse mail..." name="email" id="email">
                  {!! csrf_field() !!}
                  <input class="envoyer_email" type="submit">
                  </form>
                  @if($errors)
                  @foreach ($errors->all() as $error)
                  <div><p>{{ $error }}<p></div>
                  @endforeach
                  @endif
                  @if(Session::has('message'))
                  <div><p>{{ Session::get('message') }}<p></div>
                  @endif
              </div>
              <div class="triangle"></div>
              <div class="reseaux_sociaux">
                <p>Vous pouvez aussi nous retrouver ici</p>
                <div class="picto_rs">
				<a href="https://www.facebook.com/OWI-1807340812897308?utm_source=social-media&utm_medium=facebook&utm_campaign=landingpage_fb"><img alt="lien messenger pour nous contacter" src="img/messenger.png"></a>
				<a href="https://www.facebook.com/OWI-1807340812897308?utm_source=social-media&utm_medium=facebook&utm_campaign=landingpage_fb"><img alt="lien facebook pour nous contacter" src="img/facebook.png"></a>
				<a href="https://twitter.com/OWI_officiel?utm_source=social-media&utm_medium=twitter&utm_campaign=landingpage"><img alt="lien twitter pour nous contacter" src="img/twitter.png"></a>
        <a href="https://www.linkedin.com/company/11381574/"><img alt="lien linkedin pour nous contacter" src="img/linkedin.png"></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      <div class="site-cache"></div>
    </div>
@endsection

