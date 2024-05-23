interface Props {
	children: React.ReactNode;
}

function NavItem({ children }: Props) {
	return <li className="nav-item">{children}</li>;
}

export default NavItem;
