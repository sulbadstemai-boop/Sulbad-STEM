import { useState } from 'react';
import { Mail, Send, User, Building, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const inquiryTypes = [
  { value: 'deped-partnership', label: 'DepEd Partnership Proposal' },
  { value: 'curriculum-development', label: 'Curriculum Development' },
  { value: 'content-creation', label: 'STEM Content Creation' },
  { value: 'teacher-training', label: 'Teacher Training Programs' },
  { value: 'visualization-tools', label: 'Visualization Tools & Software' },
  { value: 'consultation', label: 'General Consultation' },
  { value: 'other', label: 'Other Inquiry' },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create mailto link with form data
    const subject = encodeURIComponent(`Sulbad STEM Inquiry: ${formData.inquiryType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization}\n` +
      `Inquiry Type: ${formData.inquiryType}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:sulbadstemai@gmail.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-[hsl(220_25%_8%)] to-[hsl(220_30%_10%)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-2xl bg-[hsl(220_20%_12%)] border border-[hsl(190_90%_50%/0.3)]">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(190_90%_50%/0.2)] to-[hsl(280_70%_55%/0.2)] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[hsl(190_90%_50%)]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
            <p className="text-[hsl(220_10%_60%)] mb-6">
              Thank you for reaching out to Sulbad STEM. We've prepared your email and opened your 
              mail client. Please send the email to complete your inquiry.
            </p>
            <p className="text-sm text-[hsl(220_10%_50%)]">
              We'll get back to you at <span className="text-[hsl(190_90%_50%)]">{formData.email}</span> within 24-48 hours.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  organization: '',
                  inquiryType: '',
                  message: '',
                });
              }}
              className="mt-8 bg-gradient-to-r from-[hsl(190_90%_50%)] to-[hsl(280_70%_55%)] text-[hsl(220_25%_8%)] font-semibold"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-[hsl(220_25%_8%)] to-[hsl(220_30%_10%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(190_90%_50%/0.1)] border border-[hsl(190_90%_50%/0.3)] mb-6">
            <Mail className="w-4 h-4 text-[hsl(190_90%_50%)]" />
            <span className="text-sm text-[hsl(190_90%_50%)]">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build the <span className="text-gradient">Future</span> Together
          </h2>
          <p className="text-lg text-[hsl(220_10%_60%)] max-w-3xl mx-auto">
            Ready to transform STEM education in the Philippines? We're here to partner with 
            DepEd, schools, and educational institutions to create world-class learning experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 rounded-2xl bg-[hsl(220_20%_12%)] border border-[hsl(220_15%_20%)]">
              <h3 className="text-xl font-bold text-white mb-4">Why Partner With Us?</h3>
              <ul className="space-y-4">
                {[
                  'DepEd K-12 Curriculum Aligned Content',
                  'Specialized Visualization & Graphing Tools',
                  'Interactive Learning Materials',
                  'Expert STEM Educators & Content Creators',
                  'Custom Curriculum Development',
                  'Teacher Training & Support Programs',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[hsl(190_90%_50%)] flex-shrink-0 mt-0.5" />
                    <span className="text-[hsl(220_10%_70%)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[hsl(190_90%_50%/0.1)] to-[hsl(280_70%_55%/0.1)] border border-[hsl(190_90%_50%/0.3)]">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(190_90%_50%/0.2)] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[hsl(190_90%_50%)]" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(220_10%_50%)]">Email us at</p>
                  <a
                    href="mailto:sulbadstemai@gmail.com"
                    className="text-[hsl(190_90%_50%)] hover:underline"
                  >
                    sulbadstemai@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-[hsl(220_20%_12%)] border border-[hsl(220_15%_20%)]"
            >
              <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[hsl(220_10%_70%)]">
                    Full Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(220_10%_40%)]" />
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      className="pl-10 bg-[hsl(220_20%_10%)] border-[hsl(220_15%_20%)] text-white placeholder:text-[hsl(220_10%_40%)] focus:border-[hsl(190_90%_50%)]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[hsl(220_10%_70%)]">
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(220_10%_40%)]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="pl-10 bg-[hsl(220_20%_10%)] border-[hsl(220_15%_20%)] text-white placeholder:text-[hsl(220_10%_40%)] focus:border-[hsl(190_90%_50%)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Organization */}
                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-[hsl(220_10%_70%)]">
                    Organization/School
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(220_10%_40%)]" />
                    <Input
                      id="organization"
                      placeholder="Your organization"
                      value={formData.organization}
                      onChange={(e) => handleChange('organization', e.target.value)}
                      className="pl-10 bg-[hsl(220_20%_10%)] border-[hsl(220_15%_20%)] text-white placeholder:text-[hsl(220_10%_40%)] focus:border-[hsl(190_90%_50%)]"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <Label htmlFor="inquiryType" className="text-[hsl(220_10%_70%)]">
                    Inquiry Type *
                  </Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) => handleChange('inquiryType', value)}
                    required
                  >
                    <SelectTrigger className="bg-[hsl(220_20%_10%)] border-[hsl(220_15%_20%)] text-white focus:border-[hsl(190_90%_50%)]">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[hsl(220_20%_12%)] border-[hsl(220_15%_20%)]">
                      {inquiryTypes.map((type) => (
                        <SelectItem
                          key={type.value}
                          value={type.value}
                          className="text-white hover:bg-[hsl(220_20%_14%)] focus:bg-[hsl(220_20%_14%)]"
                        >
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 mb-8">
                <Label htmlFor="message" className="text-[hsl(220_10%_70%)]">
                  Your Message *
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-[hsl(220_10%_40%)]" />
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, requirements, or questions..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                    rows={5}
                    className="pl-10 bg-[hsl(220_20%_10%)] border-[hsl(220_15%_20%)] text-white placeholder:text-[hsl(220_10%_40%)] focus:border-[hsl(190_90%_50%)] resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[hsl(190_90%_50%)] to-[hsl(280_70%_55%)] text-[hsl(220_25%_8%)] font-semibold py-6 hover:shadow-[0_0_30px_hsl(190_90%_50%/0.4)] transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="mt-4 text-xs text-center text-[hsl(220_10%_40%)]">
                By submitting this form, you agree to our privacy policy. We'll only use your 
                information to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
