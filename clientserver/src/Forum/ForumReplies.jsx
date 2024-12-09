import React,{useState} from 'react'

const ForumReplies = () => {
  const [reply,setReply] = useState("")

  const handleSubmitReply = (e) => {
    e.preventDefault()
    console.log({reply});
    setReply("")
  }
    
  return (
    <main>
      <form onSubmit={handleSubmitReply}>
        <label htmlFor="reply">Reply to the Thread</label>
        <textarea 
        rows={5}
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        type="text"
        name="reply"
         />
         <button>SEND</button>
      </form>
    </main>
  )
}

export default ForumReplies