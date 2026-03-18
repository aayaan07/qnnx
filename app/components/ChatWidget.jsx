'use client';

import { useState, useRef, useEffect } from 'react';

const WELCOME_MESSAGE = {
  role: 'ai',
  text: 'Hello! I\'m the **QNNX Quantum Interface**. Ask me anything about quantum security, our solutions, or how we can protect your organization. 🔐',
};

function parseMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>');
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const typingIntervalRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, displayedText]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Cleanup typing interval on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  const typewriterEffect = (text, onComplete) => {
    setIsTyping(true);
    setDisplayedText('');
    let i = 0;
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    typingIntervalRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingIntervalRef.current);
        setIsTyping(false);
        setDisplayedText('');
        onComplete(text);
      }
    }, 18);
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading || isTyping) return;

    const userMessage = { role: 'user', text: trimmed };
    const history = messages.filter((m) => m !== WELCOME_MESSAGE);

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = await res.json();
      const aiText = data.text || 'Quantum interference detected. Please try again.';

      setIsLoading(false);

      // Add placeholder, then typewrite into it
      setMessages((prev) => [...prev, { role: 'ai', text: '', isAnimating: true }]);
      typewriterEffect(aiText, (finalText) => {
        setMessages((prev) =>
          prev.map((m, i) =>
            i === prev.length - 1 && m.isAnimating
              ? { role: 'ai', text: finalText }
              : m
          )
        );
      });
    } catch {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: 'Network error. Please check your connection and try again.' },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    setIsTyping(false);
    setDisplayedText('');
    setMessages([WELCOME_MESSAGE]);
    setIsLoading(false);
  };

  return (
    <>
      <style>{`
        @keyframes qnnx-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.5); }
          50% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
        }
        @keyframes qnnx-fadeIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes qnnx-slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes qnnx-dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }
        .qnnx-chat-window {
          animation: qnnx-fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .qnnx-msg {
          animation: qnnx-slideIn 0.2s ease forwards;
        }
        .qnnx-fab {
          animation: qnnx-pulse 2.5s ease-in-out infinite;
        }
        .qnnx-dots::after {
          content: '';
          animation: qnnx-dots 1.2s steps(1, end) infinite;
        }
        .qnnx-scrollbar::-webkit-scrollbar { width: 4px; }
        .qnnx-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .qnnx-scrollbar::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.35); border-radius: 2px; }
        .qnnx-input:focus { outline: none; }
      `}</style>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close QNNX AI Chat' : 'Open QNNX AI Chat'}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '1.5px solid rgba(99,102,241,0.5)',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4f46e5 100%)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          backdropFilter: 'blur(12px)',
        }}
        className="qnnx-fab"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(99,102,241,0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        {isOpen ? (
          /* Close X */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          /* Quantum / Chat icon */
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="1" fill="white" stroke="none" />
            <circle cx="12" cy="10" r="1" fill="white" stroke="none" />
            <circle cx="15" cy="10" r="1" fill="white" stroke="none" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="qnnx-chat-window"
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '28px',
            zIndex: 9998,
            width: '360px',
            maxWidth: 'calc(100vw - 40px)',
            height: '520px',
            maxHeight: 'calc(100vh - 140px)',
            borderRadius: '20px',
            border: '1px solid rgba(99,102,241,0.25)',
            background: 'rgba(10, 8, 30, 0.88)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 18px',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(79,70,229,0.1) 100%)',
              borderBottom: '1px solid rgba(99,102,241,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                border: '1.5px solid rgba(99,102,241,0.4)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: '#e0e7ff', fontWeight: 700, fontSize: '14px', letterSpacing: '0.02em' }}>
                QNNX Quantum Interface
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34d399', display: 'inline-block', boxShadow: '0 0 6px #34d399' }} />
                <span style={{ color: '#6ee7b7', fontSize: '11px', fontWeight: 500 }}>Online · AI-Powered</span>
              </div>
            </div>
            {/* Clear button */}
            <button
              onClick={clearChat}
              title="Clear conversation"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                cursor: 'pointer',
                padding: '5px 8px',
                color: '#94a3b8',
                fontSize: '11px',
                transition: 'all 0.15s',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#e0e7ff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#94a3b8'; }}
            >
              Clear
            </button>
          </div>

          {/* Messages */}
          <div
            className="qnnx-scrollbar"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {messages.map((msg, idx) => {
              const isAI = msg.role === 'ai';
              const isLast = idx === messages.length - 1;
              const textToShow = isAI && isLast && isTyping ? displayedText : msg.text;

              return (
                <div
                  key={idx}
                  className="qnnx-msg"
                  style={{
                    display: 'flex',
                    flexDirection: isAI ? 'row' : 'row-reverse',
                    alignItems: 'flex-end',
                    gap: '8px',
                  }}
                >
                  {isAI && (
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                      </svg>
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: '80%',
                      padding: '10px 14px',
                      borderRadius: isAI ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                      background: isAI
                        ? 'rgba(99,102,241,0.14)'
                        : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                      border: isAI ? '1px solid rgba(99,102,241,0.25)' : 'none',
                      color: isAI ? '#cbd5e1' : '#ffffff',
                      fontSize: '13px',
                      lineHeight: '1.6',
                      wordBreak: 'break-word',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: parseMarkdown(textToShow) + (isAI && isLast && isTyping ? '<span style="display:inline-block;width:2px;height:13px;background:#818cf8;margin-left:2px;vertical-align:middle;border-radius:1px;animation:qnnx-pulse 0.8s ease infinite"></span>' : ''),
                    }}
                  />
                </div>
              );
            })}

            {/* Loading dots */}
            {isLoading && (
              <div className="qnnx-msg" style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                  </svg>
                </div>
                <div style={{ padding: '12px 16px', borderRadius: '16px 16px 16px 4px', background: 'rgba(99,102,241,0.14)', border: '1px solid rgba(99,102,241,0.25)', display: 'flex', gap: '5px', alignItems: 'center' }}>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#818cf8',
                        display: 'inline-block',
                        animation: `qnnx-pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: '12px 14px',
              borderTop: '1px solid rgba(99,102,241,0.15)',
              background: 'rgba(0,0,0,0.2)',
              flexShrink: 0,
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-end',
            }}
          >
            <textarea
              ref={inputRef}
              className="qnnx-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about quantum security…"
              rows={1}
              disabled={isLoading || isTyping}
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(99,102,241,0.25)',
                borderRadius: '12px',
                color: '#e0e7ff',
                fontSize: '13px',
                padding: '10px 14px',
                resize: 'none',
                maxHeight: '90px',
                lineHeight: '1.5',
                fontFamily: 'inherit',
                transition: 'border-color 0.15s',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.6)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.25)'; }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 90) + 'px';
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading || isTyping}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                border: 'none',
                background: input.trim() && !isLoading && !isTyping
                  ? 'linear-gradient(135deg, #4f46e5, #7c3aed)'
                  : 'rgba(255,255,255,0.08)',
                cursor: input.trim() && !isLoading && !isTyping ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (input.trim() && !isLoading && !isTyping) {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.5)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>

          {/* Branding footer */}
          <div style={{ textAlign: 'center', padding: '6px 0 10px', color: 'rgba(148,163,184,0.5)', fontSize: '10px', letterSpacing: '0.05em' }}>
            Powered by <strong style={{ color: 'rgba(99,102,241,0.7)' }}>QNNX</strong> · Quantum-Grade AI
          </div>
        </div>
      )}
    </>
  );
}
