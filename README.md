# Martin Dimoski - Portfolio Website

A modern, minimal, static portfolio website built with pure HTML, CSS, and vanilla JavaScript.

## 🚀 Features

- **Pure Static HTML/CSS/JS** - No build process required
- **GitHub Pages Ready** - Deploy directly to GitHub Pages
- **Fully Responsive** - Mobile-first design
- **Multi-language Support** - English (B2B) and Macedonian (B2C) versions
- **Dark Theme** - Professional, clean, and minimal design
- **SEO Friendly** - Semantic HTML structure

## 📁 File Structure

```
public/
├── index.html              # Root page (language selector)
├── en/
│   └── index.html         # English version (B2B focused)
├── mk/
│   └── index.html         # Macedonian version (B2C focused)
├── styles/
│   └── main.css           # Shared CSS styles
├── js/
│   └── main.js            # Minimal vanilla JavaScript
└── README.md              # This file
```

## 🎨 Color System

The site uses a consistent dark color palette:

- **Primary Background**: `#0f172a`
- **Secondary Background**: `#020617`
- **Card Background**: `#111827`
- **Primary Text**: `#e5e7eb`
- **Muted Text**: `#9ca3af`
- **Accent Color**: `#38bdf8`
- **Subtle Borders**: `rgba(255,255,255,0.08)`

## 🌐 Deployment to GitHub Pages

### Option 1: Deploy from Repository Root

1. Create a new GitHub repository
2. Copy all files from the `public/` directory to your repository root
3. Push to GitHub
4. Go to repository Settings → Pages
5. Set Source to "main branch" → "/ (root)"
6. Save and wait for deployment

Your site will be available at: `https://yourusername.github.io/repository-name/`

### Option 2: Deploy from /docs folder

1. Create a new GitHub repository
2. Create a `docs/` folder in your repository
3. Copy all files from `public/` to the `docs/` folder
4. Push to GitHub
5. Go to repository Settings → Pages
6. Set Source to "main branch" → "/docs"
7. Save and wait for deployment

### Option 3: Use GitHub Desktop

1. Download and install GitHub Desktop
2. Create a new repository
3. Copy all files from `public/` to your local repository folder
4. Commit and push changes
5. Follow steps 4-6 from Option 1

## 📝 Customization

### Update Contact Email

Find and replace `hello@example.com` in both `/en/index.html` and `/mk/index.html` with your actual email address.

### Update Content

All content is directly in the HTML files and can be edited with any text editor:

- **index.html** - Language selection page
- **en/index.html** - English content (B2B focused)
- **mk/index.html** - Macedonian content (B2C focused)

### Update Styling

All styles are in `/styles/main.css`. The CSS uses CSS custom properties (variables) for easy theming.

To change colors, update the `:root` variables at the top of `main.css`:

```css
:root {
    --color-primary-bg: #0f172a;
    --color-accent: #38bdf8;
    /* ... etc */
}
```

## 🔧 Technical Details

- **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript
- **Semantic HTML5** - Proper use of header, main, section, footer elements
- **Accessible** - ARIA-friendly navigation and content structure
- **Performance** - Minimal JavaScript, optimized CSS
- **Browser Support** - Modern browsers (Chrome, Firefox, Safari, Edge)

## 📱 Responsive Design

The site is fully responsive with breakpoints at:

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (stacked layout)

## ⚡ JavaScript Features

The minimal JavaScript (`main.js`) provides:

- Smooth scrolling for anchor links
- Scroll spy for navigation active states
- Subtle fade-in animations on scroll
- No external libraries or dependencies

## 📄 License

Feel free to use this template for your own portfolio. No attribution required.

## 🤝 Support

For issues or questions, please open an issue on GitHub or contact via email.

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**
