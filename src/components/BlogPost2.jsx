import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BlogPost2 = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#A4D233] to-[#8BC34A] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <button 
            onClick={onBack}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </button>
          
          <div className="mb-6">
            <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Science
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Science Behind Adaptive Wellness
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Explore the research and methodology behind our adaptive wellness engine, 
              from exercise physiology to machine learning algorithms.
            </p>
            <div className="flex items-center text-white/80 text-sm">
              <span>7 min read</span>
              <span className="mx-2">•</span>
              <span>October 8, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Adaptive wellness isn't just a buzzword—it's a scientifically-grounded approach that combines 
            decades of exercise physiology research with cutting-edge machine learning. Here's the science 
            that makes truly personalized health and fitness possible.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Foundation: Exercise Physiology</h2>

          <p className="mb-6 leading-relaxed">
            At its core, adaptive wellness is built on fundamental principles of exercise physiology. 
            The human body adapts to training stress through a process called supercompensation—where 
            the body not only recovers from exercise but becomes stronger, faster, or more efficient 
            than before.
          </p>

          <p className="mb-8 leading-relaxed">
            However, this adaptation process is highly individual. Factors like genetics, training history, 
            current fitness level, recovery capacity, and external stressors all influence how your body 
            responds to exercise. Traditional programs ignore these differences, but adaptive systems 
            embrace and leverage them.
          </p>

          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Physiological Principles</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Progressive Overload:</strong> Gradually increasing training demands to stimulate adaptation</li>
              <li><strong>Specificity:</strong> Training adaptations are specific to the type of exercise performed</li>
              <li><strong>Individual Variation:</strong> People respond differently to the same training stimulus</li>
              <li><strong>Recovery:</strong> Adaptation occurs during rest, not during exercise itself</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Heart Rate Variability: The Recovery Window</h2>

          <p className="mb-6 leading-relaxed">
            One of the most powerful tools in adaptive wellness is Heart Rate Variability (HRV) monitoring. 
            HRV measures the variation in time between heartbeats and provides insight into your autonomic 
            nervous system's state—essentially telling us how well your body is recovering from stress.
          </p>

          <p className="mb-6 leading-relaxed">
            Research published in the European Journal of Applied Physiology has shown that HRV can predict 
            training readiness with remarkable accuracy. When HRV is elevated, it indicates good recovery 
            and readiness for intense training. When suppressed, it suggests the need for lighter activity 
            or rest.
          </p>

          <p className="mb-8 leading-relaxed">
            Our adaptive algorithms use HRV data, combined with other metrics like sleep quality and 
            subjective wellness scores, to automatically adjust training intensity and volume. This 
            prevents overtraining while ensuring you're always training at the optimal intensity for adaptation.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Goldilocks Principle of Training</h2>

          <p className="mb-6 leading-relaxed">
            The principle of progressive overload—gradually increasing training demands over time—is 
            fundamental to fitness improvement. However, the challenge lies in determining the right 
            amount of progression: too little and you plateau, too much and you risk injury or burnout.
          </p>

          <p className="mb-8 leading-relaxed">
            Adaptive systems solve this by continuously monitoring your response to training loads. 
            Using machine learning algorithms, the system learns your individual adaptation patterns 
            and adjusts progression rates accordingly. This ensures you're always in the "Goldilocks 
            zone" of optimal challenge—not too easy, not too hard, but just right.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Measuring Training Load</h3>
          <p className="mb-6 leading-relaxed">
            Modern adaptive systems track multiple dimensions of training load:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">External Load</h4>
              <p className="text-gray-700 text-sm">
                The work you actually perform—weights lifted, distance covered, time exercised
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Internal Load</h4>
              <p className="text-gray-700 text-sm">
                Your body's physiological response—heart rate, perceived exertion, recovery metrics
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Circadian Rhythms and Timing</h2>

          <p className="mb-6 leading-relaxed">
            Recent research in chronobiology has revealed the importance of timing in health and fitness. 
            Your circadian rhythms influence everything from hormone production to muscle protein synthesis 
            to cognitive performance.
          </p>

          <p className="mb-6 leading-relaxed">
            Studies have shown that workout timing can significantly impact results. Research in the 
            Journal of Clinical Medicine found that evening workouts may be more effective for strength 
            gains, while morning sessions might be better for fat loss. However, these patterns vary 
            significantly between individuals.
          </p>

          <p className="mb-8 leading-relaxed">
            Adaptive wellness systems can learn your individual circadian patterns and optimize workout 
            timing, nutrition recommendations, and recovery protocols accordingly. This personalized 
            approach to timing can enhance results while improving adherence.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Machine Learning: Pattern Recognition at Scale</h2>

          <p className="mb-6 leading-relaxed">
            While physiological principles provide the foundation, machine learning algorithms are what 
            make true personalization possible at scale. These algorithms can process vast amounts of 
            data from multiple sources and identify patterns that would be impossible for humans to detect.
          </p>

          <p className="mb-8 leading-relaxed">
            Our machine learning models are trained on thousands of individual responses to different 
            training stimuli. They learn to predict how you'll respond to specific workouts based on 
            your historical data, current state, and similarity to other users with comparable profiles.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Multi-Modal Data Integration</h3>
          <p className="mb-6 leading-relaxed">
            One of the key advantages of adaptive wellness is its ability to integrate data from multiple sources:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#A4D233] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Wearable Devices</h4>
                <p className="text-gray-700">Heart rate, sleep quality, activity levels, and stress indicators</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#A4D233] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Subjective Assessments</h4>
                <p className="text-gray-700">Energy levels, motivation, soreness, and mood</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#A4D233] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Performance Metrics</h4>
                <p className="text-gray-700">Strength gains, endurance improvements, and skill development</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#A4D233] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Environmental Factors</h4>
                <p className="text-gray-700">Weather, schedule constraints, and available equipment</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Continuous Feedback Loop</h2>

          <p className="mb-6 leading-relaxed">
            Perhaps most importantly, adaptive wellness creates a continuous feedback loop. Every workout, 
            every meal, every night's sleep provides data that refines the system's understanding of 
            your unique physiology and preferences.
          </p>

          <p className="mb-8 leading-relaxed">
            This means the system becomes more accurate and effective over time. Unlike static programs 
            that remain the same regardless of your progress, adaptive systems evolve with you, ensuring 
            continued improvement and engagement.
          </p>

          <div className="bg-[#A4D233] text-white p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold mb-4">Experience Science-Backed Personalization</h3>
            <p className="text-lg mb-6">
              Ready to experience what happens when cutting-edge science meets personalized wellness? 
              Join the adaptive fitness revolution.
            </p>
            <button 
              onClick={onBack}
              className="bg-white text-[#A4D233] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
