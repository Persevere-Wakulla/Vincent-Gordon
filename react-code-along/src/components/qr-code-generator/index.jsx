import { useState } from "react";
// import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
	const [qrCode, setQRCode] = useState("");
	const [input, setInput] = useState("");

	function handleGenerateQrCode() {
		setQRCode(input);
        setInput('')
	}
	return (
		<div>
			<h1>Qr Code Generator</h1>
			<div>
				<input
					onChange={(e) => setInput(e.target.value)}
					type="text"
					name="qr-code"
                    value={input}
					placeholder="Enter Your Value Here"
				/>
				<button
					disabled={input && input.trim() !== "" ? false : true}
					onClick={handleGenerateQrCode}
				>
					Generate
				</button>
			</div>
			<div>
				<QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
			</div>
		</div>
	);
}
