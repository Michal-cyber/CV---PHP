<?php 
		$page_name = basename($_SERVER['SCRIPT_NAME'], '.php');
		if ($page_name == 'xindex') $page_name = 'home';

		require '_inc/config.php';

?>
		

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/normalize.css">
	<link href="https://developer.mozilla.org/docs/Web/CSS/font-family" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
	<link rel="stylesheet" href="css/style.min.css">

	

	<title><?php echo ucfirst($page_name) ?> / CV </title>
</head>
<body>
	<header>
		<div class="container">
			<nav>
				
		<ul class="nav">
		  
                <li class="selected"><h1>Michal Líška</h1> <strong>Web developer</strong> </li>

				<div class="findMeCont">

				
				<?php 
				//vyhlada vsetky subory podla podmienky
				$pages = glob('*.php');
				$pages = array_reverse($pages);
			

				foreach( $pages as $file ) {
					$page = basename($file, '.php');
					if ($page == 'xindex') {
						$page = 'home';
						
					}

					if( $page_name == $page ) echo '<li class="findMe">'. strtoupper($page) .'</li>';
						else echo '<li class="findMe"><a href="'. $file .'">'. strtoupper($page) .' </a></li>'; 
					
                }	
                			
				?>
				</div>
			</ul>
			</nav>
		</div>
	</header>

	<main id="<?php echo $page_name?>">
	
	<section class="reload">