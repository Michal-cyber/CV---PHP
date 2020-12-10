<?php include 'partials/header.php' ?> 

			<div class="reload-set">
				<div class="container">
					<div class="content">
						<h1>Contact me</h1>
						   <div class="contentLinks">
								<div class="links">
										<a href="https://www.linkedin.com/in/michal-l%C3%AD%C5%A1ka-b83097164/">
											<i class="fab fa-linkedin-in"></i>
										</a>
										<a href="https://www.facebook.com/michal.listicka">
											<i class="fab fa-facebook-messenger"></i>
										</a>
										<a href="https://github.com/Michal-cyber/">
											<i class="fab fa-github-alt"></i>
										</a>
								</div>

									<p>
										<strong> Emal: </strong> <a href="mailto:michal.listicka@gmail.com"> michal.listicka@gmail.com </a></p>
									<p>
										<strong>Tel: </strong> <a href="tel:+421944530274"> +421 944 530 274 </a>
									</p>
							</div>
					</div>

					<aside>
							<p>
								Looking foward to answering your email
							</p>
							<form action="_inc/send_mail.php" method="POST" class="container">
								<input type="text" name="name", placeholder="Name" required>
								<input type="email" name="e-mail", placeholder="Email" required>
								<input type="text" name="subject", placeholder="Subject" required>
								<textarea name="" id="" cols="30" rows="10" placeholder="Write me a message"></textarea>
								<input type="submit">
							</form>

					</aside>
				</div>
			</div>


<?php include 'partials/footer.php' ?> 