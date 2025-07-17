import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building2, Calendar, Heart, MapPin, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-4">
            जय श्री श्याम 🙏
          </h1>
          <h2 className="text-2xl md:text-3xl text-red-700 mb-6">
            आपका स्वागत है Katushyam Ji Mandir, Budhi Bawal में
          </h2>
          <p className="text-lg text-orange-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            एक पवित्र स्थल जहाँ भक्तों की श्रद्धा हर दिन नया रंग लेती है।
            यहाँ आने से मन को शांति और आत्मा को सच्चा विश्वास मिलता है।
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/gallery">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 text-lg">
                <Building2 className="mr-2 h-5 w-5" />
                मंदिर दर्शन करें
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                आयोजन देखें
              </Button>
            </Link>
            <Link to="/donate">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg">
                <Heart className="mr-2 h-5 w-5" />
                दान करें
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building2 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-orange-800 mb-2">Live Darshan</h3>
                <p className="text-orange-700">जल्द शुरू होगा</p>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-red-800 mb-2">भजन संध्या</h3>
                <p className="text-red-700">नवीनतम आयोजनों की जानकारी</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-orange-800 mb-2">सेवा</h3>
                <p className="text-orange-700">दान एवं सेवा में भाग लें</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-orange-800 mb-6">संपर्क जानकारी</h3>
          <div className="flex flex-wrap justify-center gap-8 text-orange-700">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Budhi Bawal, Alwar, Rajasthan</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+91 8955730516</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Website Owner: Lokesh</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;