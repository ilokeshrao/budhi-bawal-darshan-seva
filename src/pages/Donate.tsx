import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Smartphone, Building, HandHeart, Gift, Building2, Users, Utensils, Music } from "lucide-react";

const Donate = () => {
  const donationCategories = [
    {
      title: "मंदिर विकास",
      description: "मंदिर की सुविधाओं के विकास और रखरखाव के लिए",
      icon: Building2,
      color: "bg-orange-100 text-orange-800 border-orange-300",
      suggestions: ["₹101", "₹501", "₹1001", "अपनी इच्छा अनुसार"]
    },
    {
      title: "भंडारा आयोजन",
      description: "निःशुल्क भोजन और प्रसाद वितरण के लिए",
      icon: Utensils,
      color: "bg-green-100 text-green-800 border-green-300",
      suggestions: ["₹251", "₹501", "₹1101", "₹2101"]
    },
    {
      title: "भजन कार्यक्रम",
      description: "धार्मिक कार्यक्रमों और भजन संध्या के लिए",
      icon: Music,
      color: "bg-blue-100 text-blue-800 border-blue-300",
      suggestions: ["₹151", "₹301", "₹701", "₹1501"]
    },
    {
      title: "सामान्य सेवा",
      description: "मंदिर की दैनिक गतिविधियों और सेवा कार्यों के लिए",
      icon: HandHeart,
      color: "bg-purple-100 text-purple-800 border-purple-300",
      suggestions: ["₹51", "₹151", "₹351", "₹751"]
    }
  ];

  const paymentMethods = [
    {
      title: "UPI / QR Code",
      description: "त्वरित और सुरक्षित भुगतान",
      icon: Smartphone,
      status: "जल्द जोड़ा जाएगा",
      color: "text-blue-600"
    },
    {
      title: "Bank Transfer",
      description: "सीधे बैंक खाते में स्थानांतरण",
      icon: Building,
      status: "विवरण जल्द उपलब्ध",
      color: "text-green-600"
    },
    {
      title: "मंदिर में सीधे दान",
      description: "मंदिर की दान पेटी में सीधे दान करें",
      icon: Gift,
      status: "उपलब्ध",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
              दान करें / सेवा करें
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-6"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-red-700 font-semibold mb-4">
                🙏 "सेवा में ही श्री श्याम का सच्चा पूजन है।"
              </p>
              <p className="text-lg text-orange-700">
                आप मंदिर विकास, भंडारा, भजन कार्यक्रमों या किसी सेवा के लिए दान कर सकते हैं।
              </p>
            </div>
          </div>

          {/* Donation Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-800 mb-8">
              दान की श्रेणियाँ
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {donationCategories.map((category, index) => (
                <Card key={index} className="border-orange-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <category.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-orange-800">
                          {category.title}
                        </CardTitle>
                        <Badge className={category.color}>
                          सेवा श्रेणी
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-orange-700 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div>
                      <p className="text-sm font-medium text-orange-800 mb-2">सुझावित राशि:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.suggestions.map((amount, idx) => (
                          <Badge key={idx} variant="outline" className="text-orange-600 border-orange-300">
                            {amount}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-800 mb-8">
              🪔 दान करने के तरीके
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="border-orange-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <method.icon className={`h-12 w-12 mx-auto mb-4 ${method.color}`} />
                    <h3 className="font-bold text-orange-800 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-orange-700 text-sm mb-3 leading-relaxed">
                      {method.description}
                    </p>
                    <Badge 
                      variant={method.status === "उपलब्ध" ? "default" : "secondary"}
                      className={method.status === "उपलब्ध" ? "bg-green-600" : ""}
                    >
                      {method.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* UPI QR Code Section */}
          <div className="mb-16">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-8 text-center">
                <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  UPI / QR Code भुगतान
                </h3>
                <div className="bg-white p-8 rounded-lg shadow-inner max-w-sm mx-auto mb-6">
                  <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">QR Code जल्द जोड़ा जाएगा</p>
                    </div>
                  </div>
                </div>
                <p className="text-blue-700 font-medium">
                  ✅ UPI ID और QR Code जल्द उपलब्ध होगा
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact for Donation */}
          <div className="mb-16">
            <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <Heart className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  दान संबंधी जानकारी
                </h3>
                <p className="text-lg text-red-700 leading-relaxed max-w-3xl mx-auto mb-6">
                  दान करने से पहले कृपया संपर्क करें। हम आपको सभी भुगतान विकल्पों की पूरी जानकारी देंगे 
                  और आपके दान का सदुपयोग सुनिश्चित करेंगे।
                </p>
                <div className="space-y-2">
                  <div className="text-red-800 font-bold text-xl">
                    📞 संपर्क करें: +91 8955730516
                  </div>
                  <div className="text-red-700 font-medium">
                    संपर्क व्यक्ति: Lokesh
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div>
            <Card className="border-orange-200">
              <CardContent className="p-8">
                <Users className="h-16 w-16 text-orange-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center text-orange-800 mb-6">
                  हमारे मूल्य
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">पारदर्शिता</h4>
                    <p className="text-orange-700 text-sm">
                      हर दान का हिसाब-किताब पूरी पारदर्शिता के साथ
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">सेवा भावना</h4>
                    <p className="text-orange-700 text-sm">
                      सभी दान राशि केवल सेवा कार्यों में उपयोग
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">समुदायिक कल्याण</h4>
                    <p className="text-orange-700 text-sm">
                      समाज के सभी वर्गों का कल्याण हमारा लक्ष्य
                    </p>
                  </div>
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

export default Donate;