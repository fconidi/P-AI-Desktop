
# P-AI Desktop

Unofficial desktop client for Perplexity AI on Linux. Built with Electron to provide native desktop integration for Perplexity's AI-powered search interface.

**Disclaimer**: This is a community-developed project and is not affiliated with, endorsed by, or connected to Perplexity AI.

## Features

- Native Linux desktop application
- Global keyboard shortcut (Ctrl+Shift+P) for quick window access
- External links automatically open in system browser
- Available as .deb and AppImage packages
- Full integration with desktop environment

## Installation

### Debian/Ubuntu
```

sudo dpkg -i p-ai-desktop_1.0.0_amd64.deb

```

### AppImage (Universal)
```

chmod +x P-AI-Desktop-1.0.0.AppImage
./P-AI-Desktop-1.0.0.AppImage

```

## Building from Source

### Prerequisites
- Node.js 18+
- npm

### Build Instructions
```

git clone https://github.com/yourusername/p-ai-desktop
cd p-ai-desktop
npm install
npm run build

```

Packages will be generated in the `dist/` directory.

## Development

```

npm start

```

## Technical Stack

- Electron 28+
- electron-builder for packaging
- Native Linux desktop integration

## Roadmap

- System tray integration
- Custom keyboard shortcuts configuration
- Flatpak and Snap packaging
- Multi-account support

## License

MIT License - See LICENSE file for details.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## Legal Notice

All trademarks, logos, and brand names are the property of their respective owners. This project uses a custom icon and branding to avoid confusion with official Perplexity AI products.
```

Questo README è conciso, professionale e copre tutti gli aspetti essenziali: installazione, build, features, disclaimer legale e roadmap futura. Perfetto per una repository GitHub.

