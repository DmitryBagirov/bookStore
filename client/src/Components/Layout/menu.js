import React from "react";
import {Link} from "react-router-dom";
import {Container, Dropdown, Image, Menu} from "semantic-ui-react";
import Auth from "../../Services/auth";

export default class LayoutMenu extends React.Component {

	render() {
		let menu;
		if (Auth.isAuth()) {
			menu =
				<Dropdown className="right" item simple text={localStorage.getItem('login')}>
					<Dropdown.Menu>
						<Dropdown.Item><Link to="/profile" style={{ color: "black" }}>Профиль</Link></Dropdown.Item>
						<Dropdown.Item><Link to="/stash" style={{ color: "black" }}>Корзина</Link></Dropdown.Item>
						<Dropdown.Item><Link to="/logout" style={{ color: "black" }}>Выход</Link></Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			;
		} else {
			menu =
				<Dropdown className="right" item  text='Пользователь'>
					<Dropdown.Menu>
						<Dropdown.Item><Link to="/login" style={{ color: "black" }}>Вход</Link></Dropdown.Item>
						<Dropdown.Item><Link to="/registration" style={{ color: "black" }}>Регистрация</Link></Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
		}
		return (
			<Menu fixed='top' inverted>
				<Container>
					<Menu.Item header>
						<Image
							src='/assets/logo.png'
							style={{width: '80px', marginRight: '1.5em'}}
						/>
						BookStore
					</Menu.Item>
					<Menu.Item><Link to="/books">Книги</Link></Menu.Item>
					<Menu.Item><Link to="/support">Поддержка</Link></Menu.Item>
					<Menu.Item><Link to="/about">О нас</Link></Menu.Item>
					<Menu.Item><Link to="/search">Поиск</Link></Menu.Item>
					{menu}
				</Container>
			</Menu>
		);
	}
}