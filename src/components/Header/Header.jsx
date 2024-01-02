import React from 'react';
import './Header.css';
import {BiMenuAltRight}  from 'react-icons/bi'
const Header = () => {
	const [menuOpen ,setMenuOpen] = React.useState(false)
	const getMenuStyles = (menuOpen)=>{
		if(document.documentElement.clientWidth <= 800)
			{
			return {left :!menuOpen && "-100%"}
		}
	}
	return (
			<section className="h-wrapper">
				<div className="flexCenter paddings h-container">
					 <div className="logo">zyrundo</div>

				<div className="flexCenter h-menu h_menu2" 
				style={getMenuStyles(menuOpen)}>
					<a href=""> Residencies</a>
					<a href="">Our value </a>
					<a href=""> Contact us</a>
					<a href=""> Get Started</a>
					<button className="button">
						<a href=""> Contact</a>
					</button>
				</div>
				</div>
				<div className="menu_icon"
				onClick={()=>setMenuOpen((previous)=>!previous)}>
					<BiMenuAltRight size={30}/>
				</div>
			</section>
		)
}

export default Header