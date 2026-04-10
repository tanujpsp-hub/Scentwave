import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { Award, Newspaper, Briefcase, ChevronRight, Phone, Shield, User, X, ZoomIn } from 'lucide-react';
import { MEDIA_COVERAGE, AWARDS, PROJECTS, SITE_CONTENT } from '../constants';

const Scentwave = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const mediaControls = useAnimationControls();
  const awardsControls = useAnimationControls();

  useEffect(() => {
    mediaControls.start({
      x: [-1440, 0], // 5 items * (256px + 32px gap) = 1440px
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Adjusted duration for shorter distance
        ease: "linear",
      },
    });
    awardsControls.start({
      x: [0, -1728], // 6 items * (256px + 32px gap) = 1728px
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 24, // Adjusted duration for shorter distance
        ease: "linear",
      },
    });
  }, [mediaControls, awardsControls]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000" 
            alt="NGO Impact" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-secondary/20 backdrop-blur-md border border-brand-secondary/30 rounded-full text-white font-bold text-sm mb-8"
            >
              <Shield size={16} />
              <div 
                className="rich-text-content"
                dangerouslySetInnerHTML={{ __html: SITE_CONTENT.heroSubtitle }}
              />
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight rich-text-content"
              dangerouslySetInnerHTML={{ __html: SITE_CONTENT.heroTitle }}
            />
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl text-justify"
            >
              {SITE_CONTENT.scentwaveDescription}
            </motion.p>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <a href="#mission-vision" className="btn-primary px-10 py-4 text-lg">
                Our Mission
              </a>
              <a href={`https://wa.me/${SITE_CONTENT.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="btn-secondary px-10 py-4 text-lg bg-green-600 text-white border-green-600 hover:bg-green-700 flex items-center gap-2">
                <Phone size={20} />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronRight size={32} className="rotate-90" />
        </div>
      </section>

      {/* Shirish Section */}
      <section id="shirish" className="pt-[35px] pb-[17px] bg-brand-primary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-white font-bold tracking-widest uppercase text-sm mb-6">
              <User size={16} />
              <span>The Visionary Behind Scentwave</span>
            </div>
            <h2 className="text-5xl font-extrabold text-white mb-8 leading-tight">{SITE_CONTENT.shirishTitle}</h2>
            <div 
              className="text-lg text-white/70 mb-10 leading-relaxed rich-text-content text-justify"
              dangerouslySetInnerHTML={{ __html: SITE_CONTENT.aboutShirish }}
            />
            
            {SITE_CONTENT.shirishQuote && (
              <div className="mb-12 p-8 bg-white/5 rounded-[2.5rem] shadow-xl border border-white/10 relative inline-block">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center text-white font-serif text-2xl">"</div>
                <div 
                  className="text-2xl font-bold italic text-white leading-tight rich-text-content"
                  dangerouslySetInnerHTML={{ __html: SITE_CONTENT.shirishQuote }}
                />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center text-white font-serif text-2xl">"</div>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="btn-primary">Our Projects</a>
              <a href="#awards" className="btn-secondary">View Achievements</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="pt-[0px] pb-[22px] bg-brand-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-4xl font-extrabold text-white mb-6">{SITE_CONTENT.corePhilosophyTitle}</h2>
                <div 
                  className="text-lg text-white/70 leading-relaxed mb-8 rich-text-content text-justify"
                  dangerouslySetInnerHTML={{ __html: SITE_CONTENT.corePhilosophyDescription }}
                />
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="pt-[19px] pb-[7px] px-10 bg-brand-secondary text-white rounded-[2.5rem] shadow-2xl shadow-emerald-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-sm">01</span>
                  {SITE_CONTENT.visionTitle}
                </h3>
                <div 
                  className="text-lg text-white/90 leading-relaxed rich-text-content text-justify"
                  dangerouslySetInnerHTML={{ __html: SITE_CONTENT.visionDescription }}
                />
              </div>
              
              <div className="pt-[14px] pb-[0px] px-10 bg-brand-secondary text-white rounded-[2.5rem] shadow-2xl shadow-emerald-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-sm">02</span>
                  {SITE_CONTENT.missionTitle}
                </h3>
                <div 
                  className="text-lg text-white/90 leading-relaxed rich-text-content text-justify"
                  dangerouslySetInnerHTML={{ __html: SITE_CONTENT.missionDescription }}
                />
              </div>
              
              <div className="md:col-span-2 pt-[8px] pb-[14px] px-10 bg-white/5 rounded-[2.5rem] border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">Our Impact in Numbers</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Communities Served', value: SITE_CONTENT.impactCommunities },
                    { label: 'Waste Recycled (Tons)', value: SITE_CONTENT.impactWaste },
                    { label: 'Lives Impacted', value: SITE_CONTENT.impactLives },
                    { label: 'Volunteers', value: SITE_CONTENT.impactVolunteers },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-4xl font-extrabold text-white mb-2">{stat.value}</p>
                      <p className="text-sm font-bold text-white/40 uppercase tracking-wider leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-[20px] pb-[20px] bg-brand-primary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
            <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-white font-bold tracking-widest uppercase text-sm mb-4">
                <Briefcase size={16} />
                <span>Our Portfolio</span>
              </div>
              <h2 className="text-5xl font-extrabold text-white leading-tight">{SITE_CONTENT.scentwaveTitle}</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                className={`group bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-brand-secondary/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 px-10 ${
                  index === 0 ? 'pt-[6px] pb-[0px]' : 'pt-[9px] pb-[0px]'
                }`}
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white shadow-sm mb-8 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-500">
                  <Briefcase size={32} />
                </div>
                <h3 className={`text-3xl font-bold text-white mb-6 ${index === 0 ? 'pt-0' : ''}`}>{project.name}</h3>
                <div 
                  className="text-white/70 text-lg mb-10 leading-relaxed rich-text-content text-justify"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section id="media" className="pt-[8px] pb-12 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 text-white font-bold tracking-widest uppercase text-sm mb-4">
                <Newspaper size={16} />
                <span>Our Voice in the World</span>
              </div>
              <h2 className="text-5xl font-extrabold text-white leading-tight">Media Coverage</h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            {/* Gradient Overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-primary to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-primary to-transparent z-10"></div>

            <motion.div 
              className="flex gap-8 items-center cursor-pointer"
              animate={mediaControls}
              onMouseEnter={() => mediaControls.stop()}
              onMouseLeave={() => {
                mediaControls.start({
                  x: [-1440, 0],
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                });
              }}
              style={{ width: "fit-content" }}
            >
              {[...MEDIA_COVERAGE, ...MEDIA_COVERAGE].map((item, index) => (
                <div 
                  key={`${item.id}-${index}`}
                  onClick={() => setSelectedImage(item.imageUrl || `https://picsum.photos/seed/${item.id}/800/600`)}
                  className="flex-shrink-0 w-64 h-80 group bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-500 relative"
                >
                  <div className="absolute inset-0 bg-brand-secondary/0 group-hover:bg-brand-secondary/20 transition-colors duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="text-white" size={32} />
                  </div>
                  <div className="h-full w-full bg-white/5 overflow-hidden relative flex items-center justify-center p-4">
                    <img 
                      src={item.imageUrl || `https://picsum.photos/seed/${item.id}/600/400`} 
                      alt="Media Coverage"
                      className="w-full h-full object-contain transition-transform duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="pt-[9px] pb-[40px] bg-brand-primary/80 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex justify-center items-center gap-2 text-white font-bold tracking-widest uppercase text-sm mb-6">
              <Award size={16} />
              <span>Recognitions of Impact</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight text-white">Celebrating Excellence</h2>
          </div>

          <div className="relative overflow-hidden">
            {/* Gradient Overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-primary/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-primary/80 to-transparent z-10"></div>

            <motion.div 
              className="flex gap-8 items-center cursor-pointer"
              animate={awardsControls}
              onMouseEnter={() => awardsControls.stop()}
              onMouseLeave={() => {
                awardsControls.start({
                  x: [0, -1728],
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 24,
                    ease: "linear",
                  },
                });
              }}
              style={{ width: "fit-content" }}
            >
              {[...AWARDS, ...AWARDS].map((award, index) => (
                <div 
                  key={`${award.id}-${index}`}
                  onClick={() => setSelectedImage(award.imageUrl || `https://picsum.photos/seed/award-${award.id}/800/600`)}
                  className="flex-shrink-0 w-64 h-80 group bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-500 relative"
                >
                  <div className="absolute inset-0 bg-brand-secondary/0 group-hover:bg-brand-secondary/20 transition-colors duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="text-white" size={32} />
                  </div>
                  <div className="h-full w-full bg-white/5 overflow-hidden relative flex items-center justify-center p-4">
                    <img 
                      src={award.imageUrl || `https://picsum.photos/seed/award-${award.id}/800/600`} 
                      alt={award.title}
                      className="w-full h-full object-contain transition-transform duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
            className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl cursor-zoom-out"
          ></motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Zoomed view" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="pt-[2px] pb-[14px] bg-brand-primary/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center pt-[0px] mb-6">
            <div className="inline-flex justify-center items-center gap-2 text-white font-bold tracking-widest uppercase text-sm mb-4">
              <Phone size={16} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tight text-white">{SITE_CONTENT.contactTitle}</h2>
          </div>

          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md rounded-[2rem] pt-[11px] pb-[13px] px-6 md:px-8 border border-white/10 hover:border-brand-secondary/50 hover:bg-white/10 transition-all duration-500 shadow-2xl shadow-brand-dark/20">
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

export default Scentwave;
