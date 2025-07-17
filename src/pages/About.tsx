import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Star, Users, Calendar, Gift } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "प्राचीन एवं चमत्कारी मूर्ति",
      description: "श्री श्याम बाबा की दिव्य मूर्ति जो भक्तों की मनोकामना पूर्ण करती है"
    },
    {
      icon: Calendar,
      title: "एकादशी विशेष पूजन",
      description: "हर माह की एकादशी को विशेष पूजा अर्चना और भजन संध्या"
    },
    {
      icon: Gift,
      title: "निःशुल्क भंडारा",
      description: "भक्तों द्वारा आयोजित प्रसाद वितरण एवं सामुदायिक भोजन"
    },
    {
      icon: Star,
      title: "वार्षिक मेला",
      description: "भव्य वार्षिक मेला और सांस्कृतिक कार्यक्रमों का आयोजन"
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
              मंदिर के बारे में
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-6"></div>
          </div>

          {/* Main Content */}
          <div className="mb-16">
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="text-center bg-gradient-to-r from-orange-100 to-red-100">
                <Building2 className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-orange-800">
                  Katushyam Ji Mandir - Budhi Bawal
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-orange-800">
                  <p className="text-lg leading-relaxed mb-6">
                    <strong>"Katushyam Ji Mandir"</strong> - Budhi Bawal, अलवर ज़िले का एक प्रसिद्ध धार्मिक स्थल है।
                    यह मंदिर गाँववासियों की आस्था का केन्द्र है, जहाँ श्री श्याम बाबा का दरबार भक्तों के लिए हमेशा खुला रहता है।
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    इस पवित्र स्थल पर आने वाले भक्तों को अद्भुत शांति और आध्यात्मिक अनुभव प्राप्त होता है। 
                    मंदिर की स्थापना से लेकर आज तक, यहाँ अनगिनत चमत्कार हुए हैं जो भक्तों की श्रद्धा को और भी गहरा बनाते हैं।
                  </p>

                  <p className="text-lg leading-relaxed">
                    हमारा मंदिर न केवल धार्मिक गतिविधियों का केंद्र है, बल्कि सामुदायिक एकता और सेवा भावना का भी प्रतीक है। 
                    यहाँ जाति, धर्म, और सामाजिक भेदभाव से ऊपर उठकर सभी भक्तों का स्वागत किया जाता है।
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">
              मंदिर की विशेषताएं
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-bold text-orange-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-orange-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <div className="mb-16">
            <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  सामुदायिक सेवा
                </h3>
                <p className="text-lg text-red-700 leading-relaxed max-w-3xl mx-auto">
                  हमारा मंदिर सिर्फ पूजा-अर्चना का स्थान नहीं है, बल्कि यह एक सामुदायिक केंद्र भी है जहाँ 
                  गरीबों की सेवा, शिक्षा का प्रसार, और सामाजिक कल्याण के कार्य नियमित रूप से होते रहते हैं।
                  यहाँ आयोजित होने वाले भंडारे और सेवा कार्यक्रम समाज के सभी वर्गों को एक साथ लाते हैं।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;