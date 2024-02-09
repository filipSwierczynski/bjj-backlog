import { useState } from 'react';
import { auth } from '../../utils/firebase-config';
import { doc, setDoc } from "firebase/firestore"; 
import { Timestamp } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from "firebase/auth"; 

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        setError(error.message);
      }
  
  };

  return (
    <form onSubmit={register}>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
