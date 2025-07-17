import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, User, Clock, Navigation as NavigationIcon, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "स्थान",
      content: "Katushyam Ji Mandir, Budhi Bawal, Alwar, Rajasthan - 301028",
      color: "text-red-600"
    },
    {
      icon: Phone,
      title: "संपर्क नंबर",
      content: "+91 8955730516",
      color: "text-green-600"
    },
    {
      icon: User,
      title: "संपर्क व्यक्ति",
      content: "Lokesh",
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "ईमेल",
      content: "lokesh@example.com",
      color: "text-purple-600"
    }
  ];

  const timings = [
    { day: "सोमवार - शुक्रवार", time: "सुबह 6:00 - शाम 8:00" },
    { day: "शनिवार - रविवार", time: "सुबह 5:30 - रात 9:00" },
    { day: "एकादशी विशेष", time: "सुबह 5:00 - रात 10:00" },
    { day: "त्योहारों में", time: "पूरा दिन खुला" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
              संपर्क करें
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-orange-700 max-w-3xl mx-auto">
              हमसे जुड़ें और अपने सुझाव, प्रश्न या सेवा संबंधी जानकारी प्राप्त करें
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-800 mb-8">
              संपर्क विवरण
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <info.icon className={`h-12 w-12 mx-auto mb-4 ${info.color}`} />
                    <h3 className="font-bold text-orange-800 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-orange-700 text-sm leading-relaxed">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Temple Timings */}
          <div className="mb-16">
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-green-800">
                  मंदिर खुलने का समय
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {timings.map((timing, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-200">
                      <span className="font-medium text-green-800">{timing.day}</span>
                      <span className="text-green-700">{timing.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                    <MessageCircle className="h-6 w-6" />
                    संदेश भेजें
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-orange-800">नाम</Label>
                      <Input id="name" placeholder="आपका नाम" className="border-orange-200" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-orange-800">फोन नंबर</Label>
                      <Input id="phone" placeholder="आपका फोन नंबर" className="border-orange-200" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-orange-800">ईमेल (वैकल्पिक)</Label>
                    <Input id="email" type="email" placeholder="आपका ईमेल" className="border-orange-200" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-orange-800">विषय</Label>
                    <Input id="subject" placeholder="संदेश का विषय" className="border-orange-200" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-orange-800">संदेश</Label>
                    <Textarea 
                      id="message" 
                      placeholder="अपना संदेश यहाँ लिखें..."
                      className="border-orange-200 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    संदेश भेजें
                  </Button>
                  <p className="text-sm text-orange-600 text-center">
                    * हम जल्द से जल्द आपके संदेश का उत्तर देंगे
                  </p>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                    <NavigationIcon className="h-6 w-6" />
                    स्थान मानचित्र
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-blue-600 font-medium mb-2">Google Maps जल्द जोड़ा जाएगा</p>
                      <p className="text-blue-500 text-sm">
                        मंदिर तक पहुंचने के लिए<br />
                        Budhi Bawal, Alwar सर्च करें
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">दिशा निर्देश:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• अलवर से Budhi Bawal की दूरी लगभग 25 किमी</li>
                      <li>• निकटतम रेलवे स्टेशन: अलवर जंक्शन</li>
                      <li>• निकटतम बस स्टैंड: Budhi Bawal</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <Phone className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  तत्काल संपर्क
                </h3>
                <p className="text-lg text-red-700 leading-relaxed max-w-3xl mx-auto mb-6">
                  किसी भी प्रकार की आपातकालीन स्थिति में या तुरंत जानकारी के लिए सीधे संपर्क करें।
                  हम 24/7 उपलब्ध हैं।
                </p>
                <div className="space-y-2">
                  <div className="text-red-800 font-bold text-2xl">
                    📱 +91 8955730516
                  </div>
                  <div className="text-red-700 font-medium">
                    Lokesh (Website Owner & Temple Coordinator)
                  </div>
                  <p className="text-red-600 text-sm mt-4">
                    * व्हाट्सऐप, कॉल और SMS - सभी उपलब्ध
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;