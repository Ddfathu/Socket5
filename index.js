const socks = require('socksv5');

// ===== CONFIGURATION =====
const PORT = process.env.PORT || 8080;
// =========================

const server = socks.createServer((info, accept, deny) => {
  // Langsung teruskan koneksi tanpa cek username/password
  accept();
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SOCKS5 Proxy Server (No Auth) berjalan di port ${PORT}`);
});

server.on('error', (err) => {
  console.error('Server Error:', err.message);
});
