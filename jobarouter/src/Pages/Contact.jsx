import useLocalStorage from "../components/customLocalSHook";
import {Form,redirect,useActionData} from 'react-router-dom'
export default function Contact() {
	const [email, setEmail] = useLocalStorage("email", "");
	const [message, setMessage] = useLocalStorage("message", "");

    const data = useActionData()
	return (
		<div className="contact">
			<h3>Contact Us</h3>
			<Form method="post" action="/help/contact">
				<label>
					<span>Your Email:</span>
					<input
						type="text"
						value={email}
						aria-label="email"
						placeholder="Enter Email..."
						onChange={(e) => setEmail(e.target.value)}
                        required
					/>
				</label>
                <label>
                    <span>Your Message:</span>
                    <textarea name="message"
                    required
                    value={message}
                    placeholder="Please type message.."
                    aria-label="message"
                    onChange={(e) => setMessage(e.target.value)}></textarea>
                </label>
                <button type="submit">Submit</button>

                {data && data.error && <p>{data.error}</p> }
			</Form>
		</div>
	);
}

export const contactAction = async ({request}) => {

    const data = await request.formData()
    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    // send post request
    if (submission.message.length < 10) {
        return {error: 'Message Must Be Over 20 Char Long!'}
    }
    // redirect user
    return redirect('/')
}