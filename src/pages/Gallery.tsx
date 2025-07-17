import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Image, Upload, Calendar } from "lucide-react";

const Gallery = () => {
  const galleryCategories = [
    {
      title: "श्री श्याम बाबा की मूर्ति",
      description: "मंदिर की पवित्र मूर्ति के दर्शन",
      count: "फोटो जल्द अपलोड होंगे",
      icon: Image,
      color: "bg-orange-100 text-orange-800 border-orange-300"
    },
    {
      title: "भजन संध्या का दृश्य",
      description: "भक्तों द्वारा भजन-कीर्तन के मनमोहक दृश्य",
      count: "फोटो जल्द अपलोड होंगे",
      icon: Camera,
      color: "bg-red-100 text-red-800 border-red-300"
    },
    {
      title: "भंडारा एवं सेवा",
      description: "सामुदायिक भोजन और सेवा कार्यों की तस्वीरें",
      count: "फोटो जल्द अपलोड होंगे",
      icon: Image,
      color: "bg-green-100 text-green-800 border-green-300"
    },
    {
      title: "मेले की रंगीन झलकें",
      description: "वार्षिक मेले और त्योहारों के रंगबिरंगे चित्र",
      count: "फोटो जल्द अपलोड होंगे",
      icon: Calendar,
      color: "bg-purple-100 text-purple-800 border-purple-300"
    }
  ];

  const placeholderImages = [
    {
      title: "मंदिर का मुख्य द्वार",
      category: "मंदिर",
      date: "जल्द आएगा"
    },
    {
      title: "आरती का दृश्य",
      category: "पूजा",
      date: "जल्द आएगा"
    },
    {
      title: "भक्तों की भीड़",
      category: "आयोजन",
      date: "जल्द आएगा"
    },
    {
      title: "प्रसाद वितरण",
      category: "सेवा",
      date: "जल्द आएगा"
    },
    {
      title: "सजावट का दृश्य",
      category: "त्योहार",
      date: "जल्द आएगा"
    },
    {
      title: "सामुदायिक भोजन",
      category: "भंडारा",
      date: "जल्द आएगा"
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
              चित्र दीर्घा
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-orange-700 max-w-3xl mx-auto">
              📷 दर्शन की कुछ झलकियाँ - मंदिर के पवित्र क्षणों और आयोजनों की तस्वीरें
            </p>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-800 mb-8">
              फोटो श्रेणियाँ
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryCategories.map((category, index) => (
                <Card key={index} className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="p-3 bg-orange-100 rounded-lg mx-auto mb-4 w-fit">
                      <category.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-orange-800 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-orange-700 mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    <Badge className={category.color}>
                      {category.count}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upload Notice */}
          <div className="mb-16">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-8 text-center">
                <Upload className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  फोटो अपलोड होने की प्रक्रिया में
                </h3>
                <p className="text-lg text-blue-700 leading-relaxed max-w-3xl mx-auto mb-4">
                  हम जल्द ही मंदिर की वास्तविक घटनाओं, आयोजनों और दर्शन की सुंदर तस्वीरें यहाँ अपलोड करेंगे।
                </p>
                <p className="text-blue-600 font-medium">
                  📝 नोट: आप यहाँ मंदिर की वास्तविक इवेंट्स की इमेज अपलोड कर सकते हैं
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Placeholder Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-800 mb-8">
              आगामी तस्वीरें
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholderImages.map((image, index) => (
                <Card key={index} className="border-orange-200 hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="h-12 w-12 text-orange-400 mx-auto mb-2" />
                      <p className="text-orange-600 font-medium">फोटो जल्द आएगी</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-orange-800 mb-1">
                      {image.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-orange-600 border-orange-300">
                        {image.category}
                      </Badge>
                      <span className="text-sm text-orange-600">{image.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contribution Section */}
          <div>
            <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <Camera className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  फोटो साझा करें
                </h3>
                <p className="text-lg text-red-700 leading-relaxed max-w-3xl mx-auto mb-6">
                  यदि आपके पास मंदिर के आयोजनों या दर्शन की तस्वीरें हैं, तो कृपया उन्हें हमारे साथ साझा करें। 
                  आपकी तस्वीरें अन्य भक्तों के लिए प्रेरणा का स्रोत बनेंगी।
                </p>
                <div className="text-red-800 font-medium">
                  📱 संपर्क: +91 8955730516 (Lokesh)
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

export default Gallery;