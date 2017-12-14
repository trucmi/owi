<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="author" content="BeSensius"/>
  <meta name="description" content="OWI est le seul matelas 100% écologique qui vous permet de produire de l’énergie électrique pendant vos rapports sexuels. Convertissez l'énergie mécanique en électricité grâce aux capteurs piézoélectriques pour créer de l'énergie propre."/>
  <meta name="keywords" content="matelas literie éléctricité énergie piézoélectrique amour sexe sex technologie plaisir couple écologie propre rencontre"
  <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <link rel="shortcut icon" href="img/favicon2.png" type="image/x-icon">
  <link rel="icon" href="img/favicon2.png" type="image/x-icon">
  <title>@yield('title')</title>
  @yield('links')

<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
<script type="text/javascript" src="js/tooltipster.bundle.js"></script>
<script>
        $(document).ready(function() {
            $('.tooltip').tooltipster({
               trigger: 'click',
               side:['left','bottom', 'top', 'right' ],
               zIndex:8,
               minWidth:240 ,
               distance: 20 ,
            });
        });
    </script>
<!-- Hotjar Tracking Code for http://owi.azurewebsites.net -->
<script>
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:703684,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
 </script>
  
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-110382679-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

 gtag('config', 'UA-110382679-1');
 </script>
 
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVGSB52');</script>
<!-- End Google Tag Manager -->
<!-- Google webmaster tools-->
<meta name="google-site-verification" content="VtAr6dPx4xr30TKOy4nSbhRDs7j5iPsF0kPDdxlL0t8" />
</head>
<body>
       <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVGSB52"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<!-- Chatbot -->
<script type="text/javascript" src="https://quriobot.com/qb/widget/NeBYgZbjRqb3l7jA/69nJaZmp90rpvxPR"></script>
	@yield('contenu')
  <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
  <script src="js/index.js"></script>
</body>
<footer>
  <p>2017 © BeSensius | <a href="">mentions légales</a></p>
</footer>
</html>
