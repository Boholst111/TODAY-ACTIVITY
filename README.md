# John Paul Boholst - Portfolio Website

A modern, responsive portfolio website showcasing web development skills, projects, and services. Built with HTML5, CSS3, and Vanilla JavaScript.

## 🌐 Live Demo

Open `index.html` in your web browser to view the portfolio.

---

## ✨ Features

- 📱 **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- 🎯 **Smooth Navigation** - Smooth scrolling between sections with fixed navbar
- 📱 **Mobile Menu** - Hamburger menu for mobile devices with toggle functionality
- ✉️ **Contact Form** - Fully functional contact form with email validation
- 🎨 **Modern Design** - Clean, professional UI with smooth hover effects
- ⚡ **No Dependencies** - Pure HTML, CSS, and JavaScript (no frameworks or libraries)
- ♿ **Accessible** - Semantic HTML5 with proper alt text and ARIA labels
- 🚀 **Fast Performance** - Lightweight and optimized for quick loading

---

## 📁 Project Structure

```
TODAY-ACTIVITY/
├── index.html              # Main HTML file
├── styles.css              # CSS styling and responsive design
├── script.js               # JavaScript functionality
├── CODE_EXPLANATION.md     # Detailed code documentation
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Boholst111/TODAY-ACTIVITY.git
cd TODAY-ACTIVITY
```

2. **Open in browser:**
   - Double-click `index.html`, OR
   - Right-click `index.html` → Open with → Your browser

3. **Optional - Use a local server:**
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (http-server)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

---

## 📋 Sections

### 1. **Navigation Bar**
- Fixed at top of page
- Links to all main sections
- Hamburger menu for mobile devices
- Smooth scrolling when clicking links

### 2. **Home/Hero Section**
- Large welcoming heading
- Professional tagline
- Profile photo
- Call-to-action button

### 3. **About Me Section**
- Personal introduction
- Developer focus area
- Skills summary
- List of key projects

### 4. **Skills Section**
- Frontend technologies (HTML5, CSS3, JavaScript)
- Backend technologies (PHP, MySQL)
- Development tools (Git, GitHub, VS Code)
- Other competencies (Responsive Design, Web Development)

### 5. **Projects Section**
- Three featured projects with descriptions:
  - **SFMS System** - Student Faculty Record Management
  - **Church Management** - Church Member Database
  - **Inventory Tool** - Store Inventory Tracking System
- Technologies used for each project
- Hover effects for interactivity

### 6. **Contact Section**
- Contact form with fields:
  - Name (required)
  - Email (required, with format validation)
  - Subject (required)
  - Message (required)
- Form validation
- Success message on submission

### 7. **Footer**
- Copyright information
- Current year and name

---

## 💻 Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox and CSS Grid
- **JavaScript** - Vanilla JS for interactivity and validation

### Features & Techniques
- **Flexbox** - Responsive layouts for hero and about sections
- **CSS Grid** - Multi-column layouts for skills and projects
- **Media Queries** - Responsive breakpoints at 768px and 480px
- **ES5 JavaScript** - Compatible with older browsers
- **Regular Expressions** - Email validation
- **DOM Manipulation** - Dynamic menu and form handling

---

## 🎯 Key Functionality

### Mobile Menu Toggle
- Hamburger menu button appears on screens ≤ 768px
- Click to show/hide navigation menu
- Auto-closes when clicking a link

### Smooth Scrolling
- All navigation links scroll smoothly to sections
- Uses `scrollIntoView()` with smooth behavior
- Prevents default link jump behavior

### Form Validation
- Checks all fields are filled
- Validates email format using regex pattern
- Shows error alerts for invalid data
- Success message after submission
- Clears form after successful submission

### Responsive Breakpoints
- **Desktop**: All features visible, full navigation
- **Tablet** (≤768px): Hamburger menu, 2-column grids
- **Mobile** (≤480px): 1-column layouts, smaller fonts

---

## 📸 Screenshots

### Desktop View
- Full navigation bar
- Side-by-side layouts
- 4-column skills grid
- 3-column projects grid

### Mobile View
- Hamburger menu
- Stacked layouts
- 1-column grids
- Responsive images

---

## 🔧 How to Customize

### Change Profile Photo
1. Replace `profile.jpg` with your photo
2. Update paths in `index.html` (lines 38 and 48)

### Update Personal Information
- **Name**: Edit `<h1>` in hero section (line 32)
- **Title**: Edit `<h2>` in hero section (line 33)
- **Bio**: Edit paragraph in about section (line 52)
- **Projects**: Update project cards (lines 90-115)
- **Skills**: Modify skill items (lines 77-95)

### Change Colors
Edit color variables in `styles.css`:
- **Primary Blue**: `#3498db`
- **Dark Gray**: `#2c3e50`
- **Light Gray**: `#f8f9fa`

### Modify Form Fields
Edit form inputs in `index.html` (lines 119-124)

---

## 📝 Code Documentation

For detailed explanations of all code sections including:
- HTML structure and semantic tags
- CSS layouts and responsive design
- JavaScript functionality and validation

See [CODE_EXPLANATION.md](CODE_EXPLANATION.md)

---

## 🐛 Troubleshooting

### Images not showing
- Ensure `profile.jpg` is in the same folder as `index.html`
- Or update image paths in HTML

### Form not working
- Open browser console (F12) to check for errors
- Ensure `script.js` is linked in `index.html`

### Menu not closing on mobile
- Check that JavaScript is enabled in browser
- Verify `id` attributes match in HTML and JavaScript

### Styles not applying
- Clear browser cache (Ctrl+Shift+Del)
- Ensure `styles.css` is linked correctly
- Check file paths are relative

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ⚠️ Partial (no smooth scroll) |

---

## 🔒 Privacy

This portfolio contains a contact form. Currently, it:
- ✅ Validates input locally
- ✅ Shows success message
- ❌ Does NOT send emails (front-end only)

To enable email sending, you would need:
- Backend server (Node.js, Python, PHP)
- Email service integration
- Form submission endpoint

---

## 📚 Learning Resources

Helpful resources for understanding the code:

**HTML5:**
- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

**CSS3:**
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

**JavaScript:**
- [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---

## 📊 Git Workflow

### Version Control
```bash
# Clone the repository
git clone https://github.com/Boholst111/TODAY-ACTIVITY.git

# Create a branch for your changes
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin feature/your-feature-name
```

### Current Branch
- **feb23** - Latest development branch with all updates

---

## 🤝 Contributing

To contribute improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

This project is open source and available for personal and educational use.

---

## 👨‍💻 Author

**John Paul Boholst**
- Portfolio: [Your Website]
- GitHub: [@Boholst111](https://github.com/Boholst111)
- Email: [Your Email]

---

## 📞 Contact

Have questions or suggestions? Feel free to:
- Use the contact form on the website
- Open an issue on GitHub
- Reach out directly

---

## 🎓 Educational Purpose

This portfolio project demonstrates:
- Modern web development practices
- Responsive design principles
- Form validation techniques
- DOM manipulation
- CSS layout methods (Flexbox, Grid)
- Mobile-first approach
- Code organization and structure

---

## ⭐ If You Find This Helpful

- Star this repository on GitHub
- Share it with fellow developers
- Use it as a learning resource

---

## 📅 Project Timeline

- **Created**: February 23, 2026
- **Branch**: feb23
- **Status**: Active Development

---

## ✅ Checklist for Using This Portfolio

- [ ] Update profile information
- [ ] Replace profile photo
- [ ] Update project descriptions
- [ ] Customize colors (optional)
- [ ] Test on mobile devices
- [ ] Push to GitHub
- [ ] Share portfolio URL
- [ ] Get feedback

---

**Last Updated**: February 23, 2026

Happy coding! 🚀
