# Zohaib Hassan - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and professional experience.

## 🚀 Quick Deploy to Netlify

### Option 1: Drag & Drop (Fastest)
1. Run the build command:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site is live! 🎉

### Option 2: Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: Git Integration (Recommended for Updates)
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository
   - Netlify will auto-detect the settings from `netlify.toml`
   - Click "Deploy site"

3. **Auto-deployments**: Now every push to `main` branch will automatically deploy!

## 💻 Local Development

### Prerequisites
- Node.js 16+ and npm

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view your portfolio

### Build for Production
```bash
# Creates optimized build in /dist folder
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
project/
├── src/
│   ├── components/     # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── package.json       # Dependencies
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── netlify.toml       # Netlify deployment settings
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## 🎨 Customization

All personal information has been configured from the resume. To make future updates:

- **Contact Info**: Edit `src/components/Contact.tsx`
- **Projects**: Update `src/components/Projects.tsx`
- **Skills**: Modify `src/components/Skills.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **About**: Update bio in `src/components/About.tsx`

## 📝 Contact Form

The contact form is currently frontend-only. To make it functional:

### Option 1: Netlify Forms (Easiest)
Add `netlify` attribute to the form in `Contact.tsx`:
```jsx
<form name="contact" netlify className="space-y-6">
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form */}
</form>
```

### Option 2: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Configure in `Contact.tsx`

### Option 3: Custom Backend
Set up your own API endpoint and update the form submission handler.

## 🐛 Troubleshooting

### Build Fails
- Ensure Node.js version is 16 or higher: `node --version`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf dist .vite`

### Deployment Issues on Netlify
- Check build logs in Netlify dashboard
- Verify `netlify.toml` configuration
- Ensure all dependencies are in `package.json` (not devDependencies for production packages)

### TypeScript Errors
- Run type check: `npm run typecheck`
- Most lint errors shown in IDE won't affect the build - Vite handles them gracefully

## 📱 SEO & Meta Tags

Meta tags are configured in `index.html`. Update the Open Graph image URL to use a custom image once deployed.

## 📄 License

Free to use for personal portfolio!

---

**Built with ❤️ by Zohaib Hassan**
