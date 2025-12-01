# Brady Barker – Personal Portfolio

**Live Site:** [https://bradybarker.dev](https://bradybarker.dev)

A modern, fast, and fully responsive personal portfolio built to showcase my professional background, projects, and technical skills.


## Tech Stack

| Category           | Technology                                            |
|--------------------|-------------------------------------------------------|
| Framework          | [React 18+](https://react.dev/)                       |
| Build Tool         | [Vite](https://vitejs.dev/)                           |
| Styling            | [Tailwind CSS v4.0](https://tailwindcss.com/)         |
| Icons              | [Lucide React](https://lucide.dev/)                   |
| Deployment         | [Vercel](https://vercel.com/)                         |


---

## Project Structure

```
src/
  App.jsx               
  App.css               
  data/
    resumeData.js       # Centralized resume/profile content
  components/
    layout/
      Navbar.jsx        # Top navigation bar (brand, theme toggle, burger)
      Sidebar.jsx       # Slide-out sidebar nav (desktop + mobile)
      MobileNav.jsx     # Mobile bottom navigation
    common/
      SectionHeader.jsx # Reusable section header component
      CustomBBIcon.jsx  # Icon used as site's logo
    sections/
      HeroSection.jsx
      ImpactSection.jsx
      ExperienceSection.jsx
      ProjectsSection.jsx
      SkillsSection.jsx
      EducationAndCommunitySection.jsx
      BioSection.jsx
```
