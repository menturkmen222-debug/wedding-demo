import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  date: z.date({ required_error: "A date is required." }),
  guests: z.string().min(1, "Please select an estimated guest count"),
  source: z.string().min(1, "Please tell us how you found us"),
  message: z.string().optional(),
});

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      guests: "",
      source: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground pt-32 pb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif text-white mb-4"
        >
          Contact Us
        </motion.h1>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div>
              <span className="font-script text-4xl text-primary mb-2 block">Get in Touch</span>
              <h2 className="text-3xl font-serif text-foreground mb-6">We'd love to hear from you.</h2>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Whether you have questions about our packages, want to check date availability, or are ready to schedule a private tour, our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="ml-4">
                  <h4 className="font-serif text-lg text-foreground">Location</h4>
                  <p className="text-muted-foreground mt-1">8772 Werger Road<br />Garrettsville, Ohio 44231</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="ml-4">
                  <h4 className="font-serif text-lg text-foreground">Phone</h4>
                  <a href="tel:330-527-2413" className="text-muted-foreground mt-1 hover:text-primary transition-colors block">330-527-2413</a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="ml-4">
                  <h4 className="font-serif text-lg text-foreground">Email</h4>
                  <a href="mailto:alfordsglen@gmail.com" className="text-muted-foreground mt-1 hover:text-primary transition-colors block">alfordsglen@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div className="ml-4">
                  <h4 className="font-serif text-lg text-foreground">Office Hours</h4>
                  <p className="text-muted-foreground mt-1">Mon-Fri: 9am - 5pm<br />Sat: By appointment</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm h-64 border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.2!2d-81.0!3d41.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE2JzQ4LjAiTiA4McKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Maps location of Alford's Glen"
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-border/50 h-fit">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4">Thank You!</h3>
                <p className="text-muted-foreground">Your inquiry has been sent successfully. We'll be in touch within 24 hours.</p>
                <Button 
                  onClick={() => { setIsSubmitted(false); form.reset(); }}
                  variant="outline" 
                  className="mt-8 text-primary border-primary hover:bg-primary/5"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-serif text-foreground mb-6">Send an Inquiry</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane@example.com" className="bg-background" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Phone *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(330) 555-1234" className="bg-background" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-foreground">Preferred Event Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal bg-background border-border",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Estimated Guest Count</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under50">Under 50</SelectItem>
                                <SelectItem value="50to100">50 - 100</SelectItem>
                                <SelectItem value="100to150">100 - 150</SelectItem>
                                <SelectItem value="150to200">150 - 200</SelectItem>
                                <SelectItem value="200plus">200+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="source"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">How did you hear about us?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="google">Google</SelectItem>
                                <SelectItem value="social">Social Media</SelectItem>
                                <SelectItem value="friend">Friend/Family</SelectItem>
                                <SelectItem value="magazine">Wedding Magazine</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Message / Special Requests</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us a little about your vision..." 
                              className="resize-none h-32 bg-background" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium text-lg shadow-md hover:-translate-y-0.5 transition-transform mt-4">
                      Send Inquiry
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
