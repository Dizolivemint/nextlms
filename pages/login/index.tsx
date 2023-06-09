import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Login() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const router = useRouter();

  if (session) {
    router.push('/practice');
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setStatus('');
    event.preventDefault();
    setEmail(email.trim());
    const { data, error } = await supabase.auth.signInWithOtp({
      email
    })
    if (data) {
      setLoading(false);
      setStatus('Check your email for a magic link to sign in.');
    } else if (error) {
      setStatus(error.message);
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Login</h1>
        {status && <p>{status}</p>}
        {loading && <p>Loading...</p>} 
        {!loading && !status && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <button type="submit">Send Magic Link</button>
        </form>
        )}
      </main>
    </>
  );
}
