import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ArrowLeft } from 'lucide-react';

const TermsConditions = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button onClick={onBack} variant="outline" className="mb-4">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-gray-600">Etervia, Inc.</p>
          <p className="text-sm text-gray-500">Effective Date: September 1, 2025 | Last Updated: August 28, 2025</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-red-600">IMPORTANT LEGAL NOTICE - PLEASE READ CAREFULLY</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">
              THESE TERMS AND CONDITIONS CONTAIN IMPORTANT INFORMATION ABOUT YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS. 
              BY ACCESSING OR USING THE ETERVIA SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS. 
              THESE TERMS INCLUDE A BINDING ARBITRATION AGREEMENT AND CLASS ACTION WAIVER IN SECTION 15, WHICH AFFECTS YOUR RIGHTS TO RESOLVE DISPUTES WITH ETERVIA. 
              PLEASE REVIEW THIS PROVISION CAREFULLY.
            </p>
            <p className="text-sm text-gray-700 mt-4">
              THESE TERMS ALSO INCLUDE IMPORTANT MEDICAL DISCLAIMERS, LIABILITY LIMITATIONS, AND ASSUMPTION OF RISK PROVISIONS THAT LIMIT ETERVIA'S LIABILITY FOR YOUR USE OF THE SERVICES.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="text-gray-700 mb-4">
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("you," "your," or "User") and Etervia, Inc., 
              a corporation organized under the laws of Florida ("Etervia," "we," "us," or "our"). These Terms govern your access to and use of the 
              Etervia platform, mobile applications, website located at www.etervia.com, and all related services, features, content, and applications 
              offered by Etervia (collectively, the "Services").
            </p>
            <p className="text-gray-700 mb-4">
              By creating an account, accessing, downloading, installing, or using any part of the Services, or by clicking "I Accept," "Sign Up," 
              or any similar button or checkbox, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, 
              which is incorporated herein by reference. If you do not agree to these Terms, you may not access or use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. ELIGIBILITY AND ACCOUNT REGISTRATION</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Age and Capacity Requirements</h3>
            <p className="text-gray-700 mb-4">
              You must be at least eighteen (18) years old to create an account or use the Services. By using the Services, you represent and warrant 
              that you are at least 18 years old and have the legal capacity to enter into these Terms.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Account Registration</h3>
            <p className="text-gray-700 mb-4">
              To access certain features of the Services, you must create an account by providing accurate, complete, and current information as prompted 
              by the registration process. You agree to maintain and promptly update your account information to keep it accurate, complete, and current at all times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. DESCRIPTION OF SERVICES</h2>
            <p className="text-gray-700 mb-4">
              Etervia provides an AI-driven health and fitness platform that delivers personalized exercise and nutrition plans based on user data, 
              preferences, and goals. The Services include mobile applications, web-based platforms, and related features designed to help users 
              achieve their health and fitness objectives through customized recommendations and guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. MEDICAL DISCLAIMERS AND HEALTH WARNINGS</h2>
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">4.1 NOT MEDICAL ADVICE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 font-semibold mb-2">
                  YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT ETERVIA IS NOT PROVIDING MEDICAL ADVICE THROUGH THE SERVICES.
                </p>
                <p className="text-yellow-700">
                  The Services, including all content, features, recommendations, exercise plans, nutrition guidance, and other information provided 
                  through the platform are intended for educational and informational purposes only and are not intended as medical advice, diagnosis, or treatment.
                </p>
              </CardContent>
            </Card>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 CONSULT HEALTHCARE PROFESSIONALS</h3>
              <p className="text-gray-700 mb-4">
                You should always consult with a qualified healthcare professional before beginning any exercise program, making dietary changes, 
                or making any health-related decisions based on information provided through the Services. This is especially important if you are 
                pregnant, nursing, have any medical conditions, take medications, have a history of heart problems, or have any other health concerns.
              </p>
              <p className="text-gray-700 font-semibold">
                IF YOU HAVE ANY HEALTH-RELATED QUESTIONS OR CONCERNS, PLEASE CONSULT YOUR PHYSICIAN OR OTHER HEALTHCARE PROVIDER PROMPTLY. 
                IF YOU HAVE A MEDICAL EMERGENCY, CALL YOUR PHYSICIAN OR 911 IMMEDIATELY.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. ASSUMPTION OF RISK AND LIABILITY LIMITATIONS</h2>
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">5.1 ASSUMPTION OF RISK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 font-semibold mb-2">
                  YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SERVICES AND PARTICIPATION IN ANY EXERCISE, FITNESS, 
                  OR WELLNESS ACTIVITIES RECOMMENDED OR FACILITATED THROUGH THE SERVICES CARRY INHERENT AND SIGNIFICANT RISKS OF 
                  PROPERTY DAMAGE, BODILY INJURY, DISABILITY, OR DEATH.
                </p>
                <p className="text-red-700">
                  You voluntarily assume all known and unknown risks associated with using the Services and participating in any recommended activities.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. DATA OWNERSHIP AND USAGE RIGHTS</h2>
            <p className="text-gray-700 mb-4">
              You retain ownership of the personal information and data that you provide to Etervia through the Services. However, by using the Services, 
              you grant Etervia certain rights to use this data as described in these Terms and our Privacy Policy.
            </p>
            <p className="text-gray-700 mb-4">
              Etervia may use anonymized, aggregated, or de-identified data for research, analysis, and algorithm improvement. Personally identifiable 
              data is not used for AI training that benefits other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. CONTACT INFORMATION</h2>
            <p className="text-gray-700">
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
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

export default TermsConditions;
