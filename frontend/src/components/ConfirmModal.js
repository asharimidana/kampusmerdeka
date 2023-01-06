import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ConfirmModal = ({ children, description, id }) => {
	const [open, setOpen] = useState(false);
	const [callback, setCallback] = useState(null);

	const navigate = useNavigate();
	const show = callback => event => {
		event.preventDefault();
		setOpen(true);
		event = {
			...event,
			target: { ...event.target, value: event.target.value }
		}
		setCallback({
			run: () =>
				callback(event)
		});
	};

	const hide = () => {
		setCallback(null);
		setOpen(false);
	};

	const deleteUser = async () => {
		try {
			await axios.delete(`http://localhost:5000/mhs/${id}`);
			callback.run();
			hide();
			navigate('/')
		} catch (error) {
		}
	};


	return (
		<>
			{children(show)}
			{open && (
				<>
					<p>{description}</p>
					<button className="button is-danger p-0 is-small px-2 mr-2" onClick={hide}>Cancel</button>
					<button className="button is-danger p-0 is-small" onClick={deleteUser}>delete</button>
				</>
			)}
		</>
	);
};
export default ConfirmModal;
