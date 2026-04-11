import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, User, ChevronRight, X, MapPin, Calendar, Phone, Newspaper, ExternalLink, Shield } from 'lucide-react';
import { SegmentType, AppEvent } from '../types';
import { VENDORS as DEFAULT_VENDORS, EVENTS as DEFAULT_EVENTS, SITE_CONTENT } from '../constants';

const SEGMENTS: { id: SegmentType; name: string; icon: any; color: string; description: string; image: string }[] = [
  { 
    id: 'health_management', 
    name: 'Health Management', 
    icon: User, 
    color: 'indigo',
    description: 'Innovative healthcare initiatives and wellness programs.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'environmental_activities', 
    name: 'Environmental Activities', 
    icon: Award, 
    color: 'green',
    description: 'Protecting our planet through active conservation efforts.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'skill_development', 
    name: 'Skill Development', 
    icon: Briefcase, 
    color: 'purple',
    description: 'Empowering individuals through education and training.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'waste_management', 
    name: 'Waste Management', 
    icon: Briefcase, 
    color: 'blue',
    description: 'Sustainable solutions for waste reduction and recycling.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  },
];

const Home = () => {
  const [selectedSegmentId, setSelectedSegmentId] = React.useState<SegmentType | null>(null);
  const selectedSegment = SEGMENTS.find(s => s.id === selectedSegmentId);

  return (
    <div>
      {/* Management Segments Section */}
      <section id="segments" className="pt-20 pb-12 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="flex items-center gap-4">
                {SITE_CONTENT.shirishLogoUrl && (
                  <img 
                    src={SITE_CONTENT.shirishLogoUrl} 
                    alt="SHIRISH Logo" 
                    className="w-16 h-16 object-contain mix-blend-screen mt-[7px]"
                    referrerPolicy="no-referrer"
                  />
                )}
                <h2 className="text-5xl font-extrabold tracking-tight text-white mt-[6px]">{SITE_CONTENT.segmentsTitle}</h2>
              </div>
            </div>
            <div 
              className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed rich-text-content text-justify"
              dangerouslySetInnerHTML={{ __html: SITE_CONTENT.segmentsSubtitle }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SEGMENTS.map((segment) => (
              <motion.button
                key={segment.id}
                whileHover={{ y: -15, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedSegmentId(segment.id)}
                className="relative group h-[28rem] rounded-[2.5rem] overflow-hidden text-left shadow-2xl shadow-brand-dark/20"
              >
                <img 
                  src={segment.image} 
                  alt={segment.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{segment.name}</h3>
                  <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {segment.description}
                  </p>
                  <div className="mt-6 flex items-center text-white text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                    Explore Impact <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Segment Details Modal */}
      {selectedSegmentId && selectedSegment && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedSegmentId(null)}
            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
          ></motion.div>
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-brand-primary rounded-[3rem] shadow-2xl overflow-hidden flex flex-col border border-white/10"
          >
            {/* Modal Header */}
            <div className="relative h-64 sm:h-80 bg-brand-primary overflow-hidden">
              <img 
                src={selectedSegment.image} 
                alt={selectedSegment.name}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent"></div>
              <button 
                onClick={() => setSelectedSegmentId(null)}
                className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white transition-all z-10 hover:rotate-90"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs mb-4">
                  <span>Our Strategic Pillar</span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">{selectedSegment.name}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto p-10 sm:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Vendors Section */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Strategic Partners</h3>
                  </div>
                  <div className="space-y-8">
                    {DEFAULT_VENDORS.filter(v => v.segment === selectedSegmentId).map(vendor => (
                      <div key={vendor.id} className="group p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-brand-secondary/30 hover:bg-white/10 hover:shadow-xl transition-all duration-300">
                        <h4 className="font-bold text-white text-xl mb-3">{vendor.name}</h4>
                        <div 
                          className="text-white/70 mb-6 leading-relaxed rich-text-content"
                          dangerouslySetInnerHTML={{ __html: vendor.description }}
                        />
                        <div className="flex flex-wrap gap-6">
                          {vendor.contact && (
                            <div className="flex items-center gap-2 text-sm text-white/60 font-semibold">
                              <Phone size={16} className="text-white" />
                              {vendor.contact}
                            </div>
                          )}
                          {vendor.link && (
                            <a href={vendor.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-white font-bold hover:underline">
                              Official Website <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                    {DEFAULT_VENDORS.filter(v => v.segment === selectedSegmentId).length === 0 && (
                      <div className="text-center py-16 bg-white/5 rounded-[2rem] border border-dashed border-white/10">
                        <p className="text-white/40 font-medium italic">No partners currently listed for this pillar.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Events Section */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white">
                      <Newspaper size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Impact Activities</h3>
                  </div>
                  <div className="space-y-8">
                    {DEFAULT_EVENTS.filter(e => e.segment === selectedSegmentId).map(event => (
                      <div key={event.id} className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-brand-secondary/30 hover:bg-white/10 hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start mb-4 gap-4">
                          <h4 className="font-bold text-white text-xl">{event.title}</h4>
                          <div className="flex-shrink-0 flex items-center gap-2 text-xs font-extrabold text-white bg-white/10 px-3 py-1.5 rounded-full">
                            <Calendar size={14} />
                            {event.date}
                          </div>
                        </div>
                        <div 
                          className="text-white/70 mb-6 leading-relaxed rich-text-content"
                          dangerouslySetInnerHTML={{ __html: event.description }}
                        />
                        <div className="flex flex-wrap gap-6">
                          {event.location && (
                            <div className="flex items-center gap-2 text-sm text-white/60 font-semibold">
                              <MapPin size={16} className="text-white" />
                              {event.location}
                            </div>
                          )}
                          {event.link && (
                            <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-white font-bold hover:underline">
                              Activity Details <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                    {DEFAULT_EVENTS.filter(e => e.segment === selectedSegmentId).length === 0 && (
                      <div className="text-center py-16 bg-white/5 rounded-[2rem] border border-dashed border-white/10">
                        <p className="text-white/40 font-medium italic">No activities currently scheduled.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      {/* Contact Section */}
      <section id="contact" className="py-6 bg-brand-primary/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex justify-center items-center gap-2 text-white font-bold tracking-widest uppercase text-sm mb-4">
              <Phone size={16} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight text-white">{SITE_CONTENT.contactTitle}</h2>
          </div>

          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-white/10 hover:border-brand-secondary/50 hover:bg-white/10 transition-all duration-500 shadow-2xl shadow-brand-dark/20">
            <div className="relative z-10 text-center">
              <div 
                className="text-white/70 text-lg mb-6 leading-relaxed rich-text-content text-justify"
                dangerouslySetInnerHTML={{ __html: SITE_CONTENT.contactSubtitle }}
              />
              <div className="text-white/90 text-base font-medium space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <p>Email: {SITE_CONTENT.contactEmail}</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <p>Mobile: {SITE_CONTENT.contactPhone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
