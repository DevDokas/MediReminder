import Link from 'next/link';
import React from 'react';

export default function Home(): any {
  return (
    <main>
      <form action="#">
        <input type="text" />
        <input type="password" />
        <Link href="/home">Entrar</Link>
      </form>
      <span>
        <Link href="/passwordRecovery">Esqueci a senha</Link>
        <Link href="/register">Registrar-se</Link>
      </span>
    </main>
  );
}
