
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import EventCreationForm from "@/components/EventCreationForm";
import { useToast } from "@/components/ui/use-toast";

const CreateEvent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to create an event.",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [user, navigate, toast]);

  if (!user) return null;

  return (
    <>
      <Navbar />
      <main className="container py-6">
        <h1 className="text-3xl font-bold mb-2">Create a Sports Event</h1>
        <p className="text-muted-foreground mb-6">
          Fill out the form below to create and host a new sports event
        </p>
        
        <div className="max-w-2xl mx-auto">
          <EventCreationForm />
        </div>
      </main>
    </>
  );
};

export default CreateEvent;
