import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import styles from './Landing.module.css'

const BASE = import.meta.env.BASE_URL

export default function Landing() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroName}>
            {[...'Praveen Babu'].map((char, i) => (
              <span
                key={i}
                className={styles.typeChar}
                style={{ animationDelay: `${0.4 + i * 0.075}s` }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            ))}
            <span className={styles.cursor} aria-hidden="true" />
          </h1>
          <p className={styles.heroBio}>
            a UI/UX Designer focused on creating intuitive, scalable interfaces for enterprise SaaS platforms.
            My work spans design systems, data dashboards, and Agentic AI experiences that blend clarity, function,
            and emotion. Skilled in Figma, interaction design, and motion, I believe great design simplifies
            complexity and helps users work smarter through thoughtful, consistent, and human-centered experiences.
          </p>
        </section>

        <Link to="/worktual" className={styles.caseStudy}>
          <div className={styles.caseStudyRow}>
            <div className={styles.caseStudyText}>
              <p className={styles.caseStudyLabel}>Case Study</p>
              <h2 className={styles.caseStudyTitle}>
                The Problem Wasn't Data Quality. It Was Perception Architecture.
              </h2>
              <p className={styles.caseStudyDesc}>
                I'm a UI/UX Designer focused on creating intuitive, scalable interfaces for enterprise SaaS
                platforms. My work spans design systems, data dashboards, and Agentic AI experiences that blend
                clarity, function, and emotion. Skilled in Figma, interaction design, and motion, I believe great
                design simplifies complexity and helps users work smarter through thoughtful, consistent, and
                human-centered experiences.
              </p>
            </div>
            <div className={styles.caseStudyImageWrap}>
              <img
                className={styles.caseStudyImage}
                src={`${BASE}ai-brief-03.png`}
                alt="AI-generated deal brief — CRM interface showing deal health and recommended actions"
              />
            </div>
          </div>
        </Link>
      </main>
    </div>
  )
}
