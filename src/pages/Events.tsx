import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Music, Gift, Trophy, Star } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "एकादशी विशेष भजन संध्या",
      date: "हर माह की एकादशी",
      time: "सायं 6:00 बजे से 9:00 बजे तक",
      description: "भजन-कीर्तन, आरती और प्रसाद वितरण के साथ विशेष पूजा अर्चना",
      icon: Music,
      type: "नियमित",
      color: "bg-orange-100 text-orange-800 border-orange-300"
    },
    {
      title: "वार्षिक मेला",
      date: "फाल्गुन महीना (फरवरी-मार्च)",
      time: "3 दिवसीय आयोजन",
      description: "भव्य मेले के साथ सांस्कृतिक कार्यक्रम, प्रदर्शनी और धार्मिक अनुष्ठान",
      icon: Star,
      type: "वार्षिक",
      color: "bg-red-100 text-red-800 border-red-300"
    },
    {
      title: "प्रसाद वितरण एवं भंडारा",
      date: "हर रविवार",
      time: "दोपहर 12:00 बजे से 3:00 बजे तक",
      description: "सभी भक्तों के लिए निःशुल्क भोजन और प्रसाद वितरण",
      icon: Gift,
      type: "साप्ताहिक",
      color: "bg-green-100 text-green-800 border-green-300"
    },
    {
      title: "बाल भजन प्रतियोगिता",
      date: "वार्षिक (जन्माष्टमी के दिन)",
      time: "प्रातः 10:00 बजे से दोपहर 2:00 बजे तक",
      description: "ग्राम स्तर पर बच्चों के लिए भजन प्रतियोगिता और पुरस्कार वितरण",
      icon: Trophy,
      type: "वार्षिक",
      color: "bg-purple-100 text-purple-800 border-purple-300"
    }
  ];

  const pastEvents = [
    {
      title: "होली महोत्सव 2024",
      date: "मार्च 2024",
      description: "रंगों के त्यौहार के साथ विशेष भजन संध्या और प्रसाद वितरण"
    },
    {
      title: "जन्माष्टमी समारोह 2023",
      date: "अगस्त 2023", 
      description: "श्री कृष्ण जन्माष्टमी के अवसर पर झांकी, भजन और नृत्य कार्यक्रम"
    },
    {
      title: "दीपावली मंगल मिलन 2023",
      date: "नवंबर 2023",
      description: "दीपों के त्यौहार पर सामुदायिक समारोह और मिठाई वितरण"
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
              आयोजन एवं त्यौहार
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-orange-700 max-w-3xl mx-auto">
              हमारे मंदिर में आयोजित होने वाले धार्मिक और सांस्कृतिक कार्यक्रमों की पूरी जानकारी
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-800 mb-8 flex items-center gap-3">
              <Calendar className="h-8 w-8" />
              आगामी आयोजन
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-orange-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <event.icon className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-orange-800">
                            {event.title}
                          </CardTitle>
                          <Badge className={event.color}>
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-orange-700">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-orange-700">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <p className="text-orange-800 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div className="mb-16">
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  📅 पूर्ण आयोजन कैलेंडर
                </h3>
                <p className="text-blue-700">
                  पूरा आयोजन कैलेंडर जल्द वेबसाइट पर जोड़ा जाएगा। 
                  नवीनतम अपडेट के लिए संपर्क करें: <strong>+91 8955730516</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Past Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-orange-800 mb-8 flex items-center gap-3">
              <Star className="h-8 w-8" />
              पिछले आयोजन
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="border-orange-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-orange-600 mb-3">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <h3 className="font-bold text-orange-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-orange-700 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact for Events */}
          <div>
            <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  आयोजनों में भाग लें
                </h3>
                <p className="text-lg text-red-700 leading-relaxed max-w-3xl mx-auto mb-6">
                  हमारे सभी आयोजनों में आपका स्वागत है। यदि आप किसी विशेष कार्यक्रम का आयोजन करवाना चाहते हैं 
                  या सेवा में योगदान देना चाहते हैं, तो कृपया संपर्क करें।
                </p>
                <div className="flex items-center justify-center gap-2 text-red-800 font-medium">
                  <MapPin className="h-5 w-5" />
                  <span>संपर्क: +91 8955730516 (Lokesh)</span>
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

export default Events;