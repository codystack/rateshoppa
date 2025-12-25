"use client";

import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-20 lg:px-40 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-4">Last Updated: December 24, 2025</p>

        <p className="mb-6">These Terms and Conditions (“Terms”) govern your use of the Rateshoppa website (“Website”, “Service”, “we”, “us”, or “our”). By accessing or using our Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.</p>

        <h2 className="text-2xl font-semibold mb-3">About Rateshoppa</h2>
        <p className="mb-3">Rateshoppa is a free online tool that compares foreign exchange rates from third-party providers. We do not provide financial services, process payments, or execute currency exchanges ourselves.</p>
        <p className="mb-6">Our role is to display information and redirect users to third-party providers.</p>

        <h2 className="text-2xl font-semibold mb-3">Use of the Website</h2>
        <p className="mb-6">
            You agree to use the Website only for lawful purposes and in a way that does not:
            <ul className="list-disc ml-6">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe the rights of others</li>
                <li>Interfere with the operation or security of the Website</li>
                <li>Attempt to gain unauthorised access to systems or data</li>
            </ul>
            We reserve the right to suspend or terminate access if these Terms are breached.
        </p>

        <h2 className="text-2xl font-semibold mb-3">No Financial Advice</h2>
        <p className="mb-6">
            All information provided on Rateshoppa is for informational purposes only.
            <ul className="list-disc ml-6">
                <li>We do not provide financial, investment, tax, or legal advice</li>
                <li>Exchange rates are indicative and may change at any time</li>
                <li>You are responsible for verifying rates, fees, and terms with the provider before completing any transaction</li>
            </ul>
            Any decision to exchange currency or use a third-party service is made at your own risk.
        </p>


        <h2 className="text-2xl font-semibold mb-3">Third-Party Providers and Links</h2>
        <p className="mb-6">
            Rateshoppa displays offers and links from third-party exchange providers.
            <ul className="list-disc ml-6">
                <li>We do not control or endorse these providers</li>
                <li>We are not responsible for their services, pricing, availability, or conduct</li>
                <li>When you click a link, you leave our Website and are subject to the provider’s own terms and privacy policies</li>
            </ul>
            We are not liable for any loss or dispute arising from your use of third-party services.
        </p>


        <h2 className="text-2xl font-semibold mb-3">Accuracy of Information</h2>
        <p className="mb-6">
            We make reasonable efforts to ensure information on the Website is accurate and up to date. However:
            <ul className="list-disc ml-6">
                <li>Rates may change rapidly</li>
                <li>Errors, delays, or omissions may occur</li>
            </ul>
            We do not guarantee the accuracy, completeness, or availability of any information displayed.
        </p>


        <h2 className="text-2xl font-semibold mb-3">Rate Alerts (When Available)</h2>
        <p className="mb-6">
            If you sign up for rate alerts:
            <ul className="list-disc ml-6">
                <li>Alerts are provided on a best-effort basis</li>
                <li>We do not guarantee timing, delivery, or accuracy</li>
                <li>Alerts do not constitute financial advice or guarantees</li>
            </ul>
            You can unsubscribe at any time.
        </p>


        <h2 className="text-2xl font-semibold mb-3">Intellectual Property</h2>
        <p className="mb-3">All content on the Website, including text, logos, branding, and design, is owned by or licensed to Rateshoppa and protected by intellectual property laws.</p>
        <p className="mb-6">You may not copy, reproduce, modify, distribute, or exploit any content without our prior written permission.</p>


        <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
        <p className="mb-6">
            To the fullest extent permitted by law:
            <ul className="list-disc ml-6">
                <li>Rateshoppa is provided “as is” and “as available”</li>
                <li>We are not liable for any direct, indirect, incidental, or consequential loss, including loss of money, profit, or data</li>
                <li>We are not responsible for losses resulting from reliance on exchange rate information or third-party providers</li>
            </ul>
            Nothing in these Terms excludes liability that cannot be excluded by law.
        </p>


        <h2 className="text-2xl font-semibold mb-3">Indemnity</h2>
        <p className="mb-6">
            You agree to indemnify and hold harmless Rateshoppa from any claims, damages, losses, or expenses arising from:
            <ul className="list-disc ml-6">
                <li>Your use of the Website</li>
                <li>Your breach of these Terms</li>
                <li>Your interaction with third-party providers</li>
            </ul>
        </p>


        <h2 className="text-2xl font-semibold mb-3">Privacy and Cookies</h2>
        <p className="mb-6">
            Your use of the Website is also governed by our:
            <ul className="list-disc ml-6">
                <li>Privacy Policy</li>
                <li><Link href="/cookies" className="text-[#ff0057]">Cookies Policy</Link></li>
            </ul>
            Please review these documents to understand how we handle your data.
        </p>


        <h2 className="text-2xl font-semibold mb-3">Changes to These Terms</h2>
        <p className="mb-6">We may update these Terms from time to time. Any changes will be posted on this page with an updated “Last updated” date. Continued use of the Website after changes means you accept the revised Terms.</p>


        <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
        <p className="mb-6">These Terms are governed by and interpreted in accordance with the laws of [Insert country/jurisdiction], without regard to conflict of law principles.</p>


        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-3">If you have any questions about these Terms, please contact us:</p>
        <p className="mb-6">
            <strong>Email:</strong> hello@rateshoppa.com
        </p>

    </div>
  );
}