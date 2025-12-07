# CLAUDE.md - AI Assistant Guide

## Project Overview

This is a **Tip Calculator App** created as a Frontend Mentor challenge. The application allows users to calculate tip amounts and total costs per person based on bill amount, tip percentage, and number of people.

**Live Demo**: Hosted via GitHub Pages at `/docs` directory
**Original Challenge**: [Frontend Mentor - Tip Calculator](https://www.frontendmentor.io)

### Key Features
- Calculate tip amount per person
- Calculate total bill per person
- Predefined tip percentages (5%, 10%, 15%, 25%, 50%)
- Custom tip percentage input
- Responsive design (mobile 375px / desktop 1440px)
- Reset functionality
- Input validation (minimum 1 person)

---

## Codebase Structure

```
Tip-calculator-app/
├── index.html              # Main HTML structure
├── index.css               # Styles and CSS variables
├── index.js                # Core calculation logic
├── style-guide.md          # Design specifications
├── README.md               # Frontend Mentor instructions
├── README-template.md      # Template for custom README
├── _config.yml             # Jekyll configuration for GitHub Pages
├── img/                    # Image assets
│   ├── favicon-32x32.png
│   ├── icon-dollar.svg
│   ├── icon-person.svg
│   ├── logo.svg
│   └── Thumbs.db
└── docs/                   # GitHub Pages deployment (mirrors root)
    ├── index.html
    ├── index.css
    ├── index.js
    ├── img/
    ├── README.md
    └── _config.yml
```

### File Purposes

**Root Files** (Development):
- `index.html`: Main application markup with Bootstrap 5 grid
- `index.css`: Custom styles using CSS variables for theming
- `index.js`: Vanilla JavaScript for calculation and event handling

**Docs Folder** (Deployment):
- Mirror of root files for GitHub Pages hosting
- Changes should be made in root, then synced to `/docs`

---

## Tech Stack & Dependencies

### Core Technologies
- **HTML5**: Semantic markup
- **CSS3**: Custom properties (CSS variables), flexbox, responsive design
- **JavaScript (ES6)**: Vanilla JS, no frameworks
- **Bootstrap 5.2.0-beta1**: Grid system and utilities only

### External Dependencies
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet" crossorigin="anonymous">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        crossorigin="anonymous"></script>

<!-- Google Fonts -->
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap');
```

### No Build Tools
- No package.json or npm dependencies
- No bundlers (webpack, vite, etc.)
- No preprocessors (SASS, TypeScript, etc.)
- Pure static files served directly

---

## Code Architecture

### CSS Variables (index.css:3-14)
```css
:root {
    --Strongcyan: hsl(172, 67%, 45%);
    --Very-dark-cyan: hsl(183, 100%, 15%);
    --Dark-grayish-cyan: hsl(186, 14%, 43%);
    --Grayish-cyan: hsl(184, 14%, 56%);
    --Light-grayish-cyan: hsl(185, 41%, 84%);
    --Very-light-grayish-cyan: hsl(189, 41%, 97%);
    --White: hsl(0, 0%, 100%);
    --font-family: 'Outfit';
    --font-weight: 700;
    --font-size: 1.5rem;
}
```

### JavaScript Architecture (index.js)

**Key DOM Elements**:
```javascript
selectedTip        # NodeList of .tipOption elements
tipOptionEdit      # Custom tip input field
peopleNumber       # Number of people input
billAmmount        # Bill amount input (note: typo in variable name)
activeItem         # HTMLCollection of .active elements
personTip          # Display element for tip per person
totalBill          # Display element for total per person
reset              # Reset button
```

**Core Functions**:
1. `calculateBill()` (index.js:21-41): Main calculation logic
2. Event handlers: onclick, oninput for real-time updates
3. Reset functionality to clear all inputs and selections

### Calculation Logic (index.js:32-33)

```javascript
// Tip per person
var tip = (billAmmount.value * (tipPercentage / 100)) / peopleNumber.value;

// Total per person (bill amount only, excluding tip)
var total = billAmmount.value / peopleNumber.value;
```

**Note**: The `total` calculation appears to show only the bill per person WITHOUT the tip included. This may be intentional design or a potential bug to verify.

---

## Development Workflows

### Making Changes

1. **Edit Root Files**: Always modify files in the root directory first
   - `index.html` for markup changes
   - `index.css` for styling updates
   - `index.js` for logic modifications

2. **Test Locally**: Open `index.html` directly in browser or use a local server
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if http-server installed)
   npx http-server
   ```

3. **Sync to Docs**: Copy changes from root to `/docs` for GitHub Pages
   ```bash
   cp index.html docs/index.html
   cp index.css docs/index.css
   cp index.js docs/index.js
   # Copy img/ if assets changed
   ```

4. **Commit and Push**: Use git workflow
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin <branch-name>
   ```

### Git Branch Naming
- Feature branches should follow: `claude/claude-md-<session-id>`
- Always push to the designated branch with `-u` flag
- Never force push to main/master

---

## Code Conventions

### HTML
- Bootstrap 5 utility classes for layout (`row`, `col-md-6`, etc.)
- Semantic class names: `.calc-input`, `.calc-resault` (note spelling)
- Icons positioned absolutely with CSS

### CSS
- Use CSS variables for all colors and typography
- Mobile-first responsive design
- Custom input styling to hide number spinners
- Consistent transitions: `all .25s ease-in-out`
- BEM-like naming for calculator components

### JavaScript
- Vanilla JS, no jQuery or frameworks
- Event-driven architecture with direct DOM manipulation
- Use `querySelector` and `getElementById` for element selection
- Real-time calculation on input changes
- Active state management via `.active` class

### Naming Conventions
**Known Inconsistencies**:
- `billAmmount` (typo: should be "Amount") - maintained for consistency
- `calc-resault` (typo: should be "result") - maintained for consistency
- `peopleNumber` vs `billAmmount` (inconsistent casing)
- **Important**: Do NOT rename these unless explicitly requested, as it would require changes across HTML, CSS, and JS

---

## Common Tasks

### Adding a New Tip Percentage
1. Add new `<span>` in `index.html:30-35` with `tipOption` class
2. Set `value` attribute to the percentage number
3. Display text should include `%` symbol
4. JavaScript automatically handles the click event

### Modifying Color Scheme
1. Edit CSS variables in `index.css:3-14`
2. Use HSL color format for consistency
3. All colors reference these variables

### Adjusting Calculation Logic
1. Locate `calculateBill()` function in `index.js:21-41`
2. Modify tip/total calculation formulas
3. Update display format if needed (currently 2 decimal places)
4. Test edge cases: zero bill, one person, high percentages

### Updating Responsive Breakpoints
1. Bootstrap uses `col-md-6` for medium+ screens
2. Custom responsive styles use flexbox direction changes
3. Style guide specifies: Mobile 375px, Desktop 1440px

---

## Important Considerations

### Known Issues & Gotchas

1. **Total Calculation** (index.js:33):
   - Currently shows bill per person WITHOUT tip
   - May need verification if tip should be included in total
   - Check original design requirements

2. **Font Inconsistency**:
   - CSS uses: `Outfit` font from Google Fonts
   - Style guide specifies: `Space Mono`
   - Current implementation uses Outfit - verify if intentional

3. **Typos in Code**:
   - `billAmmount` (throughout codebase)
   - `calc-resault` (CSS classes)
   - `Custome` (placeholder text in index.html:39)
   - Maintained for consistency; don't fix unless requested

4. **Input Validation**:
   - People number minimum is 1 (enforced in index.js:48-50)
   - No maximum limits on any inputs
   - No validation for decimal places or negative numbers on bill amount
   - Custom tip allows any number (no min/max)

5. **Edge Cases**:
   - Division by zero: prevented by minimum people = 1
   - Zero bill: handled with conditional (index.js:34-36)
   - Empty custom tip: defaults to 0% if no tip selected

6. **Browser Compatibility**:
   - Uses modern CSS (CSS variables, flexbox)
   - Bootstrap 5 requires modern browsers
   - No IE11 support

### Performance Notes
- DOM queries happen on page load (not in functions)
- `activeItem` is a live HTMLCollection (updates automatically)
- Calculations trigger on every input change (no debouncing)
- Minimal performance impact due to simple calculations

### Accessibility Gaps
- Missing ARIA labels on custom controls
- Tip percentage spans are not keyboard accessible
- No screen reader announcements for calculated values
- Consider adding:
  - `role="button"` and `tabindex="0"` to tip options
  - `aria-live="polite"` to result displays
  - Keyboard event handlers for tip selection

---

## Testing & Deployment

### Manual Testing Checklist
- [ ] Bill input accepts numbers and decimals
- [ ] Each tip percentage (5%, 10%, 15%, 25%, 50%) calculates correctly
- [ ] Custom tip input accepts and calculates correctly
- [ ] People number input prevents values < 1
- [ ] Tip per person displays with $ and 2 decimals
- [ ] Total per person displays with $ and 2 decimals
- [ ] Reset button clears all inputs and results
- [ ] Active state highlights selected tip option
- [ ] Responsive layout works on mobile (375px) and desktop (1440px)
- [ ] Focus states visible on all inputs

### Deployment (GitHub Pages)
1. Ensure `/docs` folder is up to date with root files
2. Push changes to main branch (or designated branch)
3. GitHub Pages automatically deploys from `/docs` folder
4. Verify deployment at repository's GitHub Pages URL
5. Check `_config.yml` Jekyll settings if needed

### Cross-Browser Testing
- Chrome/Edge (Chromium)
- Firefox
- Safari (WebKit)
- Mobile browsers (iOS Safari, Chrome Android)

---

## AI Assistant Guidelines

### When Making Changes

1. **Read First**: Always read files before modifying them
2. **Preserve Quirks**: Keep existing typos/naming unless explicitly asked to fix
3. **Test Calculations**: Verify math logic for edge cases
4. **Sync Docs**: Remember to update `/docs` folder after root changes
5. **Respect Conventions**: Follow existing code style and patterns

### Common Requests

**"Fix the calculation"**:
- Check `calculateBill()` function in index.js:21-41
- Verify if total should include tip (currently doesn't)
- Test with various inputs

**"Update the styling"**:
- Modify CSS variables in index.css for colors
- Use existing Bootstrap utilities where possible
- Maintain responsive behavior

**"Add validation"**:
- Add checks in event handlers (oninput, onclick)
- Display error messages in UI
- Prevent invalid calculations

**"Make it accessible"**:
- Add ARIA labels and roles
- Implement keyboard navigation for tip options
- Add live regions for results

### Security Considerations
- All inputs are for client-side calculation only
- No server communication or data persistence
- No sensitive data handling
- Standard XSS prevention via proper HTML encoding (Bootstrap handles this)

---

## Style Guide Reference (style-guide.md)

### Colors (Official Design)
- **Primary**: Strong cyan `hsl(172, 67%, 45%)`
- **Neutral**:
  - Very dark cyan: `hsl(183, 100%, 15%)`
  - Dark grayish cyan: `hsl(186, 14%, 43%)`
  - Grayish cyan: `hsl(184, 14%, 56%)`
  - Light grayish cyan: `hsl(185, 41%, 84%)`
  - Very light grayish cyan: `hsl(189, 41%, 97%)`
  - White: `hsl(0, 0%, 100%)`

### Typography (Official Design)
- Font size (form inputs): 24px
- Font family: Space Mono (Weight: 700)
- **Note**: Current implementation uses Outfit instead

### Layout (Official Design)
- Mobile: 375px
- Desktop: 1440px

---

## Quick Reference

### File Locations
- Main logic: `index.js`
- Styles: `index.css:1-161`
- Markup: `index.html:1-100`
- Design specs: `style-guide.md`

### Key Functions
- Calculate: `calculateBill()` at index.js:21
- Reset: `reset.onclick` at index.js:65

### Important Classes
- `.tipOption`: Predefined tip buttons
- `.tipOptionEdit`: Custom tip input
- `.active`: Selected tip indicator
- `.calc-input`: Left panel with inputs
- `.calc-resault`: Right panel with results

### Git Workflow
```bash
# Create feature branch
git checkout -b claude/claude-md-<session-id>

# Make changes, then commit
git add .
git commit -m "Descriptive message"

# Push with upstream
git push -u origin claude/claude-md-<session-id>
```

---

## Version History

**Last Updated**: 2025-12-07
**Repository State**: Clean working directory on branch `claude/claude-md-mivpwb8hokzzuopc-01ERf1V17KRhKGaucBqeGwDv`
**Recent Commits**:
- 681d8c3: Update index.css
- 2252e9b: Update index.css
- 51297a3: Add files via upload

---

## Contact & Resources

- **Frontend Mentor**: https://www.frontendmentor.io
- **Bootstrap 5 Docs**: https://getbootstrap.com/docs/5.2
- **Original Challenge**: Frontend Mentor Tip Calculator App
- **Issues**: Check GitHub repository issues tab

---

**This document was generated to help AI assistants understand and work with this codebase effectively. Keep it updated as the project evolves.**
