'use client';
import { useRouter } from 'next/navigation';

/* ─── Product Data ──────────────────────────────────────────────────────── */

const products = [
  {
    id: 'sentinel',
    name: 'QNN Sentinel',
    tagline: 'NIST-Ready Post-Quantum Cryptography',
    category: 'Software · PQC',
    description:
      'A hardened cryptographic layer implementing NIST-standardised PQC algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium, SPHINCS+). Drop-in replacement for classical TLS/AES stacks — quantum-safe from day one.',
    features: [
      'ML-KEM / ML-DSA algorithm suite',
      'Hybrid classical-PQC transition mode',
      'FIPS-aligned compliance reporting',
      'Zero-downtime key migration tooling',
    ],
    color: '#6366f1',
    accentRgb: '99,102,241',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    badge: 'NIST PQC',
  },
  {
    id: 'quantumshield',
    name: 'QNN QuantumShield',
    tagline: 'Quantum Threat Simulation & Risk Analysis',
    category: 'Software · Threat Intel',
    description:
      'An autonomous red-team engine that simulates Shor\'s and Grover\'s algorithm attacks against your existing cryptographic infrastructure, then scores and visualises your exposure across a live risk dashboard.',
    features: [
      'Automated crypto-inventory scanner',
      'Shor\'s / Grover\'s attack simulation',
      'Risk-score dashboard & heat maps',
      'Remediation priority roadmap export',
    ],
    color: '#8b5cf6',
    accentRgb: '139,92,246',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    badge: 'Threat Sim',
  },
  {
    id: 'auroranet',
    name: 'QNN AuroraNet',
    tagline: 'Quantum-Secure Communication & PQC Networking',
    category: 'Platform · Network Security',
    description:
      'An end-to-end PQC-secured networking fabric for government, defence, and enterprise. AuroraNet wraps every packet in post-quantum key exchange, making your WAN impervious to harvest-now-decrypt-later attacks.',
    features: [
      'PQC VPN & TLS 1.3 integration',
      'QRNG-seeded session keys',
      'Multi-hop ephemeral tunnel chaining',
      'SDN-compatible policy engine',
    ],
    color: '#06b6d4',
    accentRgb: '6,182,212',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
    badge: 'PQC Network',
  },
  {
    id: 'trueq',
    name: 'TrueQ',
    tagline: 'Quantum-Grade True Random Number Generator',
    category: 'Hardware Module',
    description:
      'A compact QRNG (Quantum Random Number Generator) module that harvests genuine entropy from quantum-optical phenomena. Eliminates the predictability of pseudo-random seeds — essential for PQC key generation.',
    features: [
      'Photon-shot-noise entropy source',
      'NIST SP 800-90B compliant output',
      'USB-C & PCIe form factors',
      'Real-time entropy-health monitoring',
    ],
    color: '#10b981',
    accentRgb: '16,185,129',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    badge: 'Hardware',
    hardware: true,
  },
  {
    id: 'lightlink',
    name: 'LightLink',
    tagline: 'Secure Optical Communication Module',
    category: 'Hardware Module',
    description:
      'A photonic transceiver module that combines quantum-secured key material with high-throughput optical links. Purpose-built for data-centre interconnects, military communications, and critical-infrastructure backbones.',
    features: [
      '100 Gbps optical throughput',
      'QKD-assisted key management',
      'Tamper-evident physical layer',
      'Temperature-hardened (−40°C to 85°C)',
    ],
    color: '#f59e0b',
    accentRgb: '245,158,11',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    badge: 'Hardware',
    hardware: true,
  },
];

/* ─── Feature Bullet ────────────────────────────────────────────────────── */
function FeatureBullet({ text, color }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', listStyle: 'none', color: '#94a3b8', fontSize: '12.5px', lineHeight: '1.6' }}>
      <span style={{
        marginTop: '5px',
        width: '6px', height: '6px', borderRadius: '50%',
        background: color,
        flexShrink: 0,
        boxShadow: `0 0 6px ${color}`,
      }} />
      {text}
    </li>
  );
}

/* ─── Product Card ──────────────────────────────────────────────────────── */
function ProductCard({ product, featured = false }) {
  const { name, tagline, category, description, features, color, accentRgb, icon, badge, hardware } = product;
  const router = useRouter();


  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '22px',
        border: `1px solid rgba(${accentRgb},0.22)`,
        background: 'rgba(10,8,30,0.65)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        padding: featured ? '36px 32px' : '28px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        overflow: 'hidden',
        gridColumn: featured ? 'span 2' : 'span 1',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-7px)';
        e.currentTarget.style.borderColor = `rgba(${accentRgb},0.55)`;
        e.currentTarget.style.boxShadow = `0 24px 64px rgba(${accentRgb},0.18)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = `rgba(${accentRgb},0.22)`;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Background gradient orb */}
      <div style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '200px', height: '200px',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(${accentRgb},0.14) 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />
      {/* Hardware texture lines for hardware products */}
      {hardware && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
          background: `linear-gradient(90deg, transparent, rgba(${accentRgb},0.6), transparent)`,
          borderRadius: '0 0 22px 22px',
        }} />
      )}

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        {/* Icon */}
        <div style={{
          width: featured ? '60px' : '52px',
          height: featured ? '60px' : '52px',
          borderRadius: '16px',
          background: `rgba(${accentRgb},0.12)`,
          border: `1.5px solid rgba(${accentRgb},0.3)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: color,
          flexShrink: 0,
        }}>
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
            <h3 style={{ color: '#f1f5f9', fontSize: featured ? '20px' : '17px', fontWeight: 800, margin: 0 }}>
              {name}
            </h3>
            {/* Badge */}
            <span style={{
              padding: '2px 10px',
              borderRadius: '999px',
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em',
              background: `rgba(${accentRgb},0.15)`,
              border: `1px solid rgba(${accentRgb},0.35)`,
              color: color,
            }}>
              {badge}
            </span>
          </div>
          <div style={{ color: '#64748b', fontSize: '11px', marginBottom: '4px' }}>{category}</div>
          <div style={{ color: '#94a3b8', fontSize: '13px', fontWeight: 500, lineHeight: '1.5' }}>{tagline}</div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: `linear-gradient(90deg, rgba(${accentRgb},0.25), transparent)` }} />

      {/* Description */}
      <p style={{ color: '#64748b', fontSize: '13px', lineHeight: '1.75', margin: 0 }}>
        {description}
      </p>

      {/* Features */}
      <ul style={{ margin: 0, padding: 0, display: 'flex', flexDirection: featured ? 'row' : 'column', flexWrap: 'wrap', gap: featured ? '10px 24px' : '8px' }}>
        {features.map((f) => <FeatureBullet key={f} text={f} color={color} />)}
      </ul>

      {/* CTA */}
      <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
        <button
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '9px 18px',
            borderRadius: '10px',
            border: `1px solid rgba(${accentRgb},0.35)`,
            background: `rgba(${accentRgb},0.1)`,
            color: color,
            fontSize: '12px', fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s, border-color 0.2s, transform 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `rgba(${accentRgb},0.22)`;
            e.currentTarget.style.borderColor = `rgba(${accentRgb},0.6)`;
            e.currentTarget.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `rgba(${accentRgb},0.1)`;
            e.currentTarget.style.borderColor = `rgba(${accentRgb},0.35)`;
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onClick={() => router.push('/demo')}
        >
          Request Demo
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */
export default function ProductsSection() {
  return (
    <section
      id="products"
      style={{
        position: 'relative',
        padding: '100px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        zIndex: 1,
      }}
    >
      {/* ── Section header ── */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 18px', borderRadius: '999px',
          background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
          color: '#818cf8', fontSize: '12px', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8', display: 'inline-block' }} />
          What We Build
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 800, color: '#f1f5f9',
          margin: '0 0 16px', lineHeight: '1.2',
        }}>
          Our Product Suite
        </h2>
        <p style={{
          color: '#64748b', maxWidth: '580px', margin: '0 auto',
          fontSize: '15px', lineHeight: '1.7',
        }}>
          Five quantum-native products spanning software stacks, network platforms, and purpose-built hardware — every layer of your security estate, future-proofed.
        </p>
      </div>

      {/* ── Stats strip ── */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '1px',
        borderRadius: '16px', overflow: 'hidden',
        border: '1px solid rgba(99,102,241,0.18)',
        marginBottom: '56px',
        background: 'rgba(99,102,241,0.08)',
      }}>
        {[
          { value: '5+', label: 'Quantum Products' },
          { value: 'NIST', label: 'Standardised PQC' },
          { value: '100G', label: 'Optical Throughput' },
          { value: '∞', label: 'True Entropy' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: '1 1 120px', padding: '20px 24px', textAlign: 'center',
            background: 'rgba(10,8,30,0.55)', backdropFilter: 'blur(12px)',
          }}>
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#e0e7ff', marginBottom: '4px' }}>{s.value}</div>
            <div style={{ fontSize: '11px', color: '#64748b', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Product grid ── */}
      {/* Row 1: QNN Sentinel spans full width */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginBottom: '20px',
      }}>
        <ProductCard product={products[0]} featured />
      </div>

      {/* Row 2: QuantumShield + AuroraNet side by side */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '20px',
      }}>
        <ProductCard product={products[1]} />
        <ProductCard product={products[2]} />
      </div>

      {/* Row 3: TrueQ + LightLink hardware modules */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          marginBottom: '20px',
        }}>
          <span style={{ fontSize: '16px' }}>🔩</span>
          <span style={{ color: '#e0e7ff', fontWeight: 700, fontSize: '16px' }}>Hardware Modules</span>
          <div style={{
            flex: 1, height: '1px',
            background: 'linear-gradient(90deg, rgba(99,102,241,0.4) 0%, transparent 100%)',
            marginLeft: '8px',
          }} />
          <span style={{
            padding: '3px 12px', borderRadius: '999px',
            background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)',
            color: '#f59e0b', fontSize: '11px', fontWeight: 600,
          }}>
            Physical Layer Security
          </span>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          <ProductCard product={products[3]} />
          <ProductCard product={products[4]} />
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div style={{
        textAlign: 'center',
        padding: '48px 32px',
        borderRadius: '22px',
        border: '1px solid rgba(99,102,241,0.2)',
        background: 'rgba(10,8,30,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '400px', height: '200px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ color: '#818cf8', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
          Ready to Future-Proof Your Security?
        </div>
        <h3 style={{ color: '#f1f5f9', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: 800, margin: '0 0 12px' }}>
          Talk to Our Quantum Security Experts
        </h3>
        <p style={{ color: '#64748b', fontSize: '14px', maxWidth: '440px', margin: '0 auto 28px', lineHeight: '1.7' }}>
          Get a tailored demo, threat assessment, or integration walkthrough — no commitment required.
        </p>
        <a
          href="mailto:sidharth@qnnx.in?subject=QNNX Product Enquiry"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '14px 32px', borderRadius: '14px',
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            color: '#fff', fontSize: '14px', fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(1.04)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Contact Us · sidharth@qnnx.in
        </a>
      </div>
    </section>
  );
}
