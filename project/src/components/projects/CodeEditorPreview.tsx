import { Check, Sparkles, Wand2, FileCode, ShieldCheck } from 'lucide-react';

const codeLines: { tokens: { t: string; c: string }[] }[] = [
  { tokens: [{ t: 'import ', c: 'text-ink-400' }, { t: '{ openai ', c: 'text-ink-100' }, { t: '}', c: 'text-ink-100' }, { t: ' from ', c: 'text-ink-400' }, { t: "'openai'", c: 'text-emerald-400' }] },
  { tokens: [{ t: 'import ', c: 'text-ink-400' }, { t: '{ Router ', c: 'text-ink-100' }, { t: '}', c: 'text-ink-100' }, { t: ' from ', c: 'text-ink-400' }, { t: "'express'", c: 'text-emerald-400' }] },
  { tokens: [{ t: '', c: '' }] },
  { tokens: [{ t: 'const ', c: 'text-accent-300' }, { t: 'client ', c: 'text-accent-400' }, { t: '= ', c: 'text-ink-400' }, { t: 'new ', c: 'text-accent-300' }, { t: 'OpenAI', c: 'text-yellow-400' }, { t: '({', c: 'text-ink-400' }] },
  { tokens: [{ t: '  apiKey: ', c: 'text-ink-300' }, { t: 'process.env.', c: 'text-ink-400' }, { t: 'HF_KEY', c: 'text-accent-400' }, { t: ',', c: 'text-ink-400' }] },
  { tokens: [{ t: '})', c: 'text-ink-400' }] },
  { tokens: [{ t: '', c: '' }] },
  { tokens: [{ t: 'async ', c: 'text-accent-300' }, { t: 'function ', c: 'text-accent-300' }, { t: 'explainCode', c: 'text-accent-400' }, { t: '(', c: 'text-ink-400' }, { t: 'code', c: 'text-ink-100' }, { t: ': ', c: 'text-ink-400' }, { t: 'string', c: 'text-yellow-400' }, { t: ') {', c: 'text-ink-400' }] },
  { tokens: [{ t: '  const ', c: 'text-accent-300' }, { t: 'res ', c: 'text-accent-400' }, { t: '= ', c: 'text-ink-400' }, { t: 'await ', c: 'text-accent-300' }, { t: 'client.', c: 'text-ink-100' }, { t: 'chat', c: 'text-ink-100' }, { t: '.', c: 'text-ink-400' }, { t: 'completions', c: 'text-accent-300' }, { t: '.', c: 'text-ink-400' }, { t: 'create', c: 'text-accent-300' }, { t: '({', c: 'text-ink-400' }] },
  { tokens: [{ t: '    model: ', c: 'text-ink-300' }, { t: "'codegenie-7b'", c: 'text-emerald-400' }, { t: ',', c: 'text-ink-400' }] },
  { tokens: [{ t: '    messages: ', c: 'text-ink-300' }, { t: '[', c: 'text-ink-400' }] },
  { tokens: [{ t: '      { role: ', c: 'text-ink-300' }, { t: "'system'", c: 'text-emerald-400' }, { t: ', content: ', c: 'text-ink-400' }, { t: 'PROMPT', c: 'text-accent-400' }, { t: ' },', c: 'text-ink-400' }] },
  { tokens: [{ t: '      { role: ', c: 'text-ink-300' }, { t: "'user'", c: 'text-emerald-400' }, { t: ', content: ', c: 'text-ink-400' }, { t: 'code', c: 'text-accent-400' }, { t: ' },', c: 'text-ink-400' }] },
  { tokens: [{ t: '    ]', c: 'text-ink-400' }] },
  { tokens: [{ t: '  })', c: 'text-ink-400' }] },
  { tokens: [{ t: '  return ', c: 'text-accent-300' }, { t: 'res.choices', c: 'text-ink-100' }, { t: '[', c: 'text-ink-400' }, { t: '0', c: 'text-amber-400' }, { t: '].message.content', c: 'text-ink-100' }] },
  { tokens: [{ t: '}', c: 'text-ink-400' }] },
  { tokens: [{ t: '', c: '' }] },
  { tokens: [{ t: 'export ', c: 'text-accent-300' }, { t: 'default ', c: 'text-accent-300' }, { t: 'explainCode', c: 'text-accent-400' }] },
];

const generatedLines: { tokens: { t: string; c: string }[] }[] = [
  { tokens: [{ t: '// CodeGenie AI Explanation', c: 'text-ink-500' }] },
  { tokens: [{ t: '', c: '' }] },
  { tokens: [{ t: 'This function connects to the', c: 'text-ink-300' }] },
  { tokens: [{ t: 'Hugging Face inference API to', c: 'text-ink-300' }] },
  { tokens: [{ t: 'generate natural-language', c: 'text-ink-300' }] },
  { tokens: [{ t: 'explanations of code snippets.', c: 'text-ink-300' }] },
  { tokens: [{ t: '', c: '' }] },
  { tokens: [{ t: 'Key points:', c: 'text-accent-300' }] },
  { tokens: [{ t: '  - Async streaming response', c: 'text-ink-300' }] },
  { tokens: [{ t: '  - JWT-protected endpoint', c: 'text-ink-300' }] },
  { tokens: [{ t: '  - AST-validated input', c: 'text-ink-300' }] },
  { tokens: [{ t: '  - Multi-model fallback', c: 'text-ink-300' }] },
  { tokens: [{ t: '', c: '' }] },
  { tokens: [{ t: 'Suggested refactor:', c: 'text-accent-300' }] },
  { tokens: [{ t: '  Add try/catch + rate limit', c: 'text-ink-300' }] },
];

const suggestedFixes = [
  'JWT authentication middleware',
  'AST-based code validation',
  'Multi-model integration layer',
];

const suggestions = [
  { Icon: FileCode, text: 'AI code generation' },
  { Icon: Wand2, text: 'Refactor suggestion' },
  { Icon: ShieldCheck, text: 'RBAC policy check' },
];

export default function CodeEditorPreview() {
  return (
    <div className="relative w-full bg-ink-950 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-ink-900/80 border-b border-white/5">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 text-center min-w-0">
          <span className="text-[10px] text-ink-500 font-mono tracking-wide truncate">
            codegenie — explainCode.ts
          </span>
        </div>
      </div>

      {/* Split panes — side-by-side on sm+, stacked on mobile */}
      <div className="flex flex-col sm:flex-row">
        {/* Left: code editor */}
        <div className="sm:w-1/2 sm:border-r border-b sm:border-b-0 border-white/5 bg-ink-950 flex max-h-[240px] sm:max-h-none sm:aspect-auto">
          {/* Line numbers */}
          <div className="py-3 px-2 text-right select-none border-r border-white/5 bg-ink-900/30 shrink-0">
            {codeLines.map((_, i) => (
              <div key={i} className="text-[10px] leading-[1.5] font-mono text-ink-700">
                {i + 1}
              </div>
            ))}
          </div>
          {/* Code */}
          <div className="py-3 px-3 overflow-hidden flex-1">
            {codeLines.map((line, i) => (
              <div key={i} className="text-[10px] leading-[1.5] font-mono whitespace-pre flex">
                {line.tokens.map((tok, j) => (
                  <span key={j} className={tok.c}>
                    {tok.t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right: AI panel */}
        <div className="sm:w-1/2 bg-gradient-to-br from-ink-900 to-ink-950 flex flex-col max-h-[240px] sm:max-h-none">
          {/* AI header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <div className="w-6 h-6 rounded-lg bg-accent-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-accent-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-semibold text-white">CodeGenie AI</div>
              <div className="text-[9px] text-ink-500 font-mono">codegenie-7b · streaming</div>
            </div>
            <div className="ml-auto flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] text-emerald-400 font-medium">Active</span>
            </div>
          </div>

          {/* Generated content */}
          <div className="px-4 py-3 flex-1 overflow-hidden">
            <div className="text-[10px] font-mono leading-[1.6]">
              {generatedLines.map((line, i) => (
                <div key={i} className="flex">
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tok.c}>
                      {tok.t}
                    </span>
                  ))}
                  {line.tokens.length === 1 && line.tokens[0].t === '' && (
                    <span>&nbsp;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Suggested fixes */}
          <div className="px-4 py-2.5 border-t border-white/5 space-y-1.5">
            {suggestedFixes.map((fix) => (
              <div key={fix} className="flex items-center gap-2 text-[10px] text-ink-300 font-mono">
                <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">{fix}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating suggestion chips — desktop only */}
      <div className="hidden sm:flex absolute bottom-3 left-3 flex-col gap-1.5 pointer-events-none">
        {suggestions.map((s) => (
          <div
            key={s.text}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <s.Icon className="w-3 h-3 text-accent-400" />
            <span className="text-[9px] font-medium text-ink-200">{s.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
