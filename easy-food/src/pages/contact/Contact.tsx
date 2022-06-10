import React from 'react';
import './Contact.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact() {
	return (
		<body className='container'>
			<section >
				<div id="contact">
					<div className="social">

						<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
							<FacebookIcon style={{ fontSize: 40, color: "#ECE7B4" }} />
						</a>
						<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
							<InstagramIcon style={{ fontSize: 40, color: "#ECE7B4" }} />
						</a>
						<a href="https://www.linkedin.com/school/" target="_blank" rel="noopener noreferrer">
							<LinkedInIcon style={{ fontSize: 40, color: "#ECE7B4" }} />
						</a>

					</div>


					<div className="contact-box">

						<div className="c-heading">
							<h1>Entre em contato conosco</h1>
							<p>Preencha o formulário abaixo para relatar algum problema ou enviar uma sugestão</p>
						</div>

						<div className="c-inputs">
							<form action='https://formspree.io/f/xbjwbkpr' method='post'>
								<input type="text" placeholder="Nome completo" name='Nome'/>
								<input type="text" placeholder="Número de telefone" name='Telefone'/>
								<input type="email" placeholder="exemplo@email.com" name='E-mail'/>
								<textarea placeholder="Escreva aqui" name="Mensagem"></textarea>

								<a href="/home">
								<button className="btn">ENVIAR</button>
								</a>
							</form>
						</div>
					</div>
				</div>
			</section>
		</body>
	);
}

export default Contact;
