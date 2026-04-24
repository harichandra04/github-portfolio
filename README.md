# Harichandra Bhukya - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and vanilla JavaScript. Features smooth animations, dark/light mode toggle, and reusable components.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [License](#license)

## ✨ Features

### Core Features
- ✅ **Fully Responsive Design** - Mobile, Tablet, Desktop optimized
- ✅ **Dark/Light Mode Toggle** - Persistent theme preference
- ✅ **Smooth Scroll Animations** - Intersection Observer based
- ✅ **Sticky Navigation** - Smooth scrolling and active link highlighting
- ✅ **Contact Form** - With client-side validation
- ✅ **Project Showcase** - Interactive project cards with tech badges

### Advanced Features
- 🎨 **Scroll-triggered Animations** - Elements animate as they enter viewport
- 🔢 **Animated Counters** - Stats with smooth counting animation
- 🎭 **Parallax Effect** - Depth perception on hero section
- ♿ **Accessibility** - WCAG compliant, keyboard navigation, focus states
- 📱 **Touch-friendly** - Optimized for touch devices
- 🎯 **SEO Optimized** - Semantic HTML, meta tags, structured data
- 🚀 **Performance** - Lazy loading, optimized animations, minimal dependencies

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── css/
│   ├── variables.css         # CSS custom properties and design tokens
│   ├── styles.css            # Main component styles
│   └── responsive.css        # Media queries and responsive design
├── js/
│   ├── main.js               # Application entry point
│   ├── components.js         # Reusable component functions
│   ├── utils.js              # Utility functions and helpers
│   └── animations.js         # Animation utilities
├── assets/
│   ├── images/               # Image assets
│   ├── icons/                # Icon assets
│   └── data/
│       └── portfolio-data.js # Portfolio content and sample data
├── README.md                 # This file
└── .gitignore               # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- No build tools required!

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Using a local server (recommended)
   python -m http.server 8000
   # or
   php -S localhost:8000
   
   # Then visit: http://localhost:8000
   ```

   Or simply open `index.html` directly in your browser.

## 🎨 Customization

### Update Portfolio Data

Edit `assets/data/portfolio-data.js`:

```javascript
const portfolioData = {
    developer: {
        name: 'Your Name',
        title: 'Your Title',
        email: 'your.email@example.com',
        // ... more fields
    },
    skills: [
        // Add your skills here
    ],
    projects: [
        // Add your projects here
    ],
    // ... more sections
};
```

### Modify Colors & Design Tokens

Edit `css/variables.css`:

```css
:root {
    /* Primary Colors */
    --color-primary: #00a8ff;
    --color-accent-1: #7c3aed;
    
    /* Spacing */
    --space-4: 1rem;
    
    /* Typography */
    --font-size-xl: 1.25rem;
    
    /* Add your custom properties */
}
```

### Customize Sections

Edit `index.html` to add or remove sections. Each section is self-contained:

```html
<section id="custom" class="custom">
    <div class="container">
        <h2 class="section-title">Custom Section</h2>
        <!-- Your content -->
    </div>
</section>
```

### Style Customization

Add custom CSS in a new file or directly in `styles.css`:

```css
.custom-element {
    padding: var(--space-6);
    background: var(--color-bg-primary);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
}

.custom-element:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
}
```

## 🧩 Using Components

### Render Skills
```javascript
SkillsComponent.render('skillsGrid');
```

### Render Projects
```javascript
ProjectsComponent.render('projectsGrid');
```

### Render Experience
```javascript
ExperienceComponent.render('experienceTimeline');
```

### Create Custom Component
```javascript
const MyComponent = {
    render: (containerId) => {
        const container = DOM.byId(containerId);
        if (!container) return;
        
        // Generate HTML
        container.innerHTML = `<div>Your HTML</div>`;
        
        // Initialize interactions
        MyComponent.init();
    },
    
    init: () => {
        // Add event listeners and logic
    }
};
```

## 🎯 Utility Functions

### DOM Utilities
```javascript
DOM.select('.selector')      // querySelector
DOM.selectAll('.selector')   // querySelectorAll
DOM.byId('id')              // getElementById
DOM.create('div', 'class')  // createElement
```

### Class Management
```javascript
Classes.add(element, 'active')      // Add class
Classes.remove(element, 'active')   // Remove class
Classes.toggle(element, 'active')   // Toggle class
Classes.has(element, 'active')      // Check class
```

### Event Handling
```javascript
Events.on(element, 'click', handler)
Events.off(element, 'click', handler)
Events.delegated(parent, '.child', 'click', handler)
```

### Scroll Utilities
```javascript
Scroll.to(element, offset)          // Scroll to element
Scroll.toTop()                       // Scroll to top
Scroll.isInView(element, threshold) // Check if in view
```

### Storage
```javascript
Storage.set('key', value)   // Save to localStorage
Storage.get('key')          // Get from localStorage
Storage.remove('key')       // Remove from localStorage
```

## 🎬 Animation Utilities

### Scroll Animations
```javascript
ScrollAnimationComponent.init()     // Auto-animate on scroll
```

### Parallax Effect
```javascript
Parallax.init('.selector', 0.5)     // Enable parallax
```

### Hover Lift
```javascript
HoverLift.init('.card', 10)         // Lift on hover
```

### Floating Animation
```javascript
Floating.init('.selector', 20, 4000) // Float up/down
```

### Count Up Animation
```javascript
CountUp.animate(element, 100, 2000) // Count to 100 in 2s
```

## 🌐 Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Chrome  | ✅ Full | Latest |
| Firefox | ✅ Full | Latest |
| Safari  | ✅ Full | 12+ |
| Edge    | ✅ Full | Latest |
| IE 11   | ⚠️ Partial | Not recommended |

## ⚡ Performance Tips

1. **Lazy Load Images**
   ```html
   <img src="image.jpg" loading="lazy" alt="Description">
   ```

2. **Optimize Images**
   - Use WebP format with fallbacks
   - Compress images before uploading
   - Use appropriate image sizes

3. **Minimize JavaScript**
   - Only load required animations
   - Debounce/throttle scroll events
   - Remove unused utility functions

4. **Cache Strategy**
   - Enable browser caching
   - Use Service Worker for offline support
   - Minify CSS and JS

## ♿ Accessibility

### Features Included
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast ratios
- ✅ Screen reader support
- ✅ Skip-to-content link

### Testing
- Use browser DevTools accessibility audit
- Test with keyboard only navigation
- Test with screen reader (NVDA, JAWS)
- Verify color contrast (at least 4.5:1)

## 📱 Mobile Optimization

The portfolio is fully responsive with breakpoints:
- **Extra Small** (< 320px)
- **Small** (320px - 479px)
- **Mobile** (480px - 767px)
- **Tablet** (768px - 991px)
- **Desktop** (992px - 1199px)
- **Large** (1200px+)

## 🔧 Advanced Configuration

### Custom Theme
```css
body {
    --color-primary: #your-color;
    --color-bg-primary: #your-bg;
}

body.dark-mode {
    --color-primary: #dark-color;
    --color-bg-primary: #dark-bg;
}
```

### Event Tracking
```javascript
Analytics.trackEvent('project-click', {
    projectName: 'My Project',
    timestamp: Date.now()
});
```

### Custom Animations
Add to `animations.js`:
```javascript
const MyAnimation = {
    init: (selector) => {
        // Your animation logic
    }
};
```

## 🐛 Troubleshooting

### Animations Not Working
- Check browser support for CSS animations
- Verify animations.js is loaded
- Check console for JavaScript errors
- Ensure IntersectionObserver is available

### Dark Mode Not Persisting
- Check localStorage is enabled
- Verify Storage utility is working
- Check browser privacy settings

### Responsive Issues
- Clear browser cache
- Check CSS media queries
- Verify viewport meta tag in HTML
- Test in different screen sizes

## 📈 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Dynamic project loading from GitHub API
- [ ] Multi-language support
- [ ] PWA (Progressive Web App) support
- [ ] CMS integration
- [ ] Email backend integration
- [ ] Analytics dashboard
- [ ] Automated deployment

## 📝 License

This project is open source. Feel free to use, modify, and distribute.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Support

For questions or support, reach out to:
- Email: bhukyaharichandra03@gmail.com
- LinkedIn: https://www.linkedin.com/in/harichandra-bhukya-a99386277
- GitHub: https://github.com/harichandra04

---

**Built with ❤️ using HTML, CSS, and vanilla JavaScript**

Last Updated: 2024
