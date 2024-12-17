"use client";
import { useState } from 'react';

export default function SkillsSection() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide Skills' : 'Show Skills'}
      </button>
      {visible && (
        <ul>
          <li>MS Office</li>
          <li>TypeScript</li>
          <li>Technician</li>
          <li>Supervisor</li>
        </ul>
      )}
    </div>
  );
}
