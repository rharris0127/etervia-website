import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  ArrowRight, 
  Brain, 
  Activity, 
  Target, 
  BarChart3, 
  Smartphone, 
  Users, 
  CheckCircle, 
  Menu, 
  X,
  Mail,
  Instagram,
  ExternalLink,
  Zap,
  Heart,
  TrendingUp,
  Shield,
  Award,
  Clock,
  Play
} from 'lucide-react';
import TermsConditions from './components/TermsConditions.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import heroBackground from './assets/hero-background-enhanced.png';
import accountabilityChart from './assets/accountability-chart-fixed.png';
import wellnessIcons from './assets/wellness-icons.png';
import eterviaLogo from './assets/etervia-logo.jpg';
import ryanHarris from './assets/ryan-harris-clean.png';
import donMoxley from './assets/don-moxley-clean.png';
import jayPatel from './assets/jay-patel-clean.png';
import denishVaghasiya from './assets/denish-vaghasiya-clean.png';
import BlogPost1 from './components/BlogPost1.jsx';
import BlogPost2 from './components/BlogPost2.jsx';
import BlogPost3 from './components/BlogPost3.jsx';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleEarlyAccess = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In production, this would integrate with your email service
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const showPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const showHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'terms') {
    return <TermsConditions onBack={showHome} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={showHome} />;
  }

  if (currentPage === 'blog1') {
    return <BlogPost1 onBack={showHome} />;
  }

  if (currentPage === 'blog2') {
    return <BlogPost2 onBack={showHome} />;
  }

  if (currentPage === 'blog3') {
    return <BlogPost3 onBack={showHome} />;
  }

  return (
    <div className="min-h-screen bg-white font-wix">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
            <img 
              src={eterviaLogo} 
              alt="Etervia" 
              className="h-16 w-auto"
            />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-[#A4D233] transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('science')} className="text-gray-700 hover:text-[#A4D233] transition-colors">
                Science
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#A4D233] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-[#A4D233] transition-colors">
                Blog
              </button>
              <Button onClick={() => scrollToSection('early-access')} className="btn-etervia text-white">
                Get Early Access
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-gray-700">
                How It Works
              </button>
              <button onClick={() => scrollToSection('science')} className="block w-full text-left py-2 text-gray-700">
                Science
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
                About
              </button>
              <button onClick={() => scrollToSection('blog')} className="block w-full text-left py-2 text-gray-700">
                Blog
              </button>
              <Button onClick={() => scrollToSection('early-access')} className="btn-etervia text-white w-full mt-2">
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#A4D233]/5 to-white/90" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-[#A4D233] rounded-full animate-pulse"></div>
                <span className="text-[#A4D233] font-semibold uppercase tracking-wide text-sm">
                  Adaptive Wellness Technology
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                This Isn't Another
                <br />
                <span className="etervia-green-text">Wellness App.</span>
              </h1>
              
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
                It's the End of Wellness Silos.
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                AI-powered coaching that adapts to your life, connects your data, and delivers measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={() => scrollToSection('early-access')} 
                  className="btn-etervia text-white text-lg px-8 py-4 h-auto"
                >
                  Get Early Access <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-lg px-8 py-4 h-auto border-[#A4D233] text-[#A4D233] hover:bg-[#A4D233] hover:text-white"
                >
                  <Play className="mr-2" size={20} />
                  See How It Works
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-[#A4D233]" size={16} />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-[#A4D233]" size={16} />
                  <span>Early Access Free</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Etervia?</h3>
                  <p className="text-gray-600">Digital accountability drives real results</p>
                </div>
                
                <img 
                  src={accountabilityChart} 
                  alt="Fitness Success Rates: 73% with AI Coaching vs 23% Going Solo" 
                  className="w-full h-auto rounded-lg mb-6"
                />
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold etervia-green-text">15+</div>
                    <div className="text-xs text-gray-600">Data Sources</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold etervia-green-text">24/7</div>
                    <div className="text-xs text-gray-600">AI Coaching</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold etervia-green-text">100%</div>
                    <div className="text-xs text-gray-600">Personalized</div>
                  </div>
                </div>
              </div>
              
              {/* Floating wellness icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#A4D233]/10 rounded-full flex items-center justify-center animate-bounce">
                <Brain className="text-[#A4D233]" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#A4D233]/10 rounded-full flex items-center justify-center animate-pulse">
                <Heart className="text-[#A4D233]" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built to Fix What's
              <br />
              <span className="etervia-green-text">Broken in Wellness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Etervia brings everything together - personalized fitness plans, real nutrition support, 
              smart coaching tools, and progress tracking - all in one intuitive platform that adapts to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-etervia transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#A4D233] to-[#94C225] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">AI-Powered Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Smarter tracking that adapts to your lifestyle in real-time - finally, a coach who listens and learns.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-etervia transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#A4D233] to-[#94C225] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Smarter Nutrition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No more guessing. Get meal plans tailored to your goals, your tastes, and your real life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-etervia transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#A4D233] to-[#94C225] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Tailored Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Workouts built around your body, goals, and lifestyle - designed to evolve with your progress.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-etervia transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#A4D233] to-[#94C225] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Real Results, Visualized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track your health over time with integrated wearables, body scans, and personalized insights that actually mean something.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="etervia-green-text">One App.</span>
              <br />
              Zero Gaps.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ditch the juggling act. Etervia brings your workouts, meals, and health data into one seamless system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Smartphone className="text-[#A4D233]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Universal Integration</h3>
              <p className="text-gray-600">
                Syncs with devices you already use - Apple Health, Fitbit, Google Health, Garmin, Oura, Omron, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="text-[#A4D233]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Adaptation</h3>
              <p className="text-gray-600">
                Your plan evolves based on your performance, recovery, and lifestyle changes - no manual adjustments needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="text-[#A4D233]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Measurable Outcomes</h3>
              <p className="text-gray-600">
                Track real progress with metrics that matter - from body composition to performance improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Insight. <span className="etervia-green-text">Engineered for Impact.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Every decision in the platform is grounded in exercise science, performance physiology, 
              and real-world health data - so you get tools that actually move the needle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-etervia transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#A4D233] to-[#94C225] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Expert-Led Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Developed in collaboration with leaders in human performance, wearable tech, and recovery science.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-etervia transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#A4D233] to-[#94C225] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Backed By Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rooted in proven principles - from HRV and metabolic conditioning to behavior-based nutrition planning.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-etervia transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#A4D233] to-[#94C225] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">Connected to Your Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Syncs with devices you already use - Apple Health, Fitbit, Google Health, Garmin, Oura, Omron, and more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Science Behind <span className="etervia-green-text">Adaptive Wellness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our AI-driven approach combines cutting-edge technology with proven exercise science principles 
              to deliver truly personalized health and fitness recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Intelligent Personalization</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#A4D233] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Multi-Factor Analysis</h4>
                    <p className="text-gray-600">
                      Our AI processes your fitness level, available time, equipment, goals, and real-time biometric data 
                      to create truly personalized recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#A4D233] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Progressive Overload</h4>
                    <p className="text-gray-600">
                      Systematically increases training demands based on your progress, ensuring continuous improvement 
                      while preventing plateaus and overtraining.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#A4D233] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Recovery Integration</h4>
                    <p className="text-gray-600">
                      Incorporates sleep quality, HRV, and self-reported metrics to optimize training intensity 
                      and prevent burnout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Metrics We Track</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold etervia-green-text">24/7</div>
                  <div className="text-sm text-gray-600">Continuous Monitoring</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold etervia-green-text">15+</div>
                  <div className="text-sm text-gray-600">Data Sources</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold etervia-green-text">Real-time</div>
                  <div className="text-sm text-gray-600">Adaptations</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold etervia-green-text">100%</div>
                  <div className="text-sm text-gray-600">Personalized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Real Team Photos */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the <span className="etervia-green-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our leadership team combines decades of experience in healthcare, technology, and elite sports performance 
              to bring you the most advanced adaptive wellness platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <img 
                  src={ryanHarris} 
                  alt="Ryan Harris" 
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ryan Harris</h3>
              <p className="text-[#A4D233] font-semibold mb-4">Founder, CEO</p>
              <p className="text-gray-600">
                Passionate entrepreneur with 25 years of experience in fitness and nutrition. Multiple-time founder 
                and founding team member who understands the frustrations of fragmented wellness solutions firsthand.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img 
                  src={donMoxley} 
                  alt="Don Moxley" 
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Don Moxley</h3>
              <p className="text-[#A4D233] font-semibold mb-4">Head of Applied Science</p>
              <p className="text-gray-600">
                Exercise physiologist with 30+ years in elite sports and human performance. Former Director at Ohio State, 
                bringing Olympic-level expertise to everyday wellness.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img 
                  src={jayPatel} 
                  alt="Jay Patel" 
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Jay Patel</h3>
              <p className="text-[#A4D233] font-semibold mb-4">Head of Product & Technology</p>
              <p className="text-gray-600">
                Product leader focused on creating intuitive experiences that actually work in real life. 
                Expertise in building products people love to use daily.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img 
                  src={denishVaghasiya} 
                  alt="Denish Vaghasiya" 
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Denish Vaghasiya</h3>
              <p className="text-[#A4D233] font-semibold mb-4">Head of Technology & AI Engineering</p>
              <p className="text-gray-600">
                AI and technology expert building the intelligent systems that make personalized wellness possible 
                at scale for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest <span className="etervia-green-text">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest in adaptive wellness, AI fitness technology, and personalized health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-etervia transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-[#A4D233] text-white">AI & Fitness</Badge>
                <CardTitle className="text-xl">Why One-Size-Fits-All Fitness Plans Don't Work</CardTitle>
                <CardDescription className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  5 min read
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Discover why personalized, adaptive fitness plans are the future of health and wellness, 
                  and how AI is making true personalization possible for everyone.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setCurrentPage('blog3')}
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-etervia transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-[#A4D233] text-white">Science</Badge>
                <CardTitle className="text-xl">The Science Behind Adaptive Wellness</CardTitle>
                <CardDescription className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  7 min read
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Explore the research and methodology behind our adaptive wellness engine, 
                  from exercise physiology to machine learning algorithms.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setCurrentPage('blog3')}
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-etervia transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-[#A4D233] text-white">Technology</Badge>
                <CardTitle className="text-xl">How AI is Revolutionizing Personal Health</CardTitle>
                <CardDescription className="flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  6 min read
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn how artificial intelligence is transforming the way we approach fitness, 
                  nutrition, and overall wellness in the digital age.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setCurrentPage('blog3')}
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your <span className="etervia-green-text">Health Journey?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of health enthusiasts getting early access to the most advanced adaptive wellness platform. 
            Be among the first to experience truly personalized health and fitness.
          </p>

          <Card className="max-w-md mx-auto shadow-etervia">
            <CardHeader>
              <CardTitle className="text-2xl">Get Early Access</CardTitle>
              <CardDescription>
                Be the first to know when Etervia launches
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#A4D233] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">You're In!</h3>
                  <p className="text-gray-600">
                    Thanks for joining our early access list. We'll be in touch soon with updates on our launch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEarlyAccess} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                  <Button type="submit" className="btn-etervia text-white w-full">
                    Join Early Access <ArrowRight className="ml-2" size={16} />
                  </Button>
                  <p className="text-xs text-gray-500">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src={eterviaLogo} 
                  alt="Etervia Logo" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The adaptive wellness engine that links engagement to measurable clinical outcomes. 
                Redefining preventative health through AI-driven personalization.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/eterviahealth" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-[#A4D233] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="mailto:support@etervia.com" className="text-gray-400 hover:text-[#A4D233] transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('science')} className="block text-gray-400 hover:text-white transition-colors">
                  Science
                </button>
                <button onClick={() => scrollToSection('blog')} className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </button>
                <a href="mailto:support@etervia.com" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <button onClick={() => showPage('terms')} className="block text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </button>
                <button onClick={() => showPage('privacy')} className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Etervia, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
