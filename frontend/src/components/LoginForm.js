// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Frontend Validation
//         if (!email || !password) {
//             setError('Please enter both email and password');
//             return;
//         }

//         try {
//             const response = await axios.post('/api/users/login', { email, password });
//             const { token } = response.data;

//             // Save the token to localStorage
//             localStorage.setItem('authToken', token);

//             // Redirect to homepage
//             history.push('/');
//         } catch (err) {
//             setError(err.response?.data?.message || 'Invalid credentials');
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default LoginForm;
