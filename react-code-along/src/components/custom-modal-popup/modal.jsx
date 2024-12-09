export default function Mod({ id, header, body, footer,onClose }) {
	return (
		<div id={id || "Modal"} className="moda">
			<div className="modal-content">
				<div className="header">
					<span onClick={onClose}className="close-modal-icon">&times;</span>
					<h2>{header ? header : "Header"}</h2>
				</div>
				<div className="body">
					{body ? (
						body
					) : (
						<div>
							<p>This is Our Modal body</p>
						</div>
					)}
				</div>
				<div className="footer">{footer ? footer : <h2>Footer!</h2>}</div>
			</div>
		</div>
	);
}
