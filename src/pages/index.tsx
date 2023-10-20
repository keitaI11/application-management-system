import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <div>
      <h1>Employee Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/late-leave-travel">遅刻・早退・外出出張</Link>
          </li>
          <li>
            <Link href="/holiday-absence">休暇・欠勤</Link>
          </li>
          <li>
            <Link href="/expense-claim">経費申請</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
