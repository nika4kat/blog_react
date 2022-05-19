import React from "react";
import "./Footer.css";
import { Row } from "reactstrap";

function Footer() {
	return (
		<div className='footer_main'>
			<Row>
				<img
					className='logo_footer'
					src='https://cdn-icons.flaticon.com/png/512/4210/premium/4210748.png?token=exp=1652970579~hmac=07db453bb3b83cb713a0bd12812d40d4'
				/>
			</Row>
			<div className='footer_left'>
				<Row>
					<h3>Legal</h3>
					<ul className='list'>
						<li>Privacy policy</li>
						<li>Terms of service</li>
					</ul>
				</Row>
				<Row>
					<h3>Company</h3>
					<ul className='list'>
						<li>About</li>
						<li>Blog</li>
						<li>Careers</li>
						<li>Contact us</li>
					</ul>
				</Row>
			</div>
		</div>
	);
}
export default Footer;
