import React from 'react';
import { useState } from "react";
import { Member, Sponsor, Announcement, FormData } from "@/lib/types";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MembersSection from "@/components/MembersSection";
import SponsorsSection from "@/components/SponsorsSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import Footer from "@/components/Footer";
import JoinForm from "@/components/JoinForm";
import { saveToCsv } from "@/lib/csvService";
import { toast } from "sonner";
import { saveFormToDatabase } from "@/lib/supabaseClient";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<"Join" | "Register">("Join");
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    className: "",
    institution: "",
  });

  const handleJoinClick = () => {
    setFormType("Join");
    setSelectedEvent("");
    setShowForm(true);
  };

  const handleRegisterClick = (eventTitle: string = "") => {
    setFormType("Register");
    setSelectedEvent(eventTitle);
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save form data to Supabase
      const result = await saveFormToDatabase({
        ...formData,
        eventTitle: selectedEvent
      }, formType);
      
      if (result.success) {
        // Fallback to CSV if needed
        saveToCsv({
          ...formData,
          submissionType: formType,
        });
        
        toast.success(`${formType === "Join" ? "Demande d'adhésion" : "Inscription à l'événement"} soumise avec succès !`);
      } else {
        toast.error(`Erreur: ${result.error}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    }
    
    setShowForm(false);
  };

  const members: Member[] = [
    {
      name: "MANAR SROUT",
      role: "PESIDENTE",
      age: 18,
      class: "ID101",
      image: "src/pages/img/manar.png",
    },
    {
      name: "YOUNES LHLIIB",
      role: "Vice-Président",
      age: 19,
      class: "DD101",
      image: "src/pages/img/youness.png",
    },
    {
      name: "JAD GHALALI",
      role: "TRESORIER",
      age: 19,
      class: "DD103",
      image: "src/pages/img/jad.png",
    },
    {
      name: "MOHAMED KOUATLY",
      role: "Responsable Communication interne et externe",
      age: 22,
      class: "ID204",
      image: "src/pages/img/mohammed.png",
    },
    {
      name: "YAZID ATTAF",
      role: "Responsable Sponsoring",
      age: 21,
      class: "TSDI 2",
      image: "src/pages/img/yazid.png",
    },
    {
      name: "KARIM AIT CHEIKH",
      role: "Responsable Social Media",
      age: 20,
      class: "ID103",
      image: "src/pages/img/karim.png",
    },
    {
      name: "ABD EL MONIM MAZGOURA",
      role: "Responsable Formtion et Projets",
      age: 19,
      class: "DD104",
      image: "src/pages/img/abdelmonim.png",
    },
{
      name: "JIHAD BENMOUSSA",
      role: "Responsable Organisation des Eveements",
      age: 20,
      class: "ID203",
      image: "src/pages/img/jihad.png",
    },
{
      name: "ILYAS ELBOUHIKHI",
      role: "2eme Responsable tresorier",
      age: 20,
      class: "ID103",
      image: "src/pages/img/ilyas.png",
    },
{
      name: "HAMZA OUBAHA",
      role: "2eme Responsable Social Media",
      age: 22,
      class: "DD104",
      image: "src/pages/img/hamza.png",
    },
{
      name: "ADAM MALAHI",
      role: "2eme Responsable Communication Interne et Externe",
      age: 19,
      class: "DD104",
      image: "src/pages/img/adam.png",
    },
{
      name: "AMMAR AMIRI",
      role: "2eme Responsable Sponsoring",
      age: 20,
      class: "ID103",
      image: "ammar",
    },
{
      name: "HIBA ELGHAZI",
      role: "2eme Responsable Formation etv Projets",
      age: 20,
      class: "ID103",
      image: "src/pages/img/hiba.png",
    },
{
      name: "IMANE JAADI",
      role: "2eme Responsable Organisation des Evenements",
      age: 20,
      class: "ID103",
      image: "src/pages/img/imane.png",
    },

  ];

  const sponsors: Sponsor[] = [
    
    {
      name: "OFPPT",
      image: "src/pages/img/ofppt.png",
      field: "Éducation"
    },
    {
      name: "Mr.BOUSETTA IBRAHIM",
      field: "DIRECTEUR ISFO",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Mr.KAMAL DAOUDI",
      field: "DEVELOPPEMENT WEB",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Mme.HNANE BELAOUD",
      field: "DEVELOPEMENT RESEAUX",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
   
  ];

  const announcements: Announcement[] = [
    {
      title: "Hackathon Annuel",
      dateDebut: "15 Mai 2023",
      dateFin: "17 Mai 2023",
      description: "Un hackathon de 48 heures où les participants développent des projets innovants.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/HackathonMeetup.png",
    },
    {
      title: "Atelier Réseaux",
      dateDebut: "22 Juin 2023",
      dateFin: "23 Juin 2023",
      description: "Atelier dédié aux fondamentaux des réseaux informatiques et à la cybersécurité.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Networking_picture.png",
    },
    {
      title: "Conférence IA",
      dateDebut: "10 Septembre 2023",
      dateFin: "12 Septembre 2023",
      description: "Conférence sur l'intelligence artificielle et son impact dans le monde professionnel.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Artificial_Intelligence_%26_AI_%26_Machine_Learning_-_30212411048.jpg",
    },
    {
      title: "Hackathon Annuel",
      dateDebut: "15 Mai 2023",
      dateFin: "17 Mai 2023",
      description: "Un hackathon de 48 heures où les participants développent des projets innovants.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/HackathonMeetup.png",
    },
{
      title: "Hackathon Annuel",
      dateDebut: "15 Mai 2023",
      dateFin: "17 Mai 2023",
      description: "Un hackathon de 48 heures où les participants développent des projets innovants.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/HackathonMeetup.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar onJoinClick={handleJoinClick} />
      <main>
        <HeroSection onJoinClick={handleJoinClick} />
        <MembersSection members={members} />
        <SponsorsSection sponsors={sponsors} />
        <AnnouncementsSection
          announcements={announcements}
          onRegisterClick={handleRegisterClick}
        />
      </main>
      <Footer />
      <JoinForm
        isOpen={showForm}
        formType={formType}
        onClose={() => setShowForm(false)}
        initialData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        eventTitle={selectedEvent}
      />
    </div>
  );
};

export default Index;
