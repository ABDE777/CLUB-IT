import React, { useRef, useEffect, useState } from 'react';
import { AnimatedCard } from './ui/AnimatedCard';
import { Member } from '@/lib/types';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MemberCardProps {
  member: Member;
  index: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px 0px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
          duration: 0.5, 
          delay: index * 0.1,
          type: "spring", 
          stiffness: 100 
        }
      });
    }
  }, [controls, isInView, index]);
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={controls}
      className="h-[450px] w-full flex flex-col items-center justify-center p-6 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatedCard 
        hoverEffect={true} 
        className={`h-full w-full flex flex-col items-center justify-center transform transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'} bg-gray-900/80 border border-primary/30 relative overflow-hidden group`}
      >
        {/* Futuristic glow effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full mx-auto object-contain transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
        
        <div className="p-4 w-full relative z-10">
          <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-primary transition-colors duration-300">{member.name}</h3>
          <p className="text-primary font-medium mb-2">{member.role}</p>
          <div className="flex space-x-4 text-sm text-gray-300">
            <span>Âge: {member.age}</span>
            <span>Classe: {member.class}</span>
          </div>
          
          {/* Futuristic hover info panel */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-primary/40 backdrop-blur-sm p-4 transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <p className="text-white font-medium text-sm">
Passionné par l'informatique et la technologie, je suis un membre actif du club IT, où je développe mes compétences en matière d'innovation et de collaboration. J'y participe à divers projets qui renforcent mon expertise dans le domaine technologique.            </p>
          </div>
        </div>

        {/* Futuristic particle effect */}
        {isHovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-primary/80"
              animate={{
                x: [0, 100, 200, 0],
                y: [0, 50, 100, 0],
                opacity: [1, 0.8, 0.6, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-white/60"
              animate={{
                x: [200, 100, 0, 200],
                y: [100, 50, 0, 100],
                opacity: [0.6, 0.8, 1, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear"
              }}
            />
          </div>
        )}
      </AnimatedCard>
    </motion.div>
  );
};

// Orbital background elements
const FuturisticBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {/* Gradient orbs */}
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: ['0%', '80%', '0%'],
            y: ['0%', '40%', '0%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
          style={{ top: '-20%', left: '-10%' }}
        />
        
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            x: ['100%', '20%', '100%'],
            y: ['50%', '0%', '50%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
          style={{ bottom: '-20%', right: '-10%' }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoMnYyaC0ydi0yem0tNCAyaDJ2LTJoLTJ2MnptLTQtMmgydjJoLTJ2LTJ6bS00IDJoMnYtMmgtMnYyem0tNCAwaDJ2MmgtMnYtMnptLTQgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>
    </div>
  );
};

interface MembersSectionProps {
  members: Member[];
}

const MembersSection: React.FC<MembersSectionProps> = ({ members }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8, 
          ease: "easeOut" 
        }
      });
    }
  }, [isInView, controls]);
  
  return (
    <section id="members" className="py-24 bg-gray-900 relative">
      <FuturisticBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
          >
            Notre Équipe
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-display font-semibold mb-6 text-white"
          >
            <span className="bg-gradient-to-r from-white to-primary/70 bg-clip-text text-transparent">
              Rencontrez les Membres de Notre Club
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-300"
          >
            Un groupe passionné de jeunes talents dédiés à l'innovation technologique et au développement des compétences.
          </motion.p>
        </motion.div>
        
        <div ref={sectionRef}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {members.map((member, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-1/2 lg:basis-1/3 h-[450px]"
                >
                  <MemberCard member={member} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-12 gap-4">
              <CarouselPrevious 
                className="static translate-y-0 h-12 w-12 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 focus:ring-2 focus:ring-primary/30" 
              />
              <CarouselNext 
                className="static translate-y-0 h-12 w-12 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 focus:ring-2 focus:ring-primary/30" 
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
