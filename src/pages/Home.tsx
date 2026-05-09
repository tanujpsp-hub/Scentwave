import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Briefcase, User, ChevronRight, X, MapPin, Calendar, Phone, Newspaper, ExternalLink, Shield, Mail } from 'lucide-react';
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
  const [scrollToImpact, setScrollToImpact] = React.useState(false);
  const [zoomedImageUrl, setZoomedImageUrl] = React.useState<string | null>(null);
  const selectedSegment = SEGMENTS.find(s => s.id === selectedSegmentId);
  const impactRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (selectedSegmentId && scrollToImpact && impactRef.current) {
      setTimeout(() => {
        impactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setScrollToImpact(false);
      }, 300);
    }
  }, [selectedSegmentId, scrollToImpact]);

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
            <div className="flex items-center justify-center gap-3 mb-6">
              {SITE_CONTENT.shirishLogoUrl && (
                <img 
                  src={SITE_CONTENT.shirishLogoUrl} 
                  alt="SHIRISH Logo" 
                  className="w-10 h-10 md:w-14 md:h-14 object-contain mix-blend-screen ml-[3px] pt-[4px]"
                  referrerPolicy="no-referrer"
                />
              )}
              <h2 className="text-5xl font-extrabold tracking-tight text-white pr-[17px]">{SITE_CONTENT.segmentsTitle}</h2>
            </div>
            <div 
              className="text-white/80 text-lg max-w-4xl mx-auto leading-relaxed rich-text-content text-justify"
              dangerouslySetInnerHTML={{ __html: SITE_CONTENT.segmentsSubtitle }}
            />

            {/* Scrolling Upcoming Events Message */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-3xl mx-auto">
              <div className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                RECENT EVENT
              </div>
              
              <motion.button 
                onClick={() => {
                  setSelectedSegmentId('health_management');
                  setScrollToImpact(true);
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex-1 w-full sm:w-auto overflow-hidden bg-yellow-400 p-1.5 rounded-full shadow-lg shadow-brand-dark/10 border border-yellow-500/30 cursor-pointer group"
              >
                <div className="overflow-hidden relative">
                  <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "-50%" }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="whitespace-nowrap flex w-fit"
                  >
                    {(() => {
                      const healthEvent = DEFAULT_EVENTS.find(e => e.segment === 'health_management');
                      const message = healthEvent 
                        ? `${healthEvent.title}${healthEvent.description ? `: ${healthEvent.description}` : ''} (${healthEvent.date})`
                        : "Latest Activity";
                      
                      return [...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center px-8">
                          <span className="text-brand-dark font-bold text-xs uppercase tracking-wider group-hover:underline decoration-brand-dark/30 underline-offset-4">
                            {message}
                          </span>
                          <div className="mx-6 h-1 w-1 rounded-full bg-brand-dark/20 flex-shrink-0" />
                        </div>
                      ));
                    })()}
                  </motion.div>
                </div>
              </motion.button>
            </div>
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
                              Contact: {vendor.contact}
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
                <div ref={impactRef}>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white">
                      <Newspaper size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Impact Activities</h3>
                  </div>
                  <div className="space-y-8">
                    {DEFAULT_EVENTS.filter(e => e.segment === selectedSegmentId).map(event => (
                      <div key={event.id} className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-brand-secondary/30 hover:bg-white/10 hover:shadow-xl transition-all duration-300">
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-2xl mb-4">{event.title}</h4>
                          <div 
                            className="text-white/70 mb-6 leading-relaxed rich-text-content"
                            dangerouslySetInnerHTML={{ __html: event.description }}
                          />
                          <div className="flex flex-col gap-3">
                            {event.location && (
                              <div className="flex items-center gap-2 text-sm text-white/60 font-semibold">
                                <MapPin size={16} className="text-white" />
                                {event.location}
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-xs font-extrabold text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit">
                              <Calendar size={14} />
                              {event.date}
                            </div>
                            {event.imageUrl && (
                              <div className="mt-4 max-w-sm">
                                <motion.img 
                                  whileHover={{ scale: 1.02 }}
                                  onClick={() => setZoomedImageUrl(event.imageUrl || null)}
                                  src={event.imageUrl} 
                                  alt={event.title}
                                  className="w-full aspect-[3/4] object-cover rounded-2xl border border-white/10 shadow-2xl cursor-zoom-in"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            )}
                            {event.link && (
                              <div className="mt-2">
                                <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-white font-bold hover:underline">
                                  Activity Details <ExternalLink size={14} />
                                </a>
                              </div>
                            )}
                          </div>
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

          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-[2.5rem] p-6 md:py-8 md:px-12 border border-white/10 hover:border-brand-secondary/50 hover:bg-white/10 transition-all duration-500 shadow-2xl shadow-brand-dark/20">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex-1 text-left">
                <div 
                  className="text-white/70 text-lg mb-4 leading-relaxed rich-text-content text-justify"
                  dangerouslySetInnerHTML={{ __html: SITE_CONTENT.contactSubtitle }}
                />
                <div className="text-white/90 text-base font-medium space-y-3">
                  <div className="flex items-center justify-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-secondary/20 transition-colors">
                      <Mail size={18} className="text-brand-secondary" />
                    </div>
                    <p>Email: {SITE_CONTENT.contactEmail}</p>
                  </div>
                  <div className="flex items-center justify-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-secondary/20 transition-colors">
                      <Phone size={18} className="text-brand-secondary" />
                    </div>
                    <p>Mobile: {SITE_CONTENT.contactPhone}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center shrink-0">
                <img 
                  src="https://lh3.googleusercontent.com/d/1swKO94S_Lj1xsjdhFYh2PDDhuBQVjv8v" 
                  alt="Contact Profile"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain mix-blend-screen"
                  referrerPolicy="no-referrer"
                />
                <p className="text-white mt-[7px] font-medium text-sm md:text-base">Mrs Shiwali Gupta</p>
                <p className="text-white/60 text-xs md:text-sm">Founder & Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Zoom Lightbox */}
      <AnimatePresence>
        {zoomedImageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImageUrl(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setZoomedImageUrl(null)}
            >
              <X size={40} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              src={zoomedImageUrl}
              alt="Zoomed Poster"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
