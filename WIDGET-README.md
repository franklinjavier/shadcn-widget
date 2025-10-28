# Chat Widget - Embeddable React Component

A modern and responsive chat widget that can be easily embedded in any website.

## ✨ Features

- 🎨 **Modern Design**: Elegant interface with gradients and animations
- 📱 **Responsive**: Works perfectly on desktop and mobile
- ⚡ **Fast Loading**: CSS and JavaScript loaded in optimized way
- 🔒 **Secure**: CORS configured for maximum security
- 🔄 **Auto-configuration**: Automatically detects generated CSS files
- 🎯 **Easy Integration**: Just one line of code to embed

## 🚀 How to Use

### 1. Build the Project

```bash
npm run build
```

The build automatically generates:

- `dist/widget.js` - Widget JavaScript
- `dist/assets/index-[hash].css` - CSS with all styles
- `dist/embed.js` - Embed script (automatically updated)

### 2. Embed in Your Site

Add just one line before the closing `</body>` tag:

```html
<script src="https://your-domain.com/embed.js"></script>
```

### 3. Test Locally

```bash
npm run preview
```

Access:

- `http://localhost:4173/example.html` - Complete example page
- `http://localhost:4173/test-widget.html` - Simple test page

## 🔧 How It Works

### Custom Vite Plugin

The solution uses a **custom Vite plugin** (`src/plugins/widget-config.ts`) that:

1. **Automatically detects** the largest CSS file (with Tailwind styles)
2. **Updates the `embed.js`** during build with the correct CSS file name
3. **Eliminates the need** for separate configuration files
4. **Works automatically** on every build without additional scripts

### Optimized Loading

The `embed.js` now:

1. **Loads CSS** directly with the correct file name
2. **Injects CSS** into the page `<head>`
3. **Loads JavaScript** for the widget
4. **Zero external dependencies** or configuration files

## 📁 File Structure

```
dist/
├── widget.js              # Widget JavaScript
├── embed.js               # Embed script (automatically updated)
├── assets/
│   ├── index-[hash].css  # CSS with all styles
│   └── index-[hash].js   # Main JavaScript
├── example.html          # Example page
└── test-widget.html      # Test page

src/
├── plugins/
│   └── widget-config.ts  # Custom Vite plugin
└── components/
    └── ChatWidget.tsx    # Main component
```

## 🎨 Included Styles

The widget automatically includes:

- **Tailwind CSS**: Utility framework
- **Radix UI**: Accessible components
- **Animations**: Smooth transitions
- **Theme**: Customizable CSS variables
- **Responsiveness**: Optimized breakpoints

## 🔍 Debugging

To check if CSS is loading:

1. Open **Developer Tools**
2. Go to **Network** tab
3. Reload the page
4. Check if `index-[hash].css` was loaded
5. Inspect widget element to see applied styles

## 🛠️ Development

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

## 📝 Important Notes

- The widget is completely **isolated** and doesn't interfere with host site styles
- **CORS** is configured to allow cross-origin loading
- CSS is loaded **before** JavaScript to avoid FOUC (Flash of Unstyled Content)
- **Automatic fallback** if configuration is not found

## 🎯 Next Steps

- [ ] Add customizable themes
- [ ] Implement message persistence
- [ ] Add push notifications
- [ ] Create admin dashboard
- [ ] Implement analytics

---

**Problem Solved**: ✅ The widget now automatically loads CSS when embedded in other sites, solving the unstyled content issue.
