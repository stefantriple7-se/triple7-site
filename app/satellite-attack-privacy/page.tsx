// app/satellite-attack-privacy/page.tsx
export default function SatelliteAttackPrivacyPage() {
  return (
    <main style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: '2rem 1.5rem',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      lineHeight: 1.6,
      color: '#f3f3f3',
      background: 'radial-gradient(circle at top, #1f2937 0, #020617 40%, #000 100%)'
    }}>
      <h1 style={{ color: '#f97316' }}>Privacy Policy – Satellite Attack</h1>
      <p><small>Last updated: 2026-01-12</small></p>

      <p>
        <strong>Satellite Attack</strong> is a casual mobile arcade game developed by
        {' '}<strong>Triple7 Studios</strong>. This privacy policy explains what data is
        (and is not) collected when you use the game.
      </p>

      <h2 style={{ color: '#f97316' }}>1. Data we collect</h2>
      <p><em>Satellite Attack</em> itself does <strong>not</strong> collect, store or share any personally
        identifiable information (PII) such as your name, email address, phone number or contact list.
      </p>

      <p>The game may process some non-personal information locally on your device, for example:</p>
      <ul>
        <li>Current score and high score</li>
        <li>Game settings (sound on/off, control preferences)</li>
      </ul>
      <p>This information stays on your device unless explicitly stated otherwise in a future update.</p>

      <h2 style={{ color: '#f97316' }}>2. Third-party services</h2>
      <p>
        The game is distributed via <strong>Google Play Store</strong>, which may collect usage and
        diagnostic data according to Google’s own privacy policies.
      </p>

      <p>In future versions we may use third-party services such as:</p>
      <ul>
        <li><strong>Firebase</strong> (Analytics / Remote Config / Online Highscores)</li>
        <li><strong>Google Play Games Services</strong> (Leaderboards / Achievements)</li>
      </ul>

      <p>
        If and when these services are enabled, they may collect anonymized usage data (such as device
        type, country, session length or score) to provide their functionality. Any such processing will
        be governed by the respective third-party privacy policies.
      </p>

      <p>We will update this privacy policy if we start using additional third-party services or collecting more data.</p>

      <h2 style={{ color: '#f97316' }}>3. Children’s privacy</h2>
      <p>
        <em>Satellite Attack</em> is not specifically targeted at children, but it is suitable for a general
        audience. We do not knowingly collect personal data from children.
      </p>
      <p>
        If you are a parent or guardian and believe that we have accidentally collected personal information,
        please contact us at <strong>contact@triple7.se</strong> and we will delete the information.
      </p>

      <h2 style={{ color: '#f97316' }}>4. Data sharing</h2>
      <p>We do <strong>not</strong> sell, rent or trade your personal data to third parties.</p>
      <p>
        If online leaderboards or cloud saves are added in the future, anonymized game data (such as
        nickname and score) may be stored on our servers or on services like Firebase in order to provide
        that functionality.
      </p>

      <h2 style={{ color: '#f97316' }}>5. Your choices</h2>
      <p>You can uninstall the game at any time to stop all data processing by the app on your device.</p>
      <p>
        If we introduce analytics or online services that provide additional opt-out options, we will describe
        them in this privacy policy or within the game settings.
      </p>

      <h2 style={{ color: '#f97316' }}>6. Changes to this policy</h2>
      <p>
        We may update this privacy policy from time to time. When we do, we will change the “Last updated”
        date at the top of this page. Significant changes may also be mentioned in the game’s update notes.
      </p>

      <h2 style={{ color: '#f97316' }}>7. Contact</h2>
      <p>If you have any questions about this privacy policy or the game, please contact us at:</p>
      <p>
        <strong>Triple7 Studios</strong><br />
        Email: <strong>contact@triple7.se</strong>
      </p>
    </main>
  );
}