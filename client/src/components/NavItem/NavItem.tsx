interface Props {
	children: React.ReactNode;
}

function NavItem({ children }: Props) {
	return <li>{children}</li>;
}

export default NavItem;
