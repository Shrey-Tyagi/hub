# Shrey's Hub

A powerful web-based text comparison and formatting tool built with React and Vite. Compare text documents side-by-side with visual diff highlighting, and format/validate JSON and XML data with syntax highlighting.

## 🚀 Features

### Text Comparison
- **Side-by-side diff viewer** with line-by-line comparison
- **Visual highlighting** of differences:
  - 🔴 Red for deleted text
  - 🟢 Green for inserted text
  - ⚪ Normal for unchanged text
- **File upload** support for both text inputs
- **Real-time statistics**: Character and word count display
- **Line numbers** for easy reference

### JSON/XML Formatter
- **JSON Formatter**:
  - Format/beautify JSON with proper indentation
  - Minify JSON to compact format
  - Validate JSON syntax
  - Syntax highlighting
  
- **XML Formatter**:
  - Format/beautify XML with proper indentation
  - Minify XML to compact format
  - Validate XML syntax
  - Syntax highlighting

### Privacy & Security
- **100% Client-side processing**: All operations happen in your browser
- **No data storage**: Your text is never sent to any server
- **No tracking**: Complete privacy protection
- **No cookies**: No tracking or data collection

## 🛠️ Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **diff-match-patch** - Powerful diff algorithm library
- **react-syntax-highlighter** - Code syntax highlighting
- **Prism.js** - Additional syntax highlighting support

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
Hub/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── TextInput.jsx       # Text input component with file upload
│   │   ├── DiffViewer.jsx      # Side-by-side diff visualization
│   │   ├── Formatter.jsx       # JSON/XML formatter component
│   │   ├── About.jsx           # About modal
│   │   └── Privacy.jsx         # Privacy policy modal
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Main app styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── public/                     # Static assets
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage

### Text Comparison
1. Navigate to the **Text Diff** tab
2. Enter or paste your original text in the left input area
3. Enter or paste your changed text in the right input area
4. Optionally upload text files using the "📁 Upload File" button
5. Click **"Find Difference"** to see the visual comparison
6. Differences will be highlighted with colors for easy identification

### JSON/XML Formatting
1. Navigate to the **Formatter** tab
2. Select either **JSON Formatter** or **XML Formatter**
3. Enter or paste your JSON/XML code
4. Use the buttons to:
   - **Format**: Beautify with proper indentation
   - **Minify**: Compress to a single line
   - **Validate**: Check for syntax errors
5. View the formatted output with syntax highlighting

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Shrey Tyagi**

- LinkedIn: [shrey-tyagi](https://www.linkedin.com/in/shrey-tyagi/)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/) and [Vite](https://vite.dev/)
- Diff algorithm powered by [diff-match-patch](https://github.com/google/diff-match-patch)
- Syntax highlighting by [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

---

© 2025 Hub. Built with React & Vite.
