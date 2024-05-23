import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EditPage() {
	const navigate = useNavigate();

	useEffect(() => {
		if (sessionStorage.length < 1) {
			navigate('/log-in');
		}
	});

	return <div data-testid="edit-page">EditPage</div>;
}

export default EditPage;
