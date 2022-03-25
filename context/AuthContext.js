// import { createContext, useState } from 'react';
// import { useRouter } from 'next/router';
// import { NEXT_URL } from '@/config/index';

// const AuthContext = createContext();

// export const authProvider = ({ children }) => {
//   const [email, setEmail] = useState(null);
//   const [error, setError] = useState(null);

//   const router = useRouter();

//   // Send email
//   const send = async ({ email, name, message }) => {
//     const res = await fetch(`${NEXT_URL}/api/email`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         message,
//         name,
//       }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       setEmail(data.email);
//     } else {
//       setError(data.message);
//       setError(null);
//     }
//   };

//   return <AuthContext.Provider value={{ send }}>{children}</AuthContext.Provider>;
// };
