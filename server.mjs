import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));
const portIndex = process.argv.indexOf('--port');
const port = Number(process.env.PORT || (portIndex >= 0 ? process.argv[portIndex + 1] : 3000));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };

http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
    if (relative === 'privacidade' || relative === 'termos') {
      const content = await readFile(path.join(root, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
      return;
    }
    if (relative !== 'index.html' && !/^assets\/[a-zA-Z0-9._-]+$/.test(relative)) {
      res.writeHead(404).end('Não encontrado');
      return;
    }
    let content = await readFile(path.join(root, relative));
    if (relative === 'index.html') {
      content = content.toString().replace('</head>', '<meta name="facebook-domain-verification" content="x9i8hv8g45z7jw0tlosqo5wjwsnhmx">\n</head>');
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(relative)] || 'application/octet-stream' });
    res.end(content);
  } catch {
    res.writeHead(404).end('Não encontrado');
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`Site disponível em http://localhost:${port}`);
});
