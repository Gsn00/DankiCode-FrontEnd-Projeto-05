<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap" rel="stylesheet">
	<title>Projeto 05</title>
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<link rel="shortcut icon" type="image-x/png" href="images/icon.ico">
</head>
<body>
	<header>
		<div class="center">
			<div class="logo">
				<img src="images/logo.jpg">
			</div>

			<nav class="menu-desktop">
				<ul>
					<li><a href="home">HOME</a></li>
					<li><a href="market">VENDA</a></li>
					<li><a href="about">SOBRE</a></li>
					<li><a goto="contato" href="">CONTATO</a></li>
				</ul>
			</nav>

			<nav class="menu-mobile">
				<div class="menu-mobile-icon">
					<ul>
						<li><a href="home">HOME</a></li>
						<li><a href="market">VENDA</a></li>
						<li><a href="about">SOBRE</a></li>
						<li><a goto="contato" href="">CONTATO</a></li>
					</ul>
				</div>
			</nav>
		</div><!-- center -->
	</header>

<?php

	if (isset($_GET['url'])) {
		if (file_exists($_GET['url'].'.html')) {
			include($_GET['url'].'.html');
		} else {
			include('404.html');
		}
	} else {
		include('home.html');
	}

?>

	<footer>
		<div class="center">
			<nav>
				<ul>
					<li><a href="home">HOME</a></li>
					<li><a href="market">VENDA</a></li>
					<li><a href="about">SOBRE</a></li>
					<li><a goto="contato" href="">CONTATO</a></li>
				</ul>
			</nav>
			<p>Todos os direitos reservados</p>
		</div><!-- center -->
	</footer>

	<script src="./js/jquery.js"></script>
	<script src="./js/functions.js"></script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-FV0QZESF5M"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-FV0QZESF5M');
	</script>
</body>
</html>