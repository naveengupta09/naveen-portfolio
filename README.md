# Personal Portfolio - Naveen Kumar

A modern, responsive portfolio website showcasing my skills, projects, and experience as a MERN Stack Developer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive GitHub Contributions**: Displays GitHub contribution calendar using GitHub GraphQL API
- **Dynamic Skills Visualization**: Interactive charts and progress bars for DSA skills
- **Project Showcase**: Dynamic project cards loaded from JSON
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: Typing animation and smooth scrolling
- **SEO Optimized**: Includes meta tags, Open Graph, Twitter Cards, and structured data

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Chart.js (for skill visualization)
- GitHub GraphQL API

## 📁 Project Structure

```
naveen-portfolio/
├── assets/
│   ├── icons/          # Technology icons
│   ├── project-preview/ # Project preview images
│   └── social icons/   # Social media icons
├── css/
│   ├── style.css       # Main stylesheet
│   ├── utils.css       # Utility classes
│   └── calendar.css    # GitHub calendar styles
├── js/
│   ├── effects.js      # Typing animation effects
│   ├── chart.js        # Skills chart rendering
│   ├── controlls.js    # Navigation and project rendering
│   ├── github.js       # GitHub contributions calendar
│   └── contact.js      # Contact form handler
├── index.html          # Main HTML file
├── projects.json       # Project data
├── skills.json         # Skills data
├── sitemap.xml         # SEO sitemap
└── robots.txt          # SEO robots file
```

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/naveengupta09/naveen-portfolio.git
   cd naveen-portfolio
   ```

2. **Configure Contact Form**
   - Open `js/contact.js`
   - Replace `YOUR_FORM_ID` with your Formspree form ID, or
   - Replace `your-email@example.com` with your actual email address

3. **Configure GitHub API**
   - Open `js/github.js`
   - Update the `username` variable with your GitHub username
   - Update the `token_stream` with your GitHub Personal Access Token (encoded in binary)

4. **Update Personal Information**
   - Edit `index.html` to update your personal details
   - Update `projects.json` with your actual projects
   - Update `skills.json` with your skill levels

5. **Deploy**
   - The site can be deployed to Netlify, Vercel, or any static hosting service
   - Make sure to update URLs in `sitemap.xml` and `robots.txt` if needed

## 📝 Configuration

### Contact Form
The contact form uses Formspree by default. To set it up:
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Copy the form ID and replace `YOUR_FORM_ID` in `js/contact.js`

Alternatively, the form will fall back to a mailto link if the service is not configured.

### GitHub Contributions
To display your GitHub contributions:
1. Generate a GitHub Personal Access Token with `read:user` permission
2. Convert the token to binary format
3. Update the `token_stream` in `js/github.js`

## 🎨 Customization

- **Colors**: Edit CSS variables in `css/style.css` (root section)
- **Content**: Update `index.html`, `projects.json`, and `skills.json`
- **Styling**: Modify CSS files in the `css/` directory

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Naveen Kumar**
- GitHub: [@naveengupta09](https://github.com/naveengupta09)
- LinkedIn: [naveengupta13](https://www.linkedin.com/in/naveengupta13/)
- Portfolio: [naveengupta.netlify.app](https://naveengupta.netlify.app)

## 🙏 Acknowledgments

- Chart.js for the visualization library
- GitHub for the GraphQL API
- All the open-source contributors whose work made this possible
