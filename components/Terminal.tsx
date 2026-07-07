"use client";

import { useEffect, useState } from "react";

const lines = [
  "> importing Taha...",
  "",
  "import { Engineer } from 'software'",
  "import { Researcher } from 'cybersecurity'",
  "import { Builder } from 'AI'",
  "",
  "const Taha = {",
  "  stack: ['Python', 'React', 'Next.js'],",
  "  currently: 'Building something real',",
  "  status: 'Open to work',",
  "}",
  "",
  "> ready.",
];

export default function Terminal() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    // If it's an empty line, just add it instantly
    if (line === "") {
      setDisplayed((prev) => [...prev, ""]);
      setCurrentLine((prev) => prev + 1);
      setCurrentChar(0);
      return;
    }

    // If we've finished typing this line, move to next
    if (currentChar >= line.length) {
      setCurrentLine((prev) => prev + 1);
      setCurrentChar(0);
      return;
    }

    // Type one character at a time
    const timeout = setTimeout(() => {
      setDisplayed((prev) => {
        const updated = [...prev];
        updated[currentLine] = (updated[currentLine] || "") + line[currentChar];
        return updated;
      });
      setCurrentChar((prev) => prev + 1);
    }, 35);

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar]);

  return (
    <div className="w-full max-w-sm bg-zinc-950 rounded-lg overflow-hidden">
      {/* Terminal top bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="font-mono text-xs text-zinc-500 ml-2">taha.js</span>
      </div>

      {/* Terminal content */}
      <div className="p-6 font-mono text-sm leading-7 min-h-64">
        {displayed.map((line, i) => (
          <div key={i} className={`
            ${line.startsWith(">") ? "text-green-400" : ""}
            ${line.startsWith("import") ? "text-blue-400" : ""}
            ${line.startsWith("const") ? "text-purple-400" : ""}
            ${line.startsWith("  ") ? "text-zinc-300" : ""}
            ${line === "" ? "h-4" : ""}
            ${!line.startsWith(">") && !line.startsWith("import") && !line.startsWith("const") && !line.startsWith("  ") && line !== "" ? "text-zinc-400" : ""}
          `}>
            {line}
            {i === currentLine && currentLine < lines.length && (
              <span className="animate-pulse">▊</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}