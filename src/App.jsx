import React, { useState } from 'react';
import './App.css';

// Import images with correct filenames from GitHub
import heroBackground from './assets/hero-background.png';
import accountabilityChart from './assets/accountability-chart.png';
import eterviaLogo from './assets/logo1.jpg';
import ryanHarris from './assets/ryan-harris-clean.png';
import donMoxley from './assets/don-moxley-clean.png';
import jayPatel from './assets/jay-patel-clean.png';
import denishVaghasiya from './assets/denish-vaghasiya-clean.png';

// Import components
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import BlogPost1 from './components/BlogPost1';
import BlogPost2 from './components/BlogPost2';
import BlogPost3 from './components/BlogPost3';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'terms':
        return <TermsConditions onBack={() => setCurrentView('home')} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentView('home')} />;
      case 'blog1':
        return <BlogPost1 onBack={() => setCurrentView('home')} />;
      case 'blog2':
        return <BlogPost2 onBack={() => setCurrentView('home')} />;
      case 'blog3':
        return <BlogPost3 onBack={() => setCurrentView('home')} />;
      default:
        return renderHomePage();
    }
  };

  const renderHomePage = () => (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={eterviaLogo} alt="Etervia" className="logo-image" />
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#science">Science</a>
            <a href="#team">Team</a>
            <a href="#blog">Blog</a>
            <a href="#early-access" className="cta-button">Early Access</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${heroBackground})`}}>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                The End of <span className="highlight">Wellness Silos</span>
              </h1>
              <p className="hero-subtitle">
                Etervia's adaptive wellness engine combines AI-driven personalization with measurable health outcomes, creating truly integrated wellness experiences.
              </p>
              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-icon">🎯</div>
                  <span>Personalized AI Coaching</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <span>Measurable Outcomes</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔄</div>
                  <span>Adaptive Learning</span>
                </div>
              </div>
              <div className="hero-cta">
                <form onSubmit={handleEmailSubmit} className="email-form">
                  <input
                    type="email"
                    placeholder="Enter your email for early access"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                  />
                  <button type="submit" className="cta-button primary">
                    {isSubmitted ? '✓ Joined!' : 'Join Early Access'}
                  </button>
                </form>
                <p className="privacy-note">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="chart-container">
                <h3>Digital Accountability Impact</h3>
                <img src={accountabilityChart} alt="Success rates: 73% with AI coaching vs 23% going solo" className="accountability-chart" />
                <p className="chart-caption">
                  Users with AI coaching achieve 73% better results than going solo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>Redefining Wellness Through AI</h2>
            <p>Etervia breaks down the barriers between fitness, nutrition, and mental wellness with intelligent, adaptive technology.</p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">🧠</div>
              <h3>Intelligent Adaptation</h3>
              <p>Our AI learns from your progress, preferences, and lifestyle to continuously optimize your wellness journey.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🎯</div>
              <h3>Precision Targeting</h3>
              <p>Advanced algorithms create personalized plans that evolve with your changing needs and goals.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">📈</div>
              <h3>Measurable Results</h3>
              <p>Track real outcomes with comprehensive analytics that prove the effectiveness of your wellness strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="science">
        <div className="container">
          <div className="science-content">
            <div className="science-text">
              <h2>The Science Behind Adaptive Wellness</h2>
              <p>
                Etervia's approach is grounded in cutting-edge research from exercise physiology, 
                behavioral psychology, and machine learning. Our adaptive wellness engine processes 
                multiple data streams to create truly personalized experiences.
              </p>
              <div className="science-points">
                <div className="science-point">
                  <h4>Behavioral Science Integration</h4>
                  <p>Leveraging proven behavior change models to create sustainable habits</p>
                </div>
                <div className="science-point">
                  <h4>Exercise Physiology</h4>
                  <p>Evidence-based training principles adapted to individual capabilities</p>
                </div>
                <div className="science-point">
                  <h4>Machine Learning</h4>
                  <p>Continuous optimization based on real-world performance data</p>
                </div>
              </div>
            </div>
            <div className="science-visual">
              <div className="science-stats">
                <div className="stat">
                  <div className="stat-number">73%</div>
                  <div className="stat-label">Success Rate with AI Coaching</div>
                </div>
                <div className="stat">
                  <div className="stat-number">3x</div>
                  <div className="stat-label">Better Adherence</div>
                </div>
                <div className="stat">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">User Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <h2>Meet the Team</h2>
            <p>Experienced leaders combining deep expertise in technology, health science, and business innovation.</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src={ryanHarris} alt="Ryan Harris" />
              </div>
              <h3>Ryan Harris</h3>
              <p className="member-title">Founder, CEO</p>
              <p className="member-bio">
                Passionate entrepreneur with 25 years of experience in fitness and nutrition. 
                Multiple-time founder and founding team member who understands the frustrations 
                of fragmented wellness solutions firsthand.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src={donMoxley} alt="Don Moxley" />
              </div>
              <h3>Don Moxley</h3>
              <p className="member-title">Head of Applied Science</p>
              <p className="member-bio">
                Exercise physiologist with 30+ years in elite sports and human performance. 
                Former Director at Ohio State, bringing Olympic-level expertise to everyday wellness.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src={jayPatel} alt="Jay Patel" />
              </div>
              <h3>Jay Patel</h3>
              <p className="member-title">Head of Product & Technology</p>
              <p className="member-bio">
                Product leader focused on creating intuitive experiences that actually work in real life. 
                Expertise in building products from concept to launch, guiding cross-functional teams.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src={denishVaghasiya} alt="Denish Vaghasiya" />
              </div>
              <h3>Denish Vaghasiya</h3>
              <p className="member-title">Head of Technology & AI Engineering</p>
              <p className="member-bio">
                AI and technology expert building the intelligent systems that make personalized 
                wellness possible at scale for rapid growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>Latest Insights</h2>
            <p>Explore the science, technology, and philosophy behind adaptive wellness.</p>
          </div>
          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-content">
                <h3>Why One-Size-Fits-All Fitness Plans Don't Work</h3>
                <p>The fundamental flaw in traditional fitness approaches and how personalization changes everything.</p>
                <div className="blog-meta">
                  <span className="read-time">5 min read</span>
                  <button onClick={() => setCurrentView('blog1')} className="read-more">Read More</button>
                </div>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-content">
                <h3>The Science Behind Adaptive Wellness</h3>
                <p>How behavioral psychology and machine learning combine to create sustainable health habits.</p>
                <div className="blog-meta">
                  <span className="read-time">7 min read</span>
                  <button onClick={() => setCurrentView('blog2')} className="read-more">Read More</button>
                </div>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-content">
                <h3>How AI is Revolutionizing Personal Health</h3>
                <p>The technology behind intelligent health coaching and what it means for your wellness journey.</p>
                <div className="blog-meta">
                  <span className="read-time">6 min read</span>
                  <button onClick={() => setCurrentView('blog3')} className="read-more">Read More</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="early-access">
        <div className="container">
          <div className="early-access-content">
            <h2>Ready to Transform Your Wellness Journey?</h2>
            <p>Join thousands of others who are already experiencing the future of personalized health.</p>
            <form onSubmit={handleEmailSubmit} className="email-form large">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input large"
                required
              />
              <button type="submit" className="cta-button primary large">
                {isSubmitted ? '✓ Welcome to Etervia!' : 'Get Early Access'}
              </button>
            </form>
            <p className="early-access-note">
              Be among the first to experience adaptive wellness technology. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src={eterviaLogo} alt="Etervia" className="footer-logo" />
              <p>Adaptive wellness technology for a healthier tomorrow.</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                  <li><button onClick={() => setCurrentView('privacy')} className="link-button">Privacy Policy</button></li>
                  <li><button onClick={() => setCurrentView('terms')} className="link-button">Terms & Conditions</button></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Connect</h4>
                <ul>
                  <li><a href="https://instagram.com/eterviahealth" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="#early-access">Early Access</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Etervia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}

export default App;
