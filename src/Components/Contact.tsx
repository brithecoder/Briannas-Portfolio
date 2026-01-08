import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, RotateCcw } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // ADDED THIS

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setIsSubmitted(true); // SET TO TRUE ON SUCCESS
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Submission failed:", error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }

      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "brigordon574@gmail.com",
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (313) 971-3112",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Detroit, MI, USA",
      color: "from-blue-400 to-purple-400",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-6 text-center border-2 border-pink-100"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <info.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2 font-semibold">{info.label}</h3>
              <p className="text-gray-600">{info.value}</p>
            </Card>
          ))}
        </div>

        {/* Form Card */}
        <motion.div>
          <Card className="p-8 border-2 border-pink-100 bg-gradient-to-br from-white to-purple-50/30 flex items-center justify-center min-h-[400px]">
            {!isSubmitted ? ( // USE isSubmitted HERE
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-gray-900 font-medium">Name</label>
                    <Input
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={
                        errors.name ? "border-red-500" : "border-purple-200"
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-gray-900 font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={
                        errors.email ? "border-red-500" : "border-purple-200"
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-gray-900 font-medium">Message</label>
                  <Textarea
                    placeholder="How can I help? Tell me about your project or opportunity..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={
                      errors.message ? "border-red-500" : "border-purple-200"
                    }
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-6"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                 className="mt-4 border-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-all shadow-sm hover:shadow-md rounded-full px-8"
                >
                 <RotateCcw className="mr-2 h-4 w-4" />
                  Send another message
                </Button>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
