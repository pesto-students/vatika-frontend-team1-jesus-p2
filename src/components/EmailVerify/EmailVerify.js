import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import success from "../../assets/success.png";
import './EmailVerify.css';

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(false);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:5000/api/signup/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
			}
		};
		verifyEmailUrl();
	}, [param]);

	const closeTab = () => {
		window.opener = null;
		window.open("", "_self");
		window.close();
		
	  };

	return (
		<>
			{validUrl ? (
				<div className="container">
					<img src={success} alt="success_img" className="success_img" />
					<h1>Email verified successfully</h1>
						<button className="green_btn" onClick={closeTab}>Close</button>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</>
	);
};

export default EmailVerify;