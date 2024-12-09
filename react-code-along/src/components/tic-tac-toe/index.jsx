import { useEffect, useState } from "react";
import "./stylz.css";

function Square({ value, onClick }) {
	return (
		<button onClick={onClick} className="square">
			{value}
		</button>
	);
}

// 0 1 2
// 3 4 5
// 6 7 8

export default function TicTacToe() {
	const [squares, setSquares] = useState(Array(9).fill(""));
	const [isxTurn, setIsxTurn] = useState(true);
	const [status, setStatus] = useState('');

	function getWinner(squares) {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < winningPatterns.length; i++) {
			const [a, b, c] = winningPatterns[i];

			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	}

	function handleClick(getCurrentSquare) {
		let copySquares = [...squares];
		if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
		copySquares[getCurrentSquare] = isxTurn ? 'X' : '0'
		// copySquares[getCurrentSquare] = isxTurn ? <div style={{color: 'blue'}}>X</div> : <div style={{color: 'green'}}>0</div>;
		setIsxTurn(!isxTurn);
		setSquares(copySquares);
	
	}

	function handleRestart () {
		setIsxTurn(true)
		setSquares(Array(9).fill(''))
	}
useEffect(() => {
if (!getWinner(squares) && squares.every(item => item !== '')) {
	setStatus(<h1 style={{color: 'aqua'}} >This is a Draw! Please Restart Game!</h1>)
} else if (getWinner(squares)) {
	setStatus(<h1 style={{color: 'green'}}>Winner Is {getWinner(squares)}. Please Restart The Game!</h1>)
} else {
	setStatus(<h1 style={{color:'blue'}}>Next Player is {isxTurn ? 'X' : '0'}</h1>)
}
},[squares,isxTurn])
	return (
		<div className="tic-tac-toe-container">
			<div className="row">
				<Square value={squares[0]} onClick={() => handleClick(0)} />
				<Square value={squares[1]} onClick={() => handleClick(1)} />
				<Square value={squares[2]} onClick={() => handleClick(2)} />
			</div>
			<div className="row">
				<Square value={squares[3]} onClick={() => handleClick(3)} />
				<Square value={squares[4]} onClick={() => handleClick(4)} />
				<Square value={squares[5]} onClick={() => handleClick(5)} />
			</div>
			<div className="row">
				<Square value={squares[6]} onClick={() => handleClick(6)} />
				<Square value={squares[7]} onClick={() => handleClick(7)} />
				<Square value={squares[8]} onClick={() => handleClick(8)} />
			</div>
			<>{status}</>
			<button className="btn btn-outline-danger bg-dark-subtle" onClick={handleRestart}>Restart</button>
		</div>
	);
}
