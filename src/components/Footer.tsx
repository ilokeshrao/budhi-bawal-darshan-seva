import { Link } from "react-router-dom";
import { Building2, Phone, MapPin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-800 to-red-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8" />
              <span className="text-xl font-bold">Katushyam Ji Mandir</span>
            </div>
            <p className="text-orange-100 text-sm leading-relaxed">
              एक पवित्र स्थल जहाँ भक्तों की श्रद्धा हर दिन नया रंग लेती है।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">त्वरित लिंक</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-orange-100 hover:text-white transition-colors">मंदिर के बारे में</Link></li>
              <li><Link to="/events" className="text-orange-100 hover:text-white transition-colors">आयोजन</Link></li>
              <li><Link to="/gallery" className="text-orange-100 hover:text-white transition-colors">गैलरी</Link></li>
              <li><Link to="/donate" className="text-orange-100 hover:text-white transition-colors">दान करें</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">सेवाएं</h3>
            <ul className="space-y-2 text-sm text-orange-100">
              <li>एकादशी विशेष पूजन</li>
              <li>भजन संध्या</li>
              <li>निःशुल्क भंडारा</li>
              <li>वार्षिक मेला</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">संपर्क</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-300 mt-0.5 flex-shrink-0" />
                <span className="text-orange-100">Budhi Bawal, Alwar, Rajasthan - 301028</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-300" />
                <span className="text-orange-100">+91 8955730516</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-300" />
                <span className="text-orange-100">Website Owner: Lokesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-600 mt-8 pt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-orange-100">
            <Heart className="h-4 w-4 text-red-400" />
            <span className="text-sm">© 2024 Katushyam Ji Mandir, Budhi Bawal. सभी अधिकार सुरक्षित।</span>
          </div>
        </div>
      </div>
    </footer>
  );
};