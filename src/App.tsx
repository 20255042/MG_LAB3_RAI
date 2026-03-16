import { useState, useRef, FormEvent, ChangeEvent } from "react";
import "./App.css";
interface FeedbackData {
studentName: string;
studentId: string;
bookTitle: string;
author: string;
reason: string;
}
function App() {
// Controlled Form State
const [studentName, setStudentName] = useState<string>("");
const [studentId, setStudentId] = useState<string>("");
const [bookTitle, setBookTitle] = useState<string>("");
const [author, setAuthor] = useState<string>("");
const [reason, setReason] = useState<string>("");
const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);
// Uncontrolled Form Refs
const studentNameRef = useRef<HTMLInputElement>(null);
const studentIdRef = useRef<HTMLInputElement>(null);
const bookTitleRef = useRef<HTMLInputElement>(null);
const authorRef = useRef<HTMLInputElement>(null);
const reasonRef = useRef<HTMLTextAreaElement>(null);
// Controlled Submit
const handleControlledSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
const data: FeedbackData = {
  studentName,
  studentId,
  bookTitle,
  author,
  reason
};
setSubmittedData(data);
setStudentName("");
setStudentId("");
setBookTitle("");
setAuthor("");
setReason("");
};
// Uncontrolled Submit
const handleUncontrolledSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
if (studentNameRef.current && studentIdRef.current && bookTitleRef.current && authorRef.current && reasonRef.current) {
const data: FeedbackData = {
studentName: studentNameRef.current.value,
studentId: studentIdRef.current.value,
bookTitle: bookTitleRef.current.value,
author: authorRef.current.value,
reason: reasonRef.current.value
};
console.log("Uncontrolled Form Data:", data);
alert("Check the console for submitted data.");
}
};
return (
<div style={{ padding: "40px", fontFamily: "Arial" }}>
<h1>Book Request Form</h1>
{/* Controlled Form */}
<h2>Controlled Form</h2>
<form onSubmit={handleControlledSubmit}>
<div>
<label>Student Name:</label><br/>
<input
type="text"
value={studentName}
onChange={(e: ChangeEvent<HTMLInputElement>) =>
setStudentName(e.target.value)

}
/>
</div>
<br/>
<div>
<label>Student ID</label><br/>
<input
type="text"
value={studentId}
onChange={(e: ChangeEvent<HTMLInputElement>) =>
setStudentId(e.target.value)
}
/>
</div>
<br/>
<div>
<label>Book Title</label><br/>
<input
type="text"
value={bookTitle}
onChange={(e: ChangeEvent<HTMLInputElement>) =>
setBookTitle(e.target.value)
}
/>
</div>
<br/>
<div>
<label>Author</label><br/>
<input
type="text"
value={author}
onChange={(e: ChangeEvent<HTMLInputElement>) =>
setAuthor(e.target.value)
}
/>
</div>
<br/>

<div>
<label>Reason for Request:</label><br/>
<textarea
value={reason}
onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
setReason(e.target.value)
}
/>
</div>
<br/>
<button type="submit">
Submit
</button>
</form>
{/* Display Controlled Data */}
{submittedData && (
<div style={{ marginTop: "20px" }}>
<h3>Submitted Feedback</h3>

<p><strong>Student Name:</strong> {submittedData.studentName}</p>
<p><strong>Student ID:</strong> {submittedData.studentId}</p>
<p><strong>Book Title:</strong> {submittedData.bookTitle}</p>
<p><strong>Author:</strong> {submittedData.author}</p>
<p><strong>Reason for Request:</strong> {submittedData.reason}</p>
</div>
)}
<hr style={{ margin: "40px 0" }}/>
{/* Uncontrolled Form */}
<h2>Uncontrolled Form</h2>
<form onSubmit={handleUncontrolledSubmit}>
<div>
<label>Student Name:</label><br/>
<input type="text" ref={studentNameRef}/>
</div>
<br/>
<div>
<label>Student ID:</label><br/>
<input type="text" ref={studentIdRef}/>
</div>
<br/>
<div>
<label>Book Title:</label><br/>
<input type="text" ref={bookTitleRef}/>
</div>
<br/>
<div>
<label>Author:</label><br/>
<input type="text" ref={authorRef}/>
</div>
<br/>
<div>
<label>Reason for Request:</label><br/>
<textarea ref={reasonRef}/>
</div>
<br/>
<button type="submit">
Submit
</button>
</form>
</div>
);
}
export default App;


