// 'use client'

// import { useState, useEffect } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Shuffle } from 'lucide-react'

// type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
// type CardSuit = 'hearts' | 'diamonds' | 'clubs' | 'spades'

// interface Card {
//   value: CardValue
//   suit: CardSuit
// }

// const cardValueToString = (value: CardValue): string => {
//   switch (value) {
//     case 1: return 'A'
//     case 11: return 'J'
//     case 12: return 'Q'
//     case 13: return 'K'
//     default: return value.toString()
//   }
// }

// const cardSuitToSymbol = (suit: CardSuit): string => {
//   switch (suit) {
//     case 'hearts': return '♥'
//     case 'diamonds': return '♦'
//     case 'clubs': return '♣'
//     case 'spades': return '♠'
//   }
// }

// const HiLoGame = () => {
//   const [deck, setDeck] = useState<Card[]>([])
//   const [currentCard, setCurrentCard] = useState<Card | null>(null)
//   const [score, setScore] = useState(0)
//   const [gameOver, setGameOver] = useState(false)

//   useEffect(() => {
//     initializeGame()
//   }, [])

//   const initializeGame = () => {
//     const newDeck = createDeck()
//     shuffleDeck(newDeck)
//     setDeck(newDeck)
//     setScore(0)
//     setGameOver(false)
//     drawCard(newDeck)
//   }

//   const createDeck = (): Card[] => {
//     const suits: CardSuit[] = ['hearts', 'diamonds', 'clubs', 'spades']
//     const deck: Card[] = []
//     for (let suit of suits) {
//       for (let value = 1; value <= 13; value++) {
//         deck.push({ value: value as CardValue, suit })
//       }
//     }
//     return deck
//   }

//   const shuffleDeck = (deck: Card[]) => {
//     for (let i = deck.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1))
//       ;[deck[i], deck[j]] = [deck[j], deck[i]]
//     }
//   }

//   const drawCard = (deck: Card[]) => {
//     if (deck.length === 0) {
//       setGameOver(true)
//       return
//     }
//     const nextCard = deck.pop()
//     setCurrentCard(nextCard || null)
//     setDeck(deck)
//   }

//   const handleGuess = (guess: 'higher' | 'lower') => {
//     if (!currentCard || deck.length === 0) return

//     const nextCard = deck[deck.length - 1]

//     if (
//       (guess === 'higher' && nextCard.value > currentCard.value) ||
//       (guess === 'lower' && nextCard.value < currentCard.value)
//     ) {
//       setScore(prevScore => prevScore + 1)
//       drawCard(deck)
//     } else {
//       setGameOver(true)
//     }
//   }

//   const renderCard = (card: Card | null) => {
//     if (!card) return null
//     return (
//       <div className="w-24 h-36 border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center">
//         <div className="text-2xl font-bold mb-2">{cardValueToString(card.value)}</div>
//         <div className="text-xl">{cardSuitToSymbol(card.suit)}</div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <Card className="w-96">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-center">Hi-Lo Game</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           {gameOver ? (
//             <div className="text-center text-xl">
//               Game Over! Your final score: {score}
//             </div>
//           ) : (
//             <>
//               <div className="flex justify-center">
//                 {renderCard(currentCard)}
//               </div>
//               <div className="flex justify-between">
//                 <Button onClick={() => handleGuess('lower')} disabled={!currentCard}>Lower</Button>
//                 <Button onClick={() => handleGuess('higher')} disabled={!currentCard}>Higher</Button>
//               </div>
//               <div className="text-center text-xl">
//                 Score: {score}
//               </div>
//             </>
//           )}
//           <Button onClick={initializeGame} className="w-full" variant="outline">
//             <Shuffle className="mr-2 h-4 w-4" /> New Game
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// export default HiLoGame

// import HiLoGame from './hilo-game'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       <HiLoGame />
//     </main>
//   )
// }