interface Props {
	children: React.ReactNode;
	className?: string;
}

function NavItem({ children, className }: Props) {
	return <li className={`nav-item ${className}`}>{children}</li>;
}

export default NavItem;
