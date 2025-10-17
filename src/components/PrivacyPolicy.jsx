import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button onClick={onBack} variant="outline" className="mb-4">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Etervia, Inc.</p>
          <p className="text-sm text-gray-500">Effective Date: September 1, 2025 | Last Updated: August 28, 2025</p>
        </div>

        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center">
              <Shield className="mr-2" size={24} />
              Our Commitment to Your Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700">
              "Etervia values your privacy and is committed to protecting your personal information while delivering personalized wellness insights."
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Eye className="mx-auto mb-2 text-[#A4D233]" size={32} />
              <h3 className="font-semibold text-gray-900">Transparent</h3>
              <p className="text-sm text-gray-600">Clear about what we collect</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Lock className="mx-auto mb-2 text-[#A4D233]" size={32} />
              <h3 className="font-semibold text-gray-900">Secure</h3>
              <p className="text-sm text-gray-600">Your data is protected</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="mx-auto mb-2 text-[#A4D233]" size={32} />
              <h3 className="font-semibold text-gray-900">No Sharing</h3>
              <p className="text-sm text-gray-600">We don't sell your data</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="mx-auto mb-2 text-[#A4D233]" size={32} />
              <h3 className="font-semibold text-gray-900">Your Control</h3>
              <p className="text-sm text-gray-600">Delete anytime</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Plain Language Summary:</h3>
              <p className="text-gray-700">
                This Privacy Policy explains how Etervia, Inc. ("Etervia," "we," "our," or "us") collects, uses, stores, and protects your personal 
                information when you use our mobile app, website, or related services. By using Etervia, you agree to this Policy.
              </p>
            </div>
            <p className="text-gray-700">
              Etervia, Inc., a Florida corporation, provides an AI-driven health and wellness platform that offers personalized recommendations for 
              fitness, nutrition, and behavior change. This Privacy Policy applies to all users within the United States who access Etervia's website, 
              mobile applications, or any other products and services (collectively, the "Services").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Plain Language Summary:</h3>
              <p className="text-gray-700">
                We collect the information you give us (like your name and email), data from connected devices (like Apple Health or Fitbit), 
                and some technical data that helps us run the app securely.
              </p>
            </div>
            <p className="text-gray-700 mb-4">Etervia may collect the following categories of information:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Account Information:</strong> Name, email, password, phone number, and demographic data (such as gender and age)</li>
              <li><strong>Health and Fitness Data:</strong> Height, weight, workout activity, step count, sleep, calories, heart rate, and related metrics</li>
              <li><strong>Device and Usage Data:</strong> Device type, IP address, browser type, operating system, and usage logs</li>
              <li><strong>Location Data:</strong> Approximate region (not precise GPS coordinates)</li>
              <li><strong>Payment Information:</strong> Processed securely by third-party providers such as Stripe; Etervia does not store payment card details</li>
              <li><strong>Support Communications:</strong> Information you provide when contacting support@etervia.com</li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">
              We do not collect or process sensitive medical records, diagnoses, or insurance data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Plain Language Summary:</h3>
              <p className="text-gray-700">
                We use your information to personalize your experience, improve our AI coaching engine, and keep Etervia running smoothly.
              </p>
            </div>
            <p className="text-gray-700 mb-4">Etervia uses collected data to:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Provide and maintain the Services</li>
              <li>Personalize recommendations, nutrition guidance, and coaching</li>
              <li>Improve platform functionality and user experience</li>
              <li>Authenticate users and secure accounts</li>
              <li>Troubleshoot technical issues and analyze performance</li>
              <li>Communicate updates, service notices, and relevant account information</li>
              <li>Comply with applicable laws and enforce our Terms & Conditions</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. AI Data Use and Training</h2>
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Plain Language Summary:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  Your identifiable information is never used to train our AI. We only use aggregated and anonymized data to make Etervia's algorithms smarter for everyone.
                </p>
              </CardContent>
            </Card>
            <p className="text-gray-700 mt-4">
              Etervia may use anonymized, aggregated, or de-identified data for research, analysis, and algorithm improvement. Personally identifiable 
              data is not used for AI training that benefits other users. AI training data is fully anonymized to prevent individual identification, 
              and all AI processing complies with applicable privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Storage, Security, and Retention</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Plain Language Summary:</h3>
              <p className="text-gray-700">
                Your data lives securely on Amazon Web Services (AWS). We keep deleted accounts' data for 90 days and retain anonymized data for research.
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              All data is stored on secure AWS servers within the United States. Etervia employs encryption, access control, and standard administrative 
              and technical safeguards.
            </p>
            <p className="text-gray-700">
              Etervia retains personal data for as long as necessary to provide Services and for 90 days following account deletion. 
              Aggregated or anonymized data may be retained indefinitely for research and analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Plain Language Summary:</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">
                  We don't share your personal information with anyone right now — no advertisers, no partners, no data brokers.
                </p>
              </CardContent>
            </Card>
            <p className="text-gray-700 mt-4 mb-4">
              Etervia does not sell, rent, or share personal data with third parties. We may disclose information only:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>To trusted vendors who perform essential operational services (e.g., hosting, analytics, payment processing), bound by confidentiality agreements</li>
              <li>When required by law or to comply with lawful requests</li>
              <li>To protect Etervia's rights, users, or the security of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Choices and Access</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Plain Language Summary:</h3>
              <p className="text-gray-700">
                You can review or delete your account anytime and contact us if you have questions.
              </p>
            </div>
            <p className="text-gray-700">
              Users may access, correct, or delete their personal information by logging into their account or contacting support@etervia.com. 
              Etervia responds to data requests consistent with U.S. privacy standards. Upon deletion, Etervia will remove or anonymize data 
              within the 90-day retention window.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions or concerns regarding privacy or data use, contact:
            </p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Etervia, Inc.</strong><br />
                7901 4th St. N, Ste 300<br />
                St. Petersburg, FL 33702<br />
                Email: support@etervia.com<br />
                Website: www.etervia.com
              </p>
            </div>
          </section>

          <section className="border-t pt-8">
            <p className="text-sm text-gray-500 text-center">
              © 2025 Etervia, Inc. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
